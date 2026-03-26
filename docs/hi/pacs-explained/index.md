---
title: "PACS messages explained | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: hi-IN
lastUpdated: true
image: /logo.svg
---

# PACS messages explained

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## भुगतान जीवनचक्र

संपूर्ण pacs भुगतान जीवनचक्र में छह चरण और कई संदेश प्रकार शामिल हैं।

**चरण 1 — आरंभ।** भुगतान ग्राहक-से-बैंक डोमेन (pain.001) में शुरू होता है। ऋणी का बैंक निर्देश प्राप्त करता है और इसे इंटरबैंक डोमेन में मैप करता है।

**चरण 2 — इंटरबैंक निर्देश।** ऋणी एजेंट pacs.008 बनाता है और श्रृंखला में अगले एजेंट को भेजता है। सीरियल फ़्लो में, pacs.008 मध्यवर्तियों के माध्यम से चलता है। कवर फ़्लो में, pacs.008 सीधे लेनदार एजेंट को जाता है जबकि pacs.009 वित्तपोषण ले जाता है।

**चरण 3 — स्थिति रिपोर्टिंग।** प्रत्येक हॉप पर, प्राप्तकर्ता एजेंट pacs.002 लौटा सकता है। CBPR+ में, pacs.002 अनिवार्य है।

**चरण 4 — निपटान।** CLRG, INDA/INGA, या COVE के माध्यम से निपटान होता है।

**चरण 5 — लाभार्थी को क्रेडिट।** लेनदार एजेंट लाभार्थी को क्रेडिट करता है।

**चरण 6 — अपवाद हैंडलिंग।** pacs.004 धनराशि वापस करता है, pacs.007 उलटता है, pacs.028 स्थिति पूछता है।

### सीरियल विधि फ़्लो

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### कवर विधि फ़्लो

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## pacs.008 की XML संरचना

pacs.008 में दो मुख्य ब्लॉक हैं: Group Header (GrpHdr) और Credit Transfer Transaction Information (CdtTrfTxInf)।

### Group Header (GrpHdr)

- **MsgId** — अद्वितीय संदेश पहचानकर्ता। अधिकतम 35 वर्ण।
- **CreDtTm** — ISO 8601 प्रारूप में निर्माण टाइमस्टैम्प।
- **NbOfTxs** — लेनदेन की संख्या।
- **SttlmInf** — निपटान जानकारी।
- **IntrBkSttlmDt** — इंटरबैंक निपटान तिथि।
- **PmtTpInf** — भुगतान प्रकार जानकारी।

### Credit Transfer Transaction Information (CdtTrfTxInf)

- **PmtId** — InstrId, EndToEndId, TxId, UETR।
- **IntrBkSttlmAmt** — मुद्रा कोड के साथ इंटरबैंक निपटान राशि।
- **InstdAmt** — मूल निर्देशित राशि।
- **ChrgBr** — शुल्क वाहक कोड।
- **Dbtr / DbtrAcct / DbtrAgt** — ऋणी विवरण।
- **Cdtr / CdtrAcct / CdtrAgt** — लेनदार विवरण।
- **IntrmyAgt1 / 2 / 3** — मध्यवर्ती एजेंट।
- **RmtInf** — प्रेषण जानकारी।
- **Purp** — संरचित उद्देश्य कोड।
- **RgltryRptg** — नियामक रिपोर्टिंग।

## भुगतान पहचानकर्ता

<div class="api-fields-table" tabindex="0" aria-label="भुगतान पहचानकर्ता">
  <table>
    <caption>भुगतान पहचानकर्ता और उनकी भूमिकाएँ</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">पहचानकर्ता</th>
        <th scope="col">निर्धारित करने वाला</th>
        <th scope="col">श्रृंखला में बदलता है?</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><strong>MsgId</strong></td><td class="api-fields-table__desc">प्रत्येक भेजने वाला एजेंट</td><td class="api-fields-table__constraint">हाँ — प्रति संदेश नया</td></tr>
        <tr><td class="api-fields-table__field"><strong>InstrId</strong></td><td class="api-fields-table__desc">प्रत्येक निर्देश देने वाला एजेंट</td><td class="api-fields-table__constraint">हाँ — प्रति हॉप बदल सकता है</td></tr>
        <tr><td class="api-fields-table__field"><strong>EndToEndId</strong></td><td class="api-fields-table__desc">प्रवर्तक (ऋणी)</td><td class="api-fields-table__constraint">नहीं — परिवर्तित नहीं किया जाना चाहिए</td></tr>
        <tr><td class="api-fields-table__field"><strong>TxId</strong></td><td class="api-fields-table__desc">प्रथम निर्देश देने वाला एजेंट</td><td class="api-fields-table__constraint">नहीं — परिवर्तित नहीं किया जाना चाहिए</td></tr>
        <tr><td class="api-fields-table__field"><strong>UETR</strong></td><td class="api-fields-table__desc">ऋणी एजेंट</td><td class="api-fields-table__constraint">नहीं — सार्वभौमिक ट्रैकिंग</td></tr>
    </tbody>
  </table>
</div>

## निपटान विधियाँ

- **CLRG** — समाशोधन प्रणाली के माध्यम से निपटान।
- **INDA** — निर्देशित एजेंट की पुस्तकों पर निपटान।
- **INGA** — निर्देश देने वाले एजेंट की पुस्तकों पर निपटान।
- **COVE** — अलग कवर भुगतान के माध्यम से निपटान।

## शुल्क वाहक कोड

- **DEBT** — ऋणी सभी शुल्क वहन करता है (MT103: OUR)।
- **CRED** — लेनदार सभी शुल्क वहन करता है (MT103: BEN)।
- **SHAR** — शुल्क साझा (MT103: SHA)।
- **SLEV** — सेवा स्तर। SEPA के लिए अनिवार्य।

## स्थिति और कारण कोड

### pacs.002 स्थिति कोड

<div class="api-fields-table" tabindex="0" aria-label="pacs.002 स्थिति कोड">
  <table>
    <caption>pacs.002 में लेनदेन स्थिति कोड</caption>
    <colgroup><col class="api-fields-table__col-field"><col class="api-fields-table__col-desc"></colgroup>
    <thead><tr><th scope="col">कोड</th><th scope="col">अर्थ</th></tr></thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>ACCP</code></td><td class="api-fields-table__desc">स्वीकृत — पूर्ववर्ती जाँचें पास</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSP</code></td><td class="api-fields-table__desc">स्वीकृत — निपटान प्रगति में</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSC</code></td><td class="api-fields-table__desc">स्वीकृत — निपटान पूर्ण</td></tr>
        <tr><td class="api-fields-table__field"><code>RCVD</code></td><td class="api-fields-table__desc">प्राप्त — अभी तक संसाधित नहीं</td></tr>
        <tr><td class="api-fields-table__field"><code>PDNG</code></td><td class="api-fields-table__desc">लंबित — आगे प्रसंस्करण आवश्यक</td></tr>
        <tr><td class="api-fields-table__field"><code>RJCT</code></td><td class="api-fields-table__desc">अस्वीकृत — कारण कोड के साथ</td></tr>
    </tbody>
  </table>
</div>

## डाक पता प्रारूप

### संरचित पता

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### असंरचित पता (नवंबर 2026 के बाद CBPR+ के लिए अप्रचलित)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

## UETR और gpi ट्रैकिंग

UETR एक UUID v4 है जो ऋणी एजेंट द्वारा उत्पन्न होता है। यह संपूर्ण भुगतान श्रृंखला में अपरिवर्तित रहना चाहिए। SWIFT gpi क्लाउड-आधारित ट्रैकर डेटाबेस के माध्यम से भुगतान ट्रैक करने के लिए UETR का उपयोग करता है।

## संदर्भ

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

