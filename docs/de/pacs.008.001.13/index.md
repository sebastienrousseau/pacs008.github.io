---
title: pacs.008.001.13 — FI to FI Customer Credit Transfer | Deutsch
description: Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu überweisen. Sie enthält Informationen zu Schuldner, Gläubiger, Betrag und Überweisungszweck für eine oder mehrere Überweisungen.
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **ISO-Name** | FIToFICustomerCreditTransferV13 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2023 |
| **Version** | 13 |

## Überblick

Die Nachricht pacs.008 ist die zentrale Zahlungsanweisung, die zwischen Finanzinstituten ausgetauscht wird, um Gelder im Auftrag eines Kunden zu überweisen. Sie enthält Informationen zu Schuldner, Gläubiger, Betrag und Überweisungszweck für eine oder mehrere Überweisungen.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichten-ID, Erstellungsdatum, Transaktionsanzahl und Abwicklungsinformationen
- **CdtTrfTxInf** — Überweisungstransaktionsinformationen mit Betrag, Gebühren und Zweck
- **Dbtr / DbtrAgt** — Identifikation und Kontodaten von Schuldner und Schuldneragent
- **Cdtr / CdtrAgt** — Identifikation und Kontodaten von Gläubiger und Gläubigeragent
- **RmtInf** — Überweisungsinformationen für strukturierte oder unstrukturierte Zahlungsreferenzen

## Geschäftskontext

- Die primäre Nachricht für kundeninitiierte grenzüberschreitende und inländische Überweisungen
- Wird in SEPA SCT, SEPA Instant, CBPR+ und nationalen Clearingsystemen verwendet
- Trägt strukturierte Überweisungsinformationen für automatische Abstimmung
- Unterstützt serielle, Deckungs- und Direktabwicklungsmethoden für mehrstufige Zahlungsketten

## CBPR+- und Schema-Kontext

- Ersetzt MT103 und MT103+ für grenzüberschreitende Kundenüberweisungen
- Die Frist für strukturierte Adressen im November 2026 gilt für alle Postanschriften der Parteien
- SWIFT gpi erfordert pacs.008 für UETR-basiertes End-to-End-Tracking
- 13 Revisionen spiegeln die fortlaufende Schema-Evolution über Marktinfrastrukturen wider

## Nachrichtenfluss

Der Schuldneragent erstellt einen pacs.008 und sendet ihn an den Gläubigeragent (direkt oder über Vermittler). Jeder Agent in der Kette validiert, ergänzt und leitet die Anweisung weiter, bis der Gläubigeragent das Konto des Begünstigten gutschreibt.

## Unterstützte Versionen

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Verwandte Nachrichten

- [`pacs.002.001.12`](/de/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.004.001.11`](/de/pacs.004.001.11/) — Payment Return
- [`pacs.009.001.10`](/de/pacs.009.001.10/) — Financial Institution Credit Transfer

