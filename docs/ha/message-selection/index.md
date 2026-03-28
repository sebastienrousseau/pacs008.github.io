---
title: "Message Selection Guide | pacs008"
description: Choose the right ISO 20022 pacs message for generation, status reporting, returns, reversals, and payment enquiries.
lang: ha-NG
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
        <th>Nau&#39;in saƙo</th>
        <th>Bayani</th>
        <th>Bayyani</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ha/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">Rahoton matsayin biyan kuɗi tsakanin cibiyoyin kuɗi</td>
          <td class="decision-matrix-table__overview">Saƙon pacs.002 yana ba da rahoton matsayin umarnin biyan kuɗi da ya gabata. Yana sanar da wata cibiya ko an karɓi biyan kuɗi, an ƙi, yana jiran, ko an biya.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ha/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">Cire kuɗi kai tsaye na abokin ciniki tsakanin cibiyoyin kuɗi</td>
          <td class="decision-matrix-table__overview">Saƙon pacs.003 yana ɗaukar cire kuɗi kai tsaye na abokin ciniki tsakanin bankuna. Yana ba bankin mai ba da bashi damar tattara kuɗi daga bankin mai bashi.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ha/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Mayar da biyan kuɗi</td>
          <td class="decision-matrix-table__overview">Saƙon pacs.004 yana mayar da biyan kuɗi da aka riga aka biya. Yana aika kuɗi baya lokacin da ba za a iya amfani da biyan kuɗi ba.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ha/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">Soke biyan kuɗi tsakanin cibiyoyin kuɗi</td>
          <td class="decision-matrix-table__overview">Saƙon pacs.007 yana soke umarnin biyan kuɗi da ya gabata. Banbanci da pacs.004, yana farawa daga mai aika na asali.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ha/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">Canja wurin kuɗi na abokin ciniki tsakanin cibiyoyin kuɗi</td>
          <td class="decision-matrix-table__overview">Saƙon pacs.008 shine babban umarnin canja wurin kuɗi na abokin ciniki tsakanin bankuna. Yana ɗaukar bayanan ɓangare, adadi, da aiko kuɗi.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ha/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Canja wurin kuɗi tsakanin cibiyoyin kuɗi</td>
          <td class="decision-matrix-table__overview">Saƙon pacs.009 yana matsar da kuɗi tsakanin bankuna a madadin kansu. Yana tallafawa tallafin kuɗi, biyan kuɗin rufewa, da sarrafa ruwa.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ha/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Cire kuɗi kai tsaye tsakanin cibiyoyin kuɗi</td>
          <td class="decision-matrix-table__overview">The pacs.010 message lets one financial institution debit another institution&#39;s own account. It is for bank-to-bank collections, not customer direct debits.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ha/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">Neman matsayin biyan kuɗi tsakanin cibiyoyin kuɗi</td>
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

- [`pacs.002.001.12`](/ha/pacs.002.001.12/) — Rahoton matsayin biyan kuɗi tsakanin cibiyoyin kuɗi
- [`pacs.003.001.09`](/ha/pacs.003.001.09/) — Cire kuɗi kai tsaye na abokin ciniki tsakanin cibiyoyin kuɗi
- [`pacs.004.001.11`](/ha/pacs.004.001.11/) — Mayar da biyan kuɗi
- [`pacs.007.001.11`](/ha/pacs.007.001.11/) — Soke biyan kuɗi tsakanin cibiyoyin kuɗi
- [`pacs.008.001.13`](/ha/pacs.008.001.13/) — Canja wurin kuɗi na abokin ciniki tsakanin cibiyoyin kuɗi
- [`pacs.009.001.10`](/ha/pacs.009.001.10/) — Canja wurin kuɗi tsakanin cibiyoyin kuɗi
- [`pacs.010.001.05`](/ha/pacs.010.001.05/) — Cire kuɗi kai tsaye tsakanin cibiyoyin kuɗi
- [`pacs.028.001.05`](/ha/pacs.028.001.05/) — Neman matsayin biyan kuɗi tsakanin cibiyoyin kuɗi

