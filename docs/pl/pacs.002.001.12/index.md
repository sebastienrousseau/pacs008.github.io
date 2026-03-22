---
title: pacs.002.001.12 — FI to FI Payment Status Report | Polski
description: Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego.
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **Nazwa ISO** | FIToFIPaymentStatusReportV12 |
| **Status rejestracji** | Registered |
| **Rok** | 2019 |
| **Wersja** | 12 |

## Przegląd

Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego.

## Kluczowe elementy danych

- **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i znacznikiem czasu utworzenia
- **OrgnlGrpInfAndSts** — Informacje i status oryginalnej grupy do raportowania na poziomie zbiorczym
- **TxInfAndSts** — Informacje i status transakcji dla wyników poszczególnych transakcji
- **StsRsnInf** — Informacje o przyczynie statusu ze strukturyzowanymi kodami przyczyn
- **OrgnlTxRef** — Referencja oryginalnej transakcji łącząca z instrukcją źródłową

## Kontekst biznesowy

- Używany do potwierdzania rozrachunku lub raportowania odrzucenia poleceń przelewu, poleceń zapłaty i zwrotów płatności
- Umożliwia uzgadnianie między agentem zlecającym a agentem zleconym
- Wymagany w przepływach CBPR+ w celu potwierdzenia przetwarzania komunikatów pacs.008 i pacs.009
- Obsługuje raportowanie statusu zarówno na poziomie zbiorczym grupy, jak i na poziomie poszczególnych transakcji

## Kontekst CBPR+ i schematy

- Zastępuje MT199 i narracje statusowe w polu 79 komunikatów MT
- CBPR+ wymaga pacs.002 dla całej komunikacji dotyczącej statusu płatności
- Strukturyzowane kody przyczyn zastępują wyjaśnienia odrzuceń w formie tekstu swobodnego
- Integracja ze śledzeniem SWIFT gpi wymaga pacs.002 dla transparentności end-to-end

## Przepływ wiadomości

Agent zlecony (odbiorca) wysyła pacs.002 z powrotem do agenta zlecającego (nadawcy) w celu potwierdzenia akceptacji, rozrachunku lub odrzucenia otrzymanej instrukcji płatniczej, takiej jak pacs.008 lub pacs.009.

## Powiązane wiadomości

- [`pacs.008.001.13`](/pl/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/pl/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.028.001.05`](/pl/pacs.028.001.05/) — FI to FI Payment Status Request

