---
title: pacs.010.001.05 | Incasso tussen financiële instellingen | pacs008
description: Het pacs.010-bericht wordt tussen financiële instellingen gebruikt voor incassotransacties op eigen rekening van de instelling. Het stelt de ene...
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Incasso tussen financiële instellingen

| | |
|---|---|
| **ISO-naam** | FinancialInstitutionDirectDebitV05 |
| **Registratiestatus** | Registered |
| **Jaar** | 2019 |
| **Versie** | 5 |

## Overzicht

Het pacs.010-bericht wordt tussen financiële instellingen gebruikt voor incassotransacties op eigen rekening van de instelling. Het stelt de ene instelling in staat om gelden rechtstreeks van de rekening van een andere instelling te innen.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 2025-02-27; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en afwikkelingsinformatie
- **DrctDbtTxInf** — Incassotransactie-informatie met incassobedrag
- **Cdtr / CdtrAgt** — Identificatie van de crediteurinstelling en haar agent
- **Dbtr / DbtrAgt** — Identificatie van de debiteurinstelling en haar agent
- **IntrBkSttlmAmt** — Interbancair afwikkelingsbedrag in de afwikkelingsvaluta

## Zakelijke context

- Ondersteunt interbancaire incasso-inning tussen financiële instellingen
- Gebruikt voor vergoedingsinning, margestortingen en institutionele afwikkelingsverplichtingen
- Vereist vooraf overeengekomen bilaterale overeenkomsten tussen deelnemende instellingen
- Essentieel voor institutioneel kasbeheer en interbancaire afwikkelingscycli

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
          <td class="operational-matrix-table__right">Ondersteunt interbancaire incasso-inning tussen financiële instellingen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Incassotransactie-informatie met incassobedrag</td>
          <td class="operational-matrix-table__right">Gebruikt voor vergoedingsinning, margestortingen en institutionele afwikkelingsverplichtingen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identificatie van de crediteurinstelling en haar agent</td>
          <td class="operational-matrix-table__right">Vereist vooraf overeengekomen bilaterale overeenkomsten tussen deelnemende instellingen</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identificatie van de debiteurinstelling en haar agent</td>
          <td class="operational-matrix-table__right">Essentieel voor institutioneel kasbeheer en interbancaire afwikkelingscycli</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Interbancair afwikkelingsbedrag in de afwikkelingsvaluta</td>
          <td class="operational-matrix-table__right">De crediteurinstelling stuurt pacs.010 naar de debiteurinstelling om gelden te innen op basis van een vooraf overeengekomen regeling. De debiteurinstelling valideert het verzoek en wikkelt de incasso af of wijst deze af.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- en schema-context

- Vervangt elementen van MT204 voor de verwerking van interbancaire incasso's
- Gestructureerde partij-identificatie volgt dezelfde vereisten als andere pacs-berichten
- Validatie van institutionele identificatoren (BIC, LEI) is verplicht
- Opgenomen in uitrolplannen voor volledige ISO 20022-adoptie over marktinfrastructuren heen

## Berichtstroom

De crediteurinstelling stuurt pacs.010 naar de debiteurinstelling om gelden te innen op basis van een vooraf overeengekomen regeling. De debiteurinstelling valideert het verzoek en wikkelt de incasso af of wijst deze af.

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">Huidige implementatie in pacs008</td>
          <td class="version-diff-table__takeaway">Referentiepunt voor ondersteuning van institutionele incasso&#39;s in het huidige project.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">Latere catalogusrevisie</td>
          <td class="version-diff-table__takeaway">Review before adopting newer infrastructure requirements.</td>
        </tr>
    </tbody>
  </table>
</div>

## Uitgewerkt XML-voorbeeld

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Veldtoelichting

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Bedragen bij institutionele incasso's vereisen vaak expliciete bilaterale tolerantielimieten.
- `Cdtr` / `Dbtr`: Leg institutionele rollen duidelijk vast; dit is geen debetmodel voor retailklanten.

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/nl/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Kredietoverboeking tussen financiële instellingen</td>
          <td class="related-messages-table__overview">Het pacs.009-bericht wordt gebruikt voor overboekingen tussen financiële instellingen waarbij de overboeking voor eigen rekening van de instelling plaatsvindt en niet namens een klant. Het ondersteunt interbancaire financiering, dekkingsbetalingen en liquiditeitsbeheer.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/nl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-naar-FI-betalingsstatusrapport</td>
          <td class="related-messages-table__overview">Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/nl/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">FI-naar-FI-klantincasso</td>
          <td class="related-messages-table__overview">Het pacs.003-bericht wordt uitgewisseld tussen financiële instellingen om een incasso-instructie van de klant uit te voeren. Het stelt de bank van de crediteur in staat om namens de crediteur gelden te innen bij de bank van de debiteur.</td>
        </tr>
    </tbody>
  </table>
</div>

