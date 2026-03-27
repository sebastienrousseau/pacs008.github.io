---
title: "PACS-berichten uitgelegd | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: nl-NL
lastUpdated: true
image: /logo.webp
---

# PACS-berichten uitgelegd

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Betalingslevenscyclus

De volledige pacs-betalingslevenscyclus omvat zes fasen en meerdere berichttypen die samenwerken.

**Fase 1 — Initiatie.** De betaling ontstaat in het klant-bankdomein (pain.001). De bank van de debiteur ontvangt de opdracht en zet deze om naar het interbancaire domein.

**Fase 2 — Interbancaire instructie.** De debiteuragent maakt een pacs.008 aan en stuurt dit naar de volgende agent in de keten. In een serieel verloop gaat pacs.008 stap voor stap via tussenpersonen. In een dekkingsverloop gaat pacs.008 rechtstreeks van de debiteuragent naar de crediteuragent, terwijl een afzonderlijk pacs.009 de financieringsetappe door de correspondentenketen draagt.

**Fase 3 — Statusrapportage.** Bij elke stap kan de ontvangende agent een pacs.002 retourneren ter bevestiging van acceptatie (ACCP/ACSP/ACSC), afwijzing (RJCT) of status in afwachting (PDNG). In CBPR+ is pacs.002 verplicht voor alle betalingsstatuscommunicatie.

**Fase 4 — Afwikkeling.** Afwikkeling vindt plaats via een clearingsysteem (CLRG), op correspondentrekeningen (INDA/INGA) of via een dekkingsbetaling (COVE). De datum en het bedrag van de interbancaire afwikkeling bepalen wanneer en hoeveel er wordt afgewikkeld.

**Fase 5 — Creditering van de begunstigde.** De crediteuragent crediteert de begunstigde en kan een klantmelding versturen.

**Fase 6 — Uitzonderingsafhandeling.** Als de begunstigde niet kan worden gecrediteerd na afwikkeling, stuurt pacs.004 de gelden terug door de keten. Als de afzender een fout of fraude ontdekt, gaat pacs.007 voorwaarts door de keten. Als de status onbekend is, bevraagt pacs.028 de volgende agent en het antwoord komt terug via pacs.002.

### Seriële methode

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Dekkingsmethode

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## XML-structuur van pacs.008

pacs.008 heeft twee hoofdblokken: de Groepsheader (GrpHdr) en Overschrijvingstransactie-informatie (CdtTrfTxInf).

### Groepsheader (GrpHdr)

De Groepsheader verschijnt exact één keer per bericht en bevat:

- **MsgId** — Unieke berichtidentificator toegewezen door de verzendende agent. Maximaal 35 tekens, uniek per verzender.
- **CreDtTm** — Aanmaaktijdstempel in ISO 8601-formaat.
- **NbOfTxs** — Aantal individuele transacties in het bericht.
- **SttlmInf** — Afwikkelingsinformatie inclusief de afwikkelingsmethode (SttlmMtd) en optioneel het clearingsysteem en de afwikkelingsrekening.
- **IntrBkSttlmDt** — Datum van interbancaire afwikkeling.
- **PmtTpInf** — Betalingstypeinformatie inclusief prioriteit, serviceniveau, lokaal instrument en categorie-doel.

### Transactie-informatie (CdtTrfTxInf)

Elke transactie bevat:

- **PmtId** — Betalingsidentificatoren: InstrId, EndToEndId, TxId en UETR.
- **IntrBkSttlmAmt** — Interbancair afwikkelingsbedrag met valutacode.
- **InstdAmt** — Oorspronkelijk geïnstrueerd bedrag (kan afwijken door wisselkoers).
- **ChrgBr** — Kostendragercode (DEBT, CRED, SHAR of SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — Naam, adres, identificatie, rekening en agent van de debiteur.
- **Cdtr / CdtrAcct / CdtrAgt** — Naam, adres, identificatie, rekening en agent van de crediteur.
- **IntrmyAgt1 / 2 / 3** — Tot drie intermediaire agenten in de keten.
- **RmtInf** — Overmakingsinformatie, ongestructureerd (vrije tekst) of gestructureerd (documentreferenties, bedragen, data).
- **Purp** — Gestructureerde doelcode.
- **RgltryRptg** — Details van regelgevingsrapportage.

## Betalingsidentificatoren

pacs-berichten gebruiken meerdere identificatoren die verschillende rollen vervullen in de betalingsketen.

<div class="api-fields-table" tabindex="0" aria-label="Betalingsidentificatoren">
  <table>
    <caption>Betalingsidentificatoren en hun rollen</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Identificator</th>
        <th scope="col">Ingesteld door</th>
        <th scope="col">Wijzigt in de keten?</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">Elke verzendende agent</td>
          <td class="api-fields-table__constraint">Ja — nieuw per bericht</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">Elke instruerende agent</td>
          <td class="api-fields-table__constraint">Ja — kan wijzigen per stap</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">Initiator (debiteur)</td>
          <td class="api-fields-table__constraint">Nee — mag niet worden gewijzigd</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">Eerste instruerende agent</td>
          <td class="api-fields-table__constraint">Nee — mag niet worden gewijzigd</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">Debiteuragent</td>
          <td class="api-fields-table__constraint">Nee — universele tracking</td>
        </tr>
    </tbody>
  </table>
</div>

## Afwikkelingsmethoden

Het element SttlmMtd definieert hoe de interbancaire afwikkeling plaatsvindt.

- **CLRG** — Afwikkeling via een clearingsysteem zoals TARGET2, EURO1 of CHIPS. Meest gebruikelijk voor binnenlandse en regionale clearing.
- **INDA** — Afwikkeling op de boeken van de geïnstrueerde agent. De debiteuragent houdt een nostrorekening aan bij de volgende agent. Typisch voor bilaterale correspondentbanking.
- **INGA** — Afwikkeling op de boeken van de instruerende agent. De geïnstrueerde agent houdt een nostrorekening aan bij de verzendende agent. Minder gebruikelijk dan INDA.
- **COVE** — Afwikkeling via een afzonderlijke dekkingsbetaling. pacs.009 draagt de financieringsetappe terwijl pacs.008 de klantgegevens rechtstreeks draagt. Gebruikt bij grensoverschrijdende correspondentbanking.

## Kostendragercodes

Het element ChrgBr geeft aan wie de betalingskosten draagt.

- **DEBT** — Debiteur draagt alle kosten (MT103-equivalent: OUR). Crediteur ontvangt het volledige bedrag.
- **CRED** — Crediteur draagt alle kosten (MT103-equivalent: BEN). Kosten worden afgetrokken van de overboeking.
- **SHAR** — Kosten worden gedeeld (MT103-equivalent: SHA). Elke partij betaalt de kosten van zijn eigen agent. Meest gebruikelijk voor grensoverschrijdende betalingen.
- **SLEV** — Kosten volgen het serviceniveau. Verplicht voor SEPA. Geen aftrek van het overboekingsbedrag.

## Postadresformaat

### Gestructureerd adres

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### Ongestructureerd adres (verouderd voor CBPR+ na november 2026)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

Belangrijkste beperkingen: StrtNm max 70 tekens (CBPR+), TwnNm max 35 tekens (CBPR+), Ctry is ISO 3166-1 alpha-2, AdrLine max 70 tekens per regel en max 7 regels.

## Partij-identificatie

Partijen in pacs.008 ondersteunen meerdere identificatiemethoden:

- **BIC** — Bedrijfsidentificatiecode conform ISO 9362. 8 of 11 tekens (BBBBCCLL of BBBBCCLLBBB). Gebruikt in FinInstnId/BICFI voor agenten en OrgId/AnyBIC voor partijen.
- **LEI** — Identificatiecode juridische entiteit conform ISO 17442. 20 alfanumerieke tekens. Verschijnt in OrgId/LEI voor partijen en FinInstnId/LEI voor agenten. Verbetert entiteitsonderscheiding voor regelgevingsrapportage.
- **IBAN** — Internationaal bankrekeningnummer conform ISO 13616. Gebruikt in DbtrAcct/Id/IBAN en CdtrAcct/Id/IBAN.
- **Organisatie-ID's** — Andere schemagebonden identificatoren (belastingnummer, DUNS, klantnummer) via OrgId/Othr met een schemanaamcode.
- **Privé-ID's** — Voor natuurlijke personen: geboortedatum en -plaats, paspoort (CCPT), nationale identiteitskaart (NIDN) of rijbewijs (DRLC) via PrvtId.

## Overmakingsinformatie

Overmakingsgegevens in pacs.008 gebruiken het element RmtInf in twee vormen:

**Ongestructureerd** — Vrije tekst tot 140 tekens per voorkomen. Eenvoudig maar beperkt geautomatiseerde afstemming.

**Gestructureerd** — Documentreferenties met typecodes, nummers, data en bedragen. Veelvoorkomende documenttypen: CINV (handelsfactuur), CREN (creditnota), SOAC (rekeningoverzicht). Ondersteunt ISO 11649 crediteurreferenties (RF + controletekens + referentie) via CdtrRefInf. Maakt geautomatiseerde factuurmatching en multi-factuurbetalingen mogelijk.

## UETR en gpi-tracking

UETR (Unique End-to-End Transaction Reference) is een UUID v4 gegenereerd door de debiteuragent. Het verschijnt in PmtId/UETR in pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 en pacs.028. Het mag niet worden gewijzigd gedurende de gehele betalingsketen.

SWIFT gpi gebruikt de UETR om betalingen te volgen via een cloudgebaseerde Tracker-database. Elke agent bevestigt ontvangst en verwerking, wat end-to-end-zichtbaarheid mogelijk maakt. De gpi-SLA voor grensoverschrijdende betalingen streeft naar creditering op dezelfde dag op de crediteurrekening.

## Referenties

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

