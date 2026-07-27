---
title: "Message Selection Guide | pacs008"
description: Choose the right ISO 20022 pacs message for generation, status reporting, returns, reversals, and payment enquiries.
lang: tl-PH
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
        <th>Uri ng mensahe</th>
        <th>Paglalarawan</th>
        <th>Pangkalahatang-ideya</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="decision-matrix-table__id"><a href="/tl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">Ulat ng kalagayan ng pagbabayad sa pagitan ng mga institusyong pinansyal</td>
          <td class="decision-matrix-table__overview">Ang mensaheng pacs.002 ay nag-uulat ng katayuan ng naunang instruksiyon sa pagbabayad. Ipinapaalam nito sa ibang institusyon kung ang pagbabayad ay tinanggap, tinanggihan, nakabinbin, o na-settle.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/tl/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">Direct debit ng kliyente sa pagitan ng mga institusyong pinansyal</td>
          <td class="decision-matrix-table__overview">Ang mensaheng pacs.003 ay nagdadala ng customer direct debit sa pagitan ng mga bangko. Pinapayagan nito ang bangko ng creditor na mangolekta ng pondo mula sa bangko ng debtor.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/tl/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Pagbabalik ng bayad</td>
          <td class="decision-matrix-table__overview">Ang mensaheng pacs.004 ay nagbabalik ng pagbabayad na na-settle na. Nagpapadala ito ng pondo pabalik kapag hindi maaaring ma-apply ang pagbabayad.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/tl/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">Pagbaligtad ng bayad sa pagitan ng mga institusyong pinansyal</td>
          <td class="decision-matrix-table__overview">Ang mensaheng pacs.007 ay nagre-reverse ng naunang instruksiyon sa pagbabayad. Hindi tulad ng pacs.004, nagsisimula ito mula sa orihinal na nagpadala.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/tl/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">Credit transfer ng kliyente sa pagitan ng mga institusyong pinansyal</td>
          <td class="decision-matrix-table__overview">Ang mensaheng pacs.008 ang pangunahing instruksiyon ng customer credit transfer sa pagitan ng mga bangko. Nagdadala ito ng datos ng partido, halaga, at remittance.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/tl/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Credit transfer sa pagitan ng mga institusyong pinansyal</td>
          <td class="decision-matrix-table__overview">Ang mensaheng pacs.009 ay naglilipat ng pondo sa pagitan ng mga bangko para sa kanilang sariling account. Sinusuportahan nito ang financing, cover payment, at pamamahala ng liquidity.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/tl/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Direct debit sa pagitan ng mga institusyong pinansyal</td>
          <td class="decision-matrix-table__overview">The pacs.010 message lets one financial institution debit another institution&#39;s own account. It is for bank-to-bank collections, not customer direct debits.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/tl/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">Kahilingan ng kalagayan ng bayad sa pagitan ng mga institusyong pinansyal</td>
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

- [`pacs.002.001.12`](/tl/pacs.002.001.12/) — Ulat ng kalagayan ng pagbabayad sa pagitan ng mga institusyong pinansyal
- [`pacs.003.001.09`](/tl/pacs.003.001.09/) — Direct debit ng kliyente sa pagitan ng mga institusyong pinansyal
- [`pacs.004.001.11`](/tl/pacs.004.001.11/) — Pagbabalik ng bayad
- [`pacs.007.001.11`](/tl/pacs.007.001.11/) — Pagbaligtad ng bayad sa pagitan ng mga institusyong pinansyal
- [`pacs.008.001.13`](/tl/pacs.008.001.13/) — Credit transfer ng kliyente sa pagitan ng mga institusyong pinansyal
- [`pacs.009.001.10`](/tl/pacs.009.001.10/) — Credit transfer sa pagitan ng mga institusyong pinansyal
- [`pacs.010.001.05`](/tl/pacs.010.001.05/) — Direct debit sa pagitan ng mga institusyong pinansyal
- [`pacs.028.001.05`](/tl/pacs.028.001.05/) — Kahilingan ng kalagayan ng bayad sa pagitan ng mga institusyong pinansyal

