// Apagamos la GPU desde el entorno para que Electron no colapse en GitHub Actions
process.env.ELECTRON_EXTRA_LAUNCH_ARGS = '--disable-gpu';

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    setupNodeEvents(on, config) {
      // Dejamos esto vacío para evitar el warning de opciones no soportadas
    },
  },
});