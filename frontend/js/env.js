// ============================================
// CONFIGURACIÓN DE ENTORNOS
// ============================================

// Cambia este valor a 'local' o 'produccion' según el entorno
const ENVIRONMENT = 'produccion'; // 'local' o 'produccion'

const API_URLS = {
  local: 'http://localhost:3000',
  produccion: 'https://lsaf.gestion-vuelos.com'
};


const BASE_API_URL = API_URLS[ENVIRONMENT];

// Hacer global para el navegador
if (typeof window !== 'undefined') {
  window.BASE_API_URL = BASE_API_URL;
  window.ENVIRONMENT = ENVIRONMENT;
}

// Exportar para Node.js o usar global en navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BASE_API_URL, ENVIRONMENT };
}
