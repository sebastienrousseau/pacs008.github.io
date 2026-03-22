---
title: pacs.009.001.10 — Financial Institution Credit Transfer | Deutsch
description: Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement.
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **ISO-Name** | FinancialInstitutionCreditTransferV10 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2019 |
| **Version** | 10 |

## Überblick

Die Nachricht pacs.009 wird für Überweisungen zwischen Finanzinstituten verwendet, bei denen die Überweisung auf eigene Rechnung des Instituts erfolgt. Sie unterstützt Interbankenfinanzierung, Deckungszahlungen und Liquiditätsmanagement.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Abwicklungsinformationen
- **CdtTrfTxInf** — Überweisungstransaktionsinformationen mit Interbanken-Abwicklungsbetrag
- **Dbtr / DbtrAgt** — Schuldnerinstitut und Agentenidentifikation
- **Cdtr / CdtrAgt** — Gläubigerinstitut und Agentenidentifikation
- **IntrBkSttlmAmt** — Interbanken-Abwicklungsbetrag in der Abwicklungswährung

## Geschäftskontext

- Wird für eigene Kontoüberweisungen zwischen Banken und Deckungszahlungen verwendet
- Unterstützt Liquiditätsmanagement zwischen Korrespondenzbankpartnern
- Trägt das Deckungsbein von Kundenüberweisungen, die über die Deckungsmethode abgewickelt werden
- Ermöglicht Treasury- und Finanzierungsoperationen zwischen Finanzinstituten

## CBPR+- und Schema-Kontext

- Ersetzt MT202 und MT202COV für Überweisungen zwischen Instituten
- Deckungsmethoden-Abläufe koppeln pacs.009 mit der zugrunde liegenden pacs.008-Kundenanweisung
- Strukturierte Parteidaten und LEI-Identifikation werden zunehmend gefordert
- SWIFT gpi deckt pacs.009 für Korrespondenzbankentransparenz ab

## Nachrichtenfluss

Das Schuldnerinstitut sendet pacs.009 an das Gläubigerinstitut, um eigene Mittel zu überweisen. Bei Deckungsmethoden-Zahlungen stellt pacs.009 das Finanzierungsbein bereit, während pacs.008 die Kundenanweisung über einen separaten Pfad trägt.

## Verwandte Nachrichten

- [`pacs.008.001.13`](/de/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.002.001.12`](/de/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.010.001.05`](/de/pacs.010.001.05/) — Financial Institution Direct Debit

