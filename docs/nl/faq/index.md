---
title: "Veelgestelde vragen over ISO 20022 | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: nl-NL
lastUpdated: true
image: /logo.webp
---

# Veelgestelde vragen over ISO 20022

Common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## Algemeen

### Wat is ISO 20022?

ISO 20022 is een internationale standaard voor financieel berichtenverkeer. Het definieert een gemeenschappelijke taal en model voor betalingsberichten die worden uitgewisseld tussen financiële instellingen. In tegenstelling tot oudere formaten zoals SWIFT MT, gebruikt ISO 20022 XML en ondersteunt het rijkere, meer gestructureerde gegevens voor partijen, bedragen en referenties.

### Wat zijn pacs-berichten?

De pacs-berichtenfamilie (payments clearing and settlement) omvat interbancaire betalingsinstructies, statusrapporten, retourzendingen, terugboekingen en verzoeken. Het omvat pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 en pacs.028. Elk bericht vervult een specifieke rol in de betalingslevenscyclus.

### Hoe verschillen pacs-berichten van SWIFT MT-berichten?

SWIFT MT-berichten gebruiken een plat veld-tag-formaat (bijv. MT103 voor klantoverboeking). Pacs-berichten gebruiken hiërarchisch XML met rijkere gegevensstructuren. Belangrijke verschillen zijn ondersteuning voor meerdere transacties per bericht, gestructureerde partij-identificatie (LEI, meerdere ID's), gestructureerde postadressen en gestructureerde overmakingsinformatie. MT103 mapt naar pacs.008, MT202 mapt naar pacs.009, en MT199-statustekst wordt vervangen door pacs.002.

### Wat is de relatie tussen pain- en pacs-berichten?

Pain-berichten (payment initiation) reizen tussen de klant en hun bank. Pacs-berichten reizen tussen banken. Een pain.001 klantoverboeking-initiatie van de debiteurbank wordt een pacs.008 interbancaire instructie. De twee domeinen delen gemeenschappelijke gegevenselementen maar bedienen verschillende delen van de betalingsketen.

## Berichtselectie

### Wanneer moet ik pacs.008 gebruiken?

Gebruik pacs.008 voor klantoverschrijvingsinstructies tussen banken. Het draagt partijgegevens van debiteur en crediteur, bedragen, overmakingsinformatie en afwikkelingsgegevens. Het is het hoofdbericht voor het verzenden van klantbetalingen over het interbancaire netwerk, zowel binnenlands (SEPA) als grensoverschrijdend (CBPR+).

### Wanneer moet ik pacs.009 gebruiken in plaats van pacs.008?

Gebruik pacs.009 voor overdrachten op eigen rekening van de instelling, financieringsetappes en dekkingsbetalingen. In tegenstelling tot pacs.008, dat een klantbetaling namens een debiteur vervoert, verplaatst pacs.009 fondsen tussen banken voor eigen rekening. Bij dekkingsstromen draagt pacs.009 de financiering terwijl pacs.008 de klantinstructie via een apart pad vervoert.

### Wat is het verschil tussen pacs.004 en pacs.007?

pacs.004 retourneert afgewikkelde fondsen van de ontvangende zijde terug door de keten. pacs.007 boekt een betaling terug van de oorspronkelijke instructiezijde voorwaarts door de keten. Gebruik pacs.004 wanneer de begunstigdenbank het credit niet kan toepassen na afwikkeling. Gebruik pacs.007 wanneer de initiator een fout, duplicaat of fraude ontdekt.

### Wanneer moet ik pacs.028 gebruiken in plaats van te wachten op pacs.002?

Gebruik pacs.028 wanneer u actief de status van een betaling moet opvragen die geen tijdige pacs.002-update heeft ontvangen. pacs.002 is gebeurtenisgestuurd (de ontvangende agent stuurt het proactief), terwijl pacs.028 uitzonderingsgestuurd is (de instruerende agent vraagt het op). Gebruik pacs.028 voor vertraagde, onduidelijke of ontbrekende betalingsupdates, niet als routineverkeer.

### Waarvoor wordt pacs.003 gebruikt?

pacs.003 draagt automatische-incasso-instructies van klanten over tussen banken. De crediteuragent stuurt het naar de debiteuragent om fondsen te innen. Het vereist een geldige mandaatreferentie en ondersteunt de SEPA Core en B2B automatische-incassoschema's. Het wordt niet gebruikt voor overschrijvingen of automatische incasso's op eigen rekening tussen instellingen.

### Waarvoor wordt pacs.010 gebruikt?

pacs.010 behandelt automatische incasso's tussen financiële instellingen op hun eigen rekeningen. Het wordt gebruikt voor bank-tot-bank-incasso's zoals vergoedingen, margestortingen en vergelijkbare verplichtingen onder bilaterale overeenkomsten. Het wordt niet gebruikt voor automatische incasso's van klanten of overschrijvingen.

## Berichtstructuur

### Wat is de groepsheader (GrpHdr)?

De groepsheader verschijnt exact één keer per pacs-bericht. Het bevat het berichtidentificatienummer (MsgId), het aanmaaktijdstempel (CreDtTm), het aantal transacties (NbOfTxs), afwikkelingsinformatie (SttlmInf), en optioneel het totale interbancaire afwikkelingsbedrag en betalingstype-informatie. Het identificeert de berichtenvelop, niet de individuele zakelijke transacties.

### Wat zijn de betalingsidentificatoren in pacs.008?

pacs.008 gebruikt vier hoofdidentificatoren. MsgId identificeert de berichtenvelop en verandert bij elke schakel. InstrId is een punt-tot-punt-referentie tussen aangrenzende agenten en kan bij elke schakel veranderen. EndToEndId wordt ingesteld door de initiator en mag door geen enkele agent in de keten worden gewijzigd. TxId wordt toegekend door de eerste instruerende agent en blijft constant in de interbancaire ruimte. UETR is een UUID die ongewijzigd blijft over alle segmenten voor end-to-end tracking.

### Welke afwikkelingsmethoden zijn beschikbaar?

Vier afwikkelingsmethoden zijn gedefinieerd. CLRG wikkelt af via een verrekeningssysteem zoals TARGET2, EURO1 of CHIPS. INDA wikkelt af in de boeken van de geïnstrueerde agent waar de debiteuragent een rekening aanhoudt. INGA wikkelt af in de boeken van de instruerende agent waar de geïnstrueerde agent een rekening aanhoudt. COVE wikkelt af via een afzonderlijke dekkingsbetaling die door pacs.009 wordt gedragen.

### Wat betekenen de kostendragercodes?

DEBT betekent dat alle kosten voor rekening van de debiteur komen (equivalent MT103 OUR). CRED betekent dat alle kosten voor rekening van de crediteur komen (equivalent BEN). SHAR betekent dat de kosten worden gedeeld tussen de agenten van debiteur en crediteur (equivalent SHA). SLEV betekent dat de kosten de regels van het serviceniveau volgen en is verplicht voor SEPA-overschrijvingen.

## CBPR+ en migratie

### Wat is CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) is het SWIFT-programma voor de adoptie van ISO 20022 in grensoverschrijdend betalingsberichtenverkeer. Het ging live in maart 2023 en vervangt MT-berichten door pacs-equivalenten. CBPR+ schrijft pacs.002 voor voor alle statuscommunicatie, ondersteunt rijkere partijgegevens en gestructureerde adressen, en gebruikt UETR-gebaseerde tracking via gpi.

### Wat is er gebeurd met de MT/MX-coëxistentieperiode?

De coëxistentieperiode voor grensoverschrijdende betalingsinstructies eindigde in november 2025. Sindsdien moeten CBPR+-berichten het ISO 20022-formaat (MX) gebruiken. Vertaaldiensten die tijdens de overgang tussen MT en MX converteerden, zijn niet meer beschikbaar voor nieuwe stromen. Banken moeten nu native pacs-berichten verzenden en ontvangen.

### Wat is de deadline voor gestructureerde adressen in november 2026?

Vanaf november 2026 vereist SWIFT CBPR+ gestructureerde postadressen in grensoverschrijdende betalingsberichten. Ongestructureerde adresregels (alleen AdrLine) worden niet meer geaccepteerd voor belangrijke partijvelden. Minimaal zijn TwnNm en Ctry vereist, met StrtNm en BldgNb of PstBx aanbevolen. Dit verbetert sanctiescreening en vermindert handmatig herstel.

### Hoe vervangt pacs.008 MT103?

pacs.008 vervangt MT103 en MT103+ voor klantoverschrijvingen. Belangrijke mapping: MT103-veld 20 mapt naar MsgId of InstrId; veld 32A splitst in IntrBkSttlmDt en IntrBkSttlmAmt; veld 50a mapt naar Dbtr en DbtrAcct; veld 59a mapt naar Cdtr en CdtrAcct; veld 70 mapt naar RmtInf; veld 71A mapt naar ChrgBr. pacs.008 voegt UETR, gestructureerde overmaking, LEI-identificatie toe en ondersteunt meerdere transacties per bericht.

### Hoe vervangt pacs.009 MT202?

pacs.009 vervangt MT202 en MT202COV voor overdrachten tussen instellingen. In dekkingsstromen wordt de MT202COV (die zowel de financiering als de onderliggende klantgegevens vervoerde) netjes opgesplitst: pacs.009 draagt het financieringssegment terwijl pacs.008 de klantinstructie direct draagt. Deze scheiding verbetert de gegevenskwaliteit en vermindert reconciliatieproblemen.

## Technische details

### Wat zijn gestructureerde en ongestructureerde adressen?

Gestructureerde adressen gebruiken afzonderlijke XML-elementen voor elke component: StrtNm (straat), BldgNb (gebouwnummer), PstCd (postcode), TwnNm (stad), Ctry (land), en optionele elementen zoals Flr, Room en DstrctNm. Ongestructureerde adressen gebruiken tot zeven AdrLine-elementen met vrije tekst. Hybride adressen combineren beide tijdens de overgangsperiode. Na november 2026 vereist CBPR+ het gestructureerde formaat.

### Wat is UETR en hoe werkt gpi-tracking?

UETR (Unique End-to-End Transaction Reference) is een UUID v4-identificator gegenereerd door de debiteuragent en ongewijzigd meegevoerd door alle segmenten van een betaling. Het verschijnt in pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 en pacs.028. SWIFT gpi gebruikt de UETR om betalingen te tracken via een cloudgebaseerde Tracker-database. Elke agent bevestigt ontvangst en verwerking, wat end-to-end zichtbaarheid en SLA-monitoring mogelijk maakt.

### Wat zijn veelvoorkomende pacs.002-statuscodes?

ACCP betekent geaccepteerd na controles van het klantprofiel. ACSP betekent geaccepteerd en afwikkeling is in uitvoering. ACSC betekent dat de afwikkeling op de debiteurrekening is voltooid. RJCT betekent afgewezen (met een redencode in StsRsnInf). PDNG betekent in behandeling voor verdere verwerking. RCVD betekent ontvangen maar nog niet verwerkt. Elke status kan een gestructureerde redencode bevatten zoals AC01 (onjuist rekeningnummer), AM04 (ontoereikend saldo) of RC01 (onjuiste BIC).

### Wat zijn veelvoorkomende retourredencodes in pacs.004?

Veelvoorkomende retourredencodes zijn AC01 (onjuist rekeningnummer), AC04 (gesloten rekening), AC06 (geblokkeerde rekening), AM04 (ontoereikend saldo), BE04 (ontbrekend crediteuradres), CUST (op verzoek van de klant), DUPL (dubbele betaling), FOCR (na annuleringsverzoek) en FR01 (fraude). De volledige lijst is gedefinieerd in de ISO 20022 External Code Sets.

### Wat is gestructureerde overmakingsinformatie?

Gestructureerde overmaking in pacs.008 gebruikt het element RmtInf/Strd om documentreferenties (factuurnummers, creditnota's), bedragen (verschuldigd, overgemaakt, belasting, korting) en crediteurreferenties (ISO 11649 RF-referenties) te dragen. Dit maakt geautomatiseerde factuurkoppeling en reconciliatie mogelijk. Veelgebruikte documenttypecodes zijn CINV (handelsfactuur), CREN (creditnota) en SOAC (rekeningoverzicht).

### Wat is LEI en wanneer wordt het gebruikt?

LEI (Legal Entity Identifier) is een alfanumerieke code van 20 tekens conform ISO 17442. Het identificeert op unieke wijze juridische entiteiten die deelnemen aan financiële transacties. In pacs-berichten verschijnt LEI in OrgId/LEI voor partijen en FinInstnId/LEI voor agenten. CBPR+ moedigt LEI steeds meer aan voor partij- en agentidentificatie. Het verbetert de disambiguatie van entiteiten en ondersteunt vereisten voor regelgevende rapportage.

## Over de pacs008-toolkit

### Wat doet pacs008?

pacs008 is een Python-toolkit die ISO 20022 betalingsberichten genereert, valideert en levert. Het leest betalingsgegevens uit CSV-, JSON-, JSONL-, SQLite- en Parquet-bronnen, valideert tegen JSON Schema en XSD, controleert IBAN- en BIC-identificatoren, schoont gegevens op voor SWIFT-tekenconformiteit en produceert XML-bestanden. Het biedt een REST API, CLI en Python-bibliotheek.

### Welke berichttypen ondersteunt pacs008?

pacs008 ondersteunt acht berichttypen: pacs.002.001.12 (statusrapport), pacs.003.001.09 (klantautomatische incasso), pacs.004.001.11 (betalingsretour), pacs.007.001.11 (betalingsterugboeking), pacs.008.001.13 (klantoverschrijving), pacs.009.001.10 (overschrijving tussen financiële instellingen), pacs.010.001.05 (automatische incasso tussen financiële instellingen) en pacs.028.001.05 (betalingsstatusverzoek).

### Hoe helpt pacs008 met de deadline voor gestructureerde adressen van 2026?

pacs008 valideert gestructureerde en hybride postadresvelden vóór XML-generatie. Het signaleert ongestructureerde adresgegevens die na de deadline van november 2026 zouden falen, ondersteunt zowel hybride formaten vóór de deadline als uitsluitend gestructureerde formaten na de deadline, en integreert adrescontroles in CI-pipelines en batchvalidatieworkflows.

### Kan pacs008 gegevens valideren zonder XML te genereren?

Ja. Gebruik de CLI-vlag `--dry-run` of het API-endpoint `POST /validate` om betalingsgegevens te valideren zonder XML te genereren. De validatiepipeline controleert JSON Schema-conformiteit, IBAN-formaat en -checksum, BIC-structuur en SWIFT-tekenconformiteit. De exitcode of API-respons geeft aan of de validatie is geslaagd of mislukt.

## Referenties

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

