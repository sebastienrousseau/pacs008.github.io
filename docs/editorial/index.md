---
title: Editorial Policy — pacs008 Content Guidelines
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule.
lang: en-GB
lastUpdated: true
image: /logo.webp
---

# Editorial policy

How content on pacs008.com is created, reviewed, and kept current.

## Sources

All message documentation is based on primary sources:

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions) for message specifications and version history.
- [SWIFT CBPR+ usage guidelines](https://www.swift.com/standards/iso-20022) for cross-border payment context.
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) for euro credit transfer rules.
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) for instant payment rules.

## Content review process

Every page on pacs008.com goes through a structured review before publication. New content starts with a draft based on primary source material. The draft is checked for technical accuracy against the ISO 20022 message catalogue and relevant scheme documentation. Version numbers, registration identifiers, and field definitions are verified against the official catalogue entries.

After initial review, content goes through a structural check to ensure consistency with existing pages. Navigation, cross-references, and terminology are standardised across the site. The review date shown on each message page reflects the most recent verification against primary sources.

## Review process

Each message page shows a review date. Reviews check that version numbers, registration status, and scheme context still match the primary sources listed above.

Content is updated when ISO 20022 publishes new catalogue versions, when SWIFT releases updated usage guidelines, or when scheme rules change.

## Technical accuracy

Technical content follows the ISO 20022 message definitions as published in the official catalogue. Field names, data types, and cardinality rules match the XSD schemas for each message version. Where scheme-specific usage differs from the base standard, the relevant scheme documentation is cited directly.

Code examples in the API documentation are tested against the current release of the pacs008 toolkit. CLI commands, API endpoints, and Python library methods reflect the published package on PyPI. Examples are updated with each new release to stay in sync with the toolkit.

## Translation methodology

pacs008.com is available in 22 languages. All content originates in English. Translated pages are generated from the reviewed English source material using a build script that preserves page structure, heading hierarchy, and link targets across all locales.

Technical terms, ISO identifiers, and standard codes remain untranslated to avoid ambiguity. Terms like pacs.008.001.13, BIC, IBAN, and CBPR+ appear in their standard form in every language. Non-technical content is translated to read naturally in each target language. Translations are reviewed for structural consistency and regenerated when the English source material changes.

## Update frequency

Content is updated in response to three triggers. First, when ISO 20022 publishes a new message catalogue version that affects pacs message definitions. Second, when SWIFT releases updated CBPR+ usage guidelines or migration deadlines. Third, when EPC updates SEPA Credit Transfer or Instant Credit Transfer rulebooks.

The pacs008 toolkit follows semantic versioning. Each new release is reflected in the API documentation and changelog. The site is rebuilt and redeployed with every content or toolkit update.

## Content generation

Page structure and translated content are generated from reviewed English source material using a build script. This ensures structural consistency across all 22 languages while keeping technical terms and ISO identifiers in their standard form.

## Accuracy and limits

pacs008.com aims to be accurate and current, but it is not a substitute for scheme rulebooks, counterparty agreements, or legal advice. Always confirm implementation details against the primary sources and the specific rules of the market or scheme you operate in.

## Contact

If you find an error or have a correction, please open an issue in the [pacs008 repository](https://github.com/sebastienrousseau/pacs008/issues).
