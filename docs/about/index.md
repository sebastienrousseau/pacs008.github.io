---
title: About pacs008 - ISO 20022 toolkit | pacs008
description: Learn what pacs008 does, who it helps, and how it supports ISO 20022 payment generation, validation, and operational delivery.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# About pacs008

pacs008 helps teams create and check ISO 20022 payment messages. It is a Python toolkit for day-to-day payment operations.

> Last reviewed against primary sources on 23 March 2026 using ISO 20022, EPC, and Swift public materials referenced on this page.

## What it does

- Generates XML for `pacs.008` and related pacs messages.
- Checks business data and XML before release.
- Exposes a FastAPI service for automated workflows.
- Provides a CLI for local runs and CI pipelines.
- Reads structured data from CSV, JSON, JSONL, SQLite, and Parquet.
- Checks IBAN and BIC identifiers before message generation.
- Cleans payment text for SWIFT character and length rules.
- Processes large datasets in batches to limit memory use.
- Ships a Docker image for API deployment.

## Who it is for

- payment operations teams
- platform engineers building internal payment systems
- migration programmes moving to ISO 20022
- compliance and QA teams checking outbound payment messages

## Validation

The toolkit checks data before it writes XML:

- JSON Schema checks for 20 message-specific schemas.
- IBAN format and checksum checks.
- BIC structure and country-code checks.
- XSD validation against official ISO 20022 schemas.

## Security

The toolkit also blocks common parsing and file-handling risks:

- XXE protection for XML parsing.
- Path allowlists to reduce traversal risk.
- PII masking in structured logs.
- Strict SQLite table-name sanitisation.

## 2026 readiness

pacs008 is built around the 2026 deadlines and data checks that matter most:

- structured and hybrid postal address support for CBPR+ and scheme migrations.
- stronger checks for debtor, creditor, and agent data.
- version-aware generation across older and current pacs.008 revisions.
- automation paths for CI, batch runs, and internal payment services.

## Operational focus

pacs008 is not just a message reference. It helps teams run payment workflows:

- generate XML from real source data.
- validate before delivery.
- model payment chains and downstream formats.
- make scheme-specific changes testable in code.

## Implementation checklist

- Select the correct message family for the business event before writing templates.
- Validate business data before XML generation so schema errors are not your first signal.
- Treat BIC, IBAN, remittance, and postal-address quality as release criteria rather than cleanup work.
- Regression-test every scheme or bank-specific rule change against representative payment data.


