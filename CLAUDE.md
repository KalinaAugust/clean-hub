# CLAUDE.md

## Project Overview

Clean-Hub is a React-based cleaning service booking platform for university dormitories, featuring multilingual support (Russian/Chinese) and dynamic pricing via Google Sheets.

## Tech Stack

- **Framework:** React 18.2.0 (Create React App)
- **Routing:** React Router DOM v6
- **State:** Redux Toolkit + React-Redux
- **Styling:** SCSS/Sass with component-scoped files
- **Key libs:** React Select, React Modal, React Responsive Carousel, Remarkable (markdown), UUID, jQuery

## Commands

```bash
npm start       # Dev server on localhost:3000
npm run build   # Production build
npm test        # Run tests
```

## Architecture

### State Management

Redux store (`src/store/`) with a single `appSlice`:
- `language`: `'RU'` | `'CN'`
- `prices`: pricing data keyed by hostel
- `sheetsData`: raw Google Sheets data
- `isLoading` / `isInitialized` / `error`

On app startup, `initializeApp()` thunk fetches prices from Google Sheets (CSV).

### Content & i18n

- All page text lives in `src/content/pageContent.js` as `RU`/`CN` keyed objects
- `src/hooks/usePageContent.js` — custom hook that returns translated content with dynamic pricing injected from Redux
- No i18n library; content is selected by `language` state

### Routing (`src/App.jsx`)

| Path | Component |
|---|---|
| `/` | CleaningForEviction |
| `/maintenance-cleaning` | MaintenanceCleaning |
| `/one-time-cleaning` | OneTimeCleaning |
| `/wallpaper` | Wallpaper |
| `/mold-removal` | MoldRemoval |
| `/wall-repair` | WallRepair |
| `/order` | OrderPage |
| `/privacy-policy` | PrivacyPolicy |
| `/public-offer` | PublicOffer |
| `/thank-you` | ThankYouPage |

### Services

- `src/services/googleSheetsService.js` — fetches a public Google Sheet as CSV and parses it into JS objects; provides dynamic pricing fallback

### Styling

- Global variables/mixins: `src/utilities/variables.scss`
- Breakpoint mixins: `on-small-screen` (1100px), `on-tablet` (768px), `on-mobile` (480px)
- Primary color: `#559EC7`, Accent: `#FF9312`
- Each component has a co-located `.scss` file

### Key Components

- **Header** — navigation, language switcher, mobile menu
- **OrderPage** — multi-step booking form using `useReducer`; hostel selection → service selection → customer details; real-time validation
- **PriceCalculator** — dynamic pricing display with hostel selector
- **FirstSection / GuideSection / WhatWeClean / FAQ** — page section components

## File Conventions

- Components: `src/components/<name>/ComponentName.jsx` + `component-name.scss`
- Pages: `src/pages/<PageName>.jsx` (compose section components)
- All component styles are co-located with their component
