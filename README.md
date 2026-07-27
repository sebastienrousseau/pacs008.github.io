# pacs008.github.io

Marketing and documentation site for `pacs008`, built with [VitePress](https://vitepress.dev/) and deployed via GitHub Pages.

## Overview

This repository hosts the official multi-locale documentation and marketing portal for the [`pacs008`](https://github.com/sebastienrousseau/pacs008) ISO 20022 toolkit. It supports 28 locales with localized navigation, metadata, and automated static site generation via `scripts/generate-locales.mjs`.

## Development

### Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0

### Installation

```bash
npm install
```

### Local Development Server

Start the local VitePress development server:

```bash
npm run dev
```

### Build & Static Generation

Generate locale files and build static HTML artifacts in `docs/.vitepress/dist`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Testing & Validation

Run unit & integration test suites (Vitest):

```bash
npm test
```

Validate built HTML pages for compliance (`html-validate`):

```bash
npm run validate
```

Run site audit report for SEO, locale coverage, and readability metrics:

```bash
npm run audit:site
```

## Repository Structure

- `docs/` — Markdown documentation source and VitePress configuration (`docs/.vitepress/`).
- `scripts/` — Build scripts (`generate-locales.mjs`, `postbuild-seo.mjs`, `audit-site.mjs`).
- `tests/` — Test suites for navigation, responsive layouts, accessibility, and SEO.
- `audit/` — SEO and content scorecard documentation.
- `.github/workflows/` — CI/CD workflows for testing and GitHub Pages deployment.
