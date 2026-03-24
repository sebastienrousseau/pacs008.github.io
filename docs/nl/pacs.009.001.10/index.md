---
title: pacs.009.001.10 | Kredietoverboeking tussen financiële instellingen | pacs008
description: Het pacs.009-bericht wordt gebruikt voor overboekingen tussen financiële instellingen waarbij de overboeking voor eigen rekening van de instelling...
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Kredietoverboeking tussen financiële instellingen

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## Overzicht

Het pacs.009-bericht wordt gebruikt voor overboekingen tussen financiële instellingen waarbij de overboeking voor eigen rekening van de instelling plaatsvindt en niet namens een klant. Het ondersteunt interbancaire financiering, dekkingsbetalingen en liquiditeitsbeheer.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 2025-02-27; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en afwikkelingsinformatie
- **CdtTrfTxInf** — Overboekingstransactie-informatie met interbancair afwikkelingsbedrag
- **Dbtr / DbtrAgt** — Identificatie van de debiteurinstelling en haar agent
- **Cdtr / CdtrAgt** — Identificatie van de crediteurinstelling en haar agent
- **IntrBkSttlmAmt** — Interbancair afwikkelingsbedrag in de afwikkelingsvaluta

## Zakelijke context

- Gebruikt voor interbancaire overboekingen voor eigen rekening en dekkingsbetalingen
- Ondersteunt liquiditeitsbeheer tussen correspondentbankpartners
- Bevat het dekkingsdeel van klantenoverboekingen die via de dekkingsmethode worden afgewikkeld
- Maakt treasury- en financieringsoperaties tussen financiële instellingen mogelijk

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Groepskoptekst met berichtidentificatie en afwikkelingsinformatie</td>
          <td class="operational-matrix-table__right">Gebruikt voor interbancaire overboekingen voor eigen rekening en dekkingsbetalingen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Overboekingstransactie-informatie met interbancair afwikkelingsbedrag</td>
          <td class="operational-matrix-table__right">Ondersteunt liquiditeitsbeheer tussen correspondentbankpartners</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identificatie van de debiteurinstelling en haar agent</td>
          <td class="operational-matrix-table__right">Bevat het dekkingsdeel van klantenoverboekingen die via de dekkingsmethode worden afgewikkeld</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identificatie van de crediteurinstelling en haar agent</td>
          <td class="operational-matrix-table__right">Maakt treasury- en financieringsoperaties tussen financiële instellingen mogelijk</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Interbancair afwikkelingsbedrag in de afwikkelingsvaluta</td>
          <td class="operational-matrix-table__right">De debiteurinstelling stuurt pacs.009 naar de crediteurinstelling om eigen gelden over te maken. Bij betalingen via de dekkingsmethode voorziet pacs.009 in het financieringsdeel terwijl pacs.008 de klantinstructie via een apart pad vervoert.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- en schema-context

- Vervangt MT202 en MT202COV voor overboekingen tussen instellingen
- Dekkingsmethodestromen koppelen pacs.009 aan de onderliggende pacs.008-klantinstructie
- Gestructureerde partijgegevens en LEI-identificatie worden steeds vaker vereist
- SWIFT gpi dekt pacs.009 voor transparantie in het correspondentbankverkeer

## Berichtstroom

De debiteurinstelling stuurt pacs.009 naar de crediteurinstelling om eigen gelden over te maken. Bij betalingen via de dekkingsmethode voorziet pacs.009 in het financieringsdeel terwijl pacs.008 de klantinstructie via een apart pad vervoert.

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">Huidige implementatie in pacs008</td>
          <td class="version-diff-table__takeaway">Komt overeen met de huidige projectondersteuning voor FI-credittransferstromen.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">Latere catalogusrevisies</td>
          <td class="version-diff-table__takeaway">Belangrijk voor routeplanning in omgevingen voor correspondentbankieren en dekkingsbetalingen.</td>
        </tr>
    </tbody>
  </table>
</div>

## Uitgewerkt XML-voorbeeld

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

### Veldtoelichting

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## Vergelijk pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="Vergelijk pacs.009 vs pacs.008">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensie</th>
        <th>pacs.009.001.10</th>
        <th>Vergelijkingsbericht</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Primair doel</td>
          <td class="message-comparison-table__current">Credittransfer op eigen rekening van de instelling of dekkingsstap</td>
          <td class="message-comparison-table__other">Klantcredittransfer</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Zakelijke eigenaar</td>
          <td class="message-comparison-table__current">Treasury-, correspondent- en financieringsoperaties</td>
          <td class="message-comparison-table__other">Klantbetalingsoperaties</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Typische combinaties</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004 en gekoppelde pacs.008-stromen</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Te vermijden misvatting</td>
          <td class="message-comparison-table__current">Dat het slechts een technischere pacs.008 is</td>
          <td class="message-comparison-table__other">Dat het institutionele financieringsstromen zonder meer kan dragen</td>
        </tr>
    </tbody>
  </table>
</div>

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/nl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-naar-FI-betalingsstatusrapport</td>
          <td class="related-messages-table__overview">Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/nl/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Incasso tussen financiële instellingen</td>
          <td class="related-messages-table__overview">Het pacs.010-bericht wordt tussen financiële instellingen gebruikt voor incassotransacties op eigen rekening van de instelling. Het stelt de ene instelling in staat om gelden rechtstreeks van de rekening van een andere instelling te innen.</td>
        </tr>
    </tbody>
  </table>
</div>

