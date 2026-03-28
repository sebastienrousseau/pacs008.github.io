---
title: "Typy zpráv | pacs008 ISO 20022"
description: Podporované definice a verze zpráv ISO 20022 pacs.
lang: cs-CZ
lastUpdated: true
image: /logo.webp
---

# Typy zpráv

pacs008 pokrývá hlavní definici zprávy pacs.008 a související zprávy používané v orchestračních a rekonciliačních tocích.

## Zahrnutá podpora

<div class="message-coverage-table" tabindex="0" aria-label="Zahrnutá podpora">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Typ zprávy</th>
        <th>Popis</th>
        <th>Rok</th>
        <th>Přehled</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/cs/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">Zpráva o stavu platby mezi finančními institucemi</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Zpráva pacs.002 hlásí stav dřívější platební instrukce. Sděluje druhé instituci, zda byla platba přijata, zamítnuta, čekající nebo vypořádána.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/cs/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">Přímý inkaso zákazníka mezi finančními institucemi</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Zpráva pacs.003 přenáší přímé inkaso zákazníka mezi bankami. Umožňuje bance věřitele inkasovat prostředky od banky dlužníka.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/cs/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">Vrácení platby</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Zpráva pacs.004 vrací platbu, která již byla vypořádána. Odesílá prostředky zpět, když platbu nelze aplikovat.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/cs/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">Storno platby mezi finančními institucemi</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Zpráva pacs.007 stornuje dřívější platební instrukci. Na rozdíl od pacs.004 začíná od původního odesílatele.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/cs/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">Úhrada zákazníka mezi finančními institucemi</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">Zpráva pacs.008 je hlavní instrukce zákaznické úhrady mezi bankami. Nese data o stranách, částce a účelu platby.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/cs/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">Úhrada mezi finančními institucemi</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Zpráva pacs.009 se používá pro úhrady mezi vlastními účty finančních institucí. Podporuje mezibankovní financování, krycí platby a řízení likvidity.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/cs/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">Přímý inkaso mezi finančními institucemi</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Zpráva pacs.010 se používá pro přímé inkaso mezi vlastními účty finančních institucí. Umožňuje jedné instituci inkasovat prostředky přímo z účtu druhé instituce.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/cs/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">Dotaz na stav platby mezi finančními institucemi</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Zpráva pacs.028 se používá k dotazu na stav dříve odeslané platební instrukce. Umožňuje aktivní sledování zpracování plateb bez čekání na stavové zprávy.</td>
        </tr>
    </tbody>
  </table>
</div>

## Model dodávky

Každý podporovaný typ zprávy obsahuje šablony a validační logiku, takže týmy mohou standardizovat generování a regresní testování napříč několika navazujícími kanály.

## Kontext trhu 2026

- **SEPA SCT / SCT Inst**: pacs.008 zůstává klíčový pro úhrady a okamžité platby.
- **CBPR+**: pacs.008 pokračuje v nahrazování přeshraničních dat ve formátu MT103 bohatšími strukturovanými daty.
- **Strukturované adresy**: aktuální tržní pokyny směřují k přechodu od plně nestrukturovaných poštovních adres v listopadu 2026.
- **Sériová metoda a STP**: vícestupňové mezibankovní řetězce zůstávají důležité a varianty přímého zpracování jsou klíčové pro provozní efektivitu.

## Provozní schopnosti

pacs008 poskytuje generování a validaci na základě šablon napříč podporovanými revizemi definic zpráv:

- porovnání verzí
- regresní testování aktualizací schémat
- posílení dat odchozích platebních zpráv před vydáním
- podpora produktových, provozních a migračních týmů z jednoho codebase

