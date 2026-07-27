---
title: "संपादकीय नीति | pacs008"
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule.
lang: hi-IN
lastUpdated: true
image: /logo.webp
---

# संपादकीय नीति

How content on pacs008.com is created, reviewed, and kept current.

## Sources

All message documentation is based on primary sources:

- [ISO 20022 संदेश परिभाषा सूची](https://www.iso20022.org/iso-20022-message-definitions) संदेश विनिर्देशों और संस्करण इतिहास के लिए।
- [SWIFT CBPR+ उपयोग दिशानिर्देश](https://www.swift.com/standards/iso-20022) सीमा-पार भुगतान संदर्भ के लिए।
- [EPC SEPA क्रेडिट ट्रांसफर नियम पुस्तिका](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) यूरो क्रेडिट ट्रांसफर नियमों के लिए।
- [EPC SEPA तत्काल क्रेडिट ट्रांसफर नियम पुस्तिका](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) तत्काल भुगतान नियमों के लिए।

## सामग्री समीक्षा प्रक्रिया

pacs008.com पर प्रत्येक पृष्ठ प्रकाशन से पहले एक व्यवस्थित समीक्षा से गुज़रता है। नई सामग्री प्राथमिक स्रोत सामग्री पर आधारित एक प्रारूप से शुरू होती है। प्रारूप की तकनीकी सटीकता ISO 20022 संदेश सूची और संबंधित योजना प्रलेखन के विरुद्ध जाँची जाती है। संस्करण संख्याएँ, पंजीकरण पहचानकर्ता और फ़ील्ड परिभाषाएँ आधिकारिक सूची प्रविष्टियों के विरुद्ध सत्यापित की जाती हैं।

प्रारंभिक समीक्षा के बाद सामग्री की मौजूदा पृष्ठों के साथ संगतता सुनिश्चित करने के लिए संरचनात्मक जाँच होती है। नेविगेशन, क्रॉस-रेफ़रेंस और शब्दावली पूरी साइट पर मानकीकृत की जाती है। प्रत्येक संदेश पृष्ठ पर दिखाई गई समीक्षा तिथि प्राथमिक स्रोतों के विरुद्ध नवीनतम सत्यापन दर्शाती है।

## Review process

Each message page shows a review date. Reviews check that version numbers, registration status, and scheme context still match the primary sources listed above.

Content is updated when ISO 20022 publishes new catalogue versions, when SWIFT releases updated usage guidelines, or when scheme rules change.

## तकनीकी सटीकता

तकनीकी सामग्री आधिकारिक सूची में प्रकाशित ISO 20022 संदेश परिभाषाओं का पालन करती है। फ़ील्ड नाम, डेटा प्रकार और कार्डिनैलिटी नियम प्रत्येक संदेश संस्करण के XSD स्कीमा से मेल खाते हैं। जहाँ योजना-विशिष्ट उपयोग आधार मानक से भिन्न होता है, वहाँ संबंधित योजना प्रलेखन सीधे उद्धृत किया जाता है।

API प्रलेखन में कोड उदाहरण pacs008 टूलकिट के वर्तमान रिलीज़ के विरुद्ध परीक्षित हैं। CLI कमांड, API एंडपॉइंट और Python लाइब्रेरी विधियाँ PyPI पर प्रकाशित पैकेज को दर्शाती हैं। उदाहरण प्रत्येक नई रिलीज़ के साथ टूलकिट के साथ समन्वय बनाए रखने के लिए अपडेट किए जाते हैं।

## अनुवाद पद्धति

pacs008.com 22 भाषाओं में उपलब्ध है। सारी सामग्री अंग्रेज़ी में उत्पन्न होती है। अनुवादित पृष्ठ समीक्षित अंग्रेज़ी स्रोत सामग्री से एक बिल्ड स्क्रिप्ट का उपयोग करके उत्पन्न किए जाते हैं जो सभी स्थानों पर पृष्ठ संरचना, शीर्षक पदानुक्रम और लिंक लक्ष्य संरक्षित रखती है।

तकनीकी शब्द, ISO पहचानकर्ता और मानक कोड अस्पष्टता से बचने के लिए अनुवादित नहीं किए जाते। pacs.008.001.13, BIC, IBAN और CBPR+ जैसे शब्द हर भाषा में अपने मानक रूप में प्रकट होते हैं। गैर-तकनीकी सामग्री प्रत्येक लक्ष्य भाषा में स्वाभाविक रूप से पढ़ने योग्य अनुवादित की जाती है। अनुवादों की संरचनात्मक संगतता की समीक्षा की जाती है और अंग्रेज़ी स्रोत सामग्री बदलने पर पुनः उत्पन्न किए जाते हैं।

## अपडेट आवृत्ति

सामग्री तीन कारणों से अपडेट की जाती है। पहला, जब ISO 20022 pacs संदेश परिभाषाओं को प्रभावित करने वाला नया संदेश सूची संस्करण प्रकाशित करता है। दूसरा, जब SWIFT अपडेटेड CBPR+ उपयोग दिशानिर्देश या माइग्रेशन समय-सीमा जारी करता है। तीसरा, जब EPC SEPA क्रेडिट ट्रांसफर या तत्काल क्रेडिट ट्रांसफर नियम पुस्तिकाएँ अपडेट करता है।

pacs008 टूलकिट सिमेंटिक वर्शनिंग का पालन करती है। प्रत्येक नई रिलीज़ API प्रलेखन और परिवर्तन लॉग में परिलक्षित होती है। प्रत्येक सामग्री या टूलकिट अपडेट के साथ साइट पुनर्निर्मित और पुनः तैनात की जाती है।

## Content generation

Page structure and translated content are generated from reviewed English source material using a build script. This ensures structural consistency across all 22 languages while keeping technical terms and ISO identifiers in their standard form.

## Accuracy and limits

pacs008.com aims to be accurate and current, but it is not a substitute for scheme rulebooks, counterparty agreements, or legal advice. Always confirm implementation details against the primary sources and the specific rules of the market or scheme you operate in.

## Contact

If you find an error or have a correction, please open an issue in the [pacs008 repository](https://github.com/sebastienrousseau/pacs008/issues).
