---
title: "Objaśnienie komunikatów pacs | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: pl-PL
lastUpdated: true
image: /logo.webp
---

# Objaśnienie komunikatów pacs

A detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Cykl życia płatności

Pełny cykl życia płatności pacs obejmuje sześć etapów i wiele typów komunikatów współpracujących ze sobą.

**Etap 1 — Inicjacja.** Płatność powstaje w domenie klient-bank (pain.001). Bank dłużnika otrzymuje instrukcję i mapuje ją do domeny międzybankowej.

**Etap 2 — Instrukcja międzybankowa.** Agent dłużnika tworzy pacs.008 i wysyła go do następnego agenta w łańcuchu. W przepływie szeregowym pacs.008 przechodzi krok po kroku przez pośredników. W przepływie pokrycia pacs.008 idzie bezpośrednio od agenta dłużnika do agenta wierzyciela, podczas gdy oddzielny pacs.009 przenosi etap finansowania przez łańcuch korespondencyjny.

**Etap 3 — Raportowanie statusu.** Na każdym etapie agent odbierający może zwrócić pacs.002 potwierdzający akceptację (ACCP/ACSP/ACSC), odrzucenie (RJCT) lub status oczekujący (PDNG). W CBPR+ pacs.002 jest obowiązkowy dla całej komunikacji o statusie płatności.

**Etap 4 — Rozliczenie.** Rozliczenie następuje przez system rozrachunkowy (CLRG), na rachunkach korespondencyjnych (INDA/INGA) lub przez płatność pokrycia (COVE). Data i kwota rozliczenia międzybankowego określają kiedy i ile zostanie rozliczone.

**Etap 5 — Uznanie beneficjenta.** Agent wierzyciela uznaje beneficjenta i może wysłać powiadomienie klienta.

**Etap 6 — Obsługa wyjątków.** Jeśli beneficjent nie może zostać uznany po rozliczeniu, pacs.004 zwraca środki przez łańcuch. Jeśli nadawca wykryje błąd lub oszustwo, pacs.007 przechodzi do przodu w łańcuchu. Jeśli status jest nieznany, pacs.028 pyta następnego agenta, a odpowiedź wraca przez pacs.002.

### Przepływ metody szeregowej

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Przepływ metody pokrycia

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## Struktura XML pacs.008

pacs.008 ma dwa główne bloki: Nagłówek Grupy (GrpHdr) i Informacje o Transakcji Przelewu (CdtTrfTxInf).

### Nagłówek Grupy (GrpHdr)

Nagłówek Grupy pojawia się dokładnie raz w każdym komunikacie i zawiera:

- **MsgId** — Unikalny identyfikator komunikatu nadany przez agenta wysyłającego. Maksymalnie 35 znaków, unikalny dla każdego nadawcy.
- **CreDtTm** — Znacznik czasu utworzenia w formacie ISO 8601.
- **NbOfTxs** — Liczba poszczególnych transakcji w komunikacie.
- **SttlmInf** — Informacje o rozliczeniu, w tym metoda rozliczenia (SttlmMtd) i opcjonalnie system rozrachunkowy oraz rachunek rozliczeniowy.
- **IntrBkSttlmDt** — Data rozliczenia międzybankowego.
- **PmtTpInf** — Informacje o typie płatności: priorytet, poziom usługi, instrument lokalny i cel kategorii.

### Informacje o Transakcji (CdtTrfTxInf)

Każda transakcja zawiera:

- **PmtId** — Identyfikatory płatności: InstrId, EndToEndId, TxId i UETR.
- **IntrBkSttlmAmt** — Kwota rozliczenia międzybankowego z kodem waluty.
- **InstdAmt** — Pierwotna kwota zlecona (może różnić się od kwoty rozliczenia z powodu przewalutowania).
- **ChrgBr** — Kod ponoszącego opłaty (DEBT, CRED, SHAR lub SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — Nazwa, adres, identyfikacja, rachunek i agent dłużnika.
- **Cdtr / CdtrAcct / CdtrAgt** — Nazwa, adres, identyfikacja, rachunek i agent wierzyciela.
- **IntrmyAgt1 / 2 / 3** — Do trzech agentów pośredniczących w łańcuchu.
- **RmtInf** — Informacje o przelewie, niestrukturalne (tekst wolny) lub strukturalne (referencje dokumentów, kwoty, daty).
- **Purp** — Strukturalny kod celu.
- **RgltryRptg** — Szczegóły raportowania regulacyjnego.

## Identyfikatory płatności

Komunikaty pacs używają kilku identyfikatorów pełniących różne role w łańcuchu płatniczym.

<div class="api-fields-table" tabindex="0" aria-label="Identyfikatory płatności">
  <table>
    <caption>Identyfikatory płatności i ich role</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Identyfikator</th>
        <th scope="col">Ustawiany przez</th>
        <th scope="col">Zmienia się w łańcuchu?</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">Każdego agenta wysyłającego</td>
          <td class="api-fields-table__constraint">Tak — nowy dla każdego komunikatu</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">Każdego agenta instruującego</td>
          <td class="api-fields-table__constraint">Tak — może się zmieniać na każdym etapie</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">Inicjatora (dłużnika)</td>
          <td class="api-fields-table__constraint">Nie — nie wolno zmieniać</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">Pierwszego agenta instruującego</td>
          <td class="api-fields-table__constraint">Nie — nie wolno zmieniać</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">Agenta dłużnika</td>
          <td class="api-fields-table__constraint">Nie — śledzenie uniwersalne</td>
        </tr>
    </tbody>
  </table>
</div>

## Metody rozliczenia

Element SttlmMtd określa sposób rozliczenia międzybankowego.

- **CLRG** — Rozliczenie przez system rozrachunkowy taki jak TARGET2, EURO1 lub CHIPS. Najczęściej stosowane w rozliczeniach krajowych i regionalnych.
- **INDA** — Rozliczenie w księgach agenta instruowanego. Agent dłużnika utrzymuje rachunek nostro u następnego agenta. Typowe dla dwustronnej bankowości korespondencyjnej.
- **INGA** — Rozliczenie w księgach agenta instruującego. Agent instruowany utrzymuje rachunek nostro u agenta wysyłającego. Mniej powszechne niż INDA.
- **COVE** — Rozliczenie przez odrębną płatność pokrycia. pacs.009 przenosi etap finansowania, a pacs.008 przenosi dane klienta bezpośrednio. Stosowane w transgranicznej bankowości korespondencyjnej.

## Kody ponoszącego opłaty

Element ChrgBr określa, kto ponosi opłaty za płatność.

- **DEBT** — Dłużnik ponosi wszystkie opłaty (odpowiednik MT103: OUR). Wierzyciel otrzymuje pełną kwotę.
- **CRED** — Wierzyciel ponosi wszystkie opłaty (odpowiednik MT103: BEN). Opłaty są potrącane z przelewu.
- **SHAR** — Opłaty są dzielone (odpowiednik MT103: SHA). Każda strona płaci opłaty swojego agenta. Najczęstsze dla płatności transgranicznych.
- **SLEV** — Opłaty podążają za poziomem usługi. Obowiązkowe dla SEPA. Bez potrąceń z kwoty przelewu.

## Mapowanie pól MT103 na pacs.008

<div class="api-fields-table" tabindex="0" aria-label="Mapowanie pól MT103 na pacs.008">
  <table>
    <caption>Główne mapowania pól z MT103 na pacs.008</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Pole MT103</th>
        <th scope="col">Nazwa MT103</th>
        <th scope="col">Ścieżka XML pacs.008</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field">20</td><td class="api-fields-table__desc">Referencja nadawcy</td><td class="api-fields-table__constraint">GrpHdr/MsgId or PmtId/InstrId</td></tr>
        <tr><td class="api-fields-table__field">23B</td><td class="api-fields-table__desc">Kod operacji bankowej</td><td class="api-fields-table__constraint">PmtTpInf/SvcLvl</td></tr>
        <tr><td class="api-fields-table__field">32A</td><td class="api-fields-table__desc">Data waluty / Kwota</td><td class="api-fields-table__constraint">IntrBkSttlmDt + IntrBkSttlmAmt</td></tr>
        <tr><td class="api-fields-table__field">33B</td><td class="api-fields-table__desc">Kwota zlecona</td><td class="api-fields-table__constraint">InstdAmt</td></tr>
        <tr><td class="api-fields-table__field">50a</td><td class="api-fields-table__desc">Klient zlecający</td><td class="api-fields-table__constraint">Dbtr + DbtrAcct</td></tr>
        <tr><td class="api-fields-table__field">52a</td><td class="api-fields-table__desc">Instytucja zlecająca</td><td class="api-fields-table__constraint">DbtrAgt</td></tr>
        <tr><td class="api-fields-table__field">57a</td><td class="api-fields-table__desc">Instytucja rachunku</td><td class="api-fields-table__constraint">CdtrAgt</td></tr>
        <tr><td class="api-fields-table__field">59a</td><td class="api-fields-table__desc">Klient beneficjent</td><td class="api-fields-table__constraint">Cdtr + CdtrAcct</td></tr>
        <tr><td class="api-fields-table__field">70</td><td class="api-fields-table__desc">Informacje o przelewie</td><td class="api-fields-table__constraint">RmtInf/Ustrd or RmtInf/Strd</td></tr>
        <tr><td class="api-fields-table__field">71A</td><td class="api-fields-table__desc">Szczegóły opłat</td><td class="api-fields-table__constraint">ChrgBr (BEN→CRED, OUR→DEBT, SHA→SHAR)</td></tr>
        <tr><td class="api-fields-table__field">72</td><td class="api-fields-table__desc">Info nadawca do odbiorcy</td><td class="api-fields-table__constraint">InstrForCdtrAgt / InstrForNxtAgt</td></tr>
        <tr><td class="api-fields-table__field">N/A</td><td class="api-fields-table__desc">UETR (Block 3, field 121)</td><td class="api-fields-table__constraint">PmtId/UETR</td></tr>
    </tbody>
  </table>
</div>

## Kody statusu i przyczyn

### Kody statusu pacs.002

<div class="api-fields-table" tabindex="0" aria-label="Kody statusu pacs.002">
  <table>
    <caption>Kody statusu transakcji w pacs.002</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Kod</th>
        <th scope="col">Znaczenie</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>ACCP</code></td><td class="api-fields-table__desc">Zaakceptowano — wstępne kontrole zaliczone</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSP</code></td><td class="api-fields-table__desc">Zaakceptowano — rozliczenie w toku</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSC</code></td><td class="api-fields-table__desc">Zaakceptowano — rozliczenie zakończone</td></tr>
        <tr><td class="api-fields-table__field"><code>RCVD</code></td><td class="api-fields-table__desc">Otrzymano — jeszcze nie przetworzone</td></tr>
        <tr><td class="api-fields-table__field"><code>PDNG</code></td><td class="api-fields-table__desc">Oczekujące — wymagane dalsze przetwarzanie</td></tr>
        <tr><td class="api-fields-table__field"><code>RJCT</code></td><td class="api-fields-table__desc">Odrzucone — z kodem przyczyny</td></tr>
    </tbody>
  </table>
</div>

### Popularne kody przyczyn odrzucenia i zwrotu

<div class="api-fields-table" tabindex="0" aria-label="Popularne kody przyczyn">
  <table>
    <caption>Najczęściej używane kody przyczyn odrzucenia i zwrotu</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Kod</th>
        <th scope="col">Nazwa</th>
        <th scope="col">Opis</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>AC01</code></td><td class="api-fields-table__desc">Nieprawidłowy numer rachunku</td><td class="api-fields-table__constraint">Numer rachunku jest nieprawidłowy lub nie istnieje</td></tr>
        <tr><td class="api-fields-table__field"><code>AC04</code></td><td class="api-fields-table__desc">Zamknięty rachunek</td><td class="api-fields-table__constraint">Rachunek jest zamknięty</td></tr>
        <tr><td class="api-fields-table__field"><code>AC06</code></td><td class="api-fields-table__desc">Zablokowany rachunek</td><td class="api-fields-table__constraint">Rachunek jest zablokowany dla transakcji</td></tr>
        <tr><td class="api-fields-table__field"><code>AM04</code></td><td class="api-fields-table__desc">Niewystarczające środki</td><td class="api-fields-table__constraint">Niewystarczające środki na rachunku dłużnika</td></tr>
        <tr><td class="api-fields-table__field"><code>AM05</code></td><td class="api-fields-table__desc">Duplikacja</td><td class="api-fields-table__constraint">Wykryto zduplikowaną płatność</td></tr>
        <tr><td class="api-fields-table__field"><code>BE04</code></td><td class="api-fields-table__desc">Brakujący adres wierzyciela</td><td class="api-fields-table__constraint">Adres wierzyciela jest brakujący lub niekompletny</td></tr>
        <tr><td class="api-fields-table__field"><code>CUST</code></td><td class="api-fields-table__desc">Na żądanie klienta</td><td class="api-fields-table__constraint">Zwrot lub odrzucenie na żądanie klienta</td></tr>
        <tr><td class="api-fields-table__field"><code>DUPL</code></td><td class="api-fields-table__desc">Zduplikowana płatność</td><td class="api-fields-table__constraint">Zidentyfikowano zduplikowaną płatność</td></tr>
        <tr><td class="api-fields-table__field"><code>FOCR</code></td><td class="api-fields-table__desc">Po anulowaniu</td><td class="api-fields-table__constraint">W następstwie żądania anulowania</td></tr>
        <tr><td class="api-fields-table__field"><code>FR01</code></td><td class="api-fields-table__desc">Oszustwo</td><td class="api-fields-table__constraint">Podejrzenie oszustwa</td></tr>
        <tr><td class="api-fields-table__field"><code>RC01</code></td><td class="api-fields-table__desc">Nieprawidłowy BIC</td><td class="api-fields-table__constraint">BIC jest nieprawidłowy lub nieznany</td></tr>
        <tr><td class="api-fields-table__field"><code>RR03</code></td><td class="api-fields-table__desc">Brakująca nazwa/adres wierzyciela</td><td class="api-fields-table__constraint">Brakuje nazwy lub danych adresowych wierzyciela</td></tr>
        <tr><td class="api-fields-table__field"><code>TM01</code></td><td class="api-fields-table__desc">Czas graniczny</td><td class="api-fields-table__constraint">Czas graniczny przetwarzania został przekroczony</td></tr>
    </tbody>
  </table>
</div>

## Format adresu pocztowego

### Adres strukturalny

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### Adres niestrukturalny (przestarzały dla CBPR+ po listopadzie 2026)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

Główne ograniczenia: StrtNm maks. 70 znaków (CBPR+), TwnNm maks. 35 znaków (CBPR+), Ctry w formacie ISO 3166-1 alpha-2, AdrLine maks. 70 znaków na linię i maks. 7 linii.

## Identyfikacja stron

Strony w pacs.008 obsługują wiele metod identyfikacji:

- **BIC** — Kod identyfikacyjny firmy wg ISO 9362. 8 lub 11 znaków (BBBBCCLL lub BBBBCCLLBBB). Używany w FinInstnId/BICFI dla agentów i OrgId/AnyBIC dla stron.
- **LEI** — Identyfikator podmiotu prawnego wg ISO 17442. 20 znaków alfanumerycznych. Pojawia się w OrgId/LEI dla stron i FinInstnId/LEI dla agentów. Poprawia disambiguację podmiotów dla raportowania regulacyjnego.
- **IBAN** — Międzynarodowy numer rachunku bankowego wg ISO 13616. Używany w DbtrAcct/Id/IBAN i CdtrAcct/Id/IBAN.
- **Identyfikatory organizacji** — Inne identyfikatory oparte na schemacie (numer podatkowy, DUNS, numer klienta) przez OrgId/Othr z kodem nazwy schematu.
- **Identyfikatory prywatne** — Dla osób fizycznych: data i miejsce urodzenia, paszport (CCPT), dowód osobisty (NIDN) lub prawo jazdy (DRLC) przez PrvtId.

## Informacje o przelewie

Dane przelewu w pacs.008 używają elementu RmtInf w dwóch formach:

**Niestrukturalne** — Tekst wolny do 140 znaków na wystąpienie. Proste, ale ogranicza automatyczne uzgadnianie.

**Strukturalne** — Referencje dokumentów z kodami typów, numerami, datami i kwotami. Popularne typy dokumentów: CINV (faktura handlowa), CREN (nota kredytowa), SOAC (wyciąg z rachunku). Obsługuje referencje wierzyciela ISO 11649 (RF + cyfry kontrolne + referencja) przez CdtrRefInf. Umożliwia automatyczne dopasowanie faktur i płatności wielofakturowe.

## UETR i śledzenie gpi

UETR (Unique End-to-End Transaction Reference) to UUID v4 generowany przez agenta dłużnika. Pojawia się w PmtId/UETR w pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 i pacs.028. Musi pozostać niezmieniony w całym łańcuchu płatniczym.

SWIFT gpi używa UETR do śledzenia płatności za pośrednictwem chmurowej bazy danych Tracker. Każdy agent potwierdza odbiór i przetworzenie, umożliwiając widoczność od początku do końca. Umowa SLA gpi dla płatności transgranicznych zakłada uznanie rachunku wierzyciela w tym samym dniu.

## Odniesienia

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

