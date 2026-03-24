---
title: pacs.009.001.10 | Financial Institution Credit Transfer | pacs008
description: The pacs.009 message is used for credit transfers between financial institutions where the transfer is on the institution's own behalf rather than on...
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **ISO name** | FinancialInstitutionCreditTransferV10 |
| **Registration status** | Registered |
| **Year** | 2019 |
| **Version** | 10 |

## Overview

The pacs.009 message is used for credit transfers between financial institutions where the transfer is on the institution's own behalf rather than on behalf of a customer. It supports interbank funding, cover payments, and liquidity management.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Key data elements

- **GrpHdr** — Group Header with message identification and settlement information
- **CdtTrfTxInf** — Credit Transfer Transaction Information with interbank settlement amount
- **Dbtr / DbtrAgt** — Debtor institution and its agent identification
- **Cdtr / CdtrAgt** — Creditor institution and its agent identification
- **IntrBkSttlmAmt** — Interbank Settlement Amount in the settlement currency

## Business context

- Used for bank-to-bank own-account transfers and cover payments
- Supports liquidity management between correspondent banking partners
- Carries the cover leg of customer credit transfers settled via cover method
- Enables treasury and funding operations between financial institutions

| Key data elements | Business context |
|---|---|
| **GrpHdr** — Group Header with message identification and settlement information | Used for bank-to-bank own-account transfers and cover payments |
| **CdtTrfTxInf** — Credit Transfer Transaction Information with interbank settlement amount | Supports liquidity management between correspondent banking partners |
| **Dbtr / DbtrAgt** — Debtor institution and its agent identification | Carries the cover leg of customer credit transfers settled via cover method |
| **Cdtr / CdtrAgt** — Creditor institution and its agent identification | Enables treasury and funding operations between financial institutions |
| **IntrBkSttlmAmt** — Interbank Settlement Amount in the settlement currency | The debtor institution sends pacs.009 to the creditor institution to transfer its own funds. For cover-method payments, pacs.009 provides the funding leg while pacs.008 carries the customer instruction through a separate path. |

## CBPR+ and scheme context

- Replaces MT202 and MT202COV for institution-to-institution transfers
- Cover method flows pair pacs.009 with the underlying pacs.008 customer instruction
- Structured party data and LEI identification increasingly required
- SWIFT gpi covers pacs.009 for correspondent banking transparency

## Message flow

The debtor institution sends pacs.009 to the creditor institution to transfer its own funds. For cover-method payments, pacs.009 provides the funding leg while pacs.008 carries the customer instruction through a separate path.

## Version commentary

The ISO 20022 catalogue entry for this business area was last updated on 2025-02-27. The pacs008 site currently documents `pacs.009.001.10`, while the ISO 20022 catalogue lists `pacs.009.001.12` as the latest published version.

That means this page is useful for understanding the currently implemented version in pacs008, but roadmap and interoperability planning should account for the later catalogue revision as well.

## Version-diff table

| Version range | Why it matters | Implementation takeaway |
|---|---|---|
| pacs.009.001.10 | Current implementation in pacs008 | Matches the current project support for FI credit transfer flows. |
| pacs.009.001.11-12 | Later catalogue revisions | Important for roadmap planning in correspondent and cover-payment environments. |

## Scheme-specific notes

- In CBPR+, pacs.009 carries institution-to-institution credit-transfer and cover-payment legs. Swift explicitly maps MT 200, MT 202, and MT 202 COV into pacs.009 usage patterns in its [roadmap PDF](https://www.swift.com/swift-resource/252463/download) and related [CBPR+ pacs.009 material](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009).
- For cover method, pacs.009 should be analysed together with the related customer leg in pacs.008 rather than as an isolated payment object. See [Swift's pacs.008/pacs.009 cover-method training page](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009).
- This message is outside the SCT/SCT Inst customer credit-transfer rulebooks, so teams should not assume SEPA customer-payment rules apply unchanged to pacs.009.

Source links below point to primary standards bodies or scheme operators. Where a note goes beyond a direct statement, it is an implementation inference from those sources.

## When to use this message

Use pacs.009 for institution-to-institution credit transfers, especially treasury movements, funding transfers, and cover-payment legs that are not customer-originated messages in their own right.

## When not to use this message

Do not use pacs.009 as a direct substitute for a customer credit-transfer message when the business transaction still belongs in pacs.008.

## Implementation notes

- Separate cover-payment logic from customer-payment logic so reconciliation can link pacs.009 and pacs.008 without collapsing them into one record type.
- Treasury and correspondent workflows often need stricter controls around value date, settlement amount, and liquidity booking.
- Institution identifiers and chain transparency matter more here than retail remittance content.

## Common failure modes

- Confusing own-account transfers with customer transfers.
- Losing the relationship between cover and underlying customer flows.
- Underestimating the impact of correspondent chain changes on settlement behavior.

## Worked XML fragment

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Field commentary

- `InstrId`: Use a funding-leg identifier that can still be joined to any underlying customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows often need stricter treasury controls around settlement amounts and dates.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles; model them accordingly.

## Decision flow

```text
Is this own-account bank movement or a cover leg?
Yes -> Use pacs.009.
No -> Is it a customer payment instruction?
Yes -> Consider pacs.008 instead.
No -> Validate whether treasury or settlement operations own the case.
```

## Compare pacs.009 vs pacs.008

| Dimension | pacs.009.001.10 | Comparison message |
|---|---|---|
| Primary purpose | Institution-own-account credit transfer or cover leg | Customer credit transfer |
| Business owner | Treasury / correspondent / funding operations | Customer-payment operations |
| Typical pairings | pacs.002, pacs.004, and linked pacs.008 flows | pacs.002, pacs.004, pacs.007, pacs.028 |
| Wrong assumption to avoid | That it is just a more technical pacs.008 | That it can carry institution funding flows cleanly |

## Implementation FAQ

### When should I choose pacs.009 over pacs.008?

Choose pacs.009 for institution-own-account transfers and cover legs; choose pacs.008 for customer-credit-transfer instructions.

### Why is pacs.009 often harder to reconcile than expected?

Because institutions must preserve the relationship between treasury funding, correspondent legs, and any linked customer payment.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## Related messages
| Message type | Description | Overview |
|---|---|---|
| [`pacs.008.001.13`](/pacs.008.001.13/) | FI to FI Customer Credit Transfer | The pacs.008 message is the core payment instruction exchanged between financial institutions to transfer funds on behalf of a customer. It carries debtor, creditor, amount, and remittance information for one or more credit transfer transactions. |
| [`pacs.002.001.12`](/pacs.002.001.12/) | FI to FI Payment Status Report | The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation, rejection, or pending status information for individual transactions within a payment message. |
| [`pacs.010.001.05`](/pacs.010.001.05/) | Financial Institution Direct Debit | The pacs.010 message is used between financial institutions for direct debit transactions on the institution's own account. It enables one institution to collect funds directly from another institution's account. |

