# BankDash — React Admin Dashboard

A responsive recreation of the BankDash UI kit, built with React, Tailwind CSS,
React Router, Axios, and Framer Motion.

## Pages
- Dashboard (Overview)
- Transactions
- Accounts
- Investments
- Credit Cards
- Loans
- Services
- My Privileges (placeholder — no source screen was provided for this one)
- Settings (Edit Profile / Preferences / Security tabs)

## Tech stack
- **React 18** + **Vite** — fast dev/build tooling
- **Tailwind CSS** — utility-first styling, themed to match the BankDash palette
- **React Router DOM** — client-side routing across all pages
- **Axios** — `src/api/client.js` holds a pre-configured instance + example
  endpoints; every page currently renders from local mock data
  (`src/data/mockData.js`) and calls the API only as a fire-and-forget example,
  so you can drop in your real backend URL without restructuring anything
- **Framer Motion** — page transitions, sidebar, and card hover animations
- **Recharts** — all bar/line/area/pie charts
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Connecting a real backend

Set your API base URL in a `.env` file:

```
VITE_API_BASE_URL=https://api.yourbank.com
```

`src/api/client.js` already attaches a bearer token (from `localStorage`) and
centralizes error handling. Swap the mock data imports in each page for the
matching `endpoints.*` call and map the response into the same shape used by
`src/data/mockData.js`.

## Project structure

```
src/
  api/client.js        # Axios instance + example endpoints
  components/          # Sidebar, Topbar, Layout, BankCard, StatCard
  data/mockData.js      # Mock data mirroring the design screens
  pages/                # One file per sidebar route
  App.jsx               # Route definitions
  main.jsx              # Entry point, wraps App in BrowserRouter
```

## Build for production

```bash
npm run build
npm run preview
```
