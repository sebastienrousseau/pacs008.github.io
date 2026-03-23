---
title: pacs.002.001.12 | Raport statusu płatności FI-do-FI | pacs008
description: Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o...
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — Raport statusu płatności FI-do-FI

| | |
|---|---|
| **Nazwa ISO** | FIToFIPaymentStatusReportV12 |
| **Status rejestracji** | Registered |
| **Rok** | 2019 |
| **Wersja** | 12 |

## Przegląd

Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego.

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 2025-02-27; linki do źródeł podano poniżej.

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

| Kluczowe elementy danych | Kontekst biznesowy |
|---|---|
| **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i znacznikiem czasu utworzenia | Używany do potwierdzania rozrachunku lub raportowania odrzucenia poleceń przelewu, poleceń zapłaty i zwrotów płatności |
| **OrgnlGrpInfAndSts** — Informacje i status oryginalnej grupy do raportowania na poziomie zbiorczym | Umożliwia uzgadnianie między agentem zlecającym a agentem zleconym |
| **TxInfAndSts** — Informacje i status transakcji dla wyników poszczególnych transakcji | Wymagany w przepływach CBPR+ w celu potwierdzenia przetwarzania komunikatów pacs.008 i pacs.009 |
| **StsRsnInf** — Informacje o przyczynie statusu ze strukturyzowanymi kodami przyczyn | Obsługuje raportowanie statusu zarówno na poziomie zbiorczym grupy, jak i na poziomie poszczególnych transakcji |
| **OrgnlTxRef** — Referencja oryginalnej transakcji łącząca z instrukcją źródłową | Agent zlecony (odbiorca) wysyła pacs.002 z powrotem do agenta zlecającego (nadawcy) w celu potwierdzenia akceptacji, rozrachunku lub odrzucenia otrzymanej instrukcji płatniczej, takiej jak pacs.008 lub pacs.009. |

## Kontekst CBPR+ i schematy

- Zastępuje MT199 i narracje statusowe w polu 79 komunikatów MT
- CBPR+ wymaga pacs.002 dla całej komunikacji dotyczącej statusu płatności
- Strukturyzowane kody przyczyn zastępują wyjaśnienia odrzuceń w formie tekstu swobodnego
- Integracja ze śledzeniem SWIFT gpi wymaga pacs.002 dla transparentności end-to-end

## Przepływ wiadomości

Agent zlecony (odbiorca) wysyła pacs.002 z powrotem do agenta zlecającego (nadawcy) w celu potwierdzenia akceptacji, rozrachunku lub odrzucenia otrzymanej instrukcji płatniczej, takiej jak pacs.008 lub pacs.009.

## Tabela różnic wersji

| Zakres wersji | Dlaczego to ważne | Wniosek wdrożeniowy |
|---|---|---|
| pacs.002.001.12 | Bieżąca implementacja w pacs008 | Używaj tego przy dopasowaniu do bieżących szablonów projektu i zasobów walidacyjnych. |
| pacs.002.001.13-15 | Późniejsze rewizje katalogu | Przed rozpoczęciem nowych prac interoperacyjnych lub podłączaniem nowych infrastruktur sprawdź późniejsze rewizje ISO. |

## Przykład XML z komentarzami

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

### Komentarze do pól

- `MsgId`: Użyj nowego identyfikatora dla samego raportu statusowego, a nie dla oryginalnej instrukcji płatniczej.
- `OrgnlInstrId`: Zachowaj oryginalny identyfikator instrukcji bez zmian, aby status można było dopasować automatycznie.
- `TxSts`: To jest stan operacyjny; mapuj go ostrożnie do wewnętrznych stanów procesu, zamiast zakładać dopasowanie jeden do jednego.
- `StsRsnInf`: Ustrukturyzowane kody przyczyn są znacznie bardziej przydatne niż wolny tekst do napraw i analiz.

## Porównanie pacs.002 vs pacs.028

| Wymiar | pacs.002.001.12 | Wiadomość porównawcza |
|---|---|---|
| Główny cel | Raportuj status | Żądaj statusu |
| Kto inicjuje interakcję | Instytucja wysyłająca status | Instytucja pytająca o status |
| Model operacyjny | Raportowanie zdarzeniowe | Zapytanie oparte na wyjątkach |
| Błędne założenie, którego należy unikać | Że raportowanie statusu zastępuje procesy wyjaśniające i dochodzeniowe | Że każda płatność wymaga jawnego zapytania o status |

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Powiązane wiadomości
| Typ wiadomości | Opis | Przegląd |
|---|---|---|
| [`pacs.008.001.13`](/pl/pacs.008.001.13/) | Przelew kredytowy klienta FI-do-FI | Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera informacje o dłużniku, wierzycielu, kwocie i danych przekazu dla jednej lub więcej transakcji polecenia przelewu. |
| [`pacs.009.001.10`](/pl/pacs.009.001.10/) | Przelew kredytowy między instytucjami finansowymi | Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością. |
| [`pacs.028.001.05`](/pl/pacs.028.001.05/) | Zapytanie o status płatności FI-do-FI | Komunikat pacs.028 jest wysyłany przez instytucję finansową w celu zapytania o status wcześniej wysłanej instrukcji płatniczej. Umożliwia proaktywne śledzenie przetwarzania płatności bez oczekiwania na nieoczekiwany raport statusowy. |

