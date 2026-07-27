---
title: "ISO 20022 woordenlijst | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages. Covers SWIFT, CBPR+, IBAN, BIC, settlement methods, and...
lang: nl-NL
lastUpdated: true
image: /logo.webp
---

# ISO 20022 woordenlijst

Key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Geautomatiseerd clearinghouse. Een netwerk dat gebundelde elektronische betalingen tussen financiële instellingen verwerkt.

**AdrLine** — Adresregel. Een vrij-tekstveld voor adressen in ISO 20022 postadresstructuren. Maximaal 7 regels van elk 70 tekens. Wordt vervangen door gestructureerde adreselementen voor CBPR+ tegen november 2026.

**ACCP** — Geaccepteerd klantprofiel. Een pacs.002-statuscode die aangeeft dat voorafgaande controles (syntaxis, klantprofiel) zijn geslaagd.

**ACSC** — Geaccepteerde afwikkeling voltooid. Een pacs.002-statuscode die bevestigt dat de afwikkeling op de rekening van de debiteur is voltooid.

**ACSP** — Geaccepteerde afwikkeling in verwerking. Een pacs.002-statuscode die aangeeft dat alle controles zijn geslaagd en de afwikkeling in uitvoering is.

## B

**BAH** — Zakelijke applicatieheader (head.001). Een gestandaardiseerde envelop die ISO 20022 zakelijke berichten omhult voor transport via SWIFT. Bevat routeringsinformatie, berichtdefinitie-identificator en BIC's van afzender/ontvanger.

**BIC** — Bedrijfsidentificatiecode (ISO 9362). Een code van 8 of 11 tekens die een financiële instelling uniek identificeert. Formaat: BBBBCCLL (bankcode + land + locatie) met optionele BBB-kantoorcode.

## C

**CBPR+** — Grensoverschrijdende betalingen en rapportage Plus. Het SWIFT-programma voor de migratie van grensoverschrijdende betalingsberichten van MT naar ISO 20022. Sinds maart 2023 operationeel.

**CdtTrfTxInf** — Overschrijvingstransactie-informatie. Het belangrijkste bouwblok op transactieniveau in pacs.008, met betalingsgegevens, partijen, bedragen en overmakingsinformatie.

**ChrgBr** — Kostendrager. Specificeert wie de transactiekosten betaalt. Waarden: DEBT (debiteur), CRED (crediteur), SHAR (gedeeld), SLEV (serviceniveau, alleen SEPA).

**CLRG** — Afwikkeling via clearingsysteem. Een afwikkelingsmethode waarbij fondsen via een clearingsysteem zoals TARGET2, EURO1 of CHIPS stromen.

**COVE** — Afwikkeling via dekkingsmethode. Een afwikkelingsmethode waarbij een afzonderlijke pacs.009-dekkingsbetaling de financiering tussen correspondenten regelt terwijl pacs.008 de klantgegevens rechtstreeks transporteert.

**CSM** — Clearing- en afwikkelingsmechanisme. Een infrastructuur die betalingsinstructies tussen deelnemende instellingen verwerkt en afwikkelt.

## D

**Dbtr** — Debiteur. De partij die fondsen verschuldigd is en de betaling initieert. In pacs.008 bevat het Dbtr-element de naam, het postadres, de identificatie en het land van verblijf van de debiteur.

**DbtrAgt** — Debiteuragent. De financiële instelling die de rekening van de debiteur beheert en de pacs.008-instructie verstuurt.

## E

**E2E ID** — End-to-end-identificatie (EndToEndId). Een referentie toegewezen door de opdrachtgever die ongewijzigd moet blijven via alle agenten in de betalingsketen. Wordt gebruikt voor traceerbaarheid op klantniveau.

**EPC** — Europese betalingsraad. Het orgaan dat de SEPA-betalingsschemareglementen voor overschrijvingen en automatische incasso's beheert.

## F

**FI** — Financiële instelling. Een bank of andere instelling die deelneemt aan betalingsclearing en -afwikkeling.

**FIToFI** — Financiële instelling naar financiële instelling. Beschrijft het interbancaire domein waarbinnen pacs-berichten opereren.

## G

**gpi** — Wereldwijde betalingsinnovatie. SWIFT-initiatief voor snellere, transparantere grensoverschrijdende betalingen. Gebruikt UETR voor end-to-end-tracking via een cloudgebaseerde Tracker.

**GrpHdr** — Groepsheader. Het metadatablok op berichtniveau in pacs-berichten. Bevat MsgId, CreDtTm, NbOfTxs, afwikkelingsinformatie en betalingstype-informatie.

## H

**Hybrid address** — Hybride adres. Een postadresformaat dat gestructureerde elementen (StrtNm, TwnNm, Ctry) combineert met ongestructureerde AdrLine-elementen. Toegestaan tijdens de overgangsperiode vóór de deadline voor gestructureerde adressen in november 2026.

## I

**IBAN** — Internationaal bankrekeningnummer (ISO 13616). Een gestandaardiseerd rekeningnummerformaat voor grensoverschrijdende en binnenlandse betalingen. Gevalideerd met ISO 7064 Mod 97-10 controlesom.

**INDA** — Afwikkeling door de geïnstrueerde agent. Een afwikkelingsmethode waarbij fondsen worden afgewikkeld in de boeken van de geïnstrueerde agent, waar de debiteuragent een nostrorekening heeft.

**INGA** — Afwikkeling door de instruerende agent. Een afwikkelingsmethode waarbij fondsen worden afgewikkeld in de boeken van de instruerende agent, waar de geïnstrueerde agent een nostrorekening heeft.

**InstrId** — Instructie-identificatie. Een punt-naar-punt-referentie tussen aangrenzende agenten in de betalingsketen. Kan bij elke stap wijzigen.

**IntrBkSttlmAmt** — Interbancair afwikkelingsbedrag. Het bedrag dat tussen de instruerende en de geïnstrueerde agent wordt afgewikkeld, in de afwikkelingsvaluta.

**ISO 20022** — Een internationale standaard voor elektronische gegevensuitwisseling tussen financiële instellingen. Definieert een gemeenschappelijk datamodel en XML-gebaseerde berichtformaten voor betalingen, effecten, handelsfinanciering en andere financiële domeinen.

## L

**LEI** — Identificatiecode juridische entiteit (ISO 17442). Een alfanumerieke code van 20 tekens die juridische entiteiten die aan financiële transacties deelnemen uniek identificeert. Wordt gebruikt in OrgId/LEI voor partijen en FinInstnId/LEI voor agenten.

## M

**MsgId** — Berichtidentificatie. Een unieke identificator voor de berichtenvelop, toegewezen door de verzendende agent. Wijzigt bij elke stap in de betalingsketen.

**MT** — Berichttype. Het legacy-berichtformaat van SWIFT (bijv. MT103 voor klantoverschrijvingen, MT202 voor transfers tussen financiële instellingen). Wordt vervangen door ISO 20022 MX-berichten.

**MX** — Het ISO 20022 XML-berichtformaat dat door SWIFT wordt gebruikt. MX-berichten vervangen MT-berichten voor grensoverschrijdende betalingen binnen CBPR+.

## N

**NbOfTxs** — Aantal transacties. Een groepsheaderelement dat aangeeft hoeveel individuele transacties het bericht bevat.

## P

**pacs** — Betalingsclearing en -afwikkeling. Het ISO 20022 bedrijfsdomein voor interbancaire betalingsberichten.

**pacs.002** — FI-naar-FI-betalingsstatusrapport. Rapporteert de verwerkingsstatus (geaccepteerd, afgewezen, in afwachting, afgewikkeld) van een eerdere betalingsinstructie.

**pacs.003** — FI-naar-FI-automatische incasso klant. Draagt een automatische-incasso-instructie voor de klant over tussen banken voor het innen van fondsen.

**pacs.004** — Betalingsretour. Retourneert afgewikkelde fondsen via de betalingsketen wanneer een betaling niet kan worden toegepast.

**pacs.007** — FI-naar-FI-betalingsterugboeking. Draait een betalingsinstructie terug vanuit de oorspronkelijke afzender door de keten.

**pacs.008** — FI-naar-FI-klantoverschrijving. Het primaire interbancaire bericht voor klantoverschrijvingen. Vervangt MT103.

**pacs.009** — Overschrijving financiële instelling. Verplaatst fondsen tussen banken voor eigen rekening. Dekt financiering, dekkingsbetalingen en liquiditeitsbeheer. Vervangt MT202/MT202COV.

**pacs.010** — Automatische incasso financiële instelling. Staat een bank toe om de eigen rekening van een andere bank te debiteren op basis van een bilaterale overeenkomst.

**pacs.028** — FI-naar-FI-betalingsstatusverzoek. Verzoekt actief de status van een eerdere betaling wanneer er geen pacs.002-update is ontvangen.

**pain** — Betalingsinitiatie. Het ISO 20022 bedrijfsdomein voor klant-naar-bankberichten (bijv. pain.001 voor overschrijvingsinitiatie).

**PII** — Persoonlijk identificeerbare informatie. Gegevens die een individu kunnen identificeren. pacs008 maskeert PII in gestructureerde logboeken.

**PstlAdr** — Postadres. De adresstructuur voor partijen in pacs-berichten. Ondersteunt gestructureerde (StrtNm, TwnNm, Ctry) en ongestructureerde (AdrLine) formaten.

## R

**RJCT** — Afgewezen. Een pacs.002-statuscode die aangeeft dat de betaling is afgewezen.

**RmtInf** — Overmakingsinformatie. Betalingsreferentiegegevens in pacs.008. Ondersteunt ongestructureerde (vrije tekst, max 140 tekens) en gestructureerde (documentreferenties, bedragen, crediteurreferenties) formaten.

**RTGS** — Realtimebrutoafwikkeling. Een betalingssysteem waarbij transacties individueel en in real time worden afgewikkeld (bijv. TARGET2, Fedwire, CHAPS).

## S

**SCT** — SEPA-overschrijving. Het euro-overschrijvingsschema beheerd door de EPC, gebruikmakend van pacs.008.

**SCT Inst** — SEPA-directe overschrijving. De variant voor directe betalingen van SCT, afgewikkeld in minder dan 10 seconden.

**SDD** — SEPA-automatische incasso. Het euro-automatischeincassoschema beheerd door de EPC, gebruikmakend van pacs.003.

**SEPA** — Gemeenschappelijke eurobetalingsruimte. Een betalingsintegratie-initiatief dat overschrijvingen, automatische incasso's en kaartbetalingen in euro dekt in 36 Europese landen.

**SLEV** — Serviceniveau. Een verplichte kostendragercode voor SEPA. Betekent dat kosten de schemaregels volgen zonder aftrek van het overschrijvingsbedrag.

**STP** — Rechttoe-rechtaan-verwerking. Geautomatiseerde end-to-end-betalingsverwerking zonder handmatige tussenkomst.

**SttlmMtd** — Afwikkelingsmethode. Definieert hoe interbancaire afwikkeling plaatsvindt: CLRG (clearingsysteem), INDA (geïnstrueerde agent), INGA (instruerende agent) of COVE (dekkingsbetaling).

## T

**TxId** — Transactie-identificatie. Een interbancaire referentie toegewezen door de eerste instruerende agent. Mag niet worden gewijzigd door volgende agenten.

## U

**UETR** — Unieke end-to-end-transactiereferentie. Een UUID v4-identificator gegenereerd door de debiteuragent en ongewijzigd meegedragen via alle stappen van een betaling voor gpi-tracking.

## X

**XSD** — XML-schemadefinitie. Het formele schema dat de structuur, elementen en datatypes van een ISO 20022 XML-bericht definieert.

**XXE** — XML-externe entiteit. Een beveiligingskwetsbaarheid bij XML-verwerking. pacs008 voorkomt XXE-aanvallen door gebruik van defusedxml.

## Referenties

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

