---
title: "PACS messages explained | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# PACS messages explained

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Ciclul de viață al plății

Ciclul complet al plății pacs implică șase etape și mai multe tipuri de mesaje care lucrează împreună.

**Etapa 1 — Inițierea.** Plata are origine în domeniul client-bancă (pain.001).

**Etapa 2 — Instrucțiunea interbancară.** Agentul debitorului creează un pacs.008 și îl trimite. În fluxul de acoperire, pacs.008 merge direct la agentul creditorului, în timp ce pacs.009 transportă finanțarea.

**Etapa 3 — Raportarea stării.** Agentul receptor poate returna un pacs.002.

**Etapa 4 — Decontarea.** Prin sistem de compensare (CLRG), conturi de corespondent (INDA/INGA) sau plată de acoperire (COVE).

**Etapa 5 — Creditarea beneficiarului.** Agentul creditorului creditează beneficiarul.

**Etapa 6 — Gestionarea excepțiilor.** pacs.004 pentru returnări, pacs.007 pentru reversări, pacs.028 pentru interogări de stare.

### Flux metoda serială

```text
Agent Debitor --(pacs.008)--> Agent Intermediar
Agent Intermediar --(pacs.002)--> Agent Debitor [stare]
Agent Intermediar --(pacs.008)--> Agent Creditor
Agent Creditor --(pacs.002)--> Agent Intermediar [stare]
```

### Flux metoda de acoperire

```text
Agent Debitor --(pacs.008)--> Agent Creditor [direct, cu date client]
Agent Debitor --(pacs.009)--> Bancă Acoperire --(pacs.009)--> Agent Creditor [finanțare]
```

## Structura XML a pacs.008

Două blocuri principale: Antetul de Grup (GrpHdr) și Informațiile Tranzacției de Transfer de Credit (CdtTrfTxInf).

### Antetul de Grup (GrpHdr)

Apare o singură dată: MsgId, CreDtTm, NbOfTxs, SttlmInf, IntrBkSttlmDt, PmtTpInf.

### Informații Tranzacție (CdtTrfTxInf)

PmtId, IntrBkSttlmAmt, InstdAmt, ChrgBr, Dbtr/DbtrAcct/DbtrAgt, Cdtr/CdtrAcct/CdtrAgt, IntrmyAgt, RmtInf, Purp, RgltryRptg.

## Metode de decontare

- **CLRG** — Prin sistem de compensare. **INDA** — În registrele agentului instruit. **INGA** — În registrele agentului instructor. **COVE** — Prin plată de acoperire pacs.009.

## Coduri purtător de costuri

- **DEBT** — Debitorul suportă toate costurile. **CRED** — Creditorul. **SHAR** — Partajate. **SLEV** — Obligatoriu pentru SEPA.

## Format adresă poștală

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

## Identificarea părților

- **BIC** — Cod de identificare (ISO 9362). **LEI** — Identificator de entitate juridică (ISO 17442). **IBAN** — Număr de cont bancar internațional (ISO 13616).

## Informații de remitere

- **Nestructurate** — Text liber până la 140 caractere.
- **Structurate** — Referințe documente: CINV, CREN, SOAC.

## UETR și urmărirea gpi

UETR este un UUID v4 generat de agentul debitorului. SWIFT gpi utilizează UETR pentru urmărire.

## Referințe

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

