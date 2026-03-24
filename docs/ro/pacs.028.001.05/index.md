---
title: pacs.028.001.05 | Cerere de stare a plății FI-la-FI | pacs008
description: Mesajul pacs.028 este trimis de o instituție financiară pentru a solicita statusul unei instrucțiuni de plată trimise anterior. Permite urmărirea...
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — Cerere de stare a plății FI-la-FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
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

Mesajul pacs.028 este trimis de o instituție financiară pentru a solicita statusul unei instrucțiuni de plată trimise anterior. Permite urmărirea proactivă a procesării plăților fără a aștepta un raport de status nesolicitat.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 2025-02-27; linkurile către surse sunt mai jos.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu identificarea mesajului și marca temporală de creare
- **TxInf** — Informații privind tranzacția care identifică plata despre care se solicită informații
- **OrgnlGrpInf** — Informații ale grupului original cu referință la mesajul sursă
- **OrgnlInstrId** — Identificarea instrucțiunii originale din plata sursă
- **OrgnlEndToEndId** — Identificarea de la un capăt la altul originală pentru trasabilitate

## Context de afaceri

- Permite interogarea proactivă a statusului pentru instrucțiunile de plată în tranzit
- Susține echipele operaționale în investigarea plăților întârziate sau lipsă
- Completează pacs.002 prin inițierea comunicării de status în loc de așteptare
- Utilizat în fluxurile de gestionare a excepțiilor și monitorizare a SLA

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
          <td class="operational-matrix-table__right">Permite interogarea proactivă a statusului pentru instrucțiunile de plată în tranzit</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informații privind tranzacția care identifică plata despre care se solicită informații</td>
          <td class="operational-matrix-table__right">Susține echipele operaționale în investigarea plăților întârziate sau lipsă</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informații ale grupului original cu referință la mesajul sursă</td>
          <td class="operational-matrix-table__right">Completează pacs.002 prin inițierea comunicării de status în loc de așteptare</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — Identificarea instrucțiunii originale din plata sursă</td>
          <td class="operational-matrix-table__right">Utilizat în fluxurile de gestionare a excepțiilor și monitorizare a SLA</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — Identificarea de la un capăt la altul originală pentru trasabilitate</td>
          <td class="operational-matrix-table__right">Agentul ordonator trimite pacs.028 agentului instruit pentru a solicita statusul unei plăți specifice. Agentul instruit răspunde cu un pacs.002 care conține statusul curent de procesare.</td>
        </tr>
    </tbody>
  </table>
</div>

## Context CBPR+ și scheme de plată

- Înlocuiește modelele de interogare a statusului MT199 și interogările manuale de mesaje SWIFT
- CBPR+ suportă cereri de status structurate legate de identificatorii mesajului original
- Urmărirea bazată pe UETR prin gpi reduce necesitatea interogărilor manuale
- Din ce în ce mai integrat în tablourile de bord automatizate pentru operațiunile de plăți

## Fluxul mesajului

Agentul ordonator trimite pacs.028 agentului instruit pentru a solicita statusul unei plăți specifice. Agentul instruit răspunde cu un pacs.002 care conține statusul curent de procesare.

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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">Implementarea curentă în pacs008</td>
          <td class="version-diff-table__takeaway">Potrivit pentru modelarea curentă a cererilor de status.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">Revizie ulterioară a catalogului</td>
          <td class="version-diff-table__takeaway">Verifică revizia mai nouă a catalogului pentru planificarea interoperabilității viitoare.</td>
        </tr>
    </tbody>
  </table>
</div>

## Exemplu XML comentat

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

### Comentarii pe câmpuri

- `MsgId`: Cererea în sine are nevoie de un identificator auditabil distinct de plata de bază.
- `OrgnlInstrId`: Folosește identificatorul sursă exact din instrucțiunea originală pentru a maximiza acuratețea potrivirii.
- `OrgnlEndToEndId`: Includerea trasabilității clientului ajută echipele operaționale să reconcilieze mai rapid interogarea.

## Compară pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="Compară pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensiune</th>
        <th>pacs.028.001.05</th>
        <th>Mesaj de comparație</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Scop principal</td>
          <td class="message-comparison-table__current">Solicită statusul</td>
          <td class="message-comparison-table__other">Raportează statusul</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Cine începe interacțiunea</td>
          <td class="message-comparison-table__current">Instituția care solicită statusul</td>
          <td class="message-comparison-table__other">Instituția care trimite statusul</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Postură operațională</td>
          <td class="message-comparison-table__current">Interogare bazată pe excepție</td>
          <td class="message-comparison-table__other">Raportare bazată pe eveniment</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Presupunere greșită de evitat</td>
          <td class="message-comparison-table__current">Că ar trebui trimis în mod obișnuit pentru fiecare plată</td>
          <td class="message-comparison-table__other">Că elimină nevoia de management proactiv al cazurilor</td>
        </tr>
    </tbody>
  </table>
</div>

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/ro/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Raport de stare a plății FI-la-FI</td>
          <td class="related-messages-table__overview">Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată.</td>
        </tr>
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
    </tbody>
  </table>
</div>

