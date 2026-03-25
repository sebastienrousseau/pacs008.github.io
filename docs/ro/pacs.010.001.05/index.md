---
title: "pacs.010.001.05 | Debit direct între instituții financiare | pacs008"
description: Mesajul pacs.010 este utilizat între instituții financiare pentru tranzacții de debitare directă pe contul propriu al instituției. Permite unei instituții...
lang: ro-RO
lastUpdated: true
image: /logo.svg
faq:
  - question: "Este pacs.010 comun în produsele de plăți retail?"
    answer: "De obicei nu. Se potrivește mai bine scenariilor de debit direct între bănci decât produselor retail standard."
  - question: "Ce ar trebui să proiecteze echipele mai întâi?"
    answer: "Începeți cu regulile de aprobare, controalele bilaterale și gestionarea excepțiilor înainte de a finaliza șabloanele XML."
---

# pacs.010.001.05 — Debit direct între instituții financiare

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Prezentare generală

Mesajul pacs.010 este utilizat între instituții financiare pentru tranzacții de debitare directă pe contul propriu al instituției. Permite unei instituții să colecteze fonduri direct din contul altei instituții.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 2025-02-27; linkurile către surse sunt mai jos.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu identificarea mesajului și informații de decontare
- **DrctDbtTxInf** — Informații privind tranzacția de debitare directă cu suma de colectare
- **Cdtr / CdtrAgt** — Identificarea instituției creditoare și a agentului acesteia
- **Dbtr / DbtrAgt** — Identificarea instituției debitoare și a agentului acesteia
- **IntrBkSttlmAmt** — Suma de decontare interbancară în moneda de decontare

## Context de afaceri

- Suportă colectarea interbancară prin debitare directă între instituții financiare
- Utilizat pentru colectarea comisioanelor, apelurile în marjă și obligațiile de decontare instituționale
- Necesită acorduri bilaterale prestabilite între instituțiile participante
- Esențial pentru gestionarea numerarului instituțional și ciclurile de decontare interbancară

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Antet de grup cu identificarea mesajului și informații de decontare</td>
          <td class="operational-matrix-table__right">Suportă colectarea interbancară prin debitare directă între instituții financiare</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Informații privind tranzacția de debitare directă cu suma de colectare</td>
          <td class="operational-matrix-table__right">Utilizat pentru colectarea comisioanelor, apelurile în marjă și obligațiile de decontare instituționale</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identificarea instituției creditoare și a agentului acesteia</td>
          <td class="operational-matrix-table__right">Necesită acorduri bilaterale prestabilite între instituțiile participante</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identificarea instituției debitoare și a agentului acesteia</td>
          <td class="operational-matrix-table__right">Esențial pentru gestionarea numerarului instituțional și ciclurile de decontare interbancară</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Suma de decontare interbancară în moneda de decontare</td>
          <td class="operational-matrix-table__right">Instituția creditoare trimite pacs.010 instituției debitoare pentru a colecta fonduri în baza unui acord prestabilit. Instituția debitoare validează cererea și decontează sau respinge debitarea directă.</td>
        </tr>
    </tbody>
  </table>
</div>

## Context CBPR+ și scheme de plată

- Înlocuiește elemente ale MT204 pentru procesarea debitărilor directe interbancare
- Identificarea structurată a părților urmează aceleași cerințe ca și celelalte mesaje pacs
- Validarea identificatorilor instituționali (BIC, LEI) este obligatorie
- Inclus în foile de parcurs pentru adoptarea completă a ISO 20022 în infrastructurile de piață

## Fluxul mesajului

Instituția creditoare trimite pacs.010 instituției debitoare pentru a colecta fonduri în baza unui acord prestabilit. Instituția debitoare validează cererea și decontează sau respinge debitarea directă.

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">Implementarea curentă în pacs008</td>
          <td class="version-diff-table__takeaway">Punct de referință pentru suportul debitării directe între instituții în proiectul actual.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">Revizie ulterioară a catalogului</td>
          <td class="version-diff-table__takeaway">Revizuiește înainte de a adopta cerințe mai noi de infrastructură.</td>
        </tr>
    </tbody>
  </table>
</div>

## Exemplu XML comentat

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Comentarii pe câmpuri

- `InstrId`: Use an identifier that links back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need clear bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly. This is not a retail-customer debit model.

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/ro/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Transfer de credit între instituții financiare</td>
          <td class="related-messages-table__overview">Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în numele unui client. Suportă finanțarea interbancară, plățile de acoperire și gestionarea lichidității.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ro/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Raport de stare a plății FI-la-FI</td>
          <td class="related-messages-table__overview">Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ro/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Debit direct de client FI-la-FI</td>
          <td class="related-messages-table__overview">Mesajul pacs.003 este schimbat între instituții financiare pentru a executa o instrucțiune de debitare directă a clientului. Permite băncii creditorului să colecteze fonduri de la banca debitorului în numele creditorului.</td>
        </tr>
    </tbody>
  </table>
</div>

