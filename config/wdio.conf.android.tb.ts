import { config as sharedConfig } from "./wdio.conf.js";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
export const config = {
  ...sharedConfig,
  capabilities: [
    {
      // All vendor specific, in this case Appium capabilities, should be
      // put in vendor prefixed options, see
      // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
      // All Appium capabilities, see
      // http://appium.io/docs/en/writing-running-appium/caps/
      // should be prefixed with `appium:{capability-name}`
      "appium:deviceName": "Pixel 3",
      "appium:platformVersion": "10",
      // For the W3C capabilities, please check
      // https://www.w3.org/TR/webdriver1/#capabilities
      "appium:app": "tb://c255a12b42f9db6b249808cd",
      platformName: "Android",
      // All vendor specific, in this case TestingBot specific capabilities, should be
      // put in vendor prefixed options, see
      // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
      "tb:options": {
        build: `TestingBot W3C Mobile Web build-${new Date().getTime()}`,
      },
    },
  ],
  logLevel: "debug",
  coloredLogs: true,
  screenshotPath: "screenshots",
  waitforTimeout: 200000,
  framework: "mocha",
  services: [["testingbot"]],
  user: process.env.TESTINGBOT_USER,
  key: process.env.TESTINGBOT_KEY,

  reporters: ["dot"],
  reporterOptions: {
    outputDir: "./",
  },
};
