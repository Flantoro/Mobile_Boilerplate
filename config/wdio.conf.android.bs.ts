import { config as sharedConfig } from "./wdio.conf.js";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
export const config = {
  ...sharedConfig,
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: "hub.browserstack.com",

  capabilities: [
    {
      "bstack:options": {
        deviceName: "Samsung Galaxy S22 Ultra",
        osVersion: "12.0",
        deviceOrientation: "portrait",
      },
    },
  ],
  services: [
    [
      "browserstack",
      {
        app: "bs://734c724215623f6a60de4c72fd3a8a60db7187b7",
        buildIdentifier: "${BUILD_NUMBER}",
        // opts: { forcelocal: false, localIdentifier: "webdriverio-appium-app-browserstack-repo" },
        browserstackLocal: true,
        testObservability: true,
        testObservabilityOptions: {
          projectName: "BrowserStack Android app testing",
          buildName: "browserstack Android build",
        },
        debug: true,
        networkLogs: true,
        consoleLogs: "warn",
      },
    ],
  ],
};
