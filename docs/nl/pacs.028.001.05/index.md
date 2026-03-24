---
title: pacs.028.001.05 | FI-naar-FI-aanvraag betalingsstatus | pacs008
description: Het pacs.028-bericht wordt door een financiële instelling verzonden om de status op te vragen van een eerder verzonden betalingsinstructie. Het maakt...
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI-naar-FI-aanvraag betalingsstatus

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Overzicht

Het pacs.028-bericht wordt door een financiële instelling verzonden om de status op te vragen van een eerder verzonden betalingsinstructie. Het maakt proactieve tracking van betalingsverwerking mogelijk zonder te wachten op een ongevraagd statusrapport.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 2025-02-27; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel
- **TxInf** — Transactie-informatie die de betaling identificeert waarover wordt geïnformeerd
- **OrgnlGrpInf** — Oorspronkelijke groepsinformatie met verwijzing naar het bronbericht
- **OrgnlInstrId** — Oorspronkelijke instructie-identificatie uit de bronbetaling
- **OrgnlEndToEndId** — Oorspronkelijke end-to-end-identificatie voor traceerbaarheid

## Zakelijke context

- Maakt proactieve statusopvraging mogelijk voor betalingsinstructies in transit
- Ondersteunt operationele teams bij het onderzoeken van vertraagde of ontbrekende betalingen
- Vult pacs.002 aan door statuscommunicatie te initiëren in plaats van af te wachten
- Gebruikt in processen voor uitzonderingsafhandeling en SLA-monitoring

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
          <td class="operational-matrix-table__right">Maakt proactieve statusopvraging mogelijk voor betalingsinstructies in transit</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Transactie-informatie die de betaling identificeert waarover wordt geïnformeerd</td>
          <td class="operational-matrix-table__right">Ondersteunt operationele teams bij het onderzoeken van vertraagde of ontbrekende betalingen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Oorspronkelijke groepsinformatie met verwijzing naar het bronbericht</td>
          <td class="operational-matrix-table__right">Vult pacs.002 aan door statuscommunicatie te initiëren in plaats van af te wachten</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — Oorspronkelijke instructie-identificatie uit de bronbetaling</td>
          <td class="operational-matrix-table__right">Gebruikt in processen voor uitzonderingsafhandeling en SLA-monitoring</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — Oorspronkelijke end-to-end-identificatie voor traceerbaarheid</td>
          <td class="operational-matrix-table__right">De opdrachtgevende agent stuurt pacs.028 naar de opdrachthebbende agent om de status van een specifieke betaling op te vragen. De opdrachthebbende agent antwoordt met een pacs.002 met de huidige verwerkingsstatus.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- en schema-context

- Vervangt MT199-statusopvragingspatronen en handmatige SWIFT-berichtqueries
- CBPR+ ondersteunt gestructureerde statusverzoeken gekoppeld aan oorspronkelijke berichtidentificatoren
- UETR-gebaseerde tracking via gpi vermindert de noodzaak van handmatige opvragingen
- Wordt steeds vaker geïntegreerd in geautomatiseerde dashboards voor betalingsoperaties

## Berichtstroom

De opdrachtgevende agent stuurt pacs.028 naar de opdrachthebbende agent om de status van een specifieke betaling op te vragen. De opdrachthebbende agent antwoordt met een pacs.002 met de huidige verwerkingsstatus.

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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">Huidige implementatie in pacs008</td>
          <td class="version-diff-table__takeaway">Geschikt voor de huidige modellering van statusverzoeken.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">Latere catalogusrevisie</td>
          <td class="version-diff-table__takeaway">Controleer de nieuwere catalogusrevisie voor toekomstige interoperabiliteitsplanning.</td>
        </tr>
    </tbody>
  </table>
</div>

## Uitgewerkt XML-voorbeeld

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Veldtoelichting

- `MsgId`: Het verzoek zelf heeft een controleerbare identificatie nodig die losstaat van de onderliggende betaling.
- `OrgnlInstrId`: Gebruik de exacte bronidentificatie uit de oorspronkelijke instructie om de matchingnauwkeurigheid te maximaliseren.
- `OrgnlEndToEndId`: Het opnemen van klantgerichte traceerbaarheid helpt operationele teams de navraag sneller af te stemmen.

## Vergelijk pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="Vergelijk pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensie</th>
        <th>pacs.028.001.05</th>
        <th>Vergelijkingsbericht</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Primair doel</td>
          <td class="message-comparison-table__current">Request status</td>
          <td class="message-comparison-table__other">Report status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Wie de interactie start</td>
          <td class="message-comparison-table__current">De instelling die om status vraagt</td>
          <td class="message-comparison-table__other">De instelling die de status verzendt</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Operationele invalshoek</td>
          <td class="message-comparison-table__current">Navraag op basis van uitzonderingen</td>
          <td class="message-comparison-table__other">Event-driven reporting</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Te vermijden misvatting</td>
          <td class="message-comparison-table__current">Dat het routinematig voor elke betaling zou moeten worden verzonden</td>
          <td class="message-comparison-table__other">Dat het de noodzaak van proactief casemanagement wegneemt</td>
        </tr>
    </tbody>
  </table>
</div>

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/nl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-naar-FI-betalingsstatusrapport</td>
          <td class="related-messages-table__overview">Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht.</td>
        </tr>
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
    </tbody>
  </table>
</div>

