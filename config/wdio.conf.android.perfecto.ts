import { hostname } from "os";
import { config as sharedConfig } from "./wdio.conf.js";
import dotenv from "dotenv";
dotenv.config();
export const config = {
  ...sharedConfig,
  hostname: "trial.perfectomobile.com",
  path: "/nexperience/perfectomobile/wd/hub",
  port: 443,
  protocol: "https",

  capabilities: [
    {
      app: "PRIVATE:calculator.apk",
      securityToken: process.env.PERFECTO_SECURITY_TOKEN,
      deviceName: "37271FDJH008ER",
      automationName: "UiAutomator2",
      waitForAvailableLicense: true,
    },
  ],
  maxInstances: 1,
  connectionRetryCount: 3,
};
