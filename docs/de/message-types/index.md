---
title: Nachrichtentypen | Deutsch
description: Unterstützte ISO 20022 pacs-Nachrichtendefinitionen und Versionen.
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# Nachrichtentypen

pacs008 deckt die zentrale pacs.008-Nachrichtendefinition sowie verwandte Nachrichten für Orchestrierung und Abstimmung ab.

## Enthaltene Unterstützung

| Nachrichtentyp | Beschreibung |
|---|---|
| [`pacs.002.001.12`](/de/pacs.002.001.12/) | FI to FI Payment Status Report |
| [`pacs.003.001.09`](/de/pacs.003.001.09/) | FI to FI Customer Direct Debit |
| [`pacs.004.001.11`](/de/pacs.004.001.11/) | Payment Return |
| [`pacs.007.001.11`](/de/pacs.007.001.11/) | FI to FI Payment Reversal |
| [`pacs.008.001.01`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.02`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.03`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.04`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.05`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.06`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.07`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.08`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.09`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.10`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.11`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.12`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.13`](/de/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.009.001.10`](/de/pacs.009.001.10/) | Financial Institution Credit Transfer |
| [`pacs.010.001.05`](/de/pacs.010.001.05/) | Financial Institution Direct Debit |
| [`pacs.028.001.05`](/de/pacs.028.001.05/) | FI to FI Payment Status Request |

## Bereitstellungsmodell

Jeder unterstützte Nachrichtentyp basiert auf Vorlagen und Validierungslogik, damit Teams Generierung und Regressionstests standardisieren können.

## Marktkontext 2026

- **SEPA SCT / SCT Inst**: pacs.008 bleibt zentral für den Überweisungsaustausch und die Echtzeit-Zahlungsverarbeitung.
- **CBPR+**: pacs.008 ersetzt weiterhin MT103-artige grenzüberschreitende Nutzlasten durch reichhaltigere strukturierte Daten.
- **Strukturierte Adressen**: Aktuelle Marktleitlinien weisen auf die Umstellung im November 2026 weg von vollständig unstrukturierten Postanschriften hin.
- **Serielle Methode und STP**: Mehrstufige Bank-zu-Bank-Ketten bleiben wichtig, und Straight-Through-Varianten sind weiterhin entscheidend für die operative Effizienz.

## Operative Fähigkeiten

pacs008 bietet vorlagengestützte Generierung und Validierung über unterstützte Nachrichtendefinitions-Revisionen:

- Versionen vergleichen
- Regressionstests für Schema-Updates durchführen
- Ausgehende Zahlungsnachrichtendaten vor der Freigabe stärken
- Produkt-, Betriebs- und Migrationsteams aus einer einzigen Codebasis unterstützen

