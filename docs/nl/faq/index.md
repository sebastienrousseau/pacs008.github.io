---
title: "Frequently asked questions | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# Frequently asked questions

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## Algemeen

### Wat is ISO 20022?

ISO 20022 is een internationale standaard voor financieel berichtenverkeer. Het definieert een gemeenschappelijke taal en model voor betalingsberichten die worden uitgewisseld tussen financiële instellingen. In tegenstelling tot oudere formaten zoals SWIFT MT, gebruikt ISO 20022 XML en ondersteunt het rijkere, meer gestructureerde gegevens.

### Wat zijn pacs-berichten?

De pacs-berichtenfamilie (payments clearing and settlement) omvat interbancaire betalingsinstructies, statusrapporten, retourzendingen, terugboekingen en verzoeken. Het omvat pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 en pacs.028.

### Hoe verschillen pacs-berichten van SWIFT MT-berichten?

SWIFT MT-berichten gebruiken een plat veld-tag-formaat. Pacs-berichten gebruiken hiërarchisch XML met rijkere gegevensstructuren.

### Wat is de relatie tussen pain- en pacs-berichten?

Pain-berichten (payment initiation) reizen tussen de klant en hun bank. Pacs-berichten reizen tussen banken. Een pain.001 wordt een pacs.008 interbancaire instructie.

## Berichtselectie

### Wanneer moet ik pacs.008 gebruiken?

Gebruik pacs.008 voor klantoverschrijvingsinstructies tussen banken. Het draagt partijgegevens van debiteur en crediteur, bedragen, overmakingsinformatie en afwikkelingsgegevens.

### Wanneer moet ik pacs.009 gebruiken in plaats van pacs.008?

Gebruik pacs.009 voor overdrachten op eigen rekening van de instelling, financieringsetappes en dekkingsbetalingen.

### Wat is het verschil tussen pacs.004 en pacs.007?

pacs.004 retourneert afgewikkelde fondsen van de ontvangende zijde. pacs.007 boekt een betaling terug van de oorspronkelijke instructiezijde.

### Wanneer moet ik pacs.028 gebruiken in plaats van te wachten op pacs.002?

Gebruik pacs.028 wanneer u actief de status van een betaling moet opvragen die geen tijdige pacs.002-update heeft ontvangen.

### Waarvoor wordt pacs.003 gebruikt?

pacs.003 draagt automatische-incasso-instructies van klanten over tussen banken voor fondsenincasso.

### Waarvoor wordt pacs.010 gebruikt?

pacs.010 behandelt automatische incasso's tussen financiële instellingen op hun eigen rekeningen.

## Berichtstructuur

### Wat is de groepsheader (GrpHdr)?

De groepsheader verschijnt exact één keer per pacs-bericht. Bevat MsgId, CreDtTm, NbOfTxs en SttlmInf.

### Wat zijn de betalingsidentificatoren in pacs.008?

pacs.008 gebruikt vier hoofdidentificatoren: MsgId, InstrId, EndToEndId, TxId en UETR. EndToEndId en TxId mogen niet worden gewijzigd.

### Welke afwikkelingsmethoden zijn beschikbaar?

Vier methoden: CLRG, INDA, INGA en COVE.

### Wat betekenen de kostendragercodes?

DEBT — alle kosten voor de debiteur. CRED — voor de crediteur. SHAR — gedeeld. SLEV — verplicht voor SEPA.

## CBPR+ en migratie

### Wat is CBPR+?

CBPR+ is het SWIFT-programma voor de adoptie van ISO 20022 in grensoverschrijdend betalingsberichtenverkeer. Het ging live in maart 2023.

### Wat is er gebeurd met de MT/MX-coëxistentieperiode?

De coëxistentieperiode eindigde in november 2025. Sindsdien moeten CBPR+-berichten het ISO 20022-formaat (MX) gebruiken.

### Wat is de deadline voor gestructureerde adressen in november 2026?

Vanaf november 2026 vereist SWIFT CBPR+ gestructureerde postadressen. Minimaal TwnNm en Ctry zijn verplicht.

### Hoe vervangt pacs.008 MT103?

pacs.008 vervangt MT103 en MT103+. MT103-veld 20 mapt naar MsgId of InstrId; veld 32A splitst in IntrBkSttlmDt en IntrBkSttlmAmt; veld 50a mapt naar Dbtr en DbtrAcct.

### Hoe vervangt pacs.009 MT202?

pacs.009 vervangt MT202 en MT202COV. In dekkingsstromen draagt pacs.009 de financieringsetappe en pacs.008 de klantinstructie direct.

## Technische details

### Wat zijn gestructureerde en ongestructureerde adressen?

Gestructureerde adressen gebruiken afzonderlijke XML-elementen: StrtNm, BldgNb, PstCd, TwnNm, Ctry. Ongestructureerde adressen gebruiken tot zeven AdrLine-elementen.

### Wat is UETR en hoe werkt gpi-tracking?

UETR is een UUID v4-identificator gegenereerd door de debiteuragent en ongewijzigd meegevoerd door alle etappes. SWIFT gpi gebruikt UETR voor tracking.

### Wat zijn veelvoorkomende pacs.002-statuscodes?

ACCP (geaccepteerd), ACSP (afwikkeling in uitvoering), ACSC (afwikkeling voltooid), RJCT (afgewezen), PDNG (in behandeling).

### Wat zijn veelvoorkomende retourredencodes in pacs.004?

AC01, AC04, AC06, AM04, BE04, CUST, DUPL, FOCR, FR01.

### Wat is gestructureerde overmakingsinformatie?

Gestructureerde overmaking in pacs.008 gebruikt het element RmtInf/Strd voor documentreferenties, bedragen en crediteurreferenties.

### Wat is LEI en wanneer wordt het gebruikt?

LEI is een alfanumerieke code van 20 tekens per ISO 17442. Verschijnt in OrgId/LEI voor partijen en FinInstnId/LEI voor agenten.

## Over de pacs008-toolkit

### Wat doet pacs008?

pacs008 is een Python-toolkit die ISO 20022 betalingsberichten genereert, valideert en levert.

### Welke berichttypen ondersteunt pacs008?

Acht typen: pacs.002.001.12, pacs.003.001.09, pacs.004.001.11, pacs.007.001.11, pacs.008.001.13, pacs.009.001.10, pacs.010.001.05 en pacs.028.001.05.

### Hoe helpt pacs008 met de deadline voor gestructureerde adressen van 2026?

pacs008 valideert gestructureerde en hybride postadresvelden vóór XML-generatie.

### Kan pacs008 gegevens valideren zonder XML te genereren?

Ja. Gebruik de CLI-vlag `--dry-run` of het API-endpoint `POST /validate`.

## Referenties

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

