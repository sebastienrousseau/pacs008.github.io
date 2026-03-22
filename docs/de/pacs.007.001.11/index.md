---
title: pacs.007.001.11 — FI to FI Payment Reversal | Deutsch
description: Die Nachricht pacs.007 wird verwendet, um eine zuvor gesendete Zahlungsanweisung umzukehren, die noch nicht abgewickelt wurde, oder um die Umkehrung einer abgewickelten Zahlung zu beantragen. Im Gegensatz zu pacs.004 (Rückgabe) wird sie vom ursprünglichen beauftragenden Agenten initiiert.
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **ISO-Name** | FIToFIPaymentReversalV11 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2019 |
| **Version** | 11 |

## Überblick

Die Nachricht pacs.007 wird verwendet, um eine zuvor gesendete Zahlungsanweisung umzukehren, die noch nicht abgewickelt wurde, oder um die Umkehrung einer abgewickelten Zahlung zu beantragen. Im Gegensatz zu pacs.004 (Rückgabe) wird sie vom ursprünglichen beauftragenden Agenten initiiert.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel
- **TxInf** — Transaktionsinformationen mit Umkehrbetrag und Parteien
- **OrgnlGrpInf** — Originalgruppendaten mit Bezug auf die Quellnachricht
- **RvslRsnInf** — Umkehrgrundinformationen mit strukturierten Grundcodes
- **OrgnlTxRef** — Originaltransaktionsreferenz für End-to-End-Nachverfolgbarkeit

## Geschäftskontext

- Wird initiiert, wenn der ursprüngliche Sender einen Fehler vor oder nach der Abwicklung feststellt
- Wird in Betrugsfällen verwendet, bei denen eine schnelle Umkehrung erforderlich ist
- Unterstützt sowohl vollständige als auch teilweise Umkehrung von Originalzahlungsbeträgen
- Trägt strukturierte Umkehrgrundcodes für die nachgelagerte Verarbeitung

## CBPR+- und Schema-Kontext

- Unterscheidet sich von pacs.004 durch die Richtung — Umkehrung fließt vorwärts vom Auftraggeber, Rückgabe fließt rückwärts vom Begünstigten
- CBPR+ erfordert die Kopplung mit Originalnachrichtenkennungen für automatisierte Zuordnung
- Strukturierte Grundcodes ersetzen Freitextnarrative aus MT-Altnachrichten
- Zunehmend in Sofortzahlungs-Rückruf- und Betrugspräventions-Workflows eingesetzt

## Nachrichtenfluss

Der beauftragende Agent (ursprünglicher Sender) sendet pacs.007 durch die Zahlungskette, um eine zuvor beauftragte Zahlung umzukehren. Jeder Agent verarbeitet die Umkehranweisung und passt die Abwicklung entsprechend an.

## Verwandte Nachrichten

- [`pacs.008.001.13`](/de/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.004.001.11`](/de/pacs.004.001.11/) — Payment Return
- [`pacs.002.001.12`](/de/pacs.002.001.12/) — FI to FI Payment Status Report

