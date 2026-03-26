---
title: "pacs.002.001.12 | Raport de stare a plății FI-la-FI | pacs008"
description: Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de...
lang: ro-RO
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.002 a payment message?"
    answer: "No. It reports status for an earlier instruction rather than moving value itself."
  - question: "Should pacs.002 replace internal workflow states?"
    answer: "No. It should inform them, but internal case states still need their own operational logic."
---

# pacs.002.001.12 — Raport de stare a plății FI-la-FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Câmp</th>
        <th scope="col">Valoare</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Nume ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Stare de înregistrare</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>An</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Versiune</strong></td>
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Prezentare generală

Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 2025-02-27; linkurile către surse sunt mai jos.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu identificarea mesajului și marca temporală de creare
- **OrgnlGrpInfAndSts** — Informații și status ale grupului original pentru raportarea la nivel agregat
- **TxInfAndSts** — Informații și status ale tranzacției pentru rezultatele tranzacțiilor individuale
- **StsRsnInf** — Informații privind motivul statusului cu coduri de motiv structurate
- **OrgnlTxRef** — Referința tranzacției originale care face legătura cu instrucțiunea sursă

## Context de afaceri

- Utilizat pentru confirmarea decontării sau raportarea respingerii transferurilor de credit, debitărilor directe și returnărilor de plăți
- Permite reconcilierea între agentul ordonator și agentul instruit
- Obligatoriu în fluxurile CBPR+ pentru confirmarea procesării mesajelor pacs.008 și pacs.009
- Suportă raportarea statusului atât la nivel de grup agregat, cât și la nivel de tranzacție individuală

<div class="operational-matrix-table" tabindex="0" aria-label="Elemente de date cheie Context de afaceri">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Elemente de date cheie</th>
        <th>Context de afaceri</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Antet de grup cu identificarea mesajului și marca temporală de creare</td>
          <td class="operational-matrix-table__right">Utilizat pentru confirmarea decontării sau raportarea respingerii transferurilor de credit, debitărilor directe și returnărilor de plăți</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Informații și status ale grupului original pentru raportarea la nivel agregat</td>
          <td class="operational-matrix-table__right">Permite reconcilierea între agentul ordonator și agentul instruit</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Informații și status ale tranzacției pentru rezultatele tranzacțiilor individuale</td>
          <td class="operational-matrix-table__right">Obligatoriu în fluxurile CBPR+ pentru confirmarea procesării mesajelor pacs.008 și pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Informații privind motivul statusului cu coduri de motiv structurate</td>
          <td class="operational-matrix-table__right">Suportă raportarea statusului atât la nivel de grup agregat, cât și la nivel de tranzacție individuală</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Referința tranzacției originale care face legătura cu instrucțiunea sursă</td>
          <td class="operational-matrix-table__right">Agentul instruit (receptorul) trimite pacs.002 înapoi către agentul ordonator (expeditorul) pentru a confirma acceptarea, decontarea sau respingerea unei instrucțiuni de plată primite, cum ar fi pacs.008 sau pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## Context CBPR+ și scheme de plată

- Înlocuiește MT199 și narațiunile de status din câmpul 79 al mesajelor MT
- CBPR+ impune pacs.002 pentru toată comunicarea privind statusul plăților
- Codurile de motiv structurate înlocuiesc explicațiile de respingere în text liber
- Integrarea cu urmărirea SWIFT gpi necesită pacs.002 pentru transparență de la un capăt la altul

## Fluxul mesajului

Agentul instruit (receptorul) trimite pacs.002 înapoi către agentul ordonator (expeditorul) pentru a confirma acceptarea, decontarea sau respingerea unei instrucțiuni de plată primite, cum ar fi pacs.008 sau pacs.009.

## Tabelul diferențelor de versiune

<div class="version-diff-table" tabindex="0" aria-label="Tabelul diferențelor de versiune">
  <table>
    <caption>Tabelul diferențelor de versiune</caption>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Interval de versiuni</th>
        <th>De ce contează</th>
        <th>Concluzie de implementare</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">Implementarea curentă în pacs008</td>
          <td class="version-diff-table__takeaway">Folosește această versiune când trebuie să te aliniezi la șabloanele și artefactele de validare curente ale proiectului.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">Revizii ulterioare ale catalogului</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## Exemplu XML comentat

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Comentarii pe câmpuri

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## Compară pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="Compară pacs.002 vs pacs.028">
  <table>
    <caption>Compară pacs.002 vs pacs.028</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensiune</th>
        <th>pacs.002.001.12</th>
        <th>Mesaj de comparație</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Scop principal</td>
          <td class="message-comparison-table__current">Raportează statusul</td>
          <td class="message-comparison-table__other">Solicită statusul</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Cine începe interacțiunea</td>
          <td class="message-comparison-table__current">Instituția care trimite statusul</td>
          <td class="message-comparison-table__other">Instituția care solicită statusul</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Postură operațională</td>
          <td class="message-comparison-table__current">Raportare bazată pe eveniment</td>
          <td class="message-comparison-table__other">Interogare bazată pe excepție</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Presupunere greșită de evitat</td>
          <td class="message-comparison-table__current">Că raportarea statusului înlocuiește fluxurile de investigare și clarificare</td>
          <td class="message-comparison-table__other">Că fiecare plată are nevoie de o cerere explicită de status</td>
        </tr>
    </tbody>
  </table>
</div>

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

## Mesaje conexe
<div class="related-messages-table" tabindex="0" aria-label="Mesaje conexe">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Tip de mesaj</th>
        <th>Descriere</th>
        <th>Prezentare generală</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/ro/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Transfer de credit client FI-la-FI</td>
          <td class="related-messages-table__overview">Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține informații despre debitor, creditor, sumă și detalii de remitere pentru una sau mai multe tranzacții de transfer de credit.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ro/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Transfer de credit între instituții financiare</td>
          <td class="related-messages-table__overview">Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în numele unui client. Suportă finanțarea interbancară, plățile de acoperire și gestionarea lichidității.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ro/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">Cerere de stare a plății FI-la-FI</td>
          <td class="related-messages-table__overview">Mesajul pacs.028 este trimis de o instituție financiară pentru a solicita statusul unei instrucțiuni de plată trimise anterior. Permite urmărirea proactivă a procesării plăților fără a aștepta un raport de status nesolicitat.</td>
        </tr>
    </tbody>
  </table>
</div>

