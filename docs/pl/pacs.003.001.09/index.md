---
title: pacs.003.001.09 | FI to FI Customer Direct Debit | pacs008
description: Komunikat pacs.003 jest wymieniany między instytucjami finansowymi w celu realizacji instrukcji polecenia zapłaty klienta. Umożliwia bankowi wierzyciela...
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

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 27 February 2025; linki do źródeł podano poniżej.

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

| Kluczowe elementy danych | Kontekst biznesowy |
|---|---|
| **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i informacjami o rozrachunku | Obsługuje schematy poleceń zapłaty SEPA Core i B2B |
| **DrctDbtTxInf** — Informacje o transakcji polecenia zapłaty z kwotą i stronami | Używany do inkasa płatności cyklicznych, takich jak subskrypcje, rachunki za media i spłaty kredytów |
| **Cdtr** — Identyfikacja wierzyciela i dane rachunku | Wymaga ważnej referencji mandatu między dłużnikiem a wierzycielem |
| **CdtrAgt** — Identyfikacja agenta wierzyciela (instytucji inkasującej) | Umożliwia zbiorcze inkaso wielu instrukcji poleceń zapłaty w jednym komunikacie |
| **DbtrAgt** — Identyfikacja agenta dłużnika (instytucji płacącej) | Agent wierzyciela inicjuje pacs.003 w kierunku agenta dłużnika w celu pobrania środków. Agent dłużnika waliduje mandat, sprawdza pokrycie rachunku i dokonuje rozrachunku lub zwraca transakcję. |

## Kontekst CBPR+ i schematy

- Wymagania dotyczące adresu strukturyzowanego i identyfikacji stron obowiązują w równym stopniu dla poleceń zapłaty
- Dane związane z mandatem muszą być w pełni strukturyzowane od listopada 2026
- Zastępuje starsze formaty poleceń zapłaty w stylu MT104 w przepływach transgranicznych
- Walidacja identyfikacji schematu wierzyciela jest coraz bardziej egzekwowana

## Przepływ wiadomości

Agent wierzyciela inicjuje pacs.003 w kierunku agenta dłużnika w celu pobrania środków. Agent dłużnika waliduje mandat, sprawdza pokrycie rachunku i dokonuje rozrachunku lub zwraca transakcję.

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Powiązane wiadomości
| Typ wiadomości | Opis | Przegląd |
|---|---|---|
| [`pacs.004.001.11`](/pl/pacs.004.001.11/) | Payment Return | Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana, została wysłana omyłkowo lub jest przywoływana przez instytucję inicjującą. |
| [`pacs.007.001.11`](/pl/pacs.007.001.11/) | FI to FI Payment Reversal | Komunikat pacs.007 jest używany do odwrócenia wcześniej wysłanej instrukcji płatniczej, która nie została jeszcze rozliczona, lub do żądania odwrócenia rozliczonej płatności. W odróżnieniu od pacs.004 (zwrot) jest inicjowany przez oryginalnego agenta zlecającego. |
| [`pacs.002.001.12`](/pl/pacs.002.001.12/) | FI to FI Payment Status Report | Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego. |

