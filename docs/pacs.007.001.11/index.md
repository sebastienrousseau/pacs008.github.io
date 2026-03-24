---
title: pacs.007.001.11 | FI to FI Payment Reversal | pacs008
description: The pacs.007 message is used to reverse a previously sent payment instruction that has not yet been settled or to request reversal of a settled payment...
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **ISO name** | FIToFIPaymentReversalV11 |
| **Registration status** | Registered |
| **Year** | 2019 |
| **Version** | 11 |

## Overview

The pacs.007 message is used to reverse a previously sent payment instruction that has not yet been settled or to request reversal of a settled payment. Unlike pacs.004 (return), it is initiated by the original instructing agent.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Key data elements

- **GrpHdr** — Group Header with message identification and creation timestamp
- **TxInf** — Transaction Information with reversal amount and parties
- **OrgnlGrpInf** — Original Group Information referencing the source message
- **RvslRsnInf** — Reversal Reason Information with structured reason codes
- **OrgnlTxRef** — Original Transaction Reference for end-to-end traceability

## Business context

- Initiated when the original sender identifies an error before or after settlement
- Used in fraud scenarios where rapid reversal is required
- Supports both full and partial reversal of original payment amounts
- Carries structured reversal reason codes for downstream processing

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header with message identification and creation timestamp</td>
          <td class="operational-matrix-table__right">Initiated when the original sender identifies an error before or after settlement</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Transaction Information with reversal amount and parties</td>
          <td class="operational-matrix-table__right">Used in fraud scenarios where rapid reversal is required</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Original Group Information referencing the source message</td>
          <td class="operational-matrix-table__right">Supports both full and partial reversal of original payment amounts</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Reversal Reason Information with structured reason codes</td>
          <td class="operational-matrix-table__right">Carries structured reversal reason codes for downstream processing</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Original Transaction Reference for end-to-end traceability</td>
          <td class="operational-matrix-table__right">The instructing agent (original sender) sends pacs.007 forward through the payment chain to reverse a previously instructed payment. Each agent processes the reversal instruction and adjusts settlement accordingly.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ and scheme context

- Distinguished from pacs.004 by direction — reversal flows forward from originator, return flows backward from beneficiary
- CBPR+ requires pairing with original message identifiers for automated matching
- Structured reason codes replace free-text narratives from legacy MT messages
- Increasingly used in instant payment recall and fraud prevention workflows

## Message flow

The instructing agent (original sender) sends pacs.007 forward through the payment chain to reverse a previously instructed payment. Each agent processes the reversal instruction and adjusts settlement accordingly.

## Version commentary

The ISO 20022 catalogue entry for this business area was last updated on 2025-02-27. The pacs008 site currently documents `pacs.007.001.11`, while the ISO 20022 catalogue lists `pacs.007.001.13` as the latest published version.

That means this page is useful for understanding the currently implemented version in pacs008, but roadmap and interoperability planning should account for the later catalogue revision as well.

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

- pacs.007 is operationally closer to recall and reversal handling than to beneficiary-side returns, so teams should not collapse it into the same process model as pacs.004. That is an implementation inference from the message roles and Swift CBPR+ payment-instruction scope.
- This message is relevant to fast exception handling in instant-payment and fraud-response contexts even where scheme-specific operating rules sit outside the generic message definition.

Source links below point to primary standards bodies or scheme operators. Where a note goes beyond a direct statement, it is an implementation inference from those sources.

## When to use this message

Use pacs.007 when the original sender needs to request that a previously instructed payment be reversed, often because of an operational error or fraud scenario.

## When not to use this message

Do not use pacs.007 to report status or to process a beneficiary-side return after the receiving institution has already decided to send funds back.

## Implementation notes

- Fraud and recall handling often require tighter time controls than standard exception processing, so reversal orchestration should be explicit.
- Keep reversal reason capture structured; free text alone is rarely enough for audit and analytics.
- Track partial and full reversal outcomes separately because treasury and reconciliation impacts differ.

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

- `MsgId`: The reversal itself needs its own audit-safe identifier.
- `OrgnlInstrId`: Preserve the original payment reference to avoid reconciliation breaks.
- `RvslRsnInf`: Use structured reversal reasons so fraud, error, and duplicate-payment cases can be routed differently.

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
          <td class="related-messages-table__overview">The pacs.008 message is the core payment instruction exchanged between financial institutions to transfer funds on behalf of a customer. It carries debtor, creditor, amount, and remittance information for one or more credit transfer transactions.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Payment Return</td>
          <td class="related-messages-table__overview">The pacs.004 message is used to return a previously settled payment transaction. It reverses the flow of funds when a payment cannot be applied, was sent in error, or is being recalled by the originating institution.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI to FI Payment Status Report</td>
          <td class="related-messages-table__overview">The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation, rejection, or pending status information for individual transactions within a payment message.</td>
        </tr>
    </tbody>
  </table>
</div>

