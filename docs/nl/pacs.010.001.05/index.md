---
title: pacs.010.001.05 — Financial Institution Direct Debit | Nederlands
description: Het pacs.010-bericht wordt tussen financiële instellingen gebruikt voor incassotransacties op eigen rekening van de instelling. Het stelt de ene instelling in staat om gelden rechtstreeks van de rekening van een andere instelling te innen.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **ISO-naam** | FinancialInstitutionDirectDebitV05 |
| **Registratiestatus** | Registered |
| **Jaar** | 2019 |
| **Versie** | 5 |

## Overzicht

Het pacs.010-bericht wordt tussen financiële instellingen gebruikt voor incassotransacties op eigen rekening van de instelling. Het stelt de ene instelling in staat om gelden rechtstreeks van de rekening van een andere instelling te innen.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en afwikkelingsinformatie
- **DrctDbtTxInf** — Incassotransactie-informatie met incassobedrag
- **Cdtr / CdtrAgt** — Identificatie van de crediteurinstelling en haar agent
- **Dbtr / DbtrAgt** — Identificatie van de debiteurinstelling en haar agent
- **IntrBkSttlmAmt** — Interbancair afwikkelingsbedrag in de afwikkelingsvaluta

## Zakelijke context

- Ondersteunt interbancaire incasso-inning tussen financiële instellingen
- Gebruikt voor vergoedingsinning, margestortingen en institutionele afwikkelingsverplichtingen
- Vereist vooraf overeengekomen bilaterale overeenkomsten tussen deelnemende instellingen
- Essentieel voor institutioneel kasbeheer en interbancaire afwikkelingscycli

## CBPR+- en schema-context

- Vervangt elementen van MT204 voor de verwerking van interbancaire incasso's
- Gestructureerde partij-identificatie volgt dezelfde vereisten als andere pacs-berichten
- Validatie van institutionele identificatoren (BIC, LEI) is verplicht
- Opgenomen in roadmaps voor volledige ISO 20022-adoptie over marktinfrastructuren heen

## Berichtstroom

De crediteurinstelling stuurt pacs.010 naar de debiteurinstelling om gelden te innen op basis van een vooraf overeengekomen regeling. De debiteurinstelling valideert het verzoek en wikkelt de incasso af of wijst deze af.

## Gerelateerde berichten

- [`pacs.009.001.10`](/nl/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.002.001.12`](/nl/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/nl/pacs.003.001.09/) — FI to FI Customer Direct Debit

