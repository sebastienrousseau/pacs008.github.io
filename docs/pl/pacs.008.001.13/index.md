---
title: pacs.008.001.13 | Przelew kredytowy klienta FI-do-FI | pacs008
description: Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera...
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — Przelew kredytowy klienta FI-do-FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Status rejestracji</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Rok</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Wersja</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Nagłówek grupy z ID komunikatu, datą utworzenia, liczbą transakcji i informacjami o rozrachunku</td>
          <td class="operational-matrix-table__right">Podstawowy komunikat dla transgranicznych i krajowych poleceń przelewu inicjowanych przez klienta</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Informacje o transakcji polecenia przelewu z kwotą, opłatami i celem</td>
          <td class="operational-matrix-table__right">Używany w SEPA SCT, SEPA Instant, CBPR+ oraz krajowych systemach rozliczeniowych</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identyfikacja dłużnika i agenta dłużnika z danymi rachunku</td>
          <td class="operational-matrix-table__right">Zawiera strukturyzowane informacje o przekazie wspierające automatyczne uzgadnianie</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identyfikacja wierzyciela i agenta wierzyciela z danymi rachunku</td>
          <td class="operational-matrix-table__right">Obsługuje metody rozrachunku seryjnego, pokrycia i bezpośredniego dla wieloetapowych łańcuchów płatniczych</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Informacje o przekazie dla strukturyzowanych lub niestrukturyzowanych referencji płatniczych</td>
          <td class="operational-matrix-table__right">Agent dłużnika tworzy pacs.008 i wysyła go do agenta wierzyciela (bezpośrednio lub przez pośredników). Każdy agent w łańcuchu waliduje, wzbogaca i przekazuje instrukcję, aż agent wierzyciela uzna rachunek beneficjenta.</td>
        </tr>
    </tbody>
  </table>
</div>

## Kontekst CBPR+ i schematy

- Zastępuje MT103 i MT103+ dla transgranicznych poleceń przelewu klientów
- Termin dotyczący adresów strukturyzowanych z listopada 2026 dotyczy wszystkich adresów pocztowych stron
- SWIFT gpi wymaga pacs.008 do śledzenia end-to-end opartego na UETR
- 13 rewizji odzwierciedla ciągłą ewolucję schematu w infrastrukturach rynkowych

## Przepływ wiadomości

Agent dłużnika tworzy pacs.008 i wysyła go do agenta wierzyciela (bezpośrednio lub przez pośredników). Każdy agent w łańcuchu waliduje, wzbogaca i przekazuje instrukcję, aż agent wierzyciela uzna rachunek beneficjenta.

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">Wczesne rewizje</td>
          <td class="version-diff-table__takeaway">Przydatne głównie do analizy migracji ze starszych systemów i kontekstu historii wersji.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">Nowoczesne rewizje sprzed bieżącej wersji</td>
          <td class="version-diff-table__takeaway">To rewizje, które najczęściej pojawiają się w ostatnich projektach migracyjnych lub koegzystencji.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">Bieżąca rewizja katalogu</td>
          <td class="version-diff-table__takeaway">Używaj tego do planowania wokół bieżącej wersji, nadal sprawdzając zasady użycia schematu i gotowość kontrahentów.</td>
        </tr>
    </tbody>
  </table>
</div>

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

<div class="message-comparison-table" tabindex="0" aria-label="Porównanie pacs.008 vs pacs.009">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Wymiar</th>
        <th>pacs.008.001.13</th>
        <th>Wiadomość porównawcza</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Główny cel</td>
          <td class="message-comparison-table__current">Kliencki przelew kredytowy</td>
          <td class="message-comparison-table__other">Przelew kredytowy na rachunek własny instytucji lub etap pokrycia</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Właściciel biznesowy</td>
          <td class="message-comparison-table__current">Operacje płatności klientów</td>
          <td class="message-comparison-table__other">Operacje skarbowe / korespondencyjne / finansowania</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Typowe powiązania</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004 i czasem powiązane przepływy pacs.008</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Błędne założenie, którego należy unikać</td>
          <td class="message-comparison-table__current">Że wszystkie przelewy między bankami należą tutaj</td>
          <td class="message-comparison-table__other">Że może zastąpić instrukcje przelewu kredytowego klienta</td>
        </tr>
    </tbody>
  </table>
</div>

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

<div class="message-versions-table" tabindex="0" aria-label="Obsługiwane wersje">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Wersja</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>Bieżąca</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/pl/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Zwrot płatności</td>
          <td class="related-messages-table__overview">Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana, została wysłana omyłkowo lub jest przywoływana przez instytucję inicjującą.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pl/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Przelew kredytowy między instytucjami finansowymi</td>
          <td class="related-messages-table__overview">Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością.</td>
        </tr>
    </tbody>
  </table>
</div>

