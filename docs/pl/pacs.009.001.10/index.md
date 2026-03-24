---
title: pacs.009.001.10 | Przelew kredytowy między instytucjami finansowymi | pacs008
description: Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w...
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Przelew kredytowy między instytucjami finansowymi

| | |
|---|---|
| **Nazwa ISO** | FinancialInstitutionCreditTransferV10 |
| **Status rejestracji** | Registered |
| **Rok** | 2019 |
| **Wersja** | 10 |

## Przegląd

Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością.

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. Data referencyjna katalogu ISO 20022: 2025-02-27; linki do źródeł podano poniżej.

## Kluczowe elementy danych

- **GrpHdr** — Nagłówek grupy z identyfikacją komunikatu i informacjami o rozrachunku
- **CdtTrfTxInf** — Informacje o transakcji polecenia przelewu z kwotą rozrachunku międzybankowego
- **Dbtr / DbtrAgt** — Identyfikacja instytucji dłużnika i jej agenta
- **Cdtr / CdtrAgt** — Identyfikacja instytucji wierzyciela i jej agenta
- **IntrBkSttlmAmt** — Kwota rozrachunku międzybankowego w walucie rozrachunku

## Kontekst biznesowy

- Używany do międzybankowych przelewów na rachunek własny i płatności pokrycia
- Obsługuje zarządzanie płynnością między partnerami bankowości korespondencyjnej
- Zawiera etap pokrycia poleceń przelewu klientów rozliczanych metodą pokrycia
- Umożliwia operacje skarbowe i finansowe między instytucjami finansowymi

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
          <td class="operational-matrix-table__right">Używany do międzybankowych przelewów na rachunek własny i płatności pokrycia</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Informacje o transakcji polecenia przelewu z kwotą rozrachunku międzybankowego</td>
          <td class="operational-matrix-table__right">Obsługuje zarządzanie płynnością między partnerami bankowości korespondencyjnej</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identyfikacja instytucji dłużnika i jej agenta</td>
          <td class="operational-matrix-table__right">Zawiera etap pokrycia poleceń przelewu klientów rozliczanych metodą pokrycia</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identyfikacja instytucji wierzyciela i jej agenta</td>
          <td class="operational-matrix-table__right">Umożliwia operacje skarbowe i finansowe między instytucjami finansowymi</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Kwota rozrachunku międzybankowego w walucie rozrachunku</td>
          <td class="operational-matrix-table__right">Instytucja dłużnika wysyła pacs.009 do instytucji wierzyciela w celu przekazania własnych środków. W przypadku płatności metodą pokrycia pacs.009 zapewnia etap finansowania, podczas gdy pacs.008 przenosi instrukcję klienta odrębną ścieżką.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontekst CBPR+ i schematy

- Zastępuje MT202 i MT202COV dla przelewów między instytucjami
- Przepływy metodą pokrycia łączą pacs.009 z bazową instrukcją klienta pacs.008
- Strukturyzowane dane stron i identyfikacja LEI są coraz częściej wymagane
- SWIFT gpi obejmuje pacs.009 dla transparentności w bankowości korespondencyjnej

## Przepływ wiadomości

Instytucja dłużnika wysyła pacs.009 do instytucji wierzyciela w celu przekazania własnych środków. W przypadku płatności metodą pokrycia pacs.009 zapewnia etap finansowania, podczas gdy pacs.008 przenosi instrukcję klienta odrębną ścieżką.

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">Bieżąca implementacja w pacs008</td>
          <td class="version-diff-table__takeaway">Odpowiada bieżącemu wsparciu projektu dla przepływów przelewów kredytowych FI.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">Późniejsze rewizje katalogu</td>
          <td class="version-diff-table__takeaway">Ważne dla planowania mapy drogowej w środowiskach bankowości korespondencyjnej i płatności pokryciowych.</td>
        </tr>
    </tbody>
  </table>
</div>

## Przykład XML z komentarzami

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Komentarze do pól

- `InstrId`: Używaj identyfikatora etapu finansowania, który nadal można powiązać z bazowym przepływem klienta.
- `IntrBkSttlmAmt`: Przepływy na rachunek własny i przepływy pokryciowe często wymagają bardziej rygorystycznej kontroli skarbowej kwot i dat rozrachunku.
- `Dbtr` / `Cdtr`: Są to strony instytucjonalne, a nie role klienta detalicznego; modeluj je odpowiednio.

## Porównanie pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="Porównanie pacs.009 vs pacs.008">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Wymiar</th>
        <th>pacs.009.001.10</th>
        <th>Wiadomość porównawcza</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Główny cel</td>
          <td class="message-comparison-table__current">Przelew kredytowy na rachunek własny instytucji lub etap pokrycia</td>
          <td class="message-comparison-table__other">Kliencki przelew kredytowy</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Właściciel biznesowy</td>
          <td class="message-comparison-table__current">Operacje skarbowe / korespondencyjne / finansowania</td>
          <td class="message-comparison-table__other">Operacje płatności klientów</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Typowe powiązania</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004 i powiązane przepływy pacs.008</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Błędne założenie, którego należy unikać</td>
          <td class="message-comparison-table__current">Że to po prostu bardziej techniczny pacs.008</td>
          <td class="message-comparison-table__other">Że może bezproblemowo przenosić przepływy finansowania instytucji</td>
        </tr>
    </tbody>
  </table>
</div>

## Źródła podstawowe

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


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
          <td class="related-messages-table__id"><a href="/pl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Raport statusu płatności FI-do-FI</td>
          <td class="related-messages-table__overview">Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pl/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Polecenie zapłaty między instytucjami finansowymi</td>
          <td class="related-messages-table__overview">Komunikat pacs.010 jest używany między instytucjami finansowymi do transakcji poleceń zapłaty na rachunek własny instytucji. Umożliwia jednej instytucji pobranie środków bezpośrednio z rachunku innej instytucji.</td>
        </tr>
    </tbody>
  </table>
</div>

