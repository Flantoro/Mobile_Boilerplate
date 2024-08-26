import { config as sharedConfig } from "./wdio.conf.js";
import dotenv from "dotenv";
dotenv.config();
export const config = {
  ...sharedConfig,
  user: process.env.LAMBDATEST_USERNAME,
  key: process.env.LAMBDATEST_KEY,
  product: "appAutomation",
  services: [
    [
      "lambdatest",
      {
        tunnel: true,
        app: "",
        build: "Test Build",
        name: "Calculator Test",
        platformName: "Android",
        deviceName: "Pixel 5",
        platformVersion: "12",
        automationName: "UiAutomator2",
        visual: true,
        video: true,
        network: true,
        console: true,
      },
    ],
  ],
};
