---
title: "ISO 20022 Glossar | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages.
lang: de-DE
lastUpdated: true
image: /logo.webp
---

# ISO 20022 Glossar

This glossary defines the key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Automatisierte Clearingstelle. Ein Netzwerk, das gebündelte elektronische Zahlungen zwischen Finanzinstituten verarbeitet.

**AdrLine** — Adresszeile. Ein Freitextfeld in den Postadressstrukturen von ISO 20022. Bis zu 7 Zeilen mit jeweils 70 Zeichen. Wird bis November 2026 durch strukturierte Adresselemente für CBPR+ ersetzt.

**ACCP** — Akzeptiertes Kundenprofil. Ein pacs.002-Statuscode, der anzeigt, dass vorherige Prüfungen (Syntax, Kundenprofil) bestanden wurden.

**ACSC** — Akzeptierte Abwicklung abgeschlossen. Ein pacs.002-Statuscode, der bestätigt, dass die Abwicklung auf dem Konto des Schuldners abgeschlossen wurde.

**ACSP** — Akzeptierte Abwicklung in Bearbeitung. Ein pacs.002-Statuscode, der anzeigt, dass alle Prüfungen bestanden wurden und die Abwicklung läuft.

## B

**BAH** — Geschäftsanwendungskopf (head.001). Ein standardisierter Umschlag, der ISO 20022-Geschäftsnachrichten für den Transport über SWIFT umhüllt. Enthält Routing-Informationen, Nachrichtendefinitionskennung und Sender/Empfänger-BICs.

**BIC** — Geschäftsidentifikationscode (ISO 9362). Ein 8- oder 11-stelliger Code, der ein Finanzinstitut eindeutig identifiziert. Format: BBBBCCLL (Bankcode + Land + Standort) mit optionalem BBB-Filialcode.

## C

**CBPR+** — Grenzüberschreitende Zahlungen und Berichterstattung Plus. Das SWIFT-Programm zur Migration der grenzüberschreitenden Zahlungsnachrichtenübermittlung von MT auf ISO 20022. Seit März 2023 in Betrieb.

**CdtTrfTxInf** — Überweisungstransaktionsinformationen. Der wichtigste Baustein auf Transaktionsebene in pacs.008 mit Zahlungsdetails, Parteien, Beträgen und Überweisungsinformationen.

**ChrgBr** — Gebührenträger. Legt fest, wer die Transaktionsgebühren zahlt. Werte: DEBT (Schuldner), CRED (Gläubiger), SHAR (geteilt), SLEV (Serviceniveau, nur SEPA).

**CLRG** — Clearingsystem-Abwicklung. Eine Abwicklungsmethode, bei der Gelder über ein Clearingsystem wie TARGET2, EURO1 oder CHIPS fließen.

**COVE** — Deckungsmethoden-Abwicklung. Eine Abwicklungsmethode, bei der eine separate pacs.009-Deckungszahlung die Finanzierung zwischen Korrespondenten abwickelt, während pacs.008 die Kundendaten direkt transportiert.

**CSM** — Clearing- und Abwicklungsmechanismus. Eine Infrastruktur, die Zahlungsanweisungen zwischen teilnehmenden Instituten verarbeitet und abwickelt.

## D

**Dbtr** — Schuldner. Die Partei, die Gelder schuldet und die Zahlung initiiert. In pacs.008 enthält das Dbtr-Element den Namen des Schuldners, die Postadresse, die Identifikation und das Wohnsitzland.

**DbtrAgt** — Schuldneragent. Das Finanzinstitut, das das Konto des Schuldners führt und die pacs.008-Anweisung sendet.

## E

**E2E ID** — Ende-zu-Ende-Identifikation (EndToEndId). Eine vom Auftraggeber zugewiesene Referenz, die über alle Agenten in der Zahlungskette unverändert bleiben muss. Wird für die Rückverfolgbarkeit auf Kundenebene verwendet.

**EPC** — Europäischer Zahlungsverkehrsrat. Das Gremium, das die SEPA-Zahlungsschema-Regelwerke für Überweisungen und Lastschriften verwaltet.

## F

**FI** — Finanzinstitut. Eine Bank oder ein anderes Institut, das an der Zahlungsverrechnung und -abwicklung teilnimmt.

**FIToFI** — Finanzinstitut zu Finanzinstitut. Beschreibt den Interbankbereich, in dem pacs-Nachrichten operieren.

## G

**gpi** — Globale Zahlungsinnovation. Die Initiative von SWIFT für schnellere, transparente grenzüberschreitende Zahlungen. Verwendet UETR für die Ende-zu-Ende-Verfolgung über einen cloudbasierten Tracker.

**GrpHdr** — Gruppenkopf. Der Metadatenblock auf Nachrichtenebene in pacs-Nachrichten. Enthält MsgId, CreDtTm, NbOfTxs, Abwicklungsinformationen und Zahlungstypinformationen.

## H

**Hybrid address** — Ein Postadressformat, das strukturierte Elemente (StrtNm, TwnNm, Ctry) mit unstrukturierten AdrLine-Elementen kombiniert. Während der Übergangsphase vor der Frist für strukturierte Adressen im November 2026 zulässig.

## I

**IBAN** — Internationale Bankkontonummer (ISO 13616). Ein standardisiertes Kontonummernformat für grenzüberschreitende und inländische Zahlungen. Validiert mittels ISO 7064 Mod 97-10 Prüfsumme.

**INDA** — Abwicklung durch den beauftragten Agenten. Eine Abwicklungsmethode, bei der Gelder in den Büchern des beauftragten Agenten abgewickelt werden, wo der Schuldneragent ein Nostro-Konto führt.

**INGA** — Abwicklung durch den beauftragenden Agenten. Eine Abwicklungsmethode, bei der Gelder in den Büchern des beauftragenden Agenten abgewickelt werden, wo der beauftragte Agent ein Nostro-Konto führt.

**InstrId** — Anweisungsidentifikation. Eine Punkt-zu-Punkt-Referenz zwischen benachbarten Agenten in der Zahlungskette. Kann sich bei jedem Sprung ändern.

**IntrBkSttlmAmt** — Interbankabwicklungsbetrag. Der Betrag, der zwischen dem beauftragenden und dem beauftragten Agenten in der Abwicklungswährung abgewickelt wird.

**ISO 20022** — Ein internationaler Standard für den elektronischen Datenaustausch zwischen Finanzinstituten. Definiert ein gemeinsames Datenmodell und XML-basierte Nachrichtenformate für Zahlungen, Wertpapiere, Handelsfinanzierung und andere Finanzbereiche.

## L

**LEI** — Kennung der juristischen Person (ISO 17442). Ein 20-stelliger alphanumerischer Code, der juristische Personen, die an Finanztransaktionen teilnehmen, eindeutig identifiziert. Verwendet in OrgId/LEI für Parteien und FinInstnId/LEI für Agenten.

## M

**MsgId** — Nachrichtenidentifikation. Eine eindeutige Kennung für den Nachrichtenumschlag, zugewiesen vom sendenden Agenten. Ändert sich bei jedem Sprung in der Zahlungskette.

**MT** — Nachrichtentyp. Das Legacy-Nachrichtenformat von SWIFT (z.B. MT103 für Kundenüberweisungen, MT202 für Transfers zwischen Finanzinstituten). Wird durch ISO 20022 MX-Nachrichten ersetzt.

**MX** — Das ISO 20022 XML-Nachrichtenformat, das von SWIFT verwendet wird. MX-Nachrichten ersetzen MT-Nachrichten für grenzüberschreitende Zahlungen unter CBPR+.

## N

**NbOfTxs** — Anzahl der Transaktionen. Ein Gruppenkopf-Element, das angibt, wie viele einzelne Transaktionen in der Nachricht enthalten sind.

## P

**pacs** — Zahlungsverrechnung und -abwicklung. Der ISO 20022-Geschäftsbereich für Interbank-Zahlungsnachrichten.

**pacs.002** — FI-zu-FI-Zahlungsstatusbericht. Meldet den Verarbeitungsstatus (akzeptiert, abgelehnt, ausstehend, abgewickelt) einer früheren Zahlungsanweisung.

**pacs.003** — FI-zu-FI-Kundenlastschrift. Transportiert eine Kundenlastschriftanweisung zwischen Banken zur Geldeinziehung.

**pacs.004** — Zahlungsrückgabe. Gibt abgewickelte Gelder durch die Zahlungskette zurück, wenn eine Zahlung nicht angewendet werden kann.

**pacs.007** — FI-zu-FI-Zahlungsstornierung. Storniert eine Zahlungsanweisung vom ursprünglichen Absender durch die Kette.

**pacs.008** — FI-zu-FI-Kundenüberweisung. Die primäre Interbank-Nachricht für Kundenüberweisungen. Ersetzt MT103.

**pacs.009** — Überweisung zwischen Finanzinstituten. Bewegt Gelder zwischen Banken auf eigene Rechnung. Umfasst Finanzierung, Deckungszahlungen und Liquiditätsmanagement. Ersetzt MT202/MT202COV.

**pacs.010** — Lastschrift zwischen Finanzinstituten. Ermöglicht einer Bank, das eigene Konto einer anderen Bank im Rahmen einer bilateralen Vereinbarung zu belasten.

**pacs.028** — FI-zu-FI-Zahlungsstatusanfrage. Fragt aktiv den Status einer früheren Zahlung ab, wenn keine pacs.002-Aktualisierung eingegangen ist.

**pain** — Zahlungsinitiierung. Der ISO 20022-Geschäftsbereich für Kunde-Bank-Nachrichten (z.B. pain.001 für die Überweisungsinitiierung).

**PII** — Personenbezogene Daten. Daten, die eine Person identifizieren können. pacs008 maskiert PII in strukturierten Protokollen.

**PstlAdr** — Postadresse. Die Adressstruktur für Parteien in pacs-Nachrichten. Unterstützt strukturierte (StrtNm, TwnNm, Ctry) und unstrukturierte (AdrLine) Formate.

## R

**RJCT** — Abgelehnt. Ein pacs.002-Statuscode, der anzeigt, dass die Zahlung abgelehnt wurde.

**RmtInf** — Überweisungsinformationen. Zahlungsreferenzdaten in pacs.008. Unterstützt unstrukturierte (Freitext, max. 140 Zeichen) und strukturierte (Dokumentreferenzen, Beträge, Gläubigerreferenzen) Formate.

**RTGS** — Bruttoechtzeit-Abwicklung. Ein Zahlungssystem, bei dem Transaktionen einzeln und in Echtzeit abgewickelt werden (z.B. TARGET2, Fedwire, CHAPS).

## S

**SCT** — SEPA-Überweisung. Das Euro-Überweisungsschema, das vom EPC verwaltet wird und pacs.008 verwendet.

**SCT Inst** — SEPA-Sofortüberweisung. Die Sofortzahlungsvariante des SCT, die in unter 10 Sekunden abgewickelt wird.

**SDD** — SEPA-Lastschrift. Das Euro-Lastschriftschema, das vom EPC verwaltet wird und pacs.003 verwendet.

**SEPA** — Einheitlicher Euro-Zahlungsverkehrsraum. Eine Zahlungsintegrationsinitiative für Euro-Überweisungen, Lastschriften und Kartenzahlungen in 36 europäischen Ländern.

**SLEV** — Serviceniveau. Ein Gebührenträgercode, der für SEPA obligatorisch ist. Bedeutet, dass Gebühren den Schemaregeln folgen, ohne Abzüge vom Überweisungsbetrag.

**STP** — Automatisierte Durchgangsverarbeitung. Automatische Ende-zu-Ende-Zahlungsverarbeitung ohne manuelle Eingriffe.

**SttlmMtd** — Abwicklungsmethode. Definiert, wie die Interbankabwicklung erfolgt: CLRG (Clearingsystem), INDA (beauftragter Agent), INGA (beauftragender Agent) oder COVE (Deckungszahlung).

## T

**TxId** — Transaktionsidentifikation. Eine Interbankreferenz, die vom ersten beauftragenden Agenten zugewiesen wird. Darf von nachfolgenden Agenten nicht geändert werden.

## U

**UETR** — Eindeutige Ende-zu-Ende-Transaktionsreferenz. Ein UUID-v4-Identifikator, der vom Schuldneragenten generiert und unverändert über alle Abschnitte einer Zahlung für die gpi-Verfolgung transportiert wird.

## X

**XSD** — XML-Schemadefinition. Das formale Schema, das die Struktur, Elemente und Datentypen einer ISO 20022 XML-Nachricht definiert.

**XXE** — Externe XML-Entität. Eine Sicherheitslücke bei der XML-Analyse. pacs008 verhindert XXE-Angriffe durch die Verwendung von defusedxml.

## Referenzen

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

