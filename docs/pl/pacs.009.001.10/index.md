---
title: pacs.009.001.10 | Financial Institution Credit Transfer | pacs008
description: Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w...
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

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 27 February 2025; linki do źródeł podano poniżej.

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

| Kluczowe elementy danych | Kontekst biznesowy |
|---|---|
| **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i informacjami o rozrachunku | Używany do międzybankowych przelewów na rachunek własny i płatności pokrycia |
| **CdtTrfTxInf** — Informacje o transakcji polecenia przelewu z kwotą rozrachunku międzybankowego | Obsługuje zarządzanie płynnością między partnerami bankowości korespondencyjnej |
| **Dbtr / DbtrAgt** — Identyfikacja instytucji dłużnika i jej agenta | Zawiera etap pokrycia poleceń przelewu klientów rozliczanych metodą pokrycia |
| **Cdtr / CdtrAgt** — Identyfikacja instytucji wierzyciela i jej agenta | Umożliwia operacje skarbowe i finansowe między instytucjami finansowymi |
| **IntrBkSttlmAmt** — Kwota rozrachunku międzybankowego w walucie rozrachunku | Instytucja dłużnika wysyła pacs.009 do instytucji wierzyciela w celu przekazania własnych środków. W przypadku płatności metodą pokrycia pacs.009 zapewnia etap finansowania, podczas gdy pacs.008 przenosi instrukcję klienta odrębną ścieżką. |

## Kontekst CBPR+ i schematy

- Zastępuje MT202 i MT202COV dla przelewów między instytucjami
- Przepływy metodą pokrycia łączą pacs.009 z bazową instrukcją klienta pacs.008
- Strukturyzowane dane stron i identyfikacja LEI są coraz częściej wymagane
- SWIFT gpi obejmuje pacs.009 dla transparentności w bankowości korespondencyjnej

## Przepływ wiadomości

Instytucja dłużnika wysyła pacs.009 do instytucji wierzyciela w celu przekazania własnych środków. W przypadku płatności metodą pokrycia pacs.009 zapewnia etap finansowania, podczas gdy pacs.008 przenosi instrukcję klienta odrębną ścieżką.

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## Powiązane wiadomości
| Typ wiadomości | Opis | Przegląd |
|---|---|---|
| [`pacs.008.001.13`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera informacje o dłużniku, wierzycielu, kwocie i danych przekazu dla jednej lub więcej transakcji polecenia przelewu. |
| [`pacs.002.001.12`](/pl/pacs.002.001.12/) | FI to FI Payment Status Report | Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego. |
| [`pacs.010.001.05`](/pl/pacs.010.001.05/) | Financial Institution Direct Debit | Komunikat pacs.010 jest używany między instytucjami finansowymi do transakcji poleceń zapłaty na rachunek własny instytucji. Umożliwia jednej instytucji pobranie środków bezpośrednio z rachunku innej instytucji. |

