---
title: pacs.003.001.09 — FI to FI Customer Direct Debit | Nederlands
description: Het pacs.003-bericht wordt uitgewisseld tussen financiële instellingen om een incasso-instructie van de klant uit te voeren. Het stelt de bank van de crediteur in staat om namens de crediteur gelden te innen bij de bank van de debiteur.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **ISO-naam** | FIToFICustomerDirectDebitV09 |
| **Registratiestatus** | Registered |
| **Jaar** | 2019 |
| **Versie** | 9 |

## Overzicht

Het pacs.003-bericht wordt uitgewisseld tussen financiële instellingen om een incasso-instructie van de klant uit te voeren. Het stelt de bank van de crediteur in staat om namens de crediteur gelden te innen bij de bank van de debiteur.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en afwikkelingsinformatie
- **DrctDbtTxInf** — Incassotransactie-informatie met bedrag en partijen
- **Cdtr** — Identificatie van de crediteur en rekeninggegevens
- **CdtrAgt** — Identificatie van de crediteuragent (incasserende instelling)
- **DbtrAgt** — Identificatie van de debiteuragent (betalende instelling)

## Zakelijke context

- Ondersteunt SEPA Core- en B2B-incassoschema's
- Gebruikt voor terugkerende betalingsincasso's zoals abonnementen, energierekeningen en leningaflossingen
- Vereist een geldige mandaatreferentie tussen debiteur en crediteur
- Maakt bulkincasso van meerdere incasso-instructies in één bericht mogelijk

## CBPR+- en schema-context

- Vereisten voor gestructureerde adressen en partij-identificatie gelden ook voor incasso's
- Mandaatgerelateerde gegevens moeten vanaf november 2026 volledig gestructureerd zijn
- Vervangt verouderde incassoformaten in MT104-stijl bij grensoverschrijdende stromen
- Validatie van crediteurschema-identificatie wordt steeds strenger gehandhaafd

## Berichtstroom

De crediteuragent initieert pacs.003 richting de debiteuragent om gelden te innen. De debiteuragent valideert het mandaat, controleert de rekeningdekking en wikkelt de transactie af of retourneert deze.

## Gerelateerde berichten

- [`pacs.004.001.11`](/nl/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/nl/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.002.001.12`](/nl/pacs.002.001.12/) — FI to FI Payment Status Report

