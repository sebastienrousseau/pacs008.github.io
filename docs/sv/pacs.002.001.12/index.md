---
title: "pacs.002.001.12 | Statusrapport för betalning mellan finansinstitut | pacs008"
description: Meddelandet pacs.002 rapporterar statusen för en tidigare betalningsinstruktion. Det informerar en annan institution om betalningen accepterades...
lang: sv-SE
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.002 a payment message?"
    answer: "No. It reports status for an earlier instruction rather than moving value itself."
  - question: "Should pacs.002 replace internal workflow states?"
    answer: "No. It should inform them, but internal case states still need their own operational logic."
---

# pacs.002.001.12 — Statusrapport för betalning mellan finansinstitut

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Översikt

Meddelandet pacs.002 rapporterar statusen för en tidigare betalningsinstruktion. Det informerar en annan institution om betalningen accepterades, avvisades, väntar eller avvecklades.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Nyckeldataelement

- **GrpHdr** — Grupphuvud med meddelandeidentifiering och tidsstämpel för skapande
- **OrgnlGrpInfAndSts** — Ursprunglig gruppinformation och status för rapportering på bulknivå
- **TxInfAndSts** — Transaktionsinformation och status för individuella transaktionsutfall
- **StsRsnInf** — Statusorsaksinformation med strukturerade orsakskoder
- **OrgnlTxRef** — Ursprunglig transaktionsreferens som kopplar tillbaka till källinstruktionen

## Affärskontext

- Bekräftar avveckling eller avvisning av kreditöverföringar, autogiro och returer
- Stöder avstämning mellan instruerande och instruerad agent
- Används i CBPR+-flöden för pacs.008- och pacs.009-statusrapportering
- Stöder statusrapportering på grupp- och transaktionsnivå

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Grupphuvud med meddelandeidentifiering och tidsstämpel för skapande</td>
          <td class="operational-matrix-table__right">Bekräftar avveckling eller avvisning av kreditöverföringar, autogiro och returer</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Ursprunglig gruppinformation och status för rapportering på bulknivå</td>
          <td class="operational-matrix-table__right">Stöder avstämning mellan instruerande och instruerad agent</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Transaktionsinformation och status för individuella transaktionsutfall</td>
          <td class="operational-matrix-table__right">Används i CBPR+-flöden för pacs.008- och pacs.009-statusrapportering</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Statusorsaksinformation med strukturerade orsakskoder</td>
          <td class="operational-matrix-table__right">Stöder statusrapportering på grupp- och transaktionsnivå</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Ursprunglig transaktionsreferens som kopplar tillbaka till källinstruktionen</td>
          <td class="operational-matrix-table__right">Den instruerade agenten skickar pacs.002 tillbaka till den instruerande agenten för att bekräfta godkännande, avveckling eller avvisning av en betalningsinstruktion som pacs.008 eller pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+- och schemakontext

- Ersätter MT199 och fält 79-statustext i MT-meddelanden
- CBPR+ kräver pacs.002 för all betalningsstatuskommunikation
- Strukturerade orsakskoder ersätter fritextförklaringar vid avvisning
- SWIFT gpi-spårningsintegration kräver pacs.002 för transparens från början till slut

## Meddelandeflöde

Den instruerade agenten skickar pacs.002 tillbaka till den instruerande agenten för att bekräfta godkännande, avveckling eller avvisning av en betalningsinstruktion som pacs.008 eller pacs.009.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/sv/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Kundkreditöverföring mellan finansinstitut</td>
          <td class="related-messages-table__overview">Meddelandet pacs.008 är den huvudsakliga kundkreditöverföringsinstruktionen mellan banker. Det bär parti-, belopps- och remitteringsdata.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/sv/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Kreditöverföring mellan finansinstitut</td>
          <td class="related-messages-table__overview">Meddelandet pacs.009 flyttar medel mellan banker för egen räkning. Det stöder finansiering, cover-betalningar och likviditetshantering.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/sv/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">Statusförfrågan för betalning mellan finansinstitut</td>
          <td class="related-messages-table__overview">The pacs.028 message asks another institution for the status of an earlier payment. It is a targeted status query for delayed, unclear, or missing payment updates.</td>
        </tr>
    </tbody>
  </table>
</div>

