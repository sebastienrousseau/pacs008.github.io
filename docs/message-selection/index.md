---
title: Message Selection Guide | pacs008
description: Choose the right ISO 20022 pacs message for generation, status reporting, returns, reversals, and enquiries.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# Message Selection Guide

Choose the pacs family by business event first, then by scheme and operating model.

> Last reviewed against primary sources on 23 March 2026 using ISO 20022, EPC, and Swift public materials referenced on this page.

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
        <th>Message type</th>
        <th>Description</th>
        <th>Overview</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">FI to FI Payment Status Report</td>
          <td class="decision-matrix-table__overview">The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation, rejection, or pending status information for individual transactions within a payment message.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">FI to FI Customer Direct Debit</td>
          <td class="decision-matrix-table__overview">The pacs.003 message is exchanged between financial institutions to execute a customer direct debit instruction. It enables the creditor&#39;s bank to collect funds from the debtor&#39;s bank on behalf of the creditor.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Payment Return</td>
          <td class="decision-matrix-table__overview">The pacs.004 message is used to return a previously settled payment transaction. It reverses the flow of funds when a payment cannot be applied, was sent in error, or is being recalled by the originating institution.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">FI to FI Payment Reversal</td>
          <td class="decision-matrix-table__overview">The pacs.007 message is used to reverse a previously sent payment instruction that has not yet been settled or to request reversal of a settled payment. Unlike pacs.004 (return), it is initiated by the original instructing agent.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">FI to FI Customer Credit Transfer</td>
          <td class="decision-matrix-table__overview">The pacs.008 message is the core payment instruction exchanged between financial institutions to transfer funds on behalf of a customer. It carries debtor, creditor, amount, and remittance information for one or more credit transfer transactions.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Financial Institution Credit Transfer</td>
          <td class="decision-matrix-table__overview">The pacs.009 message is used for credit transfers between financial institutions where the transfer is on the institution&#39;s own behalf rather than on behalf of a customer. It supports interbank funding, cover payments, and liquidity management.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Financial Institution Direct Debit</td>
          <td class="decision-matrix-table__overview">The pacs.010 message is used between financial institutions for direct debit transactions on the institution&#39;s own account. It enables one institution to collect funds directly from another institution&#39;s account.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">FI to FI Payment Status Request</td>
          <td class="decision-matrix-table__overview">The pacs.028 message is sent by a financial institution to request the status of a previously sent payment instruction. It enables proactive tracking of payment processing without waiting for an unsolicited status report.</td>
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

- [`pacs.002.001.12`](/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.13`](/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/pacs.028.001.05/) — FI to FI Payment Status Request

