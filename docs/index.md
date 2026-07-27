---
title: "pacs008 | ISO 20022 pacs.008 Toolkit and API"
description: "Generate, validate, and deliver ISO 20022 pacs.008 payment messages. API orchestration and compliance support for FI-to-FI customer credit transfer workflows."
lang: en-GB
author: "Sebastien Rousseau"
lastUpdated: true
image: "/logo.webp"
imageAlt: "pacs008"
canonical: "/"
robots: "index, follow"
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "pacs008"
pageType: "home"
schemaType: "WebSite"
heroText: "Automate ISO 20022 pacs.008 message processing."
home: true
metaTitle: "pacs008 — ISO 20022 Payment Message Toolkit and API"
subtitle: "Generate, validate, and deliver ISO 20022 pacs.008 payment messages. API orchestration and compliance support for FI-to-FI customer credit transfer workflows."
tagline: "Generate, validate, and deliver ISO 20022 pacs.008 payment messages. API orchestration and compliance support for FI-to-FI customer credit transfer workflows."
actionText: "Get Started"
actionLink: "/about/"
actionText2: "View API"
actionLink2: "/api/"
date: "2026-07-27"
news_publication_date: "2026-07-27"
item_pub_date: "2026-07-27"
last_build_date: "2026-07-27"
name: "pacs008"
short_name: "pacs008"
start_url: "/"
display: "standalone"
background_color: "#ffffff"
theme_color: "#084a53"
---

# Automate ISO 20022 pacs.008 message processing.

Generate, validate, and deliver ISO 20022 pacs.008 payment messages. API orchestration and compliance support for FI-to-FI customer credit transfer workflows.

## Key Capabilities

- **What it does**: Generates XML for `pacs.008` and related pacs message definitions; Validates data and XML against schemas; Exposes a FastAPI service for automated workflows.
- **Validation**: JSON Schema validation against 20 message-specific schemas; IBAN format and checksum verification covering 75 countries; XSD validation of generated XML against official ISO 20022 schemas.
- **Security**: XXE prevention via defusedxml for all XML parsing operations; Path traversal protection with strict directory allowlist; PII masking in structured JSON logs for GDPR and PCI DSS compliance.
- **2026 readiness**: Structured and hybrid postal address handling for CBPR+ and schema migrations; Stronger debtor, creditor, and agent data-quality validation; Version-aware generation across legacy and current pacs.008 revisions.

## Installation & Quickstart

```bash
pip install pacs008
```

Read the full [API & CLI Reference](/api/) and [Selection Guide](/message-selection/).
