---
title: pacs.004.001.11 — Payment Return | Nederlands
description: Het pacs.004-bericht wordt gebruikt om een eerder afgewikkelde betalingstransactie te retourneren. Het keert de geldstroom om wanneer een betaling niet kan worden toegepast, per abuis is verzonden of door de opdrachtgevende instelling wordt teruggevorderd.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **ISO-naam** | PaymentReturnV11 |
| **Registratiestatus** | Registered |
| **Jaar** | 2019 |
| **Versie** | 11 |

## Overzicht

Het pacs.004-bericht wordt gebruikt om een eerder afgewikkelde betalingstransactie te retourneren. Het keert de geldstroom om wanneer een betaling niet kan worden toegepast, per abuis is verzonden of door de opdrachtgevende instelling wordt teruggevorderd.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel
- **TxInf** — Transactie-informatie met retourbedrag en partijen
- **OrgnlGrpInf** — Oorspronkelijke groepsinformatie met verwijzing naar het bronbericht
- **RtrRsnInf** — Retourredeninformatie met gestructureerde redencodes
- **OrgnlTxRef** — Oorspronkelijke transactiereferentie voor matching en reconciliatie

## Zakelijke context

- Behandelt retourzendingen na afwikkeling wanneer de rekening van de begunstigde niet kan worden gecrediteerd
- Ondersteunt terugvorderingsscenario's waarbij de opdrachtgever restitutie van gelden verzoekt
- Bevat gestructureerde retourredencodes voor regelgevende en operationele transparantie
- Is van toepassing op zowel retourzendingen van overboekingen (pacs.008) als retourzendingen van incasso's (pacs.003)

## CBPR+- en schema-context

- Vervangt MT103 RETURN en retourberichtenverkeer via de dekkingsmethode
- Retourredencodes zijn gestandaardiseerd en machinaal leesbaar onder ISO 20022
- CBPR+ vereist volledige oorspronkelijke transactiereferentiegegevens voor matching
- SWIFT gpi-tracking wordt uitgebreid naar retourtransacties voor end-to-end zichtbaarheid

## Berichtstroom

De opdrachthebbende agent stuurt pacs.004 terug door de betalingsketen om eerder afgewikkelde gelden te retourneren. Elke agent in de keten verwerkt de retourzending en crediteert de betreffende rekeningen terug.

## Gerelateerde berichten

- [`pacs.008.001.13`](/nl/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.003.001.09`](/nl/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.002.001.12`](/nl/pacs.002.001.12/) — FI to FI Payment Status Report

