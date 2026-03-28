---
title: "pacs.010.001.05 | Polecenie zapłaty między instytucjami finansowymi | pacs008"
description: Komunikat pacs.010 jest używany między instytucjami finansowymi do transakcji poleceń zapłaty na rachunek własny instytucji. Umożliwia jednej instytucji...
lang: pl-PL
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.010 common in retail payment products?"
    answer: "Usually no. It fits bank-to-bank direct-debit scenarios better than standard retail products."
  - question: "What should teams design first?"
    answer: "Start with approval rules, bilateral controls, and exception handling before finalising XML templates."
---

# pacs.010.001.05 — Polecenie zapłaty między instytucjami finansowymi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Pole</th>
        <th scope="col">Wartość</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Nazwa ISO</strong></td>
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Status rejestracji</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Rok</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Wersja</strong></td>
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Przegląd

Komunikat pacs.010 jest używany między instytucjami finansowymi do transakcji poleceń zapłaty na rachunek własny instytucji. Umożliwia jednej instytucji pobranie środków bezpośrednio z rachunku innej instytucji.

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 2025-02-27; linki do źródeł podano poniżej.

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

<div class="operational-matrix-table" tabindex="0" aria-label="Kluczowe elementy danych Kontekst biznesowy">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Kluczowe elementy danych</th>
        <th>Kontekst biznesowy</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Nagłówek grupy z identyfikacją komunikatu i informacjami o rozrachunku</td>
          <td class="operational-matrix-table__right">Obsługuje międzybankowe inkaso poleceń zapłaty między instytucjami finansowymi</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Informacje o transakcji polecenia zapłaty z kwotą inkasa</td>
          <td class="operational-matrix-table__right">Używany do inkasa opłat, wezwań do uzupełnienia depozytu zabezpieczającego i zobowiązań rozrachunkowych instytucji</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identyfikacja instytucji wierzyciela i jej agenta</td>
          <td class="operational-matrix-table__right">Wymaga wcześniej uzgodnionych dwustronnych ustaleń między uczestniczącymi instytucjami</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identyfikacja instytucji dłużnika i jej agenta</td>
          <td class="operational-matrix-table__right">Kluczowy dla instytucjonalnego zarządzania gotówką i międzybankowych cykli rozrachunkowych</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Kwota rozrachunku międzybankowego w walucie rozrachunku</td>
          <td class="operational-matrix-table__right">Instytucja wierzyciela wysyła pacs.010 do instytucji dłużnika w celu pobrania środków na podstawie wcześniej uzgodnionych ustaleń. Instytucja dłużnika waliduje żądanie i dokonuje rozrachunku lub odrzuca polecenie zapłaty.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontekst CBPR+ i schematy

- Zastępuje elementy MT204 w przetwarzaniu międzybankowych poleceń zapłaty
- Strukturyzowana identyfikacja stron podlega tym samym wymaganiom co inne komunikaty pacs
- Walidacja identyfikatorów instytucjonalnych (BIC, LEI) jest obowiązkowa
- Uwzględniony w planach pełnej adopcji ISO 20022 we wszystkich infrastrukturach rynkowych

## Przepływ wiadomości

Instytucja wierzyciela wysyła pacs.010 do instytucji dłużnika w celu pobrania środków na podstawie wcześniej uzgodnionych ustaleń. Instytucja dłużnika waliduje żądanie i dokonuje rozrachunku lub odrzuca polecenie zapłaty.

## Tabela różnic wersji

<div class="version-diff-table" tabindex="0" aria-label="Tabela różnic wersji">
  <table>
    <caption>Tabela różnic wersji</caption>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Zakres wersji</th>
        <th>Dlaczego to ważne</th>
        <th>Wniosek wdrożeniowy</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">Bieżąca implementacja w pacs008</td>
          <td class="version-diff-table__takeaway">Punkt odniesienia dla obsługi polecenia zapłaty między instytucjami w bieżącym projekcie.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">Późniejsza rewizja katalogu</td>
          <td class="version-diff-table__takeaway">Sprawdź to przed przyjęciem nowszych wymagań infrastrukturalnych.</td>
        </tr>
    </tbody>
  </table>
</div>

## Przykład XML z komentarzami

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Komentarze do pól

- `InstrId`: Use an identifier that links back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need clear bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly. This is not a retail-customer debit model.

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

## Powiązane wiadomości
<div class="related-messages-table" tabindex="0" aria-label="Powiązane wiadomości">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Typ wiadomości</th>
        <th>Opis</th>
        <th>Przegląd</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/pl/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Przelew kredytowy między instytucjami finansowymi</td>
          <td class="related-messages-table__overview">Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Raport statusu płatności FI-do-FI</td>
          <td class="related-messages-table__overview">Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pl/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Polecenie zapłaty klienta FI-do-FI</td>
          <td class="related-messages-table__overview">Komunikat pacs.003 jest wymieniany między instytucjami finansowymi w celu realizacji instrukcji polecenia zapłaty klienta. Umożliwia bankowi wierzyciela pobranie środków z banku dłużnika w imieniu wierzyciela.</td>
        </tr>
    </tbody>
  </table>
</div>

