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

| Berichttype | Beschrijving |
|---|---|
| [`pacs.002.001.12`](/nl/pacs.002.001.12/) | FI to FI Payment Status Report |
| [`pacs.003.001.09`](/nl/pacs.003.001.09/) | FI to FI Customer Direct Debit |
| [`pacs.004.001.11`](/nl/pacs.004.001.11/) | Payment Return |
| [`pacs.007.001.11`](/nl/pacs.007.001.11/) | FI to FI Payment Reversal |
| [`pacs.008.001.01`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.02`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.03`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.04`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.05`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.06`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.07`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.08`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.09`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.10`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.11`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.12`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.13`](/nl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.009.001.10`](/nl/pacs.009.001.10/) | Financial Institution Credit Transfer |
| [`pacs.010.001.05`](/nl/pacs.010.001.05/) | Financial Institution Direct Debit |
| [`pacs.028.001.05`](/nl/pacs.028.001.05/) | FI to FI Payment Status Request |

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

