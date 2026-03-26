---
title: "pacs.002.001.12 | FI-naar-FI-betalingsstatusrapport | pacs008"
description: Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt...
lang: nl-NL
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.002 a payment message?"
    answer: "No. It reports status for an earlier instruction rather than moving value itself."
  - question: "Should pacs.002 replace internal workflow states?"
    answer: "No. It should inform them, but internal case states still need their own operational logic."
---

# pacs.002.001.12 — FI-naar-FI-betalingsstatusrapport

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Overzicht

Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 2025-02-27; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel
- **OrgnlGrpInfAndSts** — Oorspronkelijke groepsinformatie en status voor rapportage op groepsniveau
- **TxInfAndSts** — Transactie-informatie en status voor individuele transactieresultaten
- **StsRsnInf** — Statusredeninformatie met gestructureerde redencodes
- **OrgnlTxRef** — Oorspronkelijke transactiereferentie die terugverwijst naar de broninstructie

## Zakelijke context

- Gebruikt om afwikkeling te bevestigen of afwijzing te rapporteren van overboekingen, incasso's en betalingsretourzendingen
- Maakt reconciliatie mogelijk tussen opdrachtgevende en opdrachthebbende agenten
- Vereist in CBPR+-stromen om verwerking van pacs.008- en pacs.009-berichten te bevestigen
- Ondersteunt zowel statusrapportage op groepsniveau als op individueel transactieniveau

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
          <td class="operational-matrix-table__right">Gebruikt om afwikkeling te bevestigen of afwijzing te rapporteren van overboekingen, incasso&#39;s en betalingsretourzendingen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Oorspronkelijke groepsinformatie en status voor rapportage op groepsniveau</td>
          <td class="operational-matrix-table__right">Maakt reconciliatie mogelijk tussen opdrachtgevende en opdrachthebbende agenten</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Transactie-informatie en status voor individuele transactieresultaten</td>
          <td class="operational-matrix-table__right">Vereist in CBPR+-stromen om verwerking van pacs.008- en pacs.009-berichten te bevestigen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Statusredeninformatie met gestructureerde redencodes</td>
          <td class="operational-matrix-table__right">Ondersteunt zowel statusrapportage op groepsniveau als op individueel transactieniveau</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Oorspronkelijke transactiereferentie die terugverwijst naar de broninstructie</td>
          <td class="operational-matrix-table__right">De opdrachthebbende agent (ontvanger) stuurt pacs.002 terug naar de opdrachtgevende agent (verzender) om acceptatie, afwikkeling of afwijzing te bevestigen van een ontvangen betalingsinstructie zoals pacs.008 of pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- en schema-context

- Vervangt MT199 en statusverhalen in veld 79 van MT-berichten
- CBPR+ schrijft pacs.002 voor voor alle betalingsstatuscommunicatie
- Gestructureerde redencodes vervangen vrije-tekstafwijzingsverklaringen
- Integratie met SWIFT gpi-tracking vereist pacs.002 voor end-to-end transparantie

## Berichtstroom

De opdrachthebbende agent (ontvanger) stuurt pacs.002 terug naar de opdrachtgevende agent (verzender) om acceptatie, afwikkeling of afwijzing te bevestigen van een ontvangen betalingsinstructie zoals pacs.008 of pacs.009.

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">Huidige implementatie in pacs008</td>
          <td class="version-diff-table__takeaway">Gebruik dit wanneer u moet aansluiten op de momenteel ondersteunde projectmodellen en validatie-artefacten.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">Latere catalogusrevisies</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## Uitgewerkt XML-voorbeeld

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

### Veldtoelichting

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## Vergelijk pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="Vergelijk pacs.002 vs pacs.028">
  <table>
    <caption>Vergelijk pacs.002 vs pacs.028</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensie</th>
        <th>pacs.002.001.12</th>
        <th>Vergelijkingsbericht</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Primair doel</td>
          <td class="message-comparison-table__current">Report status</td>
          <td class="message-comparison-table__other">Request status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Wie de interactie start</td>
          <td class="message-comparison-table__current">De instelling die de status verzendt</td>
          <td class="message-comparison-table__other">De instelling die om status vraagt</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Operationele invalshoek</td>
          <td class="message-comparison-table__current">Event-driven reporting</td>
          <td class="message-comparison-table__other">Navraag op basis van uitzonderingen</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Te vermijden misvatting</td>
          <td class="message-comparison-table__current">Dat statusrapportage onderzoekswerkstromen vervangt</td>
          <td class="message-comparison-table__other">Dat elke betaling een expliciet statusverzoek nodig heeft</td>
        </tr>
    </tbody>
  </table>
</div>

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
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
          <td class="related-messages-table__id"><a href="/nl/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Kredietoverboeking tussen financiële instellingen</td>
          <td class="related-messages-table__overview">Het pacs.009-bericht wordt gebruikt voor overboekingen tussen financiële instellingen waarbij de overboeking voor eigen rekening van de instelling plaatsvindt en niet namens een klant. Het ondersteunt interbancaire financiering, dekkingsbetalingen en liquiditeitsbeheer.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/nl/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">FI-naar-FI-aanvraag betalingsstatus</td>
          <td class="related-messages-table__overview">Het pacs.028-bericht wordt door een financiële instelling verzonden om de status op te vragen van een eerder verzonden betalingsinstructie. Het maakt proactieve tracking van betalingsverwerking mogelijk zonder te wachten op een ongevraagd statusrapport.</td>
        </tr>
    </tbody>
  </table>
</div>

