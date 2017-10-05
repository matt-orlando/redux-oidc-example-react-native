@echo off
echo If you hate how long this takes then just run "npm run start" to simply run the packager then launch the already installed app from your android device. This only needs to be run if you made changes to native code.
@echo on
cd android
call gradlew clean
cd ../

@echo off
echo react-native run-android
@echo on
call react-native run-android
pause