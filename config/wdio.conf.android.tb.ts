import { config as sharedConfig } from "./wdio.conf.js";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
export const config = {
  ...sharedConfig,
  capabilities: [
    {
      "appium:deviceName": "Pixel 3",
      "appium:platformVersion": "10",
      "appium:app": "tb://c255a12b42f9db6b249808cd",
      platformName: "Android",
      "tb:options": {
        build: `TestingBot W3C Mobile Web build-${new Date().getTime()}`,
      },
    },
  ],
  logLevel: "info",
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
