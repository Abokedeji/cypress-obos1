
  const { defineConfig } = require('cypress');
  
  module.exports = defineConfig({
      e2e: {
          baseUrl: 'https://staging.trymima.com/',
          viewportHeight: 960,
          viewportWidth: 1520,
          defaultCommandTimeout: 15000,
          chromeWebSecurity: false,
          setupNodeEvents(on, config) {
            // implement node event listeners here
          },
      },
  });
      