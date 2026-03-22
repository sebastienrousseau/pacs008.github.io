---
title: pacs.004.001.11 — Payment Return | Deutsch
description: Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht angewendet werden kann, irrtümlich gesendet wurde oder vom Ursprungsinstitut zurückgerufen wird.
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **ISO-Name** | PaymentReturnV11 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2019 |
| **Version** | 11 |

## Überblick

Die Nachricht pacs.004 wird verwendet, um eine zuvor abgewickelte Zahlungstransaktion zurückzugeben. Sie kehrt den Geldfluss um, wenn eine Zahlung nicht angewendet werden kann, irrtümlich gesendet wurde oder vom Ursprungsinstitut zurückgerufen wird.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Erstellungszeitstempel
- **TxInf** — Transaktionsinformationen mit Rückgabebetrag und Parteien
- **OrgnlGrpInf** — Originalgruppendaten mit Verknüpfung zur Quellnachricht
- **RtrRsnInf** — Rückgabegrundinformationen mit strukturierten Grundcodes
- **OrgnlTxRef** — Originaltransaktionsreferenz für Zuordnung und Abstimmung

## Geschäftskontext

- Behandelt Rückgaben nach Abwicklung, wenn das Konto des Begünstigten nicht gutgeschrieben werden kann
- Unterstützt Rückrufszenarien, bei denen der Auftraggeber die Rückgabe der Mittel anfordert
- Trägt strukturierte Rückgabegrundcodes für regulatorische und operative Transparenz
- Gilt für Überweisungsrückgaben (pacs.008) und Lastschriftrückgaben (pacs.003)

## CBPR+- und Schema-Kontext

- Ersetzt MT103 RETURN und Deckungsmethoden-Rückgabenachrichten
- Rückgabegrundcodes sind unter ISO 20022 standardisiert und maschinenlesbar
- CBPR+ erfordert vollständige Originaltransaktionsreferenzdaten für die Zuordnung
- SWIFT gpi-Tracking erstreckt sich auf Rückgabetransaktionen für End-to-End-Sichtbarkeit

## Nachrichtenfluss

Der beauftragte Agent sendet pacs.004 durch die Zahlungskette zurück, um zuvor abgewickelte Gelder zurückzugeben. Jeder Agent in der Kette verarbeitet die Rückgabe und schreibt die entsprechenden Konten gut.

## Verwandte Nachrichten

- [`pacs.008.001.13`](/de/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.003.001.09`](/de/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.002.001.12`](/de/pacs.002.001.12/) — FI to FI Payment Status Report

