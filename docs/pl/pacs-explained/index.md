---
title: "PACS messages explained | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# PACS messages explained

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Cykl życia płatności

Pełny cykl życia płatności pacs obejmuje sześć etapów i wiele typów komunikatów współpracujących ze sobą.

**Etap 1 — Inicjacja.** Płatność powstaje w domenie klient-bank (pain.001).

**Etap 2 — Instrukcja międzybankowa.** Agent dłużnika tworzy pacs.008. W przepływie pokrycia pacs.008 idzie bezpośrednio do agenta wierzyciela, podczas gdy pacs.009 transportuje finansowanie.

**Etap 3 — Raportowanie statusu.** Agent odbierający może zwrócić pacs.002 potwierdzający akceptację, odrzucenie lub status oczekujący.

**Etap 4 — Rozliczenie.** Przez system rozrachunkowy (CLRG), rachunki korespondencyjne (INDA/INGA) lub płatność pokrycia (COVE).

**Etap 5 — Uznanie beneficjenta.** Agent wierzyciela uznaje beneficjenta.

**Etap 6 — Obsługa wyjątków.** pacs.004 dla zwrotów, pacs.007 dla odwróceń, pacs.028 dla zapytań o status.

### Przepływ metody seryjnej

```text
Agent Dłużnika --(pacs.008)--> Agent Pośredniczący
Agent Pośredniczący --(pacs.002)--> Agent Dłużnika [status]
Agent Pośredniczący --(pacs.008)--> Agent Wierzyciela
Agent Wierzyciela --(pacs.002)--> Agent Pośredniczący [status]
```

### Przepływ metody pokrycia

```text
Agent Dłużnika --(pacs.008)--> Agent Wierzyciela [bezpośrednio, z danymi klienta]
Agent Dłużnika --(pacs.009)--> Bank Pokrycia --(pacs.009)--> Agent Wierzyciela [finansowanie]
```

## Struktura XML pacs.008

Dwa główne bloki: Nagłówek Grupy (GrpHdr) i Informacje o Transakcji Przelewu (CdtTrfTxInf).

### Nagłówek Grupy (GrpHdr)

Pojawia się dokładnie raz: MsgId, CreDtTm, NbOfTxs, SttlmInf, IntrBkSttlmDt, PmtTpInf.

### Informacje o Transakcji (CdtTrfTxInf)

PmtId, IntrBkSttlmAmt, InstdAmt, ChrgBr, Dbtr/DbtrAcct/DbtrAgt, Cdtr/CdtrAcct/CdtrAgt, IntrmyAgt, RmtInf, Purp, RgltryRptg.

## Metody rozliczenia

- **CLRG** — Przez system rozrachunkowy. **INDA** — W księgach agenta instruowanego. **INGA** — W księgach agenta instruującego. **COVE** — Przez płatność pokrycia pacs.009.

## Kody ponoszącego opłaty

- **DEBT** — Dłużnik ponosi wszystkie opłaty. **CRED** — Wierzyciel. **SHAR** — Dzielone. **SLEV** — Obowiązkowy dla SEPA.

## Format adresu pocztowego

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

## Identyfikacja stron

- **BIC** — Kod identyfikacyjny firmy (ISO 9362). **LEI** — Identyfikator podmiotu prawnego (ISO 17442). **IBAN** — Międzynarodowy numer rachunku bankowego (ISO 13616).

## Informacje o przelewie

- **Niestrukturalne** — Tekst wolny do 140 znaków.
- **Strukturalne** — Referencje dokumentów: CINV, CREN, SOAC.

## UETR i śledzenie gpi

UETR to UUID v4 generowany przez agenta dłużnika. SWIFT gpi używa UETR do śledzenia płatności.

## Odniesienia

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

