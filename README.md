# MealDBApp

Expo app that searches recipes by ingredient. Type an ingredient, tap Search, and it lists the matching meals from TheMealDB with a thumbnail of each. It shows the meal name and picture only, there's no recipe view.

Stack: JavaScript, React Native 0.72, Expo SDK 49, TheMealDB API (`filter.php?i=<ingredient>`). All the code is in `App.js`.

Run it:

```
npm install
npm start
```

`npm start` runs `expo start`. `npm run android` and `npm run ios` are in `package.json` too. The project is on Expo SDK 49, so Expo Go has to be a version that supports SDK 49. The API call uses TheMealDB's public test key `1`, so there's no key to set up.

Status: course project, mobile programming at a university of applied sciences, September 2023. No tests.
