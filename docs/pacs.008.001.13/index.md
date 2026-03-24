---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: The pacs.008 message is the core payment instruction exchanged between financial institutions to transfer funds on behalf of a customer. It carries...
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **ISO name** | FIToFICustomerCreditTransferV13 |
| **Registration status** | Registered |
| **Year** | 2023 |
| **Version** | 13 |

## Overview

The pacs.008 message is the core payment instruction exchanged between financial institutions to transfer funds on behalf of a customer. It carries debtor, creditor, amount, and remittance information for one or more credit transfer transactions.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Key data elements

- **GrpHdr** — Group Header with message ID, creation date, number of transactions, and settlement information
- **CdtTrfTxInf** — Credit Transfer Transaction Information with amount, charges, and purpose
- **Dbtr / DbtrAgt** — Debtor and Debtor Agent identification and account details
- **Cdtr / CdtrAgt** — Creditor and Creditor Agent identification and account details
- **RmtInf** — Remittance Information for structured or unstructured payment references

## Business context

- The primary message for customer-initiated cross-border and domestic credit transfers
- Used across SEPA SCT, SEPA Instant, CBPR+, and national clearing systems
- Carries structured remittance information to support straight-through reconciliation
- Supports serial, cover, and direct settlement methods for multi-leg payment chains

| Key data elements | Business context |
|---|---|
| **GrpHdr** — Group Header with message ID, creation date, number of transactions, and settlement information | The primary message for customer-initiated cross-border and domestic credit transfers |
| **CdtTrfTxInf** — Credit Transfer Transaction Information with amount, charges, and purpose | Used across SEPA SCT, SEPA Instant, CBPR+, and national clearing systems |
| **Dbtr / DbtrAgt** — Debtor and Debtor Agent identification and account details | Carries structured remittance information to support straight-through reconciliation |
| **Cdtr / CdtrAgt** — Creditor and Creditor Agent identification and account details | Supports serial, cover, and direct settlement methods for multi-leg payment chains |
| **RmtInf** — Remittance Information for structured or unstructured payment references | The debtor agent creates a pacs.008 and sends it to the creditor agent (directly or via intermediaries). Each agent in the chain validates, enriches, and forwards the instruction until the creditor agent credits the beneficiary's account. |

## CBPR+ and scheme context

- Replaces MT103 and MT103+ for cross-border customer credit transfers
- Structured address deadline of November 2026 applies to all party postal addresses
- SWIFT gpi requires pacs.008 for UETR-based end-to-end tracking
- 13 revisions reflect ongoing schema evolution across market infrastructures

## Message flow

The debtor agent creates a pacs.008 and sends it to the creditor agent (directly or via intermediaries). Each agent in the chain validates, enriches, and forwards the instruction until the creditor agent credits the beneficiary's account.

## Version commentary

The ISO 20022 catalogue entry for this business area was last updated on 2025-02-27. The pacs008 site currently documents `pacs.008.001.13`, which matches the latest catalogue version listed by ISO 20022.

That makes this page suitable for current-version implementation planning, but scheme usage guidelines and market practice should still be checked before production rollout.

## Version-diff table

| Version range | Why it matters | Implementation takeaway |
|---|---|---|
| pacs.008.001.01-07 | Early revisions | Useful mainly for legacy migration analysis and version-history context. |
| pacs.008.001.08-12 | Pre-current modern revisions | These are the revisions most likely to appear in recent migration or coexistence projects. |
| pacs.008.001.13 | Current catalogue revision | Use this for current-version planning, while still validating scheme usage guidelines and counterparty readiness. |

## Scheme-specific notes

- For SEPA credit transfers, pacs.008 is part of the SCT scheme messaging stack defined by the [EPC SCT rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and).
- For instant payments, pacs.008 is also central to SCT Inst flows under the [EPC SCT Inst rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook), where timing, rejection, and exception handling expectations are much tighter.
- For CBPR+, Swift positions pacs.008 as the ISO 20022 successor to MT103-style customer credit-transfer instructions. See [Swift CBPR+ pacs.008 training overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008), [serial method](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008), and [cover method](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009).
- Swift's CBPR+ roadmap also shows MT 103 moving to pacs.008 during the migration timeline, with coexistence ending in November 2025 and further end-state milestones extending beyond that period. See the [Swift roadmap PDF](https://www.swift.com/swift-resource/252463/download).
- Structured-address changes around November 2026 materially affect pacs.008 data quality and party modelling in cross-border usage. See the [Swift CBPR+ roadmap](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap).

Source links below point to primary standards bodies or scheme operators. Where a note goes beyond a direct statement, it is an implementation inference from those sources.

## When to use this message

Use pacs.008 for customer credit transfers moving between financial institutions, including domestic clearing, cross-border correspondent flows, and instant-payment contexts where the customer payment instruction is the primary object.

## When not to use this message

Do not use pacs.008 for institution-own-account funding transfers or as a generic envelope for status, return, or investigation messages.

## Implementation notes

- Address quality, party identifiers, and remittance structure typically determine downstream repair rates more than the XML skeleton itself.
- Model payment purpose, charge bearer, settlement method, and party roles explicitly in source data before template rendering.
- Treat version selection as a deployment concern tied to market infrastructure and bank counterparties, not just to the latest schema revision.

## Common failure modes

- Assuming one pacs.008 mapping works unchanged across CBPR+, SEPA, domestic RTGS, and instant-payment contexts.
- Using free text where structured remittance or address fields are expected.
- Leaving exception-handling design until after XML generation already works.

## Worked XML fragment

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### Field commentary

- `MsgId`: This should identify the message envelope, not the end-customer payment reference.
- `EndToEndId`: Keep customer-facing traceability stable across downstream systems where possible.
- `UETR`: Use this consistently in cross-border and tracking-heavy environments; do not generate it ad hoc in later workflow stages.
- `IntrBkSttlmAmt`: Validate amount and currency using business rules before schema validation.
- `Dbtr` / `Cdtr`: Party quality, address structure, and identifiers are usually the main determinants of repair rates.

## Decision flow

```text
Is this a customer credit-transfer instruction between institutions?
Yes -> Use pacs.008.
No -> Is it an institution funding leg or cover payment?
Yes -> Consider pacs.009 instead.
No -> Re-check whether the business event is status, return, or reversal.
```

## Compare pacs.008 vs pacs.009

| Dimension | pacs.008.001.13 | Comparison message |
|---|---|---|
| Primary purpose | Customer credit transfer | Institution-own-account credit transfer or cover leg |
| Business owner | Customer-payment operations | Treasury / correspondent / funding operations |
| Typical pairings | pacs.002, pacs.004, pacs.007, pacs.028 | pacs.002, pacs.004, and sometimes linked pacs.008 flows |
| Wrong assumption to avoid | That all bank-to-bank transfers belong here | That it can replace customer credit-transfer instructions |

## Implementation FAQ

### Is pacs.008 enough on its own for production payments?

No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows.

### What causes the most repair work?

Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## Supported versions

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Related messages
| Message type | Description | Overview |
|---|---|---|
| [`pacs.002.001.12`](/pacs.002.001.12/) | FI to FI Payment Status Report | The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation, rejection, or pending status information for individual transactions within a payment message. |
| [`pacs.004.001.11`](/pacs.004.001.11/) | Payment Return | The pacs.004 message is used to return a previously settled payment transaction. It reverses the flow of funds when a payment cannot be applied, was sent in error, or is being recalled by the originating institution. |
| [`pacs.009.001.10`](/pacs.009.001.10/) | Financial Institution Credit Transfer | The pacs.009 message is used for credit transfers between financial institutions where the transfer is on the institution's own behalf rather than on behalf of a customer. It supports interbank funding, cover payments, and liquidity management. |

