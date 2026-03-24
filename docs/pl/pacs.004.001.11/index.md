---
title: pacs.004.001.11 | Zwrot płatności | pacs008
description: Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana...
lang: pl-PL
lastUpdated: true
image: /logo.svg
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — Zwrot płatności

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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

Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana, została wysłana omyłkowo lub jest przywoływana przez instytucję inicjującą.

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 2025-02-27; linki do źródeł podano poniżej.

## Kluczowe elementy danych

- **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i znacznikiem czasu utworzenia
- **TxInf** — Informacje o transakcji z kwotą zwrotu i stronami
- **OrgnlGrpInf** — Informacje o oryginalnej grupie z odniesieniem do komunikatu źródłowego
- **RtrRsnInf** — Informacje o przyczynie zwrotu ze strukturyzowanymi kodami przyczyn
- **OrgnlTxRef** — Referencja oryginalnej transakcji do dopasowania i uzgadniania

## Kontekst biznesowy

- Obsługuje zwroty po rozrachunku, gdy rachunek beneficjenta nie może zostać uznany
- Obsługuje scenariusze przywołania, w których zleceniodawca żąda zwrotu środków
- Zawiera strukturyzowane kody przyczyn zwrotu dla przejrzystości regulacyjnej i operacyjnej
- Ma zastosowanie zarówno do zwrotów poleceń przelewu (pacs.008), jak i zwrotów poleceń zapłaty (pacs.003)

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
          <td class="operational-matrix-table__right">Obsługuje zwroty po rozrachunku, gdy rachunek beneficjenta nie może zostać uznany</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informacje o transakcji z kwotą zwrotu i stronami</td>
          <td class="operational-matrix-table__right">Obsługuje scenariusze przywołania, w których zleceniodawca żąda zwrotu środków</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informacje o oryginalnej grupie z odniesieniem do komunikatu źródłowego</td>
          <td class="operational-matrix-table__right">Zawiera strukturyzowane kody przyczyn zwrotu dla przejrzystości regulacyjnej i operacyjnej</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Informacje o przyczynie zwrotu ze strukturyzowanymi kodami przyczyn</td>
          <td class="operational-matrix-table__right">Ma zastosowanie zarówno do zwrotów poleceń przelewu (pacs.008), jak i zwrotów poleceń zapłaty (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Referencja oryginalnej transakcji do dopasowania i uzgadniania</td>
          <td class="operational-matrix-table__right">Agent zlecony wysyła pacs.004 wstecz przez łańcuch płatniczy w celu zwrotu wcześniej rozliczonych środków. Każdy agent w łańcuchu przetwarza zwrot i ponownie uznaje odpowiednie rachunki.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontekst CBPR+ i schematy

- Zastępuje MT103 RETURN i komunikaty zwrotowe metodą pokrycia
- Kody przyczyn zwrotu są znormalizowane i możliwe do odczytu maszynowego zgodnie z ISO 20022
- CBPR+ wymaga pełnych danych referencyjnych oryginalnej transakcji do dopasowania
- Śledzenie SWIFT gpi rozszerza się na transakcje zwrotowe dla widoczności end-to-end

## Przepływ wiadomości

Agent zlecony wysyła pacs.004 wstecz przez łańcuch płatniczy w celu zwrotu wcześniej rozliczonych środków. Każdy agent w łańcuchu przetwarza zwrot i ponownie uznaje odpowiednie rachunki.

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">Bieżąca implementacja w pacs008</td>
          <td class="version-diff-table__takeaway">Jest zgodne z bieżącymi szablonami zwrotów płatności.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">Późniejsze rewizje katalogu</td>
          <td class="version-diff-table__takeaway">Sprawdź późniejsze rewizje komunikatów zwrotnych, gdy w zakresie są aktualizacje schematu lub nowi kontrahenci.</td>
        </tr>
    </tbody>
  </table>
</div>

## Przykład XML z komentarzami

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### Komentarze do pól

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: Jakość kodów przyczyn ma kluczowe znaczenie dla komunikacji z klientem w systemach dalszego przetwarzania i dla kierowania operacyjnego.

## Porównanie pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="Porównanie pacs.004 vs pacs.007">
  <table>
    <caption>Porównanie pacs.004 vs pacs.007</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Wymiar</th>
        <th>pacs.004.001.11</th>
        <th>Wiadomość porównawcza</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Główny cel</td>
          <td class="message-comparison-table__current">Return settled funds</td>
          <td class="message-comparison-table__other">Reverse a previously instructed payment</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Receiving / beneficiary side</td>
          <td class="message-comparison-table__other">Original instructing side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Back through the chain</td>
          <td class="message-comparison-table__other">Forward through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Najlepiej nadaje się do</td>
          <td class="message-comparison-table__current">Obsługa zwrotu po rozrachunku</td>
          <td class="message-comparison-table__other">Obsługa odwrócenia z powodu recall, błędu lub oszustwa</td>
        </tr>
    </tbody>
  </table>
</div>

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/pl/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Polecenie zapłaty klienta FI-do-FI</td>
          <td class="related-messages-table__overview">Komunikat pacs.003 jest wymieniany między instytucjami finansowymi w celu realizacji instrukcji polecenia zapłaty klienta. Umożliwia bankowi wierzyciela pobranie środków z banku dłużnika w imieniu wierzyciela.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Raport statusu płatności FI-do-FI</td>
          <td class="related-messages-table__overview">Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego.</td>
        </tr>
    </tbody>
  </table>
</div>

