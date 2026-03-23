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

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 27 February 2025; source links are listed below.

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

| Key data elements | Business context |
|---|---|
| **GrpHdr** — Group Header with message identification and settlement information | Supports interbank direct debit collection between financial institutions |
| **DrctDbtTxInf** — Direct Debit Transaction Information with collection amount | Used for fee collection, margin calls, and institutional settlement obligations |
| **Cdtr / CdtrAgt** — Creditor institution and its agent identification | Requires pre-agreed bilateral arrangements between participating institutions |
| **Dbtr / DbtrAgt** — Debtor institution and its agent identification | Critical for institutional cash management and interbank settlement cycles |
| **IntrBkSttlmAmt** — Interbank Settlement Amount in the settlement currency | The creditor institution sends pacs.010 to the debtor institution to collect funds under a pre-agreed arrangement. The debtor institution validates the request and settles or rejects the direct debit. |

## CBPR+ and scheme context

- Replaces elements of MT204 for interbank direct debit processing
- Structured party identification follows the same requirements as other pacs messages
- Validation of institutional identifiers (BIC, LEI) is mandatory
- Included in full ISO 20022 adoption roadmaps across market infrastructures

## Message flow

The creditor institution sends pacs.010 to the debtor institution to collect funds under a pre-agreed arrangement. The debtor institution validates the request and settles or rejects the direct debit.

## Version commentary

The ISO 20022 catalogue entry for this business area was last updated on 27 February 2025. The pacs008 site currently documents `pacs.010.001.05`, while the ISO 20022 catalogue lists `pacs.010.001.06` as the latest published version.

That means this page is useful for understanding the currently implemented version in pacs008, but roadmap and interoperability planning should account for the later catalogue revision as well.

## Version-diff table

| Version range | Why it matters | Implementation takeaway |
|---|---|---|
| pacs.010.001.05 | Current implementation in pacs008 | Reference point for institution direct-debit support in the current project. |
| pacs.010.001.06 | Later catalogue revision | Review before adopting newer infrastructure requirements. |

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
| Message type | Description | Overview |
|---|---|---|
| [`pacs.009.001.10`](/en/pacs.009.001.10/) | Financial Institution Credit Transfer | The pacs.009 message is used for credit transfers between financial institutions where the transfer is on the institution's own behalf rather than on behalf of a customer. It supports interbank funding, cover payments, and liquidity management. |
| [`pacs.002.001.12`](/en/pacs.002.001.12/) | FI to FI Payment Status Report | The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation, rejection, or pending status information for individual transactions within a payment message. |
| [`pacs.003.001.09`](/en/pacs.003.001.09/) | FI to FI Customer Direct Debit | The pacs.003 message is exchanged between financial institutions to execute a customer direct debit instruction. It enables the creditor's bank to collect funds from the debtor's bank on behalf of the creditor. |

