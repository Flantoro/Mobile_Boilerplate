import { config as sharedConfig } from "./wdio.conf.js";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
export const config = {
  ...sharedConfig,
  user: process.env.SAUCELABS_USER,
  key: process.env.SAUCELABS_KEY,
  hostname: "ondemand.eu-central-1.saucelabs.com",

  capabilities: [
    {
      platformName: "Android",
      "appium:app": "storage:filename=Android-MyDemoAppRN.1.3.0.build-244.apk", // The filename of the mobile app
      "appium:deviceName": "Android GoogleAPI Emulator",
      "appium:platformVersion": "12.0",
      "appium:automationName": "UiAutomator2",
      "sauce:options": {
        build: "appium-build-YS3QQ",
        name: "Automated Sauce Labs Tests",
        deviceOrientation: "PORTRAIT",
      },
    },
  ],
};
