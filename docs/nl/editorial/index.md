---
title: "Redactiebeleid | pacs008"
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule.
lang: nl-NL
lastUpdated: true
image: /logo.webp
---

# Redactiebeleid

This page explains how content on pacs008.com is created, reviewed, and kept current.

## Sources

All message documentation is based on primary sources:

- [ISO 20022-berichtdefinitiecatalogus](https://www.iso20022.org/iso-20022-message-definitions) voor berichtspecificaties en versiegeschiedenis.
- [SWIFT CBPR+-gebruiksrichtlijnen](https://www.swift.com/standards/iso-20022) voor de context van grensoverschrijdende betalingen.
- [EPC SEPA-overboekingsregelboek](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) voor de regels inzake overboekingen in euro.
- [EPC SEPA-directe-overboekingsregelboek](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) voor de regels inzake directe betalingen.

## Proces voor inhoudsbeoordeling

Elke pagina op pacs008.com doorloopt een gestructureerde beoordeling vóór publicatie. Nieuwe inhoud begint als concept op basis van primaire bronnen. Het concept wordt gecontroleerd op technische juistheid aan de hand van de ISO 20022-berichtcatalogus en de relevante schemadocumentatie. Versienummers, registratie-identificatoren en velddefinities worden geverifieerd tegen de officiële catalogusvermeldingen.

Na de eerste beoordeling ondergaat de inhoud een structurele controle om consistentie met bestaande pagina's te waarborgen. Navigatie, kruisverwijzingen en terminologie zijn gestandaardiseerd over de gehele site. De beoordelingsdatum op elke berichtpagina geeft de meest recente verificatie tegen de primaire bronnen weer.

## Review process

Each message page shows a review date. Reviews check that version numbers, registration status, and scheme context still match the primary sources listed above.

Content is updated when ISO 20022 publishes new catalogue versions, when SWIFT releases updated usage guidelines, or when scheme rules change.

## Technische juistheid

Technische inhoud volgt de ISO 20022-berichtdefinities zoals gepubliceerd in de officiële catalogus. Veldnamen, gegevenstypen en kardinaliteitsregels komen overeen met de XSD-schema's van elke berichtversie. Wanneer schemaspecifiek gebruik afwijkt van de basisstandaard, wordt de betreffende schemadocumentatie rechtstreeks geciteerd.

Codevoorbeelden in de API-documentatie worden getest tegen de huidige versie van de pacs008-toolkit. CLI-commando's, API-endpoints en Python-bibliotheekmethoden weerspiegelen het op PyPI gepubliceerde pakket. Voorbeelden worden bij elke nieuwe versie bijgewerkt om gesynchroniseerd te blijven met de toolkit.

## Vertaalmethodologie

pacs008.com is beschikbaar in 22 talen. Alle inhoud wordt in het Engels opgesteld. Vertaalde pagina's worden gegenereerd uit het beoordeelde Engelstalige bronmateriaal met behulp van een buildscript dat paginastructuur, koppenstructuur en linkbestemmingen in alle taalversies behoudt.

Technische termen, ISO-identificatoren en standaardcodes worden niet vertaald om dubbelzinnigheid te voorkomen. Termen als pacs.008.001.13, BIC, IBAN en CBPR+ verschijnen in elke taal in hun standaardvorm. Niet-technische inhoud wordt vertaald zodat deze natuurlijk leest in de doeltaal. Vertalingen worden gecontroleerd op structurele consistentie en opnieuw gegenereerd wanneer het Engelstalige bronmateriaal wijzigt.

## Updatefrequentie

Inhoud wordt bijgewerkt naar aanleiding van drie triggers. Ten eerste wanneer ISO 20022 een nieuwe catalogusversie publiceert die van invloed is op de definities van pacs-berichten. Ten tweede wanneer SWIFT bijgewerkte CBPR+-gebruiksrichtlijnen of migratietermijnen uitbrengt. Ten derde wanneer het EPC de SEPA-overboekings- of directe-overboekingsregelboeken actualiseert.

De pacs008-toolkit volgt semantisch versiebeheer. Elke nieuwe versie wordt weerspiegeld in de API-documentatie en het wijzigingslogboek. De site wordt bij elke inhouds- of toolkitupdate opnieuw gebouwd en uitgerold.

## Content generation

Page structure and translated content are generated from reviewed English source material using a build script. This ensures structural consistency across all 22 languages while keeping technical terms and ISO identifiers in their standard form.

## Accuracy and limits

pacs008.com aims to be accurate and current, but it is not a substitute for scheme rulebooks, counterparty agreements, or legal advice. Always confirm implementation details against the primary sources and the specific rules of the market or scheme you operate in.

## Contact

If you find an error or have a correction, please open an issue in the [pacs008 repository](https://github.com/sebastienrousseau/pacs008/issues).
