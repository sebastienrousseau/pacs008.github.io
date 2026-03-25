---
title: "Veelgestelde vragen | pacs008"
description: Veelgestelde vragen over ISO 20022 pacs-berichten, CBPR+-migratie, berichtselectie, implementatie en de pacs008-toolkit.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# Veelgestelde vragen

Deze pagina beantwoordt veelgestelde vragen over ISO 20022 pacs-berichten, hoe ze samenwerken en hoe pacs008 teams helpt bij de implementatie.

## Algemeen

### Wat is ISO 20022?

ISO 20022 is een internationale standaard voor financiële berichtgeving. Het definieert een gemeenschappelijke taal en model voor betalingsberichten die worden uitgewisseld tussen financiële instellingen. In tegenstelling tot oudere formaten zoals SWIFT MT, gebruikt ISO 20022 XML en ondersteunt het rijkere, meer gestructureerde gegevens voor partijen, bedragen en referenties.

### Wat zijn pacs-berichten?

De pacs-berichtfamilie (payments clearing and settlement) omvat interbancaire betalingsinstructies, statusrapporten, retourzendingen, terugboekingen en informatieverzoeken. Het omvat pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 en pacs.028. Elk bericht vervult een specifieke rol in de betalingslevenscyclus.

### Hoe verschillen pacs-berichten van SWIFT MT-berichten?

SWIFT MT-berichten gebruiken een plat, veldtag-formaat (bijv. MT103 voor klantoverboeking). Pacs-berichten gebruiken hiërarchisch XML met rijkere datastructuren. Belangrijke verschillen zijn ondersteuning voor meerdere transacties per bericht, gestructureerde partij-identificatie (LEI, meerdere ID's), gestructureerde postadressen en gestructureerde overschrijvingsinformatie. MT103 komt overeen met pacs.008, MT202 met pacs.009 en MT199-statustekst wordt vervangen door pacs.002.

### Wat is de relatie tussen pain- en pacs-berichten?

Pain-berichten (payment initiation) gaan tussen de klant en zijn bank. Pacs-berichten gaan tussen banken. Een pain.001 klantoverschrijvingsinitiatie van de bank van de debiteur wordt een interbancaire instructie pacs.008. De twee domeinen delen gemeenschappelijke data-elementen maar bedienen verschillende delen van de betalingsketen.

## Berichtselectie

### Wanneer moet ik pacs.008 gebruiken?

Gebruik pacs.008 voor klantoverschrijvingsinstructies tussen banken. Het bevat partijgegevens van debiteur en crediteur, bedragen, overschrijvingsinformatie en afwikkelingsdetails. Het is het hoofdbericht voor het verzenden van klantbetalingen via het interbancaire netwerk, zowel binnenlands (SEPA) als grensoverschrijdend (CBPR+).

### Wanneer moet ik pacs.009 gebruiken in plaats van pacs.008?

Gebruik pacs.009 voor eigen-rekeningtransfers van instellingen, financieringslegs en dekkingsbetalingen. In tegenstelling tot pacs.008, dat een klantbetaling vervoert namens een debiteur, verplaatst pacs.009 fondsen tussen banken voor eigen rekening. In dekkingsmethode-stromen vervoert pacs.009 de financiering terwijl pacs.008 de klantinstructie vervoert op een apart pad.

### Wat is het verschil tussen pacs.004 en pacs.007?

pacs.004 retourneert afgewikkelde fondsen van de ontvangende kant terug door de keten. pacs.007 boekt een betaling terug van de oorspronkelijke instructerende kant voorwaarts door de keten. Gebruik pacs.004 wanneer de begunstigde bank het krediet niet kan toepassen na afwikkeling. Gebruik pacs.007 wanneer de opdrachtgever een fout, duplicaat of fraude ontdekt.

### Wanneer moet ik pacs.028 gebruiken in plaats van wachten op pacs.002?

Gebruik pacs.028 wanneer u actief de status moet opvragen van een betaling die geen tijdige pacs.002-update heeft ontvangen. pacs.002 is event-gedreven (de ontvangende agent stuurt het proactief), terwijl pacs.028 exception-gedreven is (de instructerende agent vraagt het op). Gebruik pacs.028 voor vertraagde, onduidelijke of ontbrekende betalingsupdates, niet als routineverkeer.

### Waarvoor wordt pacs.003 gebruikt?

pacs.003 vervoert klantincasso-instructies tussen banken. De crediteuragent stuurt het naar de debiteuragent om fondsen te innen. Het vereist een geldige mandaatreferentie en ondersteunt SEPA Core- en B2B-incassoschema's. Het wordt niet gebruikt voor overschrijvingen of eigen-rekeningdebiteringen van instellingen.

### Waarvoor wordt pacs.010 gebruikt?

pacs.010 verwerkt incasso's tussen financiële instellingen op hun eigen rekeningen. Het wordt gebruikt voor bank-tot-bank-incasso's zoals vergoedingen, margestortingen en soortgelijke verplichtingen onder bilaterale overeenkomsten. Het wordt niet gebruikt voor klantincasso's of overschrijvingen.

## Berichtstructuur

### Wat is de Group Header (GrpHdr)?

De Group Header verschijnt precies één keer per pacs-bericht. Het bevat de berichtidentificatie (MsgId), aanmaaktijdstempel (CreDtTm), aantal transacties (NbOfTxs), afwikkelingsinformatie (SttlmInf) en optioneel het totale interbancaire afwikkelingsbedrag en betalingstypeinformatie. Het identificeert de berichtenvelop, niet de individuele zakelijke transacties.

### Wat zijn de betalingsidentificatoren in pacs.008?

pacs.008 gebruikt vier hoofdidentificatoren. MsgId identificeert de berichtenvelop en verandert bij elke hop. InstrId is een punt-tot-punt-referentie tussen aangrenzende agenten en kan per hop veranderen. EndToEndId wordt ingesteld door de opdrachtgever en mag niet worden gewijzigd door enige agent in de keten. TxId wordt toegewezen door de eerste instructerende agent en blijft constant in de interbancaire ruimte. UETR is een UUID die ongewijzigd blijft over alle legs voor end-to-end-tracking.

### Welke afwikkelingsmethoden zijn beschikbaar?

Vier afwikkelingsmethoden zijn gedefinieerd. CLRG wikkelt af via een clearingsysteem zoals TARGET2, EURO1 of CHIPS. INDA wikkelt af op de boeken van de geïnstrueerde agent waar de debiteuragent een rekening houdt. INGA wikkelt af op de boeken van de instructerende agent waar de geïnstrueerde agent een rekening houdt. COVE wikkelt af via een aparte dekkingsbetaling vervoerd door pacs.009.

### Wat betekenen de lastendragercodes?

DEBT betekent dat alle kosten worden gedragen door de debiteur (equivalent aan MT103 OUR). CRED betekent dat alle kosten worden gedragen door de crediteur (equivalent aan BEN). SHAR betekent dat de kosten worden gedeeld tussen debiteur- en crediteuragenten (equivalent aan SHA). SLEV betekent dat de kosten het serviceniveau volgen en is verplicht voor SEPA-overschrijvingen.

## CBPR+ en migratie

### Wat is CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) is het programma van SWIFT voor de adoptie van ISO 20022 in grensoverschrijdende betalingsberichtgeving. Het ging live in maart 2023 en vervangt MT-berichten door pacs-equivalenten. CBPR+ verplicht pacs.002 voor alle statuscommunicatie, ondersteunt rijkere partijgegevens en gestructureerde adressen, en gebruikt UETR-gebaseerde tracking via gpi.

### Wat is er gebeurd met de MT/MX-coëxistentieperiode?

De coëxistentieperiode voor grensoverschrijdende betalingsinstructies eindigde in november 2025. Sindsdien moeten CBPR+-berichten het ISO 20022 (MX)-formaat gebruiken. Vertaalservices die tijdens de transitie converteerden tussen MT en MX zijn niet langer beschikbaar voor nieuwe stromen. Banken moeten nu native pacs-berichten verzenden en ontvangen.

### Wat is de deadline voor gestructureerde adressen in november 2026?

Vanaf november 2026 vereist SWIFT CBPR+ gestructureerde postadressen in grensoverschrijdende betalingsberichten. Ongestructureerde adresregels (alleen AdrLine) worden niet langer geaccepteerd voor belangrijke partijvelden. Minimaal zijn TwnNm en Ctry vereist, met StrtNm en BldgNb of PstBx aanbevolen. Dit verbetert sanctiescreening en vermindert handmatige reparatie.

### Hoe vervangt pacs.008 MT103?

pacs.008 vervangt MT103 en MT103+ voor klantoverschrijvingen. Belangrijkste mapping: MT103-veld 20 komt overeen met MsgId of InstrId; veld 32A splitst in IntrBkSttlmDt en IntrBkSttlmAmt; veld 50a komt overeen met Dbtr en DbtrAcct; veld 59a komt overeen met Cdtr en CdtrAcct; veld 70 komt overeen met RmtInf; veld 71A komt overeen met ChrgBr. pacs.008 voegt UETR, gestructureerde overschrijving, LEI-identificatie toe en ondersteunt meerdere transacties per bericht.

### Hoe vervangt pacs.009 MT202?

pacs.009 vervangt MT202 en MT202COV voor instelling-naar-instelling-transfers. In dekkingsmethode-stromen splitst MT202COV (dat zowel financiering als onderliggende klantgegevens vervoerde) netjes op: pacs.009 vervoert de financieringsleg terwijl pacs.008 de klantinstructie rechtstreeks vervoert. Deze scheiding verbetert de datakwaliteit en vermindert reconciliatieproblemen.

## Technische details

### Wat zijn gestructureerde versus ongestructureerde adressen?

Gestructureerde adressen gebruiken aparte XML-elementen voor elk component: StrtNm (straat), BldgNb (huisnummer), PstCd (postcode), TwnNm (plaats), Ctry (land) en optionele elementen zoals Flr, Room en DstrctNm. Ongestructureerde adressen gebruiken maximaal zeven AdrLine-elementen met vrije tekst. Hybride adressen combineren beide tijdens de overgangsperiode. Na november 2026 vereist CBPR+ het gestructureerde formaat.

### Wat is UETR en hoe werkt gpi-tracking?

UETR (Unique End-to-End Transaction Reference) is een UUID v4-identificator gegenereerd door de debiteuragent en ongewijzigd meegenomen over alle legs van een betaling. Het verschijnt in pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 en pacs.028. SWIFT gpi gebruikt de UETR om betalingen te tracken via een cloud-gebaseerde Tracker-database. Elke agent bevestigt ontvangst en verwerking, wat end-to-end-zichtbaarheid en SLA-monitoring mogelijk maakt.

### Wat zijn veelvoorkomende pacs.002-statuscodes?

ACCP betekent geaccepteerd na klantprofielcontroles. ACSP betekent geaccepteerd en afwikkeling is in uitvoering. ACSC betekent dat de afwikkeling op de debiteurrekening is voltooid. RJCT betekent afgewezen (met een redencode in StsRsnInf). PDNG betekent in afwachting van verdere verwerking. RCVD betekent ontvangen maar nog niet verwerkt. Elke status kan een gestructureerde redencode bevatten zoals AC01 (onjuiste rekening), AM04 (onvoldoende saldo) of RC01 (onjuiste BIC).

### Wat zijn veelvoorkomende retourredencodes in pacs.004?

Veelvoorkomende retourredencodes zijn AC01 (onjuist rekeningnummer), AC04 (gesloten rekening), AC06 (geblokkeerde rekening), AM04 (onvoldoende saldo), BE04 (ontbrekend crediteuradres), CUST (op verzoek van klant), DUPL (dubbele betaling), FOCR (na annuleringsverzoek) en FR01 (fraude). De volledige lijst is gedefinieerd in de ISO 20022 External Code Sets.

### Wat is gestructureerde overschrijvingsinformatie?

Gestructureerde overschrijving in pacs.008 gebruikt het RmtInf/Strd-element voor documentreferenties (factuurnummers, creditnota's), bedragen (verschuldigd, overgemaakt, belasting, korting) en crediteurreferenties (ISO 11649 RF-referenties). Dit maakt geautomatiseerde factuurafstemming en reconciliatie mogelijk. Veelvoorkomende documenttypecodes zijn CINV (commerciële factuur), CREN (creditnota) en SOAC (rekeningafschrift).

### Wat is LEI en wanneer wordt het gebruikt?

LEI (Legal Entity Identifier) is een 20-karakter alfanumerieke code volgens ISO 17442. Het identificeert uniek rechtspersonen die deelnemen aan financiële transacties. In pacs-berichten verschijnt LEI in OrgId/LEI voor partijen en FinInstnId/LEI voor agenten. CBPR+ moedigt steeds meer LEI aan voor partij- en agentidentificatie. Het verbetert entiteitsdisambiguatie en ondersteunt vereisten voor regelgevende rapportage.

## Over de pacs008-toolkit

### Wat doet pacs008?

pacs008 is een Python-toolkit die ISO 20022-betalingsberichten genereert, valideert en verzendt. Het leest betalingsgegevens uit CSV-, JSON-, JSONL-, SQLite- en Parquet-bronnen, valideert tegen JSON Schema en XSD, controleert IBAN- en BIC-identificatoren, schoont gegevens op voor SWIFT-tekenconformiteit en produceert XML-bestanden. Het biedt een REST API, CLI en Python-bibliotheek.

### Welke berichttypen ondersteunt pacs008?

pacs008 ondersteunt acht berichttypen: pacs.002.001.12 (statusrapport), pacs.003.001.09 (klantincasso), pacs.004.001.11 (betalingsretour), pacs.007.001.11 (betalingsterugboeking), pacs.008.001.13 (klantoverschrijving), pacs.009.001.10 (financiële instelling overschrijving), pacs.010.001.05 (financiële instelling incasso) en pacs.028.001.05 (betalingsstatusverzoek).

### Hoe helpt pacs008 met de deadline voor gestructureerde adressen van 2026?

pacs008 valideert gestructureerde en hybride postadresvelden vóór XML-generatie. Het signaleert ongestructureerde adresgegevens die zouden falen na de deadline van november 2026, ondersteunt zowel pre-deadline hybride als post-deadline alleen-gestructureerde formaten, en integreert adresqualiteitscontroles in CI-pipelines en batchvalidatie-workflows.

### Kan pacs008 gegevens valideren zonder XML te genereren?

Ja. Gebruik de `--dry-run` CLI-vlag of het `POST /validate` API-eindpunt om betalingsgegevens te valideren zonder XML te genereren. De validatiepipeline controleert JSON Schema-conformiteit, IBAN-formaat en -checksum, BIC-structuur en SWIFT-tekenconformiteit. De exitcode of API-respons geeft aan of de validatie is geslaagd of mislukt.

## Referenties

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
