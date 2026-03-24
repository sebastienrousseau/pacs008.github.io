---
title: "Frist für strukturierte Adressen November 2026 | pacs008"
description: Auswirkungen der SWIFT CBPR+ Frist im November 2026 für strukturierte Postanschriften auf pacs.008 und verwandte Zahlungsnachrichten, und wie pacs008...
lang: de-DE
lastUpdated: true
image: /logo.svg
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "Aktuelle Adressdatenqualität für Schuldner-, Gläubiger- und Agentendatensätze prüfen."
  - name: "Step 2"
    text: "Bestehende unstrukturierte Adressfelder dem strukturierten Format zuordnen (Straße, Gebäude, PLZ, Ort, Land)."
  - name: "Step 3"
    text: "Adressvalidierung mit pacs008 in die Pre-Generation-Pipeline einbauen."
  - name: "Step 4"
    text: "Mit repräsentativen Zahlungsdaten vor der Frist testen."
---

# Frist für strukturierte Adressen November 2026

SWIFT verlangt ab November 2026 strukturierte Postanschriften in grenzüberschreitenden Zahlungsnachrichten. Diese Seite erklärt, was sich ändert, welche Nachrichten betroffen sind und wie pacs008 Teams bei der Vorbereitung hilft.

## Was sich ändert

SWIFT CBPR+ wechselt von unstrukturierten Postanschriften zu strukturierten Adressfeldern in grenzüberschreitenden Zahlungsnachrichten. Nach der Frist im November 2026 müssen die Adressfelder der Parteien das strukturierte Format mit separaten Elementen für Straßenname, Hausnummer, Postleitzahl, Ort und Land verwenden.

## Warum es wichtig ist

- Unstrukturierte Adressen erhöhen die manuellen Reparaturraten und verzögern die automatische Verarbeitung.
- Strukturierte Adressen verbessern die Genauigkeit der Sanktionsprüfung durch Trennung von Parteiname und Standortdaten.
- Regulatorische und schemaspezifische Anforderungen verlangen zunehmend strukturierte Daten für Compliance und Berichtswesen.
- Ablehnungsraten bei grenzüberschreitenden Zahlungen steigen, wenn die Adressqualität nicht den Erwartungen der Gegenpartei entspricht.

## Welche Nachrichten betroffen sind

- **pacs.008** — Postanschriften von Schuldner und Gläubiger bei Kundenkredittransfers.
- **pacs.009** — Institutionsadressen bei Finanzinstitutstransfers und Deckungszahlungen.
- **pacs.004** — Parteiadressen bei Zahlungsrückgaben.
- **pacs.003** — Adressen von Gläubiger und Schuldner bei Kundenlastschriften.

## Wie pacs008 hilft

- Validiert strukturierte und hybride Postadressfelder vor der XML-Generierung.
- Kennzeichnet unstrukturierte Adressdaten, die nach der Frist fehlschlagen würden.
- Unterstützt sowohl Hybridformate vor der Frist als auch rein strukturierte Formate nach der Frist.
- Integriert Adressqualitätsprüfungen in CI-Pipelines und Batch-Validierungs-Workflows.

## Zeitplan

- **März 2023** — SWIFT CBPR+ geht mit ISO 20022 für grenzüberschreitende Zahlungen live.
- **November 2025** — Koexistenzperiode für MT- und MX-Zahlungsanweisungen endet.
- **November 2026** — Anforderung strukturierter Postanschriften tritt für CBPR+-Nachrichten in Kraft.

## Was jetzt zu tun ist

- Aktuelle Adressdatenqualität für Schuldner-, Gläubiger- und Agentendatensätze prüfen.
- Bestehende unstrukturierte Adressfelder dem strukturierten Format zuordnen (Straße, Gebäude, PLZ, Ort, Land).
- Adressvalidierung mit pacs008 in die Pre-Generation-Pipeline einbauen.
- Mit repräsentativen Zahlungsdaten vor der Frist testen.

## Referenzen

- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

