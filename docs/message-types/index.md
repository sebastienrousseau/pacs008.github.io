---
title: Supported ISO 20022 message types | pacs008
description: Browse the ISO 20022 pacs messages supported by pacs008 and see where each message fits in the payment lifecycle.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# Message Types

pacs008 covers the core pacs.008 message and the related pacs messages used for status, returns, reversals, and enquiries.

> Last reviewed against primary sources on 23 March 2026 using ISO 20022, EPC, and Swift public materials referenced on this page.

## Included support

<div class="message-coverage-table" tabindex="0" aria-label="Included support">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Message type</th>
        <th>Description</th>
        <th>Year</th>
        <th>Overview</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">FI to FI Payment Status Report</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether processing was accepted, rejected, pending, or settled.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">FI to FI Customer Direct Debit</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.003 message executes a customer direct debit between financial institutions. It lets the creditor bank collect funds from the debtor bank.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">Payment Return</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.004 message returns a payment that has already settled. It sends funds back when a payment cannot be applied or must be sent back.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">FI to FI Payment Reversal</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.007 message reverses an earlier payment instruction. Unlike pacs.004, it starts from the original instructing side.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">FI to FI Customer Credit Transfer</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">The pacs.008 message is the main customer credit-transfer instruction between financial institutions. It carries party, amount, and remittance data.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">Financial Institution Credit Transfer</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.009 message moves funds between financial institutions on their own behalf. It supports interbank funding, cover payments, and liquidity management.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">Financial Institution Direct Debit</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.010 message lets one financial institution debit another institution&#39;s own account. It is used for institution-to-institution collections, not for customer mandate payments.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">FI to FI Payment Status Request</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.028 message asks another institution for the status of an earlier payment. It is a targeted status query for delayed, unclear, or missing payment updates.</td>
        </tr>
    </tbody>
  </table>
</div>

## Delivery model

Each supported message comes with templates and validation rules. Teams can use the same assets in local tests, CI, and internal payment services.

## Choosing the right message

Start with the business event, not the message code.

- `pacs.008` starts the customer credit-transfer flow.
- `pacs.009` handles institution-own-account credit transfers and cover flows.
- `pacs.002` reports processing status.
- `pacs.028` requests status when a proactive query is needed.
- `pacs.004` returns settled funds.
- `pacs.007` reverses an earlier payment instruction.

Use the [message selection guide](/message-selection/) for a one-page view across the supported pacs flows.


## 2026 market context

- **SEPA SCT / SCT Inst**: pacs.008 remains central to credit transfers and instant payments.
- **CBPR+**: pacs.008 keeps replacing MT103-style cross-border traffic with more structured data.
- **Structured addresses**: market guidance points to a November 2026 move away from fully unstructured postal addresses.
- **Serial method and STP**: multi-leg bank chains still matter, and straight-through processing still drives efficiency.

## Operational capabilities

pacs008 provides template-backed generation and validation across supported message definition revisions:

- compare versions.
- regression-test scheme updates.
- strengthen outbound payment message data before release.
- support product, operations, and migration teams from one codebase.

