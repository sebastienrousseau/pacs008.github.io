---
title: API | Português
description: REST and CLI workflow support in Pacs008.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# API and tooling

The project ships with both a REST API and a CLI.

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

