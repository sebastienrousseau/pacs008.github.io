# Accessibility & compliance audit — pacs008.com

This site targets **WCAG 2.1 level AAA**. The notes below are reproducible
offline; the browser-driven audits (Lighthouse, WAVE) require Chrome and
should be run against the deployed site.

## Colour contrast (WCAG 1.4.6 Contrast Enhanced, AAA)

AAA requires **≥ 7:1** for normal text and **≥ 4.5:1** for large text/UI.
Every foreground/background pair in the design system was computed with the
WCAG relative-luminance formula. All pairs clear **7:1**.

### Light theme (bg `#ffffff`, surface `#eef2f6`)

| Role | Colour | On background | On surface |
|------|--------|---------------|------------|
| Body text | `#14181f` | 17.8:1 | — |
| Muted text | `#41474f` | 9.4:1 | 8.3:1 |
| Brand / links | `#08525b` | 8.9:1 | 7.9:1 |
| Primary button text | `#ffffff` on `#084a53` | 9.9:1 | — |

### Dark theme (bg `#0d1117`, surface `#161c26`)

| Role | Colour | On background | On surface |
|------|--------|---------------|------------|
| Body text | `#e8eef4` | 16.2:1 | — |
| Muted text | `#aeb9c5` | 9.5:1 | 8.6:1 |
| Brand / links | `#4fd6c9` | 10.6:1 | 9.6:1 |
| Primary button text | `#0d1117` on `#4fd6c9` | 10.6:1 | — |

Reproduce:

```shell
python3 audit/contrast.py
```

## Structure & interaction

- **Landmarks**: one `<header>`, one `<main id="main">`, one `<footer>` per
  page; `<nav aria-label>` on primary nav and breadcrumbs.
- **Headings**: single `<h1>` per page, no skipped levels (enforced by the
  `heading-level` html-validate rule).
- **Keyboard**: skip link, visible `:focus-visible` outline (3px, AAA-contrast
  colour), Escape closes the mobile menu, no keyboard traps.
- **Motion**: `prefers-reduced-motion` disables transitions/animations and
  smooth scroll.
- **Themes**: honours `prefers-color-scheme`; a persisted toggle
  (`aria-pressed`) overrides it. Set before first paint (no flash).
- **Forms**: every control has an associated `<label>`; hints via
  `aria-describedby`; required fields marked.
- **Images/icons**: decorative SVGs are `aria-hidden` + `focusable="false"`;
  the favicon/OG art carry text alternatives.
- **Colour independence**: links are underlined, not colour-only; status is
  never conveyed by colour alone.

## HTML validation

```shell
npx html-validate "docs/**/*.html"   # config: .htmlvalidate.json
```

Extends `html-validate:recommended` plus WCAG rules (`wcag/h32`, `h36`,
`h37`, `h67`, `h71`) and `heading-level`. The whole `docs/` tree passes with
zero errors.

## Privacy / best practices

- No cookies, no analytics, no web fonts, no CDN, no third-party requests.
- Strict `Content-Security-Policy` on every page (`default-src 'self'`), plus
  a `_headers` file for hosts that honour it (nosniff, no-referrer,
  Permissions-Policy, HSTS, `frame-ancestors 'none'`).
- All resources same-origin over HTTPS; `upgrade-insecure-requests`.

## What still needs a browser

Lighthouse and WAVE need a Chromium engine, which is not available in the
build sandbox (musl/Alpine, no Chrome). Run them against the deployed URL:

```shell
npx lighthouse https://pacs008.com/ --preset=desktop --view
# and the WAVE browser extension / https://wave.webaim.org/
```

The site is engineered to score 100 across Performance, Accessibility, Best
Practices and SEO: single small same-origin CSS, deferred JS, no layout
shift, complete meta/structured data, and AAA contrast.
