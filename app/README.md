# Pantrified app

Installable PWA for Pantrified. Next.js 16 static export, no backend, no Tailwind. Profile and session state live in `localStorage` under `pantrified.v1`; theme and language persist separately under `pantrified.theme` and `pantrified.locale`.

Project overview, screenshots, and license: [root README](../README.md).

## Run it

```powershell
cd Pantrified\app
npm install
npm run dev
```

Open http://localhost:3000 on a phone or in a browser with the device toolbar set to a phone width. At 1024px and wider the app switches to a desktop layout with its own sidebar and rails.

Production build:

```powershell
npm run build          # writes out/
npx serve out          # or: python -m http.server 4173 --directory out
```

For a subpath deployment such as GitHub Pages at `/pantrified/`, set the base path before building:

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/pantrified'; npm run build
```

The app, manifest, and service worker all read that value: Next uses it as `basePath`, metadata links are prefixed, the service worker registers at the scoped path, and the offline shell is cached relative to it. Leaving it unset builds for a domain root.

The build is a static export, so any static host works. Installability needs HTTPS or `localhost`; the service worker and manifest are already wired.

## What is real and what is not

| Part | State |
| --- | --- |
| Photo upload, review, quantity edit, add/remove ingredient | Real |
| Budget, meals, calories, diet, cook time, equipment, staples | Real, changes the plan |
| Plan ranking, pack rounding, missing-only costing | Real |
| Grocery list copy (WhatsApp text) and CSV download | Real |
| Share card (fabric.js, PNG download) | Real, drawn locally at 1080×1350 |
| Light / dark theme, Indonesian / English UI | Real, light is the default; preferences are stored on the device |
| Desktop 3D hero (three.js) | Real, decorative only, pauses offscreen |
| Local persistence, analytics consent gate, data export, delete | Real |
| Ingredient detection | **Simulated.** `lib/detect.ts` hashes the file and replays a seeded fridge scene. The image is never read or uploaded. |

Replacing the detector means swapping `detectUpload()` for a call to the model service in the PRD (FastAPI + ONNX). Everything downstream already consumes `DetectionResult`.

## Layout

```
app/
  app/            layout, page, global styles (all design tokens live in globals.css)
  components/     App shell, DesktopSidebar, ShareCard, Icon, FoodArt, Ring, Sheet, Pwa
  components/screens/  Home, Review, Constraints, Plans, Detail, Grocery, Settings
  components/three/    PantryScene (three.js desktop hero)
  lib/            copy (matching ID/EN dictionaries), ui (theme + locale provider),
                  types, data (150 ingredients, 150 recipes, 150 prices),
                  ingredients (alias search), basePath, detect, plan, format, store, useMedia
  public/         manifest, service worker, icon.svg (logo and favicon)
  scripts/        make_icons.py, validate-data.ts, shot.mjs, shot-desktop.mjs, check.mjs, responsive.mjs
```

## Copy, graphics, and motion

- **All UI copy lives in `lib/copy.ts`.** Brand, nav, screen titles, button labels, toasts, share-card text, and a11y labels come from two dictionaries with an identical shape: `id` (default) and `en`. Recipe and ingredient content stays in `lib/data.ts`. Components read the active dictionary through `useCopy()` from `lib/ui.tsx`; the exported `copy` constant is the Indonesian default for modules that run outside React.
- **Theme and language are device preferences.** `lib/ui.tsx` stores `pantrified.theme` and `pantrified.locale`, updates `<html lang>` and `data-theme`, and keeps light mode as the default until the user chooses dark. A small pre-hydration script in `app/layout.tsx` applies both before first paint.
- **The app icon is the logo.** `public/icon.svg` is the favicon, the mobile home mark, and the desktop sidebar mark, so branding stays consistent with the installed app.
- **Sample fridges use emoji cards.** The three sample-card illustrations and start-sheet thumbnails are emoji (`🍳`, `🍚`, `🥗`) defined with the sample labels in `lib/copy.ts`, so they translate with the interface.
- **Ingredient search understands aliases.** `lib/ingredients.ts` normalizes case, punctuation, and spacing, then matches names and aliases such as `tempeh`, `chayote`, or `scallion`, so English or informal Indonesian still finds the right row.
- **The data is validated before every build.** `scripts/validate-data.ts` checks unique IDs and titles, units, categories, allergens, price arithmetic, price dates, known ingredients, positive quantities, equipment, step counts, and ingredient coverage. Structural errors fail the build; targets not yet met are warnings.
- **fabric.js** draws the share card (`components/ShareCard.tsx`) on a `StaticCanvas` at 1080×1350 and exports a PNG. It is imported dynamically, so it never ships in the first load. Light and dark palettes are defined in the component.
- **three.js** powers the desktop-only pantry still-life (`components/three/PantryScene.tsx`): plate, food meshes, lights, pointer parallax. It loads via `next/dynamic` with `ssr: false`, only mounts at ≥1024px, pauses when offscreen or hidden, and renders a single frame under `prefers-reduced-motion`.
- **Desktop UI** starts at `min-width: 1024px`: fixed sidebar with nav, new-plan CTA, and session card; sticky topbar; wide content with two-column screen grids and summary rails. The mobile tab bar and sticky CTAs are hidden there. Both layouts share the same screens and state. Between 1024 and 1359px the plan grid drops to two columns, the home hero stacks, and the forms and settings grids collapse to one column; between 1024 and 1199px the summary rail hides and the grocery actions go two-up with the primary button full width.
- **Mobile UI** is designed at 390px first: 20px screen gutters, a single olive home hero, the app logo above the wordmark, 3:2 emoji sample cards, 16:9 plan art, a two-row review item with the quantity stepper under the name, and a two-column secondary action row on the grocery screen. Fraunces (`--font-serif`) is reserved for headings, the brand, and recipe titles; Plus Jakarta Sans (`--font-ui`) carries UI, body, and tabular numbers.
- **Motion** follows short, ease-out transitions (120–260ms) on transform and opacity only, with `prefers-reduced-motion` guards. Tokens (`--ease-out`, `--ease-spring`, `--dur-fast/base/slow`) are at the top of `globals.css`.

## Checks

```powershell
npm run validate:data          # data integrity: IDs, units, prices, dates, coverage
node scripts/shot.mjs          # mobile flow incl. empty state, writes shots/*.png, fails on console errors
node scripts/shot-desktop.mjs  # 1440×900 flow incl. 3D hero and share card, writes shots/desk-*.png
node scripts/check.mjs         # 36 checks: PWA, offline, flow, clipboard, CSV, persistence,
                               # review states, alias search, plan labels, desktop shell,
                               # 3D canvas, share card size + PNG download
node scripts/responsive.mjs    # 320/360/768/1024/1200 audit: overflow, label, target size,
                               # writes shots/resp-*.png
```

All four expect the static build to be served at http://127.0.0.1:4173/ by default. To use another port, set `BASE_URL`:

```powershell
$env:BASE_URL='http://127.0.0.1:4174/'; node scripts/check.mjs
```

Run them one at a time: `python -m http.server` is single-threaded, so parallel browsers stall and time out. The screenshots are written to `app/shots/`.

## Known gaps

- Detector is a stub; the PRD's M3 model work is not started. Every detector class now appears in at least 8 recipes.
- The 100 pantry extras beyond the frozen 50 detector classes are searchable and usable in plans, but the simulated detector never returns them.
- Prices are one sample table of 150 rows dated 2026-10-27, not a live feed.
- The English interface translates UI copy only; recipe, ingredient, and dish names remain Indonesian.
- No accounts, no sync, no push notifications.
