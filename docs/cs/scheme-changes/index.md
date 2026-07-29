---
title: "Seznam změn schémat | pacs008"
description: "Každá změna pravidla, která rozhoduje o přijetí zprávy, seskupená podle data účinnosti."
lang: cs-CZ
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /cs/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# Seznam změn schémat

Každá změna pravidla, která rozhoduje o přijetí zprávy, seskupená podle data účinnosti.

Vygenerováno z registru pravidel, sada `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

Od listopadu 2026 přechází Swift na roční cyklus Standards Release, takže seznam bude každý rok růst, nikoli skončit termínem.

Odebírat: [Atom feed](/scheme-changes.xml).

## Verzování sady pravidel

Identifikátory pravidel jsou stabilní napříč menšími vydáními. Změna výsledku pravidla vyžaduje novou verzi sady, aby zůstal report reprodukovatelný.

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


## Jak zafixovat sadu pravidel

Validační reporty zaznamenávají verzi a otisk sady. Při nesrovnalosti uveďte obojí, aby šlo přesnou sadu rekonstruovat.
