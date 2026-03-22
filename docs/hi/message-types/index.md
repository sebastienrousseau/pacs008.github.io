---
title: संदेश प्रकार | हिन्दी
description: समर्थित ISO 20022 pacs संदेश परिभाषाएँ और संस्करण।
lang: hi-IN
lastUpdated: true
image: /logo.svg
---

# संदेश प्रकार

Pacs008 मुख्य pacs.008 संदेश परिभाषा और ऑर्केस्ट्रेशन और सुलह प्रवाहों में उपयोग किए जाने वाले संबंधित संदेशों को कवर करता है।

## शामिल समर्थन

- [`pacs.002.001.12`](/hi/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/hi/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/hi/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/hi/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.01`](/hi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.02`](/hi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.03`](/hi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.04`](/hi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.05`](/hi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.06`](/hi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.07`](/hi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.08`](/hi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.09`](/hi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.10`](/hi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.11`](/hi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.12`](/hi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.13`](/hi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/hi/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/hi/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/hi/pacs.028.001.05/) — FI to FI Payment Status Request

## वितरण मॉडल

प्रत्येक समर्थित संदेश प्रकार टेम्पलेट संपत्तियों और सत्यापन तर्क द्वारा समर्थित है ताकि टीमें कई चैनलों में जनरेशन और रिग्रेशन टेस्टिंग को मानकीकृत कर सकें।

## 2026 बाजार संदर्भ

- **SEPA SCT / SCT Inst**: pacs.008 क्रेडिट ट्रांसफर विनिमय और तत्काल भुगतान प्रसंस्करण के लिए केंद्रीय बना हुआ है।
- **CBPR+**: pacs.008 MT103-शैली के सीमा पार पेलोड को समृद्ध संरचित डेटा से बदलना जारी रखता है।
- **संरचित पते**: वर्तमान बाजार मार्गदर्शन नवंबर 2026 में पूरी तरह से असंरचित डाक पतों से दूर जाने का संकेत देता है।
- **सीरियल विधि और STP**: बहु-चरण बैंक-से-बैंक श्रृंखलाएँ अभी भी महत्वपूर्ण हैं, और स्ट्रेट-थ्रू वेरिएंट परिचालन दक्षता के लिए आवश्यक रहते हैं।

## परिचालन क्षमताएँ

Pacs008 समर्थित संदेश परिभाषा संशोधनों में टेम्पलेट-समर्थित जनरेशन और सत्यापन प्रदान करता है:

- संस्करणों की तुलना करें
- स्कीमा अपडेट का रिग्रेशन परीक्षण करें
- रिलीज़ से पहले आउटबाउंड भुगतान संदेश डेटा को मजबूत करें
- एक कोडबेस से उत्पाद, संचालन और माइग्रेशन टीमों का समर्थन करें

