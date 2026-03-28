---
title: About pacs008 — ISO 20022 Payment Message Toolkit
description: Learn how pacs008 helps teams generate, validate, test, and ship ISO 20022 payment messages for daily payment operations.
lang: en-GB
lastUpdated: true
image: /logo.webp
howtoName: "How to implement ISO 20022 pacs.008 payment messages"
howtoDescription: "Step-by-step checklist for rolling out ISO 20022 pacs.008 message generation and validation."
howto:
  - name: "Step 1"
    text: "Pick the right message family for the business event before writing templates."
  - name: "Step 2"
    text: "Validate business data before XML generation so that schema errors are not the first signal."
  - name: "Step 3"
    text: "Treat BIC, IBAN, remittance, and postal-address quality as a release criterion, not a later cleanup."
  - name: "Step 4"
    text: "Regression-test each scheme or bank rule change with representative payment data."
---

# About pacs008

pacs008 is a Python toolkit for teams that need to generate, validate, and ship ISO 20022 payment messages with less manual repair work. It helps payment teams catch bad data before release.

## What it does

- Generates XML for `pacs.008` and related pacs message definitions.
- Validates data and XML against schemas.
- Exposes a FastAPI service for automated workflows.
- Provides a CLI for local runs and CI pipelines.
- Supports structured data sources including CSV, JSON, JSONL, SQLite, and Parquet.
- Validates IBAN (75 countries, ISO 7064 checksum) and BIC (ISO 9362) identifiers.
- Cleans payment data for SWIFT compliance with transliteration and field-length control.
- Processes large datasets in configurable batches to limit memory use.
- Ships a Docker image for containerised API deployment.

## Who it is for

- Payment operations teams
- Platform engineers building internal payment processing infrastructure
- Migration programmes moving to ISO 20022
- Compliance and QA teams validating outbound payment messages

## Validation

Multiple validation layers run before any XML is written:

- JSON Schema validation against 20 message-specific schemas.
- IBAN format and checksum verification covering 75 countries supported by the toolkit.
- BIC structure and country-code validation per ISO 9362.
- XSD validation of generated XML against official ISO 20022 schemas.

## Security

pacs008 applies defence in depth across every layer of the processing pipeline:

- XXE prevention via defusedxml for all XML parsing operations.
- Path-traversal protection with strict directory allowlists.
- PII masking in structured JSON logs to support GDPR and PCI DSS compliance.
- SQL-injection prevention with strict table-name sanitisation for SQLite sources.

## 2026 readiness

pacs008 is built around the operational deadlines and data-quality requirements relevant to 2026:

- Structured and hybrid postal-address handling for CBPR+ and scheme migrations.
- Stronger validation of debtor, creditor, and agent data quality.
- Version-aware generation across older and current pacs.008 revisions.
- Automation paths that fit CI, batch operations, and internal payment services.

## Operational focus

pacs008 goes beyond message-definition reference to support operational implementation:

- Generate XML from real source data.
- Validate before delivery.
- Model payment chains and downstream formats.
- Make scheme-specific changes testable in code.

## Implementation checklist

Use this list to keep rollout work simple and repeatable.

Keep each release small, testable, and easy to trace.

- Pick the right message family for the business event before writing templates.
- Validate business data before XML generation so that schema errors are not the first signal.
- Treat BIC, IBAN, remittance, and postal-address quality as a release criterion, not a later cleanup.
- Regression-test each scheme or bank rule change with representative payment data.

