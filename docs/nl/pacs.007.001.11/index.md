---
title: pacs.007.001.11 | FI-naar-FI-betalingsstornering | pacs008
description: Het pacs.007-bericht wordt gebruikt om een eerder verzonden betalingsinstructie die nog niet is afgewikkeld te storneren of om stornering van een...
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI-naar-FI-betalingsstornering

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
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
          <td class="message-metadata-table__label"><strong>ISO-naam</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Overzicht

Het pacs.007-bericht wordt gebruikt om een eerder verzonden betalingsinstructie die nog niet is afgewikkeld te storneren of om stornering van een afgewikkelde betaling te verzoeken. In tegenstelling tot pacs.004 (retourzending) wordt het geïnitieerd door de oorspronkelijke opdrachtgevende agent.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 2025-02-27; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel
- **TxInf** — Transactie-informatie met storneringsbedrag en partijen
- **OrgnlGrpInf** — Oorspronkelijke groepsinformatie met verwijzing naar het bronbericht
- **RvslRsnInf** — Storneringsredeninformatie met gestructureerde redencodes
- **OrgnlTxRef** — Oorspronkelijke transactiereferentie voor end-to-end traceerbaarheid

## Zakelijke context

- Geïnitieerd wanneer de oorspronkelijke verzender een fout constateert vóór of na afwikkeling
- Gebruikt bij fraudescenario's waarbij snelle stornering vereist is
- Ondersteunt zowel volledige als gedeeltelijke stornering van oorspronkelijke betalingsbedragen
- Bevat gestructureerde storneringsredencodes voor verdere verwerking in de keten

<div class="operational-matrix-table" tabindex="0" aria-label="Belangrijke gegevenselementen Zakelijke context">
  <table>
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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel</td>
          <td class="operational-matrix-table__right">Geïnitieerd wanneer de oorspronkelijke verzender een fout constateert vóór of na afwikkeling</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Transactie-informatie met storneringsbedrag en partijen</td>
          <td class="operational-matrix-table__right">Gebruikt bij fraudescenario&#39;s waarbij snelle stornering vereist is</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Oorspronkelijke groepsinformatie met verwijzing naar het bronbericht</td>
          <td class="operational-matrix-table__right">Ondersteunt zowel volledige als gedeeltelijke stornering van oorspronkelijke betalingsbedragen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Storneringsredeninformatie met gestructureerde redencodes</td>
          <td class="operational-matrix-table__right">Bevat gestructureerde storneringsredencodes voor verdere verwerking in de keten</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Oorspronkelijke transactiereferentie voor end-to-end traceerbaarheid</td>
          <td class="operational-matrix-table__right">De opdrachtgevende agent (oorspronkelijke verzender) stuurt pacs.007 voorwaarts door de betalingsketen om een eerder gegeven betalingsinstructie te storneren. Elke agent verwerkt de storneringsinstructie en past de afwikkeling dienovereenkomstig aan.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- en schema-context

- Onderscheidt zich van pacs.004 door de richting — stornering gaat voorwaarts vanuit de opdrachtgever, retourzending gaat achterwaarts vanuit de begunstigde
- CBPR+ vereist koppeling met oorspronkelijke berichtidentificatoren voor geautomatiseerde matching
- Gestructureerde redencodes vervangen vrije-tekstverhalen uit verouderde MT-berichten
- Wordt steeds vaker gebruikt in processen voor terugvordering van instantbetalingen en fraudepreventie

## Berichtstroom

De opdrachtgevende agent (oorspronkelijke verzender) stuurt pacs.007 voorwaarts door de betalingsketen om een eerder gegeven betalingsinstructie te storneren. Elke agent verwerkt de storneringsinstructie en past de afwikkeling dienovereenkomstig aan.

## Tabel met versieverschillen

<div class="version-diff-table" tabindex="0" aria-label="Tabel met versieverschillen">
  <table>
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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">Huidige implementatie in pacs008</td>
          <td class="version-diff-table__takeaway">Goede basis voor het modelleren van terugboekingsprocessen.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">Latere catalogusrevisies</td>
          <td class="version-diff-table__takeaway">Check later revisions for current market-infrastructure alignment.</td>
        </tr>
    </tbody>
  </table>
</div>

## Uitgewerkt XML-voorbeeld

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

### Veldtoelichting

- `MsgId`: The reversal needs its own identifier.
- `OrgnlInstrId`: Behoud de oorspronkelijke betalingsreferentie om onderbrekingen in de reconciliatie te voorkomen.
- `RvslRsnInf`: Use structured reversal reasons so cases can be routed correctly.

## Vergelijk pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="Vergelijk pacs.007 vs pacs.004">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensie</th>
        <th>pacs.007.001.11</th>
        <th>Vergelijkingsbericht</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Primair doel</td>
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
          <td class="message-comparison-table__dimension">Het meest geschikt voor</td>
          <td class="message-comparison-table__current">Afhandeling van terugboekingen door recall, fout of fraude</td>
          <td class="message-comparison-table__other">Afhandeling van retouren na afwikkeling</td>
        </tr>
    </tbody>
  </table>
</div>

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/nl/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">FI-naar-FI-klantkredietoverboeking</td>
          <td class="related-messages-table__overview">Het pacs.008-bericht is de kernbetalingsinstructie die wordt uitgewisseld tussen financiële instellingen om namens een klant gelden over te maken. Het bevat informatie over debiteur, crediteur, bedrag en betalingskenmerken voor een of meer overboekingstransacties.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/nl/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Betalingsretour</td>
          <td class="related-messages-table__overview">Het pacs.004-bericht wordt gebruikt om een eerder afgewikkelde betalingstransactie te retourneren. Het keert de geldstroom om wanneer een betaling niet kan worden toegepast, per abuis is verzonden of door de opdrachtgevende instelling wordt teruggevorderd.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/nl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-naar-FI-betalingsstatusrapport</td>
          <td class="related-messages-table__overview">Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht.</td>
        </tr>
    </tbody>
  </table>
</div>

