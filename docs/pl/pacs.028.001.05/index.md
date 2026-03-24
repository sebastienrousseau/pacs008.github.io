---
title: pacs.028.001.05 | Zapytanie o status płatności FI-do-FI | pacs008
description: Komunikat pacs.028 jest wysyłany przez instytucję finansową w celu zapytania o status wcześniej wysłanej instrukcji płatniczej. Umożliwia proaktywne...
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — Zapytanie o status płatności FI-do-FI

| | |
|---|---|
| **Nazwa ISO** | FIToFIPaymentStatusRequestV05 |
| **Status rejestracji** | Registered |
| **Rok** | 2019 |
| **Wersja** | 5 |

## Przegląd

Komunikat pacs.028 jest wysyłany przez instytucję finansową w celu zapytania o status wcześniej wysłanej instrukcji płatniczej. Umożliwia proaktywne śledzenie przetwarzania płatności bez oczekiwania na nieoczekiwany raport statusowy.

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 2025-02-27; linki do źródeł podano poniżej.

## Kluczowe elementy danych

- **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i znacznikiem czasu utworzenia
- **TxInf** — Informacje o transakcji identyfikujące płatność, o którą zapytano
- **OrgnlGrpInf** — Informacje o oryginalnej grupie z odniesieniem do komunikatu źródłowego
- **OrgnlInstrId** — Oryginalna identyfikacja instrukcji z płatności źródłowej
- **OrgnlEndToEndId** — Oryginalna identyfikacja end-to-end dla identyfikowalności

## Kontekst biznesowy

- Umożliwia proaktywne zapytanie o status instrukcji płatniczych w trakcie realizacji
- Wspiera zespoły operacyjne w badaniu opóźnionych lub brakujących płatności
- Uzupełnia pacs.002, inicjując komunikację statusową zamiast oczekiwania
- Używany w procesach obsługi wyjątków i monitorowania SLA

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
          <td class="operational-matrix-table__left">**GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i znacznikiem czasu utworzenia</td>
          <td class="operational-matrix-table__right">Umożliwia proaktywne zapytanie o status instrukcji płatniczych w trakcie realizacji</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**TxInf** — Informacje o transakcji identyfikujące płatność, o którą zapytano</td>
          <td class="operational-matrix-table__right">Wspiera zespoły operacyjne w badaniu opóźnionych lub brakujących płatności</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlGrpInf** — Informacje o oryginalnej grupie z odniesieniem do komunikatu źródłowego</td>
          <td class="operational-matrix-table__right">Uzupełnia pacs.002, inicjując komunikację statusową zamiast oczekiwania</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlInstrId** — Oryginalna identyfikacja instrukcji z płatności źródłowej</td>
          <td class="operational-matrix-table__right">Używany w procesach obsługi wyjątków i monitorowania SLA</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlEndToEndId** — Oryginalna identyfikacja end-to-end dla identyfikowalności</td>
          <td class="operational-matrix-table__right">Agent zlecający wysyła pacs.028 do agenta zleconego w celu zapytania o status konkretnej płatności. Agent zlecony odpowiada komunikatem pacs.002 zawierającym aktualny status przetwarzania.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontekst CBPR+ i schematy

- Zastępuje wzorce zapytań statusowych MT199 i ręczne zapytania o komunikaty SWIFT
- CBPR+ obsługuje strukturyzowane zapytania statusowe powiązane z identyfikatorami oryginalnego komunikatu
- Śledzenie oparte na UETR za pośrednictwem gpi zmniejsza potrzebę ręcznych zapytań
- Coraz częściej integrowany z automatycznymi pulpitami nawigacyjnymi operacji płatniczych

## Przepływ wiadomości

Agent zlecający wysyła pacs.028 do agenta zleconego w celu zapytania o status konkretnej płatności. Agent zlecony odpowiada komunikatem pacs.002 zawierającym aktualny status przetwarzania.

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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">Bieżąca implementacja w pacs008</td>
          <td class="version-diff-table__takeaway">Odpowiednie do bieżącego modelowania zapytań o status.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">Późniejsza rewizja katalogu</td>
          <td class="version-diff-table__takeaway">Sprawdź nowszą rewizję katalogu dla przyszłego planowania interoperacyjności.</td>
        </tr>
    </tbody>
  </table>
</div>

## Przykład XML z komentarzami

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Komentarze do pól

- `MsgId`: Samo zapytanie potrzebuje identyfikatora audytowalnego i odrębnego od płatności bazowej.
- `OrgnlInstrId`: Użyj dokładnego identyfikatora źródłowego z oryginalnej instrukcji, aby zmaksymalizować dokładność dopasowania.
- `OrgnlEndToEndId`: Uwzględnienie śledzenia klienta pomaga zespołom operacyjnym szybciej uzgodnić zapytanie.

## Porównanie pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="Porównanie pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Wymiar</th>
        <th>pacs.028.001.05</th>
        <th>Wiadomość porównawcza</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Główny cel</td>
          <td class="message-comparison-table__current">Żądaj statusu</td>
          <td class="message-comparison-table__other">Raportuj status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Kto inicjuje interakcję</td>
          <td class="message-comparison-table__current">Instytucja pytająca o status</td>
          <td class="message-comparison-table__other">Instytucja wysyłająca status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Model operacyjny</td>
          <td class="message-comparison-table__current">Zapytanie oparte na wyjątkach</td>
          <td class="message-comparison-table__other">Raportowanie zdarzeniowe</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Błędne założenie, którego należy unikać</td>
          <td class="message-comparison-table__current">Że powinno się to wysyłać rutynowo dla każdej płatności</td>
          <td class="message-comparison-table__other">Że eliminuje to potrzebę proaktywnego zarządzania sprawami</td>
        </tr>
    </tbody>
  </table>
</div>

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/pl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Raport statusu płatności FI-do-FI</td>
          <td class="related-messages-table__overview">Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pl/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Przelew kredytowy klienta FI-do-FI</td>
          <td class="related-messages-table__overview">Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera informacje o dłużniku, wierzycielu, kwocie i danych przekazu dla jednej lub więcej transakcji polecenia przelewu.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pl/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Przelew kredytowy między instytucjami finansowymi</td>
          <td class="related-messages-table__overview">Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością.</td>
        </tr>
    </tbody>
  </table>
</div>

