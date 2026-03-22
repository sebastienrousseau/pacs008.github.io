---
title: pacs.003.001.09 — FI to FI Customer Direct Debit | Deutsch
description: Die Nachricht pacs.003 wird zwischen Finanzinstituten ausgetauscht, um eine Kundenlastschrift auszuführen. Sie ermöglicht es der Bank des Gläubigers, Gelder von der Bank des Schuldners im Auftrag des Gläubigers einzuziehen.
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **ISO-Name** | FIToFICustomerDirectDebitV09 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2019 |
| **Version** | 9 |

## Überblick

Die Nachricht pacs.003 wird zwischen Finanzinstituten ausgetauscht, um eine Kundenlastschrift auszuführen. Sie ermöglicht es der Bank des Gläubigers, Gelder von der Bank des Schuldners im Auftrag des Gläubigers einzuziehen.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Abwicklungsinformationen
- **DrctDbtTxInf** — Lastschrifttransaktionsinformationen mit Betrag und Parteien
- **Cdtr** — Gläubigeridentifikation und Kontodaten
- **CdtrAgt** — Gläubigeragent (einziehendes Institut) Identifikation
- **DbtrAgt** — Schuldneragent (zahlendes Institut) Identifikation

## Geschäftskontext

- Unterstützt SEPA Core- und B2B-Lastschriftverfahren
- Wird für wiederkehrende Zahlungseinzüge wie Abonnements, Rechnungen und Kreditrückzahlungen verwendet
- Erfordert eine gültige Mandatsreferenz zwischen Schuldner und Gläubiger
- Ermöglicht den Sammeleinzug mehrerer Lastschriftanweisungen in einer Nachricht

## CBPR+- und Schema-Kontext

- Anforderungen an strukturierte Adressen und Parteienidentifikation gelten gleichermaßen für Lastschriften
- Mandatsbezogene Daten müssen ab November 2026 vollständig strukturiert sein
- Ersetzt MT104-artige Lastschriftformate im grenzüberschreitenden Verkehr
- Die Validierung der Gläubiger-Schema-Identifikation wird zunehmend durchgesetzt

## Nachrichtenfluss

Der Gläubigeragent initiiert pacs.003 gegenüber dem Schuldneragent zum Einzug von Geldern. Der Schuldneragent validiert das Mandat, prüft die Kontodeckung und wickelt die Transaktion ab oder gibt sie zurück.

## Verwandte Nachrichten

- [`pacs.004.001.11`](/de/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/de/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.002.001.12`](/de/pacs.002.001.12/) — FI to FI Payment Status Report

