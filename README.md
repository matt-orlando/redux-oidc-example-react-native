# Example usage of redux-oidc in React Native app
A bare minimum React Native App, OIDC Provider, and API (coming soon) all running locally with a few simple commands.

## Setup
The two folders, OIDCProvider and ReactNativeApp each have their package.json file.

### OIDC Provider
Starts a node server on port 3000.
1. Navigate into OIDCProvider and run `npm i` to download packages
2. Run `npm run start` or double click on `run-start.cmd`

### ReactNativeApp (Android)
1. Follow React native's [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) instructions for Building Projects with Native Code
2. Allow the android emulator to communicate with your local OIDC Provider
  1. Navigate to `[Your Android SDK Directory]\platform-tools`
  2. Open a command window
  3. Run `adb reverse tcp:3000 tcp:3000`
    * Note: You have to run this again each time you open the emulator
3. In the ReactNativeApp folder run `npm i`
3. Run `react-native run-android` or double click on `run-android.cmd`
  * If the React Packager window closes due to an error just re-launch it using `react-native start`, then close and re-open the app through the emulator UI.

### Sign In
Use the following emails with any password to sign in:
1. foo@example.com
2. bar@example.com

### TODO
* Build API to return a simple todo list for each user of OIDC Provider and update ReactNativeApp to use API.
* Work with oidc-client and redux-oidc maintainers to reduce code needed by consumers.
* Add silent renew
* Add session monitoring
