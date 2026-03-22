---
title: pacs.009.001.10 — Financial Institution Credit Transfer | Polski
description: Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością.
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **Nazwa ISO** | FinancialInstitutionCreditTransferV10 |
| **Status rejestracji** | Registered |
| **Rok** | 2019 |
| **Wersja** | 10 |

## Przegląd

Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością.

## Kluczowe elementy danych

- **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i informacjami o rozrachunku
- **CdtTrfTxInf** — Informacje o transakcji polecenia przelewu z kwotą rozrachunku międzybankowego
- **Dbtr / DbtrAgt** — Identyfikacja instytucji dłużnika i jej agenta
- **Cdtr / CdtrAgt** — Identyfikacja instytucji wierzyciela i jej agenta
- **IntrBkSttlmAmt** — Kwota rozrachunku międzybankowego w walucie rozrachunku

## Kontekst biznesowy

- Używany do międzybankowych przelewów na rachunek własny i płatności pokrycia
- Obsługuje zarządzanie płynnością między partnerami bankowości korespondencyjnej
- Zawiera etap pokrycia poleceń przelewu klientów rozliczanych metodą pokrycia
- Umożliwia operacje skarbowe i finansowe między instytucjami finansowymi

## Kontekst CBPR+ i schematy

- Zastępuje MT202 i MT202COV dla przelewów między instytucjami
- Przepływy metodą pokrycia łączą pacs.009 z bazową instrukcją klienta pacs.008
- Strukturyzowane dane stron i identyfikacja LEI są coraz częściej wymagane
- SWIFT gpi obejmuje pacs.009 dla transparentności w bankowości korespondencyjnej

## Przepływ wiadomości

Instytucja dłużnika wysyła pacs.009 do instytucji wierzyciela w celu przekazania własnych środków. W przypadku płatności metodą pokrycia pacs.009 zapewnia etap finansowania, podczas gdy pacs.008 przenosi instrukcję klienta odrębną ścieżką.

## Powiązane wiadomości

- [`pacs.008.001.13`](/pl/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.002.001.12`](/pl/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.010.001.05`](/pl/pacs.010.001.05/) — Financial Institution Direct Debit

