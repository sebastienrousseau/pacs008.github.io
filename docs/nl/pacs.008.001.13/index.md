---
title: pacs.008.001.13 | FI-naar-FI-klantkredietoverboeking | pacs008
description: Het pacs.008-bericht is de kernbetalingsinstructie die wordt uitgewisseld tussen financiële instellingen om namens een klant gelden over te maken. Het...
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI-naar-FI-klantkredietoverboeking

| | |
|---|---|
| **ISO-naam** | FIToFICustomerCreditTransferV13 |
| **Registratiestatus** | Registered |
| **Jaar** | 2023 |
| **Versie** | 13 |

## Overzicht

Het pacs.008-bericht is de kernbetalingsinstructie die wordt uitgewisseld tussen financiële instellingen om namens een klant gelden over te maken. Het bevat informatie over debiteur, crediteur, bedrag en betalingskenmerken voor een of meer overboekingstransacties.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 2025-02-27; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met bericht-ID, aanmaakdatum, aantal transacties en afwikkelingsinformatie
- **CdtTrfTxInf** — Overboekingstransactie-informatie met bedrag, kosten en doel
- **Dbtr / DbtrAgt** — Identificatie van debiteur en debiteuragent met rekeninggegevens
- **Cdtr / CdtrAgt** — Identificatie van crediteur en crediteuragent met rekeninggegevens
- **RmtInf** — Betalingskenmerkinformatie voor gestructureerde of ongestructureerde betalingsreferenties

## Zakelijke context

- Het primaire bericht voor door klanten geïnitieerde grensoverschrijdende en binnenlandse overboekingen
- Gebruikt in SEPA SCT, SEPA Instant, CBPR+ en nationale verrekeningssystemen
- Bevat gestructureerde betalingskenmerkinformatie ter ondersteuning van geautomatiseerde reconciliatie
- Ondersteunt seriële, dekkings- en directe afwikkelingsmethoden voor betalingsketens met meerdere schakels

| Belangrijke gegevenselementen | Zakelijke context |
|---|---|
| **GrpHdr** — Groepskoptekst met bericht-ID, aanmaakdatum, aantal transacties en afwikkelingsinformatie | Het primaire bericht voor door klanten geïnitieerde grensoverschrijdende en binnenlandse overboekingen |
| **CdtTrfTxInf** — Overboekingstransactie-informatie met bedrag, kosten en doel | Gebruikt in SEPA SCT, SEPA Instant, CBPR+ en nationale verrekeningssystemen |
| **Dbtr / DbtrAgt** — Identificatie van debiteur en debiteuragent met rekeninggegevens | Bevat gestructureerde betalingskenmerkinformatie ter ondersteuning van geautomatiseerde reconciliatie |
| **Cdtr / CdtrAgt** — Identificatie van crediteur en crediteuragent met rekeninggegevens | Ondersteunt seriële, dekkings- en directe afwikkelingsmethoden voor betalingsketens met meerdere schakels |
| **RmtInf** — Betalingskenmerkinformatie voor gestructureerde of ongestructureerde betalingsreferenties | De debiteuragent maakt een pacs.008 aan en stuurt dit naar de crediteuragent (rechtstreeks of via tussenpersonen). Elke agent in de keten valideert, verrijkt en stuurt de instructie door totdat de crediteuragent de rekening van de begunstigde crediteert. |

## CBPR+- en schema-context

- Vervangt MT103 en MT103+ voor grensoverschrijdende overboekingen van klanten
- De deadline voor gestructureerde adressen van november 2026 geldt voor alle postadressen van partijen
- SWIFT gpi vereist pacs.008 voor end-to-end tracking op basis van UETR
- 13 revisies weerspiegelen de voortdurende schema-evolutie over marktinfrastructuren heen

## Berichtstroom

De debiteuragent maakt een pacs.008 aan en stuurt dit naar de crediteuragent (rechtstreeks of via tussenpersonen). Elke agent in de keten valideert, verrijkt en stuurt de instructie door totdat de crediteuragent de rekening van de begunstigde crediteert.

## Tabel met versieverschillen

| Versiebereik | Waarom dit telt | Implementatieconclusie |
|---|---|---|
| pacs.008.001.01-07 | Vroege revisies | Vooral nuttig voor analyse van legacy-migraties en versiehistorische context. |
| pacs.008.001.08-12 | Moderne revisies vóór de huidige | Dit zijn de revisies die het meest waarschijnlijk voorkomen in recente migratie- of co-existentieprojecten. |
| pacs.008.001.13 | Huidige catalogusrevisie | Gebruik dit voor planning rond de huidige versie, terwijl schemaregels en gereedheid van tegenpartijen nog steeds gevalideerd moeten worden. |

## Uitgewerkt XML-voorbeeld

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### Veldtoelichting

- `MsgId`: Dit veld moet de berichtenenvelop identificeren, niet de betalingsreferentie van de eindklant.
- `EndToEndId`: Keep customer-facing traceability stable across downstream systems where possible.
- `UETR`: Gebruik dit consequent in grensoverschrijdende omgevingen met hoge traceerbaarheidseisen; genereer het niet ad hoc in latere verwerkingsstappen.
- `IntrBkSttlmAmt`: Valideer bedrag en valuta met bedrijfsregels voordat de schemavalidatie plaatsvindt.
- `Dbtr` / `Cdtr`: De kwaliteit van partijgegevens, adresstructuur en identificatoren bepaalt meestal in hoge mate het aantal herstelacties.

## Vergelijk pacs.008 vs pacs.009

| Dimensie | pacs.008.001.13 | Vergelijkingsbericht |
|---|---|---|
| Primair doel | Klantcredittransfer | Credittransfer op eigen rekening van de instelling of dekkingsstap |
| Zakelijke eigenaar | Klantbetalingsoperaties | Treasury-, correspondent- en financieringsoperaties |
| Typische combinaties | pacs.002, pacs.004, pacs.007, pacs.028 | pacs.002, pacs.004, and sometimes linked pacs.008 flows |
| Te vermijden misvatting | That all bank-to-bank transfers belong here | That it can replace customer credit-transfer instructions |

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## Ondersteunde versies

| Versie | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Gerelateerde berichten
| Berichttype | Beschrijving | Overzicht |
|---|---|---|
| [`pacs.002.001.12`](/nl/pacs.002.001.12/) | FI-naar-FI-betalingsstatusrapport | Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht. |
| [`pacs.004.001.11`](/nl/pacs.004.001.11/) | Betalingsretour | Het pacs.004-bericht wordt gebruikt om een eerder afgewikkelde betalingstransactie te retourneren. Het keert de geldstroom om wanneer een betaling niet kan worden toegepast, per abuis is verzonden of door de opdrachtgevende instelling wordt teruggevorderd. |
| [`pacs.009.001.10`](/nl/pacs.009.001.10/) | Kredietoverboeking tussen financiële instellingen | Het pacs.009-bericht wordt gebruikt voor overboekingen tussen financiële instellingen waarbij de overboeking voor eigen rekening van de instelling plaatsvindt en niet namens een klant. Het ondersteunt interbancaire financiering, dekkingsbetalingen en liquiditeitsbeheer. |

