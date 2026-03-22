---
title: pacs.010.001.05 — Financial Institution Direct Debit | Deutsch
description: Die Nachricht pacs.010 wird zwischen Finanzinstituten für Lastschrifttransaktionen auf eigene Rechnung verwendet. Sie ermöglicht es einem Institut, Gelder direkt vom Konto eines anderen Instituts einzuziehen.
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **ISO-Name** | FinancialInstitutionDirectDebitV05 |
| **Registrierungsstatus** | Registered |
| **Jahr** | 2019 |
| **Version** | 5 |

## Überblick

Die Nachricht pacs.010 wird zwischen Finanzinstituten für Lastschrifttransaktionen auf eigene Rechnung verwendet. Sie ermöglicht es einem Institut, Gelder direkt vom Konto eines anderen Instituts einzuziehen.

## Wichtige Datenelemente

- **GrpHdr** — Gruppenkopf mit Nachrichtenidentifikation und Abwicklungsinformationen
- **DrctDbtTxInf** — Lastschrifttransaktionsinformationen mit Einzugsbetrag
- **Cdtr / CdtrAgt** — Gläubigerinstitut und Agentenidentifikation
- **Dbtr / DbtrAgt** — Schuldnerinstitut und Agentenidentifikation
- **IntrBkSttlmAmt** — Interbanken-Abwicklungsbetrag in der Abwicklungswährung

## Geschäftskontext

- Unterstützt Interbanken-Lastschrifteinzug zwischen Finanzinstituten
- Wird für Gebühreneinzug, Margin Calls und institutionelle Abwicklungsverpflichtungen verwendet
- Erfordert vorab vereinbarte bilaterale Vereinbarungen zwischen teilnehmenden Instituten
- Entscheidend für institutionelles Cash Management und Interbanken-Abwicklungszyklen

## CBPR+- und Schema-Kontext

- Ersetzt Elemente von MT204 für die Verarbeitung von Interbanken-Lastschriften
- Die strukturierte Parteienidentifikation folgt denselben Anforderungen wie andere pacs-Nachrichten
- Die Validierung institutioneller Kennungen (BIC, LEI) ist obligatorisch
- In vollständigen ISO 20022-Einführungsplänen über Marktinfrastrukturen enthalten

## Nachrichtenfluss

Das Gläubigerinstitut sendet pacs.010 an das Schuldnerinstitut, um Gelder im Rahmen einer vorab vereinbarten Regelung einzuziehen. Das Schuldnerinstitut validiert die Anforderung und wickelt die Lastschrift ab oder lehnt sie ab.

## Verwandte Nachrichten

- [`pacs.009.001.10`](/de/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.002.001.12`](/de/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/de/pacs.003.001.09/) — FI to FI Customer Direct Debit

