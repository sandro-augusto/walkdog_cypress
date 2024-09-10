const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
        return config;
    },
  },
});
