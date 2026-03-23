---
title: pacs.003.001.09 | Polecenie zapłaty klienta FI-do-FI | pacs008
description: Komunikat pacs.003 jest wymieniany między instytucjami finansowymi w celu realizacji instrukcji polecenia zapłaty klienta. Umożliwia bankowi wierzyciela...
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — Polecenie zapłaty klienta FI-do-FI

| | |
|---|---|
| **Nazwa ISO** | FIToFICustomerDirectDebitV09 |
| **Status rejestracji** | Registered |
| **Rok** | 2019 |
| **Wersja** | 9 |

## Przegląd

Komunikat pacs.003 jest wymieniany między instytucjami finansowymi w celu realizacji instrukcji polecenia zapłaty klienta. Umożliwia bankowi wierzyciela pobranie środków z banku dłużnika w imieniu wierzyciela.

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 2025-02-27; linki do źródeł podano poniżej.

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

## Tabela różnic wersji

| Zakres wersji | Dlaczego to ważne | Wniosek wdrożeniowy |
|---|---|---|
| pacs.003.001.09 | Bieżąca implementacja w pacs008 | Przydatne do modelowania odniesień polecenia zapłaty w bieżącym projekcie. |
| pacs.003.001.10-11 | Późniejsze rewizje katalogu | Sprawdź późniejsze rewizje pod kątem zmian mandatów, statusów i interoperacyjności przed użyciem w nowym wdrożeniu. |

## Przykład XML z komentarzami

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Komentarze do pól

- `EndToEndId`: Oddziel identyfikatory mandatu i inkasa od biznesowych odniesień do faktur.
- `IntrBkSttlmAmt`: Zweryfikuj precyzję kwoty obciążenia i reguły walutowe przed wygenerowaniem XML.
- `Dbtr` / `Cdtr`: Powodzenie polecenia zapłaty częściej zależy od jakości rachunku i mandatu niż od struktury XML.

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Powiązane wiadomości
| Typ wiadomości | Opis | Przegląd |
|---|---|---|
| [`pacs.004.001.11`](/pl/pacs.004.001.11/) | Zwrot płatności | Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana, została wysłana omyłkowo lub jest przywoływana przez instytucję inicjującą. |
| [`pacs.007.001.11`](/pl/pacs.007.001.11/) | Odwrócenie płatności FI-do-FI | Komunikat pacs.007 jest używany do odwrócenia wcześniej wysłanej instrukcji płatniczej, która nie została jeszcze rozliczona, lub do żądania odwrócenia rozliczonej płatności. W odróżnieniu od pacs.004 (zwrot) jest inicjowany przez oryginalnego agenta zlecającego. |
| [`pacs.002.001.12`](/pl/pacs.002.001.12/) | Raport statusu płatności FI-do-FI | Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego. |

