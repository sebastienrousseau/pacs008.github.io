---
title: pacs.007.001.11 — FI to FI Payment Reversal | Polski
description: Komunikat pacs.007 jest używany do odwrócenia wcześniej wysłanej instrukcji płatniczej, która nie została jeszcze rozliczona, lub do żądania odwrócenia rozliczonej płatności. W odróżnieniu od pacs.004 (zwrot) jest inicjowany przez oryginalnego agenta zlecającego.
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **Nazwa ISO** | FIToFIPaymentReversalV11 |
| **Status rejestracji** | Registered |
| **Rok** | 2019 |
| **Wersja** | 11 |

## Przegląd

Komunikat pacs.007 jest używany do odwrócenia wcześniej wysłanej instrukcji płatniczej, która nie została jeszcze rozliczona, lub do żądania odwrócenia rozliczonej płatności. W odróżnieniu od pacs.004 (zwrot) jest inicjowany przez oryginalnego agenta zlecającego.

## Kluczowe elementy danych

- **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i znacznikiem czasu utworzenia
- **TxInf** — Informacje o transakcji z kwotą odwrócenia i stronami
- **OrgnlGrpInf** — Informacje o oryginalnej grupie z odniesieniem do komunikatu źródłowego
- **RvslRsnInf** — Informacje o przyczynie odwrócenia ze strukturyzowanymi kodami przyczyn
- **OrgnlTxRef** — Referencja oryginalnej transakcji dla identyfikowalności end-to-end

## Kontekst biznesowy

- Inicjowany, gdy oryginalny nadawca wykryje błąd przed lub po rozrachunku
- Używany w scenariuszach oszustw, gdy wymagane jest szybkie odwrócenie
- Obsługuje zarówno pełne, jak i częściowe odwrócenie kwot oryginalnej płatności
- Zawiera strukturyzowane kody przyczyn odwrócenia do przetwarzania dalszego

## Kontekst CBPR+ i schematy

- Odróżnia się od pacs.004 kierunkiem — odwrócenie biegnie do przodu od zleceniodawcy, zwrot biegnie wstecz od beneficjenta
- CBPR+ wymaga powiązania z identyfikatorami oryginalnego komunikatu do automatycznego dopasowania
- Strukturyzowane kody przyczyn zastępują narracje w formie tekstu swobodnego ze starszych komunikatów MT
- Coraz częściej wykorzystywany w procesach przywołania płatności natychmiastowych i zapobiegania oszustwom

## Przepływ wiadomości

Agent zlecający (oryginalny nadawca) wysyła pacs.007 do przodu przez łańcuch płatniczy w celu odwrócenia wcześniej zleconej płatności. Każdy agent przetwarza instrukcję odwrócenia i odpowiednio koryguje rozrachunek.

## Powiązane wiadomości

- [`pacs.008.001.13`](/pl/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.004.001.11`](/pl/pacs.004.001.11/) — Payment Return
- [`pacs.002.001.12`](/pl/pacs.002.001.12/) — FI to FI Payment Status Report

