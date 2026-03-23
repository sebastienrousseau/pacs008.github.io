---
title: pacs.004.001.11 | Payment Return | pacs008
description: Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana...
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

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 27 February 2025; linki do źródeł podano poniżej.

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

| Kluczowe elementy danych | Kontekst biznesowy |
|---|---|
| **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i znacznikiem czasu utworzenia | Obsługuje zwroty po rozrachunku, gdy rachunek beneficjenta nie może zostać uznany |
| **TxInf** — Informacje o transakcji z kwotą zwrotu i stronami | Obsługuje scenariusze przywołania, w których zleceniodawca żąda zwrotu środków |
| **OrgnlGrpInf** — Informacje o oryginalnej grupie z odniesieniem do komunikatu źródłowego | Zawiera strukturyzowane kody przyczyn zwrotu dla przejrzystości regulacyjnej i operacyjnej |
| **RtrRsnInf** — Informacje o przyczynie zwrotu ze strukturyzowanymi kodami przyczyn | Ma zastosowanie zarówno do zwrotów poleceń przelewu (pacs.008), jak i zwrotów poleceń zapłaty (pacs.003) |
| **OrgnlTxRef** — Referencja oryginalnej transakcji do dopasowania i uzgadniania | Agent zlecony wysyła pacs.004 wstecz przez łańcuch płatniczy w celu zwrotu wcześniej rozliczonych środków. Każdy agent w łańcuchu przetwarza zwrot i ponownie uznaje odpowiednie rachunki. |

## Kontekst CBPR+ i schematy

- Zastępuje MT103 RETURN i komunikaty zwrotowe metodą pokrycia
- Kody przyczyn zwrotu są znormalizowane i możliwe do odczytu maszynowego zgodnie z ISO 20022
- CBPR+ wymaga pełnych danych referencyjnych oryginalnej transakcji do dopasowania
- Śledzenie SWIFT gpi rozszerza się na transakcje zwrotowe dla widoczności end-to-end

## Przepływ wiadomości

Agent zlecony wysyła pacs.004 wstecz przez łańcuch płatniczy w celu zwrotu wcześniej rozliczonych środków. Każdy agent w łańcuchu przetwarza zwrot i ponownie uznaje odpowiednie rachunki.

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Powiązane wiadomości
| Typ wiadomości | Opis | Przegląd |
|---|---|---|
| [`pacs.008.001.13`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera informacje o dłużniku, wierzycielu, kwocie i danych przekazu dla jednej lub więcej transakcji polecenia przelewu. |
| [`pacs.003.001.09`](/pl/pacs.003.001.09/) | FI to FI Customer Direct Debit | Komunikat pacs.003 jest wymieniany między instytucjami finansowymi w celu realizacji instrukcji polecenia zapłaty klienta. Umożliwia bankowi wierzyciela pobranie środków z banku dłużnika w imieniu wierzyciela. |
| [`pacs.002.001.12`](/pl/pacs.002.001.12/) | FI to FI Payment Status Report | Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego. |

