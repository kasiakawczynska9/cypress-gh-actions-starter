const { defineConfig } = require("cypress");

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
      return config;
    },
    env: {
      // v5: to włącza *filtrowanie całych speców* po grep/tagach
      grepFilterSpecs: true,
      // (opcjonalnie) nie pokazuj w raporcie testów odfiltrowanych
      grepOmitFiltered: true,
    },
  },
});
