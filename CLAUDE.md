# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository overview

This repo holds the marketing site for **Yggdrasil Group**, a holding company with 7 independent "entities" (Odin la Science, Saga, Nua, Nídhögg, Verdandi, Sleipnir, Surtr). It contains **two independent, parallel implementations of the same site** — they share no code:

- **Root (`*.dc.html`, `support.js`, `assets/`)** — a static, no-build implementation. Each page is a standalone HTML file.
- **`react-app/`** — a Vite + React 19 + TypeScript rebuild of the same site, with its own routing, components and image assets (`react-app/src/assets/images/`, distinct from the root `assets/`).

Content edits (entity names, taglines, mission statements, entity count) generally need to be applied in **both** trees to stay in sync — see "Content parity" below.

## Commands

All commands run from `react-app/`; the root `.dc.html` files have no build step (see below).

```bash
cd react-app
npm install     # install dependencies
npm run dev     # start Vite dev server (http://localhost:5173)
npm run build   # tsc -b type-check, then vite build
npm run preview # serve the production build locally
npm run lint    # oxlint
```

There is no test suite in this repo.

For the root `.dc.html` files, there is nothing to install or build — serve the directory with any static file server, e.g. `npx serve .`, then open a page such as `Yggdrasil Group.dc.html`. Opening via `file://` breaks them: they load ES modules and fetch assets (Google Fonts, `assets/yggdrasil.glb`), which requires http(s).

## Architecture

### Root: `.dc.html` static implementation

Each `*.dc.html` file is a self-contained "dc" component: an `<x-dc>` custom element wrapping HTML with inline styles, plus a `<script type="text/x-dc" data-dc-script>` block defining a `class Component extends DCLogic { ... }` (state, `renderVals()`, lifecycle methods). `support.js` is a generated runtime — its header states it is built from `dc-runtime/src/*.ts` via `bun run build` — that parses these files and mounts them with React. The `dc-runtime` source itself is not part of this repo, only its build output (`support.js`), so **don't hand-edit `support.js`**; treat any change to it as a one-off patch to generated code, not a source edit.

Two top-level "hub" pages exist with different structure and both duplicate all entity copy:
- `Yggdrasil Group.dc.html` — French-language, single-scroll landing page with all 7 entities inlined as sections, plus a 3D Yggdrasil emblem (Three.js `GLTFLoader` loading `assets/yggdrasil.glb`).
- `Yggdrasil Racines.dc.html` — English-language "Roots" scroll journey; entity content is duplicated here again in a different layout (card-based, one per viewport).

Each entity also has its own standalone detail page (`Entite <Name>.dc.html`), which duplicates that entity's mission/context/tagline copy a third time.

### `react-app/`: React/TSX implementation

Standard Vite + React 19 + TypeScript + `react-router-dom` app (`src/main.tsx` → `App.tsx` → routes in `src/pages/`). There is no shared design-tokens file — colors, spacing and typography are inlined per component as `style={{ ... }}` objects using `oklch()` colors and `clamp()` for fluid sizing; the small set of things that need real CSS (`:hover`, keyframes, a responsive grid) live in `src/index.css` as classes referenced via `className`.

Reusable behavior lives in `src/components/`:
- `Reveal` — scroll-triggered fade/rise-in via `IntersectionObserver`, used as a generic wrapper (`as={...}`) throughout.
- `TiltCard` — pointer-driven parallax for the entity cards on the homepage (`data-card-orb`, `data-card-cta` children move with the cursor).
- `HomeNav` vs `SubNav` — the homepage has its own transparent-to-opaque-on-scroll nav; every other page uses the always-opaque `SubNav`.
- `Footer` takes a `variant` (`"home" | "page" | "plain"`) controlling spacing/border/whether the email pill is shown.
- `LegalSidebar`, plus the `legal*Style` exports in the same file, are shared by `Legal.tsx` and `Privacy.tsx`.

Entity content (name, tagline, accent color, description) is defined as inline arrays/objects **per page** (`Home.tsx`, `About.tsx`, `Vision.tsx`, `Contact.tsx`'s `<select>`, `Footer.tsx`, `Legal.tsx`) rather than from a shared data source — each list has to be updated independently.

### Content parity across both implementations

The 7 entities (Odin la Science / OLS, Saga, Nua / NÜA, Nídhögg, Verdandi, Sleipnir, Surtr) and their taglines/mission statements are hand-duplicated in many places:
- Root: `Yggdrasil Group.dc.html`, `Yggdrasil Racines.dc.html`, and each `Entite *.dc.html` file.
- `react-app/`: the per-page arrays listed above.

There is no single source of truth. When adding, renaming, or reworking an entity, expect to touch multiple files in both trees, and check `README.md` (which also lists all 7 with the same facts).

## Naming note

The canonical spelling is **Verdandi** (not "Verdendis" — an earlier typo that existed in `react-app/` and has since been corrected everywhere).
