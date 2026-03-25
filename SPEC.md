# Clean-Hub — Specification

## 1. Overview

Clean-Hub is a client-facing booking platform for professional cleaning services in university dormitories in Minsk, Belarus. It supports Russian and Chinese languages, displays dynamically priced services fetched from Google Sheets, and allows users to submit cleaning orders via a multi-step form.

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18.2.0 (Create React App) |
| Routing | React Router DOM v6 |
| State management | Redux Toolkit + React-Redux |
| Styling | SCSS/Sass (component-scoped) |
| Dropdowns | React Select |
| Markdown rendering | Remarkable |
| Form submission | jQuery AJAX → `mail.php` |
| Data source | Google Sheets (public CSV export) |
| Unique IDs | uuid |
| Modal | React Modal |
| Carousel | React Responsive Carousel |

---

## 3. Pages & Routes

| URL | Component | Description |
|---|---|---|
| `/` | `CleaningForEviction` | Cleaning for dorm eviction |
| `/maintenance-cleaning` | `MaintenanceCleaning` | Subscription-based maintenance cleaning |
| `/one-time-cleaning` | `OneTimeCleaning` | One-time cleaning |
| `/wallpaper` | `Wallpaper` | Wallpaper removal/installation |
| `/mold-removal` | `MoldRemoval` | Mold removal service |
| `/wall-repair` | `WallRepair` | Wall repair service |
| `/order` | `Order` | Multi-step booking form |
| `/privacy-policy` | `PrivacyPolicy` | Privacy policy |
| `/public-offer` | `PublicOffer` | Public offer agreement |
| `/thank-you` | `ThankYouPage` | Order confirmation |

---

## 4. Application Initialization

On startup, `App.jsx` checks `isInitialized` in Redux state. While `false`, a `<Loader />` spinner is shown. The `initializeApp()` thunk is dispatched from `index.js` and fetches data from two Google Sheets URLs:

1. **Prices sheet** — CSV with columns: `dorm`, `[service-name]`, … → parsed into `pricesData` keyed by dorm identifier
2. **Banner sheet** — CSV with columns: `text`, `show`, `color` → parsed into `bannerData` array

On success, `isInitialized` is set to `true` and the app renders. On failure, `isInitialized` is still set to `true` (graceful degradation — prices will be `undefined`).

---

## 5. Redux State

```
state.app {
  language:      'RU' | 'CN'
  pricesData:    { [dormKey]: { [serviceName]: number } }
  bannerData:    { text, show, color }[]
  isLoading:     boolean
  isInitialized: boolean
  error:         string | null
}
```

**Actions:**
- `setLanguage(lang)` — switch UI language

**Thunks:**
- `initializeApp()` — fetch and parse Google Sheets data

**Selectors:**
- `selectPrices(state)` → `state.app.pricesData`

---

## 6. Internationalization

No third-party i18n library is used. All copy lives in `src/content/pageContent.js` as plain JS objects with `RU` and `CN` variants. The `usePageContent()` hook merges static content with dynamic prices from Redux and returns a single content object consumed by components.

**Language is selected by the user** via a flag button in the Header. The selection is stored in Redux and persists for the session (not persisted to localStorage).

---

## 7. Dynamic Pricing

Prices are fetched at startup from Google Sheets and stored in Redux. The `usePageContent()` hook reads `pricesData` via `selectPrices` and injects individual prices into every service definition using optional chaining:

```js
price: reduxPrices.sverdlova34?.['one-time-cleaning__2-rooms']
```

If the sheet is unavailable, prices render as `undefined` (no price shown).

---

## 8. Dormitories

23 dormitory locations are supported across multiple universities:

| # | University | Address |
|---|---|---|
| 1 | БГУ | ул. Свердлова, 34 |
| 2 | БГУ | ул. Октябрьская, 2 |
| 4 | БГУ | ул. Чюрлениса, 7 |
| 4.1 | БГЭУ | ул. Чюрлениса, 1 |
| 4.2 | БГПУ | ул. Чюрлениса, 3 |
| 4.3 | МГЛУ | ул. Чюрлениса, 5 |
| 5 | БГУ | ул. Октябрьская, 4 |
| 6 | БГУ | ул. Октябрьская, 10 |
| 7 | БГУ | ул. Октябрьская, 10/a |
| 11 | БГУ | пр-т Дзержинского, 87 |
| 12 | БНТУ | пр-т Дзержинского, 83/16 |
| 15 | МГЛУ | пр-т Дзержинского, 97 |
| 16 | БГПУ | пер. Вузовский, 9/1 |
| 19 | БГКИ | ул. Рабкоровская, 15 |
| 20 | БГУКИ | ул. Рабкоровская, 13 |
| 21 | БГУФК | пр. Победителей, 107 |
| 22 | БГАМ | ул. Киселёва, 61 |
| 23 | БГМУ | пр-т Дзержинского, 93 |
| 24 | БГМУ | пр-т Дзержинского, 83/6 |
| 25 | БГМУ | пр-т Дзержинского, 83/7 |
| 26 | БГМУ | пр-т Дзержинского, 83/8 |
| 27 | БГТУ | ул. Белорусская, 19 |
| 28 | БГТУ | ул. Белорусская, 21 |

---

## 9. Service Types

| Service key | Description |
|---|---|
| `one-time-cleaning` | One-time block cleaning |
| `one-time-cleaning__2-rooms` | One-time, 2-room suite |
| `one-time-cleaning__3-rooms` | One-time, 3-room suite |
| `one-time-cleaning_general_1_room` | Common areas + 1 room |
| `maintenance-cleaning__2` | Subscription: 2 cleanings/month |
| `maintenance-cleaning__4` | Subscription: 4 cleanings/month |
| `cleaning-for-eviction` | Eviction cleaning (2-room) |
| `cleaning-for-eviction-2` | Eviction cleaning (3-room) |
| `cleaning-for-eviction-general` | Eviction — common areas only |

Available services vary per dormitory.

---

## 10. Booking Form (OrderPage)

Located at `/order`. Implemented with `useReducer`.

### Steps

**Step 1 — Dorm & Room**
- React Select dropdown with all dorm options
- Free-text room number input (required, min 1 char)

**Step 2 — Services**
- Checkbox list of services for the selected dorm
- Services and prices are dynamically loaded from Redux
- Total price is summed from all active (checked) services

**Step 3 — Customer Details**
| Field | Validation |
|---|---|
| Name | Required, min 1 char |
| Surname | Required, min 1 char |
| Phone | Required, min 9 chars |
| Email | Required, regex validation |
| Room | Required, min 1 char |
| Message | Optional |
| Social connect consent | Checkbox |
| Personal data consent | Checkbox (required to submit) |
| Public offer consent | Checkbox (required to submit) |

### Submission

On valid submit:
- Order number generated: `DD-MM-YYYY-NNNNN` (5-digit random suffix)
- Form data POSTed via jQuery AJAX to `mail.php`
- On success: redirect to `/thank-you`
- On failure: global validation error message shown

### Reducer Actions

| Action | Effect |
|---|---|
| `SET_DORM` | Update selected dorm |
| `SET_SERVICES` | Toggle a service active/inactive |
| `SET_SERVICES_TO_DEFAULT` | Reset services (only `cleaning-for-eviction` active) |
| `SET_FORM_INPUT_VALUE` | Update any form field |
| `SET_VALIDATION_VALUE` | Update validation state for a field |

---

## 11. Price Calculator Component

Reusable component used on each service page. Accepts a `page` prop (`'cleaning-for-eviction'` | `'one-time-cleaning'` | `'maintenance-cleaning'`).

- React Select dropdown of dorm options
- On selection: looks up price from `priceCalculatorContent[page].prices[value]`
- Displays: price, stats (9 hostels, 20+ workers, 1000+ clients)
- "Make order" button → `/order`

---

## 12. Header

- Logo + navigation links
- Language switcher (RU flag / CN flag)
- Phone number link
- Hamburger menu (mobile)
- Optional promotional banner (from Google Sheets `bannerData`)

---

## 13. Styling

- All styles in SCSS, co-located with components
- Global variables: `src/utilities/variables.scss`
- Primary color: `#559EC7`
- Accent color: `#FF9312`

**Responsive breakpoints:**

| Mixin | Max-width |
|---|---|
| `on-small-screen` | 1100px |
| `on-tablet` | 768px |
| `on-mobile` | 480px |

---

## 14. Data Flow

```
app start
  └─ initializeApp() thunk
       └─ fetchGoogleSheetsData()
            ├─ fetch prices CSV → parse → normalize → pricesData
            └─ fetch banner CSV → parse → bannerData
                 └─ Redux store updated
                      └─ usePageContent() hook
                           └─ injects prices into content objects
                                └─ components render with live prices
```

---

## 15. File Structure

```
src/
├── App.jsx                        # Routes + initialization guard
├── index.js                       # Redux store dispatch of initializeApp()
├── store/
│   ├── store.js
│   └── slices/appSlice.js         # State, actions, thunk, selectors
├── services/
│   └── googleSheetsService.js     # Fetch + CSV parse + normalize
├── hooks/
│   └── usePageContent.js          # Merge static content + Redux prices
├── content/
│   └── pageContent.js             # All RU/CN copy, addresses, options
├── pages/                         # 10 page-level components
├── components/                    # 21 UI components
│   ├── order-page/
│   ├── price-calculator/
│   ├── first-section/
│   ├── header/
│   ├── footer/
│   └── ...
└── utilities/
    └── variables.scss
```

---

## 16. Backend

A single PHP endpoint `mail.php` receives order form submissions via POST and sends an email notification. The endpoint is not part of this repository.

**POST fields:**
`name`, `surname`, `phone`, `email`, `message`, `room`, `dorm`, `orderNumber`, `socialConnect`, `services`, `total`

---

## 17. Build & Run

```bash
npm install       # Install dependencies
npm start         # Dev server → http://localhost:3000
npm run build     # Production build → /build
npm test          # Run Jest test suite
```
