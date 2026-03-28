---
title: "Message Selection Guide | pacs008"
description: Choose the right ISO 20022 pacs message for generation, status reporting, returns, reversals, and payment enquiries.
lang: cs-CZ
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
        <th>Typ zprávy</th>
        <th>Popis</th>
        <th>Přehled</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="decision-matrix-table__id"><a href="/cs/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">Zpráva o stavu platby mezi finančními institucemi</td>
          <td class="decision-matrix-table__overview">Zpráva pacs.002 hlásí stav dřívější platební instrukce. Sděluje druhé instituci, zda byla platba přijata, zamítnuta, čekající nebo vypořádána.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/cs/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">Přímý inkaso zákazníka mezi finančními institucemi</td>
          <td class="decision-matrix-table__overview">Zpráva pacs.003 přenáší přímé inkaso zákazníka mezi bankami. Umožňuje bance věřitele inkasovat prostředky od banky dlužníka.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/cs/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Vrácení platby</td>
          <td class="decision-matrix-table__overview">Zpráva pacs.004 vrací platbu, která již byla vypořádána. Odesílá prostředky zpět, když platbu nelze aplikovat.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/cs/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">Storno platby mezi finančními institucemi</td>
          <td class="decision-matrix-table__overview">Zpráva pacs.007 stornuje dřívější platební instrukci. Na rozdíl od pacs.004 začíná od původního odesílatele.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/cs/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">Úhrada zákazníka mezi finančními institucemi</td>
          <td class="decision-matrix-table__overview">Zpráva pacs.008 je hlavní instrukce zákaznické úhrady mezi bankami. Nese data o stranách, částce a účelu platby.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/cs/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Úhrada mezi finančními institucemi</td>
          <td class="decision-matrix-table__overview">Zpráva pacs.009 se používá pro úhrady mezi vlastními účty finančních institucí. Podporuje mezibankovní financování, krycí platby a řízení likvidity.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/cs/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Přímý inkaso mezi finančními institucemi</td>
          <td class="decision-matrix-table__overview">Zpráva pacs.010 se používá pro přímé inkaso mezi vlastními účty finančních institucí. Umožňuje jedné instituci inkasovat prostředky přímo z účtu druhé instituce.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/cs/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">Dotaz na stav platby mezi finančními institucemi</td>
          <td class="decision-matrix-table__overview">Zpráva pacs.028 se používá k dotazu na stav dříve odeslané platební instrukce. Umožňuje aktivní sledování zpracování plateb bez čekání na stavové zprávy.</td>
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

- [`pacs.002.001.12`](/cs/pacs.002.001.12/) — Zpráva o stavu platby mezi finančními institucemi
- [`pacs.003.001.09`](/cs/pacs.003.001.09/) — Přímý inkaso zákazníka mezi finančními institucemi
- [`pacs.004.001.11`](/cs/pacs.004.001.11/) — Vrácení platby
- [`pacs.007.001.11`](/cs/pacs.007.001.11/) — Storno platby mezi finančními institucemi
- [`pacs.008.001.13`](/cs/pacs.008.001.13/) — Úhrada zákazníka mezi finančními institucemi
- [`pacs.009.001.10`](/cs/pacs.009.001.10/) — Úhrada mezi finančními institucemi
- [`pacs.010.001.05`](/cs/pacs.010.001.05/) — Přímý inkaso mezi finančními institucemi
- [`pacs.028.001.05`](/cs/pacs.028.001.05/) — Dotaz na stav platby mezi finančními institucemi

