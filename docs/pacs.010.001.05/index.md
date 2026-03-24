---
title: pacs.010.001.05 | Financial Institution Direct Debit | pacs008
description: The pacs.010 message is used between financial institutions for direct debit transactions on the institution's own account. It enables one institution to...
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **ISO name** | FinancialInstitutionDirectDebitV05 |
| **Registration status** | Registered |
| **Year** | 2019 |
| **Version** | 5 |

## Overview

The pacs.010 message is used between financial institutions for direct debit transactions on the institution's own account. It enables one institution to collect funds directly from another institution's account.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Key data elements

- **GrpHdr** — Group Header with message identification and settlement information
- **DrctDbtTxInf** — Direct Debit Transaction Information with collection amount
- **Cdtr / CdtrAgt** — Creditor institution and its agent identification
- **Dbtr / DbtrAgt** — Debtor institution and its agent identification
- **IntrBkSttlmAmt** — Interbank Settlement Amount in the settlement currency

## Business context

- Supports interbank direct debit collection between financial institutions
- Used for fee collection, margin calls, and institutional settlement obligations
- Requires pre-agreed bilateral arrangements between participating institutions
- Critical for institutional cash management and interbank settlement cycles

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
          <td class="operational-matrix-table__right">Supports interbank direct debit collection between financial institutions</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Direct Debit Transaction Information with collection amount</td>
          <td class="operational-matrix-table__right">Used for fee collection, margin calls, and institutional settlement obligations</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Creditor institution and its agent identification</td>
          <td class="operational-matrix-table__right">Requires pre-agreed bilateral arrangements between participating institutions</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Debtor institution and its agent identification</td>
          <td class="operational-matrix-table__right">Critical for institutional cash management and interbank settlement cycles</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Interbank Settlement Amount in the settlement currency</td>
          <td class="operational-matrix-table__right">The creditor institution sends pacs.010 to the debtor institution to collect funds under a pre-agreed arrangement. The debtor institution validates the request and settles or rejects the direct debit.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ and scheme context

- Replaces elements of MT204 for interbank direct debit processing
- Structured party identification follows the same requirements as other pacs messages
- Validation of institutional identifiers (BIC, LEI) is mandatory
- Included in full ISO 20022 adoption roadmaps across market infrastructures

## Message flow

The creditor institution sends pacs.010 to the debtor institution to collect funds under a pre-agreed arrangement. The debtor institution validates the request and settles or rejects the direct debit.

## Version commentary

The ISO 20022 catalogue entry for this business area was last updated on 2025-02-27. The pacs008 site currently documents `pacs.010.001.05`, while the ISO 20022 catalogue lists `pacs.010.001.06` as the latest published version.

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">Current implementation in pacs008</td>
          <td class="version-diff-table__takeaway">Reference point for institution direct-debit support in the current project.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">Later catalogue revision</td>
          <td class="version-diff-table__takeaway">Review before adopting newer infrastructure requirements.</td>
        </tr>
    </tbody>
  </table>
</div>

## Scheme-specific notes

- pacs.010 is not part of the SCT or SCT Inst credit-transfer rulebooks, so credit-transfer implementation shortcuts do not carry over automatically.
- Use this page as a technical-reference and implementation guide for institution direct-debit scenarios rather than as a substitute for market-scheme documentation.

Source links below point to primary standards bodies or scheme operators. Where a note goes beyond a direct statement, it is an implementation inference from those sources.

## When to use this message

Use pacs.010 for direct-debit style institution-to-institution collections where the debit occurs on the institution's own account rather than for a retail customer mandate.

## When not to use this message

Do not use pacs.010 for customer mandate collections or for credit-transfer use cases.

## Implementation notes

- Model authorization and bilateral agreement logic outside the message itself because those controls often sit in treasury or correspondent agreements.
- Institution-own-account debits usually need tighter governance than retail direct debits due to counterparty and liquidity risk.
- Design reporting and status handling alongside the collection flow; investigations are expensive when debit provenance is weak.

## Common failure modes

- Treating pacs.010 as just the direct-debit equivalent of pacs.009.
- Not capturing bilateral authorization context.
- Ignoring downstream status and exception flows.

## Worked XML fragment

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Field commentary

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need explicit bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly; this is not a retail-customer debit model.

## Decision flow

```text
Need an institution direct-debit message?
Yes -> Use pacs.010.
No -> Need a customer direct-debit flow?
Yes -> Consider pacs.003 instead.
No -> Re-check whether the scenario is actually a credit transfer.
```

## Implementation FAQ

### Is pacs.010 commonly used in retail payment products?

It is more naturally aligned to institution-own-account direct-debit scenarios than to standard retail products.

### What should teams design first?

Authorization context, bilateral controls, and exception handling should be clear before XML templates are finalised.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Financial Institution Credit Transfer</td>
          <td class="related-messages-table__overview">The pacs.009 message is used for credit transfers between financial institutions where the transfer is on the institution&#39;s own behalf rather than on behalf of a customer. It supports interbank funding, cover payments, and liquidity management.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI to FI Payment Status Report</td>
          <td class="related-messages-table__overview">The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation, rejection, or pending status information for individual transactions within a payment message.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">FI to FI Customer Direct Debit</td>
          <td class="related-messages-table__overview">The pacs.003 message is exchanged between financial institutions to execute a customer direct debit instruction. It enables the creditor&#39;s bank to collect funds from the debtor&#39;s bank on behalf of the creditor.</td>
        </tr>
    </tbody>
  </table>
</div>

