---
title: pacs.004.001.11 | भुगतान वापसी | pacs008
description: pacs.004 संदेश का उपयोग पहले से निपटाए गए भुगतान लेनदेन को वापस करने के लिए किया जाता है। यह धन के प्रवाह को उलट देता है जब कोई भुगतान लागू नहीं हो सकता...
lang: hi-IN
lastUpdated: true
image: /logo.svg
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — भुगतान वापसी

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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

pacs.004 संदेश का उपयोग पहले से निपटाए गए भुगतान लेनदेन को वापस करने के लिए किया जाता है। यह धन के प्रवाह को उलट देता है जब कोई भुगतान लागू नहीं हो सकता, गलती से भेजा गया हो, या मूल संस्थान द्वारा वापस बुलाया जा रहा हो।

> 23 मार्च 2026 को प्राथमिक स्रोतों के विरुद्ध अंतिम समीक्षा की गई। ISO 20022 कैटलॉग संदर्भ तिथि: 2025-02-27; स्रोत लिंक नीचे सूचीबद्ध हैं।

## प्रमुख डेटा तत्व

- **GrpHdr** — संदेश पहचान और निर्माण टाइमस्टैम्प के साथ ग्रुप हेडर
- **TxInf** — वापसी राशि और पक्षों के साथ लेनदेन सूचना
- **OrgnlGrpInf** — स्रोत संदेश से जोड़ने वाली मूल समूह सूचना
- **RtrRsnInf** — संरचित कारण कोड के साथ वापसी कारण सूचना
- **OrgnlTxRef** — मिलान और समाधान के लिए मूल लेनदेन संदर्भ

## व्यावसायिक संदर्भ

- जब लाभार्थी के खाते में जमा नहीं किया जा सकता तब निपटान-पश्चात वापसी को संभालता है
- मूल प्रेषक द्वारा धन वापसी का अनुरोध करने वाले वापसी बुलावा परिदृश्यों का समर्थन करता है
- नियामक और परिचालन पारदर्शिता के लिए संरचित वापसी कारण कोड वहन करता है
- क्रेडिट ट्रांसफर वापसी (pacs.008) और प्रत्यक्ष डेबिट वापसी (pacs.003) दोनों पर लागू होता है

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
          <td class="operational-matrix-table__right">जब लाभार्थी के खाते में जमा नहीं किया जा सकता तब निपटान-पश्चात वापसी को संभालता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — वापसी राशि और पक्षों के साथ लेनदेन सूचना</td>
          <td class="operational-matrix-table__right">मूल प्रेषक द्वारा धन वापसी का अनुरोध करने वाले वापसी बुलावा परिदृश्यों का समर्थन करता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — स्रोत संदेश से जोड़ने वाली मूल समूह सूचना</td>
          <td class="operational-matrix-table__right">नियामक और परिचालन पारदर्शिता के लिए संरचित वापसी कारण कोड वहन करता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — संरचित कारण कोड के साथ वापसी कारण सूचना</td>
          <td class="operational-matrix-table__right">क्रेडिट ट्रांसफर वापसी (pacs.008) और प्रत्यक्ष डेबिट वापसी (pacs.003) दोनों पर लागू होता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — मिलान और समाधान के लिए मूल लेनदेन संदर्भ</td>
          <td class="operational-matrix-table__right">निर्देशित एजेंट पहले से निपटाए गए धन को वापस करने के लिए भुगतान शृंखला के माध्यम से pacs.004 वापस भेजता है। शृंखला का प्रत्येक एजेंट वापसी को संसाधित करता है और संबंधित खातों में वापस जमा करता है।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ और स्कीमा संदर्भ

- MT103 RETURN और कवर-विधि वापसी संदेशन को प्रतिस्थापित करता है
- वापसी कारण कोड ISO 20022 के तहत मानकीकृत और मशीन-पठनीय हैं
- CBPR+ मिलान के लिए पूर्ण मूल लेनदेन संदर्भ डेटा की आवश्यकता रखता है
- SWIFT gpi ट्रैकिंग एंड-टू-एंड दृश्यता के लिए वापसी लेनदेन तक विस्तारित होती है

## संदेश प्रवाह

निर्देशित एजेंट पहले से निपटाए गए धन को वापस करने के लिए भुगतान शृंखला के माध्यम से pacs.004 वापस भेजता है। शृंखला का प्रत्येक एजेंट वापसी को संसाधित करता है और संबंधित खातों में वापस जमा करता है।

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">pacs008 में वर्तमान कार्यान्वयन</td>
          <td class="version-diff-table__takeaway">यह वर्तमान भुगतान-वापसी टेम्पलेटों के अनुरूप है।</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">बाद के कैटलॉग संस्करण</td>
          <td class="version-diff-table__takeaway">जब दायरे में योजना उन्नयन या नए प्रतिपक्ष शामिल हों, तब वापसी-संदेश के बाद के संशोधनों की समीक्षा करें।</td>
        </tr>
    </tbody>
  </table>
</div>

## टिप्पणीयुक्त XML उदाहरण

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### फ़ील्ड टिप्पणियाँ

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: कारण-कोड की गुणवत्ता बाद की ग्राहक-सम्प्रेषण प्रक्रिया और परिचालन रूटिंग के लिए अत्यंत महत्वपूर्ण है।

## तुलना pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="तुलना pacs.004 vs pacs.007">
  <table>
    <caption>तुलना pacs.004 vs pacs.007</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>आयाम</th>
        <th>pacs.004.001.11</th>
        <th>तुलनात्मक संदेश</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">मुख्य उद्देश्य</td>
          <td class="message-comparison-table__current">निपटाए गए धन को लौटाना</td>
          <td class="message-comparison-table__other">पहले से निर्देशित भुगतान को उलटना</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">आरंभकर्ता</td>
          <td class="message-comparison-table__current">प्राप्तकर्ता / लाभार्थी पक्ष</td>
          <td class="message-comparison-table__other">मूल निर्देश देने वाला पक्ष</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">प्रवाह की दिशा</td>
          <td class="message-comparison-table__current">श्रृंखला में पीछे की ओर</td>
          <td class="message-comparison-table__other">श्रृंखला में आगे की ओर</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">सबसे उपयुक्त उपयोग</td>
          <td class="message-comparison-table__current">निपटान के बाद वापसी प्रबंधन</td>
          <td class="message-comparison-table__other">रीकॉल, त्रुटि या धोखाधड़ी-प्रेरित प्रत्यावर्तन प्रबंधन</td>
        </tr>
    </tbody>
  </table>
</div>

## प्राथमिक संदर्भ

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
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
          <td class="related-messages-table__id"><a href="/hi/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">FI-से-FI ग्राहक प्रत्यक्ष डेबिट</td>
          <td class="related-messages-table__overview">pacs.003 संदेश वित्तीय संस्थानों के बीच ग्राहक प्रत्यक्ष डेबिट निर्देश को निष्पादित करने के लिए आदान-प्रदान किया जाता है। यह लेनदार के बैंक को लेनदार की ओर से ऋणी के बैंक से धन एकत्र करने में सक्षम बनाता है।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/hi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-से-FI भुगतान स्थिति रिपोर्ट</td>
          <td class="related-messages-table__overview">pacs.002 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति रिपोर्ट करने के लिए भेजा जाता है। यह भुगतान संदेश के भीतर व्यक्तिगत लेनदेन के लिए पुष्टि, अस्वीकृति या लंबित स्थिति की जानकारी प्रदान करता है।</td>
        </tr>
    </tbody>
  </table>
</div>

