---
title: pacs.007.001.11 | FI to FI Payment Reversal | pacs008
description: Het pacs.007-bericht wordt gebruikt om een eerder verzonden betalingsinstructie die nog niet is afgewikkeld te storneren of om stornering van een...
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **ISO-naam** | FIToFIPaymentReversalV11 |
| **Registratiestatus** | Registered |
| **Jaar** | 2019 |
| **Versie** | 11 |

## Overzicht

Het pacs.007-bericht wordt gebruikt om een eerder verzonden betalingsinstructie die nog niet is afgewikkeld te storneren of om stornering van een afgewikkelde betaling te verzoeken. In tegenstelling tot pacs.004 (retourzending) wordt het geïnitieerd door de oorspronkelijke opdrachtgevende agent.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 27 February 2025; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel
- **TxInf** — Transactie-informatie met storneringsbedrag en partijen
- **OrgnlGrpInf** — Oorspronkelijke groepsinformatie met verwijzing naar het bronbericht
- **RvslRsnInf** — Storneringsredeninformatie met gestructureerde redencodes
- **OrgnlTxRef** — Oorspronkelijke transactiereferentie voor end-to-end traceerbaarheid

## Zakelijke context

- Geïnitieerd wanneer de oorspronkelijke verzender een fout constateert vóór of na afwikkeling
- Gebruikt bij fraudescenario's waarbij snelle stornering vereist is
- Ondersteunt zowel volledige als gedeeltelijke stornering van oorspronkelijke betalingsbedragen
- Bevat gestructureerde storneringsredencodes voor verdere verwerking in de keten

| Belangrijke gegevenselementen | Zakelijke context |
|---|---|
| **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel | Geïnitieerd wanneer de oorspronkelijke verzender een fout constateert vóór of na afwikkeling |
| **TxInf** — Transactie-informatie met storneringsbedrag en partijen | Gebruikt bij fraudescenario's waarbij snelle stornering vereist is |
| **OrgnlGrpInf** — Oorspronkelijke groepsinformatie met verwijzing naar het bronbericht | Ondersteunt zowel volledige als gedeeltelijke stornering van oorspronkelijke betalingsbedragen |
| **RvslRsnInf** — Storneringsredeninformatie met gestructureerde redencodes | Bevat gestructureerde storneringsredencodes voor verdere verwerking in de keten |
| **OrgnlTxRef** — Oorspronkelijke transactiereferentie voor end-to-end traceerbaarheid | De opdrachtgevende agent (oorspronkelijke verzender) stuurt pacs.007 voorwaarts door de betalingsketen om een eerder gegeven betalingsinstructie te storneren. Elke agent verwerkt de storneringsinstructie en past de afwikkeling dienovereenkomstig aan. |

## CBPR+- en schema-context

- Onderscheidt zich van pacs.004 door de richting — stornering gaat voorwaarts vanuit de opdrachtgever, retourzending gaat achterwaarts vanuit de begunstigde
- CBPR+ vereist koppeling met oorspronkelijke berichtidentificatoren voor geautomatiseerde matching
- Gestructureerde redencodes vervangen vrije-tekstverhalen uit verouderde MT-berichten
- Wordt steeds vaker gebruikt in workflows voor terugvordering van instantbetalingen en fraudepreventie

## Berichtstroom

De opdrachtgevende agent (oorspronkelijke verzender) stuurt pacs.007 voorwaarts door de betalingsketen om een eerder gegeven betalingsinstructie te storneren. Elke agent verwerkt de storneringsinstructie en past de afwikkeling dienovereenkomstig aan.

## Tabel met versieverschillen

| Versiebereik | Waarom dit telt | Implementatieconclusie |
|---|---|---|
| pacs.007.001.11 | Huidige implementatie in pacs008 | Goede basis voor het modelleren van reversal-workflows. |
| pacs.007.001.12-13 | Latere catalogusrevisies | Check later revisions for current market-infrastructure alignment. |

## Uitgewerkt XML-voorbeeld

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### Veldtoelichting

- `MsgId`: The reversal itself needs its own audit-safe identifier.
- `OrgnlInstrId`: Preserve the original payment reference to avoid reconciliation breaks.
- `RvslRsnInf`: Use structured reversal reasons so fraud, error, and duplicate-payment cases can be routed differently.

## Vergelijk pacs.007 vs pacs.004

| Dimensie | pacs.007.001.11 | Vergelijkingsbericht |
|---|---|---|
| Primair doel | Reverse a previously instructed payment | Return settled funds |
| Initiated by | Original instructing side | Receiving / beneficiary side |
| Direction of flow | Forward through the chain | Back through the chain |
| Best fit | Recall, error, or fraud-driven reversal handling | Post-settlement return handling |

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Gerelateerde berichten
| Berichttype | Beschrijving | Overzicht |
|---|---|---|
| [`pacs.008.001.13`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Het pacs.008-bericht is de kernbetalingsinstructie die wordt uitgewisseld tussen financiële instellingen om namens een klant gelden over te maken. Het bevat informatie over debiteur, crediteur, bedrag en betalingskenmerken voor een of meer overboekingstransacties. |
| [`pacs.004.001.11`](/nl/pacs.004.001.11/) | Payment Return | Het pacs.004-bericht wordt gebruikt om een eerder afgewikkelde betalingstransactie te retourneren. Het keert de geldstroom om wanneer een betaling niet kan worden toegepast, per abuis is verzonden of door de opdrachtgevende instelling wordt teruggevorderd. |
| [`pacs.002.001.12`](/nl/pacs.002.001.12/) | FI to FI Payment Status Report | Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht. |

