---
title: ISO 20022 Message Selection — Choose the Right pacs Type
description: Choose the right ISO 20022 pacs message for generation, status reporting, returns, reversals, and payment enquiries.
lang: en-GB
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
        <th>Message type</th>
        <th>Description</th>
        <th>Overview</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">FI to FI Payment Status Report</td>
          <td class="decision-matrix-table__overview">The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether the payment was accepted, rejected, pending, or settled.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">FI to FI Customer Direct Debit</td>
          <td class="decision-matrix-table__overview">The pacs.003 message carries a customer direct debit between banks. It lets the creditor bank collect funds from the debtor bank.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Payment Return</td>
          <td class="decision-matrix-table__overview">The pacs.004 message returns a payment that has already settled. It sends funds back when a payment cannot be applied.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">FI to FI Payment Reversal</td>
          <td class="decision-matrix-table__overview">The pacs.007 message reverses an earlier payment instruction. Unlike pacs.004, it starts from the original sender.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">FI to FI Customer Credit Transfer</td>
          <td class="decision-matrix-table__overview">The pacs.008 message is the main customer credit-transfer instruction between banks. It carries party, amount, and remittance data.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Financial Institution Credit Transfer</td>
          <td class="decision-matrix-table__overview">The pacs.009 message moves funds between banks on their own behalf. It supports funding, cover payments, and liquidity management.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Financial Institution Direct Debit</td>
          <td class="decision-matrix-table__overview">The pacs.010 message lets one financial institution debit another institution&#39;s own account. It is for bank-to-bank collections, not customer direct debits.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">FI to FI Payment Status Request</td>
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

Supported message pages are listed in [Message Types](/message-types/).

## How to choose fast

- Start with the business event.
- Check who owns the payment at that stage.
- Check whether value is moving, being reported, being returned, or being queried.
- Confirm the scheme and counterparty rules before freeze the template.

## 2026 implementation signals

- Structured address quality is moving from best practice to release gate.
- Banks want less manual repair, so status design and field quality matter as much as XML generation.
- Multi-rail teams need one clear map across customer, treasury, and exception flows.

