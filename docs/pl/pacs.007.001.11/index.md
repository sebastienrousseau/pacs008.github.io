---
title: pacs.007.001.11 | FI to FI Payment Reversal | pacs008
description: Komunikat pacs.007 jest używany do odwrócenia wcześniej wysłanej instrukcji płatniczej, która nie została jeszcze rozliczona, lub do żądania odwrócenia...
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

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 27 February 2025; linki do źródeł podano poniżej.

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

| Kluczowe elementy danych | Kontekst biznesowy |
|---|---|
| **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i znacznikiem czasu utworzenia | Inicjowany, gdy oryginalny nadawca wykryje błąd przed lub po rozrachunku |
| **TxInf** — Informacje o transakcji z kwotą odwrócenia i stronami | Używany w scenariuszach oszustw, gdy wymagane jest szybkie odwrócenie |
| **OrgnlGrpInf** — Informacje o oryginalnej grupie z odniesieniem do komunikatu źródłowego | Obsługuje zarówno pełne, jak i częściowe odwrócenie kwot oryginalnej płatności |
| **RvslRsnInf** — Informacje o przyczynie odwrócenia ze strukturyzowanymi kodami przyczyn | Zawiera strukturyzowane kody przyczyn odwrócenia do przetwarzania dalszego |
| **OrgnlTxRef** — Referencja oryginalnej transakcji dla identyfikowalności end-to-end | Agent zlecający (oryginalny nadawca) wysyła pacs.007 do przodu przez łańcuch płatniczy w celu odwrócenia wcześniej zleconej płatności. Każdy agent przetwarza instrukcję odwrócenia i odpowiednio koryguje rozrachunek. |

## Kontekst CBPR+ i schematy

- Odróżnia się od pacs.004 kierunkiem — odwrócenie biegnie do przodu od zleceniodawcy, zwrot biegnie wstecz od beneficjenta
- CBPR+ wymaga powiązania z identyfikatorami oryginalnego komunikatu do automatycznego dopasowania
- Strukturyzowane kody przyczyn zastępują narracje w formie tekstu swobodnego ze starszych komunikatów MT
- Coraz częściej wykorzystywany w procesach przywołania płatności natychmiastowych i zapobiegania oszustwom

## Przepływ wiadomości

Agent zlecający (oryginalny nadawca) wysyła pacs.007 do przodu przez łańcuch płatniczy w celu odwrócenia wcześniej zleconej płatności. Każdy agent przetwarza instrukcję odwrócenia i odpowiednio koryguje rozrachunek.

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Powiązane wiadomości
| Typ wiadomości | Opis | Przegląd |
|---|---|---|
| [`pacs.008.001.13`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera informacje o dłużniku, wierzycielu, kwocie i danych przekazu dla jednej lub więcej transakcji polecenia przelewu. |
| [`pacs.004.001.11`](/pl/pacs.004.001.11/) | Payment Return | Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana, została wysłana omyłkowo lub jest przywoływana przez instytucję inicjującą. |
| [`pacs.002.001.12`](/pl/pacs.002.001.12/) | FI to FI Payment Status Report | Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego. |

