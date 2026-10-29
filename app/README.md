# Pantrified app

Installable PWA for Pantrified. Next.js 16 static export, no backend, no Tailwind. All state lives in `localStorage` under `pantrified.v1`.

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

The build is a static export, so any static host works. Installability needs HTTPS or `localhost`; the service worker and manifest are already wired.

## What is real and what is not

| Part | State |
| --- | --- |
| Photo upload, review, quantity edit, add/remove ingredient | Real |
| Budget, meals, calories, diet, cook time, equipment, staples | Real, changes the plan |
| Plan ranking, pack rounding, missing-only costing | Real |
| Grocery list copy (WhatsApp text) and CSV download | Real |
| Share card (fabric.js, PNG download) | Real, drawn locally at 1080×1350 |
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
  lib/            copy (every UI string), types, data (37 ingredients, 23 recipes, prices),
                  detect, plan, format, store, useMedia (breakpoint, reduced motion, count-up)
  public/         manifest, service worker, icons
  scripts/        make_icons.py, shot.mjs, shot-desktop.mjs, check.mjs
```

## Copy, graphics, and motion

- **All UI copy lives in `lib/copy.ts`.** Brand, nav, screen titles, button labels, toasts, share-card text, and a11y labels come from that one file. Recipe and ingredient content stays in `lib/data.ts`.
- **fabric.js** draws the share card (`components/ShareCard.tsx`) on a `StaticCanvas` at 1080×1350 and exports a PNG. It is imported dynamically, so it never ships in the first load. Light and dark palettes are defined in the component.
- **three.js** powers the desktop-only pantry still-life (`components/three/PantryScene.tsx`): plate, food meshes, lights, pointer parallax. It loads via `next/dynamic` with `ssr: false`, only mounts at ≥1024px, pauses when offscreen or hidden, and renders a single frame under `prefers-reduced-motion`.
- **Desktop UI** starts at `min-width: 1024px`: fixed sidebar with nav, new-plan CTA, and session card; sticky topbar; wide content with two-column screen grids and summary rails. The mobile tab bar and sticky CTAs are hidden there. Both layouts share the same screens and state.
- **Motion** follows short, ease-out transitions (120–260ms) on transform and opacity only, with `prefers-reduced-motion` guards. Tokens (`--ease-out`, `--ease-spring`, `--dur-fast/base/slow`) are at the top of `globals.css`.

## Checks

```powershell
node scripts/shot.mjs          # mobile flow, writes shots/*.png, fails on console errors
node scripts/shot-desktop.mjs  # 1440×900 flow incl. 3D hero and share card, writes shots/desk-*.png
node scripts/check.mjs         # 31 checks: PWA, offline, flow, clipboard, CSV, persistence,
                               # desktop shell, 3D canvas, share card size + PNG download
```

All three expect the static build to be served at http://127.0.0.1:4173/.

## Known gaps

- Detector is a stub; the PRD's M3 model work is not started.
- Recipe set is 23 of the 150 the M2 gate asks for.
- Prices are one sample table dated 2026-10-27, not a live feed.
- No accounts, no sync, no push notifications.
