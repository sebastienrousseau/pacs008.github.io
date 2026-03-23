---
title: pacs.009.001.10 | Financial Institution Credit Transfer | pacs008
description: Het pacs.009-bericht wordt gebruikt voor overboekingen tussen financiële instellingen waarbij de overboeking voor eigen rekening van de instelling...
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **ISO-naam** | FinancialInstitutionCreditTransferV10 |
| **Registratiestatus** | Registered |
| **Jaar** | 2019 |
| **Versie** | 10 |

## Overzicht

Het pacs.009-bericht wordt gebruikt voor overboekingen tussen financiële instellingen waarbij de overboeking voor eigen rekening van de instelling plaatsvindt en niet namens een klant. Het ondersteunt interbancaire financiering, dekkingsbetalingen en liquiditeitsbeheer.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 27 February 2025; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en afwikkelingsinformatie
- **CdtTrfTxInf** — Overboekingstransactie-informatie met interbancair afwikkelingsbedrag
- **Dbtr / DbtrAgt** — Identificatie van de debiteurinstelling en haar agent
- **Cdtr / CdtrAgt** — Identificatie van de crediteurinstelling en haar agent
- **IntrBkSttlmAmt** — Interbancair afwikkelingsbedrag in de afwikkelingsvaluta

## Zakelijke context

- Gebruikt voor interbancaire overboekingen voor eigen rekening en dekkingsbetalingen
- Ondersteunt liquiditeitsbeheer tussen correspondentbankpartners
- Bevat het dekkingsdeel van klantenoverboekingen die via de dekkingsmethode worden afgewikkeld
- Maakt treasury- en financieringsoperaties tussen financiële instellingen mogelijk

| Belangrijke gegevenselementen | Zakelijke context |
|---|---|
| **GrpHdr** — Groepskoptekst met berichtidentificatie en afwikkelingsinformatie | Gebruikt voor interbancaire overboekingen voor eigen rekening en dekkingsbetalingen |
| **CdtTrfTxInf** — Overboekingstransactie-informatie met interbancair afwikkelingsbedrag | Ondersteunt liquiditeitsbeheer tussen correspondentbankpartners |
| **Dbtr / DbtrAgt** — Identificatie van de debiteurinstelling en haar agent | Bevat het dekkingsdeel van klantenoverboekingen die via de dekkingsmethode worden afgewikkeld |
| **Cdtr / CdtrAgt** — Identificatie van de crediteurinstelling en haar agent | Maakt treasury- en financieringsoperaties tussen financiële instellingen mogelijk |
| **IntrBkSttlmAmt** — Interbancair afwikkelingsbedrag in de afwikkelingsvaluta | De debiteurinstelling stuurt pacs.009 naar de crediteurinstelling om eigen gelden over te maken. Bij betalingen via de dekkingsmethode voorziet pacs.009 in het financieringsdeel terwijl pacs.008 de klantinstructie via een apart pad vervoert. |

## CBPR+- en schema-context

- Vervangt MT202 en MT202COV voor overboekingen tussen instellingen
- Dekkingsmethodestromen koppelen pacs.009 aan de onderliggende pacs.008-klantinstructie
- Gestructureerde partijgegevens en LEI-identificatie worden steeds vaker vereist
- SWIFT gpi dekt pacs.009 voor transparantie in het correspondentbankverkeer

## Berichtstroom

De debiteurinstelling stuurt pacs.009 naar de crediteurinstelling om eigen gelden over te maken. Bij betalingen via de dekkingsmethode voorziet pacs.009 in het financieringsdeel terwijl pacs.008 de klantinstructie via een apart pad vervoert.

## Tabel met versieverschillen

| Versiebereik | Waarom dit telt | Implementatieconclusie |
|---|---|---|
| pacs.009.001.10 | Huidige implementatie in pacs008 | Komt overeen met de huidige projectondersteuning voor FI-credittransferstromen. |
| pacs.009.001.11-12 | Latere catalogusrevisies | Important for roadmap planning in correspondent and cover-payment environments. |

## Uitgewerkt XML-voorbeeld

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Veldtoelichting

- `InstrId`: Gebruik een identifier voor de funding-leg die nog steeds aan de onderliggende klantstroom kan worden gekoppeld.
- `IntrBkSttlmAmt`: Eigen-rekening- en coverstromen vereisen vaak strengere treasurycontroles op bedragen en afwikkelingsdata.
- `Dbtr` / `Cdtr`: Dit zijn institutionele partijen en geen retailklantrollen; modelleer ze overeenkomstig.

## Vergelijk pacs.009 vs pacs.008

| Dimensie | pacs.009.001.10 | Vergelijkingsbericht |
|---|---|---|
| Primair doel | Credittransfer op eigen rekening van de instelling of cover-leg | Klantcredittransfer |
| Zakelijke eigenaar | Treasury-, correspondent- en fundingoperaties | Klantbetalingsoperaties |
| Typische combinaties | pacs.002, pacs.004 en gekoppelde pacs.008-stromen | pacs.002, pacs.004, pacs.007, pacs.028 |
| Te vermijden misvatting | Dat het slechts een technischere pacs.008 is | Dat het institutionele fundingstromen zonder meer kan dragen |

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## Gerelateerde berichten
| Berichttype | Beschrijving | Overzicht |
|---|---|---|
| [`pacs.008.001.13`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Het pacs.008-bericht is de kernbetalingsinstructie die wordt uitgewisseld tussen financiële instellingen om namens een klant gelden over te maken. Het bevat informatie over debiteur, crediteur, bedrag en betalingskenmerken voor een of meer overboekingstransacties. |
| [`pacs.002.001.12`](/nl/pacs.002.001.12/) | FI to FI Payment Status Report | Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht. |
| [`pacs.010.001.05`](/nl/pacs.010.001.05/) | Financial Institution Direct Debit | Het pacs.010-bericht wordt tussen financiële instellingen gebruikt voor incassotransacties op eigen rekening van de instelling. Het stelt de ene instelling in staat om gelden rechtstreeks van de rekening van een andere instelling te innen. |

