const { defineConfig } = require("cypress");
const { plugin: cypressGrepPlugin } = require("@cypress/grep");
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
    html: false,
    json: true,
  },
  video: false,
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      cypressGrepPlugin(on, config);
      return config;
    },
    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true,
    },
  },
});
