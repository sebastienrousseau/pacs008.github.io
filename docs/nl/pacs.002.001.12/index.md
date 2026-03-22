---
title: pacs.002.001.12 — FI to FI Payment Status Report | Nederlands
description: Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **ISO-naam** | FIToFIPaymentStatusReportV12 |
| **Registratiestatus** | Registered |
| **Jaar** | 2019 |
| **Versie** | 12 |

## Overzicht

Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel
- **OrgnlGrpInfAndSts** — Oorspronkelijke groepsinformatie en status voor rapportage op groepsniveau
- **TxInfAndSts** — Transactie-informatie en status voor individuele transactieresultaten
- **StsRsnInf** — Statusredeninformatie met gestructureerde redencodes
- **OrgnlTxRef** — Oorspronkelijke transactiereferentie die terugverwijst naar de broninstructie

## Zakelijke context

- Gebruikt om afwikkeling te bevestigen of afwijzing te rapporteren van overboekingen, incasso's en betalingsretourzendingen
- Maakt reconciliatie mogelijk tussen opdrachtgevende en opdrachthebbende agenten
- Vereist in CBPR+-stromen om verwerking van pacs.008- en pacs.009-berichten te bevestigen
- Ondersteunt zowel statusrapportage op groepsniveau als op individueel transactieniveau

## CBPR+- en schema-context

- Vervangt MT199 en statusverhalen in veld 79 van MT-berichten
- CBPR+ schrijft pacs.002 voor voor alle betalingsstatuscommunicatie
- Gestructureerde redencodes vervangen vrije-tekstafwijzingsverklaringen
- Integratie met SWIFT gpi-tracking vereist pacs.002 voor end-to-end transparantie

## Berichtstroom

De opdrachthebbende agent (ontvanger) stuurt pacs.002 terug naar de opdrachtgevende agent (verzender) om acceptatie, afwikkeling of afwijzing te bevestigen van een ontvangen betalingsinstructie zoals pacs.008 of pacs.009.

## Gerelateerde berichten

- [`pacs.008.001.13`](/nl/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/nl/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.028.001.05`](/nl/pacs.028.001.05/) — FI to FI Payment Status Request

