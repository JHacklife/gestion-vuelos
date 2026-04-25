// ============================================
// CONFIGURACIÓN DE ENTORNOS BACKEND
// ============================================

const ENVIRONMENT = process.env.NODE_ENV === 'production' ? 'produccion' : 'local';

const FRONTEND_ORIGINS = {
  local: [
    'http://localhost:5500',
    'http://127.0.0.1:5500'
  ],
  produccion: [
    'https://lsaf.gestion-vuelos.com',
    'https://gestion-vuelos.com',
    'https://www.gestion-vuelos.com'
  ]
};

module.exports = {
  ENVIRONMENT,
  FRONTEND_ORIGINS
};
