# pacs008.com — official website 🌍

Marketing and documentation site for the **pacs008** suite — open-source
ISO 20022 **pacs.008** tooling for banks and financial institutions.

The site promotes the three published packages:

- [`pacs008`](https://pypi.org/project/pacs008/) — the core library (generate,
  validate, parse and audit pacs.008 across versions 001.01–001.13).
- [`pacs008-loader-mt103`](https://pypi.org/project/pacs008-loader-mt103/) —
  SWIFT MT103 → pacs.008 migration loader.
- [`pacs008-mcp`](https://pypi.org/project/pacs008-mcp/) — Model Context
  Protocol server (15 tools over stdio) for AI-assisted workflows.

## Design goals

- **Zero third-party dependencies at runtime** — no CDN, no web fonts, no
  analytics, no trackers. Every asset is self-hosted, which is what makes the
  strict Content-Security-Policy and the privacy posture possible.
- **WCAG 2.1 AAA** — all colour pairs are verified to at least a 7:1 contrast
  ratio in both light and dark themes (see `audit/`). Full keyboard control,
  visible focus, skip link, semantic landmarks, reduced-motion support.
- **SEO-complete** — per-page canonical, Open Graph, Twitter, JSON-LD
  (`Organization`, `WebSite`, `SoftwareApplication`, `BreadcrumbList`,
  `FAQPage`, `Article`, `HowTo`), `sitemap.xml`, `robots.txt`, `rss.xml`,
  `manifest.json` and `humans.txt`.

## Architecture

This is a **dependency-free static site** — there is no build step. The
deployable site lives entirely in [`docs/`](./docs) and can be served as-is by
GitHub Pages (Settings → Pages → *Deploy from a branch* → `main` / `/docs`),
Netlify, or Cloudflare Pages.

```text
docs/
├── index.html              # home
├── the-suite/              # the three packages compared
├── iso-20022/              # ISO 20022 & pacs.008 explained
├── installation/           # install + quick start + MCP setup
├── documentation/          # documentation hub
├── contact/  privacy/  terms/
├── 404.html
├── assets/                 # styles.css, main.js, theme-init.js, favicon/og
├── manifest.json  robots.txt  sitemap.xml  rss.xml  humans.txt
├── _headers                # security headers (Netlify/Cloudflare)
└── CNAME                   # pacs008.com
```

## Local preview

Any static file server works. For example:

```shell
npx serve docs
```

## Quality checks

```shell
# HTML validation (recommended + WCAG rules) — config in .htmlvalidate.json
npx html-validate "docs/**/*.html"
```

Colour-contrast ratios are documented and reproducible in
[`audit/accessibility.md`](./audit/accessibility.md).

## Licence

Content and code are released under the [Apache License 2.0](./LICENSE),
matching the pacs008 suite.
