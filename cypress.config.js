const { defineConfig } = require("cypress");
const { plugin: cypressGrepPlugin } = require("@cypress/grep");
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    reportFilename: "test-results",
    overwrite: false,
    charts: true,
    reportPageTitle: "Cypress Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    saveJson: true,
  },
  video: false,
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')
      cypressGrepPlugin(config)
      return config
    },
    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true,
    },
  },
});
