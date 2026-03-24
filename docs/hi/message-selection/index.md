---
title: संदेश चयन मार्गदर्शिका | pacs008
description: जनरेशन, स्टेटस रिपोर्टिंग, रिटर्न, रिवर्सल और पूछताछ के लिए सही ISO 20022 pacs संदेश चुनें।
lang: hi-IN
lastUpdated: true
image: /logo.svg
---

# संदेश चयन मार्गदर्शिका

पहले व्यावसायिक घटना के आधार पर pacs परिवार चुनें, फिर स्कीम और ऑपरेटिंग मॉडल के आधार पर।



## त्वरित निर्णय मैट्रिक्स

<div class="decision-matrix-table" tabindex="0" aria-label="त्वरित निर्णय मैट्रिक्स">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
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
          <td class="decision-matrix-table__id"><a href="/hi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">FI-से-FI भुगतान स्थिति रिपोर्ट</td>
          <td class="decision-matrix-table__overview">pacs.002 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति रिपोर्ट करने के लिए भेजा जाता है। यह भुगतान संदेश के भीतर व्यक्तिगत लेनदेन के लिए पुष्टि, अस्वीकृति या लंबित स्थिति की जानकारी प्रदान करता है।</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/hi/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">FI-से-FI ग्राहक प्रत्यक्ष डेबिट</td>
          <td class="decision-matrix-table__overview">pacs.003 संदेश वित्तीय संस्थानों के बीच ग्राहक प्रत्यक्ष डेबिट निर्देश को निष्पादित करने के लिए आदान-प्रदान किया जाता है। यह लेनदार के बैंक को लेनदार की ओर से ऋणी के बैंक से धन एकत्र करने में सक्षम बनाता है।</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/hi/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">भुगतान वापसी</td>
          <td class="decision-matrix-table__overview">pacs.004 संदेश का उपयोग पहले से निपटाए गए भुगतान लेनदेन को वापस करने के लिए किया जाता है। यह धन के प्रवाह को उलट देता है जब कोई भुगतान लागू नहीं हो सकता, गलती से भेजा गया हो, या मूल संस्थान द्वारा वापस बुलाया जा रहा हो।</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/hi/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">FI-से-FI भुगतान रिवर्सल</td>
          <td class="decision-matrix-table__overview">pacs.007 संदेश का उपयोग पहले भेजे गए भुगतान निर्देश को उलटने के लिए किया जाता है जो अभी तक निपटाया नहीं गया है या निपटाए गए भुगतान के प्रत्यावर्तन का अनुरोध करने के लिए। pacs.004 (वापसी) के विपरीत, इसे मूल निर्देश देने वाले एजेंट द्वारा आरंभ किया जाता है।</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/hi/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">FI-से-FI ग्राहक क्रेडिट ट्रांसफर</td>
          <td class="decision-matrix-table__overview">pacs.008 संदेश वित्तीय संस्थानों के बीच ग्राहक की ओर से धन हस्तांतरित करने के लिए आदान-प्रदान किया जाने वाला मुख्य भुगतान निर्देश है। यह एक या अधिक क्रेडिट ट्रांसफर लेनदेन के लिए ऋणी, लेनदार, राशि और प्रेषण सूचना वहन करता है।</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/hi/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर</td>
          <td class="decision-matrix-table__overview">pacs.009 संदेश का उपयोग वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर के लिए किया जाता है जहां हस्तांतरण ग्राहक की ओर से नहीं बल्कि संस्थान की अपनी ओर से होता है। यह अंतरबैंक वित्तपोषण, कवर भुगतान और तरलता प्रबंधन का समर्थन करता है।</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/hi/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">वित्तीय संस्थानों के बीच प्रत्यक्ष डेबिट</td>
          <td class="decision-matrix-table__overview">pacs.010 संदेश का उपयोग वित्तीय संस्थानों के बीच संस्थान के अपने खाते पर प्रत्यक्ष डेबिट लेनदेन के लिए किया जाता है। यह एक संस्थान को दूसरे संस्थान के खाते से सीधे धन एकत्र करने में सक्षम बनाता है।</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/hi/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">FI-से-FI भुगतान स्थिति अनुरोध</td>
          <td class="decision-matrix-table__overview">pacs.028 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति का अनुरोध करने के लिए भेजा जाता है। यह बिना अनचाही स्थिति रिपोर्ट की प्रतीक्षा किए भुगतान प्रसंस्करण की सक्रिय ट्रैकिंग को सक्षम बनाता है।</td>
        </tr>
    </tbody>
  </table>
</div>

## सामान्य तुलना बिंदु

<div class="comparison-points-table" tabindex="0" aria-label="सामान्य तुलना बिंदु">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>तुलना</th>
        <th>मुख्य अंतर</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">ग्राहक भुगतान बनाम संस्थागत या कवर मूवमेंट</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">प्राप्तकर्ता पक्ष से रिटर्न बनाम प्रेषक पक्ष से रिवर्सल</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">स्टेटस रिपोर्ट बनाम स्टेटस अनुरोध</td>
        </tr>
    </tbody>
  </table>
</div>

## समर्थित संदेश पृष्ठ

- [`pacs.002.001.12`](/hi/pacs.002.001.12/) — FI-से-FI भुगतान स्थिति रिपोर्ट
- [`pacs.003.001.09`](/hi/pacs.003.001.09/) — FI-से-FI ग्राहक प्रत्यक्ष डेबिट
- [`pacs.004.001.11`](/hi/pacs.004.001.11/) — भुगतान वापसी
- [`pacs.007.001.11`](/hi/pacs.007.001.11/) — FI-से-FI भुगतान रिवर्सल
- [`pacs.008.001.13`](/hi/pacs.008.001.13/) — FI-से-FI ग्राहक क्रेडिट ट्रांसफर
- [`pacs.009.001.10`](/hi/pacs.009.001.10/) — वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर
- [`pacs.010.001.05`](/hi/pacs.010.001.05/) — वित्तीय संस्थानों के बीच प्रत्यक्ष डेबिट
- [`pacs.028.001.05`](/hi/pacs.028.001.05/) — FI-से-FI भुगतान स्थिति अनुरोध

