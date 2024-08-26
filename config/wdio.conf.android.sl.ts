import { config as sharedConfig } from "./wdio.conf.js";
import dotenv from "dotenv";
dotenv.config();
export const config = {
  ...sharedConfig,
  user: process.env.SAUCELABS_USER,
  key: process.env.SAUCELABS_KEY,
  hostname: "ondemand.eu-central-1.saucelabs.com",

  capabilities: [
    {
      platformName: "Android",
      "appium:app": "storage:filename=calculator v8.4 for Sauce Labs.apk",
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
