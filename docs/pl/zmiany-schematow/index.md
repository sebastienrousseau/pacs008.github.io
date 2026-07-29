---
title: "Dziennik zmian schematów | pacs008"
description: "Każda zmiana reguły decydująca o przyjęciu komunikatu, pogrupowana według daty wejścia w życie."
lang: pl-PL
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /pl/zmiany-schematow/
robots: "index, follow"
draft: false
noindex: false
---

# Dziennik zmian schematów

Każda zmiana reguły decydująca o przyjęciu komunikatu, pogrupowana według daty wejścia w życie.

Wygenerowano z rejestru reguł, zestaw `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

Od listopada 2026 Swift przechodzi na roczny cykl Standards Release, więc lista będzie rosła co roku, a nie kończyła się na terminie.

Subskrybuj: [Atom feed](/scheme-changes.xml).

## Wersjonowanie zestawu reguł

Identyfikatory reguł są stabilne między wydaniami pomocniczymi. Zmiana wyniku reguły wymaga nowej wersji zestawu, aby raport pozostał odtwarzalny.

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


## Jak przypiąć zestaw reguł

Raporty walidacji zapisują wersję i skrót zestawu. Podaj oba przy zgłaszaniu rozbieżności, aby odtworzyć dokładny zestaw.
