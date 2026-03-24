---
title: संदेश प्रकार | pacs008 ISO 20022
description: समर्थित ISO 20022 pacs संदेश परिभाषाएँ और संस्करण। वित्तीय संस्थानों के बीच ग्राहक क्रेडिट ट्रांसफर वर्कफ़्लो के लिए जनरेशन, वैलिडेशन, API ऑर्केस्ट्रेशन...
lang: hi-IN
lastUpdated: true
image: /logo.svg
---

# संदेश प्रकार

pacs008 मुख्य pacs.008 संदेश परिभाषा और ऑर्केस्ट्रेशन और सुलह प्रवाहों में उपयोग किए जाने वाले संबंधित संदेशों को कवर करता है।

> इस पृष्ठ पर संदर्भित ISO 20022, EPC और Swift की सार्वजनिक सामग्रियों के आधार पर 23 मार्च 2026 को प्राथमिक स्रोतों के विरुद्ध अंतिम समीक्षा की गई।

## शामिल समर्थन

<div class="message-coverage-table" tabindex="0" aria-label="शामिल समर्थन">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>संदेश प्रकार</th>
        <th>विवरण</th>
        <th>वर्ष</th>
        <th>अवलोकन</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/hi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">FI-से-FI भुगतान स्थिति रिपोर्ट</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.002 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति रिपोर्ट करने के लिए भेजा जाता है। यह भुगतान संदेश के भीतर व्यक्तिगत लेनदेन के लिए पुष्टि, अस्वीकृति या लंबित स्थिति की जानकारी प्रदान करता है।</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/hi/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">FI-से-FI ग्राहक प्रत्यक्ष डेबिट</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.003 संदेश वित्तीय संस्थानों के बीच ग्राहक प्रत्यक्ष डेबिट निर्देश को निष्पादित करने के लिए आदान-प्रदान किया जाता है। यह लेनदार के बैंक को लेनदार की ओर से ऋणी के बैंक से धन एकत्र करने में सक्षम बनाता है।</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/hi/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">भुगतान वापसी</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.004 संदेश का उपयोग पहले से निपटाए गए भुगतान लेनदेन को वापस करने के लिए किया जाता है। यह धन के प्रवाह को उलट देता है जब कोई भुगतान लागू नहीं हो सकता, गलती से भेजा गया हो, या मूल संस्थान द्वारा वापस बुलाया जा रहा हो।</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/hi/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">FI-से-FI भुगतान रिवर्सल</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.007 संदेश का उपयोग पहले भेजे गए भुगतान निर्देश को उलटने के लिए किया जाता है जो अभी तक निपटाया नहीं गया है या निपटाए गए भुगतान के प्रत्यावर्तन का अनुरोध करने के लिए। pacs.004 (वापसी) के विपरीत, इसे मूल निर्देश देने वाले एजेंट द्वारा आरंभ किया जाता है।</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/hi/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">FI-से-FI ग्राहक क्रेडिट ट्रांसफर</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">pacs.008 संदेश वित्तीय संस्थानों के बीच ग्राहक की ओर से धन हस्तांतरित करने के लिए आदान-प्रदान किया जाने वाला मुख्य भुगतान निर्देश है। यह एक या अधिक क्रेडिट ट्रांसफर लेनदेन के लिए ऋणी, लेनदार, राशि और प्रेषण सूचना वहन करता है।</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/hi/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.009 संदेश का उपयोग वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर के लिए किया जाता है जहां हस्तांतरण ग्राहक की ओर से नहीं बल्कि संस्थान की अपनी ओर से होता है। यह अंतरबैंक वित्तपोषण, कवर भुगतान और तरलता प्रबंधन का समर्थन करता है।</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/hi/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">वित्तीय संस्थानों के बीच प्रत्यक्ष डेबिट</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.010 संदेश का उपयोग वित्तीय संस्थानों के बीच संस्थान के अपने खाते पर प्रत्यक्ष डेबिट लेनदेन के लिए किया जाता है। यह एक संस्थान को दूसरे संस्थान के खाते से सीधे धन एकत्र करने में सक्षम बनाता है।</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/hi/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">FI-से-FI भुगतान स्थिति अनुरोध</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.028 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति का अनुरोध करने के लिए भेजा जाता है। यह बिना अनचाही स्थिति रिपोर्ट की प्रतीक्षा किए भुगतान प्रसंस्करण की सक्रिय ट्रैकिंग को सक्षम बनाता है।</td>
        </tr>
    </tbody>
  </table>
</div>

## वितरण मॉडल

प्रत्येक समर्थित संदेश प्रकार टेम्पलेट संपत्तियों और सत्यापन तर्क द्वारा समर्थित है ताकि टीमें कई चैनलों में जनरेशन और रिग्रेशन टेस्टिंग को मानकीकृत कर सकें।

## सही संदेश चुनना

संदेश कैटलॉग विशेष रूप से तब महत्वपूर्ण होता है जब टीमों को तय करना हो कि कौन-सा संदेश प्रक्रिया शुरू करता है, कौन-सा स्थिति बताता है, और कौन-सा प्रवाह को सुधारता या उलटता है।

समर्थित pacs प्रवाहों का संक्षिप्त निर्णय दृश्य पाने के लिए [संदेश चयन मार्गदर्शिका](/hi/message-selection/) देखें।


## 2026 बाजार संदर्भ

- **SEPA SCT / SCT Inst**: pacs.008 क्रेडिट ट्रांसफर विनिमय और तत्काल भुगतान प्रसंस्करण के लिए केंद्रीय बना हुआ है।
- **CBPR+**: pacs.008 MT103-शैली के सीमा पार पेलोड को समृद्ध संरचित डेटा से बदलना जारी रखता है।
- **संरचित पते**: वर्तमान बाजार मार्गदर्शन नवंबर 2026 में पूरी तरह से असंरचित डाक पतों से दूर जाने का संकेत देता है।
- **सीरियल विधि और STP**: बहु-चरण बैंक-से-बैंक श्रृंखलाएँ अभी भी महत्वपूर्ण हैं, और स्ट्रेट-थ्रू वेरिएंट परिचालन दक्षता के लिए आवश्यक रहते हैं।

## परिचालन क्षमताएँ

pacs008 समर्थित संदेश परिभाषा संशोधनों में टेम्पलेट-समर्थित जनरेशन और सत्यापन प्रदान करता है:

- संस्करणों की तुलना करें
- स्कीमा अपडेट का रिग्रेशन परीक्षण करें
- रिलीज़ से पहले आउटबाउंड भुगतान संदेश डेटा को मजबूत करें
- एक कोडबेस से उत्पाद, संचालन और माइग्रेशन टीमों का समर्थन करें

