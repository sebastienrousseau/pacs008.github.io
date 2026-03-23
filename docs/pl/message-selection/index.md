---
title: Przewodnik wyboru komunikatu | pacs008
description: Wybierz właściwy komunikat ISO 20022 pacs do generowania, raportowania statusu, zwrotów, odwróceń i zapytań.
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# Przewodnik wyboru komunikatu

Najpierw wybierz rodzinę pacs według zdarzenia biznesowego, a następnie według schematu i modelu operacyjnego.

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. z użyciem publicznych materiałów ISO 20022, EPC i Swift wskazanych na tej stronie.

## Szybka macierz decyzji

| Typ wiadomości | Opis | Przegląd |
|---|---|---|
| [`pacs.002.001.12`](/pl/pacs.002.001.12/) | FI to FI Payment Status Report | Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego. |
| [`pacs.003.001.09`](/pl/pacs.003.001.09/) | FI to FI Customer Direct Debit | Komunikat pacs.003 jest wymieniany między instytucjami finansowymi w celu realizacji instrukcji polecenia zapłaty klienta. Umożliwia bankowi wierzyciela pobranie środków z banku dłużnika w imieniu wierzyciela. |
| [`pacs.004.001.11`](/pl/pacs.004.001.11/) | Payment Return | Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana, została wysłana omyłkowo lub jest przywoływana przez instytucję inicjującą. |
| [`pacs.007.001.11`](/pl/pacs.007.001.11/) | FI to FI Payment Reversal | Komunikat pacs.007 jest używany do odwrócenia wcześniej wysłanej instrukcji płatniczej, która nie została jeszcze rozliczona, lub do żądania odwrócenia rozliczonej płatności. W odróżnieniu od pacs.004 (zwrot) jest inicjowany przez oryginalnego agenta zlecającego. |
| [`pacs.008.001.13`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera informacje o dłużniku, wierzycielu, kwocie i danych przekazu dla jednej lub więcej transakcji polecenia przelewu. |
| [`pacs.009.001.10`](/pl/pacs.009.001.10/) | Financial Institution Credit Transfer | Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością. |
| [`pacs.010.001.05`](/pl/pacs.010.001.05/) | Financial Institution Direct Debit | Komunikat pacs.010 jest używany między instytucjami finansowymi do transakcji poleceń zapłaty na rachunek własny instytucji. Umożliwia jednej instytucji pobranie środków bezpośrednio z rachunku innej instytucji. |
| [`pacs.028.001.05`](/pl/pacs.028.001.05/) | FI to FI Payment Status Request | Komunikat pacs.028 jest wysyłany przez instytucję finansową w celu zapytania o status wcześniej wysłanej instrukcji płatniczej. Umożliwia proaktywne śledzenie przetwarzania płatności bez oczekiwania na nieoczekiwany raport statusowy. |

## Typowe punkty porównania

| Porównanie | Kluczowa różnica |
|---|---|
| `pacs.008` vs `pacs.009` | Płatność klienta versus ruch instytucjonalny lub cover |
| `pacs.004` vs `pacs.007` | Zwrot po stronie odbiorcy versus odwrócenie po stronie zlecającej |
| `pacs.002` vs `pacs.028` | Raport statusu versus żądanie statusu |

## Obsługiwane strony komunikatów

- [`pacs.002.001.12`](/pl/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/pl/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/pl/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/pl/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.13`](/pl/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/pl/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/pl/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/pl/pacs.028.001.05/) — FI to FI Payment Status Request

