---
title: "pacs.008.001.13 | FI-naar-FI-klantkredietoverboeking | pacs008"
description: Het pacs.008-bericht is de kernbetalingsinstructie die wordt uitgewisseld tussen financiële instellingen om namens een klant gelden over te maken. Het...
lang: nl-NL
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.008 alleen voldoende voor productiebetaling?"
    answer: "Nee. Productiegereedheid hangt ook af van schemaregels, adreskwaliteit, partijgegevens, statusverwerking en uitzonderingsflows."
  - question: "Wat veroorzaakt het meeste herstelwerk?"
    answer: "Zwakke partijgegevens, slechte adresstructurering, inconsistente identificatoren en ongestructureerde overboekingsinhoud zijn veelvoorkomende oorzaken."
---

# pacs.008.001.13 — FI-naar-FI-klantkredietoverboeking

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Registratiestatus</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Jaar</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Versie</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## Overzicht

Het pacs.008-bericht is de kernbetalingsinstructie die wordt uitgewisseld tussen financiële instellingen om namens een klant gelden over te maken. Het bevat informatie over debiteur, crediteur, bedrag en betalingskenmerken voor een of meer overboekingstransacties.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 2025-02-27; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met bericht-ID, aanmaakdatum, aantal transacties en afwikkelingsinformatie
- **CdtTrfTxInf** — Overboekingstransactie-informatie met bedrag, kosten en doel
- **Dbtr / DbtrAgt** — Identificatie van debiteur en debiteuragent met rekeninggegevens
- **Cdtr / CdtrAgt** — Identificatie van crediteur en crediteuragent met rekeninggegevens
- **RmtInf** — Betalingskenmerkinformatie voor gestructureerde of ongestructureerde betalingsreferenties

## Zakelijke context

- Het primaire bericht voor door klanten geïnitieerde grensoverschrijdende en binnenlandse overboekingen
- Gebruikt in SEPA SCT, SEPA Instant, CBPR+ en nationale verrekeningssystemen
- Bevat gestructureerde betalingskenmerkinformatie ter ondersteuning van geautomatiseerde reconciliatie
- Ondersteunt seriële, dekkings- en directe afwikkelingsmethoden voor betalingsketens met meerdere schakels

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Groepskoptekst met bericht-ID, aanmaakdatum, aantal transacties en afwikkelingsinformatie</td>
          <td class="operational-matrix-table__right">Het primaire bericht voor door klanten geïnitieerde grensoverschrijdende en binnenlandse overboekingen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Overboekingstransactie-informatie met bedrag, kosten en doel</td>
          <td class="operational-matrix-table__right">Gebruikt in SEPA SCT, SEPA Instant, CBPR+ en nationale verrekeningssystemen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identificatie van debiteur en debiteuragent met rekeninggegevens</td>
          <td class="operational-matrix-table__right">Bevat gestructureerde betalingskenmerkinformatie ter ondersteuning van geautomatiseerde reconciliatie</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identificatie van crediteur en crediteuragent met rekeninggegevens</td>
          <td class="operational-matrix-table__right">Ondersteunt seriële, dekkings- en directe afwikkelingsmethoden voor betalingsketens met meerdere schakels</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Betalingskenmerkinformatie voor gestructureerde of ongestructureerde betalingsreferenties</td>
          <td class="operational-matrix-table__right">De debiteuragent maakt een pacs.008 aan en stuurt dit naar de crediteuragent (rechtstreeks of via tussenpersonen). Elke agent in de keten valideert, verrijkt en stuurt de instructie door totdat de crediteuragent de rekening van de begunstigde crediteert.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- en schema-context

- Vervangt MT103 en MT103+ voor grensoverschrijdende overboekingen van klanten
- De deadline voor gestructureerde adressen van november 2026 geldt voor alle postadressen van partijen
- SWIFT gpi vereist pacs.008 voor end-to-end tracking op basis van UETR
- 13 revisies weerspiegelen de voortdurende schema-evolutie over marktinfrastructuren heen

## Berichtstroom

De debiteuragent maakt een pacs.008 aan en stuurt dit naar de crediteuragent (rechtstreeks of via tussenpersonen). Elke agent in de keten valideert, verrijkt en stuurt de instructie door totdat de crediteuragent de rekening van de begunstigde crediteert.

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">Vroege revisies</td>
          <td class="version-diff-table__takeaway">Vooral nuttig voor analyse van migraties vanuit oudere omgevingen en voor versiehistorische context.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">Moderne revisies vóór de huidige</td>
          <td class="version-diff-table__takeaway">Dit zijn de revisies die het meest waarschijnlijk voorkomen in recente migratie- of co-existentieprojecten.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">Huidige catalogusrevisie</td>
          <td class="version-diff-table__takeaway">Gebruik dit voor planning rond de huidige versie, terwijl schemaregels en gereedheid van tegenpartijen nog steeds gevalideerd moeten worden.</td>
        </tr>
    </tbody>
  </table>
</div>

## Uitgewerkt XML-voorbeeld

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

### Veldtoelichting

- `MsgId`: Dit veld moet de berichtenenvelop identificeren, niet de betalingsreferentie van de eindklant.
- `EndToEndId`: Houd klantgerichte traceerbaarheid waar mogelijk stabiel in alle vervolgsystemen.
- `UETR`: Gebruik dit consequent in grensoverschrijdende omgevingen met hoge traceerbaarheidseisen; genereer het niet ad hoc in latere verwerkingsstappen.
- `IntrBkSttlmAmt`: Valideer bedrag en valuta met bedrijfsregels voordat de schemavalidatie plaatsvindt.
- `Dbtr` / `Cdtr`: De kwaliteit van partijgegevens, adresstructuur en identificatoren bepaalt meestal in hoge mate het aantal herstelacties.

## Vergelijk pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="Vergelijk pacs.008 vs pacs.009">
  <table>
    <caption>Vergelijk pacs.008 vs pacs.009</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensie</th>
        <th>pacs.008.001.13</th>
        <th>Vergelijkingsbericht</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Primair doel</td>
          <td class="message-comparison-table__current">Klantcredittransfer</td>
          <td class="message-comparison-table__other">Credittransfer op eigen rekening van de instelling of dekkingsstap</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Zakelijke eigenaar</td>
          <td class="message-comparison-table__current">Klantbetalingsoperaties</td>
          <td class="message-comparison-table__other">Treasury-, correspondent- en financieringsoperaties</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Typische combinaties</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, and sometimes linked pacs.008 flows</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Te vermijden misvatting</td>
          <td class="message-comparison-table__current">Dat alle bank-naar-banktransfers hieronder vallen</td>
          <td class="message-comparison-table__other">Dat dit klantinstructies voor credittransfers kan vervangen</td>
        </tr>
    </tbody>
  </table>
</div>

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## Ondersteunde versies

<div class="message-versions-table" tabindex="0" aria-label="Ondersteunde versies">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Versie</th>
        <th>Status</th>
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
          <td class="message-versions-table__status"><strong>Huidig</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/nl/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Betalingsretour</td>
          <td class="related-messages-table__overview">Het pacs.004-bericht wordt gebruikt om een eerder afgewikkelde betalingstransactie te retourneren. Het keert de geldstroom om wanneer een betaling niet kan worden toegepast, per abuis is verzonden of door de opdrachtgevende instelling wordt teruggevorderd.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/nl/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Kredietoverboeking tussen financiële instellingen</td>
          <td class="related-messages-table__overview">Het pacs.009-bericht wordt gebruikt voor overboekingen tussen financiële instellingen waarbij de overboeking voor eigen rekening van de instelling plaatsvindt en niet namens een klant. Het ondersteunt interbancaire financiering, dekkingsbetalingen en liquiditeitsbeheer.</td>
        </tr>
    </tbody>
  </table>
</div>

