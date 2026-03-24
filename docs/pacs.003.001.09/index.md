---
title: pacs.003.001.09 | FI to FI Customer Direct Debit | pacs008
description: The pacs.003 message executes a customer direct debit between financial institutions. It lets the creditor bank collect funds from the debtor bank.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO name</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Registration status</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Year</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Version</strong></td>
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## Overview

The pacs.003 message executes a customer direct debit between financial institutions. It lets the creditor bank collect funds from the debtor bank.

> Reviewed 23 March 2026. ISO catalogue date: 2025-02-27.

## Key data elements

- **GrpHdr** — Group Header with message identification and settlement information.
- **DrctDbtTxInf** — Direct Debit Transaction Information with amount and parties.
- **Cdtr** — Creditor identification and account details.
- **CdtrAgt** — Creditor Agent (collecting institution) identification.
- **DbtrAgt** — Debtor Agent (paying institution) identification.

## Business context

- Supports SEPA Core and B2B direct debit schemes.
- Used for recurring collections such as subscriptions, utility bills, and loan repayments.
- Needs a valid mandate reference between debtor and creditor.
- Supports bulk collection of multiple direct debits in one message.

<div class="operational-matrix-table" tabindex="0" aria-label="Key data elements Business context">
  <table>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Key data elements</th>
        <th>Business context</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header with message identification and settlement information</td>
          <td class="operational-matrix-table__right">Supports SEPA Core and B2B direct debit schemes</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Direct Debit Transaction Information with amount and parties</td>
          <td class="operational-matrix-table__right">Used for recurring collections such as subscriptions, utility bills, and loan repayments</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Creditor identification and account details</td>
          <td class="operational-matrix-table__right">Needs a valid mandate reference between debtor and creditor</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Creditor Agent (collecting institution) identification</td>
          <td class="operational-matrix-table__right">Supports bulk collection of multiple direct debits in one message</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Debtor Agent (paying institution) identification</td>
          <td class="operational-matrix-table__right">The creditor agent sends pacs.003 to the debtor agent to collect funds. The debtor agent checks the mandate and either settles or returns the transaction.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ and scheme context

- Structured address and party data rules apply to direct debits as well.
- Mandate-related data must be fully structured from November 2026.
- It replaces older MT104-style direct-debit formats in cross-border flows.
- Creditor scheme identifiers are under closer validation.

## Message flow

The creditor agent sends pacs.003 to the debtor agent to collect funds. The debtor agent checks the mandate and either settles or returns the transaction.

## Version commentary

ISO 20022 last updated this business area on 2025-02-27. This site documents `pacs.003.001.09`. The latest catalogue version is `pacs.003.001.11`.

Use this page for the version that pacs008 implements today, and review the newer catalogue version for roadmap planning.

## Version-diff table

<div class="version-diff-table" tabindex="0" aria-label="Version-diff table">
  <table>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Version range</th>
        <th>Why it matters</th>
        <th>Implementation takeaway</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">Current implementation in pacs008</td>
          <td class="version-diff-table__takeaway">Useful for direct-debit reference modelling in the current project.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">Later catalogue revisions</td>
          <td class="version-diff-table__takeaway">Check later revisions for mandate, status, and interoperability updates before greenfield use.</td>
        </tr>
    </tbody>
  </table>
</div>

## Scheme-specific notes

- This message is outside the SCT and SCT Inst credit-transfer rulebooks, so treat it as a separate direct-debit track.
- Use this page as a message guide, not as a substitute for scheme rulebooks.

## When to use this message

Use pacs.003 for customer direct-debit collection between financial institutions.

## When not to use this message

Do not use pacs.003 for institution-own-account debits or customer credit transfers.

## Implementation notes

- Mandate and debtor-account data usually matter more than XML alone.
- Scheme timing, cutoffs, and return rights vary, so keep that logic outside the generic message model.
- Store collection references separately from invoice references.

## Common failure modes

- Treating mandate data as optional operational context.
- Failing to align debtor account checks with scheme-specific rules.
- Ignoring return and reversal flows when designing the original debit pipeline.

## Worked XML fragment

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Field commentary

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: Direct-debit success often depends more on account and mandate quality than on XML structure.

## Decision flow

```text
Need an FI-to-FI customer direct debit?
Yes -> Use pacs.003.
No -> Need a customer credit transfer?
Yes -> Use pacs.008 instead.
No -> Re-check whether the business case is a direct debit at all.
```

## Implementation FAQ

### Is pacs.003 the direct-debit mirror of pacs.008?

No. It handles customer direct-debit flows, which have different mandate, timing, and exception rules.

### What matters most operationally?

Mandate quality, debtor-account rules, and return handling matter more than XML generation alone.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Related messages
<div class="related-messages-table" tabindex="0" aria-label="Related messages">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
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
          <td class="related-messages-table__id"><a href="/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Payment Return</td>
          <td class="related-messages-table__overview">The pacs.004 message returns a payment that has already settled. It sends funds back when a payment cannot be applied or must be sent back.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">FI to FI Payment Reversal</td>
          <td class="related-messages-table__overview">The pacs.007 message reverses an earlier payment instruction. Unlike pacs.004, it starts from the original sender.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI to FI Payment Status Report</td>
          <td class="related-messages-table__overview">The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether the payment was accepted, rejected, pending, or settled.</td>
        </tr>
    </tbody>
  </table>
</div>

