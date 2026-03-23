---
title: pacs.010.001.05 | Financial Institution Direct Debit | pacs008
description: Komunikat pacs.010 jest używany między instytucjami finansowymi do transakcji poleceń zapłaty na rachunek własny instytucji. Umożliwia jednej instytucji...
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **Nazwa ISO** | FinancialInstitutionDirectDebitV05 |
| **Status rejestracji** | Registered |
| **Rok** | 2019 |
| **Wersja** | 5 |

## Przegląd

Komunikat pacs.010 jest używany między instytucjami finansowymi do transakcji poleceń zapłaty na rachunek własny instytucji. Umożliwia jednej instytucji pobranie środków bezpośrednio z rachunku innej instytucji.

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 27 February 2025; linki do źródeł podano poniżej.

## Kluczowe elementy danych

- **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i informacjami o rozrachunku
- **DrctDbtTxInf** — Informacje o transakcji polecenia zapłaty z kwotą inkasa
- **Cdtr / CdtrAgt** — Identyfikacja instytucji wierzyciela i jej agenta
- **Dbtr / DbtrAgt** — Identyfikacja instytucji dłużnika i jej agenta
- **IntrBkSttlmAmt** — Kwota rozrachunku międzybankowego w walucie rozrachunku

## Kontekst biznesowy

- Obsługuje międzybankowe inkaso poleceń zapłaty między instytucjami finansowymi
- Używany do inkasa opłat, wezwań do uzupełnienia depozytu zabezpieczającego i zobowiązań rozrachunkowych instytucji
- Wymaga wcześniej uzgodnionych dwustronnych ustaleń między uczestniczącymi instytucjami
- Kluczowy dla instytucjonalnego zarządzania gotówką i międzybankowych cykli rozrachunkowych

| Kluczowe elementy danych | Kontekst biznesowy |
|---|---|
| **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i informacjami o rozrachunku | Obsługuje międzybankowe inkaso poleceń zapłaty między instytucjami finansowymi |
| **DrctDbtTxInf** — Informacje o transakcji polecenia zapłaty z kwotą inkasa | Używany do inkasa opłat, wezwań do uzupełnienia depozytu zabezpieczającego i zobowiązań rozrachunkowych instytucji |
| **Cdtr / CdtrAgt** — Identyfikacja instytucji wierzyciela i jej agenta | Wymaga wcześniej uzgodnionych dwustronnych ustaleń między uczestniczącymi instytucjami |
| **Dbtr / DbtrAgt** — Identyfikacja instytucji dłużnika i jej agenta | Kluczowy dla instytucjonalnego zarządzania gotówką i międzybankowych cykli rozrachunkowych |
| **IntrBkSttlmAmt** — Kwota rozrachunku międzybankowego w walucie rozrachunku | Instytucja wierzyciela wysyła pacs.010 do instytucji dłużnika w celu pobrania środków na podstawie wcześniej uzgodnionych ustaleń. Instytucja dłużnika waliduje żądanie i dokonuje rozrachunku lub odrzuca polecenie zapłaty. |

## Kontekst CBPR+ i schematy

- Zastępuje elementy MT204 w przetwarzaniu międzybankowych poleceń zapłaty
- Strukturyzowana identyfikacja stron podlega tym samym wymaganiom co inne komunikaty pacs
- Walidacja identyfikatorów instytucjonalnych (BIC, LEI) jest obowiązkowa
- Uwzględniony w planach pełnej adopcji ISO 20022 we wszystkich infrastrukturach rynkowych

## Przepływ wiadomości

Instytucja wierzyciela wysyła pacs.010 do instytucji dłużnika w celu pobrania środków na podstawie wcześniej uzgodnionych ustaleń. Instytucja dłużnika waliduje żądanie i dokonuje rozrachunku lub odrzuca polecenie zapłaty.

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Powiązane wiadomości
| Typ wiadomości | Opis | Przegląd |
|---|---|---|
| [`pacs.009.001.10`](/pl/pacs.009.001.10/) | Financial Institution Credit Transfer | Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością. |
| [`pacs.002.001.12`](/pl/pacs.002.001.12/) | FI to FI Payment Status Report | Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego. |
| [`pacs.003.001.09`](/pl/pacs.003.001.09/) | FI to FI Customer Direct Debit | Komunikat pacs.003 jest wymieniany między instytucjami finansowymi w celu realizacji instrukcji polecenia zapłaty klienta. Umożliwia bankowi wierzyciela pobranie środków z banku dłużnika w imieniu wierzyciela. |

