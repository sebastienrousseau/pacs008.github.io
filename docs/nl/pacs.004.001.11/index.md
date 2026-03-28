---
title: "pacs.004.001.11 | Betalingsretour | pacs008"
description: Het pacs.004-bericht wordt gebruikt om een eerder afgewikkelde betalingstransactie te retourneren. Het keert de geldstroom om wanneer een betaling niet...
lang: nl-NL
lastUpdated: true
image: /logo.webp
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — Betalingsretour

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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

Het pacs.004-bericht wordt gebruikt om een eerder afgewikkelde betalingstransactie te retourneren. Het keert de geldstroom om wanneer een betaling niet kan worden toegepast, per abuis is verzonden of door de opdrachtgevende instelling wordt teruggevorderd.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 2025-02-27; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel
- **TxInf** — Transactie-informatie met retourbedrag en partijen
- **OrgnlGrpInf** — Oorspronkelijke groepsinformatie met verwijzing naar het bronbericht
- **RtrRsnInf** — Retourredeninformatie met gestructureerde redencodes
- **OrgnlTxRef** — Oorspronkelijke transactiereferentie voor matching en reconciliatie

## Zakelijke context

- Behandelt retourzendingen na afwikkeling wanneer de rekening van de begunstigde niet kan worden gecrediteerd
- Ondersteunt terugvorderingsscenario's waarbij de opdrachtgever restitutie van gelden verzoekt
- Bevat gestructureerde retourredencodes voor regelgevende en operationele transparantie
- Is van toepassing op zowel retourzendingen van overboekingen (pacs.008) als retourzendingen van incasso's (pacs.003)

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel</td>
          <td class="operational-matrix-table__right">Behandelt retourzendingen na afwikkeling wanneer de rekening van de begunstigde niet kan worden gecrediteerd</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Transactie-informatie met retourbedrag en partijen</td>
          <td class="operational-matrix-table__right">Ondersteunt terugvorderingsscenario&#39;s waarbij de opdrachtgever restitutie van gelden verzoekt</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Oorspronkelijke groepsinformatie met verwijzing naar het bronbericht</td>
          <td class="operational-matrix-table__right">Bevat gestructureerde retourredencodes voor regelgevende en operationele transparantie</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Retourredeninformatie met gestructureerde redencodes</td>
          <td class="operational-matrix-table__right">Is van toepassing op zowel retourzendingen van overboekingen (pacs.008) als retourzendingen van incasso&#39;s (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Oorspronkelijke transactiereferentie voor matching en reconciliatie</td>
          <td class="operational-matrix-table__right">De opdrachthebbende agent stuurt pacs.004 terug door de betalingsketen om eerder afgewikkelde gelden te retourneren. Elke agent in de keten verwerkt de retourzending en crediteert de betreffende rekeningen terug.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- en schema-context

- Vervangt MT103 RETURN en retourberichtenverkeer via de dekkingsmethode
- Retourredencodes zijn gestandaardiseerd en machinaal leesbaar onder ISO 20022
- CBPR+ vereist volledige oorspronkelijke transactiereferentiegegevens voor matching
- SWIFT gpi-tracking wordt uitgebreid naar retourtransacties voor end-to-end zichtbaarheid

## Berichtstroom

De opdrachthebbende agent stuurt pacs.004 terug door de betalingsketen om eerder afgewikkelde gelden te retourneren. Elke agent in de keten verwerkt de retourzending en crediteert de betreffende rekeningen terug.

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">Huidige implementatie in pacs008</td>
          <td class="version-diff-table__takeaway">Sluit aan op de huidige modellen voor retourbetalingen.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">Latere catalogusrevisies</td>
          <td class="version-diff-table__takeaway">Controleer latere revisies van retourberichten wanneer schema-upgrades of nieuwe tegenpartijen binnen scope vallen.</td>
        </tr>
    </tbody>
  </table>
</div>

## Uitgewerkt XML-voorbeeld

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

### Veldtoelichting

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: De kwaliteit van redenencodes is cruciaal voor verdere klantcommunicatie en operationele routering.

## Vergelijk pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="Vergelijk pacs.004 vs pacs.007">
  <table>
    <caption>Vergelijk pacs.004 vs pacs.007</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensie</th>
        <th>pacs.004.001.11</th>
        <th>Vergelijkingsbericht</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Primair doel</td>
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
          <td class="message-comparison-table__dimension">Het meest geschikt voor</td>
          <td class="message-comparison-table__current">Afhandeling van retouren na afwikkeling</td>
          <td class="message-comparison-table__other">Afhandeling van terugboekingen door recall, fout of fraude</td>
        </tr>
    </tbody>
  </table>
</div>

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/nl/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">FI-naar-FI-klantincasso</td>
          <td class="related-messages-table__overview">Het pacs.003-bericht wordt uitgewisseld tussen financiële instellingen om een incasso-instructie van de klant uit te voeren. Het stelt de bank van de crediteur in staat om namens de crediteur gelden te innen bij de bank van de debiteur.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/nl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-naar-FI-betalingsstatusrapport</td>
          <td class="related-messages-table__overview">Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht.</td>
        </tr>
    </tbody>
  </table>
</div>

