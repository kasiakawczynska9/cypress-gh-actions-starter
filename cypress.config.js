const { defineConfig } = require("cypress");
const grep = require("@cypress/grep");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    reportFilename: "test-results",
    overwrite: false,
    charts: true,
    reportPageTitle: "Cypress Report",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  video: false,
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      // uruchom plugin raportera
      require("cypress-mochawesome-reporter/plugin")(on);
      // uruchom grep plugin (ważne: bez /src/plugin)
      grep(config);
      return config;
    },
  },
});
