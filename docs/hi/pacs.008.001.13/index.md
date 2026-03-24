---
title: pacs.008.001.13 | FI-से-FI ग्राहक क्रेडिट ट्रांसफर | pacs008
description: pacs.008 संदेश वित्तीय संस्थानों के बीच ग्राहक की ओर से धन हस्तांतरित करने के लिए आदान-प्रदान किया जाने वाला मुख्य भुगतान निर्देश है। यह एक या अधिक...
lang: hi-IN
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — FI-से-FI ग्राहक क्रेडिट ट्रांसफर

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>पंजीकरण स्थिति</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>वर्ष</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>संस्करण</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## अवलोकन

pacs.008 संदेश वित्तीय संस्थानों के बीच ग्राहक की ओर से धन हस्तांतरित करने के लिए आदान-प्रदान किया जाने वाला मुख्य भुगतान निर्देश है। यह एक या अधिक क्रेडिट ट्रांसफर लेनदेन के लिए ऋणी, लेनदार, राशि और प्रेषण सूचना वहन करता है।

> 23 मार्च 2026 को प्राथमिक स्रोतों के विरुद्ध अंतिम समीक्षा की गई। ISO 20022 कैटलॉग संदर्भ तिथि: 2025-02-27; स्रोत लिंक नीचे सूचीबद्ध हैं।

## प्रमुख डेटा तत्व

- **GrpHdr** — संदेश ID, निर्माण तिथि, लेनदेन संख्या और निपटान सूचना के साथ ग्रुप हेडर
- **CdtTrfTxInf** — राशि, शुल्क और उद्देश्य के साथ क्रेडिट ट्रांसफर लेनदेन सूचना
- **Dbtr / DbtrAgt** — ऋणी और ऋणी एजेंट पहचान और खाता विवरण
- **Cdtr / CdtrAgt** — लेनदार और लेनदार एजेंट पहचान और खाता विवरण
- **RmtInf** — संरचित या असंरचित भुगतान संदर्भों के लिए प्रेषण सूचना

## व्यावसायिक संदर्भ

- ग्राहक-आरंभित सीमा-पार और घरेलू क्रेडिट ट्रांसफर के लिए प्राथमिक संदेश
- SEPA SCT, SEPA Instant, CBPR+ और राष्ट्रीय समाशोधन प्रणालियों में उपयोग किया जाता है
- सीधे-स्वचालित समाधान का समर्थन करने के लिए संरचित प्रेषण सूचना वहन करता है
- बहु-चरण भुगतान शृंखलाओं के लिए क्रमिक, कवर और प्रत्यक्ष निपटान विधियों का समर्थन करता है

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — संदेश ID, निर्माण तिथि, लेनदेन संख्या और निपटान सूचना के साथ ग्रुप हेडर</td>
          <td class="operational-matrix-table__right">ग्राहक-आरंभित सीमा-पार और घरेलू क्रेडिट ट्रांसफर के लिए प्राथमिक संदेश</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — राशि, शुल्क और उद्देश्य के साथ क्रेडिट ट्रांसफर लेनदेन सूचना</td>
          <td class="operational-matrix-table__right">SEPA SCT, SEPA Instant, CBPR+ और राष्ट्रीय समाशोधन प्रणालियों में उपयोग किया जाता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — ऋणी और ऋणी एजेंट पहचान और खाता विवरण</td>
          <td class="operational-matrix-table__right">सीधे-स्वचालित समाधान का समर्थन करने के लिए संरचित प्रेषण सूचना वहन करता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — लेनदार और लेनदार एजेंट पहचान और खाता विवरण</td>
          <td class="operational-matrix-table__right">बहु-चरण भुगतान शृंखलाओं के लिए क्रमिक, कवर और प्रत्यक्ष निपटान विधियों का समर्थन करता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — संरचित या असंरचित भुगतान संदर्भों के लिए प्रेषण सूचना</td>
          <td class="operational-matrix-table__right">ऋणी एजेंट pacs.008 बनाता है और इसे लेनदार एजेंट को भेजता है (सीधे या मध्यस्थों के माध्यम से)। शृंखला का प्रत्येक एजेंट निर्देश को मान्य, समृद्ध और अग्रेषित करता है जब तक लेनदार एजेंट लाभार्थी के खाते में जमा नहीं कर देता।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ और स्कीमा संदर्भ

- सीमा-पार ग्राहक क्रेडिट ट्रांसफर के लिए MT103 और MT103+ को प्रतिस्थापित करता है
- नवंबर 2026 की संरचित पता समय सीमा सभी पक्ष डाक पतों पर लागू होती है
- SWIFT gpi को UETR-आधारित एंड-टू-एंड ट्रैकिंग के लिए pacs.008 की आवश्यकता है
- 13 संशोधन बाजार अवसंरचनाओं में चल रहे स्कीमा विकास को दर्शाते हैं

## संदेश प्रवाह

ऋणी एजेंट pacs.008 बनाता है और इसे लेनदार एजेंट को भेजता है (सीधे या मध्यस्थों के माध्यम से)। शृंखला का प्रत्येक एजेंट निर्देश को मान्य, समृद्ध और अग्रेषित करता है जब तक लेनदार एजेंट लाभार्थी के खाते में जमा नहीं कर देता।

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">प्रारंभिक संशोधन</td>
          <td class="version-diff-table__takeaway">मुख्य रूप से पुरानी प्रणालियों के माइग्रेशन विश्लेषण और संस्करण इतिहास की पृष्ठभूमि के लिए उपयोगी।</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">वर्तमान संस्करण से पहले के आधुनिक संशोधन</td>
          <td class="version-diff-table__takeaway">हाल के माइग्रेशन या सह-अस्तित्व परियोजनाओं में सबसे अधिक यही संशोधन दिखाई देंगे।</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">वर्तमान कैटलॉग संशोधन</td>
          <td class="version-diff-table__takeaway">वर्तमान संस्करण की योजना के लिए इसका उपयोग करें, लेकिन स्कीम उपयोग दिशानिर्देश और प्रतिपक्ष की तैयारी की जाँच जारी रखें।</td>
        </tr>
    </tbody>
  </table>
</div>

## टिप्पणीयुक्त XML उदाहरण

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### फ़ील्ड टिप्पणियाँ

- `MsgId`: यह संदेश-लिफ़ाफ़े की पहचान करे, न कि अंतिम ग्राहक के भुगतान संदर्भ की।
- `EndToEndId`: जहाँ संभव हो, आगे की प्रणालियों में ग्राहक-उन्मुख अनुरेखण को स्थिर रखें।
- `UETR`: इसे सीमा-पार और उच्च-ट्रैकिंग वाले परिवेश में लगातार उपयोग करें; बाद के चरणों में इसे तदर्थ रूप से उत्पन्न न करें।
- `IntrBkSttlmAmt`: संरचना सत्यापन से पहले व्यावसायिक नियमों के आधार पर राशि और मुद्रा की जाँच करें।
- `Dbtr` / `Cdtr`: पक्ष-संबंधी डेटा की गुणवत्ता, पता संरचना और पहचानकर्ता आमतौर पर सुधार-कार्य की दरों के मुख्य निर्धारक होते हैं।

## तुलना pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="तुलना pacs.008 vs pacs.009">
  <table>
    <caption>तुलना pacs.008 vs pacs.009</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>आयाम</th>
        <th>pacs.008.001.13</th>
        <th>तुलनात्मक संदेश</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">मुख्य उद्देश्य</td>
          <td class="message-comparison-table__current">ग्राहक क्रेडिट ट्रांसफर</td>
          <td class="message-comparison-table__other">संस्था के अपने खाते का क्रेडिट ट्रांसफर या कवर चरण</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">व्यावसायिक स्वामी</td>
          <td class="message-comparison-table__current">ग्राहक भुगतान संचालन</td>
          <td class="message-comparison-table__other">कोषागार / करेस्पॉन्डेंट / वित्तपोषण संचालन</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">सामान्य संयोजन</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, और कभी-कभी जुड़े हुए pacs.008 प्रवाह</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">जिस गलत धारणा से बचना चाहिए</td>
          <td class="message-comparison-table__current">कि सभी बैंक-से-बैंक अंतरण यहीं आते हैं</td>
          <td class="message-comparison-table__other">कि यह customer credit-transfer instructions को बदल सकता है</td>
        </tr>
    </tbody>
  </table>
</div>

## प्राथमिक संदर्भ

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## समर्थित संस्करण

<div class="message-versions-table" tabindex="0" aria-label="समर्थित संस्करण">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>संस्करण</th>
        <th>स्थिति</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>वर्तमान</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/hi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-से-FI भुगतान स्थिति रिपोर्ट</td>
          <td class="related-messages-table__overview">pacs.002 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति रिपोर्ट करने के लिए भेजा जाता है। यह भुगतान संदेश के भीतर व्यक्तिगत लेनदेन के लिए पुष्टि, अस्वीकृति या लंबित स्थिति की जानकारी प्रदान करता है।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/hi/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">भुगतान वापसी</td>
          <td class="related-messages-table__overview">pacs.004 संदेश का उपयोग पहले से निपटाए गए भुगतान लेनदेन को वापस करने के लिए किया जाता है। यह धन के प्रवाह को उलट देता है जब कोई भुगतान लागू नहीं हो सकता, गलती से भेजा गया हो, या मूल संस्थान द्वारा वापस बुलाया जा रहा हो।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/hi/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर</td>
          <td class="related-messages-table__overview">pacs.009 संदेश का उपयोग वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर के लिए किया जाता है जहां हस्तांतरण ग्राहक की ओर से नहीं बल्कि संस्थान की अपनी ओर से होता है। यह अंतरबैंक वित्तपोषण, कवर भुगतान और तरलता प्रबंधन का समर्थन करता है।</td>
        </tr>
    </tbody>
  </table>
</div>

