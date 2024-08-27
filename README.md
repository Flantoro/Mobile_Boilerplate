# e2e-tests, wdio v8, appium v2, hybrid app (android), browserstack, saucelabs, perfecto.io, lambdatest and testingBot

e2e-test template with hybrid mob apps

```sh

```

## Setup

### Install software and check out the project

- Download and install Node.JS ( at least 16.17 )
- Typescript 5+ version
- Install Visual Studio Code
- Clone and checkout the github project
- npm install

## Setup with Browserstack

- Add .env file with next variables `BROWSERSTACK_USERNAME`, `BROWSERSTACK_ACCESS_KEY`
- Sign in inside browserstack and upload your mobile apps (.apk and .ipa)
- Update `.env` file
- `npm run test:android:bs`

## Setup with Sauce Labs

- Add .env file with next variables `SAUCELABS_USER`, `SAUCELABS_USER`
- Sign in inside Sauce Labs and upload your mobile apps (.apk and .ipa)
- Update `.env` file
- `npm run test:android:sl`

## Setup with Perfecto.io

- Add .env file with next variable `PERFECTO_SECURITY_TOKEN`
- Sign in inside the Perfecto.io and upload your mobile apps (.apk and .ipa)
- Update `.env` file
- `npm run test:android:perfecto`

## Setup with LambdaTest

- Add .env file with next variables `LAMBDATEST_USERNAME`, `LAMBDATEST_KEY`
- Sign in inside Sauce Labs and upload your mobile apps (.apk and .ipa)
- Update `.env` file
- `npm run test:android:lambda`

## Setup with TestingBot

- Add .env file with next variables `TESTINGBOT_USER`, `TESTINGBOT_KEY`
- Sign in inside Sauce Labs and upload your mobile apps (.apk and .ipa)
- Update `.env` file
- `npm run test:android:tb`

### How to run the android tests on windows

```sh

```

We defined a default configuration (config/wdi.conf.local.ts) for Android which will be executed when you run "npm run test:local".

Be sure that you have:

- Install Java latest via https://www.java.com/ru/download/manual.jsp
- Set the environment variable called `JAVA_HOME` to the jre directory (C:\Program Files\Android\Android Studio\jre\)
- Install Node v16+ https://nodejs.org/uk
- installed the latest Android Studio version https://developer.android.com/studio
- Add `ANDROID_HOME` to path in OS system variables
- Install Appium by command: `npm install -g appium`
- Install Appium inspector v2+ https://github.com/appium/appium-inspector/releases
- Install Appium drivers (uiautomator2, xcuitest and etc..; `appium driver install uiautomator2`)
- Allow virtualization in BIOS https://www.youtube.com/watch?v=UgDxU0jZAe4
- plugged in any android device into your computer. Leave it unlocked.
- allowed USB-Debugging on the connected android device
- run `adb devices` to check device name( device id )
- set the platform version, device name and path to apps(apk/ipa) inside android config (config/wdio.conf.local.js) to the version on your android device.
- run `appium` in cmd
- now you can interact with your apps through the appium inspector on your PC

### Linter

We use eslint to lint the typescript files. The prettier plugin in eslint tries to autoformat the code on every run.

### Test structure

All test cases should be coded inside the test folder. There you can organize tests for different apps (e.g. msb-app) and define generic classes with getters and setters to use classes those methods inside other classes.

We work with the Page Object Pattern described in <https://webdriver.io/docs/pageobjects.html>. The main idea is to encapsulate logic into page classes and use the logic in the spec files to run the tests.
For instance we defined the LoginPage and the element as attributes in a class and reuse them in the code.
