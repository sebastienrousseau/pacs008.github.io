---
title: pacs.004.001.11 | Payment Return | pacs008
description: The pacs.004 message is used to return a previously settled payment transaction. It reverses the flow of funds when a payment cannot be applied, was sent...
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **ISO name** | PaymentReturnV11 |
| **Registration status** | Registered |
| **Year** | 2019 |
| **Version** | 11 |

## Overview

The pacs.004 message is used to return a previously settled payment transaction. It reverses the flow of funds when a payment cannot be applied, was sent in error, or is being recalled by the originating institution.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Key data elements

- **GrpHdr** — Group Header with message identification and creation timestamp
- **TxInf** — Transaction Information with return amount and parties
- **OrgnlGrpInf** — Original Group Information linking to the source message
- **RtrRsnInf** — Return Reason Information with structured reason codes
- **OrgnlTxRef** — Original Transaction Reference for matching and reconciliation

## Business context

- Handles post-settlement returns when the beneficiary's account cannot be credited
- Supports recall scenarios where the originator requests return of funds
- Carries structured return reason codes for regulatory and operational transparency
- Applies to both credit transfer returns (pacs.008) and direct debit returns (pacs.003)

| Key data elements | Business context |
|---|---|
| **GrpHdr** — Group Header with message identification and creation timestamp | Handles post-settlement returns when the beneficiary's account cannot be credited |
| **TxInf** — Transaction Information with return amount and parties | Supports recall scenarios where the originator requests return of funds |
| **OrgnlGrpInf** — Original Group Information linking to the source message | Carries structured return reason codes for regulatory and operational transparency |
| **RtrRsnInf** — Return Reason Information with structured reason codes | Applies to both credit transfer returns (pacs.008) and direct debit returns (pacs.003) |
| **OrgnlTxRef** — Original Transaction Reference for matching and reconciliation | The instructed agent sends pacs.004 back through the payment chain to return previously settled funds. Each agent in the chain processes the return and credits back the relevant accounts. |

## CBPR+ and scheme context

- Replaces MT103 RETURN and cover-method return messaging
- Return reason codes are standardised and machine-readable under ISO 20022
- CBPR+ requires full original transaction reference data for matching
- SWIFT gpi tracking extends to return transactions for end-to-end visibility

## Message flow

The instructed agent sends pacs.004 back through the payment chain to return previously settled funds. Each agent in the chain processes the return and credits back the relevant accounts.

## Version commentary

The ISO 20022 catalogue entry for this business area was last updated on 2025-02-27. The pacs008 site currently documents `pacs.004.001.11`, while the ISO 20022 catalogue lists `pacs.004.001.14` as the latest published version.

That means this page is useful for understanding the currently implemented version in pacs008, but roadmap and interoperability planning should account for the later catalogue revision as well.

## Version-diff table

| Version range | Why it matters | Implementation takeaway |
|---|---|---|
| pacs.004.001.11 | Current implementation in pacs008 | Aligns with current templates for payment returns. |
| pacs.004.001.12-14 | Later catalogue revisions | Review later return-message revisions when scheme upgrades or new counterparties are in scope. |

## Scheme-specific notes

- For SEPA credit-transfer flows, pacs.004 is part of the wider return and exception-management picture around executed payments. The [EPC SCT rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) and [EPC SCT Inst rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) define scheme behaviour around those operational flows.
- In CBPR+, Swift maps pacs.004 alongside pacs.008, pacs.009, and pacs.002 during the ISO 20022 migration of payment instructions. See the [CBPR+ coexistence and end-state roadmap](https://www.swift.com/swift-resource/252463/download).

Source links below point to primary standards bodies or scheme operators. Where a note goes beyond a direct statement, it is an implementation inference from those sources.

## When to use this message

Use pacs.004 when settled funds need to move back to the original sender because the payment cannot be applied or must be returned after settlement.

## When not to use this message

Do not use pacs.004 when the original instructing agent is requesting an upstream reversal before or around settlement; that is pacs.007 territory.

## Implementation notes

- Return reason codes should be mapped into internal exception categories so operations teams can route cases quickly.
- Keep the original transaction reference accessible to customer-support tooling; returns are hard to reconcile without it.
- Expect scheme and correspondent-bank rules to limit which return reasons are acceptable after specific processing stages.

## Common failure modes

- Mixing up return and reversal processes.
- Losing the link to the original transaction and value date.
- Assuming every rejected beneficiary credit should become a pacs.004 automatically.

## Worked XML fragment

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### Field commentary

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: Reason-code quality is critical for downstream customer communication and operational routing.

## Decision flow

```text
Has value already settled and now needs to move back?
Yes -> Use pacs.004.
No -> Is the instructing side trying to stop or reverse the payment?
Yes -> Consider pacs.007 instead.
No -> Review scheme exception handling before choosing a message.
```

## Compare pacs.004 vs pacs.007

| Dimension | pacs.004.001.11 | Comparison message |
|---|---|---|
| Primary purpose | Return settled funds | Reverse a previously instructed payment |
| Initiated by | Receiving / beneficiary side | Original instructing side |
| Direction of flow | Back through the chain | Forward through the chain |
| Best fit | Post-settlement return handling | Recall, error, or fraud-driven reversal handling |

## Implementation FAQ

### What is the difference between pacs.004 and pacs.007?

pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side.

### Should every failed beneficiary credit become pacs.004?

Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Related messages
| Message type | Description | Overview |
|---|---|---|
| [`pacs.008.001.13`](/en/pacs.008.001.13/) | FI to FI Customer Credit Transfer | The pacs.008 message is the core payment instruction exchanged between financial institutions to transfer funds on behalf of a customer. It carries debtor, creditor, amount, and remittance information for one or more credit transfer transactions. |
| [`pacs.003.001.09`](/en/pacs.003.001.09/) | FI to FI Customer Direct Debit | The pacs.003 message is exchanged between financial institutions to execute a customer direct debit instruction. It enables the creditor's bank to collect funds from the debtor's bank on behalf of the creditor. |
| [`pacs.002.001.12`](/en/pacs.002.001.12/) | FI to FI Payment Status Report | The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation, rejection, or pending status information for individual transactions within a payment message. |

