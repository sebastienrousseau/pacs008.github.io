---
title: API | English
description: REST and CLI workflow support in Pacs008.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# API

The project provides both a REST API and a CLI for operational payment message workflows.

## API capabilities

- health and readiness endpoints
- data validation before XML generation
- synchronous generation for direct workflows
- asynchronous job execution for longer-running pipelines
- downloadable generated files through job completion flows

## CLI capabilities

- point to a source file and message version
- validate against XSD before delivery
- generate XML into pipeline-friendly output directories
- fit into CI jobs, batch schedules, and local operator tooling

## Implementation focus

Pacs008 is designed for operational use across payment processing teams:

- pre-flight validation before message creation
- scheme and version selection at runtime
- asynchronous generation flows for internal services
- deterministic outputs for testing and audit trails

## Data-quality requirements for 2026

Message quality requirements are tightening across the industry, particularly around:

- party and agent identification
- structured or hybrid address readiness
- richer remittance and reference handling
- transparency across serial payment chains

The API and CLI are designed to make those checks part of the workflow instead of a manual review step.

