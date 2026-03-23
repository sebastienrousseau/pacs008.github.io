---
title: pacs.008.001.13 | Przelew kredytowy klienta FI-do-FI | pacs008
description: Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera...
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — Przelew kredytowy klienta FI-do-FI

| | |
|---|---|
| **Nazwa ISO** | FIToFICustomerCreditTransferV13 |
| **Status rejestracji** | Registered |
| **Rok** | 2023 |
| **Wersja** | 13 |

## Przegląd

Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera informacje o dłużniku, wierzycielu, kwocie i danych przekazu dla jednej lub więcej transakcji polecenia przelewu.

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 2025-02-27; linki do źródeł podano poniżej.

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

## Tabela różnic wersji

| Zakres wersji | Dlaczego to ważne | Wniosek wdrożeniowy |
|---|---|---|
| pacs.008.001.01-07 | Wczesne rewizje | Przydatne głównie do analizy migracji ze starszych systemów i kontekstu historii wersji. |
| pacs.008.001.08-12 | Nowoczesne rewizje sprzed bieżącej wersji | To rewizje, które najczęściej pojawiają się w ostatnich projektach migracyjnych lub koegzystencji. |
| pacs.008.001.13 | Bieżąca rewizja katalogu | Używaj tego do planowania wokół bieżącej wersji, nadal sprawdzając zasady użycia schematu i gotowość kontrahentów. |

## Przykład XML z komentarzami

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### Komentarze do pól

- `MsgId`: To powinno identyfikować kopertę komunikatu, a nie referencję płatności klienta końcowego.
- `EndToEndId`: W miarę możliwości utrzymuj stabilną śledzalność po stronie klienta w kolejnych systemach.
- `UETR`: Używaj tego konsekwentnie w środowiskach transgranicznych i wymagających intensywnego śledzenia; nie generuj tego doraźnie na późniejszych etapach procesu.
- `IntrBkSttlmAmt`: Weryfikuj kwotę i walutę regułami biznesowymi przed walidacją schematu.
- `Dbtr` / `Cdtr`: Jakość danych stron, struktura adresu i identyfikatory są zwykle głównymi czynnikami wpływającymi na poziom napraw.

## Porównanie pacs.008 vs pacs.009

| Wymiar | pacs.008.001.13 | Wiadomość porównawcza |
|---|---|---|
| Główny cel | Kliencki przelew kredytowy | Przelew kredytowy na rachunek własny instytucji lub etap pokrycia |
| Właściciel biznesowy | Operacje płatności klientów | Operacje skarbowe / korespondencyjne / finansowania |
| Typowe powiązania | pacs.002, pacs.004, pacs.007, pacs.028 | pacs.002, pacs.004 i czasem powiązane przepływy pacs.008 |
| Błędne założenie, którego należy unikać | Że wszystkie przelewy między bankami należą tutaj | Że może zastąpić instrukcje przelewu kredytowego klienta |

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

| Wersja | |
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
| `pacs.008.001.13` | **Bieżąca** |

## Powiązane wiadomości
| Typ wiadomości | Opis | Przegląd |
|---|---|---|
| [`pacs.002.001.12`](/pl/pacs.002.001.12/) | Raport statusu płatności FI-do-FI | Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego. |
| [`pacs.004.001.11`](/pl/pacs.004.001.11/) | Zwrot płatności | Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana, została wysłana omyłkowo lub jest przywoływana przez instytucję inicjującą. |
| [`pacs.009.001.10`](/pl/pacs.009.001.10/) | Przelew kredytowy między instytucjami finansowymi | Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością. |

