---
title: pacs.028.001.05 — FI to FI Payment Status Request | Deutsch
description: Die Nachricht pacs.028 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung anzufragen. Sie ermöglicht die proaktive Verfolgung der Zahlungsverarbeitung, ohne auf einen unaufgeforderten Statusbericht zu warten.
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **ISO-Name** | FIToFIPaymentStatusRequestV05 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2019 |
| **Version** | 5 |

## Überblick

Die Nachricht pacs.028 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung anzufragen. Sie ermöglicht die proaktive Verfolgung der Zahlungsverarbeitung, ohne auf einen unaufgeforderten Statusbericht zu warten.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel
- **TxInf** — Transaktionsinformationen zur Identifizierung der abzufragenden Zahlung
- **OrgnlGrpInf** — Originalgruppendaten mit Bezug auf die Quellnachricht
- **OrgnlInstrId** — Originalanweisungskennung aus der Quellzahlung
- **OrgnlEndToEndId** — Originale End-to-End-Kennung für die Nachverfolgbarkeit

## Geschäftskontext

- Ermöglicht proaktive Statusabfragen für in Bearbeitung befindliche Zahlungsanweisungen
- Unterstützt Betriebsteams bei der Untersuchung verzögerter oder fehlender Zahlungen
- Ergänzt pacs.002, indem Statuskommunikation initiiert statt abgewartet wird
- Wird in Ausnahmebehandlungs- und SLA-Überwachungs-Workflows eingesetzt

## CBPR+- und Schema-Kontext

- Ersetzt MT199-Statusabfragemuster und manuelle SWIFT-Nachrichtenabfragen
- CBPR+ unterstützt strukturierte Statusanfragen, die mit Originalnachrichtenkennungen verknüpft sind
- UETR-basiertes Tracking über gpi reduziert die Notwendigkeit manueller Abfragen
- Zunehmend in automatisierte Zahlungsoperations-Dashboards integriert

## Nachrichtenfluss

Der beauftragende Agent sendet pacs.028 an den beauftragten Agent, um den Status einer bestimmten Zahlung abzufragen. Der beauftragte Agent antwortet mit einem pacs.002 mit dem aktuellen Verarbeitungsstatus.

## Verwandte Nachrichten

- [`pacs.002.001.12`](/de/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.008.001.13`](/de/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/de/pacs.009.001.10/) — Financial Institution Credit Transfer

