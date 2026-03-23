---
title: Typy wiadomości | pacs008 ISO 20022
description: Obsługiwane definicje i wersje wiadomości pacs ISO 20022. Generowanie, walidacja, orkiestracja API i wsparcie zgodności dla przepływów przelewów...
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# Typy wiadomości

pacs008 obejmuje główną definicję wiadomości pacs.008 i powiązane wiadomości wykorzystywane w przepływach orkiestracji i uzgadniania.

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. z użyciem publicznych materiałów ISO 20022, EPC i Swift wskazanych na tej stronie.

## Uwzględnione wsparcie

| Typ wiadomości | Opis | Wersja | Rok | Przegląd |
|---|---|---|---|---|
| [`pacs.002.001.12`](/pl/pacs.002.001.12/) | FI to FI Payment Status Report | `pacs.002.001.12` | 2019 | Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego. |
| [`pacs.003.001.09`](/pl/pacs.003.001.09/) | FI to FI Customer Direct Debit | `pacs.003.001.09` | 2019 | Komunikat pacs.003 jest wymieniany między instytucjami finansowymi w celu realizacji instrukcji polecenia zapłaty klienta. Umożliwia bankowi wierzyciela pobranie środków z banku dłużnika w imieniu wierzyciela. |
| [`pacs.004.001.11`](/pl/pacs.004.001.11/) | Payment Return | `pacs.004.001.11` | 2019 | Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana, została wysłana omyłkowo lub jest przywoływana przez instytucję inicjującą. |
| [`pacs.007.001.11`](/pl/pacs.007.001.11/) | FI to FI Payment Reversal | `pacs.007.001.11` | 2019 | Komunikat pacs.007 jest używany do odwrócenia wcześniej wysłanej instrukcji płatniczej, która nie została jeszcze rozliczona, lub do żądania odwrócenia rozliczonej płatności. W odróżnieniu od pacs.004 (zwrot) jest inicjowany przez oryginalnego agenta zlecającego. |
| [`pacs.008.001.13`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer | `pacs.008.001.13` | 2023 | Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera informacje o dłużniku, wierzycielu, kwocie i danych przekazu dla jednej lub więcej transakcji polecenia przelewu. |
| [`pacs.009.001.10`](/pl/pacs.009.001.10/) | Financial Institution Credit Transfer | `pacs.009.001.10` | 2019 | Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością. |
| [`pacs.010.001.05`](/pl/pacs.010.001.05/) | Financial Institution Direct Debit | `pacs.010.001.05` | 2019 | Komunikat pacs.010 jest używany między instytucjami finansowymi do transakcji poleceń zapłaty na rachunek własny instytucji. Umożliwia jednej instytucji pobranie środków bezpośrednio z rachunku innej instytucji. |
| [`pacs.028.001.05`](/pl/pacs.028.001.05/) | FI to FI Payment Status Request | `pacs.028.001.05` | 2019 | Komunikat pacs.028 jest wysyłany przez instytucję finansową w celu zapytania o status wcześniej wysłanej instrukcji płatniczej. Umożliwia proaktywne śledzenie przetwarzania płatności bez oczekiwania na nieoczekiwany raport statusowy. |

## Model dostarczania

Każdy obsługiwany typ wiadomości jest wspierany przez zasoby szablonów i logikę walidacji, dzięki czemu zespoły mogą standaryzować generowanie i testy regresji w wielu kanałach.


## Kontekst rynkowy 2026

- **SEPA SCT / SCT Inst**: pacs.008 pozostaje kluczowy dla wymiany przelewów i przetwarzania płatności natychmiastowych.
- **CBPR+**: pacs.008 nadal zastępuje transgraniczne ładunki w stylu MT103 bogatszymi danymi strukturalnymi.
- **Adresy strukturalne**: aktualne wytyczne rynkowe wskazują na przejście w listopadzie 2026 od w pełni niestrukturalnych adresów pocztowych.
- **Metoda seryjna i STP**: wieloetapowe łańcuchy bank-do-banku nadal mają znaczenie, a warianty przetwarzania bezpośredniego pozostają istotne dla efektywności operacyjnej.

## Możliwości operacyjne

pacs008 zapewnia generowanie i walidację opartą na szablonach w ramach obsługiwanych rewizji definicji wiadomości:

- porównywać wersje
- przeprowadzać testy regresji aktualizacji schematów
- wzmacniać wychodzące dane wiadomości płatniczych przed wydaniem
- wspierać zespoły produktu, operacji i migracji z jednej bazy kodu

