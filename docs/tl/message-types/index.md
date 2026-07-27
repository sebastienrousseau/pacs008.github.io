---
title: "Mga Uri ng Mensahe | pacs008 ISO 20022"
description: Mga sinusuportahang ISO 20022 pacs na kahulugan ng mensahe at mga bersyon.
lang: tl-PH
lastUpdated: true
image: /logo.webp
---

# Mga Uri ng Mensahe

Sinasaklaw ng pacs008 ang pangunahing kahulugan ng mensaheng pacs.008 at mga kaugnay na mensahe na ginagamit sa orchestration at reconciliation flows.

## Kasama ang suporta

<div class="message-coverage-table" tabindex="0" aria-label="Kasama ang suporta">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Uri ng mensahe</th>
        <th>Paglalarawan</th>
        <th>Taon</th>
        <th>Pangkalahatang-ideya</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/tl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">Ulat ng kalagayan ng pagbabayad sa pagitan ng mga institusyong pinansyal</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Ang mensaheng pacs.002 ay nag-uulat ng katayuan ng naunang instruksiyon sa pagbabayad. Ipinapaalam nito sa ibang institusyon kung ang pagbabayad ay tinanggap, tinanggihan, nakabinbin, o na-settle.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/tl/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">Direct debit ng kliyente sa pagitan ng mga institusyong pinansyal</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Ang mensaheng pacs.003 ay nagdadala ng customer direct debit sa pagitan ng mga bangko. Pinapayagan nito ang bangko ng creditor na mangolekta ng pondo mula sa bangko ng debtor.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/tl/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">Pagbabalik ng bayad</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Ang mensaheng pacs.004 ay nagbabalik ng pagbabayad na na-settle na. Nagpapadala ito ng pondo pabalik kapag hindi maaaring ma-apply ang pagbabayad.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/tl/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">Pagbaligtad ng bayad sa pagitan ng mga institusyong pinansyal</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Ang mensaheng pacs.007 ay nagre-reverse ng naunang instruksiyon sa pagbabayad. Hindi tulad ng pacs.004, nagsisimula ito mula sa orihinal na nagpadala.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/tl/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">Credit transfer ng kliyente sa pagitan ng mga institusyong pinansyal</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">Ang mensaheng pacs.008 ang pangunahing instruksiyon ng customer credit transfer sa pagitan ng mga bangko. Nagdadala ito ng datos ng partido, halaga, at remittance.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/tl/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">Credit transfer sa pagitan ng mga institusyong pinansyal</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Ang mensaheng pacs.009 ay naglilipat ng pondo sa pagitan ng mga bangko para sa kanilang sariling account. Sinusuportahan nito ang financing, cover payment, at pamamahala ng liquidity.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/tl/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">Direct debit sa pagitan ng mga institusyong pinansyal</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.010 message lets one financial institution debit another institution&#39;s own account. It is for bank-to-bank collections, not customer direct debits.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/tl/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">Kahilingan ng kalagayan ng bayad sa pagitan ng mga institusyong pinansyal</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.028 message asks another institution for the status of an earlier payment. It is a targeted status query for delayed, unclear, or missing payment updates.</td>
        </tr>
    </tbody>
  </table>
</div>

## Modelo ng paghahatid

Bawat sinusuportahang uri ng mensahe ay may mga template resource at validation logic para ma-standardize ng mga team ang generation at regression testing sa maraming downstream pipeline.

## Konteksto ng merkado 2026

- **SEPA SCT / SCT Inst**: Nananatili ang pacs.008 bilang sentro para sa credit transfer at instant payment processing.
- **CBPR+**: Patuloy na pinapalitan ng pacs.008 ang mga cross-border payload na estilo ng MT103 ng mas mayamang structured na datos.
- **Structured address**: Ang kasalukuyang gabay sa merkado ay tumuturo sa pagbabago mula sa ganap na unstructured na postal address sa Nobyembre 2026.
- **Serial method at STP**: Mahalaga pa rin ang mga multi-hop bank-to-bank chain, at kritikal ang mga variant ng straight-through processing para sa operational efficiency.

## Mga kakayahang operational

Nagbibigay ang pacs008 ng template-based generation at validation sa mga sinusuportahang message definition revision:

- ihambing ang mga bersyon
- regression-test ang mga update sa schema
- palakasin ang datos ng outbound na mensahe ng pagbabayad bago i-release
- suportahan ang mga team ng produkto, operasyon, at migrasyon mula sa iisang codebase

