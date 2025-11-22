# AI Mastery Step — Course Site

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

This repository contains the source for the "AI Mastery Step" course site — a small, beginner-friendly Next.js site and static pages for small business owners who want simple, practical steps to use AI.

## Features

- Simple Next.js app structure (app/ directory)
- Static HTML fallbacks in the project root for quick hosting
- Tailwind CSS + PostCSS configuration

## Local development

Prerequisites:

- Node.js (16+ recommended)
- npm or yarn

Install dependencies:

```bash
cd "$(dirname "$0")" || exit
npm install
```

Run the development server:

```bash
npm run dev
```

Common scripts (from `package.json`):

- `dev` — start development server
- `build` — create a production build
- `start` — run the production build

If this is a static site (no Node server needed), you can also open the root `index.html` in a browser for a quick preview.

## Build & Deploy

For a Next.js deploy (Vercel, Netlify, etc.):

1. Push the repository to GitHub.
2. Connect the repo to Vercel or Netlify.
3. Use the default build command (`npm run build`) and publish the `.next` output or static export as appropriate.

For plain static hosting (GitHub Pages / S3 / Netlify without SSR):

- Consider running `npm run build` and `npm run export` (if configured) to produce static assets, then deploy the `out/` or `public/` folder.

## Files of interest

- `app/` — Next.js app routes and layout (React components)
- `index.html`, `about.html`, `courses.html`, etc. — static HTML versions
- `styles.css`, `app/globals.css` — project styles
- `package.json`, `tailwind.config.js`, `postcss.config.js` — build and tooling config

## Contributing

If you'd like help improving the site or adding content, open an issue or submit a pull request. Keep changes small and focused.

## License

Add a license file if you want to open-source this project. (e.g. `LICENSE` with MIT)

---
_Created and pushed from local development environment._

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Scripts
- `npm run dev` – start Next.js in dev mode
- `npm run build` – production build
- `npm run start` – run built app
- `npm run lint` – lint with Next.js defaults

Content pages live in `app/` (home, starter guide, courses, about, contact). Shared header/footer components live in `components/`.
