# Minimalistisk portfolio — React + Vite

Et nyt portfolio-udgangspunkt til Mille Lauridsen. Designet er inspireret af principperne bag moderne produktlandingssider: stor typografi, masser af luft, rolige animationer og tydelige visuelle projekter. Det kopierer ikke Apples indhold eller assets.

## 1. Start projektet

Åbn Terminal, gå ind i mappen og kør:

```bash
npm install
npm run dev
```

Terminalen viser en lokal adresse, typisk `http://localhost:5173`. Åbn den i din browser.

## 2. Mappestrukturen

```text
src/
├── assets/images/          Dine egne billeder, mockups og videoer
├── components/             Dele som bruges på flere sider
│   ├── Footer/
│   ├── Header/
│   ├── ProjectHero/
│   └── Reveal/
├── data/projects.js        Alt projektindhold samlet ét sted
├── pages/                  Én mappe pr. hovedområde
│   ├── AboutPage/
│   ├── ContactPage/
│   ├── HomePage/
│   ├── ProjectPage/
│   ├── ServicesPage/
│   └── WorkPage/
├── styles/globals.css      Kun globale grundregler
├── App.jsx                 Routes og fælles layout
└── main.jsx                Starter React
```

Hver komponent og side har sin egen CSS Module-fil. Det gør det nemt at ændre én del uden at ødelægge resten.

## 3. Det skal du ændre først

1. Ret mailadressen og LinkedIn-linket i `src/components/Footer/Footer.jsx`.
2. Ret teksterne på forsiden i `src/pages/HomePage/HomePage.jsx`.
3. Ret projekterne i `src/data/projects.js`. De bliver automatisk vist på Work-siden og får hver sin case-side.
4. Læg dine billeder i `src/assets/images/` og importér dem på projektsiden.
5. Erstat de grafiske placeholder-felter med dine egne billeder, videoer eller mockups.

Eksempel på et billede:

```jsx
import beerLabel from "../../assets/images/beer-label.jpg";

<img src={beerLabel} alt="Øletiket designet til Beer Labels-projektet" />
```

## 4. Tilføj en ny side

1. Opret `src/pages/MinNyeSide/MinNyeSide.jsx`.
2. Opret `src/pages/MinNyeSide/MinNyeSide.module.css`.
3. Importér siden i `src/App.jsx`.
4. Tilføj en ny `<Route path="/min-side" element={<MinNyeSide />} />`.
5. Tilføj linket i `src/components/Header/Header.jsx`.

## 5. GitHub Pages

Hvis siden ligger på `millehlauridsen-ops.github.io/portfolio/`, ret denne linje i `vite.config.js`:

```js
base: "/portfolio/",
```

Hvis du bruger et eget domæne eller `millehlauridsen-ops.github.io`, skal den blive:

```js
base: "/",
```

BrowserRouter kræver desuden en SPA fallback ved direkte besøg på undersider. Hvis du fortsætter med GitHub Pages, kan du enten bruge HashRouter eller tilføje en 404-fallback i dit deployment. Det tager vi, når du er klar til at lægge siden online.

## 6. Byg den færdige version

```bash
npm run build
```

Den færdige side oprettes i mappen `dist/`.
