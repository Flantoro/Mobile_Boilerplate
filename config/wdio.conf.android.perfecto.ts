import { hostname } from "os";
import { config as sharedConfig } from "./wdio.conf.js";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
export const config = {
  ...sharedConfig,
  hostname: "trial.app.perfectomobile.com",
  path: "/nexperience/perfectomobile/wd/hub",
  port: 443,
  protocol: "https",

  capabilities: [
    {
      //appPackage: "apps/android/calculator.apk",
      app: "PRIVATE:calculator.apk",
      //cloud: "trial.app",
      securityToken: process.env.PERFECTO_SECURITY_TOKEN,
      deviceName: "37271FDJH008ER",
      //platformName: "Android",
      // #in case of application testing instead of browser name
      // #appPackage: 'com.linkedin.android'
      // #app: 'PRIVATE:PMTest-v1.0.apk'
    },
  ],
};
