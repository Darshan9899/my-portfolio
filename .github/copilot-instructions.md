# Copilot / AI Agent Instructions for this repository

Overview
- Minimal React + Vite single-page portfolio. Entrypoint: `index.html` -> `/src/main.jsx` which mounts `src/App.jsx`.
- Build and dev powered by Vite with `@vitejs/plugin-react` (see `vite.config.js`).

Quick commands
- Dev server: `npm run dev` (uses `vite`, HMR on port 5173 by default).
- Build: `npm run build`.
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (runs `eslint .` using repo `eslint.config.js`).

Architecture notes (what to know)
- File layout: static public assets go in `public/`; app sources are in `src/` (components in `src/`, images in `src/assets/`).
- Component pattern: files use `.jsx` and default-export functional components (example: `src/App.jsx`). Keep components small and default-exported.
- App mounting: `src/main.jsx` creates a root with `StrictMode` and renders `App`.
- ESM project (`type: module` in `package.json`) — prefer `import`/`export` syntax.

Project-specific conventions
- Use `.jsx` for React components (the template uses `App.jsx` and `main.jsx`).
- Keep top-level routes / page shells in `src/` (this project currently has one page). Add new pages under `src/` and import them from `main.jsx` or a router file if introduced.
- Assets served from `public/` are referenced by absolute paths (e.g. `/vite.svg` in `index.html`). Build-time assets can live in `src/assets` and should be imported to get hashed output.

Integrations & dev workflow gotchas
- Vite dev server handles HMR; changes under `src/` update in browser immediately. If HMR doesn't reflect changes, restart `npm run dev`.
- ESLint is configured but this repo is minimal; run `npm run lint` before committing changes.
- No test framework or test scripts are present—do not assume tests exist.

Examples to reference when editing
- Mounting and main entry: `src/main.jsx`
- Primary component: `src/App.jsx`
- Build config: `vite.config.js`
- NPM scripts & deps: `package.json`

When modifying or adding files
- Keep default exports for React components to match existing style.
- Add new dependencies to `package.json` and avoid global installs.
- If adding TypeScript, update `type` and add tsconfig; currently the project is JS with some `@types/*` devDeps.

If unsure, ask for clarification and point to the file you inspected (e.g., `src/App.jsx`).

-- End --
