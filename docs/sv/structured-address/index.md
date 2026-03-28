---
title: "Tidsfrist för strukturerade adresser november 2026 | pacs008"
description: Hur SWIFT CBPR+ tidsfrist för strukturerade postadresser i november 2026 påverkar pacs.008 och relaterade betalningsmeddelanden, och hur pacs008 hjälper...
lang: sv-SE
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "Granska nuvarande adressdatakvalitet i gäldenärs-, borgenärs- och agentposter."
  - name: "Step 2"
    text: "Mappa befintliga ostrukturerade adressfält till det strukturerade formatet (gata, byggnad, postnummer, stad, land)."
  - name: "Step 3"
    text: "Lägg till adressvalidering i förgenereringspipelinen med pacs008."
  - name: "Step 4"
    text: "Testa med representativa betalningsdata före tidsfristen."
---

# Tidsfrist för strukturerade adresser november 2026

SWIFT kräver strukturerade postadresser i gränsöverskridande betalningsmeddelanden från november 2026. Vad som ändras, vilka meddelanden som påverkas och hur pacs008 hjälper team att förbereda sig.

## Vad som ändras

SWIFT CBPR+ övergår från ostrukturerade postadresser till strukturerade adressfält i gränsöverskridande betalningsmeddelanden. Efter tidsfristen i november 2026 måste adressfälten för viktiga parter använda det strukturerade formatet med separata element för gatunamn, byggnadsnummer, postnummer, stad och land.

## Varför det är viktigt

- Ostrukturerade adresser ökar andelen manuella reparationer och försenar direkt genomströmning.
- Strukturerade adresser förbättrar noggrannheten i sanktionsgranskning genom att separera partnamn från platsdata.
- Regulatoriska krav och schemakrav kräver i allt större utsträckning strukturerade data för efterlevnad och rapportering.
- Avvisningsfrekvensen för gränsöverskridande betalningar ökar när adresskvaliteten inte uppfyller motpartens förväntningar.

## Vilka meddelanden som påverkas

- **pacs.008** — postadresser för gäldenär och borgenär i kundkreditöverföringar.
- **pacs.009** — institutionsadresser i kreditöverföringar mellan finansinstitut och täckningsbetalningar.
- **pacs.004** — partadresser i betalningsreturer.
- **pacs.003** — borgenärs- och gäldenärsadresser i kundautogiro.

## Hur pacs008 hjälper

- Validerar strukturerade och hybridpostadressfält före XML-generering.
- Flaggar ostrukturerade adressdata som skulle misslyckas efter tidsfristen.
- Stöder både hybridformat före tidsfristen och enbart strukturerade format efter tidsfristen.
- Integrerar adresskvalitetskontroller i CI-pipelines och batchvalideringsarbetsflöden.

## Tidslinje

- **Mars 2023** — SWIFT CBPR+ driftsätts med ISO 20022 för gränsöverskridande betalningar.
- **November 2025** — samexistensperioden för MT- och MX-betalningsinstruktioner upphör.
- **November 2026** — kravet på strukturerad postadress träder i kraft för CBPR+-meddelanden.

## Vad man ska göra nu

- Granska nuvarande adressdatakvalitet i gäldenärs-, borgenärs- och agentposter.
- Mappa befintliga ostrukturerade adressfält till det strukturerade formatet (gata, byggnad, postnummer, stad, land).
- Lägg till adressvalidering i förgenereringspipelinen med pacs008.
- Testa med representativa betalningsdata före tidsfristen.

## Referenser

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

