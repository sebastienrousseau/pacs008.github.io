---
title: pacs.008.001.13 — FI to FI Customer Credit Transfer | Polski
description: Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera informacje o dłużniku, wierzycielu, kwocie i danych przekazu dla jednej lub więcej transakcji polecenia przelewu.
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **Nazwa ISO** | FIToFICustomerCreditTransferV13 |
| **Status rejestracji** | Registered |
| **Rok** | 2023 |
| **Wersja** | 13 |

## Przegląd

Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera informacje o dłużniku, wierzycielu, kwocie i danych przekazu dla jednej lub więcej transakcji polecenia przelewu.

## Kluczowe elementy danych

- **GrpHdr** — Nagłówek grupy z ID komunikatu, datą utworzenia, liczbą transakcji i informacjami o rozrachunku
- **CdtTrfTxInf** — Informacje o transakcji polecenia przelewu z kwotą, opłatami i celem
- **Dbtr / DbtrAgt** — Identyfikacja dłużnika i agenta dłużnika z danymi rachunku
- **Cdtr / CdtrAgt** — Identyfikacja wierzyciela i agenta wierzyciela z danymi rachunku
- **RmtInf** — Informacje o przekazie dla strukturyzowanych lub niestrukturyzowanych referencji płatniczych

## Kontekst biznesowy

- Podstawowy komunikat dla transgranicznych i krajowych poleceń przelewu inicjowanych przez klienta
- Używany w SEPA SCT, SEPA Instant, CBPR+ oraz krajowych systemach rozliczeniowych
- Zawiera strukturyzowane informacje o przekazie wspierające automatyczne uzgadnianie
- Obsługuje metody rozrachunku seryjnego, pokrycia i bezpośredniego dla wieloetapowych łańcuchów płatniczych

## Kontekst CBPR+ i schematy

- Zastępuje MT103 i MT103+ dla transgranicznych poleceń przelewu klientów
- Termin dotyczący adresów strukturyzowanych z listopada 2026 dotyczy wszystkich adresów pocztowych stron
- SWIFT gpi wymaga pacs.008 do śledzenia end-to-end opartego na UETR
- 13 rewizji odzwierciedla ciągłą ewolucję schematu w infrastrukturach rynkowych

## Przepływ wiadomości

Agent dłużnika tworzy pacs.008 i wysyła go do agenta wierzyciela (bezpośrednio lub przez pośredników). Każdy agent w łańcuchu waliduje, wzbogaca i przekazuje instrukcję, aż agent wierzyciela uzna rachunek beneficjenta.

## Obsługiwane wersje

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Powiązane wiadomości

- [`pacs.002.001.12`](/pl/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.004.001.11`](/pl/pacs.004.001.11/) — Payment Return
- [`pacs.009.001.10`](/pl/pacs.009.001.10/) — Financial Institution Credit Transfer

