---
title: "PACS संदेशों की व्याख्या | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: hi-IN
lastUpdated: true
image: /logo.webp
---

# PACS संदेशों की व्याख्या

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## भुगतान जीवनचक्र

संपूर्ण pacs भुगतान जीवनचक्र में छह चरण और कई संदेश प्रकार शामिल हैं जो एक साथ मिलकर काम करते हैं।

**चरण 1 — आरंभ।** भुगतान ग्राहक-से-बैंक डोमेन (pain.001) में शुरू होता है। ऋणी का बैंक निर्देश प्राप्त करता है और इसे इंटरबैंक डोमेन में मैप करता है।

**चरण 2 — इंटरबैंक निर्देश।** ऋणी एजेंट pacs.008 बनाता है और श्रृंखला में अगले एजेंट को भेजता है। सीरियल फ़्लो में, pacs.008 मध्यवर्तियों के माध्यम से चरणबद्ध रूप से आगे बढ़ता है। कवर फ़्लो में, pacs.008 सीधे ऋणी एजेंट से लेनदार एजेंट को जाता है, जबकि एक अलग pacs.009 संवाददाता श्रृंखला के माध्यम से वित्तपोषण चरण ले जाता है।

**चरण 3 — स्थिति रिपोर्टिंग।** प्रत्येक हॉप पर, प्राप्तकर्ता एजेंट pacs.002 लौटा सकता है जो स्वीकृति (ACCP/ACSP/ACSC), अस्वीकृति (RJCT), या लंबित स्थिति (PDNG) की पुष्टि करता है। CBPR+ में, pacs.002 सभी भुगतान स्थिति संचार के लिए अनिवार्य है।

**चरण 4 — निपटान।** निपटान समाशोधन प्रणाली (CLRG), संवाददाता खातों (INDA/INGA), या कवर भुगतान (COVE) के माध्यम से होता है। इंटरबैंक निपटान तिथि और राशि निर्धारित करती है कि कब और कितना निपटान होगा।

**चरण 5 — लाभार्थी को क्रेडिट।** लेनदार एजेंट लाभार्थी को क्रेडिट करता है और ग्राहक अधिसूचना भेज सकता है।

**चरण 6 — अपवाद हैंडलिंग।** यदि निपटान के बाद लाभार्थी को क्रेडिट नहीं किया जा सकता, तो pacs.004 श्रृंखला के माध्यम से धनराशि वापस करता है। यदि प्रवर्तक त्रुटि या धोखाधड़ी का पता लगाता है, तो pacs.007 श्रृंखला में आगे बढ़ता है। यदि स्थिति अज्ञात है, तो pacs.028 अगले एजेंट से पूछताछ करता है और उत्तर pacs.002 के माध्यम से लौटता है।

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

Group Header प्रत्येक संदेश में ठीक एक बार दिखाई देता है और इसमें शामिल हैं:

- **MsgId** — भेजने वाले एजेंट द्वारा निर्दिष्ट अद्वितीय संदेश पहचानकर्ता। अधिकतम 35 वर्ण, प्रत्येक प्रेषक के लिए अद्वितीय होना चाहिए।
- **CreDtTm** — ISO 8601 प्रारूप में निर्माण टाइमस्टैम्प।
- **NbOfTxs** — संदेश में व्यक्तिगत लेनदेन की संख्या।
- **SttlmInf** — निपटान जानकारी जिसमें निपटान विधि (SttlmMtd) और वैकल्पिक रूप से समाशोधन प्रणाली और निपटान खाता शामिल है।
- **IntrBkSttlmDt** — इंटरबैंक निपटान तिथि।
- **PmtTpInf** — भुगतान प्रकार जानकारी जिसमें प्राथमिकता, सेवा स्तर, स्थानीय साधन और श्रेणी उद्देश्य शामिल हैं।

### Credit Transfer Transaction Information (CdtTrfTxInf)

प्रत्येक लेनदेन में शामिल हैं:

- **PmtId** — भुगतान पहचानकर्ता: InstrId, EndToEndId, TxId, और UETR।
- **IntrBkSttlmAmt** — मुद्रा कोड के साथ इंटरबैंक निपटान राशि।
- **InstdAmt** — मूल निर्देशित राशि (मुद्रा विनिमय के कारण निपटान राशि से भिन्न हो सकती है)।
- **ChrgBr** — शुल्क वाहक कोड (DEBT, CRED, SHAR, या SLEV)।
- **Dbtr / DbtrAcct / DbtrAgt** — ऋणी का नाम, पता, पहचान, खाता और एजेंट।
- **Cdtr / CdtrAcct / CdtrAgt** — लेनदार का नाम, पता, पहचान, खाता और एजेंट।
- **IntrmyAgt1 / 2 / 3** — श्रृंखला में तीन मध्यवर्ती एजेंट तक।
- **RmtInf** — प्रेषण जानकारी, या तो असंरचित (मुक्त पाठ) या संरचित (दस्तावेज़ संदर्भ, राशियाँ, तिथियाँ)।
- **Purp** — संरचित उद्देश्य कोड।
- **RgltryRptg** — नियामक रिपोर्टिंग विवरण।

## भुगतान पहचानकर्ता

pacs संदेश कई पहचानकर्ताओं का उपयोग करते हैं जो भुगतान श्रृंखला में विभिन्न भूमिकाएँ निभाते हैं।

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
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">प्रत्येक भेजने वाला एजेंट</td>
          <td class="api-fields-table__constraint">हाँ — प्रति संदेश नया</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">प्रत्येक निर्देश देने वाला एजेंट</td>
          <td class="api-fields-table__constraint">हाँ — प्रति हॉप बदल सकता है</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">प्रवर्तक (ऋणी)</td>
          <td class="api-fields-table__constraint">नहीं — परिवर्तित नहीं किया जाना चाहिए</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">प्रथम निर्देश देने वाला एजेंट</td>
          <td class="api-fields-table__constraint">नहीं — परिवर्तित नहीं किया जाना चाहिए</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">ऋणी एजेंट</td>
          <td class="api-fields-table__constraint">नहीं — सार्वभौमिक ट्रैकिंग</td>
        </tr>
    </tbody>
  </table>
</div>

## निपटान विधियाँ

SttlmMtd तत्व परिभाषित करता है कि इंटरबैंक निपटान कैसे होता है।

- **CLRG** — समाशोधन प्रणाली जैसे TARGET2, EURO1, या CHIPS के माध्यम से निपटान। घरेलू और क्षेत्रीय समाशोधन के लिए सबसे आम।
- **INDA** — निर्देशित एजेंट की पुस्तकों पर निपटान। ऋणी एजेंट अगले एजेंट के पास नोस्ट्रो खाता रखता है। द्विपक्षीय संवाददाता बैंकिंग के लिए विशिष्ट।
- **INGA** — निर्देश देने वाले एजेंट की पुस्तकों पर निपटान। निर्देशित एजेंट भेजने वाले एजेंट के पास नोस्ट्रो खाता रखता है। INDA से कम आम।
- **COVE** — अलग कवर भुगतान के माध्यम से निपटान। pacs.009 वित्तपोषण चरण ले जाता है जबकि pacs.008 सीधे ग्राहक डेटा ले जाता है। सीमा पार संवाददाता बैंकिंग में उपयोग किया जाता है।

## शुल्क वाहक कोड

ChrgBr तत्व निर्दिष्ट करता है कि भुगतान शुल्क कौन वहन करता है।

- **DEBT** — ऋणी सभी शुल्क वहन करता है (MT103 समतुल्य: OUR)। लेनदार को पूरी राशि प्राप्त होती है।
- **CRED** — लेनदार सभी शुल्क वहन करता है (MT103 समतुल्य: BEN)। शुल्क हस्तांतरण से काटे जाते हैं।
- **SHAR** — शुल्क साझा किए जाते हैं (MT103 समतुल्य: SHA)। प्रत्येक पक्ष अपने एजेंट के शुल्क का भुगतान करता है। सीमा पार भुगतानों के लिए सबसे आम।
- **SLEV** — शुल्क सेवा स्तर का अनुसरण करते हैं। SEPA के लिए अनिवार्य। हस्तांतरण राशि से कोई कटौती नहीं।

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

मुख्य बाधाएँ: StrtNm अधिकतम 70 वर्ण (CBPR+), TwnNm अधिकतम 35 वर्ण (CBPR+), Ctry ISO 3166-1 alpha-2 प्रारूप, AdrLine प्रति पंक्ति अधिकतम 70 वर्ण और अधिकतम 7 पंक्तियाँ।

## पक्ष पहचान

pacs.008 में पक्ष कई पहचान विधियों का समर्थन करते हैं:

- **BIC** — ISO 9362 के अनुसार व्यापार पहचानकर्ता कोड। 8 या 11 वर्ण (BBBBCCLL या BBBBCCLLBBB)। एजेंटों के लिए FinInstnId/BICFI और पक्षों के लिए OrgId/AnyBIC में उपयोग किया जाता है।
- **LEI** — ISO 17442 के अनुसार कानूनी इकाई पहचानकर्ता। 20 अल्फ़ान्यूमेरिक वर्ण। पक्षों के लिए OrgId/LEI और एजेंटों के लिए FinInstnId/LEI में दिखाई देता है। नियामक रिपोर्टिंग के लिए इकाई विसंदिग्धता में सुधार करता है।
- **IBAN** — ISO 13616 के अनुसार अंतर्राष्ट्रीय बैंक खाता संख्या। DbtrAcct/Id/IBAN और CdtrAcct/Id/IBAN में उपयोग किया जाता है।
- **संगठन पहचानकर्ता** — अन्य योजना-आधारित पहचानकर्ता (कर आईडी, DUNS, ग्राहक संख्या) OrgId/Othr के माध्यम से योजना नाम कोड के साथ।
- **निजी पहचानकर्ता** — प्राकृतिक व्यक्तियों के लिए: जन्म तिथि और स्थान, पासपोर्ट (CCPT), राष्ट्रीय पहचान पत्र (NIDN) या ड्राइविंग लाइसेंस (DRLC) PrvtId के माध्यम से।

## प्रेषण जानकारी

pacs.008 में प्रेषण डेटा RmtInf तत्व का दो रूपों में उपयोग करता है:

**असंरचित** — प्रत्येक घटना के लिए 140 वर्णों तक मुक्त पाठ। सरल लेकिन स्वचालित मिलान को सीमित करता है।

**संरचित** — प्रकार कोड, संख्या, तिथियों और राशियों के साथ दस्तावेज़ संदर्भ। सामान्य दस्तावेज़ प्रकार: CINV (वाणिज्यिक चालान), CREN (क्रेडिट नोट), SOAC (खाता विवरण)। CdtrRefInf के माध्यम से ISO 11649 लेनदार संदर्भों (RF + चेक अंक + संदर्भ) का समर्थन करता है। स्वचालित चालान मिलान और बहु-चालान भुगतान सक्षम करता है।

## UETR और gpi ट्रैकिंग

UETR (Unique End-to-End Transaction Reference) ऋणी एजेंट द्वारा उत्पन्न एक UUID v4 है। यह pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 और pacs.028 में PmtId/UETR में दिखाई देता है। यह संपूर्ण भुगतान श्रृंखला में अपरिवर्तित रहना चाहिए।

SWIFT gpi क्लाउड-आधारित Tracker डेटाबेस के माध्यम से भुगतानों को ट्रैक करने के लिए UETR का उपयोग करता है। प्रत्येक एजेंट प्राप्ति और प्रसंस्करण की पुष्टि करता है, जिससे एंड-टू-एंड दृश्यता सक्षम होती है। सीमा पार भुगतानों के लिए gpi SLA लेनदार खाते में उसी दिन क्रेडिट का लक्ष्य रखता है।

## संदर्भ

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

