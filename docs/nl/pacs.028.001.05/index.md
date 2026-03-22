---
title: pacs.028.001.05 — FI to FI Payment Status Request | Nederlands
description: Het pacs.028-bericht wordt door een financiële instelling verzonden om de status op te vragen van een eerder verzonden betalingsinstructie. Het maakt proactieve tracking van betalingsverwerking mogelijk zonder te wachten op een ongevraagd statusrapport.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **ISO-naam** | FIToFIPaymentStatusRequestV05 |
| **Registratiestatus** | Registered |
| **Jaar** | 2019 |
| **Versie** | 5 |

## Overzicht

Het pacs.028-bericht wordt door een financiële instelling verzonden om de status op te vragen van een eerder verzonden betalingsinstructie. Het maakt proactieve tracking van betalingsverwerking mogelijk zonder te wachten op een ongevraagd statusrapport.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel
- **TxInf** — Transactie-informatie die de betaling identificeert waarover wordt geïnformeerd
- **OrgnlGrpInf** — Oorspronkelijke groepsinformatie met verwijzing naar het bronbericht
- **OrgnlInstrId** — Oorspronkelijke instructie-identificatie uit de bronbetaling
- **OrgnlEndToEndId** — Oorspronkelijke end-to-end-identificatie voor traceerbaarheid

## Zakelijke context

- Maakt proactieve statusopvraging mogelijk voor betalingsinstructies in transit
- Ondersteunt operationele teams bij het onderzoeken van vertraagde of ontbrekende betalingen
- Vult pacs.002 aan door statuscommunicatie te initiëren in plaats van af te wachten
- Gebruikt in workflows voor uitzonderingsafhandeling en SLA-monitoring

## CBPR+- en schema-context

- Vervangt MT199-statusopvragingspatronen en handmatige SWIFT-berichtqueries
- CBPR+ ondersteunt gestructureerde statusverzoeken gekoppeld aan oorspronkelijke berichtidentificatoren
- UETR-gebaseerde tracking via gpi vermindert de noodzaak van handmatige opvragingen
- Wordt steeds vaker geïntegreerd in geautomatiseerde dashboards voor betalingsoperaties

## Berichtstroom

De opdrachtgevende agent stuurt pacs.028 naar de opdrachthebbende agent om de status van een specifieke betaling op te vragen. De opdrachthebbende agent antwoordt met een pacs.002 met de huidige verwerkingsstatus.

## Gerelateerde berichten

- [`pacs.002.001.12`](/nl/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.008.001.13`](/nl/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/nl/pacs.009.001.10/) — Financial Institution Credit Transfer

