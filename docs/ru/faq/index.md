---
title: "Frequently asked questions | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: ru-RU
lastUpdated: true
image: /logo.svg
---

# Frequently asked questions

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## General

### What is ISO 20022?

ISO 20022 is an international standard for financial messaging. It defines a common language and model for payment messages exchanged between financial institutions. Unlike older formats such as SWIFT MT, ISO 20022 uses XML and supports richer, more structured data for parties, amounts, and references.

### What are pacs messages?

The pacs (payments clearing and settlement) message family covers interbank payment instructions, status reports, returns, reversals, and enquiries. It includes pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010, and pacs.028. Each message serves a specific role in the payment lifecycle.

### How do pacs messages differ from SWIFT MT messages?

SWIFT MT messages use a flat, field-tag format (e.g. MT103 for customer credit transfers). Pacs messages use hierarchical XML with richer data structures. Key differences include support for multiple transactions per message, structured party identification (LEI, multiple IDs), structured postal addresses, and structured remittance information. MT103 maps to pacs.008, MT202 maps to pacs.009, and MT199 status text is replaced by pacs.002.

### What is the relationship between pain and pacs messages?

Pain (payment initiation) messages travel between the customer and their bank. Pacs messages travel between banks. A pain.001 customer credit-transfer initiation from the debtor's bank becomes a pacs.008 interbank instruction. The two domains share common data elements but serve different parts of the payment chain.

## Message selection

### When should I use pacs.008?

Use pacs.008 for customer credit-transfer instructions between banks. It carries debtor and creditor party data, amounts, remittance information, and settlement details. It is the main message for sending customer payments across the interbank network, whether domestically (SEPA) or cross-border (CBPR+).

### When should I use pacs.009 instead of pacs.008?

Use pacs.009 for institution-own-account transfers, funding legs, and cover payments. Unlike pacs.008, which carries a customer payment on behalf of a debtor, pacs.009 moves funds between banks on their own behalf. In cover-method flows, pacs.009 carries the funding while pacs.008 carries the customer instruction on a separate path.

### What is the difference between pacs.004 and pacs.007?

pacs.004 returns settled funds from the receiving side back through the chain. pacs.007 reverses a payment from the original instructing side forward through the chain. Use pacs.004 when the beneficiary bank cannot apply the credit after settlement. Use pacs.007 when the originator discovers an error, duplicate, or fraud.

### When should I use pacs.028 instead of waiting for pacs.002?

Use pacs.028 when you need to actively request the status of a payment that has not received a timely pacs.002 update. pacs.002 is event-driven (the receiving agent sends it proactively), while pacs.028 is exception-driven (the instructing agent requests it). Use pacs.028 for delayed, unclear, or missing payment updates, not as routine traffic.

### What is pacs.003 used for?

pacs.003 carries customer direct-debit instructions between banks. The creditor agent sends it to the debtor agent to collect funds. It requires a valid mandate reference and supports SEPA Core and B2B direct-debit schemes. It is not used for credit transfers or institution-own-account debits.

### What is pacs.010 used for?

pacs.010 handles direct debits between financial institutions on their own accounts. It is used for bank-to-bank collections such as fees, margin calls, and similar obligations under bilateral agreements. It is not used for customer direct debits or credit transfers.

## Message structure

### What is the Group Header (GrpHdr)?

The Group Header appears exactly once per pacs message. It contains the message identifier (MsgId), creation timestamp (CreDtTm), number of transactions (NbOfTxs), settlement information (SttlmInf), and optionally the total interbank settlement amount and payment type information. It identifies the message envelope, not the individual business transactions.

### What are the payment identifiers in pacs.008?

pacs.008 uses four main identifiers. MsgId identifies the message envelope and changes at each hop. InstrId is a point-to-point reference between adjacent agents and may change per hop. EndToEndId is set by the originator and must not be altered by any agent in the chain. TxId is assigned by the first instructing agent and remains constant in the interbank space. UETR is a UUID that stays unchanged across all legs for end-to-end tracking.

### What settlement methods are available?

Four settlement methods are defined. CLRG settles through a clearing system such as TARGET2, EURO1, or CHIPS. INDA settles on the books of the instructed agent where the debtor agent holds an account. INGA settles on the books of the instructing agent where the instructed agent holds an account. COVE settles through a separate cover payment carried by pacs.009.

### What do the charge bearer codes mean?

DEBT means all charges are borne by the debtor (equivalent to MT103 OUR). CRED means all charges are borne by the creditor (equivalent to BEN). SHAR means charges are shared between debtor and creditor agents (equivalent to SHA). SLEV means charges follow the service level rules and is mandatory for SEPA credit transfers.

## CBPR+ and migration

### What is CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) is SWIFT's programme for adopting ISO 20022 in cross-border payment messaging. It went live in March 2023 and replaces MT messages with pacs equivalents. CBPR+ mandates pacs.002 for all status communication, supports richer party data and structured addresses, and uses UETR-based tracking through gpi.

### What happened to the MT/MX coexistence period?

The coexistence period for cross-border payment instructions ended in November 2025. Since then, CBPR+ messages must use the ISO 20022 (MX) format. Translation services that converted between MT and MX during the transition are no longer available for new flows. Banks must now send and receive native pacs messages.

### What is the November 2026 structured-address deadline?

From November 2026, SWIFT CBPR+ requires structured postal addresses in cross-border payment messages. Unstructured address lines (AdrLine alone) will no longer be accepted for key party fields. At minimum, TwnNm and Ctry are required, with StrtNm and BldgNb or PstBx recommended. This improves sanctions screening and reduces manual repair.

### How does pacs.008 replace MT103?

pacs.008 replaces MT103 and MT103+ for customer credit transfers. Key mapping: MT103 field 20 maps to MsgId or InstrId; field 32A splits into IntrBkSttlmDt and IntrBkSttlmAmt; field 50a maps to Dbtr and DbtrAcct; field 59a maps to Cdtr and CdtrAcct; field 70 maps to RmtInf; field 71A maps to ChrgBr. pacs.008 adds UETR, structured remittance, LEI identification, and supports multiple transactions per message.

### How does pacs.009 replace MT202?

pacs.009 replaces MT202 and MT202COV for institution-to-institution transfers. In cover-method flows, the MT202COV (which carried both funding and underlying customer data) splits cleanly: pacs.009 carries the funding leg while pacs.008 carries the customer instruction directly. This separation improves data quality and reduces reconciliation issues.

## Technical details

### What are structured vs unstructured addresses?

Structured addresses use separate XML elements for each component: StrtNm (street), BldgNb (building number), PstCd (post code), TwnNm (town), Ctry (country), and optional elements like Flr, Room, and DstrctNm. Unstructured addresses use up to seven AdrLine elements with free text. Hybrid addresses combine both during the transition period. After November 2026, CBPR+ requires the structured format.

### What is UETR and how does gpi tracking work?

UETR (Unique End-to-End Transaction Reference) is a UUID v4 identifier generated by the debtor agent and carried unchanged across all legs of a payment. It appears in pacs.008, pacs.009, pacs.002, pacs.004, pacs.007, and pacs.028. SWIFT gpi uses the UETR to track payments through a cloud-based Tracker database. Each agent confirms receipt and processing, enabling end-to-end visibility and SLA monitoring.

### What are common pacs.002 status codes?

ACCP means accepted after customer-profile checks. ACSP means accepted and settlement is in progress. ACSC means settlement on the debtor account is complete. RJCT means rejected (with a reason code in StsRsnInf). PDNG means pending further processing. RCVD means received but not yet processed. Each status may include a structured reason code such as AC01 (incorrect account), AM04 (insufficient funds), or RC01 (incorrect BIC).

### What are common return reason codes in pacs.004?

Frequent return reason codes include AC01 (incorrect account number), AC04 (closed account), AC06 (blocked account), AM04 (insufficient funds), BE04 (missing creditor address), CUST (requested by customer), DUPL (duplicate payment), FOCR (following cancellation request), and FR01 (fraud). The full list is defined in the ISO 20022 External Code Sets.

### What is structured remittance information?

Structured remittance in pacs.008 uses the RmtInf/Strd element to carry document references (invoice numbers, credit notes), amounts (due, remitted, tax, discount), and creditor references (ISO 11649 RF references). This enables automated invoice matching and reconciliation. Common document type codes include CINV (commercial invoice), CREN (credit note), and SOAC (statement of account).

### What is LEI and when is it used?

LEI (Legal Entity Identifier) is a 20-character alphanumeric code per ISO 17442. It uniquely identifies legal entities participating in financial transactions. In pacs messages, LEI appears in OrgId/LEI for parties and FinInstnId/LEI for agents. CBPR+ increasingly encourages LEI for party and agent identification. It improves entity disambiguation and supports regulatory reporting requirements.

## About pacs008 toolkit

### What does pacs008 do?

pacs008 is a Python toolkit that generates, validates, and ships ISO 20022 payment messages. It reads payment data from CSV, JSON, JSONL, SQLite, and Parquet sources, validates against JSON Schema and XSD, checks IBAN and BIC identifiers, cleans data for SWIFT character compliance, and outputs XML files. It provides a REST API, CLI, and Python library.

### Which message types does pacs008 support?

pacs008 supports eight message types: pacs.002.001.12 (status report), pacs.003.001.09 (customer direct debit), pacs.004.001.11 (payment return), pacs.007.001.11 (payment reversal), pacs.008.001.13 (customer credit transfer), pacs.009.001.10 (financial institution credit transfer), pacs.010.001.05 (financial institution direct debit), and pacs.028.001.05 (payment status request).

### How does pacs008 help with the 2026 structured-address deadline?

pacs008 validates structured and hybrid postal address fields before XML generation. It flags unstructured address data that would fail after the November 2026 deadline, supports both pre-deadline hybrid and post-deadline structured-only formats, and integrates address quality checks into CI pipelines and batch validation workflows.

### Can pacs008 validate data without generating XML?

Yes. Use the `--dry-run` CLI flag or the `POST /validate` API endpoint to validate payment data without generating XML. The validation pipeline checks JSON Schema conformance, IBAN format and checksum, BIC structure, and SWIFT character compliance. The exit code or API response indicates whether validation passed or failed.

## References

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

