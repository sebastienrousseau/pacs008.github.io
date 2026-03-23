---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera...
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

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 27 February 2025; linki do źródeł podano poniżej.

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

| Kluczowe elementy danych | Kontekst biznesowy |
|---|---|
| **GrpHdr** — Nagłówek grupy z ID komunikatu, datą utworzenia, liczbą transakcji i informacjami o rozrachunku | Podstawowy komunikat dla transgranicznych i krajowych poleceń przelewu inicjowanych przez klienta |
| **CdtTrfTxInf** — Informacje o transakcji polecenia przelewu z kwotą, opłatami i celem | Używany w SEPA SCT, SEPA Instant, CBPR+ oraz krajowych systemach rozliczeniowych |
| **Dbtr / DbtrAgt** — Identyfikacja dłużnika i agenta dłużnika z danymi rachunku | Zawiera strukturyzowane informacje o przekazie wspierające automatyczne uzgadnianie |
| **Cdtr / CdtrAgt** — Identyfikacja wierzyciela i agenta wierzyciela z danymi rachunku | Obsługuje metody rozrachunku seryjnego, pokrycia i bezpośredniego dla wieloetapowych łańcuchów płatniczych |
| **RmtInf** — Informacje o przekazie dla strukturyzowanych lub niestrukturyzowanych referencji płatniczych | Agent dłużnika tworzy pacs.008 i wysyła go do agenta wierzyciela (bezpośrednio lub przez pośredników). Każdy agent w łańcuchu waliduje, wzbogaca i przekazuje instrukcję, aż agent wierzyciela uzna rachunek beneficjenta. |

## Kontekst CBPR+ i schematy

- Zastępuje MT103 i MT103+ dla transgranicznych poleceń przelewu klientów
- Termin dotyczący adresów strukturyzowanych z listopada 2026 dotyczy wszystkich adresów pocztowych stron
- SWIFT gpi wymaga pacs.008 do śledzenia end-to-end opartego na UETR
- 13 rewizji odzwierciedla ciągłą ewolucję schematu w infrastrukturach rynkowych

## Przepływ wiadomości

Agent dłużnika tworzy pacs.008 i wysyła go do agenta wierzyciela (bezpośrednio lub przez pośredników). Każdy agent w łańcuchu waliduje, wzbogaca i przekazuje instrukcję, aż agent wierzyciela uzna rachunek beneficjenta.

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


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
| Typ wiadomości | Opis | Przegląd |
|---|---|---|
| [`pacs.002.001.12`](/pl/pacs.002.001.12/) | FI to FI Payment Status Report | Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego. |
| [`pacs.004.001.11`](/pl/pacs.004.001.11/) | Payment Return | Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana, została wysłana omyłkowo lub jest przywoływana przez instytucję inicjującą. |
| [`pacs.009.001.10`](/pl/pacs.009.001.10/) | Financial Institution Credit Transfer | Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością. |

