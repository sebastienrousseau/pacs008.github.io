---
title: pacs.003.001.09 | FI-से-FI ग्राहक प्रत्यक्ष डेबिट | pacs008
description: pacs.003 संदेश वित्तीय संस्थानों के बीच ग्राहक प्रत्यक्ष डेबिट निर्देश को निष्पादित करने के लिए आदान-प्रदान किया जाता है। यह लेनदार के बैंक को लेनदार की...
lang: hi-IN
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI-से-FI ग्राहक प्रत्यक्ष डेबिट

| | |
|---|---|
| **ISO नाम** | FIToFICustomerDirectDebitV09 |
| **पंजीकरण स्थिति** | Registered |
| **वर्ष** | 2019 |
| **संस्करण** | 9 |

## अवलोकन

pacs.003 संदेश वित्तीय संस्थानों के बीच ग्राहक प्रत्यक्ष डेबिट निर्देश को निष्पादित करने के लिए आदान-प्रदान किया जाता है। यह लेनदार के बैंक को लेनदार की ओर से ऋणी के बैंक से धन एकत्र करने में सक्षम बनाता है।

> 23 मार्च 2026 को प्राथमिक स्रोतों के विरुद्ध अंतिम समीक्षा की गई। ISO 20022 कैटलॉग संदर्भ तिथि: 2025-02-27; स्रोत लिंक नीचे सूचीबद्ध हैं।

## प्रमुख डेटा तत्व

- **GrpHdr** — संदेश पहचान और निपटान सूचना के साथ ग्रुप हेडर
- **DrctDbtTxInf** — राशि और पक्षों के साथ प्रत्यक्ष डेबिट लेनदेन सूचना
- **Cdtr** — लेनदार पहचान और खाता विवरण
- **CdtrAgt** — लेनदार एजेंट (संग्रह संस्थान) पहचान
- **DbtrAgt** — ऋणी एजेंट (भुगतान संस्थान) पहचान

## व्यावसायिक संदर्भ

- SEPA Core और B2B प्रत्यक्ष डेबिट योजनाओं का समर्थन करता है
- सदस्यता, उपयोगिता बिल और ऋण पुनर्भुगतान जैसे आवर्ती भुगतान संग्रह के लिए उपयोग किया जाता है
- ऋणी और लेनदार के बीच वैध अधिदेश संदर्भ की आवश्यकता होती है
- एक संदेश में एकाधिक प्रत्यक्ष डेबिट निर्देशों के थोक संग्रह को सक्षम बनाता है

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — संदेश पहचान और निपटान सूचना के साथ ग्रुप हेडर</td>
          <td class="operational-matrix-table__right">SEPA Core और B2B प्रत्यक्ष डेबिट योजनाओं का समर्थन करता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — राशि और पक्षों के साथ प्रत्यक्ष डेबिट लेनदेन सूचना</td>
          <td class="operational-matrix-table__right">सदस्यता, उपयोगिता बिल और ऋण पुनर्भुगतान जैसे आवर्ती भुगतान संग्रह के लिए उपयोग किया जाता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — लेनदार पहचान और खाता विवरण</td>
          <td class="operational-matrix-table__right">ऋणी और लेनदार के बीच वैध अधिदेश संदर्भ की आवश्यकता होती है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — लेनदार एजेंट (संग्रह संस्थान) पहचान</td>
          <td class="operational-matrix-table__right">एक संदेश में एकाधिक प्रत्यक्ष डेबिट निर्देशों के थोक संग्रह को सक्षम बनाता है</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — ऋणी एजेंट (भुगतान संस्थान) पहचान</td>
          <td class="operational-matrix-table__right">लेनदार एजेंट धन एकत्र करने के लिए ऋणी एजेंट की ओर pacs.003 आरंभ करता है। ऋणी एजेंट अधिदेश को मान्य करता है, खाता कवरेज की जांच करता है, और लेनदेन का निपटान या वापसी करता है।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ और स्कीमा संदर्भ

- संरचित पता और पक्ष पहचान आवश्यकताएं प्रत्यक्ष डेबिट पर समान रूप से लागू होती हैं
- अधिदेश-संबंधित डेटा नवंबर 2026 से पूर्ण रूप से संरचित होना चाहिए
- सीमा-पार प्रवाहों में विरासत MT104-शैली प्रत्यक्ष डेबिट प्रारूपों को प्रतिस्थापित करता है
- लेनदार योजना पहचान की वैधीकरण तेजी से लागू की जा रही है

## संदेश प्रवाह

लेनदार एजेंट धन एकत्र करने के लिए ऋणी एजेंट की ओर pacs.003 आरंभ करता है। ऋणी एजेंट अधिदेश को मान्य करता है, खाता कवरेज की जांच करता है, और लेनदेन का निपटान या वापसी करता है।

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
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">pacs008 में वर्तमान कार्यान्वयन</td>
          <td class="version-diff-table__takeaway">यह वर्तमान परियोजना में प्रत्यक्ष डेबिट संदर्भ मॉडलिंग के लिए उपयोगी है।</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">बाद के कैटलॉग संस्करण</td>
          <td class="version-diff-table__takeaway">नई शुरुआत वाले उपयोग से पहले अधिदेश, स्थिति और पारस्परिक-संगतता से जुड़े अद्यतन देखने हेतु बाद के संशोधन जाँचें।</td>
        </tr>
    </tbody>
  </table>
</div>

## टिप्पणीयुक्त XML उदाहरण

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### फ़ील्ड टिप्पणियाँ

- `EndToEndId`: मैंडेट और संग्रह पहचानकर्ताओं को व्यावसायिक चालान संदर्भों से अलग रखें।
- `IntrBkSttlmAmt`: XML बनाने से पहले डेबिट राशि की सटीकता और मुद्रा नियमों की जाँच करें।
- `Dbtr` / `Cdtr`: प्रत्यक्ष डेबिट की सफलता अक्सर XML संरचना की तुलना में खाते और प्राधिकरण की गुणवत्ता पर अधिक निर्भर करती है।

## प्राथमिक संदर्भ

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
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
          <td class="related-messages-table__id"><a href="/hi/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">भुगतान वापसी</td>
          <td class="related-messages-table__overview">pacs.004 संदेश का उपयोग पहले से निपटाए गए भुगतान लेनदेन को वापस करने के लिए किया जाता है। यह धन के प्रवाह को उलट देता है जब कोई भुगतान लागू नहीं हो सकता, गलती से भेजा गया हो, या मूल संस्थान द्वारा वापस बुलाया जा रहा हो।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/hi/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">FI-से-FI भुगतान रिवर्सल</td>
          <td class="related-messages-table__overview">pacs.007 संदेश का उपयोग पहले भेजे गए भुगतान निर्देश को उलटने के लिए किया जाता है जो अभी तक निपटाया नहीं गया है या निपटाए गए भुगतान के प्रत्यावर्तन का अनुरोध करने के लिए। pacs.004 (वापसी) के विपरीत, इसे मूल निर्देश देने वाले एजेंट द्वारा आरंभ किया जाता है।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/hi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI-से-FI भुगतान स्थिति रिपोर्ट</td>
          <td class="related-messages-table__overview">pacs.002 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति रिपोर्ट करने के लिए भेजा जाता है। यह भुगतान संदेश के भीतर व्यक्तिगत लेनदेन के लिए पुष्टि, अस्वीकृति या लंबित स्थिति की जानकारी प्रदान करता है।</td>
        </tr>
    </tbody>
  </table>
</div>

