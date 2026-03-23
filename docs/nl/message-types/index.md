---
title: Berichttypen | pacs008 ISO 20022
description: Ondersteunde ISO 20022 pacs-berichtdefinities en versies. Generatie, validatie, API-orchestratie en compliance-ondersteuning voor...
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# Berichttypen

pacs008 dekt de kern pacs.008-berichtdefinitie en gerelateerde berichten die worden gebruikt in orkestratie- en afstemmingsstromen.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026 met openbare ISO 20022-, EPC- en Swift-materialen waarnaar op deze pagina wordt verwezen.

## Inbegrepen ondersteuning

| Berichttype | Beschrijving | Versie | Jaar | Overzicht |
|---|---|---|---|---|
| [`pacs.002.001.12`](/nl/pacs.002.001.12/) | FI-naar-FI-betalingsstatusrapport | `pacs.002.001.12` | 2019 | Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht. |
| [`pacs.003.001.09`](/nl/pacs.003.001.09/) | FI-naar-FI-klantincasso | `pacs.003.001.09` | 2019 | Het pacs.003-bericht wordt uitgewisseld tussen financiële instellingen om een incasso-instructie van de klant uit te voeren. Het stelt de bank van de crediteur in staat om namens de crediteur gelden te innen bij de bank van de debiteur. |
| [`pacs.004.001.11`](/nl/pacs.004.001.11/) | Betalingsretour | `pacs.004.001.11` | 2019 | Het pacs.004-bericht wordt gebruikt om een eerder afgewikkelde betalingstransactie te retourneren. Het keert de geldstroom om wanneer een betaling niet kan worden toegepast, per abuis is verzonden of door de opdrachtgevende instelling wordt teruggevorderd. |
| [`pacs.007.001.11`](/nl/pacs.007.001.11/) | FI-naar-FI-betalingsstornering | `pacs.007.001.11` | 2019 | Het pacs.007-bericht wordt gebruikt om een eerder verzonden betalingsinstructie die nog niet is afgewikkeld te storneren of om stornering van een afgewikkelde betaling te verzoeken. In tegenstelling tot pacs.004 (retourzending) wordt het geïnitieerd door de oorspronkelijke opdrachtgevende agent. |
| [`pacs.008.001.13`](/nl/pacs.008.001.13/) | FI-naar-FI-klantkredietoverboeking | `pacs.008.001.13` | 2023 | Het pacs.008-bericht is de kernbetalingsinstructie die wordt uitgewisseld tussen financiële instellingen om namens een klant gelden over te maken. Het bevat informatie over debiteur, crediteur, bedrag en betalingskenmerken voor een of meer overboekingstransacties. |
| [`pacs.009.001.10`](/nl/pacs.009.001.10/) | Kredietoverboeking tussen financiële instellingen | `pacs.009.001.10` | 2019 | Het pacs.009-bericht wordt gebruikt voor overboekingen tussen financiële instellingen waarbij de overboeking voor eigen rekening van de instelling plaatsvindt en niet namens een klant. Het ondersteunt interbancaire financiering, dekkingsbetalingen en liquiditeitsbeheer. |
| [`pacs.010.001.05`](/nl/pacs.010.001.05/) | Incasso tussen financiële instellingen | `pacs.010.001.05` | 2019 | Het pacs.010-bericht wordt tussen financiële instellingen gebruikt voor incassotransacties op eigen rekening van de instelling. Het stelt de ene instelling in staat om gelden rechtstreeks van de rekening van een andere instelling te innen. |
| [`pacs.028.001.05`](/nl/pacs.028.001.05/) | FI-naar-FI-aanvraag betalingsstatus | `pacs.028.001.05` | 2019 | Het pacs.028-bericht wordt door een financiële instelling verzonden om de status op te vragen van een eerder verzonden betalingsinstructie. Het maakt proactieve tracking van betalingsverwerking mogelijk zonder te wachten op een ongevraagd statusrapport. |

## Leveringsmodel

Elk ondersteund berichttype wordt ondersteund door sjablonen en validatielogica zodat teams het genereren en regressietesten over meerdere kanalen kunnen standaardiseren.

## Het juiste bericht kiezen

De berichtcatalogus is vooral belangrijk wanneer teams moeten bepalen welk bericht het proces start, welk bericht de status rapporteert en welk bericht de stroom corrigeert of terugdraait.

Zie de [keuzegids](/nl/message-selection/) voor een compacte beslisweergave over de ondersteunde pacs-stromen.


## Marktcontext 2026

- **SEPA SCT / SCT Inst**: pacs.008 blijft centraal voor overschrijvingsuitwisseling en instantbetalingsverwerking.
- **CBPR+**: pacs.008 blijft MT103-stijl grensoverschrijdende payloads vervangen door rijkere gestructureerde gegevens.
- **Gestructureerde adressen**: huidige marktrichtlijnen wijzen op de omschakeling in november 2026 weg van volledig ongestructureerde postadressen.
- **Seriële methode en STP**: multi-leg bank-naar-bank-ketens blijven belangrijk, en straight-through-varianten blijven essentieel voor operationele efficiëntie.

## Operationele mogelijkheden

pacs008 biedt sjabloongestuurde generatie en validatie over ondersteunde berichtdefinitie-revisies:

- versies vergelijken
- regressietests uitvoeren op schema-updates
- uitgaande betalingsberichtgegevens versterken vóór release
- product-, operatie- en migratieteams ondersteunen vanuit één codebase

