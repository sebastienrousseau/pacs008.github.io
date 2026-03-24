---
title: "pacs.003.001.09 | FI-naar-FI-klantincasso | pacs008"
description: Het pacs.003-bericht wordt uitgewisseld tussen financiële instellingen om een incasso-instructie van de klant uit te voeren. Het stelt de bank van de...
lang: nl-NL
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.003 the direct-debit mirror of pacs.008?"
    answer: "No. It handles customer direct-debit flows, which have different mandate, timing, and exception rules."
  - question: "What matters most operationally?"
    answer: "Mandate quality, debtor-account rules, and return handling matter more than XML generation."
---

# pacs.003.001.09 — FI-naar-FI-klantincasso

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Veld</th>
        <th scope="col">Waarde</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO-naam</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Registratiestatus</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Jaar</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Versie</strong></td>
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## Overzicht

Het pacs.003-bericht wordt uitgewisseld tussen financiële instellingen om een incasso-instructie van de klant uit te voeren. Het stelt de bank van de crediteur in staat om namens de crediteur gelden te innen bij de bank van de debiteur.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 2025-02-27; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en afwikkelingsinformatie
- **DrctDbtTxInf** — Incassotransactie-informatie met bedrag en partijen
- **Cdtr** — Identificatie van de crediteur en rekeninggegevens
- **CdtrAgt** — Identificatie van de crediteuragent (incasserende instelling)
- **DbtrAgt** — Identificatie van de debiteuragent (betalende instelling)

## Zakelijke context

- Ondersteunt SEPA Core- en B2B-incassoschema's
- Gebruikt voor terugkerende betalingsincasso's zoals abonnementen, energierekeningen en leningaflossingen
- Vereist een geldige mandaatreferentie tussen debiteur en crediteur
- Maakt bulkincasso van meerdere incasso-instructies in één bericht mogelijk

<div class="operational-matrix-table" tabindex="0" aria-label="Belangrijke gegevenselementen Zakelijke context">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Belangrijke gegevenselementen</th>
        <th>Zakelijke context</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Groepskoptekst met berichtidentificatie en afwikkelingsinformatie</td>
          <td class="operational-matrix-table__right">Ondersteunt SEPA Core- en B2B-incassoschema&#39;s</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Incassotransactie-informatie met bedrag en partijen</td>
          <td class="operational-matrix-table__right">Gebruikt voor terugkerende betalingsincasso&#39;s zoals abonnementen, energierekeningen en leningaflossingen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Identificatie van de crediteur en rekeninggegevens</td>
          <td class="operational-matrix-table__right">Vereist een geldige mandaatreferentie tussen debiteur en crediteur</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Identificatie van de crediteuragent (incasserende instelling)</td>
          <td class="operational-matrix-table__right">Maakt bulkincasso van meerdere incasso-instructies in één bericht mogelijk</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Identificatie van de debiteuragent (betalende instelling)</td>
          <td class="operational-matrix-table__right">De crediteuragent initieert pacs.003 richting de debiteuragent om gelden te innen. De debiteuragent valideert het mandaat, controleert de rekeningdekking en wikkelt de transactie af of retourneert deze.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- en schema-context

- Vereisten voor gestructureerde adressen en partij-identificatie gelden ook voor incasso's
- Mandaatgerelateerde gegevens moeten vanaf november 2026 volledig gestructureerd zijn
- Vervangt verouderde incassoformaten in MT104-stijl bij grensoverschrijdende stromen
- Validatie van crediteurschema-identificatie wordt steeds strenger gehandhaafd

## Berichtstroom

De crediteuragent initieert pacs.003 richting de debiteuragent om gelden te innen. De debiteuragent valideert het mandaat, controleert de rekeningdekking en wikkelt de transactie af of retourneert deze.

## Tabel met versieverschillen

<div class="version-diff-table" tabindex="0" aria-label="Tabel met versieverschillen">
  <table>
    <caption>Tabel met versieverschillen</caption>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Versiebereik</th>
        <th>Waarom dit telt</th>
        <th>Implementatieconclusie</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">Huidige implementatie in pacs008</td>
          <td class="version-diff-table__takeaway">Nuttig voor de referentiemodellering van incasso&#39;s in het huidige project.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">Latere catalogusrevisies</td>
          <td class="version-diff-table__takeaway">Controleer latere revisies op wijzigingen rond mandaat, status en interoperabiliteit voordat u dit in een nieuwe implementatie gebruikt.</td>
        </tr>
    </tbody>
  </table>
</div>

## Uitgewerkt XML-voorbeeld

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

### Veldtoelichting

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: Het succes van een incasso hangt vaak meer af van de kwaliteit van rekening en mandaat dan van de XML-structuur.

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

## Gerelateerde berichten
<div class="related-messages-table" tabindex="0" aria-label="Gerelateerde berichten">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Berichttype</th>
        <th>Beschrijving</th>
        <th>Overzicht</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/nl/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Betalingsretour</td>
          <td class="related-messages-table__overview">Het pacs.004-bericht wordt gebruikt om een eerder afgewikkelde betalingstransactie te retourneren. Het keert de geldstroom om wanneer een betaling niet kan worden toegepast, per abuis is verzonden of door de opdrachtgevende instelling wordt teruggevorderd.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/nl/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">FI-naar-FI-betalingsstornering</td>
          <td class="related-messages-table__overview">Het pacs.007-bericht wordt gebruikt om een eerder verzonden betalingsinstructie die nog niet is afgewikkeld te storneren of om stornering van een afgewikkelde betaling te verzoeken. In tegenstelling tot pacs.004 (retourzending) wordt het geïnitieerd door de oorspronkelijke opdrachtgevende agent.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/nl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-naar-FI-betalingsstatusrapport</td>
          <td class="related-messages-table__overview">Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht.</td>
        </tr>
    </tbody>
  </table>
</div>

