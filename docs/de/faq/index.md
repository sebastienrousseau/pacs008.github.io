---
title: "Häufig gestellte Fragen | pacs008"
description: Häufige Fragen zu ISO 20022 pacs-Nachrichten, CBPR+-Migration, Nachrichtenauswahl, Implementierung und dem pacs008-Toolkit.
lang: de-DE
lastUpdated: true
image: /logo.webp
---

# Häufig gestellte Fragen

Diese Seite beantwortet häufige Fragen zu ISO 20022 pacs-Nachrichten, wie sie zusammenwirken und wie pacs008 Teams bei der Implementierung unterstützt.

## Allgemeines

### Was ist ISO 20022?

ISO 20022 ist der internationale Standard fuer Finanznachrichten. Er definiert eine gemeinsame Sprache und ein gemeinsames Modell fuer Zahlungsnachrichten, die zwischen Finanzinstituten ausgetauscht werden. Im Gegensatz zu aelteren Formaten wie SWIFT MT setzt ISO 20022 auf XML und unterstuetzt reichhaltigere, besser strukturierte Daten fuer Parteien, Betraege und Referenzen.

### Was sind pacs-Nachrichten?

Die pacs-Familie (payments clearing and settlement) umfasst saemtliche Interbanken-Zahlungsnachrichten:

- pacs.002 -- Statusbericht
- pacs.003 -- Kundenlastschrift
- pacs.004 -- Zahlungsrueckgabe
- pacs.007 -- Zahlungsstornierung
- pacs.008 -- Kundenueberweisung
- pacs.009 -- Institutsueberweisung
- pacs.010 -- Institutslastschrift
- pacs.028 -- Zahlungsstatusanfrage

Jede Nachricht erfuellt eine bestimmte Funktion im Zahlungslebenszyklus.

### Wie unterscheiden sich pacs-Nachrichten von SWIFT-MT-Nachrichten?

SWIFT-MT-Nachrichten verwenden ein flaches Feld-Tag-Format (z. B. MT103 fuer Kundenueberweisungen). Pacs-Nachrichten verwenden hierarchisches XML mit reichhaltigeren Datenstrukturen. Wesentliche Unterschiede:

- Unterstuetzung mehrerer Transaktionen pro Nachricht
- Strukturierte Parteiidentifikation (LEI, mehrere IDs)
- Strukturierte Postanschriften
- Strukturierte Ueberweisungsinformationen

Zuordnung: MT103 entspricht pacs.008, MT202 entspricht pacs.009, und der MT199-Statustext wird durch pacs.002 ersetzt.

### Welche Beziehung besteht zwischen pain- und pacs-Nachrichten?

Pain-Nachrichten (payment initiation) werden zwischen dem Kunden und seiner Bank uebermittelt. Pacs-Nachrichten werden zwischen Banken uebermittelt. Ein pain.001 zur Ueberweisungsinitiierung von der Bank des Schuldners wird zu einer pacs.008-Interbankenanweisung. Beide Domaenen teilen gemeinsame Datenelemente, bedienen aber unterschiedliche Teile der Zahlungskette.

## Nachrichtenauswahl

### Wann pacs.008 verwenden?

pacs.008 dient Kundenueberweisungsanweisungen zwischen Banken. Es transportiert:

- Daten der Schuldner- und Glaeubigerparteien
- Betraege und Waehrung
- Ueberweisungsinformationen
- Abwicklungsdetails

Es ist die Hauptnachricht fuer den Versand von Kundenzahlungen ueber das Interbankennetzwerk -- sowohl im Inland (SEPA) als auch grenzueberschreitend (CBPR+).

### Wann pacs.009 statt pacs.008 verwenden?

pacs.009 dient Eigenkontouebertragungen zwischen Instituten, Finanzierungstranchen und Deckungszahlungen. Im Gegensatz zu pacs.008, das eine Kundenzahlung im Auftrag eines Schuldners transportiert, bewegt pacs.009 Mittel zwischen Banken auf eigene Rechnung. In Deckungsfluessen uebernimmt pacs.009 die Finanzierung, waehrend pacs.008 die Kundenanweisung auf einem separaten Weg transportiert.

### Was ist der Unterschied zwischen pacs.004 und pacs.007?

- pacs.004 gibt abgewickelte Gelder von der Empfaengerseite durch die Kette zurueck.
- pacs.007 storniert eine Zahlung von der urspruenglichen Anweisungsseite vorwaerts durch die Kette.

pacs.004 verwenden, wenn die Beguenstigtenbank den Kredit nach der Abwicklung nicht verbuchen kann. pacs.007 verwenden, wenn der Auftraggeber einen Fehler, eine Dopplung oder Betrug entdeckt.

### Wann pacs.028 verwenden, anstatt auf pacs.002 zu warten?

pacs.028 dient der aktiven Statusanfrage fuer eine Zahlung, die keine rechtzeitige pacs.002-Aktualisierung erhalten hat. pacs.002 ist ereignisgesteuert (der empfangende Agent sendet es proaktiv), waehrend pacs.028 ausnahmegesteuert ist (der anweisende Agent fordert es an). pacs.028 verwenden fuer verzoegerte, unklare oder fehlende Zahlungsaktualisierungen -- nicht als Routineverkehr.

### Wofuer wird pacs.003 verwendet?

pacs.003 transportiert Kundenlastschriftanweisungen zwischen Banken. Der Agent des Glaeubigers sendet es an den Agenten des Schuldners, um Gelder einzuziehen. Merkmale:

- Gueltige Mandatsreferenz erforderlich
- Unterstuetzung der SEPA-Core- und B2B-Lastschriftverfahren
- Nicht fuer Ueberweisungen oder institutseigene Lastschriften verwendet

### Wofuer wird pacs.010 verwendet?

pacs.010 behandelt Lastschriften zwischen Finanzinstituten auf deren eigenen Konten. Einsatzbereiche:

- Bank-zu-Bank-Gebuehren
- Margin Calls
- Aehnliche Verpflichtungen im Rahmen bilateraler Vereinbarungen

Nicht fuer Kundenlastschriften oder Ueberweisungen verwendet.

## Nachrichtenstruktur

### Was ist der Group Header (GrpHdr)?

Der Group Header erscheint genau einmal pro pacs-Nachricht. Er enthaelt:

- MsgId -- Nachrichtenkennung
- CreDtTm -- Erstellungszeitstempel
- NbOfTxs -- Anzahl der Transaktionen
- SttlmInf -- Abwicklungsinformationen
- Gesamtbetrag der Interbankenabwicklung (optional)
- Informationen zum Zahlungstyp (optional)

Er identifiziert den Nachrichtenumschlag, nicht die einzelnen Geschaeftstransaktionen.

### Welche Zahlungsidentifikatoren gibt es in pacs.008?

pacs.008 verwendet fuenf Identifikatoren:

- MsgId -- identifiziert den Nachrichtenumschlag, aendert sich bei jedem Hop
- InstrId -- Punkt-zu-Punkt-Referenz zwischen benachbarten Agenten, kann sich pro Hop aendern
- EndToEndId -- vom Auftraggeber gesetzt, darf von keinem Agenten in der Kette geaendert werden
- TxId -- vom ersten anweisenden Agenten vergeben, bleibt im Interbankenraum konstant
- UETR -- UUID, die ueber alle Abschnitte hinweg fuer die End-to-End-Verfolgung unveraendert bleibt

### Welche Abwicklungsmethoden sind verfuegbar?

Vier Abwicklungsmethoden sind definiert:

- CLRG -- Abwicklung ueber ein Clearingsystem (TARGET2, EURO1, CHIPS)
- INDA -- Abwicklung in den Buechern des beauftragten Agenten, bei dem der Schuldneragent ein Konto fuehrt
- INGA -- Abwicklung in den Buechern des anweisenden Agenten, bei dem der beauftragte Agent ein Konto fuehrt
- COVE -- Abwicklung ueber eine separate Deckungszahlung, getragen von pacs.009

### Was bedeuten die Gebuehrentraegercodes?

Vier Codes definieren, wer die Gebuehren traegt:

- DEBT -- alle Gebuehren zulasten des Schuldners (MT103-Aequivalent OUR)
- CRED -- alle Gebuehren zulasten des Glaeubigers (Aequivalent BEN)
- SHAR -- Gebuehren aufgeteilt zwischen Schuldner- und Glaeubigeragenten (Aequivalent SHA)
- SLEV -- Gebuehren nach Servicelevel-Regeln, obligatorisch fuer SEPA-Ueberweisungen

## CBPR+ und Migration

### Was ist CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) ist das Programm von SWIFT zur Einfuehrung von ISO 20022 im grenzueberschreitenden Zahlungsverkehr. Seit Maerz 2023 in Betrieb, ersetzt es MT-Nachrichten durch pacs-Aequivalente. Wesentliche Punkte:

- pacs.002 obligatorisch fuer die gesamte Statuskommunikation
- Reichhaltigere Parteidaten und strukturierte Adressen
- UETR-basiertes Tracking ueber gpi

### Was geschah mit der MT/MX-Koexistenzperiode?

Die Koexistenzperiode fuer grenzueberschreitende Zahlungsanweisungen endete im November 2025. Seitdem:

- CBPR+-Nachrichten muessen das ISO 20022 (MX)-Format verwenden
- Uebersetzungsdienste MT/MX sind fuer neue Fluesse nicht mehr verfuegbar
- Banken muessen native pacs-Nachrichten senden und empfangen

### Was ist die Frist fuer strukturierte Adressen im November 2026?

Ab November 2026 verlangt SWIFT CBPR+ strukturierte Postanschriften in grenzueberschreitenden Zahlungsnachrichten. Unstrukturierte Adresszeilen (nur AdrLine) werden fuer wichtige Parteifelder nicht mehr akzeptiert. Mindestanforderungen:

- TwnNm und Ctry obligatorisch
- StrtNm und BldgNb oder PstBx empfohlen

Dies verbessert das Sanktionsscreening und reduziert manuelle Nachbesserungen.

### Wie ersetzt pacs.008 MT103?

pacs.008 ersetzt MT103 und MT103+ fuer Kundenueberweisungen. Wichtige Zuordnung:

- Feld 20 → MsgId oder InstrId
- Feld 32A → IntrBkSttlmDt und IntrBkSttlmAmt
- Feld 50a → Dbtr und DbtrAcct
- Feld 59a → Cdtr und CdtrAcct
- Feld 70 → RmtInf
- Feld 71A → ChrgBr

pacs.008 fuegt UETR, strukturierte Ueberweisungsinformationen, LEI-Identifikation hinzu und unterstuetzt mehrere Transaktionen pro Nachricht.

### Wie ersetzt pacs.009 MT202?

pacs.009 ersetzt MT202 und MT202COV fuer Institutsueberweisungen. In Deckungsfluessen wird der MT202COV (der sowohl die Finanzierung als auch die zugrunde liegenden Kundendaten trug) sauber aufgeteilt:

- pacs.009 traegt die Finanzierungstranche
- pacs.008 transportiert die Kundenanweisung direkt

Diese Trennung verbessert die Datenqualitaet und reduziert Abstimmungsprobleme.

## Technische Details

### Was sind strukturierte und unstrukturierte Adressen?

Strukturierte Adressen verwenden separate XML-Elemente fuer jede Komponente:

- StrtNm -- Strasse
- BldgNb -- Hausnummer
- PstCd -- Postleitzahl
- TwnNm -- Stadt
- Ctry -- Land
- Optionale Elemente: Flr, Room, DstrctNm

Unstrukturierte Adressen verwenden bis zu sieben AdrLine-Elemente mit Freitext. Hybride Adressen kombinieren beide waehrend der Uebergangszeit. Nach November 2026 verlangt CBPR+ das strukturierte Format.

### Was ist UETR und wie funktioniert das gpi-Tracking?

UETR (Unique End-to-End Transaction Reference) ist eine UUID v4-Kennung, die vom Schuldneragenten generiert und unveraendert ueber alle Abschnitte einer Zahlung transportiert wird. Sie erscheint in:

- pacs.008, pacs.009, pacs.002
- pacs.004, pacs.007, pacs.028

SWIFT gpi verwendet die UETR, um Zahlungen ueber eine cloudbasierte Tracker-Datenbank zu verfolgen. Jeder Agent bestaetigt den Empfang und die Verarbeitung, was End-to-End-Transparenz und SLA-Ueberwachung ermoeglicht.

### Was sind haeufige Statuscodes in pacs.002?

Wichtigste Statuscodes:

- ACCP -- akzeptiert nach Kundenprofilpruefungen
- ACSP -- akzeptiert, Abwicklung in Bearbeitung
- ACSC -- Abwicklung auf dem Schuldnerkonto abgeschlossen
- RJCT -- abgelehnt (mit einem Grundcode in StsRsnInf)
- PDNG -- ausstehend, weitere Bearbeitung erforderlich
- RCVD -- empfangen, aber noch nicht bearbeitet

Jeder Status kann einen strukturierten Grundcode enthalten, wie AC01 (falsche Kontonummer), AM04 (unzureichende Deckung) oder RC01 (falscher BIC).

### Was sind haeufige Rueckgabegrundcodes in pacs.004?

Haeufige Rueckgabegrundcodes:

- AC01 -- falsche Kontonummer
- AC04 -- geschlossenes Konto
- AC06 -- gesperrtes Konto
- AM04 -- unzureichende Deckung
- BE04 -- fehlende Glaeubigeradresse
- CUST -- vom Kunden angefordert
- DUPL -- doppelte Zahlung
- FOCR -- nach Stornierungsanfrage
- FR01 -- Betrug

Die vollstaendige Liste ist in den External Code Sets von ISO 20022 definiert.

### Was sind strukturierte Ueberweisungsinformationen?

Strukturierte Ueberweisungsinformationen in pacs.008 verwenden das Element RmtInf/Strd fuer:

- Dokumentreferenzen (Rechnungsnummern, Gutschriften)
- Betraege (faellig, ueberwiesen, Steuer, Rabatt)
- Glaeubigerreferenzen (ISO 11649 RF-Referenzen)

Dies ermoeglicht automatisierte Rechnungszuordnung und Abstimmung. Haeufige Dokumenttypcodes:

- CINV -- Handelsrechnung
- CREN -- Gutschrift
- SOAC -- Kontoauszug

### Was ist LEI und wann wird es verwendet?

LEI (Legal Entity Identifier) ist ein 20-stelliger alphanumerischer Code gemaess ISO 17442. Er identifiziert Rechtstraeger, die an Finanztransaktionen teilnehmen, eindeutig. In pacs-Nachrichten:

- OrgId/LEI -- Identifikation der Parteien
- FinInstnId/LEI -- Identifikation der Agenten

CBPR+ foerdert zunehmend die Verwendung von LEI fuer die Identifikation von Parteien und Agenten. Es verbessert die Entitaetsunterscheidung und unterstuetzt regulatorische Meldepflichten.

## Ueber das Toolkit pacs008

### Was macht pacs008?

pacs008 ist ein Python-Toolkit, das ISO 20022-Zahlungsnachrichten generiert, validiert und versendet. Funktionen:

- Einlesen von Zahlungsdaten aus CSV-, JSON-, JSONL-, SQLite- und Parquet-Quellen
- Validierung gegen JSON Schema und XSD
- Pruefung von IBAN- und BIC-Kennungen
- Datenbereinigung fuer SWIFT-Zeichenkonformitaet
- Ausgabe von XML-Dateien

Drei Schnittstellen: REST-API, CLI und Python-Bibliothek.

### Welche Nachrichtentypen unterstuetzt pacs008?

pacs008 unterstuetzt acht Nachrichtentypen:

- pacs.002.001.12 -- Statusbericht
- pacs.003.001.09 -- Kundenlastschrift
- pacs.004.001.11 -- Zahlungsrueckgabe
- pacs.007.001.11 -- Zahlungsstornierung
- pacs.008.001.13 -- Kundenueberweisung
- pacs.009.001.10 -- Institutsueberweisung
- pacs.010.001.05 -- Institutslastschrift
- pacs.028.001.05 -- Zahlungsstatusanfrage

### Wie hilft pacs008 bei der Frist fuer strukturierte Adressen im November 2026?

pacs008 validiert strukturierte und hybride Postanschriftfelder vor der XML-Generierung:

- Kennzeichnung unstrukturierter Adressdaten, die nach der Frist im November 2026 fehlschlagen wuerden
- Unterstuetzung sowohl hybrider Formate vor der Frist als auch rein strukturierter Formate nach der Frist
- Integration von Adressqualitaetspruefungen in CI-Pipelines und Batch-Validierungs-Workflows

### Kann pacs008 Daten validieren, ohne XML zu generieren?

Ja. Das CLI-Flag `--dry-run` oder den API-Endpunkt `POST /validate` verwenden, um Zahlungsdaten ohne XML-Generierung zu validieren. Die Validierungspipeline prueft:

- JSON-Schema-Konformitaet
- IBAN-Format und Pruefsumme
- BIC-Struktur
- SWIFT-Zeichenkonformitaet

Der Exit-Code oder die API-Antwort zeigt an, ob die Validierung bestanden oder fehlgeschlagen ist.

## Referenzen

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

