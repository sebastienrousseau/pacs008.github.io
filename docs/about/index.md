---
title: About pacs008 | pacs008
description: What pacs008 does and who it is for. Generation, validation, API orchestration, and compliance support for FI-to-FI customer credit transfer workflows.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# About pacs008

pacs008 is a Python toolkit for automating ISO 20022 FI-to-FI customer credit transfer workflows.

> Last reviewed against primary sources on 23 March 2026 using ISO 20022, EPC, and Swift public materials referenced on this page.

## What it does

- Generates XML for `pacs.008` and related pacs message definitions
- Validates data and XML against schemas
- Exposes a FastAPI service for automated workflows
- Provides a CLI for local execution and CI pipelines
- Supports structured data sources including CSV, JSON, JSONL, SQLite, and Parquet
- Validates IBAN (75 countries, ISO 7064 checksum) and BIC (ISO 9362) identifiers
- Cleanses payment data for SWIFT compliance with transliteration and field-length enforcement
- Streams large datasets in configurable chunks for memory-efficient processing
- Ships a Docker image for containerised API deployment

## Who it is for

- payment operations teams
- platform engineers building internal payment processing infrastructure
- migration programmes moving toward ISO 20022
- compliance and QA teams validating outbound payment messages

## Validation

Multiple validation layers operate before any XML is written:

- JSON Schema validation against 20 message-specific schemas
- IBAN format and checksum verification covering 75 countries
- BIC structure and country-code validation per ISO 9362
- XSD validation of generated XML against the official ISO 20022 schemas

## Security

pacs008 applies defence-in-depth across every layer of the processing pipeline:

- XXE prevention through defusedxml for all XML parsing operations
- path-traversal protection with strict directory allowlisting
- PII masking in structured JSON logs to support GDPR and PCI DSS compliance
- SQL injection prevention with strict table-name sanitisation for SQLite sources

## 2026 readiness

pacs008 is designed around the operational deadlines and data-quality requirements relevant to 2026:

- structured and hybrid postal address handling for CBPR+ and scheme migrations
- stronger validation around debtor, creditor, and agent data quality
- version-aware generation across legacy and current pacs.008 revisions
- automation paths that fit CI, batch operations, and internal payment services

## Operational focus

pacs008 goes beyond message definition reference to support operational implementation:

- generate XML from real source data
- validate before delivery
- model payment chains and downstream formats
- make scheme-specific changes testable in code

## Implementation checklist

- Select the correct message family for the business event before writing templates.
- Validate business data before XML generation so schema errors are not your first signal.
- Treat BIC, IBAN, remittance, and postal-address quality as release criteria rather than cleanup work.
- Regression-test every scheme or bank-specific rule change against representative payment data.


