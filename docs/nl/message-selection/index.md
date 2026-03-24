---
title: Handleiding berichtselectie | pacs008
description: Kies het juiste ISO 20022-pacs-bericht voor generatie, statusrapportage, retouren, terugboekingen en navragen.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# Handleiding berichtselectie

Kies de pacs-familie eerst op basis van de bedrijfsgebeurtenis en daarna op basis van schema en operationeel model.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026 met openbare ISO 20022-, EPC- en Swift-materialen waarnaar op deze pagina wordt verwezen.

## Snelle beslismatrix

| Berichttype | Beschrijving | Overzicht |
|---|---|---|
| [`pacs.002.001.12`](/nl/pacs.002.001.12/) | FI-naar-FI-betalingsstatusrapport | Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht. |
| [`pacs.003.001.09`](/nl/pacs.003.001.09/) | FI-naar-FI-klantincasso | Het pacs.003-bericht wordt uitgewisseld tussen financiële instellingen om een incasso-instructie van de klant uit te voeren. Het stelt de bank van de crediteur in staat om namens de crediteur gelden te innen bij de bank van de debiteur. |
| [`pacs.004.001.11`](/nl/pacs.004.001.11/) | Betalingsretour | Het pacs.004-bericht wordt gebruikt om een eerder afgewikkelde betalingstransactie te retourneren. Het keert de geldstroom om wanneer een betaling niet kan worden toegepast, per abuis is verzonden of door de opdrachtgevende instelling wordt teruggevorderd. |
| [`pacs.007.001.11`](/nl/pacs.007.001.11/) | FI-naar-FI-betalingsstornering | Het pacs.007-bericht wordt gebruikt om een eerder verzonden betalingsinstructie die nog niet is afgewikkeld te storneren of om stornering van een afgewikkelde betaling te verzoeken. In tegenstelling tot pacs.004 (retourzending) wordt het geïnitieerd door de oorspronkelijke opdrachtgevende agent. |
| [`pacs.008.001.13`](/nl/pacs.008.001.13/) | FI-naar-FI-klantkredietoverboeking | Het pacs.008-bericht is de kernbetalingsinstructie die wordt uitgewisseld tussen financiële instellingen om namens een klant gelden over te maken. Het bevat informatie over debiteur, crediteur, bedrag en betalingskenmerken voor een of meer overboekingstransacties. |
| [`pacs.009.001.10`](/nl/pacs.009.001.10/) | Kredietoverboeking tussen financiële instellingen | Het pacs.009-bericht wordt gebruikt voor overboekingen tussen financiële instellingen waarbij de overboeking voor eigen rekening van de instelling plaatsvindt en niet namens een klant. Het ondersteunt interbancaire financiering, dekkingsbetalingen en liquiditeitsbeheer. |
| [`pacs.010.001.05`](/nl/pacs.010.001.05/) | Incasso tussen financiële instellingen | Het pacs.010-bericht wordt tussen financiële instellingen gebruikt voor incassotransacties op eigen rekening van de instelling. Het stelt de ene instelling in staat om gelden rechtstreeks van de rekening van een andere instelling te innen. |
| [`pacs.028.001.05`](/nl/pacs.028.001.05/) | FI-naar-FI-aanvraag betalingsstatus | Het pacs.028-bericht wordt door een financiële instelling verzonden om de status op te vragen van een eerder verzonden betalingsinstructie. Het maakt proactieve tracking van betalingsverwerking mogelijk zonder te wachten op een ongevraagd statusrapport. |

## Veelvoorkomende vergelijkingspunten

| Vergelijk | Belangrijk onderscheid |
|---|---|
| `pacs.008` vs `pacs.009` | Klantbetaling versus institutionele of dekkingsbeweging |
| `pacs.004` vs `pacs.007` | Retour vanaf ontvangende zijde versus terugboeking vanaf verzendende zijde |
| `pacs.002` vs `pacs.028` | Statusrapport versus statusverzoek |

## Ondersteunde berichtpagina's

- [`pacs.002.001.12`](/nl/pacs.002.001.12/) — FI-naar-FI-betalingsstatusrapport
- [`pacs.003.001.09`](/nl/pacs.003.001.09/) — FI-naar-FI-klantincasso
- [`pacs.004.001.11`](/nl/pacs.004.001.11/) — Betalingsretour
- [`pacs.007.001.11`](/nl/pacs.007.001.11/) — FI-naar-FI-betalingsstornering
- [`pacs.008.001.13`](/nl/pacs.008.001.13/) — FI-naar-FI-klantkredietoverboeking
- [`pacs.009.001.10`](/nl/pacs.009.001.10/) — Kredietoverboeking tussen financiële instellingen
- [`pacs.010.001.05`](/nl/pacs.010.001.05/) — Incasso tussen financiële instellingen
- [`pacs.028.001.05`](/nl/pacs.028.001.05/) — FI-naar-FI-aanvraag betalingsstatus

