---
title: "pacs.009.001.10 | वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर | pacs008"
description: pacs.009 संदेश का उपयोग वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर के लिए किया जाता है जहां हस्तांतरण ग्राहक की ओर से नहीं बल्कि संस्थान की अपनी ओर से होता...
lang: hi-IN
lastUpdated: true
image: /logo.svg
faq:
  - question: "मुझे pacs.008 के बजाय pacs.009 कब चुनना चाहिए?"
    answer: "स्वयं के खाते के हस्तांतरण और कवर लेग के लिए pacs.009 चुनें; ग्राहक क्रेडिट-ट्रांसफर निर्देशों के लिए pacs.008 चुनें।"
  - question: "pacs.009 को अपेक्षा से अधिक कठिन क्यों होता है मिलान करना?"
    answer: "क्योंकि बैंकों को ट्रेजरी फंडिंग, संवाददाता लेग और किसी भी जुड़े ग्राहक भुगतान के बीच संबंध बनाए रखना होता है।"
---

# pacs.009.001.10 — वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## अवलोकन

pacs.009 संदेश का उपयोग वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर के लिए किया जाता है जहां हस्तांतरण ग्राहक की ओर से नहीं बल्कि संस्थान की अपनी ओर से होता है। यह अंतरबैंक वित्तपोषण, कवर भुगतान और तरलता प्रबंधन का समर्थन करता है।

> 23 मार्च 2026 को प्राथमिक स्रोतों के विरुद्ध अंतिम समीक्षा की गई। ISO 20022 कैटलॉग संदर्भ तिथि: 2025-02-27; स्रोत लिंक नीचे सूचीबद्ध हैं।

## प्रमुख डेटा तत्व

- **GrpHdr** — संदेश पहचान और निपटान सूचना के साथ ग्रुप हेडर
- **CdtTrfTxInf** — अंतरबैंक निपटान राशि के साथ क्रेडिट ट्रांसफर लेनदेन सूचना
- **Dbtr / DbtrAgt** — ऋणी संस्थान और उसके एजेंट की पहचान
- **Cdtr / CdtrAgt** — लेनदार संस्थान और उसके एजेंट की पहचान
- **IntrBkSttlmAmt** — निपटान मुद्रा में अंतरबैंक निपटान राशि

## व्यावसायिक संदर्भ

- बैंक-से-बैंक स्वयं-खाता हस्तांतरण और कवर भुगतान के लिए उपयोग किया जाता है
- संवाददाता बैंकिंग भागीदारों के बीच तरलता प्रबंधन का समर्थन करता है
- कवर विधि द्वारा निपटाए गए ग्राहक क्रेडिट ट्रांसफर की कवर शाखा वहन करता है
- वित्तीय संस्थानों के बीच कोषागार और वित्तपोषण संचालन को सक्षम बनाता है

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
          <td class="operational-matrix-table__right">बैंक-से-बैंक स्वयं-खाता हस्तांतरण और कवर भुगतान के लिए उपयोग किया जाता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — अंतरबैंक निपटान राशि के साथ क्रेडिट ट्रांसफर लेनदेन सूचना</td>
          <td class="operational-matrix-table__right">संवाददाता बैंकिंग भागीदारों के बीच तरलता प्रबंधन का समर्थन करता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — ऋणी संस्थान और उसके एजेंट की पहचान</td>
          <td class="operational-matrix-table__right">कवर विधि द्वारा निपटाए गए ग्राहक क्रेडिट ट्रांसफर की कवर शाखा वहन करता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — लेनदार संस्थान और उसके एजेंट की पहचान</td>
          <td class="operational-matrix-table__right">वित्तीय संस्थानों के बीच कोषागार और वित्तपोषण संचालन को सक्षम बनाता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — निपटान मुद्रा में अंतरबैंक निपटान राशि</td>
          <td class="operational-matrix-table__right">ऋणी संस्थान अपने स्वयं के धन हस्तांतरित करने के लिए लेनदार संस्थान को pacs.009 भेजता है। कवर-विधि भुगतान के लिए, pacs.009 वित्तपोषण शाखा प्रदान करता है जबकि pacs.008 एक अलग पथ के माध्यम से ग्राहक निर्देश वहन करता है।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ और स्कीमा संदर्भ

- संस्थान-से-संस्थान हस्तांतरण के लिए MT202 और MT202COV को प्रतिस्थापित करता है
- कवर विधि प्रवाह pacs.009 को अंतर्निहित pacs.008 ग्राहक निर्देश के साथ जोड़ते हैं
- संरचित पक्ष डेटा और LEI पहचान तेजी से आवश्यक हो रही है
- SWIFT gpi संवाददाता बैंकिंग पारदर्शिता के लिए pacs.009 को कवर करता है

## संदेश प्रवाह

ऋणी संस्थान अपने स्वयं के धन हस्तांतरित करने के लिए लेनदार संस्थान को pacs.009 भेजता है। कवर-विधि भुगतान के लिए, pacs.009 वित्तपोषण शाखा प्रदान करता है जबकि pacs.008 एक अलग पथ के माध्यम से ग्राहक निर्देश वहन करता है।

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">pacs008 में वर्तमान कार्यान्वयन</td>
          <td class="version-diff-table__takeaway">यह FI क्रेडिट ट्रांसफर प्रवाहों के लिए परियोजना के वर्तमान समर्थन से मेल खाता है।</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">बाद के कैटलॉग संस्करण</td>
          <td class="version-diff-table__takeaway">यह करेस्पॉन्डेंट और कवर-भुगतान परिवेशों में रोडमैप योजना के लिए महत्वपूर्ण है।</td>
        </tr>
    </tbody>
  </table>
</div>

## टिप्पणीयुक्त XML उदाहरण

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### फ़ील्ड टिप्पणियाँ

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## तुलना pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="तुलना pacs.009 vs pacs.008">
  <table>
    <caption>तुलना pacs.009 vs pacs.008</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>आयाम</th>
        <th>pacs.009.001.10</th>
        <th>तुलनात्मक संदेश</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">मुख्य उद्देश्य</td>
          <td class="message-comparison-table__current">संस्था के अपने खाते का क्रेडिट ट्रांसफर या कवर चरण</td>
          <td class="message-comparison-table__other">ग्राहक क्रेडिट ट्रांसफर</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">व्यावसायिक स्वामी</td>
          <td class="message-comparison-table__current">कोषागार / करेस्पॉन्डेंट / वित्तपोषण संचालन</td>
          <td class="message-comparison-table__other">ग्राहक भुगतान संचालन</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">सामान्य संयोजन</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004 और संबंधित pacs.008 प्रवाह</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">जिस गलत धारणा से बचना चाहिए</td>
          <td class="message-comparison-table__current">कि यह केवल pacs.008 का अधिक तकनीकी रूप है</td>
          <td class="message-comparison-table__other">कि यह संस्थागत वित्तपोषण प्रवाहों को बिना अतिरिक्त जटिलता के संभाल सकता है</td>
        </tr>
    </tbody>
  </table>
</div>

## प्राथमिक संदर्भ

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/hi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-से-FI भुगतान स्थिति रिपोर्ट</td>
          <td class="related-messages-table__overview">pacs.002 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति रिपोर्ट करने के लिए भेजा जाता है। यह भुगतान संदेश के भीतर व्यक्तिगत लेनदेन के लिए पुष्टि, अस्वीकृति या लंबित स्थिति की जानकारी प्रदान करता है।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/hi/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">वित्तीय संस्थानों के बीच प्रत्यक्ष डेबिट</td>
          <td class="related-messages-table__overview">pacs.010 संदेश का उपयोग वित्तीय संस्थानों के बीच संस्थान के अपने खाते पर प्रत्यक्ष डेबिट लेनदेन के लिए किया जाता है। यह एक संस्थान को दूसरे संस्थान के खाते से सीधे धन एकत्र करने में सक्षम बनाता है।</td>
        </tr>
    </tbody>
  </table>
</div>

