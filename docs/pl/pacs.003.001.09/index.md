---
title: pacs.003.001.09 — FI to FI Customer Direct Debit | Polski
description: Komunikat pacs.003 jest wymieniany między instytucjami finansowymi w celu realizacji instrukcji polecenia zapłaty klienta. Umożliwia bankowi wierzyciela pobranie środków z banku dłużnika w imieniu wierzyciela.
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **Nazwa ISO** | FIToFICustomerDirectDebitV09 |
| **Status rejestracji** | Registered |
| **Rok** | 2019 |
| **Wersja** | 9 |

## Przegląd

Komunikat pacs.003 jest wymieniany między instytucjami finansowymi w celu realizacji instrukcji polecenia zapłaty klienta. Umożliwia bankowi wierzyciela pobranie środków z banku dłużnika w imieniu wierzyciela.

## Kluczowe elementy danych

- **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i informacjami o rozrachunku
- **DrctDbtTxInf** — Informacje o transakcji polecenia zapłaty z kwotą i stronami
- **Cdtr** — Identyfikacja wierzyciela i dane rachunku
- **CdtrAgt** — Identyfikacja agenta wierzyciela (instytucji inkasującej)
- **DbtrAgt** — Identyfikacja agenta dłużnika (instytucji płacącej)

## Kontekst biznesowy

- Obsługuje schematy poleceń zapłaty SEPA Core i B2B
- Używany do inkasa płatności cyklicznych, takich jak subskrypcje, rachunki za media i spłaty kredytów
- Wymaga ważnej referencji mandatu między dłużnikiem a wierzycielem
- Umożliwia zbiorcze inkaso wielu instrukcji poleceń zapłaty w jednym komunikacie

## Kontekst CBPR+ i schematy

- Wymagania dotyczące adresu strukturyzowanego i identyfikacji stron obowiązują w równym stopniu dla poleceń zapłaty
- Dane związane z mandatem muszą być w pełni strukturyzowane od listopada 2026
- Zastępuje starsze formaty poleceń zapłaty w stylu MT104 w przepływach transgranicznych
- Walidacja identyfikacji schematu wierzyciela jest coraz bardziej egzekwowana

## Przepływ wiadomości

Agent wierzyciela inicjuje pacs.003 w kierunku agenta dłużnika w celu pobrania środków. Agent dłużnika waliduje mandat, sprawdza pokrycie rachunku i dokonuje rozrachunku lub zwraca transakcję.

## Powiązane wiadomości

- [`pacs.004.001.11`](/pl/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/pl/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.002.001.12`](/pl/pacs.002.001.12/) — FI to FI Payment Status Report

