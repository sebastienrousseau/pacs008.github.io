---
title: "pacs.002.001.12 | Raport statusu płatności FI-do-FI | pacs008"
description: Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o...
lang: pl-PL
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.002 a payment message?"
    answer: "No. It reports status for an earlier instruction rather than moving value itself."
  - question: "Should pacs.002 replace internal workflow states?"
    answer: "No. It should inform them, but internal case states still need their own operational logic."
---

# pacs.002.001.12 — Raport statusu płatności FI-do-FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Przegląd

Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego.

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 2025-02-27; linki do źródeł podano poniżej.

## Kluczowe elementy danych

- **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i znacznikiem czasu utworzenia
- **OrgnlGrpInfAndSts** — Informacje i status oryginalnej grupy do raportowania na poziomie zbiorczym
- **TxInfAndSts** — Informacje i status transakcji dla wyników poszczególnych transakcji
- **StsRsnInf** — Informacje o przyczynie statusu ze strukturyzowanymi kodami przyczyn
- **OrgnlTxRef** — Referencja oryginalnej transakcji łącząca z instrukcją źródłową

## Kontekst biznesowy

- Używany do potwierdzania rozrachunku lub raportowania odrzucenia poleceń przelewu, poleceń zapłaty i zwrotów płatności
- Umożliwia uzgadnianie między agentem zlecającym a agentem zleconym
- Wymagany w przepływach CBPR+ w celu potwierdzenia przetwarzania komunikatów pacs.008 i pacs.009
- Obsługuje raportowanie statusu zarówno na poziomie zbiorczym grupy, jak i na poziomie poszczególnych transakcji

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
          <td class="operational-matrix-table__right">Używany do potwierdzania rozrachunku lub raportowania odrzucenia poleceń przelewu, poleceń zapłaty i zwrotów płatności</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Informacje i status oryginalnej grupy do raportowania na poziomie zbiorczym</td>
          <td class="operational-matrix-table__right">Umożliwia uzgadnianie między agentem zlecającym a agentem zleconym</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Informacje i status transakcji dla wyników poszczególnych transakcji</td>
          <td class="operational-matrix-table__right">Wymagany w przepływach CBPR+ w celu potwierdzenia przetwarzania komunikatów pacs.008 i pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Informacje o przyczynie statusu ze strukturyzowanymi kodami przyczyn</td>
          <td class="operational-matrix-table__right">Obsługuje raportowanie statusu zarówno na poziomie zbiorczym grupy, jak i na poziomie poszczególnych transakcji</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Referencja oryginalnej transakcji łącząca z instrukcją źródłową</td>
          <td class="operational-matrix-table__right">Agent zlecony (odbiorca) wysyła pacs.002 z powrotem do agenta zlecającego (nadawcy) w celu potwierdzenia akceptacji, rozrachunku lub odrzucenia otrzymanej instrukcji płatniczej, takiej jak pacs.008 lub pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontekst CBPR+ i schematy

- Zastępuje MT199 i narracje statusowe w polu 79 komunikatów MT
- CBPR+ wymaga pacs.002 dla całej komunikacji dotyczącej statusu płatności
- Strukturyzowane kody przyczyn zastępują wyjaśnienia odrzuceń w formie tekstu swobodnego
- Integracja ze śledzeniem SWIFT gpi wymaga pacs.002 dla transparentności end-to-end

## Przepływ wiadomości

Agent zlecony (odbiorca) wysyła pacs.002 z powrotem do agenta zlecającego (nadawcy) w celu potwierdzenia akceptacji, rozrachunku lub odrzucenia otrzymanej instrukcji płatniczej, takiej jak pacs.008 lub pacs.009.

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">Bieżąca implementacja w pacs008</td>
          <td class="version-diff-table__takeaway">Używaj tego przy dopasowaniu do bieżących szablonów projektu i zasobów walidacyjnych.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">Późniejsze rewizje katalogu</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## Przykład XML z komentarzami

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Komentarze do pól

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## Porównanie pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="Porównanie pacs.002 vs pacs.028">
  <table>
    <caption>Porównanie pacs.002 vs pacs.028</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Wymiar</th>
        <th>pacs.002.001.12</th>
        <th>Wiadomość porównawcza</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Główny cel</td>
          <td class="message-comparison-table__current">Raportuj status</td>
          <td class="message-comparison-table__other">Żądaj statusu</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Kto inicjuje interakcję</td>
          <td class="message-comparison-table__current">Instytucja wysyłająca status</td>
          <td class="message-comparison-table__other">Instytucja pytająca o status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Model operacyjny</td>
          <td class="message-comparison-table__current">Raportowanie zdarzeniowe</td>
          <td class="message-comparison-table__other">Zapytanie oparte na wyjątkach</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Błędne założenie, którego należy unikać</td>
          <td class="message-comparison-table__current">Że raportowanie statusu zastępuje procesy wyjaśniające i dochodzeniowe</td>
          <td class="message-comparison-table__other">Że każda płatność wymaga jawnego zapytania o status</td>
        </tr>
    </tbody>
  </table>
</div>

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
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
          <td class="related-messages-table__id"><a href="/pl/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Przelew kredytowy między instytucjami finansowymi</td>
          <td class="related-messages-table__overview">Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pl/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">Zapytanie o status płatności FI-do-FI</td>
          <td class="related-messages-table__overview">Komunikat pacs.028 jest wysyłany przez instytucję finansową w celu zapytania o status wcześniej wysłanej instrukcji płatniczej. Umożliwia proaktywne śledzenie przetwarzania płatności bez oczekiwania na nieoczekiwany raport statusowy.</td>
        </tr>
    </tbody>
  </table>
</div>

