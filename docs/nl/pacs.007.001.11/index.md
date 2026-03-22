---
title: pacs.007.001.11 — FI to FI Payment Reversal | Nederlands
description: Het pacs.007-bericht wordt gebruikt om een eerder verzonden betalingsinstructie die nog niet is afgewikkeld te storneren of om stornering van een afgewikkelde betaling te verzoeken. In tegenstelling tot pacs.004 (retourzending) wordt het geïnitieerd door de oorspronkelijke opdrachtgevende agent.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **ISO-naam** | FIToFIPaymentReversalV11 |
| **Registratiestatus** | Registered |
| **Jaar** | 2019 |
| **Versie** | 11 |

## Overzicht

Het pacs.007-bericht wordt gebruikt om een eerder verzonden betalingsinstructie die nog niet is afgewikkeld te storneren of om stornering van een afgewikkelde betaling te verzoeken. In tegenstelling tot pacs.004 (retourzending) wordt het geïnitieerd door de oorspronkelijke opdrachtgevende agent.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel
- **TxInf** — Transactie-informatie met storneringsbedrag en partijen
- **OrgnlGrpInf** — Oorspronkelijke groepsinformatie met verwijzing naar het bronbericht
- **RvslRsnInf** — Storneringsredeninformatie met gestructureerde redencodes
- **OrgnlTxRef** — Oorspronkelijke transactiereferentie voor end-to-end traceerbaarheid

## Zakelijke context

- Geïnitieerd wanneer de oorspronkelijke verzender een fout constateert vóór of na afwikkeling
- Gebruikt bij fraudescenario's waarbij snelle stornering vereist is
- Ondersteunt zowel volledige als gedeeltelijke stornering van oorspronkelijke betalingsbedragen
- Bevat gestructureerde storneringsredencodes voor verdere verwerking in de keten

## CBPR+- en schema-context

- Onderscheidt zich van pacs.004 door de richting — stornering gaat voorwaarts vanuit de opdrachtgever, retourzending gaat achterwaarts vanuit de begunstigde
- CBPR+ vereist koppeling met oorspronkelijke berichtidentificatoren voor geautomatiseerde matching
- Gestructureerde redencodes vervangen vrije-tekstverhalen uit verouderde MT-berichten
- Wordt steeds vaker gebruikt in workflows voor terugvordering van instantbetalingen en fraudepreventie

## Berichtstroom

De opdrachtgevende agent (oorspronkelijke verzender) stuurt pacs.007 voorwaarts door de betalingsketen om een eerder gegeven betalingsinstructie te storneren. Elke agent verwerkt de storneringsinstructie en past de afwikkeling dienovereenkomstig aan.

## Gerelateerde berichten

- [`pacs.008.001.13`](/nl/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.004.001.11`](/nl/pacs.004.001.11/) — Payment Return
- [`pacs.002.001.12`](/nl/pacs.002.001.12/) — FI to FI Payment Status Report

