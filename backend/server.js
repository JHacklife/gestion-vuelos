// Forzar zona horaria UTC
process.env.TZ = 'UTC';
console.log('🕐 Zona horaria configurada a:', new Date().toString());

// Forzar variables de entorno para desarrollo
process.env.JWT_SECRET = process.env.JWT_SECRET || 'mi_clave_super_secreta_airforce_2024';
process.env.PORT = process.env.PORT || 3000;

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Cargar variables de entorno
dotenv.config();

// Importar base de datos
const db = require('./config/database');

// Importar rutas
const authRoutes = require('./routes/auth');
const aeronavesRoutes = require('./routes/aeronaves');
const librosRoutes = require('./routes/libros');
const solicitudesRoutes = require('./routes/solicitudes');
const pilotosRoutes = require('./routes/pilotos');
const adminRoutes = require('./routes/admin');

// Crear aplicación Express
const app = express();

// ============================================
// MIDDLEWARES
// ============================================

// Configurar CORS para desarrollo y producción
app.use(cors({
  origin: ['http://localhost:5500', 'http://127.0.0.1:5500', 'https://lsaf.gestion-vuelos.com'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================================
// SERVIR ARCHIVOS ESTÁTICOS (IMÁGENES)
// ============================================

const uploadsDir = path.join(__dirname, 'uploads');
const subDirs = ['pilotos', 'aeronaves', 'ranks', 'observaciones'];

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

subDirs.forEach(dir => {
  const dirPath = path.join(uploadsDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
console.log('📁 Sirviendo archivos estáticos desde:', path.join(__dirname, 'uploads'));

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// ============================================
// RUTAS
// ============================================

app.use('/api', authRoutes.router);
app.use('/api/aeronaves', aeronavesRoutes);
app.use('/api/libros', librosRoutes);
app.use('/api/solicitudes', solicitudesRoutes);
app.use('/api/pilotos', pilotosRoutes);
app.use('/api/admin', adminRoutes);

// ============================================
// RUTA PRINCIPAL
// ============================================

app.get('/', (req, res) => {
  res.json({ 
    mensaje: '🚁 API de la Fuerza Aérea funcionando correctamente',
    version: '1.0.0'
  });
});

// ============================================
// MANEJO DE ERRORES
// ============================================

app.use((req, res) => {
  res.status(404).json({ 
    error: 'Ruta no encontrada',
    mensaje: `La ruta ${req.method} ${req.url} no existe`
  });
});

app.use((err, req, res, next) => {
  console.error('❌ Error no manejado:', err);
  res.status(500).json({ 
    error: 'Error interno del servidor',
    mensaje: err.message 
  });
});

// ============================================
// INICIAR SERVIDOR
// ============================================

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`
╔══════════════════════════════════════════════════════════╗
║     🚁 LSAF Air Force - Sistema de Gestión de Vuelos     ║
╠══════════════════════════════════════════════════════════╣
║  Servidor corriendo en: http://localhost:${PORT}          ║
║  API disponible en: http://localhost:${PORT}/api          ║
╚══════════════════════════════════════════════════════════╝
  `);
});

process.on('SIGINT', () => {
  console.log('\n🛑 Cerrando servidor...');
  server.close(() => {
    console.log('✅ Servidor cerrado');
    process.exit(0);
  });
});

module.exports = app;