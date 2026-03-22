---
title: About Pacs008 | Nederlands
description: What Pacs008 does and who it is for.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# About Pacs008

Pacs008 is a Python toolkit for automating ISO 20022 FI-to-FI customer credit transfer workflows.

## What it does

- Generates XML for `pacs.008` and adjacent pacs message families
- Validates data and XML against schemas
- Exposes a FastAPI service for automated workflows
- Provides a CLI for local execution and CI pipelines
- Supports structured data sources including CSV, JSON, JSONL, SQLite, and Parquet

## Who it is for

- payment operations teams
- platform engineers building internal banking rails
- migration programmes moving toward ISO 20022
- compliance and QA teams validating outbound payment messages

## 2026 readiness

Pacs008 is designed around the operational deadlines and data-quality pressures that matter in 2026:

- structured and hybrid postal address handling for CBPR+ and scheme migrations
- stronger validation around debtor, creditor, and agent data quality
- version-aware generation across legacy and current pacs.008 revisions
- automation paths that fit CI, batch operations, and internal payment services

## Why this site is different

Many public pacs.008 pages explain the message at a glossary or advisory level. Pacs008 focuses on execution:

- generate XML from real source data
- validate before delivery
- model payment chains and downstream formats
- make scheme-specific changes testable in code

