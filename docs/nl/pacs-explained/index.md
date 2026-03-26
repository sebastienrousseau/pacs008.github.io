---
title: "PACS-berichten uitgelegd | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: nl-NL
lastUpdated: true
image: /logo.webp
---

# PACS-berichten uitgelegd

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Betalingslevenscyclus

De volledige pacs-betalingslevenscyclus omvat zes fasen en meerdere berichttypen die samenwerken.

**Fase 1 — Initiatie.** De betaling ontstaat in het klant-bankdomein (pain.001).

**Fase 2 — Interbancaire instructie.** De debiteuragent maakt een pacs.008 aan. In een dekkingsstroom gaat pacs.008 direct naar de crediteuragent terwijl pacs.009 de financieringsetappe draagt.

**Fase 3 — Statusrapportage.** De ontvangende agent kan een pacs.002 retourneren.

**Fase 4 — Afwikkeling.** Via clearingsysteem (CLRG), correspondentrekeningen (INDA/INGA) of dekkingsbetaling (COVE).

**Fase 5 — Creditering van de begunstigde.** De crediteuragent crediteert de begunstigde.

**Fase 6 — Uitzonderingsafhandeling.** pacs.004 voor retourzendingen, pacs.007 voor terugboekingen, pacs.028 voor statusverzoeken.

### Seriële methode

```text
Debiteuragent --(pacs.008)--> Intermediaire Agent
Intermediaire Agent --(pacs.002)--> Debiteuragent [status]
Intermediaire Agent --(pacs.008)--> Crediteuragent
Crediteuragent --(pacs.002)--> Intermediaire Agent [status]
```

### Dekkingsmethode

```text
Debiteuragent --(pacs.008)--> Crediteuragent [direct, met klantgegevens]
Debiteuragent --(pacs.009)--> Dekkingsbank --(pacs.009)--> Crediteuragent [financiering]
```

## XML-structuur van pacs.008

Twee hoofdblokken: de Groepsheader (GrpHdr) en Overschrijvingstransactie-informatie (CdtTrfTxInf).

### Groepsheader (GrpHdr)

Verschijnt één keer: MsgId, CreDtTm, NbOfTxs, SttlmInf, IntrBkSttlmDt, PmtTpInf.

### Transactie-informatie (CdtTrfTxInf)

PmtId, IntrBkSttlmAmt, InstdAmt, ChrgBr, Dbtr/DbtrAcct/DbtrAgt, Cdtr/CdtrAcct/CdtrAgt, IntrmyAgt, RmtInf, Purp, RgltryRptg.

## Afwikkelingsmethoden

- **CLRG** — Via clearingsysteem. **INDA** — In de boeken van de geïnstrueerde agent. **INGA** — In de boeken van de instruerende agent. **COVE** — Via dekkingsbetaling pacs.009.

## Kostendragercodes

- **DEBT** — Debiteur draagt alle kosten. **CRED** — Crediteur. **SHAR** — Gedeeld. **SLEV** — Verplicht voor SEPA.

## Postadresformaat

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

## Partij-identificatie

- **BIC** — Bedrijfsidentificatiecode (ISO 9362). **LEI** — Identificatiecode juridische entiteit (ISO 17442). **IBAN** — Internationaal bankrekeningnummer (ISO 13616).

## Overmakingsinformatie

- **Ongestructureerd** — Vrije tekst tot 140 tekens.
- **Gestructureerd** — Documentreferenties: CINV, CREN, SOAC.

## UETR en gpi-tracking

UETR is een UUID v4 gegenereerd door de debiteuragent. SWIFT gpi gebruikt UETR voor tracking.

## Referenties

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

