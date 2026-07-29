---
title: "Registro modifiche degli schemi | pacs008"
description: "Ogni modifica di regola che determina l'accettazione di un messaggio, raggruppata per data di efficacia."
lang: it-IT
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /it/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# Registro modifiche degli schemi

Ogni modifica di regola che determina l'accettazione di un messaggio, raggruppata per data di efficacia.

Generato dal registro delle regole, set `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

Da novembre 2026 Swift adotta un ciclo annuale di Standards Release, quindi questo elenco crescerà ogni anno anziché fermarsi alla scadenza.

Iscriviti: [Atom feed](/scheme-changes.xml).

## Versionamento del set di regole

Gli identificativi delle regole restano stabili tra release minori. Un cambiamento nell'esito di una regola richiede una nuova versione del set, così un report prodotto con un dato set resta riproducibile.

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


## Come fissare un set di regole

I report di validazione registrano versione e hash del set. Cita entrambi in caso di discrepanza, per ricostruire esattamente il set che ha prodotto un esito.
