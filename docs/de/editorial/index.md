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

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions) for message specifications and version history.
- [SWIFT CBPR+ usage guidelines](https://www.swift.com/standards/iso-20022) for cross-border payment context.
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) for euro credit transfer rules.
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) for instant payment rules.

## Prüfverfahren

Jede Nachrichtenseite zeigt ein Prüfdatum. Prüfungen stellen sicher, dass Versionsnummern, Registrierungsstatus und Schemakontexte noch mit den zitierten Primärquellen übereinstimmen.

## Inhaltsgenerierung

Seitenstruktur und übersetzte Inhalte werden aus geprüftem englischem Quellmaterial mittels eines Build-Skripts generiert. Dies gewährleistet strukturelle Konsistenz über alle 22 Sprachen hinweg, wobei technische Begriffe und ISO-Kennungen in ihrer Standardform erhalten bleiben.

## Genauigkeit und Grenzen

pacs008.com strebt Genauigkeit und Aktualität an, ist aber kein Ersatz für Schema-Regelwerke, Gegenparteivereinbarungen oder Rechtsberatung. Bestätigen Sie Implementierungsdetails immer anhand der Primärquellen und der spezifischen Regeln des Marktes oder Schemas, in dem Sie tätig sind.

## Kontakt

Wenn Sie einen Fehler finden oder eine Korrektur haben, öffnen Sie bitte ein Issue im [pacs008-Repository](https://github.com/sebastienrousseau/pacs008/issues).
