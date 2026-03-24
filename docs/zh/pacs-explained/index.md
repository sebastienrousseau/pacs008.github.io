---
title: "PACS messages explained | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# PACS messages explained

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Payment lifecycle

The complete pacs payment lifecycle involves six stages and multiple message types working together.

**Stage 1 — Initiation.** The payment originates in the customer-to-bank domain (pain.001). The debtor's bank receives the instruction and maps it into the interbank domain.

**Stage 2 — Interbank instruction.** The debtor agent creates a pacs.008 and sends it to the next agent in the chain. In a serial flow, the pacs.008 travels hop by hop through intermediaries. In a cover flow, the pacs.008 goes directly from debtor agent to creditor agent, while a separate pacs.009 carries the funding leg through the correspondent chain.

**Stage 3 — Status reporting.** At each hop, the receiving agent may return a pacs.002 confirming acceptance (ACCP/ACSP/ACSC), rejection (RJCT), or pending status (PDNG). In CBPR+, pacs.002 is mandatory for all payment status communication.

**Stage 4 — Settlement.** Settlement occurs through a clearing system (CLRG), on correspondent accounts (INDA/INGA), or via a cover payment (COVE). The interbank settlement date and amount control when and how much settles.

**Stage 5 — Credit to beneficiary.** The creditor agent credits the beneficiary and may send a customer notification.

**Stage 6 — Exception handling.** If the beneficiary cannot be credited post-settlement, pacs.004 returns funds back through the chain. If the originator discovers an error or fraud, pacs.007 goes forward through the chain. If status is unknown, pacs.028 queries the next agent and the answer returns via pacs.002.

### Serial method flow

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Cover method flow

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## XML structure of pacs.008

pacs.008 has two main building blocks: the Group Header (GrpHdr) and Credit Transfer Transaction Information (CdtTrfTxInf).

### Group Header (GrpHdr)

The Group Header appears exactly once per message and contains:

- **MsgId** — Unique message identifier assigned by the sending agent. Max 35 characters, must be unique per sender.
- **CreDtTm** — Creation timestamp in ISO 8601 format.
- **NbOfTxs** — Count of individual transactions in the message.
- **SttlmInf** — Settlement information including the settlement method (SttlmMtd) and optionally the clearing system and settlement account.
- **IntrBkSttlmDt** — Date on which interbank settlement occurs.
- **PmtTpInf** — Payment type information including priority, service level, local instrument, and category purpose.

### Credit Transfer Transaction Information (CdtTrfTxInf)

Each transaction carries:

- **PmtId** — Payment identifiers: InstrId, EndToEndId, TxId, and UETR.
- **IntrBkSttlmAmt** — Interbank settlement amount with currency code.
- **InstdAmt** — Original instructed amount (may differ from settlement amount due to FX).
- **ChrgBr** — Charge bearer code (DEBT, CRED, SHAR, or SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — Debtor name, address, identification, account, and agent.
- **Cdtr / CdtrAcct / CdtrAgt** — Creditor name, address, identification, account, and agent.
- **IntrmyAgt1 / 2 / 3** — Up to three intermediary agents in the chain.
- **RmtInf** — Remittance information, either unstructured (free text) or structured (document references, amounts, dates).
- **Purp** — Structured purpose code.
- **RgltryRptg** — Regulatory reporting details.

## Payment identifiers

pacs messages use several identifiers that serve different roles in the payment chain.

<div class="api-fields-table" tabindex="0" aria-label="Payment identifiers">
  <table>
    <caption>Payment identifiers and their roles</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Identifier</th>
        <th scope="col">Set by</th>
        <th scope="col">Changes in chain?</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">Each sending agent</td>
          <td class="api-fields-table__constraint">Yes — new per message</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">Each instructing agent</td>
          <td class="api-fields-table__constraint">Yes — may change per hop</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">Originator (debtor)</td>
          <td class="api-fields-table__constraint">No — must not be altered</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">First instructing agent</td>
          <td class="api-fields-table__constraint">No — must not be altered</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">Debtor agent</td>
          <td class="api-fields-table__constraint">No — universal tracking</td>
        </tr>
    </tbody>
  </table>
</div>

## Settlement methods

The SttlmMtd element defines how interbank settlement occurs.

- **CLRG** — Settlement through a clearing system such as TARGET2, EURO1, or CHIPS. Most common for domestic and regional clearing.
- **INDA** — Settlement on the books of the instructed agent. The debtor agent holds a nostro account with the next agent. Typical for bilateral correspondent banking.
- **INGA** — Settlement on the books of the instructing agent. The instructed agent holds a nostro account with the sending agent. Less common than INDA.
- **COVE** — Settlement through a separate cover payment. A pacs.009 carries the funding leg while pacs.008 carries the customer data directly. Used in cross-border correspondent banking.

## Charge bearer codes

The ChrgBr element specifies who bears the payment charges.

- **DEBT** — Debtor bears all charges (MT103 equivalent: OUR). Creditor receives the full amount.
- **CRED** — Creditor bears all charges (MT103 equivalent: BEN). Charges are deducted from the transfer.
- **SHAR** — Charges are shared (MT103 equivalent: SHA). Each party pays their own agent's charges. Most common for cross-border payments.
- **SLEV** — Charges follow the service level. Mandatory for SEPA. No deductions from the transfer amount.

## MT103 to pacs.008 field mapping

<div class="api-fields-table" tabindex="0" aria-label="MT103 to pacs.008 field mapping">
  <table>
    <caption>Key field mapping from MT103 to pacs.008</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">MT103 field</th>
        <th scope="col">MT103 name</th>
        <th scope="col">pacs.008 XML path</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field">20</td><td class="api-fields-table__desc">Sender's Reference</td><td class="api-fields-table__constraint">GrpHdr/MsgId or PmtId/InstrId</td></tr>
        <tr><td class="api-fields-table__field">23B</td><td class="api-fields-table__desc">Bank Operation Code</td><td class="api-fields-table__constraint">PmtTpInf/SvcLvl</td></tr>
        <tr><td class="api-fields-table__field">32A</td><td class="api-fields-table__desc">Value Date / Amount</td><td class="api-fields-table__constraint">IntrBkSttlmDt + IntrBkSttlmAmt</td></tr>
        <tr><td class="api-fields-table__field">33B</td><td class="api-fields-table__desc">Instructed Amount</td><td class="api-fields-table__constraint">InstdAmt</td></tr>
        <tr><td class="api-fields-table__field">50a</td><td class="api-fields-table__desc">Ordering Customer</td><td class="api-fields-table__constraint">Dbtr + DbtrAcct</td></tr>
        <tr><td class="api-fields-table__field">52a</td><td class="api-fields-table__desc">Ordering Institution</td><td class="api-fields-table__constraint">DbtrAgt</td></tr>
        <tr><td class="api-fields-table__field">57a</td><td class="api-fields-table__desc">Account With Institution</td><td class="api-fields-table__constraint">CdtrAgt</td></tr>
        <tr><td class="api-fields-table__field">59a</td><td class="api-fields-table__desc">Beneficiary Customer</td><td class="api-fields-table__constraint">Cdtr + CdtrAcct</td></tr>
        <tr><td class="api-fields-table__field">70</td><td class="api-fields-table__desc">Remittance Information</td><td class="api-fields-table__constraint">RmtInf/Ustrd or RmtInf/Strd</td></tr>
        <tr><td class="api-fields-table__field">71A</td><td class="api-fields-table__desc">Details of Charges</td><td class="api-fields-table__constraint">ChrgBr (BEN→CRED, OUR→DEBT, SHA→SHAR)</td></tr>
        <tr><td class="api-fields-table__field">72</td><td class="api-fields-table__desc">Sender to Receiver Info</td><td class="api-fields-table__constraint">InstrForCdtrAgt / InstrForNxtAgt</td></tr>
        <tr><td class="api-fields-table__field">N/A</td><td class="api-fields-table__desc">UETR (Block 3, field 121)</td><td class="api-fields-table__constraint">PmtId/UETR</td></tr>
    </tbody>
  </table>
</div>

## Status and reason codes

### pacs.002 status codes

<div class="api-fields-table" tabindex="0" aria-label="pacs.002 status codes">
  <table>
    <caption>Transaction status codes in pacs.002</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Meaning</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>ACCP</code></td><td class="api-fields-table__desc">Accepted — preceding checks passed</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSP</code></td><td class="api-fields-table__desc">Accepted — settlement in progress</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSC</code></td><td class="api-fields-table__desc">Accepted — settlement completed</td></tr>
        <tr><td class="api-fields-table__field"><code>RCVD</code></td><td class="api-fields-table__desc">Received — not yet processed</td></tr>
        <tr><td class="api-fields-table__field"><code>PDNG</code></td><td class="api-fields-table__desc">Pending — further processing needed</td></tr>
        <tr><td class="api-fields-table__field"><code>RJCT</code></td><td class="api-fields-table__desc">Rejected — with reason code</td></tr>
    </tbody>
  </table>
</div>

### Common rejection and return reason codes

<div class="api-fields-table" tabindex="0" aria-label="Common reason codes">
  <table>
    <caption>Frequently used rejection and return reason codes</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>AC01</code></td><td class="api-fields-table__desc">Incorrect account number</td><td class="api-fields-table__constraint">Account number is invalid or does not exist</td></tr>
        <tr><td class="api-fields-table__field"><code>AC04</code></td><td class="api-fields-table__desc">Closed account</td><td class="api-fields-table__constraint">Account is closed</td></tr>
        <tr><td class="api-fields-table__field"><code>AC06</code></td><td class="api-fields-table__desc">Blocked account</td><td class="api-fields-table__constraint">Account is blocked for transactions</td></tr>
        <tr><td class="api-fields-table__field"><code>AM04</code></td><td class="api-fields-table__desc">Insufficient funds</td><td class="api-fields-table__constraint">Insufficient funds in debtor account</td></tr>
        <tr><td class="api-fields-table__field"><code>AM05</code></td><td class="api-fields-table__desc">Duplication</td><td class="api-fields-table__constraint">Duplicate payment detected</td></tr>
        <tr><td class="api-fields-table__field"><code>BE04</code></td><td class="api-fields-table__desc">Missing creditor address</td><td class="api-fields-table__constraint">Creditor address is missing or incomplete</td></tr>
        <tr><td class="api-fields-table__field"><code>CUST</code></td><td class="api-fields-table__desc">Requested by customer</td><td class="api-fields-table__constraint">Return or rejection requested by the customer</td></tr>
        <tr><td class="api-fields-table__field"><code>DUPL</code></td><td class="api-fields-table__desc">Duplicate payment</td><td class="api-fields-table__constraint">Duplicate payment identified</td></tr>
        <tr><td class="api-fields-table__field"><code>FOCR</code></td><td class="api-fields-table__desc">Following cancellation</td><td class="api-fields-table__constraint">Following a cancellation request</td></tr>
        <tr><td class="api-fields-table__field"><code>FR01</code></td><td class="api-fields-table__desc">Fraud</td><td class="api-fields-table__constraint">Suspected fraud</td></tr>
        <tr><td class="api-fields-table__field"><code>RC01</code></td><td class="api-fields-table__desc">Incorrect BIC</td><td class="api-fields-table__constraint">BIC is incorrect or unknown</td></tr>
        <tr><td class="api-fields-table__field"><code>RR03</code></td><td class="api-fields-table__desc">Missing creditor name/address</td><td class="api-fields-table__constraint">Creditor name or address data is missing</td></tr>
        <tr><td class="api-fields-table__field"><code>TM01</code></td><td class="api-fields-table__desc">Cut-off time</td><td class="api-fields-table__constraint">Cut-off time has passed</td></tr>
    </tbody>
  </table>
</div>

## Postal address format

### Structured address

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### Unstructured address (deprecated for CBPR+ after November 2026)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

Key constraints: StrtNm max 70 characters (CBPR+), TwnNm max 35 characters (CBPR+), Ctry is ISO 3166-1 alpha-2, AdrLine max 70 characters per line and max 7 lines.

## Party identification

Parties in pacs.008 support multiple identification methods:

- **BIC** — Business Identifier Code per ISO 9362. 8 or 11 characters (BBBBCCLL or BBBBCCLLBBB). Used in FinInstnId/BICFI for agents and OrgId/AnyBIC for parties.
- **LEI** — Legal Entity Identifier per ISO 17442. 20 alphanumeric characters. Appears in OrgId/LEI for parties and FinInstnId/LEI for agents. Improves entity disambiguation for regulatory reporting.
- **IBAN** — International Bank Account Number per ISO 13616. Used in DbtrAcct/Id/IBAN and CdtrAcct/Id/IBAN.
- **Organisation IDs** — Other scheme-based identifiers (tax ID, DUNS, customer number) via OrgId/Othr with a scheme name code.
- **Private IDs** — For natural persons: date and place of birth, passport (CCPT), national ID (NIDN), or driver's licence (DRLC) via PrvtId.

## Remittance information

Remittance data in pacs.008 uses the RmtInf element with two forms:

**Unstructured** — Free text up to 140 characters per occurrence. Simple but limits automated reconciliation.

**Structured** — Document references with type codes, numbers, dates, and amounts. Common document types: CINV (commercial invoice), CREN (credit note), SOAC (statement of account). Supports ISO 11649 creditor references (RF + check digits + reference) via CdtrRefInf. Enables automated invoice matching and multi-invoice payments.

## UETR and gpi tracking

UETR (Unique End-to-End Transaction Reference) is a UUID v4 generated by the debtor agent. It appears in PmtId/UETR across pacs.008, pacs.009, pacs.002, pacs.004, pacs.007, and pacs.028. It must remain unchanged throughout the entire payment chain.

SWIFT gpi uses the UETR to track payments through a cloud-based Tracker database. Each agent confirms receipt and processing, enabling end-to-end visibility. The gpi SLA for cross-border payments targets same-day credit to the creditor account.

## References

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

