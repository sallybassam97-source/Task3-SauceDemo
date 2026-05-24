import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import {addCucumberPreprocessorPlugin} from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",

    async setupNodeEvents(on, config) {
      // Add cucumber plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Use esbuild bundler
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    baseUrl:"https://www.saucedemo.com/",
   // viewportWidth: 440,
   // viewportHeight: 400,
   // watchForFileChanges: false, 
   screenshotOnRunFailure : false,
   screenshotsFolder: "QAScreenshot",
   videosFolder: "QAVideos",
   trashAssetsBeforeRuns: true, 
   video: false,
   videoCompression: 20, 
   reporter: "mochawesome",
   reporterOptions: {
    reportDir: "cypress/QAReport",
    overwrite: false,
    html: true, 
    JSON: false, 
    timestamp: "mmddyy_HHMMss"

   }

  },
});

