---
title: pacs.010.001.05 — Financial Institution Direct Debit | Polski
description: Komunikat pacs.010 jest używany między instytucjami finansowymi do transakcji poleceń zapłaty na rachunek własny instytucji. Umożliwia jednej instytucji pobranie środków bezpośrednio z rachunku innej instytucji.
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

## Kontekst CBPR+ i schematy

- Zastępuje elementy MT204 w przetwarzaniu międzybankowych poleceń zapłaty
- Strukturyzowana identyfikacja stron podlega tym samym wymaganiom co inne komunikaty pacs
- Walidacja identyfikatorów instytucjonalnych (BIC, LEI) jest obowiązkowa
- Uwzględniony w planach pełnej adopcji ISO 20022 we wszystkich infrastrukturach rynkowych

## Przepływ wiadomości

Instytucja wierzyciela wysyła pacs.010 do instytucji dłużnika w celu pobrania środków na podstawie wcześniej uzgodnionych ustaleń. Instytucja dłużnika waliduje żądanie i dokonuje rozrachunku lub odrzuca polecenie zapłaty.

## Powiązane wiadomości

- [`pacs.009.001.10`](/pl/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.002.001.12`](/pl/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/pl/pacs.003.001.09/) — FI to FI Customer Direct Debit

