"Real programmers don't document. If it was hard to write, it should and better be hard to understand."
            ~Anonymous

 - This React Native App is configured with 3 environment [development, staging, production] to replicate a real-world scenario, however the Mock API URL for this assignment is the same across all the 3 env files.

 - This App hence has custom scripts to combine setEnvironment / clean / run / build, actions for all 3 environments and 2 build types (debug and release).

 - All features built are common to both iOS and Android, i.e. -
   * Splash Screen
   * Onboarding Screen
   * Upstox App Icons and Brand Logos
   * Stack with protectedRouteHOC + mock login
   * API call using ENV variable
   * State Management : Redux Toolkit
   * Middleware : Saga
   * Flatlist for Portfolio Per Stock Data (pull to refresh enabled)
   * Custom Bottom Sheet for Portfolio Summary (pressable & draggable)
 

To get started with setting up the App, the following scripts can be executed from the root of the project :
1. Make sure to use Node v18 and above.
2. npm install --save

iOS : 
1. npm run ios:pod-install
2. npm run ios:prod (runs app with .env.production)
3. npm run ios:prod-release (builds production-release IPA and gives path of the ZIP, w/o releaseSigning)

Android :
1. npm run aos:gradle-reset
2. npm run aos:prod (runs app with .env.production)
3. npm run aos:prod:release-apk (builds production-release APK and opens the Output folder of APK, w/o releaseSigning)


