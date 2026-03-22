---
title: pacs.009.001.10 — Financial Institution Credit Transfer | Nederlands
description: Het pacs.009-bericht wordt gebruikt voor overboekingen tussen financiële instellingen waarbij de overboeking voor eigen rekening van de instelling plaatsvindt en niet namens een klant. Het ondersteunt interbancaire financiering, dekkingsbetalingen en liquiditeitsbeheer.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **ISO-naam** | FinancialInstitutionCreditTransferV10 |
| **Registratiestatus** | Registered |
| **Jaar** | 2019 |
| **Versie** | 10 |

## Overzicht

Het pacs.009-bericht wordt gebruikt voor overboekingen tussen financiële instellingen waarbij de overboeking voor eigen rekening van de instelling plaatsvindt en niet namens een klant. Het ondersteunt interbancaire financiering, dekkingsbetalingen en liquiditeitsbeheer.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en afwikkelingsinformatie
- **CdtTrfTxInf** — Overboekingstransactie-informatie met interbancair afwikkelingsbedrag
- **Dbtr / DbtrAgt** — Identificatie van de debiteurinstelling en haar agent
- **Cdtr / CdtrAgt** — Identificatie van de crediteurinstelling en haar agent
- **IntrBkSttlmAmt** — Interbancair afwikkelingsbedrag in de afwikkelingsvaluta

## Zakelijke context

- Gebruikt voor interbancaire overboekingen voor eigen rekening en dekkingsbetalingen
- Ondersteunt liquiditeitsbeheer tussen correspondentbankpartners
- Bevat het dekkingsdeel van klantenoverboekingen die via de dekkingsmethode worden afgewikkeld
- Maakt treasury- en financieringsoperaties tussen financiële instellingen mogelijk

## CBPR+- en schema-context

- Vervangt MT202 en MT202COV voor overboekingen tussen instellingen
- Dekkingsmethodestromen koppelen pacs.009 aan de onderliggende pacs.008-klantinstructie
- Gestructureerde partijgegevens en LEI-identificatie worden steeds vaker vereist
- SWIFT gpi dekt pacs.009 voor transparantie in het correspondentbankverkeer

## Berichtstroom

De debiteurinstelling stuurt pacs.009 naar de crediteurinstelling om eigen gelden over te maken. Bij betalingen via de dekkingsmethode voorziet pacs.009 in het financieringsdeel terwijl pacs.008 de klantinstructie via een apart pad vervoert.

## Gerelateerde berichten

- [`pacs.008.001.13`](/nl/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.002.001.12`](/nl/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.010.001.05`](/nl/pacs.010.001.05/) — Financial Institution Direct Debit

