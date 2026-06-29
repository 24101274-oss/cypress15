const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    numTestsKeptInMemory: 0,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'electron') {
          // Apaga la aceleración gráfica para evitar el crash en GitHub Actions
          launchOptions.args.push('--disable-gpu');
          // Optimiza el uso de la memoria RAM del servidor
          launchOptions.args.push('--disable-dev-shm-usage');
        }
        return launchOptions;
      });
    },
  },
});