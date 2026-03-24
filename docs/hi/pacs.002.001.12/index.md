---
title: pacs.002.001.12 | FI-से-FI भुगतान स्थिति रिपोर्ट | pacs008
description: pacs.002 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति रिपोर्ट करने के लिए भेजा जाता है। यह भुगतान संदेश के भीतर व्यक्तिगत लेनदेन...
lang: hi-IN
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI-से-FI भुगतान स्थिति रिपोर्ट

| | |
|---|---|
| **ISO नाम** | FIToFIPaymentStatusReportV12 |
| **पंजीकरण स्थिति** | Registered |
| **वर्ष** | 2019 |
| **संस्करण** | 12 |

## अवलोकन

pacs.002 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति रिपोर्ट करने के लिए भेजा जाता है। यह भुगतान संदेश के भीतर व्यक्तिगत लेनदेन के लिए पुष्टि, अस्वीकृति या लंबित स्थिति की जानकारी प्रदान करता है।

> 23 मार्च 2026 को प्राथमिक स्रोतों के विरुद्ध अंतिम समीक्षा की गई। ISO 20022 कैटलॉग संदर्भ तिथि: 2025-02-27; स्रोत लिंक नीचे सूचीबद्ध हैं।

## प्रमुख डेटा तत्व

- **GrpHdr** — संदेश पहचान और निर्माण टाइमस्टैम्प के साथ ग्रुप हेडर
- **OrgnlGrpInfAndSts** — थोक-स्तरीय रिपोर्टिंग के लिए मूल समूह सूचना और स्थिति
- **TxInfAndSts** — व्यक्तिगत लेनदेन परिणामों के लिए लेनदेन सूचना और स्थिति
- **StsRsnInf** — संरचित कारण कोड के साथ स्थिति कारण सूचना
- **OrgnlTxRef** — स्रोत निर्देश से जोड़ने वाला मूल लेनदेन संदर्भ

## व्यावसायिक संदर्भ

- क्रेडिट ट्रांसफर, प्रत्यक्ष डेबिट और भुगतान वापसी के निपटान की पुष्टि या अस्वीकृति रिपोर्ट करने के लिए उपयोग किया जाता है
- निर्देश देने वाले और निर्देशित एजेंटों के बीच समाधान को सक्षम बनाता है
- pacs.008 और pacs.009 संदेशों की प्रसंस्करण स्वीकृति के लिए CBPR+ प्रवाहों में आवश्यक
- थोक समूह-स्तरीय और व्यक्तिगत लेनदेन-स्तरीय दोनों स्थिति रिपोर्टिंग का समर्थन करता है

<div class="operational-matrix-table" tabindex="0" aria-label="प्रमुख डेटा तत्व व्यावसायिक संदर्भ">
  <table>
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
          <td class="operational-matrix-table__left">**GrpHdr** — संदेश पहचान और निर्माण टाइमस्टैम्प के साथ ग्रुप हेडर</td>
          <td class="operational-matrix-table__right">क्रेडिट ट्रांसफर, प्रत्यक्ष डेबिट और भुगतान वापसी के निपटान की पुष्टि या अस्वीकृति रिपोर्ट करने के लिए उपयोग किया जाता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlGrpInfAndSts** — थोक-स्तरीय रिपोर्टिंग के लिए मूल समूह सूचना और स्थिति</td>
          <td class="operational-matrix-table__right">निर्देश देने वाले और निर्देशित एजेंटों के बीच समाधान को सक्षम बनाता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**TxInfAndSts** — व्यक्तिगत लेनदेन परिणामों के लिए लेनदेन सूचना और स्थिति</td>
          <td class="operational-matrix-table__right">pacs.008 और pacs.009 संदेशों की प्रसंस्करण स्वीकृति के लिए CBPR+ प्रवाहों में आवश्यक</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**StsRsnInf** — संरचित कारण कोड के साथ स्थिति कारण सूचना</td>
          <td class="operational-matrix-table__right">थोक समूह-स्तरीय और व्यक्तिगत लेनदेन-स्तरीय दोनों स्थिति रिपोर्टिंग का समर्थन करता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlTxRef** — स्रोत निर्देश से जोड़ने वाला मूल लेनदेन संदर्भ</td>
          <td class="operational-matrix-table__right">निर्देशित एजेंट (प्राप्तकर्ता) निर्देश देने वाले एजेंट (प्रेषक) को pacs.002 वापस भेजता है ताकि pacs.008 या pacs.009 जैसे प्राप्त भुगतान निर्देश की स्वीकृति, निपटान या अस्वीकृति की पुष्टि हो सके।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ और स्कीमा संदर्भ

- MT संदेशों में MT199 और फील्ड 79 स्थिति विवरण को प्रतिस्थापित करता है
- CBPR+ सभी भुगतान स्थिति संचार के लिए pacs.002 को अनिवार्य करता है
- संरचित कारण कोड मुक्त-पाठ अस्वीकृति स्पष्टीकरण को प्रतिस्थापित करते हैं
- SWIFT gpi ट्रैकिंग एकीकरण के लिए एंड-टू-एंड पारदर्शिता हेतु pacs.002 आवश्यक है

## संदेश प्रवाह

निर्देशित एजेंट (प्राप्तकर्ता) निर्देश देने वाले एजेंट (प्रेषक) को pacs.002 वापस भेजता है ताकि pacs.008 या pacs.009 जैसे प्राप्त भुगतान निर्देश की स्वीकृति, निपटान या अस्वीकृति की पुष्टि हो सके।

## संस्करण अंतर तालिका

<div class="version-diff-table" tabindex="0" aria-label="संस्करण अंतर तालिका">
  <table>
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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">pacs008 में वर्तमान कार्यान्वयन</td>
          <td class="version-diff-table__takeaway">जब वर्तमान परियोजना के टेम्पलेट और सत्यापन संसाधनों से मेल बैठाना हो, तब इसका उपयोग करें।</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">बाद के कैटलॉग संस्करण</td>
          <td class="version-diff-table__takeaway">नई अंतर-संचालनीयता पहल शुरू करने या नई अवसंरचनाओं को शामिल करने से पहले ISO के बाद के संशोधनों की समीक्षा करें।</td>
        </tr>
    </tbody>
  </table>
</div>

## टिप्पणीयुक्त XML उदाहरण

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

### फ़ील्ड टिप्पणियाँ

- `MsgId`: मूल भुगतान निर्देश के लिए नहीं, बल्कि स्वयं स्थिति रिपोर्ट के लिए नया पहचानकर्ता उपयोग करें।
- `OrgnlInstrId`: मूल निर्देश पहचानकर्ता को यथावत रखें ताकि स्थिति का मिलान स्वतः हो सके।
- `TxSts`: यह संचालनात्मक स्थिति है; इसे एक-से-एक मिलान मानने के बजाय आंतरिक प्रक्रिया-स्थितियों से सावधानी से जोड़ें।
- `StsRsnInf`: संरचित कारण-कोड, मुक्त-पाठ की तुलना में समस्या-सुधार और विश्लेषण के लिए कहीं अधिक उपयोगी हैं।

## तुलना pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="तुलना pacs.002 vs pacs.028">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>आयाम</th>
        <th>pacs.002.001.12</th>
        <th>तुलनात्मक संदेश</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">मुख्य उद्देश्य</td>
          <td class="message-comparison-table__current">स्थिति बताना</td>
          <td class="message-comparison-table__other">स्थिति पूछना</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">संचार कौन शुरू करता है</td>
          <td class="message-comparison-table__current">स्थिति भेजने वाला संस्थान</td>
          <td class="message-comparison-table__other">स्थिति पूछने वाला संस्थान</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">संचालनात्मक स्थिति</td>
          <td class="message-comparison-table__current">घटना-आधारित रिपोर्टिंग</td>
          <td class="message-comparison-table__other">अपवाद-आधारित पूछताछ</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">जिस गलत धारणा से बचना चाहिए</td>
          <td class="message-comparison-table__current">कि स्थिति-रिपोर्टिंग, जाँच और अनुवर्ती कार्यप्रवाहों की जगह ले लेती है</td>
          <td class="message-comparison-table__other">कि हर भुगतान के लिए स्पष्ट स्थिति-अनुरोध चाहिए</td>
        </tr>
    </tbody>
  </table>
</div>

## प्राथमिक संदर्भ

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


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
          <td class="related-messages-table__id"><a href="/hi/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर</td>
          <td class="related-messages-table__overview">pacs.009 संदेश का उपयोग वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर के लिए किया जाता है जहां हस्तांतरण ग्राहक की ओर से नहीं बल्कि संस्थान की अपनी ओर से होता है। यह अंतरबैंक वित्तपोषण, कवर भुगतान और तरलता प्रबंधन का समर्थन करता है।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/hi/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">FI-से-FI भुगतान स्थिति अनुरोध</td>
          <td class="related-messages-table__overview">pacs.028 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति का अनुरोध करने के लिए भेजा जाता है। यह बिना अनचाही स्थिति रिपोर्ट की प्रतीक्षा किए भुगतान प्रसंस्करण की सक्रिय ट्रैकिंग को सक्षम बनाता है।</td>
        </tr>
    </tbody>
  </table>
</div>

