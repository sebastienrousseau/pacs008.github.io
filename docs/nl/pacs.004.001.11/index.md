---
title: pacs.004.001.11 | Payment Return | pacs008
description: Het pacs.004-bericht wordt gebruikt om een eerder afgewikkelde betalingstransactie te retourneren. Het keert de geldstroom om wanneer een betaling niet...
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **ISO-naam** | PaymentReturnV11 |
| **Registratiestatus** | Registered |
| **Jaar** | 2019 |
| **Versie** | 11 |

## Overzicht

Het pacs.004-bericht wordt gebruikt om een eerder afgewikkelde betalingstransactie te retourneren. Het keert de geldstroom om wanneer een betaling niet kan worden toegepast, per abuis is verzonden of door de opdrachtgevende instelling wordt teruggevorderd.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 27 February 2025; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel
- **TxInf** — Transactie-informatie met retourbedrag en partijen
- **OrgnlGrpInf** — Oorspronkelijke groepsinformatie met verwijzing naar het bronbericht
- **RtrRsnInf** — Retourredeninformatie met gestructureerde redencodes
- **OrgnlTxRef** — Oorspronkelijke transactiereferentie voor matching en reconciliatie

## Zakelijke context

- Behandelt retourzendingen na afwikkeling wanneer de rekening van de begunstigde niet kan worden gecrediteerd
- Ondersteunt terugvorderingsscenario's waarbij de opdrachtgever restitutie van gelden verzoekt
- Bevat gestructureerde retourredencodes voor regelgevende en operationele transparantie
- Is van toepassing op zowel retourzendingen van overboekingen (pacs.008) als retourzendingen van incasso's (pacs.003)

| Belangrijke gegevenselementen | Zakelijke context |
|---|---|
| **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel | Behandelt retourzendingen na afwikkeling wanneer de rekening van de begunstigde niet kan worden gecrediteerd |
| **TxInf** — Transactie-informatie met retourbedrag en partijen | Ondersteunt terugvorderingsscenario's waarbij de opdrachtgever restitutie van gelden verzoekt |
| **OrgnlGrpInf** — Oorspronkelijke groepsinformatie met verwijzing naar het bronbericht | Bevat gestructureerde retourredencodes voor regelgevende en operationele transparantie |
| **RtrRsnInf** — Retourredeninformatie met gestructureerde redencodes | Is van toepassing op zowel retourzendingen van overboekingen (pacs.008) als retourzendingen van incasso's (pacs.003) |
| **OrgnlTxRef** — Oorspronkelijke transactiereferentie voor matching en reconciliatie | De opdrachthebbende agent stuurt pacs.004 terug door de betalingsketen om eerder afgewikkelde gelden te retourneren. Elke agent in de keten verwerkt de retourzending en crediteert de betreffende rekeningen terug. |

## CBPR+- en schema-context

- Vervangt MT103 RETURN en retourberichtenverkeer via de dekkingsmethode
- Retourredencodes zijn gestandaardiseerd en machinaal leesbaar onder ISO 20022
- CBPR+ vereist volledige oorspronkelijke transactiereferentiegegevens voor matching
- SWIFT gpi-tracking wordt uitgebreid naar retourtransacties voor end-to-end zichtbaarheid

## Berichtstroom

De opdrachthebbende agent stuurt pacs.004 terug door de betalingsketen om eerder afgewikkelde gelden te retourneren. Elke agent in de keten verwerkt de retourzending en crediteert de betreffende rekeningen terug.

## Tabel met versieverschillen

| Versiebereik | Waarom dit telt | Implementatieconclusie |
|---|---|---|
| pacs.004.001.11 | Huidige implementatie in pacs008 | Sluit aan op de huidige sjablonen voor retourbetalingen. |
| pacs.004.001.12-14 | Latere catalogusrevisies | Review later return-message revisions when scheme upgrades or new counterparties are in scope. |

## Uitgewerkt XML-voorbeeld

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### Veldtoelichting

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: Reason-code quality is critical for downstream customer communication and operational routing.

## Vergelijk pacs.004 vs pacs.007

| Dimensie | pacs.004.001.11 | Vergelijkingsbericht |
|---|---|---|
| Primair doel | Return settled funds | Reverse a previously instructed payment |
| Initiated by | Receiving / beneficiary side | Original instructing side |
| Direction of flow | Back through the chain | Forward through the chain |
| Best fit | Post-settlement return handling | Recall, error, or fraud-driven reversal handling |

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Gerelateerde berichten
| Berichttype | Beschrijving | Overzicht |
|---|---|---|
| [`pacs.008.001.13`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Het pacs.008-bericht is de kernbetalingsinstructie die wordt uitgewisseld tussen financiële instellingen om namens een klant gelden over te maken. Het bevat informatie over debiteur, crediteur, bedrag en betalingskenmerken voor een of meer overboekingstransacties. |
| [`pacs.003.001.09`](/nl/pacs.003.001.09/) | FI to FI Customer Direct Debit | Het pacs.003-bericht wordt uitgewisseld tussen financiële instellingen om een incasso-instructie van de klant uit te voeren. Het stelt de bank van de crediteur in staat om namens de crediteur gelden te innen bij de bank van de debiteur. |
| [`pacs.002.001.12`](/nl/pacs.002.001.12/) | FI to FI Payment Status Report | Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht. |

