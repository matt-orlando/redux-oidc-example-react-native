# Example usage of redux-oidc in React Native app
A bare minimum React Native App, OIDC Provider, and API (coming soon) all running locally with a few simple commands.

## Setup
The two folders, OIDCProvider and ReactNativeApp each have their package.json file.

### OIDC Provider
Starts a node server on port 3000.
1. Navigate into OIDCProvider and run `npm i` to download packages
2. Run `npm run start` or double click on `run-start.cmd`

### ReactNativeApp
Sets up a local development environment for the react-native app.
1. Follow React Native's [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) instructions for Building Projects with Native Code. This should result in a working emulator and the `react-native` command line interface.
2. Navigate into ReactNativeApp and run `npm i` to download packages
3. Launch emulator
4. If using Android Emulator see next section
5. Run `react-native run-android` or `react-native run-ios`

##### Allow Android Emulator to Communicate With Localhost
By default all localhost ports on the Android Emulator will point to the Android Emulator, but we need localhost:3000 to point to your computer running OIDC Provider instead. You can tell the emulator to do this by performing the following steps OR by double clicking on `android-emulator-adb-reverse.cmd`.
1. Navigate to `[Your Android SDK Directory]\platform-tools`
2. Open a command window
3. Run `adb reverse tcp:3000 tcp:3000`

##### Troubleshooting
If the React Packager window closes due to an error just re-launch it using `react-native start`, then close and re-open the app through the emulator UI.

### Sign In
Use the following emails with any password to sign in:
1. foo@example.com
2. bar@example.com

### TODO
* Build API to return a simple todo list for each user of OIDC Provider and update ReactNativeApp to use API.
* Work with oidc-client and redux-oidc maintainers to reduce code needed by consumers.
* Add silent renew
* Add session monitoring
