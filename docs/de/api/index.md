---
title: API | Deutsch
description: REST- und CLI-Unterstützung in Pacs008.
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# API

Das Projekt bietet sowohl eine REST-API als auch eine CLI für operative Zahlungsnachrichten-Workflows.

## API-Fähigkeiten

- Gesundheits- und Bereitschaftsendpunkte
- Datenvalidierung vor der XML-Generierung
- Synchrone Generierung für direkte Abläufe
- Asynchrone Auftragsausführung für längere Pipelines
- Herunterladbare generierte Dateien über Auftragsabschlussflows

## CLI-Fähigkeiten

- Auf eine Quelldatei und Nachrichtenversion verweisen
- Gegen XSD validieren vor der Zustellung
- XML in pipeline-freundliche Ausgabeverzeichnisse generieren
- In CI-Aufträge, Batch-Zeitpläne und lokale Operator-Tools einpassen

## Implementierungsfokus

Pacs008 ist für den operativen Einsatz in Zahlungsverarbeitungsteams konzipiert:

- Vorab-Validierung vor der Nachrichtenerstellung
- Schema- und Versionsauswahl zur Laufzeit
- Asynchrone Generierungsabläufe für interne Dienste
- Deterministische Ausgaben für Tests und Audit-Trails

## Datenqualitätsanforderungen für 2026

Die Anforderungen an die Nachrichtenqualität verschärfen sich branchenweit, insbesondere bei:

- Identifizierung von Parteien und Agenten
- Bereitschaft strukturierter oder hybrider Adressen
- Reichhaltigere Überweisungs- und Referenzverarbeitung
- Transparenz über serielle Zahlungsketten hinweg

API und CLI sind so konzipiert, dass diese Prüfungen Teil des Arbeitsablaufs werden, anstatt ein manueller Überprüfungsschritt zu sein.

