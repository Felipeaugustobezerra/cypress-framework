const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://app.qawithjunior.com/",
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 5000,
    screenshotOnRunFailure: true,
    video: true,
    chromeWebSecurity: false,
  },
});
