---
title: pacs.002.001.12 | FI to FI Payment Status Report | pacs008
description: The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation...
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **ISO name** | FIToFIPaymentStatusReportV12 |
| **Registration status** | Registered |
| **Year** | 2019 |
| **Version** | 12 |

## Overview

The pacs.002 message is sent by a financial institution to report the status of a previously sent payment instruction. It provides confirmation, rejection, or pending status information for individual transactions within a payment message.

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## Key data elements

- **GrpHdr** — Group Header with message identification and creation timestamp
- **OrgnlGrpInfAndSts** — Original Group Information and Status for bulk-level reporting
- **TxInfAndSts** — Transaction Information and Status for individual transaction outcomes
- **StsRsnInf** — Status Reason Information with structured reason codes
- **OrgnlTxRef** — Original Transaction Reference linking back to the source instruction

## Business context

- Used to confirm settlement or report rejection of credit transfers, direct debits, and payment returns
- Enables reconciliation between instructing and instructed agents
- Required in CBPR+ flows to acknowledge processing of pacs.008 and pacs.009 messages
- Supports both bulk group-level and individual transaction-level status reporting

| Key data elements | Business context |
|---|---|
| **GrpHdr** — Group Header with message identification and creation timestamp | Used to confirm settlement or report rejection of credit transfers, direct debits, and payment returns |
| **OrgnlGrpInfAndSts** — Original Group Information and Status for bulk-level reporting | Enables reconciliation between instructing and instructed agents |
| **TxInfAndSts** — Transaction Information and Status for individual transaction outcomes | Required in CBPR+ flows to acknowledge processing of pacs.008 and pacs.009 messages |
| **StsRsnInf** — Status Reason Information with structured reason codes | Supports both bulk group-level and individual transaction-level status reporting |
| **OrgnlTxRef** — Original Transaction Reference linking back to the source instruction | The instructed agent (receiver) sends pacs.002 back to the instructing agent (sender) to confirm acceptance, settlement, or rejection of a received payment instruction such as pacs.008 or pacs.009. |

## CBPR+ and scheme context

- Replaces MT199 and field 79 status narratives in MT messages
- CBPR+ mandates pacs.002 for all payment status communication
- Structured reason codes replace free-text rejection explanations
- SWIFT gpi tracking integration requires pacs.002 for end-to-end transparency

## Message flow

The instructed agent (receiver) sends pacs.002 back to the instructing agent (sender) to confirm acceptance, settlement, or rejection of a received payment instruction such as pacs.008 or pacs.009.

## Version commentary

The ISO 20022 catalogue entry for this business area was last updated on 2025-02-27. The pacs008 site currently documents `pacs.002.001.12`, while the ISO 20022 catalogue lists `pacs.002.001.15` as the latest published version.

That means this page is useful for understanding the currently implemented version in pacs008, but roadmap and interoperability planning should account for the later catalogue revision as well.

## Version-diff table

| Version range | Why it matters | Implementation takeaway |
|---|---|---|
| pacs.002.001.12 | Current implementation in pacs008 | Use this when matching the current project templates and validation assets. |
| pacs.002.001.13-15 | Later catalogue revisions | Review later ISO revisions before starting new interoperability work or onboarding new infrastructures. |

## Scheme-specific notes

- In SEPA credit-transfer and instant-payment implementations, pacs.002 is the natural companion status message for payment execution and exception feedback. See the [EPC SCT rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) and [EPC SCT Inst rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook).
- In CBPR+, pacs.002 sits alongside pacs.008, pacs.009, and pacs.004 in the official Swift usage-guideline rollout. See [Swift's CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released).

Source links below point to primary standards bodies or scheme operators. Where a note goes beyond a direct statement, it is an implementation inference from those sources.

## When to use this message

Use pacs.002 when the receiving institution needs to report acceptance, rejection, pending, or completion state for a previously submitted payment instruction.

## When not to use this message

Do not use pacs.002 to alter settlement or reverse funds. It is a reporting message, not a corrective settlement message.

## Implementation notes

- Map external provider statuses into pacs.002 reason and status codes early so internal systems do not depend on scheme-specific free text.
- Keep original message identifiers intact; status reconciliation fails quickly when identifiers are normalized inconsistently across channels.
- Treat pending and rejected outcomes differently in downstream orchestration because they imply different retry and repair paths.

## Common failure modes

- Conflating technical acceptance with business acceptance.
- Dropping transaction-level status details when a group status exists.
- Using pacs.002 as a substitute for exception-management workflows.

## Worked XML fragment

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Field commentary

- `MsgId`: Use a new identifier for the status report itself, not the original payment instruction.
- `OrgnlInstrId`: Keep the original instruction identifier intact so status can be matched automatically.
- `TxSts`: This is the operational state; map it carefully to internal workflow states rather than assuming a one-to-one match.
- `StsRsnInf`: Structured reason codes are far more useful than free text for repair and analytics.

## Decision flow

```text
Need to communicate status of an earlier instruction?
Yes -> Use pacs.002.
No -> Need to ask another institution for status?
Yes -> Consider pacs.028 instead.
No -> Stay in the payment or exception flow.
```

## Compare pacs.002 vs pacs.028

| Dimension | pacs.002.001.12 | Comparison message |
|---|---|---|
| Primary purpose | Report status | Request status |
| Who starts the interaction | The institution sending the status | The institution asking for status |
| Operational posture | Event-driven reporting | Exception-driven enquiry |
| Wrong assumption to avoid | That status reporting replaces investigation workflows | That every payment needs an explicit status request |

## Implementation FAQ

### Is pacs.002 a payment message?

No. It reports status for an earlier instruction rather than moving value itself.

### Should pacs.002 replace internal workflow states?

No. It should inform them, but internal case states still need their own operational logic.

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Related messages
| Message type | Description | Overview |
|---|---|---|
| [`pacs.008.001.13`](/pacs.008.001.13/) | FI to FI Customer Credit Transfer | The pacs.008 message is the core payment instruction exchanged between financial institutions to transfer funds on behalf of a customer. It carries debtor, creditor, amount, and remittance information for one or more credit transfer transactions. |
| [`pacs.009.001.10`](/pacs.009.001.10/) | Financial Institution Credit Transfer | The pacs.009 message is used for credit transfers between financial institutions where the transfer is on the institution's own behalf rather than on behalf of a customer. It supports interbank funding, cover payments, and liquidity management. |
| [`pacs.028.001.05`](/pacs.028.001.05/) | FI to FI Payment Status Request | The pacs.028 message is sent by a financial institution to request the status of a previously sent payment instruction. It enables proactive tracking of payment processing without waiting for an unsolicited status report. |

