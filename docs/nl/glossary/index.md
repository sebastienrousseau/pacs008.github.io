---
title: "ISO 20022 woordenlijst | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages. Covers SWIFT, CBPR+, IBAN, BIC, settlement methods, and...
lang: nl-NL
lastUpdated: true
image: /logo.webp
---

# ISO 20022 woordenlijst

This glossary defines the key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Geautomatiseerd clearinghouse. Een netwerk dat gebundelde elektronische betalingen tussen financiële instellingen verwerkt.

**AdrLine** — Adresregel. Een vrij-tekstveld voor adressen in ISO 20022 postadresstructuren. Maximaal 7 regels van elk 70 tekens.

**ACCP** — Geaccepteerd klantprofiel. Een pacs.002-statuscode die aangeeft dat voorafgaande controles zijn geslaagd.

**ACSC** — Geaccepteerde afwikkeling voltooid. Bevestigt dat de afwikkeling op de rekening van de debiteur is voltooid.

**ACSP** — Geaccepteerde afwikkeling in verwerking. Alle controles zijn geslaagd en de afwikkeling is in uitvoering.

## B–N

**BAH** — Zakelijke applicatieheader (head.001). Een gestandaardiseerde envelop die ISO 20022 zakelijke berichten omhult voor transport via SWIFT.

**BIC** — Bedrijfsidentificatiecode (ISO 9362). Een code van 8 of 11 tekens die een financiële instelling uniek identificeert.

**CBPR+** — Grensoverschrijdende betalingen en rapportage Plus. Het SWIFT-programma voor de migratie van MT naar ISO 20022. Sinds maart 2023 operationeel.

**CdtTrfTxInf** — Overschrijvingstransactie-informatie. Het belangrijkste bouwblok op transactieniveau in pacs.008.

**ChrgBr** — Kostendrager. Specificeert wie de transactiekosten betaalt. Waarden: DEBT, CRED, SHAR, SLEV.

**CLRG** — Afwikkeling via clearingsysteem. Fondsen stromen via een clearingsysteem zoals TARGET2.

**COVE** — Afwikkeling via dekkingsmethode. Een afzonderlijke pacs.009-dekkingsbetaling handelt de financiering af.

**CSM** — Clearing- en afwikkelingsmechanisme.

**Dbtr** — Debiteur. De partij die fondsen verschuldigd is en de betaling initieert.

**DbtrAgt** — Debiteuragent. De financiële instelling die de rekening van de debiteur beheert.

**E2E ID** — End-to-end-identificatie (EndToEndId). Een referentie die ongewijzigd moet blijven via alle agenten.

**EPC** — Europese betalingsraad. Beheert de SEPA-betalingsschemareglementen.

**FI** — Financiële instelling. **FIToFI** — Financiële instelling naar financiële instelling.

**gpi** — Wereldwijde betalingsinnovatie. SWIFT-initiatief voor snellere grensoverschrijdende betalingen.

**GrpHdr** — Groepsheader. Het metadatablok op berichtniveau in pacs-berichten.

**Hybrid address** — Een postadresformaat dat gestructureerde en ongestructureerde elementen combineert.

**IBAN** — Internationaal bankrekeningnummer (ISO 13616). Gevalideerd met ISO 7064 Mod 97-10 controlesom.

**INDA** — Afwikkeling door de geïnstrueerde agent. **INGA** — Afwikkeling door de instruerende agent.

**InstrId** — Instructie-identificatie. Een punt-naar-punt-referentie tussen aangrenzende agenten.

**IntrBkSttlmAmt** — Interbancair afwikkelingsbedrag.

**ISO 20022** — Een internationale standaard voor elektronische gegevensuitwisseling tussen financiële instellingen.

**LEI** — Identificatiecode juridische entiteit (ISO 17442). Een alfanumerieke code van 20 tekens.

**MsgId** — Berichtidentificatie. **MT** — Berichttype (legacy SWIFT-formaat). **MX** — Het ISO 20022 XML-berichtformaat.

**NbOfTxs** — Aantal transacties.

## P

**pacs** — Betalingsclearing en -afwikkeling. Het ISO 20022 bedrijfsdomein voor interbancaire betalingsberichten.

**pacs.002** — FI-naar-FI-betalingsstatusrapport. **pacs.003** — FI-naar-FI-automatische incasso klant.

**pacs.004** — Betalingsretour. **pacs.007** — FI-naar-FI-betalingsterugboeking.

**pacs.008** — FI-naar-FI-klantoverschrijving. Vervangt MT103.

**pacs.009** — Overschrijving financiële instelling. Vervangt MT202/MT202COV.

**pacs.010** — Automatische incasso financiële instelling. **pacs.028** — FI-naar-FI-betalingsstatusverzoek.

**pain** — Betalingsinitiatie. Het ISO 20022 bedrijfsdomein voor klant-naar-bankberichten.

**PII** — Persoonlijk identificeerbare informatie. pacs008 maskeert PII in gestructureerde logboeken.

**PstlAdr** — Postadres. Ondersteunt gestructureerde en ongestructureerde formaten.

## R–U

**RJCT** — Afgewezen. Een pacs.002-statuscode die aangeeft dat de betaling is afgewezen.

**RmtInf** — Overmakingsinformatie. Betalingsreferentiegegevens in pacs.008.

**RTGS** — Realtimebrutoafwikkeling. Transacties worden individueel en in real time afgewikkeld.

**SCT** — SEPA-overschrijving. **SCT Inst** — SEPA-directe overschrijving.

**SDD** — SEPA-automatische incasso. **SEPA** — Gemeenschappelijke eurobetalingsruimte.

**SLEV** — Serviceniveau. Verplicht voor SEPA. **STP** — Rechttoe-rechtaan-verwerking.

**SttlmMtd** — Afwikkelingsmethode. Definieert hoe interbancaire afwikkeling plaatsvindt: CLRG, INDA, INGA of COVE.

**TxId** — Transactie-identificatie. Een interbancaire referentie toegewezen door de eerste instruerende agent.

**UETR** — Unieke end-to-end-transactiereferentie. Een UUID v4-identificator voor gpi-tracking.

## X

**XSD** — XML-schemadefinitie. Het formele schema dat de structuur van een ISO 20022 XML-bericht definieert.

**XXE** — XML-externe entiteit. Een beveiligingskwetsbaarheid bij XML-verwerking. pacs008 voorkomt XXE-aanvallen door gebruik van defusedxml.

## Referenties

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

