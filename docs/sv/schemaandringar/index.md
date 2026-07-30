---
title: "Ändringslogg för scheman | pacs008"
description: "Varje regeländring som avgör om ett meddelande godtas, grupperad efter ikraftträdandedatum."
lang: sv-SE
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /sv/schemaandringar/
robots: "index, follow"
draft: false
noindex: false
---

# Ändringslogg för scheman

Varje regeländring som avgör om ett meddelande godtas, grupperad efter ikraftträdandedatum.

Genererad från regelregistret, regeluppsättning `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

Från november 2026 går Swift över till en årlig Standards Release-cykel, så listan växer varje år i stället för att sluta vid deadline.

Prenumerera: [Atom feed](/scheme-changes.xml).

## Versionshantering av regeluppsättningen

Regelidentifierare är stabila mellan mindre versioner. Ändras utfallet för en regel krävs en ny uppsättningsversion, så att en rapport förblir reproducerbar.

### 2027-11-01

- `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments (chaps-uk, error) *(announced, not yet enforced)*
- `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS (chaps-uk, error) *(announced, not yet enforced)*

### 2026-11-14

- `CBPR-ADDR-001` — Fully unstructured postal address is not accepted (cbpr-plus, error)
- `CBPR-ADDR-002` — Town Name is mandatory in a structured element (cbpr-plus, error)
- `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code (cbpr-plus, error)
- `CBPR-ADDR-005` — Agent identified by BIC only is exempt (cbpr-plus, info)
- `CBPR-ADDR-006` — Message types excepted from the address requirement (cbpr-plus, info)
- `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses (chaps-uk, error)

### 2025-11-22

- `CBPR-ADDR-004` — Hybrid postal address is accepted (cbpr-plus, info)


## Så låser du en regeluppsättning

Valideringsrapporter anger uppsättningens version och hash. Ange båda vid avvikelse, så att exakt uppsättning kan återskapas.
