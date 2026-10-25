# MealDBApp

Try it in the browser: https://veetihietasalo.github.io/MealDBApp/
It's the web build of the mobile app, so the layout is made for a phone screen.

Expo app that searches recipes by ingredient. Type an ingredient, tap Search, and it lists the matching meals from TheMealDB with a thumbnail of each. It shows the meal name and picture only, there's no recipe view.

Stack: JavaScript, React Native 0.72, Expo SDK 49, TheMealDB API (`filter.php?i=<ingredient>`). All the code is in `App.js`.

Run it:

```
npm install
npm start
```

`npm start` runs `expo start`. `npm run android` and `npm run ios` are in `package.json` too. The project is on Expo SDK 49, so Expo Go has to be a version that supports SDK 49. The API call uses TheMealDB's public test key `1`, so there's no key to set up.

Web build:

```
npm run build:web
npm run deploy:web
```

`build:web` runs `expo export --platform web` (Metro) into `dist/`, then `scripts/web-relative-paths.js` makes the paths relative. GitHub Pages serves the app from `/MealDBApp/` and Expo SDK 49 has no base URL setting. `deploy:web` builds and pushes `dist/` to the `gh-pages` branch. The web build calls TheMealDB straight from the browser, which works because the API allows any origin (CORS `*`).

Status: course project, mobile programming at a university of applied sciences, September 2023. No tests.
