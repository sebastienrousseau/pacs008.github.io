---
title: API | Nederlands
description: REST- en CLI-workflowondersteuning in Pacs008.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# API

Het project biedt zowel een REST API als een CLI voor operationele betalingsberichtworkflows.

## API-mogelijkheden

- gezondheids- en gereedheidsendpoints
- gegevensvalidatie vóór XML-generatie
- synchrone generatie voor directe workflows
- asynchrone taakuitvoering voor langere pipelines
- downloadbare gegenereerde bestanden via taakafrondings-flows

## CLI-mogelijkheden

- verwijzen naar een bronbestand en berichtversie
- valideren tegen XSD vóór levering
- XML genereren in pipeline-vriendelijke uitvoermappen
- passen in CI-taken, batchschema's en lokale operatortools

## Implementatiefocus

Pacs008 is ontworpen voor operationeel gebruik door betalingsverwerkingsteams:

- pre-flight validatie vóór berichtaanmaak
- schema- en versieselectie tijdens runtime
- asynchrone generatieflows voor interne diensten
- deterministische output voor tests en audit trails

## Datakwaliteitsvereisten voor 2026

De eisen aan berichtkwaliteit worden strenger in de sector, met name rond:

- identificatie van partijen en agenten
- gereedheid van gestructureerde of hybride adressen
- rijkere verwerking van overmakingen en referenties
- transparantie over seriële betalingsketens

De API en CLI zijn ontworpen om deze controles onderdeel van de workflow te maken in plaats van een handmatige beoordelingsstap.

