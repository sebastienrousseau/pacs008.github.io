---
title: "Explicarea mesajelor PACS | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: ro-RO
lastUpdated: true
image: /logo.webp
---

# Explicarea mesajelor PACS

A detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Ciclul de viață al plății

Ciclul complet al plății pacs implică șase etape și mai multe tipuri de mesaje care lucrează împreună.

**Etapa 1 — Inițierea.** Plata are origine în domeniul client-bancă (pain.001). Banca debitorului primește instrucțiunea și o transpune în domeniul interbancar.

**Etapa 2 — Instrucțiunea interbancară.** Agentul debitorului creează un pacs.008 și îl trimite agentului următor din lanț. În fluxul serial, pacs.008 tranzitează pas cu pas prin intermediari. În fluxul de acoperire, pacs.008 merge direct de la agentul debitorului la agentul creditorului, în timp ce un pacs.009 separat asigură etapa de finanțare prin lanțul de corespondenți.

**Etapa 3 — Raportarea stării.** La fiecare pas, agentul receptor poate returna un pacs.002 confirmând acceptarea (ACCP/ACSP/ACSC), respingerea (RJCT) sau starea în așteptare (PDNG). În CBPR+, pacs.002 este obligatoriu pentru toată comunicarea privind starea plății.

**Etapa 4 — Decontarea.** Decontarea se efectuează printr-un sistem de compensare (CLRG), pe conturi de corespondent (INDA/INGA) sau prin plată de acoperire (COVE). Data și suma decontului interbancar determină când și cât se decontează.

**Etapa 5 — Creditarea beneficiarului.** Agentul creditorului creditează beneficiarul și poate trimite o notificare clientului.

**Etapa 6 — Gestionarea excepțiilor.** Dacă beneficiarul nu poate fi creditat după decontare, pacs.004 returnează fondurile prin lanț. Dacă emitentul descoperă o eroare sau fraudă, pacs.007 progresează înainte prin lanț. Dacă starea este necunoscută, pacs.028 interoghează agentul următor, iar răspunsul revine prin pacs.002.

### Flux metoda serială

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Flux metoda de acoperire

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## Structura XML a pacs.008

pacs.008 are două blocuri principale: Antetul de Grup (GrpHdr) și Informațiile Tranzacției de Transfer de Credit (CdtTrfTxInf).

### Antetul de Grup (GrpHdr)

Antetul de Grup apare exact o dată per mesaj și conține:

- **MsgId** — Identificator unic de mesaj atribuit de agentul expeditor. Maximum 35 caractere, unic per expeditor.
- **CreDtTm** — Marca temporală de creare în format ISO 8601.
- **NbOfTxs** — Numărul tranzacțiilor individuale din mesaj.
- **SttlmInf** — Informații de decontare incluzând metoda de decontare (SttlmMtd) și opțional sistemul de compensare și contul de decontare.
- **IntrBkSttlmDt** — Data decontului interbancar.
- **PmtTpInf** — Informații despre tipul plății: prioritate, nivel de serviciu, instrument local și scopul categoriei.

### Informații Tranzacție (CdtTrfTxInf)

Fiecare tranzacție conține:

- **PmtId** — Identificatori de plată: InstrId, EndToEndId, TxId și UETR.
- **IntrBkSttlmAmt** — Suma de decontare interbancară cu codul monedei.
- **InstdAmt** — Suma inițială solicitată (poate diferi de suma de decontare din cauza schimbului valutar).
- **ChrgBr** — Codul purtătorului de costuri (DEBT, CRED, SHAR sau SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — Numele, adresa, identificarea, contul și agentul debitorului.
- **Cdtr / CdtrAcct / CdtrAgt** — Numele, adresa, identificarea, contul și agentul creditorului.
- **IntrmyAgt1 / 2 / 3** — Până la trei agenți intermediari în lanț.
- **RmtInf** — Informații de remitere, nestructurate (text liber) sau structurate (referințe documente, sume, date).
- **Purp** — Cod de scop structurat.
- **RgltryRptg** — Detalii de raportare reglementară.

## Identificatori de plată

Mesajele pacs utilizează mai mulți identificatori care îndeplinesc roluri diferite în lanțul de plată.

<div class="api-fields-table" tabindex="0" aria-label="Identificatori de plată">
  <table>
    <caption>Identificatori de plată și rolurile lor</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Identificator</th>
        <th scope="col">Stabilit de</th>
        <th scope="col">Se schimbă în lanț?</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">Fiecare agent expeditor</td>
          <td class="api-fields-table__constraint">Da — nou per mesaj</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">Fiecare agent instructor</td>
          <td class="api-fields-table__constraint">Da — poate schimba la fiecare pas</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">Inițiatorul (debitorul)</td>
          <td class="api-fields-table__constraint">Nu — nu trebuie modificat</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">Primul agent instructor</td>
          <td class="api-fields-table__constraint">Nu — nu trebuie modificat</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">Agentul debitorului</td>
          <td class="api-fields-table__constraint">Nu — urmărire universală</td>
        </tr>
    </tbody>
  </table>
</div>

## Metode de decontare

Elementul SttlmMtd definește modul în care se efectuează decontarea interbancară.

- **CLRG** — Decontare prin sistem de compensare precum TARGET2, EURO1 sau CHIPS. Cea mai comună pentru compensarea națională și regională.
- **INDA** — Decontare în registrele agentului instruit. Agentul debitorului deține un cont nostro la agentul următor. Tipic pentru banca de corespondent bilateral.
- **INGA** — Decontare în registrele agentului instructor. Agentul instruit deține un cont nostro la agentul expeditor. Mai puțin comun decât INDA.
- **COVE** — Decontare prin plată de acoperire separată. pacs.009 asigură etapa de finanțare în timp ce pacs.008 transportă datele clientului direct. Utilizat în banca de corespondent transfrontalieră.

## Coduri purtător de costuri

Elementul ChrgBr specifică cine suportă costurile plății.

- **DEBT** — Debitorul suportă toate costurile (echivalent MT103: OUR). Creditorul primește suma integrală.
- **CRED** — Creditorul suportă toate costurile (echivalent MT103: BEN). Costurile sunt deduse din transfer.
- **SHAR** — Costurile sunt partajate (echivalent MT103: SHA). Fiecare parte plătește costurile propriului agent. Cel mai comun pentru plăți transfrontaliere.
- **SLEV** — Costurile urmează nivelul de serviciu. Obligatoriu pentru SEPA. Fără deduceri din suma transferului.

## Format adresă poștală

### Adresă structurată

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### Adresă nestructurată (depreciată pentru CBPR+ după noiembrie 2026)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

Restricții principale: StrtNm maxim 70 caractere (CBPR+), TwnNm maxim 35 caractere (CBPR+), Ctry în format ISO 3166-1 alpha-2, AdrLine maxim 70 caractere per linie și maxim 7 linii.

## Identificarea părților

Părțile în pacs.008 suportă mai multe metode de identificare:

- **BIC** — Cod de identificare a afacerii conform ISO 9362. 8 sau 11 caractere (BBBBCCLL sau BBBBCCLLBBB). Utilizat în FinInstnId/BICFI pentru agenți și OrgId/AnyBIC pentru părți.
- **LEI** — Identificator de entitate juridică conform ISO 17442. 20 caractere alfanumerice. Apare în OrgId/LEI pentru părți și FinInstnId/LEI pentru agenți. Îmbunătățește dezambiguizarea entităților pentru raportarea reglementară.
- **IBAN** — Număr de cont bancar internațional conform ISO 13616. Utilizat în DbtrAcct/Id/IBAN și CdtrAcct/Id/IBAN.
- **ID-uri de organizație** — Alți identificatori bazați pe schemă (număr fiscal, DUNS, număr client) prin OrgId/Othr cu cod de nume de schemă.
- **ID-uri private** — Pentru persoane fizice: data și locul nașterii, pașaport (CCPT), carte de identitate (NIDN) sau permis de conducere (DRLC) prin PrvtId.

## Informații de remitere

Datele de remitere în pacs.008 utilizează elementul RmtInf cu două forme:

**Nestructurate** — Text liber până la 140 caractere per apariție. Simplu dar limitează reconcilierea automatizată.

**Structurate** — Referințe documente cu coduri de tip, numere, date și sume. Tipuri comune de documente: CINV (factură comercială), CREN (notă de credit), SOAC (extras de cont). Suportă referințe de creditor ISO 11649 (RF + cifre de control + referință) prin CdtrRefInf. Permite potrivirea automatizată a facturilor și plățile multifactură.

## UETR și urmărirea gpi

UETR (Unique End-to-End Transaction Reference) este un UUID v4 generat de agentul debitorului. Apare în PmtId/UETR în pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 și pacs.028. Trebuie să rămână neschimbat de-a lungul întregului lanț de plată.

SWIFT gpi utilizează UETR pentru a urmări plățile printr-o bază de date Tracker în cloud. Fiecare agent confirmă primirea și procesarea, permitând vizibilitate de capăt la capăt. SLA-ul gpi pentru plățile transfrontaliere vizează creditarea în aceeași zi în contul creditorului.

## Referințe

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

