---
title: pacs.028.001.05 | FI to FI Payment Status Request | pacs008
description: Komunikat pacs.028 jest wysyłany przez instytucję finansową w celu zapytania o status wcześniej wysłanej instrukcji płatniczej. Umożliwia proaktywne...
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **Nazwa ISO** | FIToFIPaymentStatusRequestV05 |
| **Status rejestracji** | Registered |
| **Rok** | 2019 |
| **Wersja** | 5 |

## Przegląd

Komunikat pacs.028 jest wysyłany przez instytucję finansową w celu zapytania o status wcześniej wysłanej instrukcji płatniczej. Umożliwia proaktywne śledzenie przetwarzania płatności bez oczekiwania na nieoczekiwany raport statusowy.

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 27 February 2025; linki do źródeł podano poniżej.

## Kluczowe elementy danych

- **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i znacznikiem czasu utworzenia
- **TxInf** — Informacje o transakcji identyfikujące płatność, o którą zapytano
- **OrgnlGrpInf** — Informacje o oryginalnej grupie z odniesieniem do komunikatu źródłowego
- **OrgnlInstrId** — Oryginalna identyfikacja instrukcji z płatności źródłowej
- **OrgnlEndToEndId** — Oryginalna identyfikacja end-to-end dla identyfikowalności

## Kontekst biznesowy

- Umożliwia proaktywne zapytanie o status instrukcji płatniczych w trakcie realizacji
- Wspiera zespoły operacyjne w badaniu opóźnionych lub brakujących płatności
- Uzupełnia pacs.002, inicjując komunikację statusową zamiast oczekiwania
- Używany w procesach obsługi wyjątków i monitorowania SLA

| Kluczowe elementy danych | Kontekst biznesowy |
|---|---|
| **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i znacznikiem czasu utworzenia | Umożliwia proaktywne zapytanie o status instrukcji płatniczych w trakcie realizacji |
| **TxInf** — Informacje o transakcji identyfikujące płatność, o którą zapytano | Wspiera zespoły operacyjne w badaniu opóźnionych lub brakujących płatności |
| **OrgnlGrpInf** — Informacje o oryginalnej grupie z odniesieniem do komunikatu źródłowego | Uzupełnia pacs.002, inicjując komunikację statusową zamiast oczekiwania |
| **OrgnlInstrId** — Oryginalna identyfikacja instrukcji z płatności źródłowej | Używany w procesach obsługi wyjątków i monitorowania SLA |
| **OrgnlEndToEndId** — Oryginalna identyfikacja end-to-end dla identyfikowalności | Agent zlecający wysyła pacs.028 do agenta zleconego w celu zapytania o status konkretnej płatności. Agent zlecony odpowiada komunikatem pacs.002 zawierającym aktualny status przetwarzania. |

## Kontekst CBPR+ i schematy

- Zastępuje wzorce zapytań statusowych MT199 i ręczne zapytania o komunikaty SWIFT
- CBPR+ obsługuje strukturyzowane zapytania statusowe powiązane z identyfikatorami oryginalnego komunikatu
- Śledzenie oparte na UETR za pośrednictwem gpi zmniejsza potrzebę ręcznych zapytań
- Coraz częściej integrowany z automatycznymi pulpitami nawigacyjnymi operacji płatniczych

## Przepływ wiadomości

Agent zlecający wysyła pacs.028 do agenta zleconego w celu zapytania o status konkretnej płatności. Agent zlecony odpowiada komunikatem pacs.002 zawierającym aktualny status przetwarzania.

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Powiązane wiadomości
| Typ wiadomości | Opis | Przegląd |
|---|---|---|
| [`pacs.002.001.12`](/pl/pacs.002.001.12/) | FI to FI Payment Status Report | Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego. |
| [`pacs.008.001.13`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera informacje o dłużniku, wierzycielu, kwocie i danych przekazu dla jednej lub więcej transakcji polecenia przelewu. |
| [`pacs.009.001.10`](/pl/pacs.009.001.10/) | Financial Institution Credit Transfer | Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością. |

