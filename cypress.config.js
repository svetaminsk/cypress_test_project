const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);

  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file");
    return {};
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  projectId: 'mz9kjj',
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/**/*.{js,jxs,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/other/*.js",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
    configFile: 'reporter-config.json',
    },
    retries: {
      runMode: 0,
      openMode: 1
    },
    env: {
      first_name: "Sarah",
      webdriveruni_website: "http://www.webdriveruniversity.com/"
    },
    baseUrl: "http://www.webdriveruniversity.com/"
  }
});
