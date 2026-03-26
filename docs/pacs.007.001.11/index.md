---
title: "pacs.007.001.11 | FI to FI Payment Reversal | pacs008"
description: The pacs.007 message reverses an earlier payment instruction. Unlike pacs.004, it starts from the original sender.
lang: en-GB
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.007 only for fraud scenarios?"
    answer: "No. Fraud is a major use case, but any instructing-side need to reverse a payment can trigger it."
  - question: "Can it be handled like a normal return?"
    answer: "No. Reversal timing, reason capture, and reconciliation differ materially from returns."
---

# pacs.007.001.11 — FI to FI Payment Reversal

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Field</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO name</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Overview

The pacs.007 message reverses an earlier payment instruction. Unlike pacs.004, it starts from the original sender.

> Reviewed 23 March 2026. ISO catalogue date: 2025-02-27.

## Key data elements

- **GrpHdr** — Group Header with message identification and creation timestamp.
- **TxInf** — Transaction Information with reversal amount and parties.
- **OrgnlGrpInf** — Original Group Information referencing the source message.
- **RvslRsnInf** — Reversal Reason Information with structured reason codes.
- **OrgnlTxRef** — Original Transaction Reference for end-to-end traceability.

## Business context

- Used when the original sender finds an error before or after settlement.
- Used in fraud cases that need fast reversal.
- Supports both full and partial reversal of original payment amounts.
- Carries structured reversal reason codes.

<div class="operational-matrix-table" tabindex="0" aria-label="Key data elements Business context">
  <table>
    <caption>Key data elements and business context</caption>
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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header with message identification and creation timestamp</td>
          <td class="operational-matrix-table__right">Used when the original sender finds an error before or after settlement</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Transaction Information with reversal amount and parties</td>
          <td class="operational-matrix-table__right">Used in fraud cases that need fast reversal</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Original Group Information referencing the source message</td>
          <td class="operational-matrix-table__right">Supports both full and partial reversal of original payment amounts</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Reversal Reason Information with structured reason codes</td>
          <td class="operational-matrix-table__right">Carries structured reversal reason codes</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Original Transaction Reference for end-to-end traceability</td>
          <td class="operational-matrix-table__right">The instructing agent sends pacs.007 forward through the payment chain to reverse an earlier payment. Each agent processes the reversal and adjusts settlement.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ and scheme context

- It differs from pacs.004 by direction: reversals move forward, returns move back.
- CBPR+ requires pairing with original message identifiers for automated matching.
- Structured reason codes replace free-text narratives from legacy MT messages.
- Used more often in instant-payment recall and fraud workflows.

## Message flow

The instructing agent sends pacs.007 forward through the payment chain to reverse an earlier payment. Each agent processes the reversal and adjusts settlement.

## Version commentary

ISO 20022 last updated this business area on 2025-02-27. This site documents `pacs.007.001.11`. The latest catalogue version is `pacs.007.001.13`.

Use this page for the version that pacs008 implements today, and review the newer catalogue version for roadmap planning.

## Version-diff table

<div class="version-diff-table" tabindex="0" aria-label="Version-diff table">
  <table>
    <caption>Version history and implementation guidance</caption>
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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">Current implementation in pacs008</td>
          <td class="version-diff-table__takeaway">Good baseline for reversal workflow modelling.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">Later catalogue revisions</td>
          <td class="version-diff-table__takeaway">Check later revisions for current market-infrastructure alignment.</td>
        </tr>
    </tbody>
  </table>
</div>

## Scheme-specific notes

- pacs.007 is closer to recall and reversal handling than to beneficiary-side returns, so do not collapse it into the same process model as pacs.004.
- It is often used for fast exception handling in instant-payment and fraud-response contexts.

## When to use this message

Use pacs.007 when the original sender needs to reverse an earlier payment instruction.

## When not to use this message

Do not use pacs.007 to report status or to process a beneficiary-side return.

## Implementation notes

- Make reversal timing explicit.
- Keep reversal reasons structured.
- Track partial and full reversals separately.

## Common failure modes

- Modeling pacs.007 as just another return message.
- Not preserving the original transaction chain in reconciliation records.
- Using inconsistent reversal reason mapping across channels.

## Worked XML fragment

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### Field commentary

- `MsgId`: The reversal needs its own identifier.
- `OrgnlInstrId`: Preserve the original payment reference to avoid reconciliation breaks.
- `RvslRsnInf`: Use structured reversal reasons so cases can be routed correctly.

## Decision flow

```text
Is the instructing side requesting reversal of an earlier instruction?
Yes -> Use pacs.007.
No -> Has the receiving side already returned settled funds?
Yes -> Consider pacs.004 instead.
No -> Check whether the case is status, investigation, or recall handling.
```

## Compare pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="Compare pacs.007 vs pacs.004">
  <table>
    <caption>Comparison of pacs.007.001.11 and pacs.004</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.007.001.11</th>
        <th>Comparison message</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Primary purpose</td>
          <td class="message-comparison-table__current">Reverse a previously instructed payment</td>
          <td class="message-comparison-table__other">Return settled funds</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Original instructing side</td>
          <td class="message-comparison-table__other">Receiving / beneficiary side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Forward through the chain</td>
          <td class="message-comparison-table__other">Back through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Best fit</td>
          <td class="message-comparison-table__current">Recall, error, or fraud-driven reversal handling</td>
          <td class="message-comparison-table__other">Post-settlement return handling</td>
        </tr>
    </tbody>
  </table>
</div>

## Implementation FAQ

### Is pacs.007 only for fraud scenarios?

No. Fraud is a major use case, but any instructing-side need to reverse a payment can trigger it.

### Can it be handled like a normal return?

No. Reversal timing, reason capture, and reconciliation differ materially from returns.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">FI to FI Customer Credit Transfer</td>
          <td class="related-messages-table__overview">The pacs.008 message is the main customer credit-transfer instruction between banks. It carries party, amount, and remittance data.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Payment Return</td>
          <td class="related-messages-table__overview">The pacs.004 message returns a payment that has already settled. It sends funds back when a payment cannot be applied.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI to FI Payment Status Report</td>
          <td class="related-messages-table__overview">The pacs.002 message reports the status of an earlier payment instruction. It tells another institution whether the payment was accepted, rejected, pending, or settled.</td>
        </tr>
    </tbody>
  </table>
</div>

