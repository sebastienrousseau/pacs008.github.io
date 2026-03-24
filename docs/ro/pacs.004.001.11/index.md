---
title: pacs.004.001.11 | Retur de plată | pacs008
description: Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi...
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Retur de plată

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Prezentare generală

Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi aplicată, a fost trimisă din eroare sau este reclamată de instituția inițiatoare.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 2025-02-27; linkurile către surse sunt mai jos.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu identificarea mesajului și marca temporală de creare
- **TxInf** — Informații privind tranzacția cu suma returnării și părțile implicate
- **OrgnlGrpInf** — Informații ale grupului original cu legătura către mesajul sursă
- **RtrRsnInf** — Informații privind motivul returnării cu coduri de motiv structurate
- **OrgnlTxRef** — Referința tranzacției originale pentru potrivire și reconciliere

## Context de afaceri

- Gestionează returnările post-decontare când contul beneficiarului nu poate fi creditat
- Suportă scenarii de reclamare în care inițiatorul solicită returnarea fondurilor
- Conține coduri de motiv de returnare structurate pentru transparență reglementară și operațională
- Se aplică atât returnărilor de transferuri de credit (pacs.008), cât și returnărilor de debitări directe (pacs.003)

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Antet de grup cu identificarea mesajului și marca temporală de creare</td>
          <td class="operational-matrix-table__right">Gestionează returnările post-decontare când contul beneficiarului nu poate fi creditat</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informații privind tranzacția cu suma returnării și părțile implicate</td>
          <td class="operational-matrix-table__right">Suportă scenarii de reclamare în care inițiatorul solicită returnarea fondurilor</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informații ale grupului original cu legătura către mesajul sursă</td>
          <td class="operational-matrix-table__right">Conține coduri de motiv de returnare structurate pentru transparență reglementară și operațională</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Informații privind motivul returnării cu coduri de motiv structurate</td>
          <td class="operational-matrix-table__right">Se aplică atât returnărilor de transferuri de credit (pacs.008), cât și returnărilor de debitări directe (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Referința tranzacției originale pentru potrivire și reconciliere</td>
          <td class="operational-matrix-table__right">Agentul instruit trimite pacs.004 înapoi prin lanțul de plăți pentru a returna fonduri decontate anterior. Fiecare agent din lanț procesează returnarea și recreditează conturile relevante.</td>
        </tr>
    </tbody>
  </table>
</div>

## Context CBPR+ și scheme de plată

- Înlocuiește MT103 RETURN și mesageria de returnare prin metoda de acoperire
- Codurile de motiv de returnare sunt standardizate și lizibile automat conform ISO 20022
- CBPR+ necesită date complete de referință ale tranzacției originale pentru potrivire
- Urmărirea SWIFT gpi se extinde la tranzacțiile de returnare pentru vizibilitate de la un capăt la altul

## Fluxul mesajului

Agentul instruit trimite pacs.004 înapoi prin lanțul de plăți pentru a returna fonduri decontate anterior. Fiecare agent din lanț procesează returnarea și recreditează conturile relevante.

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">Implementarea curentă în pacs008</td>
          <td class="version-diff-table__takeaway">Se aliniază cu șabloanele curente pentru mesajele de retur al plăților.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">Revizii ulterioare ale catalogului</td>
          <td class="version-diff-table__takeaway">Verifică reviziile ulterioare ale mesajelor de retur când upgrade-urile de schemă sau contrapărți noi intră în sferă.</td>
        </tr>
    </tbody>
  </table>
</div>

## Exemplu XML comentat

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### Comentarii pe câmpuri

- `OrgnlInstrId`: Acesta trebuie să indice tranzacția decontată care este returnată.
- `RtrdIntrBkSttlmAmt`: Suma returnată trebuie să reflecte valoarea efectiv returnată, nu o sumă de business reconstruită.
- `RtrRsnInf`: Calitatea codurilor de motiv este critică pentru comunicarea cu clienții în sistemele ulterioare și pentru rutarea operațională.

## Compară pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="Compară pacs.004 vs pacs.007">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensiune</th>
        <th>pacs.004.001.11</th>
        <th>Mesaj de comparație</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Scop principal</td>
          <td class="message-comparison-table__current">Returnarea fondurilor deja decontate</td>
          <td class="message-comparison-table__other">Reversarea unei plăți instruite anterior</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Inițiat de</td>
          <td class="message-comparison-table__current">Partea de primire / beneficiar</td>
          <td class="message-comparison-table__other">Partea care a inițiat instrucțiunea inițială</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direcția fluxului</td>
          <td class="message-comparison-table__current">Înapoi prin lanț</td>
          <td class="message-comparison-table__other">Înainte prin lanț</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Cel mai potrivit pentru</td>
          <td class="message-comparison-table__current">Gestionarea returului după decontare</td>
          <td class="message-comparison-table__other">Gestionarea reversărilor generate de recall, eroare sau fraudă</td>
        </tr>
    </tbody>
  </table>
</div>

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
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
          <td class="related-messages-table__id"><a href="/ro/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Debit direct de client FI-la-FI</td>
          <td class="related-messages-table__overview">Mesajul pacs.003 este schimbat între instituții financiare pentru a executa o instrucțiune de debitare directă a clientului. Permite băncii creditorului să colecteze fonduri de la banca debitorului în numele creditorului.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ro/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Raport de stare a plății FI-la-FI</td>
          <td class="related-messages-table__overview">Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată.</td>
        </tr>
    </tbody>
  </table>
</div>

