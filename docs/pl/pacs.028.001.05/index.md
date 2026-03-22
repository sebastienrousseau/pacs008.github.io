---
title: pacs.028.001.05 — FI to FI Payment Status Request | Polski
description: Komunikat pacs.028 jest wysyłany przez instytucję finansową w celu zapytania o status wcześniej wysłanej instrukcji płatniczej. Umożliwia proaktywne śledzenie przetwarzania płatności bez oczekiwania na nieoczekiwany raport statusowy.
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

## Kontekst CBPR+ i schematy

- Zastępuje wzorce zapytań statusowych MT199 i ręczne zapytania o komunikaty SWIFT
- CBPR+ obsługuje strukturyzowane zapytania statusowe powiązane z identyfikatorami oryginalnego komunikatu
- Śledzenie oparte na UETR za pośrednictwem gpi zmniejsza potrzebę ręcznych zapytań
- Coraz częściej integrowany z automatycznymi pulpitami nawigacyjnymi operacji płatniczych

## Przepływ wiadomości

Agent zlecający wysyła pacs.028 do agenta zleconego w celu zapytania o status konkretnej płatności. Agent zlecony odpowiada komunikatem pacs.002 zawierającym aktualny status przetwarzania.

## Powiązane wiadomości

- [`pacs.002.001.12`](/pl/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.008.001.13`](/pl/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/pl/pacs.009.001.10/) — Financial Institution Credit Transfer

