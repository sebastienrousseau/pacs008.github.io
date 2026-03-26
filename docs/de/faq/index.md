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

ISO 20022 ist ein internationaler Standard für Finanznachrichten. Er definiert eine gemeinsame Sprache und ein gemeinsames Modell für Zahlungsnachrichten, die zwischen Finanzinstituten ausgetauscht werden. Im Gegensatz zu älteren Formaten wie SWIFT MT verwendet ISO 20022 XML und unterstützt reichhaltigere, besser strukturierte Daten für Parteien, Beträge und Referenzen.

### Was sind pacs-Nachrichten?

Die pacs-Nachrichtenfamilie (payments clearing and settlement) umfasst Interbanken-Zahlungsanweisungen, Statusberichte, Rückgaben, Stornierungen und Anfragen. Sie beinhaltet pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 und pacs.028. Jede Nachricht erfüllt eine bestimmte Funktion im Zahlungslebenszyklus.

### Wie unterscheiden sich pacs-Nachrichten von SWIFT-MT-Nachrichten?

SWIFT-MT-Nachrichten verwenden ein flaches Feld-Tag-Format (z. B. MT103 für Kundenüberweisungen). Pacs-Nachrichten verwenden hierarchisches XML mit reichhaltigeren Datenstrukturen. Wesentliche Unterschiede umfassen die Unterstützung mehrerer Transaktionen pro Nachricht, strukturierte Parteiidentifikation (LEI, mehrere IDs), strukturierte Postanschriften und strukturierte Überweisungsinformationen. MT103 entspricht pacs.008, MT202 entspricht pacs.009 und der MT199-Statustext wird durch pacs.002 ersetzt.

### Welche Beziehung besteht zwischen pain- und pacs-Nachrichten?

Pain-Nachrichten (payment initiation) werden zwischen dem Kunden und seiner Bank übermittelt. Pacs-Nachrichten werden zwischen Banken übermittelt. Ein pain.001 zur Überweisungsinitiierung von der Bank des Schuldners wird zu einer pacs.008-Interbankenanweisung. Beide Domänen teilen gemeinsame Datenelemente, bedienen aber unterschiedliche Teile der Zahlungskette.

## Nachrichtenauswahl

### Wann sollte ich pacs.008 verwenden?

Verwenden Sie pacs.008 für Kundenüberweisungsanweisungen zwischen Banken. Es enthält Daten der Schuldner- und Gläubigerparteien, Beträge, Überweisungsinformationen und Abwicklungsdetails. Es ist die Hauptnachricht für den Versand von Kundenzahlungen über das Interbankennetzwerk, sowohl im Inland (SEPA) als auch grenzüberschreitend (CBPR+).

### Wann sollte ich pacs.009 statt pacs.008 verwenden?

Verwenden Sie pacs.009 für Eigenkontoüberweisungen zwischen Instituten, Finanzierungstranchen und Deckungszahlungen. Im Gegensatz zu pacs.008, das eine Kundenzahlung im Auftrag eines Schuldners transportiert, bewegt pacs.009 Mittel zwischen Banken auf eigene Rechnung. In Deckungsflüssen übernimmt pacs.009 die Finanzierung, während pacs.008 die Kundenanweisung auf einem separaten Weg transportiert.

### Was ist der Unterschied zwischen pacs.004 und pacs.007?

pacs.004 gibt abgewickelte Gelder von der Empfängerseite durch die Kette zurück. pacs.007 storniert eine Zahlung von der ursprünglichen Anweisungsseite vorwärts durch die Kette. Verwenden Sie pacs.004, wenn die Begünstigtenbank den Kredit nach der Abwicklung nicht verbuchen kann. Verwenden Sie pacs.007, wenn der Auftraggeber einen Fehler, eine Dopplung oder einen Betrug entdeckt.

### Wann sollte ich pacs.028 verwenden, anstatt auf pacs.002 zu warten?

Verwenden Sie pacs.028, wenn Sie den Status einer Zahlung aktiv anfragen müssen, die keine rechtzeitige pacs.002-Aktualisierung erhalten hat. pacs.002 ist ereignisgesteuert (der empfangende Agent sendet es proaktiv), während pacs.028 ausnahmegesteuert ist (der anweisende Agent fordert es an). Verwenden Sie pacs.028 für verzögerte, unklare oder fehlende Zahlungsaktualisierungen, nicht als Routineverkehr.

### Wofür wird pacs.003 verwendet?

pacs.003 transportiert Kundenlastschriftanweisungen zwischen Banken. Der Agent des Gläubigers sendet es an den Agenten des Schuldners, um Gelder einzuziehen. Es erfordert eine gültige Mandatsreferenz und unterstützt die SEPA-Core- und B2B-Lastschriftverfahren. Es wird nicht für Überweisungen oder institutseigene Lastschriften verwendet.

### Wofür wird pacs.010 verwendet?

pacs.010 behandelt Lastschriften zwischen Finanzinstituten auf deren eigenen Konten. Es wird für Bank-zu-Bank-Einzüge wie Gebühren, Margin Calls und ähnliche Verpflichtungen im Rahmen bilateraler Vereinbarungen verwendet. Es wird nicht für Kundenlastschriften oder Überweisungen verwendet.

## Nachrichtenstruktur

### Was ist der Group Header (GrpHdr)?

Der Group Header erscheint genau einmal pro pacs-Nachricht. Er enthält die Nachrichtenkennung (MsgId), den Erstellungszeitstempel (CreDtTm), die Anzahl der Transaktionen (NbOfTxs), die Abwicklungsinformationen (SttlmInf) und optional den Gesamtbetrag der Interbankenabwicklung sowie Informationen zum Zahlungstyp. Er identifiziert den Nachrichtenumschlag, nicht die einzelnen Geschäftstransaktionen.

### Welche Zahlungsidentifikatoren gibt es in pacs.008?

pacs.008 verwendet vier Hauptidentifikatoren. MsgId identifiziert den Nachrichtenumschlag und ändert sich bei jedem Hop. InstrId ist eine Punkt-zu-Punkt-Referenz zwischen benachbarten Agenten und kann sich pro Hop ändern. EndToEndId wird vom Auftraggeber gesetzt und darf von keinem Agenten in der Kette geändert werden. TxId wird vom ersten anweisenden Agenten vergeben und bleibt im Interbankenraum konstant. UETR ist eine UUID, die über alle Abschnitte hinweg für die End-to-End-Verfolgung unverändert bleibt.

### Welche Abwicklungsmethoden sind verfügbar?

Vier Abwicklungsmethoden sind definiert. CLRG wickelt über ein Clearingsystem wie TARGET2, EURO1 oder CHIPS ab. INDA wickelt in den Büchern des beauftragten Agenten ab, bei dem der Schuldneragent ein Konto führt. INGA wickelt in den Büchern des anweisenden Agenten ab, bei dem der beauftragte Agent ein Konto führt. COVE wickelt über eine separate Deckungszahlung ab, die von pacs.009 getragen wird.

### Was bedeuten die Gebührenträgercodes?

DEBT bedeutet, dass alle Gebühren vom Schuldner getragen werden (MT103-Äquivalent OUR). CRED bedeutet, dass alle Gebühren vom Gläubiger getragen werden (Äquivalent BEN). SHAR bedeutet, dass die Gebühren zwischen Schuldner- und Gläubigeragenten aufgeteilt werden (Äquivalent SHA). SLEV bedeutet, dass die Gebühren den Servicelevel-Regeln folgen und ist für SEPA-Überweisungen obligatorisch.

## CBPR+ und Migration

### Was ist CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) ist das Programm von SWIFT zur Einführung von ISO 20022 im grenzüberschreitenden Zahlungsverkehr. Es ging im März 2023 in Betrieb und ersetzt MT-Nachrichten durch pacs-Äquivalente. CBPR+ schreibt pacs.002 für die gesamte Statuskommunikation vor, unterstützt reichhaltigere Parteidaten und strukturierte Adressen und verwendet UETR-basiertes Tracking über gpi.

### Was geschah mit der MT/MX-Koexistenzperiode?

Die Koexistenzperiode für grenzüberschreitende Zahlungsanweisungen endete im November 2025. Seitdem müssen CBPR+-Nachrichten das ISO 20022 (MX)-Format verwenden. Übersetzungsdienste, die während der Übergangszeit zwischen MT und MX konvertierten, sind für neue Flüsse nicht mehr verfügbar. Banken müssen jetzt native pacs-Nachrichten senden und empfangen.

### Was ist die Frist für strukturierte Adressen im November 2026?

Ab November 2026 verlangt SWIFT CBPR+ strukturierte Postanschriften in grenzüberschreitenden Zahlungsnachrichten. Unstrukturierte Adresszeilen (nur AdrLine) werden für wichtige Parteifelder nicht mehr akzeptiert. Mindestens TwnNm und Ctry sind erforderlich, wobei StrtNm und BldgNb oder PstBx empfohlen werden. Dies verbessert das Sanktionsscreening und reduziert manuelle Nachbesserungen.

### Wie ersetzt pacs.008 MT103?

pacs.008 ersetzt MT103 und MT103+ für Kundenüberweisungen. Wichtige Zuordnung: MT103-Feld 20 entspricht MsgId oder InstrId; Feld 32A teilt sich in IntrBkSttlmDt und IntrBkSttlmAmt; Feld 50a entspricht Dbtr und DbtrAcct; Feld 59a entspricht Cdtr und CdtrAcct; Feld 70 entspricht RmtInf; Feld 71A entspricht ChrgBr. pacs.008 fügt UETR, strukturierte Überweisungsinformationen, LEI-Identifikation hinzu und unterstützt mehrere Transaktionen pro Nachricht.

### Wie ersetzt pacs.009 MT202?

pacs.009 ersetzt MT202 und MT202COV für Institutsüberweisungen. In Deckungsflüssen wird der MT202COV (der sowohl die Finanzierung als auch die zugrunde liegenden Kundendaten trug) sauber aufgeteilt: pacs.009 trägt die Finanzierungstranche, während pacs.008 die Kundenanweisung direkt transportiert. Diese Trennung verbessert die Datenqualität und reduziert Abstimmungsprobleme.

## Technische Details

### Was sind strukturierte und unstrukturierte Adressen?

Strukturierte Adressen verwenden separate XML-Elemente für jede Komponente: StrtNm (Straße), BldgNb (Hausnummer), PstCd (Postleitzahl), TwnNm (Stadt), Ctry (Land) und optionale Elemente wie Flr, Room und DstrctNm. Unstrukturierte Adressen verwenden bis zu sieben AdrLine-Elemente mit Freitext. Hybride Adressen kombinieren beide während der Übergangszeit. Nach November 2026 verlangt CBPR+ das strukturierte Format.

### Was ist UETR und wie funktioniert das gpi-Tracking?

UETR (Unique End-to-End Transaction Reference) ist eine UUID v4-Kennung, die vom Schuldneragenten generiert und unverändert über alle Abschnitte einer Zahlung transportiert wird. Sie erscheint in pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 und pacs.028. SWIFT gpi verwendet die UETR, um Zahlungen über eine cloudbasierte Tracker-Datenbank zu verfolgen. Jeder Agent bestätigt den Empfang und die Verarbeitung, was eine End-to-End-Transparenz und SLA-Überwachung ermöglicht.

### Was sind häufige Statuscodes in pacs.002?

ACCP bedeutet akzeptiert nach Kundenprofilprüfungen. ACSP bedeutet akzeptiert und die Abwicklung ist in Bearbeitung. ACSC bedeutet, dass die Abwicklung auf dem Schuldnerkonto abgeschlossen ist. RJCT bedeutet abgelehnt (mit einem Grundcode in StsRsnInf). PDNG bedeutet ausstehend, weitere Bearbeitung erforderlich. RCVD bedeutet empfangen, aber noch nicht bearbeitet. Jeder Status kann einen strukturierten Grundcode enthalten, wie AC01 (falsche Kontonummer), AM04 (unzureichende Deckung) oder RC01 (falscher BIC).

### Was sind häufige Rückgabegrundcodes in pacs.004?

Häufige Rückgabegrundcodes umfassen AC01 (falsche Kontonummer), AC04 (geschlossenes Konto), AC06 (gesperrtes Konto), AM04 (unzureichende Deckung), BE04 (fehlende Gläubigeradresse), CUST (vom Kunden angefordert), DUPL (doppelte Zahlung), FOCR (nach Stornierungsanfrage) und FR01 (Betrug). Die vollständige Liste ist in den External Code Sets von ISO 20022 definiert.

### Was sind strukturierte Überweisungsinformationen?

Strukturierte Überweisungsinformationen in pacs.008 verwenden das Element RmtInf/Strd, um Dokumentreferenzen (Rechnungsnummern, Gutschriften), Beträge (fällig, überwiesen, Steuer, Rabatt) und Gläubigerreferenzen (ISO 11649 RF-Referenzen) zu transportieren. Dies ermöglicht eine automatisierte Rechnungszuordnung und Abstimmung. Häufige Dokumenttypcodes sind CINV (Handelsrechnung), CREN (Gutschrift) und SOAC (Kontoauszug).

### Was ist LEI und wann wird es verwendet?

LEI (Legal Entity Identifier) ist ein 20-stelliger alphanumerischer Code gemäß ISO 17442. Er identifiziert Rechtsträger, die an Finanztransaktionen teilnehmen, eindeutig. In pacs-Nachrichten erscheint LEI in OrgId/LEI für Parteien und FinInstnId/LEI für Agenten. CBPR+ fördert zunehmend die Verwendung von LEI für die Identifikation von Parteien und Agenten. Es verbessert die Entitätsunterscheidung und unterstützt regulatorische Meldepflichten.

## Über das Toolkit pacs008

### Was macht pacs008?

pacs008 ist ein Python-Toolkit, das ISO 20022-Zahlungsnachrichten generiert, validiert und versendet. Es liest Zahlungsdaten aus CSV-, JSON-, JSONL-, SQLite- und Parquet-Quellen, validiert gegen JSON Schema und XSD, prüft IBAN- und BIC-Kennungen, bereinigt Daten für SWIFT-Zeichenkonformität und gibt XML-Dateien aus. Es bietet eine REST-API, ein CLI und eine Python-Bibliothek.

### Welche Nachrichtentypen unterstützt pacs008?

pacs008 unterstützt acht Nachrichtentypen: pacs.002.001.12 (Statusbericht), pacs.003.001.09 (Kundenlastschrift), pacs.004.001.11 (Zahlungsrückgabe), pacs.007.001.11 (Zahlungsstornierung), pacs.008.001.13 (Kundenüberweisung), pacs.009.001.10 (Institutsüberweisung), pacs.010.001.05 (Institutslastschrift) und pacs.028.001.05 (Zahlungsstatusanfrage).

### Wie hilft pacs008 bei der Frist für strukturierte Adressen im November 2026?

pacs008 validiert strukturierte und hybride Postanschriftfelder vor der XML-Generierung. Es kennzeichnet unstrukturierte Adressdaten, die nach der Frist im November 2026 fehlschlagen würden, unterstützt sowohl hybride Formate vor der Frist als auch rein strukturierte Formate nach der Frist und integriert Adressqualitätsprüfungen in CI-Pipelines und Batch-Validierungs-Workflows.

### Kann pacs008 Daten validieren, ohne XML zu generieren?

Ja. Verwenden Sie das CLI-Flag `--dry-run` oder den API-Endpunkt `POST /validate`, um Zahlungsdaten ohne XML-Generierung zu validieren. Die Validierungspipeline prüft JSON-Schema-Konformität, IBAN-Format und Prüfsumme, BIC-Struktur und SWIFT-Zeichenkonformität. Der Exit-Code oder die API-Antwort zeigt an, ob die Validierung bestanden oder fehlgeschlagen ist.

## Referenzen

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

