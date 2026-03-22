---
title: pacs.002.001.12 — FI to FI Payment Status Report | Deutsch
description: Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht.
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **ISO-Name** | FIToFIPaymentStatusReportV12 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2019 |
| **Version** | 12 |

## Überblick

Die Nachricht pacs.002 wird von einem Finanzinstitut gesendet, um den Status einer zuvor gesendeten Zahlungsanweisung zu melden. Sie liefert Bestätigungs-, Ablehnungs- oder Statusinformationen für einzelne Transaktionen innerhalb einer Zahlungsnachricht.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel
- **OrgnlGrpInfAndSts** — Originalgruppendaten und Status für Massenberichterstattung
- **TxInfAndSts** — Transaktionsinformationen und Status für einzelne Transaktionsergebnisse
- **StsRsnInf** — Statusgrundinformationen mit strukturierten Grundcodes
- **OrgnlTxRef** — Originaltransaktionsreferenz mit Verknüpfung zur Quellanweisung

## Geschäftskontext

- Wird zur Bestätigung der Abwicklung oder Meldung der Ablehnung von Überweisungen, Lastschriften und Rückzahlungen verwendet
- Ermöglicht die Abstimmung zwischen beauftragenden und beauftragten Agenten
- In CBPR+-Abläufen zur Bestätigung der Verarbeitung von pacs.008- und pacs.009-Nachrichten erforderlich
- Unterstützt sowohl Gruppenebene als auch individuelle Transaktionsstatusberichte

## CBPR+- und Schema-Kontext

- Ersetzt MT199- und Feld-79-Statusnarrative in MT-Nachrichten
- CBPR+ schreibt pacs.002 für alle Zahlungsstatuskommunikation vor
- Strukturierte Grundcodes ersetzen Freitextablehnungserklärungen
- Die SWIFT gpi-Tracking-Integration erfordert pacs.002 für End-to-End-Transparenz

## Nachrichtenfluss

Der beauftragte Agent (Empfänger) sendet pacs.002 an den beauftragenden Agent (Sender) zurück, um Annahme, Abwicklung oder Ablehnung einer empfangenen Zahlungsanweisung wie pacs.008 oder pacs.009 zu bestätigen.

## Verwandte Nachrichten

- [`pacs.008.001.13`](/de/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/de/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.028.001.05`](/de/pacs.028.001.05/) — FI to FI Payment Status Request

