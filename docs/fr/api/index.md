---
title: API | Français
description: Prise en charge REST et CLI dans Pacs008.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# API

Le projet fournit a la fois une API REST et une CLI pour les flux de paiement operationnels.

## Capacites API

- health and readiness endpoints
- data validation before XML generation
- synchronous generation for direct workflows
- asynchronous job execution for longer-running pipelines
- downloadable generated files through job completion flows

## Capacites CLI

- point to a source file and message version
- validate against XSD before delivery
- generate XML into pipeline-friendly output directories
- fit into CI jobs, batch schedules, and local operator tooling

## Implementation focus

Competitor content often explains pacs.008 structure, but rarely shows how teams should operationalise it. Pacs008 is built for:

- pre-flight validation before message creation
- scheme and version selection at runtime
- asynchronous generation flows for internal services
- deterministic outputs for testing and audit trails

## Data-quality pressure in 2026

Operational teams are under increasing pressure to improve message quality, especially around:

- party and agent identification
- structured or hybrid address readiness
- richer remittance and reference handling
- transparency across serial payment chains

The API and CLI are designed to make those checks part of the workflow instead of a manual review step.

