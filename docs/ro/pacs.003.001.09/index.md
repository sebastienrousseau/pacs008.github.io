---
title: pacs.003.001.09 | Debit direct de client FI-la-FI | pacs008
description: Mesajul pacs.003 este schimbat între instituții financiare pentru a executa o instrucțiune de debitare directă a clientului. Permite băncii creditorului...
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — Debit direct de client FI-la-FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Nume ISO</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
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
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## Prezentare generală

Mesajul pacs.003 este schimbat între instituții financiare pentru a executa o instrucțiune de debitare directă a clientului. Permite băncii creditorului să colecteze fonduri de la banca debitorului în numele creditorului.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 2025-02-27; linkurile către surse sunt mai jos.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu identificarea mesajului și informații de decontare
- **DrctDbtTxInf** — Informații privind tranzacția de debitare directă cu sumă și părți implicate
- **Cdtr** — Identificarea creditorului și detaliile contului
- **CdtrAgt** — Identificarea agentului creditorului (instituția colectoare)
- **DbtrAgt** — Identificarea agentului debitorului (instituția plătitoare)

## Context de afaceri

- Suportă schemele de debitare directă SEPA Core și B2B
- Utilizat pentru colectarea plăților recurente precum abonamente, facturi de utilități și rambursări de împrumuturi
- Necesită o referință de mandat validă între debitor și creditor
- Permite colectarea în masă a mai multor instrucțiuni de debitare directă într-un singur mesaj

<div class="operational-matrix-table" tabindex="0" aria-label="Elemente de date cheie Context de afaceri">
  <table>
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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Antet de grup cu identificarea mesajului și informații de decontare</td>
          <td class="operational-matrix-table__right">Suportă schemele de debitare directă SEPA Core și B2B</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Informații privind tranzacția de debitare directă cu sumă și părți implicate</td>
          <td class="operational-matrix-table__right">Utilizat pentru colectarea plăților recurente precum abonamente, facturi de utilități și rambursări de împrumuturi</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Identificarea creditorului și detaliile contului</td>
          <td class="operational-matrix-table__right">Necesită o referință de mandat validă între debitor și creditor</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Identificarea agentului creditorului (instituția colectoare)</td>
          <td class="operational-matrix-table__right">Permite colectarea în masă a mai multor instrucțiuni de debitare directă într-un singur mesaj</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Identificarea agentului debitorului (instituția plătitoare)</td>
          <td class="operational-matrix-table__right">Agentul creditorului inițiază pacs.003 către agentul debitorului pentru a colecta fonduri. Agentul debitorului validează mandatul, verifică acoperirea contului și decontează sau returnează tranzacția.</td>
        </tr>
    </tbody>
  </table>
</div>

## Context CBPR+ și scheme de plată

- Cerințele de adresă structurată și identificare a părților se aplică în egală măsură debitărilor directe
- Datele legate de mandat trebuie să fie complet structurate din noiembrie 2026
- Înlocuiește formatele vechi de debitare directă în stil MT104 în fluxurile transfrontaliere
- Validarea identificării schemei creditorului este din ce în ce mai strict aplicată

## Fluxul mesajului

Agentul creditorului inițiază pacs.003 către agentul debitorului pentru a colecta fonduri. Agentul debitorului validează mandatul, verifică acoperirea contului și decontează sau returnează tranzacția.

## Tabelul diferențelor de versiune

<div class="version-diff-table" tabindex="0" aria-label="Tabelul diferențelor de versiune">
  <table>
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
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">Implementarea curentă în pacs008</td>
          <td class="version-diff-table__takeaway">Util pentru modelarea referințelor de debit direct în proiectul curent.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">Revizii ulterioare ale catalogului</td>
          <td class="version-diff-table__takeaway">Verifică reviziile ulterioare pentru actualizări privind mandatele, statusul și interoperabilitatea înainte de utilizarea într-o implementare nouă.</td>
        </tr>
    </tbody>
  </table>
</div>

## Exemplu XML comentat

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Comentarii pe câmpuri

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: Succesul debitării directe depinde adesea mai mult de calitatea contului și a mandatului decât de structura XML.

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

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
          <td class="related-messages-table__id"><a href="/ro/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Retur de plată</td>
          <td class="related-messages-table__overview">Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi aplicată, a fost trimisă din eroare sau este reclamată de instituția inițiatoare.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ro/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">Reversare de plată FI-la-FI</td>
          <td class="related-messages-table__overview">Mesajul pacs.007 este utilizat pentru a inversa o instrucțiune de plată trimisă anterior care nu a fost încă decontată sau pentru a solicita inversarea unei plăți decontate. Spre deosebire de pacs.004 (returnare), este inițiat de agentul ordonator original.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ro/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Raport de stare a plății FI-la-FI</td>
          <td class="related-messages-table__overview">Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată.</td>
        </tr>
    </tbody>
  </table>
</div>

