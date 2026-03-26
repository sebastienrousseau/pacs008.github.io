---
title: "pacs.010.001.05 | वित्तीय संस्थानों के बीच प्रत्यक्ष डेबिट | pacs008"
description: pacs.010 संदेश का उपयोग वित्तीय संस्थानों के बीच संस्थान के अपने खाते पर प्रत्यक्ष डेबिट लेनदेन के लिए किया जाता है। यह एक संस्थान को दूसरे संस्थान के...
lang: hi-IN
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.010 common in retail payment products?"
    answer: "Usually no. It fits bank-to-bank direct-debit scenarios better than standard retail products."
  - question: "What should teams design first?"
    answer: "Start with approval rules, bilateral controls, and exception handling before finalising XML templates."
---

# pacs.010.001.05 — वित्तीय संस्थानों के बीच प्रत्यक्ष डेबिट

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">फ़ील्ड</th>
        <th scope="col">मान</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO नाम</strong></td>
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>पंजीकरण स्थिति</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>वर्ष</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>संस्करण</strong></td>
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## अवलोकन

pacs.010 संदेश का उपयोग वित्तीय संस्थानों के बीच संस्थान के अपने खाते पर प्रत्यक्ष डेबिट लेनदेन के लिए किया जाता है। यह एक संस्थान को दूसरे संस्थान के खाते से सीधे धन एकत्र करने में सक्षम बनाता है।

> 23 मार्च 2026 को प्राथमिक स्रोतों के विरुद्ध अंतिम समीक्षा की गई। ISO 20022 कैटलॉग संदर्भ तिथि: 2025-02-27; स्रोत लिंक नीचे सूचीबद्ध हैं।

## प्रमुख डेटा तत्व

- **GrpHdr** — संदेश पहचान और निपटान सूचना के साथ ग्रुप हेडर
- **DrctDbtTxInf** — संग्रह राशि के साथ प्रत्यक्ष डेबिट लेनदेन सूचना
- **Cdtr / CdtrAgt** — लेनदार संस्थान और उसके एजेंट की पहचान
- **Dbtr / DbtrAgt** — ऋणी संस्थान और उसके एजेंट की पहचान
- **IntrBkSttlmAmt** — निपटान मुद्रा में अंतरबैंक निपटान राशि

## व्यावसायिक संदर्भ

- वित्तीय संस्थानों के बीच अंतरबैंक प्रत्यक्ष डेबिट संग्रह का समर्थन करता है
- शुल्क संग्रह, मार्जिन कॉल और संस्थागत निपटान दायित्वों के लिए उपयोग किया जाता है
- भाग लेने वाले संस्थानों के बीच पूर्व-सहमत द्विपक्षीय व्यवस्थाओं की आवश्यकता होती है
- संस्थागत नकद प्रबंधन और अंतरबैंक निपटान चक्रों के लिए महत्वपूर्ण

<div class="operational-matrix-table" tabindex="0" aria-label="प्रमुख डेटा तत्व व्यावसायिक संदर्भ">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>प्रमुख डेटा तत्व</th>
        <th>व्यावसायिक संदर्भ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — संदेश पहचान और निपटान सूचना के साथ ग्रुप हेडर</td>
          <td class="operational-matrix-table__right">वित्तीय संस्थानों के बीच अंतरबैंक प्रत्यक्ष डेबिट संग्रह का समर्थन करता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — संग्रह राशि के साथ प्रत्यक्ष डेबिट लेनदेन सूचना</td>
          <td class="operational-matrix-table__right">शुल्क संग्रह, मार्जिन कॉल और संस्थागत निपटान दायित्वों के लिए उपयोग किया जाता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — लेनदार संस्थान और उसके एजेंट की पहचान</td>
          <td class="operational-matrix-table__right">भाग लेने वाले संस्थानों के बीच पूर्व-सहमत द्विपक्षीय व्यवस्थाओं की आवश्यकता होती है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — ऋणी संस्थान और उसके एजेंट की पहचान</td>
          <td class="operational-matrix-table__right">संस्थागत नकद प्रबंधन और अंतरबैंक निपटान चक्रों के लिए महत्वपूर्ण</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — निपटान मुद्रा में अंतरबैंक निपटान राशि</td>
          <td class="operational-matrix-table__right">लेनदार संस्थान पूर्व-सहमत व्यवस्था के तहत धन एकत्र करने के लिए ऋणी संस्थान को pacs.010 भेजता है। ऋणी संस्थान अनुरोध को मान्य करता है और प्रत्यक्ष डेबिट का निपटान या अस्वीकृति करता है।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ और स्कीमा संदर्भ

- अंतरबैंक प्रत्यक्ष डेबिट प्रसंस्करण के लिए MT204 के तत्वों को प्रतिस्थापित करता है
- संरचित पक्ष पहचान अन्य pacs संदेशों के समान आवश्यकताओं का पालन करती है
- संस्थागत पहचानकर्ताओं (BIC, LEI) की वैधीकरण अनिवार्य है
- बाजार अवसंरचनाओं में पूर्ण ISO 20022 अपनाने के रोडमैप में शामिल

## संदेश प्रवाह

लेनदार संस्थान पूर्व-सहमत व्यवस्था के तहत धन एकत्र करने के लिए ऋणी संस्थान को pacs.010 भेजता है। ऋणी संस्थान अनुरोध को मान्य करता है और प्रत्यक्ष डेबिट का निपटान या अस्वीकृति करता है।

## संस्करण अंतर तालिका

<div class="version-diff-table" tabindex="0" aria-label="संस्करण अंतर तालिका">
  <table>
    <caption>संस्करण अंतर तालिका</caption>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>संस्करण सीमा</th>
        <th>यह क्यों महत्वपूर्ण है</th>
        <th>कार्यान्वयन निष्कर्ष</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">pacs008 में वर्तमान कार्यान्वयन</td>
          <td class="version-diff-table__takeaway">यह वर्तमान परियोजना में संस्थागत प्रत्यक्ष डेबिट समर्थन के लिए एक संदर्भ बिंदु है।</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">बाद का कैटलॉग संस्करण</td>
          <td class="version-diff-table__takeaway">नई अवसंरचना आवश्यकताओं को अपनाने से पहले इसकी समीक्षा करें।</td>
        </tr>
    </tbody>
  </table>
</div>

## टिप्पणीयुक्त XML उदाहरण

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

### फ़ील्ड टिप्पणियाँ

- `InstrId`: Use an identifier that links back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need clear bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly. This is not a retail-customer debit model.

## प्राथमिक संदर्भ

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

## संबंधित संदेश
<div class="related-messages-table" tabindex="0" aria-label="संबंधित संदेश">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>संदेश प्रकार</th>
        <th>विवरण</th>
        <th>अवलोकन</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/hi/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर</td>
          <td class="related-messages-table__overview">pacs.009 संदेश का उपयोग वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर के लिए किया जाता है जहां हस्तांतरण ग्राहक की ओर से नहीं बल्कि संस्थान की अपनी ओर से होता है। यह अंतरबैंक वित्तपोषण, कवर भुगतान और तरलता प्रबंधन का समर्थन करता है।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/hi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-से-FI भुगतान स्थिति रिपोर्ट</td>
          <td class="related-messages-table__overview">pacs.002 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति रिपोर्ट करने के लिए भेजा जाता है। यह भुगतान संदेश के भीतर व्यक्तिगत लेनदेन के लिए पुष्टि, अस्वीकृति या लंबित स्थिति की जानकारी प्रदान करता है।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/hi/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">FI-से-FI ग्राहक प्रत्यक्ष डेबिट</td>
          <td class="related-messages-table__overview">pacs.003 संदेश वित्तीय संस्थानों के बीच ग्राहक प्रत्यक्ष डेबिट निर्देश को निष्पादित करने के लिए आदान-प्रदान किया जाता है। यह लेनदार के बैंक को लेनदार की ओर से ऋणी के बैंक से धन एकत्र करने में सक्षम बनाता है।</td>
        </tr>
    </tbody>
  </table>
</div>

