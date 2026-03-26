---
title: "pacs.007.001.11 | FI-से-FI भुगतान रिवर्सल | pacs008"
description: pacs.007 संदेश का उपयोग पहले भेजे गए भुगतान निर्देश को उलटने के लिए किया जाता है जो अभी तक निपटाया नहीं गया है या निपटाए गए भुगतान के प्रत्यावर्तन का...
lang: hi-IN
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.007 only for fraud scenarios?"
    answer: "No. Fraud is a major use case, but any instructing-side need to reverse a payment can trigger it."
  - question: "Can it be handled like a normal return?"
    answer: "No. Reversal timing, reason capture, and reconciliation differ materially from returns."
---

# pacs.007.001.11 — FI-से-FI भुगतान रिवर्सल

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## अवलोकन

pacs.007 संदेश का उपयोग पहले भेजे गए भुगतान निर्देश को उलटने के लिए किया जाता है जो अभी तक निपटाया नहीं गया है या निपटाए गए भुगतान के प्रत्यावर्तन का अनुरोध करने के लिए। pacs.004 (वापसी) के विपरीत, इसे मूल निर्देश देने वाले एजेंट द्वारा आरंभ किया जाता है।

> 23 मार्च 2026 को प्राथमिक स्रोतों के विरुद्ध अंतिम समीक्षा की गई। ISO 20022 कैटलॉग संदर्भ तिथि: 2025-02-27; स्रोत लिंक नीचे सूचीबद्ध हैं।

## प्रमुख डेटा तत्व

- **GrpHdr** — संदेश पहचान और निर्माण टाइमस्टैम्प के साथ ग्रुप हेडर
- **TxInf** — प्रत्यावर्तन राशि और पक्षों के साथ लेनदेन सूचना
- **OrgnlGrpInf** — स्रोत संदेश का संदर्भ देने वाली मूल समूह सूचना
- **RvslRsnInf** — संरचित कारण कोड के साथ प्रत्यावर्तन कारण सूचना
- **OrgnlTxRef** — एंड-टू-एंड अनुरेखणीयता के लिए मूल लेनदेन संदर्भ

## व्यावसायिक संदर्भ

- जब मूल प्रेषक निपटान से पहले या बाद में त्रुटि की पहचान करता है तब आरंभ किया जाता है
- धोखाधड़ी परिदृश्यों में उपयोग किया जाता है जहां तीव्र प्रत्यावर्तन आवश्यक है
- मूल भुगतान राशि के पूर्ण और आंशिक दोनों प्रत्यावर्तन का समर्थन करता है
- डाउनस्ट्रीम प्रसंस्करण के लिए संरचित प्रत्यावर्तन कारण कोड वहन करता है

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — संदेश पहचान और निर्माण टाइमस्टैम्प के साथ ग्रुप हेडर</td>
          <td class="operational-matrix-table__right">जब मूल प्रेषक निपटान से पहले या बाद में त्रुटि की पहचान करता है तब आरंभ किया जाता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — प्रत्यावर्तन राशि और पक्षों के साथ लेनदेन सूचना</td>
          <td class="operational-matrix-table__right">धोखाधड़ी परिदृश्यों में उपयोग किया जाता है जहां तीव्र प्रत्यावर्तन आवश्यक है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — स्रोत संदेश का संदर्भ देने वाली मूल समूह सूचना</td>
          <td class="operational-matrix-table__right">मूल भुगतान राशि के पूर्ण और आंशिक दोनों प्रत्यावर्तन का समर्थन करता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — संरचित कारण कोड के साथ प्रत्यावर्तन कारण सूचना</td>
          <td class="operational-matrix-table__right">डाउनस्ट्रीम प्रसंस्करण के लिए संरचित प्रत्यावर्तन कारण कोड वहन करता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — एंड-टू-एंड अनुरेखणीयता के लिए मूल लेनदेन संदर्भ</td>
          <td class="operational-matrix-table__right">निर्देश देने वाला एजेंट (मूल प्रेषक) पहले निर्देशित भुगतान को उलटने के लिए भुगतान शृंखला के माध्यम से आगे pacs.007 भेजता है। प्रत्येक एजेंट प्रत्यावर्तन निर्देश को संसाधित करता है और तदनुसार निपटान समायोजित करता है।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ और स्कीमा संदर्भ

- pacs.004 से दिशा द्वारा विभेदित — प्रत्यावर्तन मूल प्रेषक से आगे प्रवाहित होता है, वापसी लाभार्थी से पीछे प्रवाहित होती है
- CBPR+ स्वचालित मिलान के लिए मूल संदेश पहचानकर्ताओं के साथ जोड़ी बनाने की आवश्यकता रखता है
- संरचित कारण कोड विरासत MT संदेशों से मुक्त-पाठ विवरण को प्रतिस्थापित करते हैं
- तत्काल भुगतान वापसी बुलावा और धोखाधड़ी रोकथाम कार्यप्रवाहों में बढ़ता उपयोग

## संदेश प्रवाह

निर्देश देने वाला एजेंट (मूल प्रेषक) पहले निर्देशित भुगतान को उलटने के लिए भुगतान शृंखला के माध्यम से आगे pacs.007 भेजता है। प्रत्येक एजेंट प्रत्यावर्तन निर्देश को संसाधित करता है और तदनुसार निपटान समायोजित करता है।

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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">pacs008 में वर्तमान कार्यान्वयन</td>
          <td class="version-diff-table__takeaway">यह प्रत्यावर्तन प्रक्रिया मॉडलिंग के लिए एक अच्छा आधार है।</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">बाद के कैटलॉग संस्करण</td>
          <td class="version-diff-table__takeaway">वर्तमान बाजार अवसंरचना के साथ मेल के लिए बाद के संशोधन जाँचें।</td>
        </tr>
    </tbody>
  </table>
</div>

## टिप्पणीयुक्त XML उदाहरण

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### फ़ील्ड टिप्पणियाँ

- `MsgId`: The reversal needs its own identifier.
- `OrgnlInstrId`: मिलान प्रक्रिया में टूटन से बचने के लिए मूल भुगतान संदर्भ को सुरक्षित रखें।
- `RvslRsnInf`: Use structured reversal reasons so cases can be routed correctly.

## तुलना pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="तुलना pacs.007 vs pacs.004">
  <table>
    <caption>तुलना pacs.007 vs pacs.004</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>आयाम</th>
        <th>pacs.007.001.11</th>
        <th>तुलनात्मक संदेश</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">मुख्य उद्देश्य</td>
          <td class="message-comparison-table__current">पहले से निर्देशित भुगतान को उलटना</td>
          <td class="message-comparison-table__other">निपटाए गए धन को लौटाना</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">आरंभकर्ता</td>
          <td class="message-comparison-table__current">मूल निर्देश देने वाला पक्ष</td>
          <td class="message-comparison-table__other">प्राप्तकर्ता / लाभार्थी पक्ष</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">प्रवाह की दिशा</td>
          <td class="message-comparison-table__current">श्रृंखला में आगे की ओर</td>
          <td class="message-comparison-table__other">श्रृंखला में पीछे की ओर</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">सबसे उपयुक्त उपयोग</td>
          <td class="message-comparison-table__current">रीकॉल, त्रुटि या धोखाधड़ी-प्रेरित प्रत्यावर्तन प्रबंधन</td>
          <td class="message-comparison-table__other">निपटान के बाद वापसी प्रबंधन</td>
        </tr>
    </tbody>
  </table>
</div>

## प्राथमिक संदर्भ

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/hi/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">FI-से-FI ग्राहक क्रेडिट ट्रांसफर</td>
          <td class="related-messages-table__overview">pacs.008 संदेश वित्तीय संस्थानों के बीच ग्राहक की ओर से धन हस्तांतरित करने के लिए आदान-प्रदान किया जाने वाला मुख्य भुगतान निर्देश है। यह एक या अधिक क्रेडिट ट्रांसफर लेनदेन के लिए ऋणी, लेनदार, राशि और प्रेषण सूचना वहन करता है।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/hi/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">भुगतान वापसी</td>
          <td class="related-messages-table__overview">pacs.004 संदेश का उपयोग पहले से निपटाए गए भुगतान लेनदेन को वापस करने के लिए किया जाता है। यह धन के प्रवाह को उलट देता है जब कोई भुगतान लागू नहीं हो सकता, गलती से भेजा गया हो, या मूल संस्थान द्वारा वापस बुलाया जा रहा हो।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/hi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-से-FI भुगतान स्थिति रिपोर्ट</td>
          <td class="related-messages-table__overview">pacs.002 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति रिपोर्ट करने के लिए भेजा जाता है। यह भुगतान संदेश के भीतर व्यक्तिगत लेनदेन के लिए पुष्टि, अस्वीकृति या लंबित स्थिति की जानकारी प्रदान करता है।</td>
        </tr>
    </tbody>
  </table>
</div>

