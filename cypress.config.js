const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.mercadolibre.com.ar',
    watchForFileChanges: false,
    viewportWidth: 1600,
    viewportHeight: 900,
    reporter: 'mochawesome'
  },
});
