---
title: "Scheme change log | pacs008"
description: "Dated log of scheme rule changes affecting ISO 20022 pacs messages, generated from the pacs008 rule registry. Subscribe to track CBPR+ and CHAPS obligations."
lang: en-GB
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# Scheme change log

Every rule change that affects whether a message is accepted, grouped by the
date it takes effect. Generated from the rule registry at ruleset
`2026.11.0` (hash `sha256:97e373c7d4df2de7998df610dab1c0be2b93119a189f82246928b2698991f33a`).

Swift moves to an annual Standards Release cycle from November 2026, so this
list is expected to grow every year rather than end at the deadline.

Subscribe: [Atom feed](/scheme-changes.xml).

## Ruleset versioning

Rule identifiers are stable across minor releases. A change to whether a rule
passes or fails requires a new ruleset version, so a report produced against
`2026.11.0` can be reproduced later.

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


## How to pin a ruleset

Validation reports record the ruleset version and hash. Quote both when
raising a discrepancy, so the exact rule set that produced a finding can be
reconstructed.
