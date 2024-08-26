import { config as sharedConfig } from "./wdio.conf.js";
import { join } from "path";
import dotenv from "dotenv";
dotenv.config();

export const config = {
  ...sharedConfig,
  port: 4723,
  services: ["appium"],
  appium: {
    args: ["--allow-insecure"],
  },
  capabilities: [
    {
      platformName: "Android",
      "appium:app": join(process.cwd(), "./apps/android/calculator.apk"),
      "appium:platformVersion": "10.0",
      "appium:automationName": "UiAutomator2",
    },
  ],
};
