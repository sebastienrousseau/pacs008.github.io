---
title: pacs.003.001.09 | FI-naar-FI-klantincasso | pacs008
description: Het pacs.003-bericht wordt uitgewisseld tussen financiële instellingen om een incasso-instructie van de klant uit te voeren. Het stelt de bank van de...
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI-naar-FI-klantincasso

| | |
|---|---|
| **ISO-naam** | FIToFICustomerDirectDebitV09 |
| **Registratiestatus** | Registered |
| **Jaar** | 2019 |
| **Versie** | 9 |

## Overzicht

Het pacs.003-bericht wordt uitgewisseld tussen financiële instellingen om een incasso-instructie van de klant uit te voeren. Het stelt de bank van de crediteur in staat om namens de crediteur gelden te innen bij de bank van de debiteur.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 2025-02-27; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en afwikkelingsinformatie
- **DrctDbtTxInf** — Incassotransactie-informatie met bedrag en partijen
- **Cdtr** — Identificatie van de crediteur en rekeninggegevens
- **CdtrAgt** — Identificatie van de crediteuragent (incasserende instelling)
- **DbtrAgt** — Identificatie van de debiteuragent (betalende instelling)

## Zakelijke context

- Ondersteunt SEPA Core- en B2B-incassoschema's
- Gebruikt voor terugkerende betalingsincasso's zoals abonnementen, energierekeningen en leningaflossingen
- Vereist een geldige mandaatreferentie tussen debiteur en crediteur
- Maakt bulkincasso van meerdere incasso-instructies in één bericht mogelijk

| Belangrijke gegevenselementen | Zakelijke context |
|---|---|
| **GrpHdr** — Groepskoptekst met berichtidentificatie en afwikkelingsinformatie | Ondersteunt SEPA Core- en B2B-incassoschema's |
| **DrctDbtTxInf** — Incassotransactie-informatie met bedrag en partijen | Gebruikt voor terugkerende betalingsincasso's zoals abonnementen, energierekeningen en leningaflossingen |
| **Cdtr** — Identificatie van de crediteur en rekeninggegevens | Vereist een geldige mandaatreferentie tussen debiteur en crediteur |
| **CdtrAgt** — Identificatie van de crediteuragent (incasserende instelling) | Maakt bulkincasso van meerdere incasso-instructies in één bericht mogelijk |
| **DbtrAgt** — Identificatie van de debiteuragent (betalende instelling) | De crediteuragent initieert pacs.003 richting de debiteuragent om gelden te innen. De debiteuragent valideert het mandaat, controleert de rekeningdekking en wikkelt de transactie af of retourneert deze. |

## CBPR+- en schema-context

- Vereisten voor gestructureerde adressen en partij-identificatie gelden ook voor incasso's
- Mandaatgerelateerde gegevens moeten vanaf november 2026 volledig gestructureerd zijn
- Vervangt verouderde incassoformaten in MT104-stijl bij grensoverschrijdende stromen
- Validatie van crediteurschema-identificatie wordt steeds strenger gehandhaafd

## Berichtstroom

De crediteuragent initieert pacs.003 richting de debiteuragent om gelden te innen. De debiteuragent valideert het mandaat, controleert de rekeningdekking en wikkelt de transactie af of retourneert deze.

## Tabel met versieverschillen

| Versiebereik | Waarom dit telt | Implementatieconclusie |
|---|---|---|
| pacs.003.001.09 | Huidige implementatie in pacs008 | Nuttig voor de referentiemodellering van incasso's in het huidige project. |
| pacs.003.001.10-11 | Latere catalogusrevisies | Controleer latere revisies op wijzigingen rond mandaat, status en interoperabiliteit voordat u dit in een nieuwe implementatie gebruikt. |

## Uitgewerkt XML-voorbeeld

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Veldtoelichting

- `EndToEndId`: Houd mandaat- en incasso-identificaties gescheiden van zakelijke factuurreferenties.
- `IntrBkSttlmAmt`: Valideer de precisie van het incassobedrag en de valutaregels voordat XML wordt gegenereerd.
- `Dbtr` / `Cdtr`: Het succes van een incasso hangt vaak meer af van de kwaliteit van rekening en mandaat dan van de XML-structuur.

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Gerelateerde berichten
| Berichttype | Beschrijving | Overzicht |
|---|---|---|
| [`pacs.004.001.11`](/nl/pacs.004.001.11/) | Betalingsretour | Het pacs.004-bericht wordt gebruikt om een eerder afgewikkelde betalingstransactie te retourneren. Het keert de geldstroom om wanneer een betaling niet kan worden toegepast, per abuis is verzonden of door de opdrachtgevende instelling wordt teruggevorderd. |
| [`pacs.007.001.11`](/nl/pacs.007.001.11/) | FI-naar-FI-betalingsstornering | Het pacs.007-bericht wordt gebruikt om een eerder verzonden betalingsinstructie die nog niet is afgewikkeld te storneren of om stornering van een afgewikkelde betaling te verzoeken. In tegenstelling tot pacs.004 (retourzending) wordt het geïnitieerd door de oorspronkelijke opdrachtgevende agent. |
| [`pacs.002.001.12`](/nl/pacs.002.001.12/) | FI-naar-FI-betalingsstatusrapport | Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht. |

