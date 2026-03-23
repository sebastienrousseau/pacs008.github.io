---
title: pacs.028.001.05 | FI-naar-FI-aanvraag betalingsstatus | pacs008
description: Het pacs.028-bericht wordt door een financiële instelling verzonden om de status op te vragen van een eerder verzonden betalingsinstructie. Het maakt...
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI-naar-FI-aanvraag betalingsstatus

| | |
|---|---|
| **ISO-naam** | FIToFIPaymentStatusRequestV05 |
| **Registratiestatus** | Registered |
| **Jaar** | 2019 |
| **Versie** | 5 |

## Overzicht

Het pacs.028-bericht wordt door een financiële instelling verzonden om de status op te vragen van een eerder verzonden betalingsinstructie. Het maakt proactieve tracking van betalingsverwerking mogelijk zonder te wachten op een ongevraagd statusrapport.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026. Referentiedatum ISO 20022-catalogus: 2025-02-27; bronlinks staan hieronder.

## Belangrijke gegevenselementen

- **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel
- **TxInf** — Transactie-informatie die de betaling identificeert waarover wordt geïnformeerd
- **OrgnlGrpInf** — Oorspronkelijke groepsinformatie met verwijzing naar het bronbericht
- **OrgnlInstrId** — Oorspronkelijke instructie-identificatie uit de bronbetaling
- **OrgnlEndToEndId** — Oorspronkelijke end-to-end-identificatie voor traceerbaarheid

## Zakelijke context

- Maakt proactieve statusopvraging mogelijk voor betalingsinstructies in transit
- Ondersteunt operationele teams bij het onderzoeken van vertraagde of ontbrekende betalingen
- Vult pacs.002 aan door statuscommunicatie te initiëren in plaats van af te wachten
- Gebruikt in workflows voor uitzonderingsafhandeling en SLA-monitoring

| Belangrijke gegevenselementen | Zakelijke context |
|---|---|
| **GrpHdr** — Groepskoptekst met berichtidentificatie en aanmaaktijdstempel | Maakt proactieve statusopvraging mogelijk voor betalingsinstructies in transit |
| **TxInf** — Transactie-informatie die de betaling identificeert waarover wordt geïnformeerd | Ondersteunt operationele teams bij het onderzoeken van vertraagde of ontbrekende betalingen |
| **OrgnlGrpInf** — Oorspronkelijke groepsinformatie met verwijzing naar het bronbericht | Vult pacs.002 aan door statuscommunicatie te initiëren in plaats van af te wachten |
| **OrgnlInstrId** — Oorspronkelijke instructie-identificatie uit de bronbetaling | Gebruikt in workflows voor uitzonderingsafhandeling en SLA-monitoring |
| **OrgnlEndToEndId** — Oorspronkelijke end-to-end-identificatie voor traceerbaarheid | De opdrachtgevende agent stuurt pacs.028 naar de opdrachthebbende agent om de status van een specifieke betaling op te vragen. De opdrachthebbende agent antwoordt met een pacs.002 met de huidige verwerkingsstatus. |

## CBPR+- en schema-context

- Vervangt MT199-statusopvragingspatronen en handmatige SWIFT-berichtqueries
- CBPR+ ondersteunt gestructureerde statusverzoeken gekoppeld aan oorspronkelijke berichtidentificatoren
- UETR-gebaseerde tracking via gpi vermindert de noodzaak van handmatige opvragingen
- Wordt steeds vaker geïntegreerd in geautomatiseerde dashboards voor betalingsoperaties

## Berichtstroom

De opdrachtgevende agent stuurt pacs.028 naar de opdrachthebbende agent om de status van een specifieke betaling op te vragen. De opdrachthebbende agent antwoordt met een pacs.002 met de huidige verwerkingsstatus.

## Tabel met versieverschillen

| Versiebereik | Waarom dit telt | Implementatieconclusie |
|---|---|---|
| pacs.028.001.05 | Huidige implementatie in pacs008 | Geschikt voor de huidige modellering van statusverzoeken. |
| pacs.028.001.06 | Latere catalogusrevisie | Controleer de nieuwere catalogusrevisie voor toekomstige interoperabiliteitsplanning. |

## Uitgewerkt XML-voorbeeld

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Veldtoelichting

- `MsgId`: Het verzoek zelf heeft een controleerbare identificatie nodig die losstaat van de onderliggende betaling.
- `OrgnlInstrId`: Gebruik de exacte bronidentificatie uit de oorspronkelijke instructie om de matchingnauwkeurigheid te maximaliseren.
- `OrgnlEndToEndId`: Including customer traceability helps operations teams reconcile the enquiry faster.

## Vergelijk pacs.028 vs pacs.002

| Dimensie | pacs.028.001.05 | Vergelijkingsbericht |
|---|---|---|
| Primair doel | Request status | Report status |
| Wie de interactie start | De instelling die om status vraagt | De instelling die de status verzendt |
| Operational posture | Exception-driven enquiry | Event-driven reporting |
| Te vermijden misvatting | Dat het routinematig voor elke betaling zou moeten worden verzonden | Dat het de noodzaak van proactief casemanagement wegneemt |

## Primaire referenties

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Gerelateerde berichten
| Berichttype | Beschrijving | Overzicht |
|---|---|---|
| [`pacs.002.001.12`](/nl/pacs.002.001.12/) | FI-naar-FI-betalingsstatusrapport | Het pacs.002-bericht wordt door een financiële instelling verzonden om de status te rapporteren van een eerder verzonden betalingsinstructie. Het biedt bevestigings-, afwijzings- of hangende statusinformatie voor individuele transacties binnen een betalingsbericht. |
| [`pacs.008.001.13`](/nl/pacs.008.001.13/) | FI-naar-FI-klantkredietoverboeking | Het pacs.008-bericht is de kernbetalingsinstructie die wordt uitgewisseld tussen financiële instellingen om namens een klant gelden over te maken. Het bevat informatie over debiteur, crediteur, bedrag en betalingskenmerken voor een of meer overboekingstransacties. |
| [`pacs.009.001.10`](/nl/pacs.009.001.10/) | Kredietoverboeking tussen financiële instellingen | Het pacs.009-bericht wordt gebruikt voor overboekingen tussen financiële instellingen waarbij de overboeking voor eigen rekening van de instelling plaatsvindt en niet namens een klant. Het ondersteunt interbancaire financiering, dekkingsbetalingen en liquiditeitsbeheer. |

