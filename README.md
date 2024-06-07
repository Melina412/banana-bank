# Banana Bank

🔗 [gh-pages deployment](https://melina412.github.io/banana-bank/)

![preview](/public/banana-bank-preview.png)

## Vite + React Projekte deployen auf GitHub Pages mit `gh-pages`

**❗️❗️ ACHTUNG: Das geht nur bei static sites also ohne react router, weil die vite config base sonst als route fehlinterpretiert wird**

gh-pages als dev dependency installieren

```
npm i gh-pages --save-dev
```

in der package.json diese beiden scripte ergänzen und das github repo als pfad für die homepage angeben

`package.json:`

```json
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
"homepage": "https://melina412.github.io/banana-bank/"
```

wichtig: in vite config die eigenschaft `base` ergänzen und hier den namen des git repo angeben, weil vite sonst nur die relativen pfade für die dist files im source code angibt

`vite.config.js:`

```js
export default defineConfig({
  plugins: [react()],
  base: '/banana-bank/', // <- git repo name
});
```

dann das deployment script ausführen

```
npm run deploy
```

nun wird der build und deploy prozess von github actions ausgeführt. es wird eine neue branch `gh-pages` erstellt und die sollte automatisch als source festgelegt werden (ggf. unter settings -> pages checken).

fertig ✨
