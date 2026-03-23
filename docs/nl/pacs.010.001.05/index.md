---
title: pacs.010.001.05 | Financial Institution Direct Debit | pacs008
description: Het pacs.010-bericht wordt tussen financiële instellingen gebruikt voor incassotransacties op eigen rekening van de instelling. Het stelt de ene...
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **ISO-naam** | FinancialInstitutionDirectDebitV05 |
| **Registratiestatus** | Registered |
| **Jaar** | 2019 |
| **Versie** | 5 |

## Overzicht

Het pacs.010-bericht wordt tussen financiële instellingen gebruikt voor incassotransacties op eigen rekening van de instelling. Het stelt de ene instelling in staat om gelden rechtstreeks van de rekening van een andere instelling te innen.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 27 February 2025; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en afwikkelingsinformatie
- **DrctDbtTxInf** — Incassotransactie-informatie met incassobedrag
- **Cdtr / CdtrAgt** — Identificatie van de crediteurinstelling en haar agent
- **Dbtr / DbtrAgt** — Identificatie van de debiteurinstelling en haar agent
- **IntrBkSttlmAmt** — Interbancair afwikkelingsbedrag in de afwikkelingsvaluta

## Zakelijke context

- Ondersteunt interbancaire incasso-inning tussen financiële instellingen
- Gebruikt voor vergoedingsinning, margestortingen en institutionele afwikkelingsverplichtingen
- Vereist vooraf overeengekomen bilaterale overeenkomsten tussen deelnemende instellingen
- Essentieel voor institutioneel kasbeheer en interbancaire afwikkelingscycli

| Belangrijke gegevenselementen | Zakelijke context |
|---|---|
| **GrpHdr** — Groepskoptekst met berichtidentificatie en afwikkelingsinformatie | Ondersteunt interbancaire incasso-inning tussen financiële instellingen |
| **DrctDbtTxInf** — Incassotransactie-informatie met incassobedrag | Gebruikt voor vergoedingsinning, margestortingen en institutionele afwikkelingsverplichtingen |
| **Cdtr / CdtrAgt** — Identificatie van de crediteurinstelling en haar agent | Vereist vooraf overeengekomen bilaterale overeenkomsten tussen deelnemende instellingen |
| **Dbtr / DbtrAgt** — Identificatie van de debiteurinstelling en haar agent | Essentieel voor institutioneel kasbeheer en interbancaire afwikkelingscycli |
| **IntrBkSttlmAmt** — Interbancair afwikkelingsbedrag in de afwikkelingsvaluta | De crediteurinstelling stuurt pacs.010 naar de debiteurinstelling om gelden te innen op basis van een vooraf overeengekomen regeling. De debiteurinstelling valideert het verzoek en wikkelt de incasso af of wijst deze af. |

## CBPR+- en schema-context

- Vervangt elementen van MT204 voor de verwerking van interbancaire incasso's
- Gestructureerde partij-identificatie volgt dezelfde vereisten als andere pacs-berichten
- Validatie van institutionele identificatoren (BIC, LEI) is verplicht
- Opgenomen in roadmaps voor volledige ISO 20022-adoptie over marktinfrastructuren heen

## Berichtstroom

De crediteurinstelling stuurt pacs.010 naar de debiteurinstelling om gelden te innen op basis van een vooraf overeengekomen regeling. De debiteurinstelling valideert het verzoek en wikkelt de incasso af of wijst deze af.

## Tabel met versieverschillen

| Versiebereik | Waarom dit telt | Implementatieconclusie |
|---|---|---|
| pacs.010.001.05 | Huidige implementatie in pacs008 | Referentiepunt voor ondersteuning van institutionele incasso's in het huidige project. |
| pacs.010.001.06 | Latere catalogusrevisie | Review before adopting newer infrastructure requirements. |

## Uitgewerkt XML-voorbeeld

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Veldtoelichting

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need explicit bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly; this is not a retail-customer debit model.

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Gerelateerde berichten
| Berichttype | Beschrijving | Overzicht |
|---|---|---|
| [`pacs.009.001.10`](/nl/pacs.009.001.10/) | Financial Institution Credit Transfer | Het pacs.009-bericht wordt gebruikt voor overboekingen tussen financiële instellingen waarbij de overboeking voor eigen rekening van de instelling plaatsvindt en niet namens een klant. Het ondersteunt interbancaire financiering, dekkingsbetalingen en liquiditeitsbeheer. |
| [`pacs.002.001.12`](/nl/pacs.002.001.12/) | FI to FI Payment Status Report | Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht. |
| [`pacs.003.001.09`](/nl/pacs.003.001.09/) | FI to FI Customer Direct Debit | Het pacs.003-bericht wordt uitgewisseld tussen financiële instellingen om een incasso-instructie van de klant uit te voeren. Het stelt de bank van de crediteur in staat om namens de crediteur gelden te innen bij de bank van de debiteur. |

