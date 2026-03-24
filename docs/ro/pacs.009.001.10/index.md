---
title: pacs.009.001.10 | Transfer de credit între instituții financiare | pacs008
description: Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în...
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Transfer de credit între instituții financiare

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## Prezentare generală

Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în numele unui client. Suportă finanțarea interbancară, plățile de acoperire și gestionarea lichidității.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 2025-02-27; linkurile către surse sunt mai jos.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu identificarea mesajului și informații de decontare
- **CdtTrfTxInf** — Informații privind tranzacția de transfer de credit cu suma de decontare interbancară
- **Dbtr / DbtrAgt** — Identificarea instituției debitoare și a agentului acesteia
- **Cdtr / CdtrAgt** — Identificarea instituției creditoare și a agentului acesteia
- **IntrBkSttlmAmt** — Suma de decontare interbancară în moneda de decontare

## Context de afaceri

- Utilizat pentru transferuri interbancare în cont propriu și plăți de acoperire
- Suportă gestionarea lichidității între partenerii de corespondență bancară
- Conține etapa de acoperire a transferurilor de credit ale clienților decontate prin metoda de acoperire
- Permite operațiuni de trezorerie și finanțare între instituții financiare

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
          <td class="operational-matrix-table__right">Utilizat pentru transferuri interbancare în cont propriu și plăți de acoperire</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Informații privind tranzacția de transfer de credit cu suma de decontare interbancară</td>
          <td class="operational-matrix-table__right">Suportă gestionarea lichidității între partenerii de corespondență bancară</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identificarea instituției debitoare și a agentului acesteia</td>
          <td class="operational-matrix-table__right">Conține etapa de acoperire a transferurilor de credit ale clienților decontate prin metoda de acoperire</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identificarea instituției creditoare și a agentului acesteia</td>
          <td class="operational-matrix-table__right">Permite operațiuni de trezorerie și finanțare între instituții financiare</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Suma de decontare interbancară în moneda de decontare</td>
          <td class="operational-matrix-table__right">Instituția debitoare trimite pacs.009 instituției creditoare pentru a transfera fonduri proprii. Pentru plățile prin metoda de acoperire, pacs.009 asigură etapa de finanțare în timp ce pacs.008 transportă instrucțiunea clientului pe o cale separată.</td>
        </tr>
    </tbody>
  </table>
</div>

## Context CBPR+ și scheme de plată

- Înlocuiește MT202 și MT202COV pentru transferurile între instituții
- Fluxurile prin metoda de acoperire asociază pacs.009 cu instrucțiunea de client pacs.008 subiacentă
- Datele structurate ale părților și identificarea LEI sunt din ce în ce mai solicitate
- SWIFT gpi acoperă pacs.009 pentru transparență în corespondența bancară

## Fluxul mesajului

Instituția debitoare trimite pacs.009 instituției creditoare pentru a transfera fonduri proprii. Pentru plățile prin metoda de acoperire, pacs.009 asigură etapa de finanțare în timp ce pacs.008 transportă instrucțiunea clientului pe o cale separată.

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">Implementarea curentă în pacs008</td>
          <td class="version-diff-table__takeaway">Se aliniază cu suportul actual al proiectului pentru fluxurile de transfer de credit FI.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">Revizii ulterioare ale catalogului</td>
          <td class="version-diff-table__takeaway">Important pentru planificarea foii de parcurs în medii de bancă corespondentă și plăți de acoperire.</td>
        </tr>
    </tbody>
  </table>
</div>

## Exemplu XML comentat

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Comentarii pe câmpuri

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## Compară pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="Compară pacs.009 vs pacs.008">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensiune</th>
        <th>pacs.009.001.10</th>
        <th>Mesaj de comparație</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Scop principal</td>
          <td class="message-comparison-table__current">Transfer de credit în cont propriu al instituției sau etapă de acoperire</td>
          <td class="message-comparison-table__other">Transfer de credit al clientului</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Responsabil de business</td>
          <td class="message-comparison-table__current">Operațiuni de trezorerie / corespondent / finanțare</td>
          <td class="message-comparison-table__other">Operațiuni de plăți ale clienților</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Asocieri tipice</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004 și fluxuri pacs.008 asociate</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Presupunere greșită de evitat</td>
          <td class="message-comparison-table__current">Că este doar un pacs.008 mai tehnic</td>
          <td class="message-comparison-table__other">Că poate transporta fără probleme fluxurile de finanțare ale instituțiilor</td>
        </tr>
    </tbody>
  </table>
</div>

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


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
          <td class="related-messages-table__id"><a href="/ro/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Raport de stare a plății FI-la-FI</td>
          <td class="related-messages-table__overview">Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ro/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Debit direct între instituții financiare</td>
          <td class="related-messages-table__overview">Mesajul pacs.010 este utilizat între instituții financiare pentru tranzacții de debitare directă pe contul propriu al instituției. Permite unei instituții să colecteze fonduri direct din contul altei instituții.</td>
        </tr>
    </tbody>
  </table>
</div>

