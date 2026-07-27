---
title: "Redaktionelle Richtlinie | pacs008"
description: Wie Inhalte auf pacs008.com erstellt, geprüft und gepflegt werden. Quellen, Prüfverfahren und Aktualisierungsplan.
lang: de-DE
lastUpdated: true
image: /logo.webp
---

# Redaktionelle Richtlinie

Diese Seite erklärt, wie Inhalte auf pacs008.com erstellt, geprüft und aktuell gehalten werden.

## Quellen

Alle Nachrichtendokumentation basiert auf Primärquellen:

- [ISO 20022-Nachrichtendefinitionskatalog](https://www.iso20022.org/iso-20022-message-definitions) für Nachrichtenspezifikationen und Versionshistorie.
- [SWIFT CBPR+-Nutzungsrichtlinien](https://www.swift.com/standards/iso-20022) für den Kontext grenzüberschreitender Zahlungen.
- [EPC SEPA-Überweisungsregelwerk](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) für Euro-Überweisungsregeln.
- [EPC SEPA-Sofortüberweisungsregelwerk](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) für Sofortzahlungsregeln.

## Verfahren zur Inhaltsprüfung

Jede Seite auf pacs008.com durchläuft vor der Veröffentlichung eine strukturierte Prüfung. Neue Inhalte beginnen als Entwurf auf Basis der Primärquellen. Der Entwurf wird anhand des ISO 20022-Nachrichtenkatalogs und der relevanten Schemadokumentation auf technische Richtigkeit geprüft. Versionsnummern, Registrierungskennungen und Felddefinitionen werden gegen die offiziellen Katalogeinträge verifiziert.

Nach der Erstprüfung folgt eine Strukturprüfung, um die Konsistenz mit bestehenden Seiten sicherzustellen. Navigation, Querverweise und Terminologie sind standortweit vereinheitlicht. Das auf jeder Nachrichtenseite angezeigte Prüfdatum gibt die jüngste Verifizierung gegen die Primärquellen wieder.

## Prüfverfahren

Jede Nachrichtenseite zeigt ein Prüfdatum. Prüfungen stellen sicher, dass Versionsnummern, Registrierungsstatus und Schemakontexte noch mit den zitierten Primärquellen übereinstimmen.

## Technische Richtigkeit

Technische Inhalte folgen den ISO 20022-Nachrichtendefinitionen, wie sie im offiziellen Katalog veröffentlicht sind. Feldnamen, Datentypen und Kardinalitätsregeln stimmen mit den XSD-Schemata der jeweiligen Nachrichtenversion überein. Wenn die schemaspezifische Nutzung vom Basisstandard abweicht, wird die betreffende Schemadokumentation direkt zitiert.

Codebeispiele in der API-Dokumentation werden gegen die aktuelle Version des pacs008-Toolkits getestet. CLI-Befehle, API-Endpunkte und Python-Bibliotheksmethoden entsprechen dem auf PyPI veröffentlichten Paket. Beispiele werden mit jeder neuen Version aktualisiert, um mit dem Toolkit synchron zu bleiben.

## Übersetzungsmethodik

pacs008.com ist in 22 Sprachen verfügbar. Alle Inhalte werden in Englisch erstellt. Übersetzte Seiten werden aus dem geprüften englischen Quellmaterial mithilfe eines Build-Skripts erzeugt, das Seitenstruktur, Überschriftenhierarchie und Link-Ziele über alle Sprachversionen hinweg beibehält.

Fachbegriffe, ISO-Kennungen und Standardcodes bleiben unübersetzt, um Mehrdeutigkeit zu vermeiden. Begriffe wie pacs.008.001.13, BIC, IBAN und CBPR+ erscheinen in jeder Sprache in ihrer Standardform. Nicht-technische Inhalte werden so übersetzt, dass sie in der jeweiligen Zielsprache natürlich klingen. Übersetzungen werden auf strukturelle Konsistenz geprüft und bei Änderungen des englischen Quellmaterials neu erzeugt.

## Aktualisierungshäufigkeit

Inhalte werden aus drei Anlässen aktualisiert. Erstens, wenn ISO 20022 eine neue Katalogversion veröffentlicht, die pacs-Nachrichtendefinitionen betrifft. Zweitens, wenn SWIFT aktualisierte CBPR+-Nutzungsrichtlinien oder Migrationstermine herausgibt. Drittens, wenn der EPC die SEPA-Überweisungs- oder Sofortüberweisungsregelwerke aktualisiert.

Das pacs008-Toolkit folgt dem Prinzip der semantischen Versionierung. Jede neue Version wird in der API-Dokumentation und im Änderungsprotokoll abgebildet. Die Website wird bei jeder Inhalts- oder Toolkit-Aktualisierung neu gebaut und bereitgestellt.

## Inhaltsgenerierung

Seitenstruktur und übersetzte Inhalte werden aus geprüftem englischem Quellmaterial mittels eines Build-Skripts generiert. Dies gewährleistet strukturelle Konsistenz über alle 22 Sprachen hinweg, wobei technische Begriffe und ISO-Kennungen in ihrer Standardform erhalten bleiben.

## Genauigkeit und Grenzen

pacs008.com strebt Genauigkeit und Aktualität an, ist aber kein Ersatz für Schema-Regelwerke, Gegenparteivereinbarungen oder Rechtsberatung. Bestätigen Sie Implementierungsdetails immer anhand der Primärquellen und der spezifischen Regeln des Marktes oder Schemas, in dem Sie tätig sind.

## Kontakt

Wenn Sie einen Fehler finden oder eine Korrektur haben, öffnen Sie bitte ein Issue im [pacs008-Repository](https://github.com/sebastienrousseau/pacs008/issues).
