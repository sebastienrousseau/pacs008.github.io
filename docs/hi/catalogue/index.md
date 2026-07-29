---
title: "संदेश और नियम सूची | pacs008"
description: "कवरेज पैकेज में शामिल टेम्पलेट को दर्शाता है, इसलिए यह सॉफ़्टवेयर से अधिक का दावा नहीं कर सकता।"
lang: hi-IN
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /hi/catalogue/
robots: "index, follow"
draft: false
noindex: false
---

# संदेश और नियम सूची

pacs008 रजिस्ट्रियों से उत्पन्न, नियम-सेट `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).
कवरेज पैकेज में शामिल टेम्पलेट को दर्शाता है, इसलिए यह सॉफ़्टवेयर से अधिक का दावा नहीं कर सकता।

## संदेश परिवार

| परिवार | नाम | संस्करण | संख्या | लागू नियम |
|---|---|---|---|---|
| [`pacs.008`](/hi/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008.001.01 - .13 | 13 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |
| [`pacs.002`](/hi/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002.001.12 | 1 | — |
| [`pacs.003`](/hi/pacs.003.001.09/) | FI to FI Customer Direct Debit | pacs.003.001.09 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.004`](/hi/pacs.004.001.11/) | Payment Return | pacs.004.001.11 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.007`](/hi/pacs.007.001.11/) | FI to FI Payment Reversal | pacs.007.001.11 | 1 | — |
| [`pacs.009`](/hi/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009.001.10 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001` |
| [`pacs.010`](/hi/pacs.010.001.05/) | Financial Institution Direct Debit | pacs.010.001.05 | 1 | — |
| [`pacs.028`](/hi/pacs.028.001.05/) | FI to FI Payment Status Request | pacs.028.001.05 | 1 | — |

### अनुपलब्ध

हम इन्हें सूचीबद्ध करते हैं क्योंकि इनकी अनुपस्थिति मान लेना आसान है।

| परिवार | स्थिति | टिप्पणी |
|---|---|---|
| `pain.*` | Not implemented | The package cannot generate or parse pain messages. The browser workbench can now validate pain.001, pain.002, pain.007 and pain.008 against their XSDs. Structural validation only. Scoped in sebastienrousseau/pacs008#13. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/13) |
| `camt.*` | Not implemented | The package cannot generate or parse camt messages. The browser workbench can now validate camt.110 and camt.111 against their XSDs, which covers the November 2026 receive-and-consume obligation for reading an incoming camt.110 — but structural validation is not the same as support. Scoped in sebastienrousseau/pacs008#12. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/12) |
| `head.001` | Not implemented | Business Application Header not shipped as a standalone template. |

## स्कीम प्रोफ़ाइल

| प्रोफ़ाइल | नाम | स्थिति | प्रभावी |
|---|---|---|---|
| `cbpr-plus` | SWIFT CBPR+ | stable | 2026-11-14 |
| `chaps-uk` | Bank of England CHAPS | stable | 2026-11-14 |
| `t2-rtgs` | Eurosystem T2 RTGS | stable | 2026-11-14 |
| `fedwire` | US Federal Reserve Fedwire | stable | 2025-03-10 |
| `hvps-plus` | HVPS+ High-Value Payments | stable | 2026-11-14 |
| `sct-inst` | SEPA Instant Credit Transfer | stable | 2025-01-01 |

## नियम

प्रत्येक नियम का स्थिर पहचानकर्ता होता है जो छोटे रिलीज़ों में नहीं बदलता। परिणाम बदलने पर नया नियम-सेट संस्करण आवश्यक है।

*नियम सारांश और सुधार पाठ अंग्रेज़ी में दिए गए हैं: ये नियम की मानक सामग्री हैं, जिन्हें हर इंटरफ़ेस पहचानकर्ता से संदर्भित करता है।*

#### `CBPR-ADDR-001` — Fully unstructured postal address is not accepted

| | |
|---|---|
| प्रोफ़ाइल | cbpr-plus |
| परत | scheme |
| गंभीरता | error |
| प्रभावी तिथि | 2026-11-14 |
| संदेश | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| पथ | `{party}/PstlAdr` |
| स्रोत | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), सत्यापित 2026-07-28 |
| परीक्षण फ़ाइलें | [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) (उत्तीर्ण) · [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (उत्तीर्ण) · [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) (विफल) |

From 14 November 2026 a fully unstructured postal address is rejected in CBPR+ payment messages.

**सुधार.** Supply Town Name and Country in their structured elements. A compliant hybrid address is sufficient; a fully structured address is preferred.

#### `CBPR-ADDR-002` — Town Name is mandatory in a structured element

| | |
|---|---|
| प्रोफ़ाइल | cbpr-plus |
| परत | scheme |
| गंभीरता | error |
| प्रभावी तिथि | 2026-11-14 |
| संदेश | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| पथ | `{party}/PstlAdr/TwnNm` |
| स्रोत | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), सत्यापित 2026-07-28 |
| परीक्षण फ़ाइलें | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (उत्तीर्ण) · [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) (विफल) |

Town Name must be carried in TwnNm, not in an address line.

**सुधार.** Move the town into <TwnNm>. Leaving it inside <AdrLine> does not satisfy the requirement.

#### `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code

| | |
|---|---|
| प्रोफ़ाइल | cbpr-plus |
| परत | scheme |
| गंभीरता | error |
| प्रभावी तिथि | 2026-11-14 |
| संदेश | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| पथ | `{party}/PstlAdr/Ctry` |
| स्रोत | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), सत्यापित 2026-07-28 |
| परीक्षण फ़ाइलें | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (उत्तीर्ण) · [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) (विफल) |

Country must be carried in Ctry as a two-letter ISO 3166 alpha-2 code.

**सुधार.** Use the alpha-2 code, for example GB rather than United Kingdom or GBR.

#### `CBPR-ADDR-004` — Hybrid postal address is accepted

| | |
|---|---|
| प्रोफ़ाइल | cbpr-plus |
| परत | scheme |
| गंभीरता | info |
| प्रभावी तिथि | 2025-11-22 |
| संदेश | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| पथ | `{party}/PstlAdr` |
| स्रोत | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), सत्यापित 2026-07-28 |
| परीक्षण फ़ाइलें | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (उत्तीर्ण) |

A hybrid address — structured Town Name and Country alongside address lines — is accepted, both before and after the November 2026 change.

**सुधार.** No action required. Note that a fully structured address remains preferable for downstream data quality.

#### `CBPR-ADDR-005` — Agent identified by BIC only is exempt

| | |
|---|---|
| प्रोफ़ाइल | cbpr-plus |
| परत | scheme |
| गंभीरता | info |
| प्रभावी तिथि | 2026-11-14 |
| संदेश | `pacs.008`, `pacs.009` |
| पथ | `{agent}/FinInstnId/BICFI` |
| स्रोत | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), सत्यापित 2026-07-28 |
| परीक्षण फ़ाइलें | [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) (उत्तीर्ण) |

For agent fields, BIC-only identification remains valid; no postal address is required.

**सुधार.** No action required. Do not add a partial address purely to satisfy the address rule.

#### `CBPR-ADDR-006` — Message types excepted from the address requirement

| | |
|---|---|
| प्रोफ़ाइल | cbpr-plus |
| परत | scheme |
| गंभीरता | info |
| प्रभावी तिथि | 2026-11-14 |
| संदेश | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| पथ | — |
| स्रोत | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), सत्यापित 2026-07-28 |
| परीक्षण फ़ाइलें | — |

The structured address requirement does not apply to admi.024, camt.025, camt.052, camt.053, camt.054 and camt.060.

**सुधार.** No action required for these message types.

#### `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses

| | |
|---|---|
| प्रोफ़ाइल | chaps-uk |
| परत | scheme |
| गंभीरता | error |
| प्रभावी तिथि | 2026-11-14 |
| संदेश | `pacs.008`, `pacs.009` |
| पथ | `{party}/PstlAdr` |
| स्रोत | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), सत्यापित 2026-07-28 |
| परीक्षण फ़ाइलें | [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) (उत्तीर्ण) · [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) (विफल) |

From November 2026 the CHAPS validation library rejects payments carrying a fully unstructured address. Hybrid is the minimum acceptable form.

**सुधार.** Structure the address to at least hybrid form before submission to CHAPS.

#### `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments — **घोषित, अभी लागू नहीं**

| | |
|---|---|
| प्रोफ़ाइल | chaps-uk |
| परत | scheme |
| गंभीरता | error |
| प्रभावी तिथि | 2027-11-01 |
| संदेश | `pacs.008`, `pacs.009` |
| पथ | `CdtTrfTxInf/Purp/Cd` |
| स्रोत | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), सत्यापित 2026-07-28 |
| परीक्षण फ़ाइलें | — |

From November 2027 the Bank of England requires a purpose code on all CHAPS payments, extending the earlier property and FI-to-FI requirement.

**सुधार.** Populate <Purp><Cd> with an appropriate ISO 20022 external purpose code.

*Effective date is the announced month; the exact day should be re-verified against the Bank of England policy statement before this rule is enforced.*

#### `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS — **घोषित, अभी लागू नहीं**

| | |
|---|---|
| प्रोफ़ाइल | chaps-uk |
| परत | scheme |
| गंभीरता | error |
| प्रभावी तिथि | 2027-11-01 |
| संदेश | `pacs.008` |
| पथ | `CdtTrfTxInf/RmtInf/Strd` |
| स्रोत | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), सत्यापित 2026-07-28 |
| परीक्षण फ़ाइलें | — |

From November 2027 remittance information carried in CHAPS payments must be structured.

**सुधार.** Carry remittance data in <RmtInf><Strd> rather than <RmtInf><Ustrd>.

*Announced in the Bank of England consultation; re-verify scope and exact date before enforcement.*


## स्रोत

| स्रोत | प्रकाशक | दस्तावेज़ | प्रभावी | सत्यापित |
|---|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-11-14 | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-11-14 | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2025-01-01 | 2026-07-28 |

## ISO 20022 श्रेय

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

इस पृष्ठ की संदेश परिभाषाएँ और पहचानकर्ता ISO 20022 सामग्री से लिए गए हैं, जिनका उपयोग इसके अंतर्गत है: [ISO 20022 Intellectual Property Right Policy](https://www.iso20022.org/terms-use).
