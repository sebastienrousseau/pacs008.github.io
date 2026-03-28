---
title: "Deadline gestructureerd adres november 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: nl-NL
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "Huidige adresgegevenskwaliteit auditen over debiteur-, crediteur- en agentrecords."
  - name: "Step 2"
    text: "Bestaande ongestructureerde adresvelden toewijzen aan het gestructureerde formaat (straat, gebouw, postcode, plaats, land)."
  - name: "Step 3"
    text: "Adresvalidatie toevoegen aan de pre-generatiepipeline met pacs008."
  - name: "Step 4"
    text: "Testen met representatieve betalingsgegevens vóór de deadline."
---

# Deadline gestructureerd adres november 2026

SWIFT vereist gestructureerde postadressen in grensoverschrijdende betalingsberichten vanaf november 2026. Wat er verandert, welke berichten betrokken zijn en hoe pacs008 teams helpt zich voor te bereiden.

## Wat er verandert

SWIFT CBPR+ stapt over van ongestructureerde postadressen naar gestructureerde adresvelden in grensoverschrijdende betalingsberichten. Na de deadline van november 2026 moeten de adresvelden van de belangrijkste partijen het gestructureerde formaat gebruiken met afzonderlijke elementen voor straatnaam, huisnummer, postcode, plaats en land.

## Waarom het belangrijk is

- Ongestructureerde adressen verhogen het percentage handmatige reparaties en vertragen directe verwerking.
- Gestructureerde adressen verbeteren de nauwkeurigheid van sanctiescreening door partijnaam te scheiden van locatiegegevens.
- Regelgevende en schema-eisen schrijven steeds vaker gestructureerde gegevens voor ten behoeve van compliance en rapportage.
- Afwijzingspercentages van grensoverschrijdende betalingen stijgen wanneer de adreskwaliteit niet aan de verwachtingen van de tegenpartij voldoet.

## Welke berichten betrokken zijn

- **pacs.008** — postadressen van debiteur en crediteur in klantoverschrijvingen.
- **pacs.009** — instellingsadressen in kredietoverdrachten tussen financiële instellingen en dekkingsbetalingen.
- **pacs.004** — partij-adressen bij betalingsretourzendingen.
- **pacs.003** — adressen van crediteur en debiteur bij automatische incasso's van klanten.

## Hoe pacs008 helpt

- Valideert gestructureerde en hybride postadresvelden vóór XML-generatie.
- Markeert ongestructureerde adresgegevens die na de deadline zouden falen.
- Ondersteunt zowel hybride formaten vóór de deadline als uitsluitend gestructureerde formaten na de deadline.
- Integreert adresqualiteitscontroles in CI-pipelines en batchvalidatieworkflows.

## Tijdlijn

- **Maart 2023** — SWIFT CBPR+ gaat live met ISO 20022 voor grensoverschrijdende betalingen.
- **November 2025** — coëxistentieperiode voor MT- en MX-betalingsinstructies eindigt.
- **November 2026** — vereiste van gestructureerd postadres treedt in werking voor CBPR+-berichten.

## Wat nu te doen

- Huidige adresgegevenskwaliteit auditen over debiteur-, crediteur- en agentrecords.
- Bestaande ongestructureerde adresvelden toewijzen aan het gestructureerde formaat (straat, gebouw, postcode, plaats, land).
- Adresvalidatie toevoegen aan de pre-generatiepipeline met pacs008.
- Testen met representatieve betalingsgegevens vóór de deadline.

## Referenties

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

