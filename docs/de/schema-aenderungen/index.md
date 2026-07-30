---
title: "Änderungsprotokoll der Verfahren | pacs008"
description: "Jede Regeländerung, die über die Annahme einer Nachricht entscheidet, gruppiert nach Inkrafttretensdatum."
lang: de-DE
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /de/schema-aenderungen/
robots: "index, follow"
draft: false
noindex: false
---

# Änderungsprotokoll der Verfahren

Jede Regeländerung, die über die Annahme einer Nachricht entscheidet, gruppiert nach Inkrafttretensdatum.

Erzeugt aus dem Regelregister, Regelsatz `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

Swift stellt ab November 2026 auf einen jährlichen Standards-Release-Zyklus um; diese Liste wächst also jedes Jahr weiter, statt mit dem Stichtag zu enden.

Abonnieren: [Atom feed](/scheme-changes.xml).

## Versionierung des Regelsatzes

Regelkennungen bleiben über Minor-Releases stabil. Ändert sich, ob eine Regel besteht oder scheitert, erfordert das eine neue Regelsatzversion, damit ein Bericht zu einem bestimmten Regelsatz später reproduzierbar bleibt.

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


## Einen Regelsatz festschreiben

Validierungsberichte halten Version und Hash des Regelsatzes fest. Nennen Sie bei einer Abweichung beides, damit sich der genaue Regelsatz rekonstruieren lässt.
