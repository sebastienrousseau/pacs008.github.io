---
title: "Message Selection Guide | pacs008"
description: Choose the right ISO 20022 pacs message for generation, status reporting, returns, reversals, and payment enquiries.
lang: sv-SE
lastUpdated: true
image: /logo.webp
---

# Message Selection Guide

Choose the pacs family by business event first, then by scheme and operating model.

## Quick decision matrix

<div class="decision-matrix-table" tabindex="0" aria-label="Quick decision matrix">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
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
          <td class="decision-matrix-table__id"><a href="/sv/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">Statusrapport för betalning mellan finansinstitut</td>
          <td class="decision-matrix-table__overview">Meddelandet pacs.002 rapporterar statusen för en tidigare betalningsinstruktion. Det informerar en annan institution om betalningen accepterades, avvisades, väntar eller avvecklades.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/sv/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">Autogiro för kund mellan finansinstitut</td>
          <td class="decision-matrix-table__overview">Meddelandet pacs.003 överför ett kundautogiro mellan banker. Det låter borgenärsbanken inkassera medel från gäldenärsbanken.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/sv/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Betalningsretur</td>
          <td class="decision-matrix-table__overview">Meddelandet pacs.004 returnerar en betalning som redan har avvecklats. Det skickar tillbaka medel när en betalning inte kan tillämpas.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/sv/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">Betalningsåterföring mellan finansinstitut</td>
          <td class="decision-matrix-table__overview">Meddelandet pacs.007 reverserar en tidigare betalningsinstruktion. Till skillnad från pacs.004 utgår det från den ursprungliga avsändaren.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/sv/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">Kundkreditöverföring mellan finansinstitut</td>
          <td class="decision-matrix-table__overview">Meddelandet pacs.008 är den huvudsakliga kundkreditöverföringsinstruktionen mellan banker. Det bär parti-, belopps- och remitteringsdata.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/sv/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Kreditöverföring mellan finansinstitut</td>
          <td class="decision-matrix-table__overview">Meddelandet pacs.009 flyttar medel mellan banker för egen räkning. Det stöder finansiering, cover-betalningar och likviditetshantering.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/sv/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Autogiro mellan finansinstitut</td>
          <td class="decision-matrix-table__overview">The pacs.010 message lets one financial institution debit another institution&#39;s own account. It is for bank-to-bank collections, not customer direct debits.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/sv/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">Statusförfrågan för betalning mellan finansinstitut</td>
          <td class="decision-matrix-table__overview">The pacs.028 message asks another institution for the status of an earlier payment. It is a targeted status query for delayed, unclear, or missing payment updates.</td>
        </tr>
    </tbody>
  </table>
</div>

## Common comparison points

<div class="comparison-points-table" tabindex="0" aria-label="Common comparison points">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>Compare</th>
        <th>Key distinction</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">Customer payment versus institution / cover movement</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">Return from receiving side versus reversal from instructing side</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">Status report versus status request</td>
        </tr>
    </tbody>
  </table>
</div>

## Supported message pages

- [`pacs.002.001.12`](/sv/pacs.002.001.12/) — Statusrapport för betalning mellan finansinstitut
- [`pacs.003.001.09`](/sv/pacs.003.001.09/) — Autogiro för kund mellan finansinstitut
- [`pacs.004.001.11`](/sv/pacs.004.001.11/) — Betalningsretur
- [`pacs.007.001.11`](/sv/pacs.007.001.11/) — Betalningsåterföring mellan finansinstitut
- [`pacs.008.001.13`](/sv/pacs.008.001.13/) — Kundkreditöverföring mellan finansinstitut
- [`pacs.009.001.10`](/sv/pacs.009.001.10/) — Kreditöverföring mellan finansinstitut
- [`pacs.010.001.05`](/sv/pacs.010.001.05/) — Autogiro mellan finansinstitut
- [`pacs.028.001.05`](/sv/pacs.028.001.05/) — Statusförfrågan för betalning mellan finansinstitut

