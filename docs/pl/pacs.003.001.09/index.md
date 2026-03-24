---
title: pacs.003.001.09 | Polecenie zapłaty klienta FI-do-FI | pacs008
description: Komunikat pacs.003 jest wymieniany między instytucjami finansowymi w celu realizacji instrukcji polecenia zapłaty klienta. Umożliwia bankowi wierzyciela...
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — Polecenie zapłaty klienta FI-do-FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Nazwa ISO</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
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
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

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

<div class="operational-matrix-table" tabindex="0" aria-label="Kluczowe elementy danych Kontekst biznesowy">
  <table>
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
          <td class="operational-matrix-table__right">Obsługuje schematy poleceń zapłaty SEPA Core i B2B</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Informacje o transakcji polecenia zapłaty z kwotą i stronami</td>
          <td class="operational-matrix-table__right">Używany do inkasa płatności cyklicznych, takich jak subskrypcje, rachunki za media i spłaty kredytów</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Identyfikacja wierzyciela i dane rachunku</td>
          <td class="operational-matrix-table__right">Wymaga ważnej referencji mandatu między dłużnikiem a wierzycielem</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Identyfikacja agenta wierzyciela (instytucji inkasującej)</td>
          <td class="operational-matrix-table__right">Umożliwia zbiorcze inkaso wielu instrukcji poleceń zapłaty w jednym komunikacie</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Identyfikacja agenta dłużnika (instytucji płacącej)</td>
          <td class="operational-matrix-table__right">Agent wierzyciela inicjuje pacs.003 w kierunku agenta dłużnika w celu pobrania środków. Agent dłużnika waliduje mandat, sprawdza pokrycie rachunku i dokonuje rozrachunku lub zwraca transakcję.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontekst CBPR+ i schematy

- Wymagania dotyczące adresu strukturyzowanego i identyfikacji stron obowiązują w równym stopniu dla poleceń zapłaty
- Dane związane z mandatem muszą być w pełni strukturyzowane od listopada 2026
- Zastępuje starsze formaty poleceń zapłaty w stylu MT104 w przepływach transgranicznych
- Walidacja identyfikacji schematu wierzyciela jest coraz bardziej egzekwowana

## Przepływ wiadomości

Agent wierzyciela inicjuje pacs.003 w kierunku agenta dłużnika w celu pobrania środków. Agent dłużnika waliduje mandat, sprawdza pokrycie rachunku i dokonuje rozrachunku lub zwraca transakcję.

## Tabela różnic wersji

<div class="version-diff-table" tabindex="0" aria-label="Tabela różnic wersji">
  <table>
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
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">Bieżąca implementacja w pacs008</td>
          <td class="version-diff-table__takeaway">Przydatne do modelowania odniesień polecenia zapłaty w bieżącym projekcie.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">Późniejsze rewizje katalogu</td>
          <td class="version-diff-table__takeaway">Sprawdź późniejsze rewizje pod kątem zmian mandatów, statusów i interoperacyjności przed użyciem w nowym wdrożeniu.</td>
        </tr>
    </tbody>
  </table>
</div>

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

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: Powodzenie polecenia zapłaty częściej zależy od jakości rachunku i mandatu niż od struktury XML.

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


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
          <td class="related-messages-table__id"><a href="/pl/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Zwrot płatności</td>
          <td class="related-messages-table__overview">Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana, została wysłana omyłkowo lub jest przywoływana przez instytucję inicjującą.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pl/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">Odwrócenie płatności FI-do-FI</td>
          <td class="related-messages-table__overview">Komunikat pacs.007 jest używany do odwrócenia wcześniej wysłanej instrukcji płatniczej, która nie została jeszcze rozliczona, lub do żądania odwrócenia rozliczonej płatności. W odróżnieniu od pacs.004 (zwrot) jest inicjowany przez oryginalnego agenta zlecającego.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Raport statusu płatności FI-do-FI</td>
          <td class="related-messages-table__overview">Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego.</td>
        </tr>
    </tbody>
  </table>
</div>

