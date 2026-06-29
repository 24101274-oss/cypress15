const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://labs15c-kum941qfh-ados-projects-0eb7f124.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
