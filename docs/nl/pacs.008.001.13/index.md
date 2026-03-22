---
title: pacs.008.001.13 — FI to FI Customer Credit Transfer | Nederlands
description: Het pacs.008-bericht is de kernbetalingsinstructie die wordt uitgewisseld tussen financiële instellingen om namens een klant gelden over te maken. Het bevat informatie over debiteur, crediteur, bedrag en betalingskenmerken voor een of meer overboekingstransacties.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **ISO-naam** | FIToFICustomerCreditTransferV13 |
| **Registratiestatus** | Registered |
| **Jaar** | 2023 |
| **Versie** | 13 |

## Overzicht

Het pacs.008-bericht is de kernbetalingsinstructie die wordt uitgewisseld tussen financiële instellingen om namens een klant gelden over te maken. Het bevat informatie over debiteur, crediteur, bedrag en betalingskenmerken voor een of meer overboekingstransacties.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met bericht-ID, aanmaakdatum, aantal transacties en afwikkelingsinformatie
- **CdtTrfTxInf** — Overboekingstransactie-informatie met bedrag, kosten en doel
- **Dbtr / DbtrAgt** — Identificatie van debiteur en debiteuragent met rekeninggegevens
- **Cdtr / CdtrAgt** — Identificatie van crediteur en crediteuragent met rekeninggegevens
- **RmtInf** — Betalingskenmerkinformatie voor gestructureerde of ongestructureerde betalingsreferenties

## Zakelijke context

- Het primaire bericht voor door klanten geïnitieerde grensoverschrijdende en binnenlandse overboekingen
- Gebruikt in SEPA SCT, SEPA Instant, CBPR+ en nationale verrekeningssystemen
- Bevat gestructureerde betalingskenmerkinformatie ter ondersteuning van geautomatiseerde reconciliatie
- Ondersteunt seriële, dekkings- en directe afwikkelingsmethoden voor betalingsketens met meerdere schakels

## CBPR+- en schema-context

- Vervangt MT103 en MT103+ voor grensoverschrijdende overboekingen van klanten
- De deadline voor gestructureerde adressen van november 2026 geldt voor alle postadressen van partijen
- SWIFT gpi vereist pacs.008 voor end-to-end tracking op basis van UETR
- 13 revisies weerspiegelen de voortdurende schema-evolutie over marktinfrastructuren heen

## Berichtstroom

De debiteuragent maakt een pacs.008 aan en stuurt dit naar de crediteuragent (rechtstreeks of via tussenpersonen). Elke agent in de keten valideert, verrijkt en stuurt de instructie door totdat de crediteuragent de rekening van de begunstigde crediteert.

## Ondersteunde versies

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Gerelateerde berichten

- [`pacs.002.001.12`](/nl/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.004.001.11`](/nl/pacs.004.001.11/) — Payment Return
- [`pacs.009.001.10`](/nl/pacs.009.001.10/) — Financial Institution Credit Transfer

