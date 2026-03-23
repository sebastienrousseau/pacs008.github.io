---
title: pacs.002.001.12 | FI to FI Payment Status Report | pacs008
description: Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt...
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **ISO-naam** | FIToFIPaymentStatusReportV12 |
| **Registratiestatus** | Registered |
| **Jaar** | 2019 |
| **Versie** | 12 |

## Overzicht

Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 27 February 2025; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel
- **OrgnlGrpInfAndSts** — Oorspronkelijke groepsinformatie en status voor rapportage op groepsniveau
- **TxInfAndSts** — Transactie-informatie en status voor individuele transactieresultaten
- **StsRsnInf** — Statusredeninformatie met gestructureerde redencodes
- **OrgnlTxRef** — Oorspronkelijke transactiereferentie die terugverwijst naar de broninstructie

## Zakelijke context

- Gebruikt om afwikkeling te bevestigen of afwijzing te rapporteren van overboekingen, incasso's en betalingsretourzendingen
- Maakt reconciliatie mogelijk tussen opdrachtgevende en opdrachthebbende agenten
- Vereist in CBPR+-stromen om verwerking van pacs.008- en pacs.009-berichten te bevestigen
- Ondersteunt zowel statusrapportage op groepsniveau als op individueel transactieniveau

| Belangrijke gegevenselementen | Zakelijke context |
|---|---|
| **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel | Gebruikt om afwikkeling te bevestigen of afwijzing te rapporteren van overboekingen, incasso's en betalingsretourzendingen |
| **OrgnlGrpInfAndSts** — Oorspronkelijke groepsinformatie en status voor rapportage op groepsniveau | Maakt reconciliatie mogelijk tussen opdrachtgevende en opdrachthebbende agenten |
| **TxInfAndSts** — Transactie-informatie en status voor individuele transactieresultaten | Vereist in CBPR+-stromen om verwerking van pacs.008- en pacs.009-berichten te bevestigen |
| **StsRsnInf** — Statusredeninformatie met gestructureerde redencodes | Ondersteunt zowel statusrapportage op groepsniveau als op individueel transactieniveau |
| **OrgnlTxRef** — Oorspronkelijke transactiereferentie die terugverwijst naar de broninstructie | De opdrachthebbende agent (ontvanger) stuurt pacs.002 terug naar de opdrachtgevende agent (verzender) om acceptatie, afwikkeling of afwijzing te bevestigen van een ontvangen betalingsinstructie zoals pacs.008 of pacs.009. |

## CBPR+- en schema-context

- Vervangt MT199 en statusverhalen in veld 79 van MT-berichten
- CBPR+ schrijft pacs.002 voor voor alle betalingsstatuscommunicatie
- Gestructureerde redencodes vervangen vrije-tekstafwijzingsverklaringen
- Integratie met SWIFT gpi-tracking vereist pacs.002 voor end-to-end transparantie

## Berichtstroom

De opdrachthebbende agent (ontvanger) stuurt pacs.002 terug naar de opdrachtgevende agent (verzender) om acceptatie, afwikkeling of afwijzing te bevestigen van een ontvangen betalingsinstructie zoals pacs.008 of pacs.009.

## Tabel met versieverschillen

| Versiebereik | Waarom dit telt | Implementatieconclusie |
|---|---|---|
| pacs.002.001.12 | Huidige implementatie in pacs008 | Gebruik dit wanneer u werkt met de momenteel ondersteunde projectsjablonen en validatie-artefacten. |
| pacs.002.001.13-15 | Latere catalogusrevisies | Review later ISO revisions before starting new interoperability work or onboarding new infrastructures. |

## Uitgewerkt XML-voorbeeld

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Veldtoelichting

- `MsgId`: Use a new identifier for the status report itself, not the original payment instruction.
- `OrgnlInstrId`: Keep the original instruction identifier intact so status can be matched automatically.
- `TxSts`: This is the operational state; map it carefully to internal workflow states rather than assuming a one-to-one match.
- `StsRsnInf`: Structured reason codes are far more useful than free text for repair and analytics.

## Vergelijk pacs.002 vs pacs.028

| Dimensie | pacs.002.001.12 | Vergelijkingsbericht |
|---|---|---|
| Primair doel | Report status | Request status |
| Who starts the interaction | The institution sending the status | The institution asking for status |
| Operational posture | Event-driven reporting | Exception-driven enquiry |
| Te vermijden misvatting | That status reporting replaces investigation workflows | That every payment needs an explicit status request |

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Gerelateerde berichten
| Berichttype | Beschrijving | Overzicht |
|---|---|---|
| [`pacs.008.001.13`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Het pacs.008-bericht is de kernbetalingsinstructie die wordt uitgewisseld tussen financiële instellingen om namens een klant gelden over te maken. Het bevat informatie over debiteur, crediteur, bedrag en betalingskenmerken voor een of meer overboekingstransacties. |
| [`pacs.009.001.10`](/nl/pacs.009.001.10/) | Financial Institution Credit Transfer | Het pacs.009-bericht wordt gebruikt voor overboekingen tussen financiële instellingen waarbij de overboeking voor eigen rekening van de instelling plaatsvindt en niet namens een klant. Het ondersteunt interbancaire financiering, dekkingsbetalingen en liquiditeitsbeheer. |
| [`pacs.028.001.05`](/nl/pacs.028.001.05/) | FI to FI Payment Status Request | Het pacs.028-bericht wordt door een financiële instelling verzonden om de status op te vragen van een eerder verzonden betalingsinstructie. Het maakt proactieve tracking van betalingsverwerking mogelijk zonder te wachten op een ongevraagd statusrapport. |

