---
title: "pacs.003.001.09 | Autogiro för kund mellan finansinstitut | pacs008"
description: Meddelandet pacs.003 överför ett kundautogiro mellan banker. Det låter borgenärsbanken inkassera medel från gäldenärsbanken.
lang: sv-SE
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.003 the direct-debit mirror of pacs.008?"
    answer: "No. It handles customer direct-debit flows, which have different mandate, timing, and exception rules."
  - question: "What matters most operationally?"
    answer: "Mandate quality, debtor-account rules, and return handling matter more than XML generation."
---

# pacs.003.001.09 — Autogiro för kund mellan finansinstitut

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Fält</th>
        <th scope="col">Värde</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO-namn</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Registreringsstatus</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>År</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Version</strong></td>
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## Översikt

Meddelandet pacs.003 överför ett kundautogiro mellan banker. Det låter borgenärsbanken inkassera medel från gäldenärsbanken.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Nyckeldataelement

- **GrpHdr** — Grupphuvud med meddelandeidentifiering och avvecklingsinformation
- **DrctDbtTxInf** — Autogiro-transaktionsinformation med belopp och parter
- **Cdtr** — Borgenärsidentifiering och kontouppgifter
- **CdtrAgt** — Borgenärsagent (inkasserande institution) identifiering
- **DbtrAgt** — Gäldenärsagent (betalande institution) identifiering

## Affärskontext

- Stöder SEPA Core och B2B autogiroscheman
- Används för återkommande inkasseringar som prenumerationer och räkningar
- Kräver en giltig mandatreferens
- Kan överföra många autogiro i ett meddelande

<div class="operational-matrix-table" tabindex="0" aria-label="Nyckeldataelement Affärskontext">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Nyckeldataelement</th>
        <th>Affärskontext</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Grupphuvud med meddelandeidentifiering och avvecklingsinformation</td>
          <td class="operational-matrix-table__right">Stöder SEPA Core och B2B autogiroscheman</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Autogiro-transaktionsinformation med belopp och parter</td>
          <td class="operational-matrix-table__right">Används för återkommande inkasseringar som prenumerationer och räkningar</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Borgenärsidentifiering och kontouppgifter</td>
          <td class="operational-matrix-table__right">Kräver en giltig mandatreferens</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Borgenärsagent (inkasserande institution) identifiering</td>
          <td class="operational-matrix-table__right">Kan överföra många autogiro i ett meddelande</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Gäldenärsagent (betalande institution) identifiering</td>
          <td class="operational-matrix-table__right">Borgenärsagenten skickar pacs.003 till gäldenärsagenten. Gäldenärsagenten kontrollerar mandatet och antingen avvecklar eller returnerar transaktionen.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- och schemakontext

- Strukturerade adress- och partdataregler gäller även här.
- Mandatdata måste vara strukturerade från november 2026.
- Ersätter äldre autogiroformat i MT104-stil i gränsöverskridande flöden.
- Borgenärens schemaidentifierare kräver noggrannare validering.

## Meddelandeflöde

Borgenärsagenten skickar pacs.003 till gäldenärsagenten. Gäldenärsagenten kontrollerar mandatet och antingen avvecklar eller returnerar transaktionen.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

## Relaterade meddelanden
<div class="related-messages-table" tabindex="0" aria-label="Relaterade meddelanden">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Meddelandetyp</th>
        <th>Beskrivning</th>
        <th>Översikt</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/sv/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Betalningsretur</td>
          <td class="related-messages-table__overview">Meddelandet pacs.004 returnerar en betalning som redan har avvecklats. Det skickar tillbaka medel när en betalning inte kan tillämpas.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/sv/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">Betalningsåterföring mellan finansinstitut</td>
          <td class="related-messages-table__overview">Meddelandet pacs.007 reverserar en tidigare betalningsinstruktion. Till skillnad från pacs.004 utgår det från den ursprungliga avsändaren.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/sv/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Statusrapport för betalning mellan finansinstitut</td>
          <td class="related-messages-table__overview">Meddelandet pacs.002 rapporterar statusen för en tidigare betalningsinstruktion. Det informerar en annan institution om betalningen accepterades, avvisades, väntar eller avvecklades.</td>
        </tr>
    </tbody>
  </table>
</div>

