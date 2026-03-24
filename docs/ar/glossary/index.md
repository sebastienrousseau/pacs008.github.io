---
title: "ISO 20022 glossary | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages.
lang: ar-SA
lastUpdated: true
image: /logo.svg
---

# ISO 20022 glossary

This glossary defines the key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Automated Clearing House. A network that processes batched electronic payments between financial institutions.

**AdrLine** — Address Line. A free-text address field in ISO 20022 postal address structures. Up to 7 lines of 70 characters each. Being replaced by structured address elements for CBPR+ by November 2026.

**ACCP** — Accepted Customer Profile. A pacs.002 status code indicating that preceding checks (syntax, customer profile) have passed.

**ACSC** — Accepted Settlement Completed. A pacs.002 status code confirming that settlement on the debtor's account has been completed.

**ACSP** — Accepted Settlement in Process. A pacs.002 status code indicating all checks passed and settlement is in progress.

## B

**BAH** — Business Application Header (head.001). A standardised envelope that wraps ISO 20022 business messages for transport via SWIFT. Contains routing information, message definition identifier, and sender/receiver BICs.

**BIC** — Business Identifier Code (ISO 9362). An 8 or 11 character code that uniquely identifies a financial institution. Format: BBBBCCLL (bank code + country + location) with optional BBB branch code.

## C

**CBPR+** — Cross-Border Payments and Reporting Plus. SWIFT's programme for migrating cross-border payment messaging from MT to ISO 20022. Went live March 2023.

**CdtTrfTxInf** — Credit Transfer Transaction Information. The main transaction-level building block in pacs.008 containing payment details, parties, amounts, and remittance information.

**ChrgBr** — Charge Bearer. Specifies who pays the transaction charges. Values: DEBT (debtor), CRED (creditor), SHAR (shared), SLEV (service level, SEPA only).

**CLRG** — Clearing system settlement. A settlement method where funds move through a clearing system such as TARGET2, EURO1, or CHIPS.

**COVE** — Cover method settlement. A settlement method where a separate pacs.009 cover payment handles the funding between correspondents while pacs.008 carries the customer data directly.

**CSM** — Clearing and Settlement Mechanism. An infrastructure that processes and settles payment instructions between participating institutions.

## D

**Dbtr** — Debtor. The party that owes funds and initiates the payment. In pacs.008, the Dbtr element carries the debtor's name, postal address, identification, and country of residence.

**DbtrAgt** — Debtor Agent. The financial institution that services the debtor's account and sends the pacs.008 instruction.

## E

**E2E ID** — End-to-End Identification (EndToEndId). A reference assigned by the originator that must remain unchanged across all agents in the payment chain. Used for customer-level traceability.

**EPC** — European Payments Council. The body that manages SEPA payment scheme rulebooks for credit transfers and direct debits.

## F

**FI** — Financial Institution. A bank or other institution that participates in payment clearing and settlement.

**FIToFI** — Financial Institution to Financial Institution. Describes the interbank domain where pacs messages operate.

## G

**gpi** — Global Payments Innovation. SWIFT's initiative for faster, transparent cross-border payments. Uses UETR for end-to-end tracking via a cloud-based Tracker.

**GrpHdr** — Group Header. The message-level metadata block in pacs messages. Contains MsgId, CreDtTm, NbOfTxs, settlement information, and payment type information.

## H

**Hybrid address** — A postal address format that combines structured elements (StrtNm, TwnNm, Ctry) with unstructured AdrLine elements. Permitted during the transition period before the November 2026 structured address deadline.

## I

**IBAN** — International Bank Account Number (ISO 13616). A standardised account number format used for cross-border and domestic payments. Validated using ISO 7064 Mod 97-10 checksum.

**INDA** — Instructed Agent settlement. A settlement method where funds settle on the books of the instructed agent, where the debtor agent holds a nostro account.

**INGA** — Instructing Agent settlement. A settlement method where funds settle on the books of the instructing agent, where the instructed agent holds a nostro account.

**InstrId** — Instruction Identification. A point-to-point reference between adjacent agents in the payment chain. May change at each hop.

**IntrBkSttlmAmt** — Interbank Settlement Amount. The amount that settles between the instructing and instructed agents, in the settlement currency.

**ISO 20022** — An international standard for electronic data interchange between financial institutions. Defines a common data model and XML-based message formats for payments, securities, trade finance, and other financial domains.

## L

**LEI** — Legal Entity Identifier (ISO 17442). A 20-character alphanumeric code that uniquely identifies legal entities participating in financial transactions. Used in OrgId/LEI for parties and FinInstnId/LEI for agents.

## M

**MsgId** — Message Identification. A unique identifier for the message envelope, assigned by the sending agent. Changes at each hop in the payment chain.

**MT** — Message Type. SWIFT's legacy message format (e.g., MT103 for customer credit transfers, MT202 for financial institution transfers). Being replaced by ISO 20022 MX messages.

**MX** — The ISO 20022 XML message format used by SWIFT. MX messages replace MT messages for cross-border payments under CBPR+.

## N

**NbOfTxs** — Number of Transactions. A Group Header element indicating how many individual transactions are contained in the message.

## P

**pacs** — Payments Clearing and Settlement. The ISO 20022 business domain covering interbank payment messages.

**pacs.002** — FI to FI Payment Status Report. Reports the processing status (accepted, rejected, pending, settled) of an earlier payment instruction.

**pacs.003** — FI to FI Customer Direct Debit. Carries a customer direct debit instruction between banks for fund collection.

**pacs.004** — Payment Return. Returns settled funds back through the payment chain when a payment cannot be applied.

**pacs.007** — FI to FI Payment Reversal. Reverses a payment instruction from the original sender forward through the chain.

**pacs.008** — FI to FI Customer Credit Transfer. The primary interbank message for customer credit transfers. Replaces MT103.

**pacs.009** — Financial Institution Credit Transfer. Moves funds between banks on their own behalf. Covers funding, cover payments, and liquidity management. Replaces MT202/MT202COV.

**pacs.010** — Financial Institution Direct Debit. Lets one bank debit another bank's own account under a bilateral agreement.

**pacs.028** — FI to FI Payment Status Request. Actively requests the status of an earlier payment when no pacs.002 update has arrived.

**pain** — Payment Initiation. The ISO 20022 business domain covering customer-to-bank messages (e.g., pain.001 for credit transfer initiation).

**PII** — Personally Identifiable Information. Data that can identify an individual. pacs008 masks PII in structured logs.

**PstlAdr** — Postal Address. The address structure used for parties in pacs messages. Supports structured (StrtNm, TwnNm, Ctry) and unstructured (AdrLine) formats.

## R

**RJCT** — Rejected. A pacs.002 status code indicating the payment has been rejected.

**RmtInf** — Remittance Information. Payment reference data carried in pacs.008. Supports unstructured (free text, max 140 chars) and structured (document references, amounts, creditor references) formats.

**RTGS** — Real-Time Gross Settlement. A payment system where transactions settle individually and in real time (e.g., TARGET2, Fedwire, CHAPS).

## S

**SCT** — SEPA Credit Transfer. The euro credit transfer scheme managed by the EPC, using pacs.008.

**SCT Inst** — SEPA Instant Credit Transfer. The instant payment variant of SCT, settling in under 10 seconds.

**SDD** — SEPA Direct Debit. The euro direct debit scheme managed by the EPC, using pacs.003.

**SEPA** — Single Euro Payments Area. A payment integration initiative covering euro-denominated credit transfers, direct debits, and card payments across 36 European countries.

**SLEV** — Service Level. A charge bearer code mandatory for SEPA. Means charges follow scheme rules with no deductions from the transfer amount.

**STP** — Straight-Through Processing. Automated end-to-end payment processing without manual intervention.

**SttlmMtd** — Settlement Method. Defines how interbank settlement occurs: CLRG (clearing system), INDA (instructed agent), INGA (instructing agent), or COVE (cover payment).

## T

**TxId** — Transaction Identification. An interbank reference assigned by the first instructing agent. Must not be altered by subsequent agents.

## U

**UETR** — Unique End-to-End Transaction Reference. A UUID v4 identifier generated by the debtor agent and carried unchanged across all legs of a payment for gpi tracking.

## X

**XSD** — XML Schema Definition. The formal schema that defines the structure, elements, and data types of an ISO 20022 XML message.

**XXE** — XML External Entity. A security vulnerability in XML parsing. pacs008 prevents XXE attacks using defusedxml.

## References

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

