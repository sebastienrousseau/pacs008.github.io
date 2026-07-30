---
title: "Conformità ISO 20022 2026 | pacs008"
description: What changes on 14 November 2026 for SWIFT CBPR+ and Bank of England CHAPS, who is in scope, the exceptions, and downloadable test fixtures for each rule.
lang: it-IT
layout: page
date: "2026-07-27"
name: pacs008
short_name: pacs008
start_url: /
display: standalone
background_color: "#ffffff"
theme_color: "#084a53"
lastUpdated: true
image: /logo.webp
---

# Conformità ISO 20022 2026

**107 giorni** al **14 novembre 2026**, al 2026-07-30.

Da quella data gli indirizzi postali completamente non strutturati non saranno più accettati nei messaggi di pagamento SWIFT CBPR+ né dalla libreria di validazione CHAPS della Bank of England. Lo stesso giorno entrano in vigore altre due modifiche, e a novembre 2027 ne seguirà un insieme più ampio.

Ogni regola qui sotto ha un identificativo, una data di efficacia, una fonte autorevole e un dato di test: nulla va preso sulla fiducia.

## Sei interessato?

Sei interessato se invii pagamenti CBPR+ o CHAPS contenenti un indirizzo postale per una qualsiasi parte.

| | |
|---|---|
| **Messaggi** | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| **Parti** | Debtor, creditor, ultimate debtor, ultimate creditor, and agents that carry an address |
| **Fuori ambito** | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| **Esenti** | Agents identified by BIC alone need no postal address (`CBPR-ADDR-005`) |

## Cosa cambia davvero

Il requisito è un **minimo, non un massimo**. È l'aspetto del mandato più frequentemente frainteso.

| Formato | `TwnNm` | `Ctry` | `AdrLine` | Prima del 14 nov 2026 | Da tale data |
|---|---|---|---|---|---|
| Completamente strutturato | Presente | Presente | Assente | Accettato | Accettato |
| Ibrido | Presente | Presente | Presente | Accettato | **Accettato** |
| Completamente non strutturato | Assente | Assente | Presente | Accettato | **Respinto** |

**Non** è necessario spostare via, numero civico e CAP in elementi strutturati. Sono sufficienti la città in `<TwnNm>` e il paese in `<Ctry>` come codice ISO 3166 a due lettere. Il resto può restare nelle righe di indirizzo: si tratta di un indirizzo ibrido e rimane valido.

[Full detail, with worked examples →](/structured-address/)

## Controlla i tuoi dati ora

Due strumenti, eseguiti interamente nel browser. Nessun dato di pagamento viene trasmesso.

- **[Batch address scan](/live/)** — upload a CSV of party addresses and get a
  readiness score, a breakdown by party, and a downloadable remediation list of
  the records that would fail.
- **[XSD validation](/live/)** — check an existing message against the official
  schema for element order, cardinality and datatypes.

## Dati di test

Run these through the workbench, the CLI or the API. Each maps to the rule it
exercises, so you can confirm your pipeline reacts the way you expect.

- [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) — passes `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) — fails `CBPR-ADDR-001`
- [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) — fails `CBPR-ADDR-002`
- [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) — fails `CBPR-ADDR-003`
- [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) — passes `CBPR-ADDR-005`
- [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) — passes `CHAPS-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) — fails `CHAPS-ADDR-001`

## Tutte le scadenze, non solo questa

Novembre 2026 non è la fine dei cambiamenti ISO 20022. Da quella data Swift adotta un ciclo annuale di Standards Release, quindi le linee guida cambieranno ogni anno.

| Date | Scheme | Change | Rule |
|---|---|---|---|
| `2025-11-22` | CBPR+ | Hybrid postal address option available | `CBPR-ADDR-004` |
| `2025-11-22` | CBPR+ | MT/MX coexistence for payment instructions ends | — |
| `2026-11-14` | CBPR+ | Fully unstructured postal address rejected | `CBPR-ADDR-001` |
| `2026-11-14` | CHAPS | CHAPS validation library rejects unstructured addresses | `CHAPS-ADDR-001` |
| `2026-11-14` | CBPR+ | MT101 interbank coexistence ends; contingency relays to `pain.001` | — |
| `2026-11-14` | Swift | `camt.110` investigation requests must be receivable | — |
| `2026-11-14` | Swift | Annual Standards Release cycle begins | — |
| `2027-11` | CHAPS | Purpose codes mandatory on all payments (announced) | `CHAPS-PURP-001` |
| `2027-11` | CHAPS | Structured remittance information mandatory (announced) | `CHAPS-RMT-001` |
| `2027-11` | Swift | `camt.110` and `camt.111` both mandatory (announced) | — |

[Dated change log and feed →](/scheme-changes/)

## Cosa verificare, per ruolo

### Sviluppo

- Find every place an address is concatenated into a single line before it
  reaches the message. That is usually where the problem is.
- Model town and country as separate fields end to end, not just at the
  boundary.
- Add `CBPR-ADDR-001` to `CBPR-ADDR-003` to your pre-submission validation,
  with the effective date, so failures surface before 14 November rather than
  on it.
- Add a negative test that a fully unstructured address is rejected. A rule you
  have never seen fire is a rule you cannot rely on.

### Dati

- Measure how many records are missing a structured town or country **now**, so
  the remediation effort is a number rather than a guess. The batch scan
  produces exactly this.
- Identify the authoritative source per field. Addresses often arrive from
  several systems with different conventions.
- Country must be a two-letter ISO 3166 code. `GB`, not `United Kingdom` or
  `GBR` — `CBPR-ADDR-003` fails on the latter two.

### Test

- Test the day before, the day of, and the day after the effective date.
  Effective-date logic is where date-boundary bugs live.
- Test CBPR+ and CHAPS separately. They are modelled as distinct rules here for
  a reason.
- Include a hybrid address in the passing set. A test suite that only accepts
  fully structured addresses will reject valid traffic.

### Operations

- Know what a rejection for this reason will look like in your monitoring, and
  who triages it.
- Confirm your counterparties' readiness, not only your own. A compliant message
  can still fail if the receiving side is not ready.

### Direzione

- The exposure is the count of records that would fail today, not the count of
  systems. Ask for the number.
- Note the 2027 obligations below. Teams that treat November 2026 as the finish
  line will repeat this work in twelve months.

## Differenze tra schemi

| | SWIFT CBPR+ | Bank of England CHAPS |
|---|---|---|
| Unstructured rejected | 14 November 2026 | 14 November 2026 |
| Minimum acceptable | Hybrid | Hybrid |
| Enforced by | CBPR+ usage guidelines | CHAPS validation library |
| Purpose codes | Not mandated by this change | Mandatory for all payments from November 2027 |
| Structured remittance | Not mandated by this change | Mandatory from November 2027 |
| Rules here | `CBPR-ADDR-001` – `006` | `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |

## Fonti

Every rule on this page derives from one of these. Rules marked *announced* are
published intentions whose exact date should be re-verified before you rely on
them.

| Fonte | Editore | Documento | Verificato |
|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2026-07-28 |

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

