---
title: "Über pacs008 | pacs008"
description: Was pacs008 leistet und für wen es gedacht ist.
lang: de-DE
lastUpdated: true
image: /logo.svg
howtoName: "How to implement ISO 20022 pacs.008 payment messages"
howtoDescription: "Step-by-step checklist for rolling out ISO 20022 pacs.008 message generation and validation."
howto:
  - name: "Step 1"
    text: "Pick the right message family for the business event before writing templates."
  - name: "Step 2"
    text: "Validate business data before XML generation so that schema errors are not the first signal."
  - name: "Step 3"
    text: "Treat BIC, IBAN, remittance, and postal-address quality as a release criterion, not a later cleanup."
  - name: "Step 4"
    text: "Regression-test each scheme or bank rule change with representative payment data."
---

# Über pacs008

pacs008 ist ein Python-Toolkit zur Automatisierung von ISO 20022-Kundenzahlungsabläufen zwischen Finanzinstituten.

## Funktionen

- Erzeugt XML für `pacs.008` und verwandte pacs-Nachrichtendefinitionen
- Validiert Daten und XML gegen Schemata
- Stellt einen FastAPI-Dienst für automatisierte Abläufe bereit
- Bietet eine CLI für lokale Ausführung und CI-Pipelines
- Unterstützt strukturierte Datenquellen einschließlich CSV, JSON, JSONL, SQLite und Parquet
- Validiert IBAN- (75 Länder, ISO 7064-Prüfsumme) und BIC-Kennungen (ISO 9362)
- Bereinigt Zahlungsdaten für SWIFT-Konformität mit Transliteration und Feldlängenkontrolle
- Verarbeitet große Datensätze in konfigurierbaren Blöcken für speichereffiziente Verarbeitung
- Liefert ein Docker-Image für containerisierten API-Betrieb

## Zielgruppen

- Zahlungsverkehrsteams
- Plattform-Ingenieure, die interne Zahlungsverarbeitungsinfrastruktur aufbauen
- Migrationsprogramme in Richtung ISO 20022
- Compliance- und QA-Teams, die ausgehende Zahlungsnachrichten validieren

## Validierung

Mehrere Validierungsschichten greifen, bevor XML geschrieben wird:

- JSON-Schema-Validierung gegen 20 nachrichtenspezifische Schemata
- IBAN-Format- und Prüfsummenverifizierung für 75 Länder
- BIC-Struktur- und Ländercode-Validierung gemäß ISO 9362
- XSD-Validierung des erzeugten XML gegen die offiziellen ISO 20022-Schemata

## Sicherheit

pacs008 setzt auf Defence-in-Depth über jede Schicht der Verarbeitungspipeline:

- XXE-Prävention durch defusedxml für alle XML-Parsing-Operationen
- Schutz vor Pfadtraversierung mit strikter Verzeichnis-Allowlist
- PII-Maskierung in strukturierten JSON-Logs zur Unterstützung der DSGVO- und PCI DSS-Konformität
- SQL-Injection-Prävention mit strikter Tabellennamen-Sanitisierung für SQLite-Quellen

## Bereitschaft 2026

pacs008 ist auf die operativen Fristen und Datenqualitätsanforderungen ausgelegt, die 2026 relevant sind:

- Verarbeitung strukturierter und hybrider Postanschriften für CBPR+ und Schema-Migrationen
- Stärkere Validierung der Datenqualität von Schuldner, Gläubiger und Agent
- Versionsbewusste Generierung über alte und aktuelle pacs.008-Revisionen hinweg
- Automatisierungspfade, die zu CI, Batch-Operationen und internen Zahlungsdiensten passen

## Operativer Fokus

pacs008 geht über die Nachrichtendefinitions-Referenz hinaus und unterstützt die operative Implementierung:

- XML aus echten Quelldaten generieren
- Vor der Zustellung validieren
- Zahlungsketten und nachgelagerte Formate modellieren
- Schema-spezifische Änderungen im Code testbar machen

## Umsetzungscheckliste

- Vor dem Schreiben von Templates zuerst die richtige Nachrichtenfamilie für das Geschäftsevent auswählen.
- Geschäftsdaten vor der XML-Erzeugung validieren, damit Schemafehler nicht das erste Warnsignal sind.
- BIC-, IBAN-, Remittance- und Adressqualität als Release-Kriterium behandeln und nicht als spätere Bereinigung.
- Jede schemaspezifische oder bankspezifische Regeländerung mit repräsentativen Zahlungsdaten regressionsprüfen.

