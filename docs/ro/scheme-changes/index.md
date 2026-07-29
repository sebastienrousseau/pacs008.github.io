---
title: "Jurnal de modificări ale schemelor | pacs008"
description: "Fiecare modificare de regulă care decide acceptarea unui mesaj, grupată după data intrării în vigoare."
lang: ro-RO
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /ro/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# Jurnal de modificări ale schemelor

Fiecare modificare de regulă care decide acceptarea unui mesaj, grupată după data intrării în vigoare.

Generat din registrul de reguli, set `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

Din noiembrie 2026 Swift trece la un ciclu anual Standards Release, deci lista va crește anual, nu se va opri la termen.

Abonare: [Atom feed](/scheme-changes.xml).

## Versionarea setului de reguli

Identificatorii regulilor rămân stabili între versiuni minore. O schimbare a rezultatului unei reguli impune un set nou, astfel încât un raport să rămână reproductibil.

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


## Cum fixați un set de reguli

Rapoartele de validare consemnează versiunea și amprenta setului. Citați-le pe ambele la o discrepanță, pentru a reconstitui setul exact.
