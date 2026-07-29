---
title: "Wijzigingslog schema's | pacs008"
description: "Elke regelwijziging die bepaalt of een bericht wordt geaccepteerd, gegroepeerd op ingangsdatum."
lang: nl-NL
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /nl/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# Wijzigingslog schema's

Elke regelwijziging die bepaalt of een bericht wordt geaccepteerd, gegroepeerd op ingangsdatum.

Gegenereerd uit het regelregister, regelset `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

Swift gaat vanaf november 2026 over op een jaarlijkse Standards Release-cyclus, dus deze lijst groeit elk jaar in plaats van bij de deadline te stoppen.

Abonneren: [Atom feed](/scheme-changes.xml).

## Versiebeheer van de regelset

Regelidentificaties blijven stabiel tussen kleine releases. Verandert het resultaat van een regel, dan vereist dat een nieuwe regelsetversie, zodat een rapport bij een bepaalde set reproduceerbaar blijft.

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


## Een regelset vastzetten

Validatierapporten leggen versie en hash van de regelset vast. Noem beide bij een afwijking, zodat de exacte set achterhaald kan worden.
