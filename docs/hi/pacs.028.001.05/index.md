---
title: pacs.028.001.05 | FI-से-FI भुगतान स्थिति अनुरोध | pacs008
description: pacs.028 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति का अनुरोध करने के लिए भेजा जाता है। यह बिना अनचाही स्थिति रिपोर्ट की...
lang: hi-IN
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI-से-FI भुगतान स्थिति अनुरोध

| | |
|---|---|
| **ISO नाम** | FIToFIPaymentStatusRequestV05 |
| **पंजीकरण स्थिति** | Registered |
| **वर्ष** | 2019 |
| **संस्करण** | 5 |

## अवलोकन

pacs.028 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति का अनुरोध करने के लिए भेजा जाता है। यह बिना अनचाही स्थिति रिपोर्ट की प्रतीक्षा किए भुगतान प्रसंस्करण की सक्रिय ट्रैकिंग को सक्षम बनाता है।

> 23 मार्च 2026 को प्राथमिक स्रोतों के विरुद्ध अंतिम समीक्षा की गई। ISO 20022 कैटलॉग संदर्भ तिथि: 2025-02-27; स्रोत लिंक नीचे सूचीबद्ध हैं।

## प्रमुख डेटा तत्व

- **GrpHdr** — संदेश पहचान और निर्माण टाइमस्टैम्प के साथ ग्रुप हेडर
- **TxInf** — जिस भुगतान की पूछताछ करनी है उसकी पहचान करने वाली लेनदेन सूचना
- **OrgnlGrpInf** — स्रोत संदेश का संदर्भ देने वाली मूल समूह सूचना
- **OrgnlInstrId** — स्रोत भुगतान से मूल निर्देश पहचान
- **OrgnlEndToEndId** — अनुरेखणीयता के लिए मूल एंड टू एंड पहचान

## व्यावसायिक संदर्भ

- पारगमन में भुगतान निर्देशों के लिए सक्रिय स्थिति पूछताछ को सक्षम बनाता है
- विलंबित या गुम भुगतानों की जांच करने वाली संचालन टीमों का समर्थन करता है
- प्रतीक्षा करने के बजाय स्थिति संचार आरंभ करके pacs.002 का पूरक है
- अपवाद-प्रबंधन और SLA-निगरानी कार्यप्रवाहों में उपयोग किया जाता है

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
          <td class="operational-matrix-table__right">पारगमन में भुगतान निर्देशों के लिए सक्रिय स्थिति पूछताछ को सक्षम बनाता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**TxInf** — जिस भुगतान की पूछताछ करनी है उसकी पहचान करने वाली लेनदेन सूचना</td>
          <td class="operational-matrix-table__right">विलंबित या गुम भुगतानों की जांच करने वाली संचालन टीमों का समर्थन करता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlGrpInf** — स्रोत संदेश का संदर्भ देने वाली मूल समूह सूचना</td>
          <td class="operational-matrix-table__right">प्रतीक्षा करने के बजाय स्थिति संचार आरंभ करके pacs.002 का पूरक है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlInstrId** — स्रोत भुगतान से मूल निर्देश पहचान</td>
          <td class="operational-matrix-table__right">अपवाद-प्रबंधन और SLA-निगरानी कार्यप्रवाहों में उपयोग किया जाता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlEndToEndId** — अनुरेखणीयता के लिए मूल एंड टू एंड पहचान</td>
          <td class="operational-matrix-table__right">निर्देश देने वाला एजेंट किसी विशिष्ट भुगतान की स्थिति का अनुरोध करने के लिए निर्देशित एजेंट को pacs.028 भेजता है। निर्देशित एजेंट वर्तमान प्रसंस्करण स्थिति वाले pacs.002 के साथ प्रतिक्रिया देता है।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ और स्कीमा संदर्भ

- MT199 स्थिति पूछताछ पैटर्न और मैनुअल SWIFT संदेश क्वेरी को प्रतिस्थापित करता है
- CBPR+ मूल संदेश पहचानकर्ताओं से जुड़े संरचित स्थिति अनुरोधों का समर्थन करता है
- gpi के माध्यम से UETR-आधारित ट्रैकिंग मैनुअल पूछताछ की आवश्यकता को कम करती है
- स्वचालित भुगतान संचालन डैशबोर्ड में तेजी से एकीकृत किया जा रहा है

## संदेश प्रवाह

निर्देश देने वाला एजेंट किसी विशिष्ट भुगतान की स्थिति का अनुरोध करने के लिए निर्देशित एजेंट को pacs.028 भेजता है। निर्देशित एजेंट वर्तमान प्रसंस्करण स्थिति वाले pacs.002 के साथ प्रतिक्रिया देता है।

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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">pacs008 में वर्तमान कार्यान्वयन</td>
          <td class="version-diff-table__takeaway">वर्तमान स्थिति-अनुरोध मॉडलिंग के लिए उपयुक्त।</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">बाद का कैटलॉग संस्करण</td>
          <td class="version-diff-table__takeaway">भविष्य की अंतर-संचालनीयता योजना के लिए नए कैटलॉग संशोधन की जाँच करें।</td>
        </tr>
    </tbody>
  </table>
</div>

## टिप्पणीयुक्त XML उदाहरण

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### फ़ील्ड टिप्पणियाँ

- `MsgId`: अनुरोध को स्वयं एक ऐसा लेखापरीक्षण-योग्य पहचानकर्ता चाहिए जो मूल भुगतान से अलग हो।
- `OrgnlInstrId`: मिलान की शुद्धता अधिकतम करने के लिए मूल निर्देश का सटीक स्रोत पहचानकर्ता उपयोग करें।
- `OrgnlEndToEndId`: ग्राहक अनुरेखण शामिल करने से संचालन दल पूछताछ का मिलान तेज़ी से कर पाते हैं।

## तुलना pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="तुलना pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>आयाम</th>
        <th>pacs.028.001.05</th>
        <th>तुलनात्मक संदेश</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">मुख्य उद्देश्य</td>
          <td class="message-comparison-table__current">स्थिति पूछना</td>
          <td class="message-comparison-table__other">स्थिति बताना</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">संचार कौन शुरू करता है</td>
          <td class="message-comparison-table__current">स्थिति पूछने वाला संस्थान</td>
          <td class="message-comparison-table__other">स्थिति भेजने वाला संस्थान</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">संचालनात्मक स्थिति</td>
          <td class="message-comparison-table__current">अपवाद-आधारित पूछताछ</td>
          <td class="message-comparison-table__other">घटना-आधारित रिपोर्टिंग</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">जिस गलत धारणा से बचना चाहिए</td>
          <td class="message-comparison-table__current">कि इसे हर payment के लिए नियमित रूप से भेजा जाना चाहिए</td>
          <td class="message-comparison-table__other">कि यह proactive case management की आवश्यकता समाप्त कर देता है</td>
        </tr>
    </tbody>
  </table>
</div>

## प्राथमिक संदर्भ

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/hi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-से-FI भुगतान स्थिति रिपोर्ट</td>
          <td class="related-messages-table__overview">pacs.002 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति रिपोर्ट करने के लिए भेजा जाता है। यह भुगतान संदेश के भीतर व्यक्तिगत लेनदेन के लिए पुष्टि, अस्वीकृति या लंबित स्थिति की जानकारी प्रदान करता है।</td>
        </tr>
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
    </tbody>
  </table>
</div>

