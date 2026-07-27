---
title: "pacs.007.001.11 | Odwrócenie płatności FI-do-FI | pacs008"
description: Komunikat pacs.007 jest używany do odwrócenia wcześniej wysłanej instrukcji płatniczej, która nie została jeszcze rozliczona, lub do żądania odwrócenia...
lang: pl-PL
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.007 only for fraud scenarios?"
    answer: "No. Fraud is a major use case, but any instructing-side need to reverse a payment can trigger it."
  - question: "Can it be handled like a normal return?"
    answer: "No. Reversal timing, reason capture, and reconciliation differ materially from returns."
---

# pacs.007.001.11 — Odwrócenie płatności FI-do-FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Przegląd

Komunikat pacs.007 jest używany do odwrócenia wcześniej wysłanej instrukcji płatniczej, która nie została jeszcze rozliczona, lub do żądania odwrócenia rozliczonej płatności. W odróżnieniu od pacs.004 (zwrot) jest inicjowany przez oryginalnego agenta zlecającego.

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 2025-02-27; linki do źródeł podano poniżej.

## Kluczowe elementy danych

- **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i znacznikiem czasu utworzenia
- **TxInf** — Informacje o transakcji z kwotą odwrócenia i stronami
- **OrgnlGrpInf** — Informacje o oryginalnej grupie z odniesieniem do komunikatu źródłowego
- **RvslRsnInf** — Informacje o przyczynie odwrócenia ze strukturyzowanymi kodami przyczyn
- **OrgnlTxRef** — Referencja oryginalnej transakcji dla identyfikowalności end-to-end

## Kontekst biznesowy

- Inicjowany, gdy oryginalny nadawca wykryje błąd przed lub po rozrachunku
- Używany w scenariuszach oszustw, gdy wymagane jest szybkie odwrócenie
- Obsługuje zarówno pełne, jak i częściowe odwrócenie kwot oryginalnej płatności
- Zawiera strukturyzowane kody przyczyn odwrócenia do przetwarzania dalszego

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Nagłówek grupy z identyfikacją komunikatu i znacznikiem czasu utworzenia</td>
          <td class="operational-matrix-table__right">Inicjowany, gdy oryginalny nadawca wykryje błąd przed lub po rozrachunku</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informacje o transakcji z kwotą odwrócenia i stronami</td>
          <td class="operational-matrix-table__right">Używany w scenariuszach oszustw, gdy wymagane jest szybkie odwrócenie</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informacje o oryginalnej grupie z odniesieniem do komunikatu źródłowego</td>
          <td class="operational-matrix-table__right">Obsługuje zarówno pełne, jak i częściowe odwrócenie kwot oryginalnej płatności</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Informacje o przyczynie odwrócenia ze strukturyzowanymi kodami przyczyn</td>
          <td class="operational-matrix-table__right">Zawiera strukturyzowane kody przyczyn odwrócenia do przetwarzania dalszego</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Referencja oryginalnej transakcji dla identyfikowalności end-to-end</td>
          <td class="operational-matrix-table__right">Agent zlecający (oryginalny nadawca) wysyła pacs.007 do przodu przez łańcuch płatniczy w celu odwrócenia wcześniej zleconej płatności. Każdy agent przetwarza instrukcję odwrócenia i odpowiednio koryguje rozrachunek.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontekst CBPR+ i schematy

- Odróżnia się od pacs.004 kierunkiem — odwrócenie biegnie do przodu od zleceniodawcy, zwrot biegnie wstecz od beneficjenta
- CBPR+ wymaga powiązania z identyfikatorami oryginalnego komunikatu do automatycznego dopasowania
- Strukturyzowane kody przyczyn zastępują narracje w formie tekstu swobodnego ze starszych komunikatów MT
- Coraz częściej wykorzystywany w procesach przywołania płatności natychmiastowych i zapobiegania oszustwom

## Przepływ wiadomości

Agent zlecający (oryginalny nadawca) wysyła pacs.007 do przodu przez łańcuch płatniczy w celu odwrócenia wcześniej zleconej płatności. Każdy agent przetwarza instrukcję odwrócenia i odpowiednio koryguje rozrachunek.

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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">Bieżąca implementacja w pacs008</td>
          <td class="version-diff-table__takeaway">Dobra podstawa do modelowania przepływów odwołania płatności.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">Późniejsze rewizje katalogu</td>
          <td class="version-diff-table__takeaway">Sprawdź późniejsze rewizje pod kątem zgodności z aktualną infrastrukturą rynkową.</td>
        </tr>
    </tbody>
  </table>
</div>

## Przykład XML z komentarzami

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### Komentarze do pól

- `MsgId`: The reversal needs its own identifier.
- `OrgnlInstrId`: Zachowaj oryginalne odniesienie płatności, aby uniknąć przerw w uzgadnianiu.
- `RvslRsnInf`: Use structured reversal reasons so cases can be routed correctly.

## Porównanie pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="Porównanie pacs.007 vs pacs.004">
  <table>
    <caption>Porównanie pacs.007 vs pacs.004</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Wymiar</th>
        <th>pacs.007.001.11</th>
        <th>Wiadomość porównawcza</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Główny cel</td>
          <td class="message-comparison-table__current">Reverse a previously instructed payment</td>
          <td class="message-comparison-table__other">Return settled funds</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Original instructing side</td>
          <td class="message-comparison-table__other">Receiving / beneficiary side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Forward through the chain</td>
          <td class="message-comparison-table__other">Back through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Najlepiej nadaje się do</td>
          <td class="message-comparison-table__current">Obsługa odwrócenia z powodu recall, błędu lub oszustwa</td>
          <td class="message-comparison-table__other">Obsługa zwrotu po rozrachunku</td>
        </tr>
    </tbody>
  </table>
</div>

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/pl/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Przelew kredytowy klienta FI-do-FI</td>
          <td class="related-messages-table__overview">Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera informacje o dłużniku, wierzycielu, kwocie i danych przekazu dla jednej lub więcej transakcji polecenia przelewu.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pl/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Zwrot płatności</td>
          <td class="related-messages-table__overview">Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana, została wysłana omyłkowo lub jest przywoływana przez instytucję inicjującą.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Raport statusu płatności FI-do-FI</td>
          <td class="related-messages-table__overview">Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego.</td>
        </tr>
    </tbody>
  </table>
</div>

