---
title: Message Types | pacs008 ISO 20022
description: Supported ISO 20022 pacs message definitions and versions. Generation, validation, API orchestration, and compliance support for FI-to-FI customer credit...
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# Message Types

pacs008 covers the core pacs.008 message definition and related messages used in orchestration and reconciliation flows.

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
          <td class="message-coverage-table__overview">The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation, rejection, or pending status information for individual transactions within a payment message.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">FI to FI Customer Direct Debit</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.003 message is exchanged between financial institutions to execute a customer direct debit instruction. It enables the creditor&#39;s bank to collect funds from the debtor&#39;s bank on behalf of the creditor.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">Payment Return</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.004 message is used to return a previously settled payment transaction. It reverses the flow of funds when a payment cannot be applied, was sent in error, or is being recalled by the originating institution.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">FI to FI Payment Reversal</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.007 message is used to reverse a previously sent payment instruction that has not yet been settled or to request reversal of a settled payment. Unlike pacs.004 (return), it is initiated by the original instructing agent.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">FI to FI Customer Credit Transfer</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">The pacs.008 message is the core payment instruction exchanged between financial institutions to transfer funds on behalf of a customer. It carries debtor, creditor, amount, and remittance information for one or more credit transfer transactions.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">Financial Institution Credit Transfer</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.009 message is used for credit transfers between financial institutions where the transfer is on the institution&#39;s own behalf rather than on behalf of a customer. It supports interbank funding, cover payments, and liquidity management.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">Financial Institution Direct Debit</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.010 message is used between financial institutions for direct debit transactions on the institution&#39;s own account. It enables one institution to collect funds directly from another institution&#39;s account.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">FI to FI Payment Status Request</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">The pacs.028 message is sent by a financial institution to request the status of a previously sent payment instruction. It enables proactive tracking of payment processing without waiting for an unsolicited status report.</td>
        </tr>
    </tbody>
  </table>
</div>

## Delivery model

Each supported message type is backed by template assets and validation logic so teams can standardise generation and regression testing across multiple downstream channels.

## Choosing the right message

The message catalogue matters most when teams need to decide which message initiates work, which message reports status, and which message corrects or reverses the flow.

- `pacs.008` starts the customer credit-transfer flow.
- `pacs.009` handles institution-own-account credit transfers and cover flows.
- `pacs.002` reports processing status.
- `pacs.028` requests status when a proactive query is needed.
- `pacs.004` returns settled funds.
- `pacs.007` reverses an earlier payment instruction.

See the dedicated [message selection guide](/message-selection/) for a one-page decision view across all supported pacs flows.


## 2026 market context

- **SEPA SCT / SCT Inst**: pacs.008 remains central for credit transfer exchange and instant-payment processing.
- **CBPR+**: pacs.008 continues to replace MT103-style cross-border payloads with richer structured data.
- **Structured addresses**: current market guidance and bank readiness material point to the November 2026 cutover away from fully unstructured postal addresses.
- **Serial method and STP**: multi-leg bank-to-bank chains still matter, and straight-through variants remain important for operational efficiency.

## Operational capabilities

pacs008 provides template-backed generation and validation across supported message definition revisions:

- compare versions
- regression-test scheme updates
- strengthen outbound payment message data before release
- support product, operations, and migration teams from one codebase

