---
title: Berichttypen | Nederlands
description: Ondersteunde ISO 20022 pacs-berichtdefinities en versies.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# Berichttypen

Pacs008 dekt de kern pacs.008-berichtdefinitie en gerelateerde berichten die worden gebruikt in orkestratie- en afstemmingsstromen.

## Inbegrepen ondersteuning

- `pacs.002.001.12`
- `pacs.003.001.09`
- `pacs.004.001.11`
- `pacs.007.001.11`
- `pacs.008.001.01`
- `pacs.008.001.02`
- `pacs.008.001.03`
- `pacs.008.001.04`
- `pacs.008.001.05`
- `pacs.008.001.06`
- `pacs.008.001.07`
- `pacs.008.001.08`
- `pacs.008.001.09`
- `pacs.008.001.10`
- `pacs.008.001.11`
- `pacs.008.001.12`
- `pacs.008.001.13`
- `pacs.009.001.10`
- `pacs.010.001.05`
- `pacs.028.001.05`

## Leveringsmodel

Elk ondersteund berichttype wordt ondersteund door sjablonen en validatielogica zodat teams het genereren en regressietesten over meerdere kanalen kunnen standaardiseren.

## Marktcontext 2026

- **SEPA SCT / SCT Inst**: pacs.008 blijft centraal voor overschrijvingsuitwisseling en instantbetalingsverwerking.
- **CBPR+**: pacs.008 blijft MT103-stijl grensoverschrijdende payloads vervangen door rijkere gestructureerde gegevens.
- **Gestructureerde adressen**: huidige marktrichtlijnen wijzen op de omschakeling in november 2026 weg van volledig ongestructureerde postadressen.
- **Seriële methode en STP**: multi-leg bank-naar-bank-ketens blijven belangrijk, en straight-through-varianten blijven essentieel voor operationele efficiëntie.

## Operationele mogelijkheden

Pacs008 biedt sjabloongestuurde generatie en validatie over ondersteunde berichtdefinitie-revisies:

- versies vergelijken
- regressietests uitvoeren op schema-updates
- uitgaande betalingsberichtgegevens versterken vóór release
- product-, operatie- en migratieteams ondersteunen vanuit één codebase

