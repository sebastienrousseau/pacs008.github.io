---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: pacs.008 संदेश वित्तीय संस्थानों के बीच ग्राहक की ओर से धन हस्तांतरित करने के लिए आदान-प्रदान किया जाने वाला मुख्य भुगतान निर्देश है। यह एक या अधिक...
lang: hi-IN
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **ISO नाम** | FIToFICustomerCreditTransferV13 |
| **पंजीकरण स्थिति** | Registered |
| **वर्ष** | 2023 |
| **संस्करण** | 13 |

## अवलोकन

pacs.008 संदेश वित्तीय संस्थानों के बीच ग्राहक की ओर से धन हस्तांतरित करने के लिए आदान-प्रदान किया जाने वाला मुख्य भुगतान निर्देश है। यह एक या अधिक क्रेडिट ट्रांसफर लेनदेन के लिए ऋणी, लेनदार, राशि और प्रेषण सूचना वहन करता है।

> 23 मार्च 2026 को प्राथमिक स्रोतों के विरुद्ध अंतिम समीक्षा की गई। ISO 20022 कैटलॉग संदर्भ तिथि: 27 February 2025; स्रोत लिंक नीचे सूचीबद्ध हैं।

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

| प्रमुख डेटा तत्व | व्यावसायिक संदर्भ |
|---|---|
| **GrpHdr** — संदेश ID, निर्माण तिथि, लेनदेन संख्या और निपटान सूचना के साथ ग्रुप हेडर | ग्राहक-आरंभित सीमा-पार और घरेलू क्रेडिट ट्रांसफर के लिए प्राथमिक संदेश |
| **CdtTrfTxInf** — राशि, शुल्क और उद्देश्य के साथ क्रेडिट ट्रांसफर लेनदेन सूचना | SEPA SCT, SEPA Instant, CBPR+ और राष्ट्रीय समाशोधन प्रणालियों में उपयोग किया जाता है |
| **Dbtr / DbtrAgt** — ऋणी और ऋणी एजेंट पहचान और खाता विवरण | सीधे-स्वचालित समाधान का समर्थन करने के लिए संरचित प्रेषण सूचना वहन करता है |
| **Cdtr / CdtrAgt** — लेनदार और लेनदार एजेंट पहचान और खाता विवरण | बहु-चरण भुगतान शृंखलाओं के लिए क्रमिक, कवर और प्रत्यक्ष निपटान विधियों का समर्थन करता है |
| **RmtInf** — संरचित या असंरचित भुगतान संदर्भों के लिए प्रेषण सूचना | ऋणी एजेंट pacs.008 बनाता है और इसे लेनदार एजेंट को भेजता है (सीधे या मध्यस्थों के माध्यम से)। शृंखला का प्रत्येक एजेंट निर्देश को मान्य, समृद्ध और अग्रेषित करता है जब तक लेनदार एजेंट लाभार्थी के खाते में जमा नहीं कर देता। |

## CBPR+ और स्कीमा संदर्भ

- सीमा-पार ग्राहक क्रेडिट ट्रांसफर के लिए MT103 और MT103+ को प्रतिस्थापित करता है
- नवंबर 2026 की संरचित पता समय सीमा सभी पक्ष डाक पतों पर लागू होती है
- SWIFT gpi को UETR-आधारित एंड-टू-एंड ट्रैकिंग के लिए pacs.008 की आवश्यकता है
- 13 संशोधन बाजार अवसंरचनाओं में चल रहे स्कीमा विकास को दर्शाते हैं

## संदेश प्रवाह

ऋणी एजेंट pacs.008 बनाता है और इसे लेनदार एजेंट को भेजता है (सीधे या मध्यस्थों के माध्यम से)। शृंखला का प्रत्येक एजेंट निर्देश को मान्य, समृद्ध और अग्रेषित करता है जब तक लेनदार एजेंट लाभार्थी के खाते में जमा नहीं कर देता।

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

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## संबंधित संदेश
| संदेश प्रकार | विवरण | अवलोकन |
|---|---|---|
| [`pacs.002.001.12`](/hi/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 संदेश एक वित्तीय संस्थान द्वारा पहले भेजे गए भुगतान निर्देश की स्थिति रिपोर्ट करने के लिए भेजा जाता है। यह भुगतान संदेश के भीतर व्यक्तिगत लेनदेन के लिए पुष्टि, अस्वीकृति या लंबित स्थिति की जानकारी प्रदान करता है। |
| [`pacs.004.001.11`](/hi/pacs.004.001.11/) | Payment Return | pacs.004 संदेश का उपयोग पहले से निपटाए गए भुगतान लेनदेन को वापस करने के लिए किया जाता है। यह धन के प्रवाह को उलट देता है जब कोई भुगतान लागू नहीं हो सकता, गलती से भेजा गया हो, या मूल संस्थान द्वारा वापस बुलाया जा रहा हो। |
| [`pacs.009.001.10`](/hi/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009 संदेश का उपयोग वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर के लिए किया जाता है जहां हस्तांतरण ग्राहक की ओर से नहीं बल्कि संस्थान की अपनी ओर से होता है। यह अंतरबैंक वित्तपोषण, कवर भुगतान और तरलता प्रबंधन का समर्थन करता है। |

