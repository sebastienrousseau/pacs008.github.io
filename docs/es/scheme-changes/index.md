---
title: "Registro de cambios de esquema | pacs008"
description: "Cada cambio de regla que determina si un mensaje se acepta, agrupado por fecha de entrada en vigor."
lang: es-ES
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /es/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# Registro de cambios de esquema

Cada cambio de regla que determina si un mensaje se acepta, agrupado por fecha de entrada en vigor.

Generado a partir del registro de reglas, conjunto `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

Swift adopta un ciclo anual de Standards Release desde noviembre de 2026, por lo que esta lista crecerá cada año en lugar de terminar en la fecha límite.

Suscribirse: [Atom feed](/scheme-changes.xml).

## Versionado del conjunto de reglas

Los identificadores de regla son estables entre versiones menores. Un cambio en si una regla pasa o falla exige una nueva versión del conjunto, para que un informe generado con un conjunto dado siga siendo reproducible.

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


## Cómo fijar un conjunto de reglas

Los informes de validación registran la versión y el hash del conjunto. Cite ambos al plantear una discrepancia, para reconstruir exactamente el conjunto que produjo un hallazgo.
