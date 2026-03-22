---
title: Über Pacs008 | Deutsch
description: Was Pacs008 leistet und für wen es gedacht ist.
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# Über Pacs008

Pacs008 ist ein Python-Toolkit zur Automatisierung von ISO 20022 FI-to-FI-Kundenzahlungsabläufen.

## Funktionen

- Erzeugt XML für `pacs.008` und verwandte pacs-Nachrichtendefinitionen
- Validiert Daten und XML gegen Schemata
- Stellt einen FastAPI-Dienst für automatisierte Abläufe bereit
- Bietet eine CLI für lokale Ausführung und CI-Pipelines
- Unterstützt strukturierte Datenquellen einschließlich CSV, JSON, JSONL, SQLite und Parquet

## Zielgruppen

- Zahlungsverkehrsteams
- Plattform-Ingenieure, die interne Zahlungsverarbeitungsinfrastruktur aufbauen
- Migrationsprogramme in Richtung ISO 20022
- Compliance- und QA-Teams, die ausgehende Zahlungsnachrichten validieren

## Bereitschaft 2026

Pacs008 ist auf die operativen Fristen und Datenqualitätsanforderungen ausgelegt, die 2026 relevant sind:

- Verarbeitung strukturierter und hybrider Postanschriften für CBPR+ und Schema-Migrationen
- Stärkere Validierung der Datenqualität von Schuldner, Gläubiger und Agent
- Versionsbewusste Generierung über alte und aktuelle pacs.008-Revisionen hinweg
- Automatisierungspfade, die zu CI, Batch-Operationen und internen Zahlungsdiensten passen

## Operativer Fokus

Pacs008 geht über die Nachrichtendefinitions-Referenz hinaus und unterstützt die operative Implementierung:

- XML aus echten Quelldaten generieren
- Vor der Zustellung validieren
- Zahlungsketten und nachgelagerte Formate modellieren
- Schema-spezifische Änderungen im Code testbar machen

