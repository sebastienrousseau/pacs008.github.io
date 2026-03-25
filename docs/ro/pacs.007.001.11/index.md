---
title: "pacs.007.001.11 | Reversare de plată FI-la-FI | pacs008"
description: Mesajul pacs.007 este utilizat pentru a inversa o instrucțiune de plată trimisă anterior care nu a fost încă decontată sau pentru a solicita inversarea...
lang: ro-RO
lastUpdated: true
image: /logo.svg
faq:
  - question: "Este pacs.007 doar pentru scenarii de fraudă?"
    answer: "Nu. Frauda este un caz de utilizare major, dar orice nevoie din partea instructorului de a inversa o plată îl poate declanșa."
  - question: "Poate fi tratat ca o returnare normală?"
    answer: "Nu. Sincronizarea inversării, capturarea motivului și reconcilierea diferă semnificativ de returnări."
---

# pacs.007.001.11 — Reversare de plată FI-la-FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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

Mesajul pacs.007 este utilizat pentru a inversa o instrucțiune de plată trimisă anterior care nu a fost încă decontată sau pentru a solicita inversarea unei plăți decontate. Spre deosebire de pacs.004 (returnare), este inițiat de agentul ordonator original.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 2025-02-27; linkurile către surse sunt mai jos.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu identificarea mesajului și marca temporală de creare
- **TxInf** — Informații privind tranzacția cu suma inversării și părțile implicate
- **OrgnlGrpInf** — Informații ale grupului original cu referință la mesajul sursă
- **RvslRsnInf** — Informații privind motivul inversării cu coduri de motiv structurate
- **OrgnlTxRef** — Referința tranzacției originale pentru trasabilitate de la un capăt la altul

## Context de afaceri

- Inițiat când expeditorul original identifică o eroare înainte sau după decontare
- Utilizat în scenarii de fraudă unde este necesară inversarea rapidă
- Suportă atât inversarea totală, cât și parțială a sumelor plății originale
- Conține coduri de motiv de inversare structurate pentru procesarea în aval

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
          <td class="operational-matrix-table__right">Inițiat când expeditorul original identifică o eroare înainte sau după decontare</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informații privind tranzacția cu suma inversării și părțile implicate</td>
          <td class="operational-matrix-table__right">Utilizat în scenarii de fraudă unde este necesară inversarea rapidă</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informații ale grupului original cu referință la mesajul sursă</td>
          <td class="operational-matrix-table__right">Suportă atât inversarea totală, cât și parțială a sumelor plății originale</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Informații privind motivul inversării cu coduri de motiv structurate</td>
          <td class="operational-matrix-table__right">Conține coduri de motiv de inversare structurate pentru procesarea în aval</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Referința tranzacției originale pentru trasabilitate de la un capăt la altul</td>
          <td class="operational-matrix-table__right">Agentul ordonator (expeditorul original) trimite pacs.007 înainte prin lanțul de plăți pentru a inversa o plată instruită anterior. Fiecare agent procesează instrucțiunea de inversare și ajustează decontarea în consecință.</td>
        </tr>
    </tbody>
  </table>
</div>

## Context CBPR+ și scheme de plată

- Se deosebește de pacs.004 prin direcție — inversarea curge înainte de la inițiator, returnarea curge înapoi de la beneficiar
- CBPR+ necesită asocierea cu identificatorii mesajului original pentru potrivire automată
- Codurile de motiv structurate înlocuiesc narațiunile în text liber din mesajele MT vechi
- Utilizat din ce în ce mai mult în fluxurile de reclamare a plăților instantanee și prevenire a fraudei

## Fluxul mesajului

Agentul ordonator (expeditorul original) trimite pacs.007 înainte prin lanțul de plăți pentru a inversa o plată instruită anterior. Fiecare agent procesează instrucțiunea de inversare și ajustează decontarea în consecință.

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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">Implementarea curentă în pacs008</td>
          <td class="version-diff-table__takeaway">Bază bună pentru modelarea fluxurilor de reversare.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">Revizii ulterioare ale catalogului</td>
          <td class="version-diff-table__takeaway">Verifică reviziile ulterioare pentru alinierea cu infrastructura actuală de piață.</td>
        </tr>
    </tbody>
  </table>
</div>

## Exemplu XML comentat

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### Comentarii pe câmpuri

- `MsgId`: The reversal needs its own identifier.
- `OrgnlInstrId`: Păstrează referința originală a plății pentru a evita rupturile în reconciliere.
- `RvslRsnInf`: Use structured reversal reasons so cases can be routed correctly.

## Compară pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="Compară pacs.007 vs pacs.004">
  <table>
    <caption>Compară pacs.007 vs pacs.004</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensiune</th>
        <th>pacs.007.001.11</th>
        <th>Mesaj de comparație</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Scop principal</td>
          <td class="message-comparison-table__current">Reversarea unei plăți instruite anterior</td>
          <td class="message-comparison-table__other">Returnarea fondurilor deja decontate</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Inițiat de</td>
          <td class="message-comparison-table__current">Partea care a inițiat instrucțiunea inițială</td>
          <td class="message-comparison-table__other">Partea de primire / beneficiar</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direcția fluxului</td>
          <td class="message-comparison-table__current">Înainte prin lanț</td>
          <td class="message-comparison-table__other">Înapoi prin lanț</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Cel mai potrivit pentru</td>
          <td class="message-comparison-table__current">Gestionarea reversărilor generate de recall, eroare sau fraudă</td>
          <td class="message-comparison-table__other">Gestionarea returului după decontare</td>
        </tr>
    </tbody>
  </table>
</div>

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/ro/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Transfer de credit client FI-la-FI</td>
          <td class="related-messages-table__overview">Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține informații despre debitor, creditor, sumă și detalii de remitere pentru una sau mai multe tranzacții de transfer de credit.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ro/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Retur de plată</td>
          <td class="related-messages-table__overview">Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi aplicată, a fost trimisă din eroare sau este reclamată de instituția inițiatoare.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ro/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Raport de stare a plății FI-la-FI</td>
          <td class="related-messages-table__overview">Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată.</td>
        </tr>
    </tbody>
  </table>
</div>

