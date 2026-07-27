# pacs008.github.io

Marketing and documentation site for `pacs008`, built with **`ssg`** (Static Site Generator v0.0.48) and deployed via GitHub Pages.

## Overview

This repository hosts the official multi-locale documentation and marketing portal for the [`pacs008`](https://github.com/sebastienrousseau/pacs008) ISO 20022 toolkit.

The site is built exclusively using [`static-site-generator`](https://github.com/sebastienrousseau/static-site-generator) (Rust `ssg` CLI v0.0.48).

## Development & Build Commands

### Prerequisites

- Rust & `ssg` CLI (`static-site-generator` v0.0.48)
- Node.js >= 20.0.0 (optional, for validation utilities)

### Local Dev Server

Start the local `ssg` dev server with file watching and live reloading:

```bash
ssg dev -f config.toml
```

Or via npm:

```bash
npm run dev
```

### Static Site Build

Generate static HTML artifacts into `public/`:

```bash
ssg build -f config.toml
```

Or via npm:

```bash
npm run build
```

### Validation & Audit

Run `ssg` build-time validators and security audit gates:

```bash
ssg check -f config.toml
ssg audit -f config.toml
```

Or via npm:

```bash
npm test
npm run validate
```

## Configuration

Site configuration is stored in `config.toml`:

- `content_dir`: Source Markdown documentation files.
- `output_dir`: Built static site destination (`public/`).
- `template_dir`: HTML layout templates (`templates/`).
- `site_name`, `site_title`, `site_url`, `author`, `language`: Site metadata.

## Licence

Content and code are released under the [Apache License 2.0](./LICENSE).
