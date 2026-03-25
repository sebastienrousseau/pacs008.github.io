---
title: "ISO 20022 woordenlijst | pacs008"
description: Definities van belangrijke ISO 20022- en betalingsberichtentermen die worden gebruikt in pacs.008 en gerelateerde berichten.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# ISO 20022 woordenlijst

Deze woordenlijst definieert de belangrijkste termen, afkortingen en technische concepten die worden gebruikt in ISO 20022 pacs-berichten en op deze site.

## A

**ACH** — Automated Clearing House. Een netwerk dat gebundelde elektronische betalingen tussen financiële instellingen verwerkt.

**AdrLine** — Address Line (Adresregel). Een vrij-tekst adresveld in ISO 20022 postadresstructuren. Maximaal 7 regels van elk 70 tekens. Wordt vervangen door gestructureerde adresllementen voor CBPR+ tegen november 2026.

**ACCP** — Accepted Customer Profile (Klantprofiel geaccepteerd). Een pacs.002 statuscode die aangeeft dat voorafgaande controles (syntaxis, klantprofiel) zijn geslaagd.

**ACSC** — Accepted Settlement Completed (Afwikkeling voltooid). Een pacs.002 statuscode die bevestigt dat de afwikkeling op de rekening van de debiteur is voltooid.

**ACSP** — Accepted Settlement in Process (Afwikkeling in verwerking). Een pacs.002 statuscode die aangeeft dat alle controles zijn geslaagd en de afwikkeling bezig is.

## B

**BAH** — Business Application Header (head.001). Een gestandaardiseerde envelop die ISO 20022 zakelijke berichten omhult voor transport via SWIFT. Bevat routeringsinformatie, berichtdefinitie-identificator en BIC's van verzender/ontvanger.

**BIC** — Business Identifier Code (ISO 9362). Een 8- of 11-tekens code die een financiële instelling uniek identificeert. Formaat: BBBBCCLL (bankcode + land + locatie) met optioneel BBB filiaalcode.

## C

**CBPR+** — Cross-Border Payments and Reporting Plus. Het programma van SWIFT voor de migratie van grensoverschrijdende betalingsberichten van MT naar ISO 20022. Operationeel sinds maart 2023.

**CdtTrfTxInf** — Credit Transfer Transaction Information. Het belangrijkste transactieniveau-bouwblok in pacs.008 met betalingsdetails, partijen, bedragen en overschrijvingsinformatie.

**ChrgBr** — Charge Bearer (Kostendrager). Specificeert wie de transactiekosten betaalt. Waarden: DEBT (debiteur), CRED (crediteur), SHAR (gedeeld), SLEV (serviceniveau, alleen SEPA).

**CLRG** — Clearingsysteemafwikkeling. Een afwikkelingsmethode waarbij fondsen via een clearingsysteem zoals TARGET2, EURO1 of CHIPS bewegen.

**COVE** — Dekkingsmethode-afwikkeling. Een afwikkelingsmethode waarbij een apart pacs.009 dekkingsbetaling de financiering tussen correspondenten afhandelt terwijl pacs.008 de klantgegevens direct draagt.

**CSM** — Clearing and Settlement Mechanism. Een infrastructuur die betalingsinstructies tussen deelnemende instellingen verwerkt en afwikkelt.

## D

**Dbtr** — Debtor (Debiteur). De partij die fondsen verschuldigd is en de betaling initieert. In pacs.008 bevat het Dbtr-element de naam, het postadres, de identificatie en het land van verblijf van de debiteur.

**DbtrAgt** — Debtor Agent (Debiteuragent). De financiële instelling die de rekening van de debiteur beheert en de pacs.008 instructie verzendt.

## E

**E2E ID** — End-to-End Identification (EndToEndId). Een referentie toegewezen door de opdrachtgever die ongewijzigd moet blijven bij alle agenten in de betalingsketen. Gebruikt voor traceerbaarheid op klantniveau.

**EPC** — European Payments Council. Het orgaan dat de SEPA-betalingsschemareglementen voor overschrijvingen en incasso's beheert.

## F

**FI** — Financial Institution (Financiële instelling). Een bank of andere instelling die deelneemt aan betalingsclearing en -afwikkeling.

**FIToFI** — Financial Institution to Financial Institution. Beschrijft het interbancaire domein waarin pacs-berichten opereren.

## G

**gpi** — Global Payments Innovation. Het initiatief van SWIFT voor snellere, transparante grensoverschrijdende betalingen. Gebruikt UETR voor end-to-end-tracking via een cloudgebaseerde Tracker.

**GrpHdr** — Group Header. Het berichtniveau-metadatablok in pacs-berichten. Bevat MsgId, CreDtTm, NbOfTxs, afwikkelingsinformatie en betalingstypeinformatie.

## H

**Hybride adres** — Een postadresformaat dat gestructureerde elementen (StrtNm, TwnNm, Ctry) combineert met ongestructureerde AdrLine-elementen. Toegestaan tijdens de overgangsperiode vóór de deadline voor gestructureerde adressen van november 2026.

## I

**IBAN** — International Bank Account Number (ISO 13616). Een gestandaardiseerd rekeningnummerformaat voor grensoverschrijdende en binnenlandse betalingen. Gevalideerd met ISO 7064 Mod 97-10 checksum.

**INDA** — Instructed Agent settlement. Een afwikkelingsmethode waarbij fondsen worden afgewikkeld op de boeken van de geïnstrueerde agent, waar de debiteuragent een nostrorekening aanhoudt.

**INGA** — Instructing Agent settlement. Een afwikkelingsmethode waarbij fondsen worden afgewikkeld op de boeken van de instructerende agent, waar de geïnstrueerde agent een nostrorekening aanhoudt.

**InstrId** — Instruction Identification. Een punt-tot-punt-referentie tussen aangrenzende agenten in de betalingsketen. Kan bij elke hop veranderen.

**IntrBkSttlmAmt** — Interbank Settlement Amount. Het bedrag dat wordt afgewikkeld tussen de instructerende en geïnstrueerde agent, in de afwikkelingsvaluta.

**ISO 20022** — Een internationale standaard voor elektronische gegevensuitwisseling tussen financiële instellingen. Definieert een gemeenschappelijk gegevensmodel en op XML gebaseerde berichtformaten voor betalingen, effecten, handelsfinanciering en andere financiële domeinen.

## L

**LEI** — Legal Entity Identifier (ISO 17442). Een 20-tekens alfanumerieke code die rechtspersonen die deelnemen aan financiële transacties uniek identificeert. Gebruikt in OrgId/LEI voor partijen en FinInstnId/LEI voor agenten.

## M

**MsgId** — Message Identification. Een unieke identificator voor de berichtenvelop, toegewezen door de verzendende agent. Verandert bij elke hop in de betalingsketen.

**MT** — Message Type. Het legacy berichtformaat van SWIFT (bijv. MT103 voor klantoverboeking, MT202 voor transfers tussen financiële instellingen). Wordt vervangen door ISO 20022 MX-berichten.

**MX** — Het ISO 20022 XML-berichtformaat dat door SWIFT wordt gebruikt. MX-berichten vervangen MT-berichten voor grensoverschrijdende betalingen onder CBPR+.

## N

**NbOfTxs** — Number of Transactions. Een Group Header-element dat aangeeft hoeveel individuele transacties het bericht bevat.

## P

**pacs** — Payments Clearing and Settlement. Het ISO 20022 bedrijfsdomein voor interbancaire betalingsberichten.

**pacs.002** — FI-naar-FI Payment Status Report. Rapporteert de verwerkingsstatus (geaccepteerd, afgewezen, in afwachting, afgewikkeld) van een eerdere betalingsinstructie.

**pacs.003** — FI-naar-FI Customer Direct Debit. Draagt een klantincasso-instructie tussen banken voor fondsenincasso.

**pacs.004** — Payment Return. Retourneert afgewikkelde fondsen door de betalingsketen wanneer een betaling niet kan worden toegepast.

**pacs.007** — FI-naar-FI Payment Reversal. Boekt een betalingsinstructie terug van de oorspronkelijke verzender voorwaarts door de keten.

**pacs.008** — FI-naar-FI Customer Credit Transfer. Het primaire interbancaire bericht voor klantoverschrijvingen. Vervangt MT103.

**pacs.009** — Financial Institution Credit Transfer. Verplaatst fondsen tussen banken voor eigen rekening. Dekt financiering, dekkingsbetalingen en liquiditeitsbeheer. Vervangt MT202/MT202COV.

**pacs.010** — Financial Institution Direct Debit. Staat een bank toe om de eigen rekening van een andere bank te debiteren onder een bilaterale overeenkomst.

**pacs.028** — FI-naar-FI Payment Status Request. Vraagt actief de status op van een eerdere betaling wanneer geen pacs.002 update is ontvangen.

**pain** — Payment Initiation. Het ISO 20022 bedrijfsdomein voor klant-naar-bank-berichten (bijv. pain.001 voor overschrijvingsinitiatie).

**PII** — Personally Identifiable Information. Gegevens die een individu kunnen identificeren. pacs008 maskeert PII in gestructureerde logs.

**PstlAdr** — Postal Address. De adresstructuur die wordt gebruikt voor partijen in pacs-berichten. Ondersteunt gestructureerde (StrtNm, TwnNm, Ctry) en ongestructureerde (AdrLine) formaten.

## R

**RJCT** — Rejected (Afgewezen). Een pacs.002 statuscode die aangeeft dat de betaling is afgewezen.

**RmtInf** — Remittance Information. Betalingsreferentiegegevens gedragen in pacs.008. Ondersteunt ongestructureerde (vrije tekst, max 140 tekens) en gestructureerde (documentreferenties, bedragen, crediteurreferenties) formaten.

**RTGS** — Real-Time Gross Settlement. Een betalingssysteem waarbij transacties individueel en in real-time worden afgewikkeld (bijv. TARGET2, Fedwire, CHAPS).

## S

**SCT** — SEPA Credit Transfer. Het euro-overschrijvingsschema beheerd door het EPC, met pacs.008.

**SCT Inst** — SEPA Instant Credit Transfer. De directe betalingsvariant van SCT, afwikkeling in minder dan 10 seconden.

**SDD** — SEPA Direct Debit. Het euro-incassoschema beheerd door het EPC, met pacs.003.

**SEPA** — Single Euro Payments Area. Een integratie-initiatief voor euro-overschrijvingen, incasso's en kaartbetalingen in 36 Europese landen.

**SLEV** — Service Level. Een verplichte kostendragersysteem voor SEPA. Betekent dat kosten de schemaregels volgen zonder inhoudingen op het overgemaakte bedrag.

**STP** — Straight-Through Processing. Geautomatiseerde end-to-end betalingsverwerking zonder handmatige interventie.

**SttlmMtd** — Settlement Method. Definieert hoe interbancaire afwikkeling plaatsvindt: CLRG (clearingsysteem), INDA (geïnstrueerde agent), INGA (instructerende agent) of COVE (dekkingsbetaling).

## T

**TxId** — Transaction Identification. Een interbancaire referentie toegewezen door de eerste instructerende agent. Mag niet worden gewijzigd door volgende agenten.

## U

**UETR** — Unique End-to-End Transaction Reference. Een UUID v4-identificator gegenereerd door de debiteuragent en ongewijzigd gedragen over alle legs van een betaling voor gpi-tracking.

## X

**XSD** — XML Schema Definition. Het formele schema dat de structuur, elementen en gegevenstypen van een ISO 20022 XML-bericht definieert.

**XXE** — XML External Entity. Een beveiligingskwetsbaarheid bij XML-parsing. pacs008 voorkomt XXE-aanvallen met defusedxml.

## Referenties

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)
