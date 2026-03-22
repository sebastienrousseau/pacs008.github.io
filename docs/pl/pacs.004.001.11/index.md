---
title: pacs.004.001.11 — Payment Return | Polski
description: Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana, została wysłana omyłkowo lub jest przywoływana przez instytucję inicjującą.
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **Nazwa ISO** | PaymentReturnV11 |
| **Status rejestracji** | Registered |
| **Rok** | 2019 |
| **Wersja** | 11 |

## Przegląd

Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana, została wysłana omyłkowo lub jest przywoływana przez instytucję inicjującą.

## Kluczowe elementy danych

- **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i znacznikiem czasu utworzenia
- **TxInf** — Informacje o transakcji z kwotą zwrotu i stronami
- **OrgnlGrpInf** — Informacje o oryginalnej grupie z odniesieniem do komunikatu źródłowego
- **RtrRsnInf** — Informacje o przyczynie zwrotu ze strukturyzowanymi kodami przyczyn
- **OrgnlTxRef** — Referencja oryginalnej transakcji do dopasowania i uzgadniania

## Kontekst biznesowy

- Obsługuje zwroty po rozrachunku, gdy rachunek beneficjenta nie może zostać uznany
- Obsługuje scenariusze przywołania, w których zleceniodawca żąda zwrotu środków
- Zawiera strukturyzowane kody przyczyn zwrotu dla przejrzystości regulacyjnej i operacyjnej
- Ma zastosowanie zarówno do zwrotów poleceń przelewu (pacs.008), jak i zwrotów poleceń zapłaty (pacs.003)

## Kontekst CBPR+ i schematy

- Zastępuje MT103 RETURN i komunikaty zwrotowe metodą pokrycia
- Kody przyczyn zwrotu są znormalizowane i możliwe do odczytu maszynowego zgodnie z ISO 20022
- CBPR+ wymaga pełnych danych referencyjnych oryginalnej transakcji do dopasowania
- Śledzenie SWIFT gpi rozszerza się na transakcje zwrotowe dla widoczności end-to-end

## Przepływ wiadomości

Agent zlecony wysyła pacs.004 wstecz przez łańcuch płatniczy w celu zwrotu wcześniej rozliczonych środków. Każdy agent w łańcuchu przetwarza zwrot i ponownie uznaje odpowiednie rachunki.

## Powiązane wiadomości

- [`pacs.008.001.13`](/pl/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.003.001.09`](/pl/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.002.001.12`](/pl/pacs.002.001.12/) — FI to FI Payment Status Report

