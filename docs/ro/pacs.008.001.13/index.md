---
title: "pacs.008.001.13 | Transfer de credit client FI-la-FI | pacs008"
description: Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține...
lang: ro-RO
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — Transfer de credit client FI-la-FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Stare de înregistrare</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>An</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Versiune</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## Prezentare generală

Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține informații despre debitor, creditor, sumă și detalii de remitere pentru una sau mai multe tranzacții de transfer de credit.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 2025-02-27; linkurile către surse sunt mai jos.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu ID-ul mesajului, data creării, numărul de tranzacții și informații de decontare
- **CdtTrfTxInf** — Informații privind tranzacția de transfer de credit cu sumă, comisioane și scop
- **Dbtr / DbtrAgt** — Identificarea debitorului și a agentului debitorului cu detaliile contului
- **Cdtr / CdtrAgt** — Identificarea creditorului și a agentului creditorului cu detaliile contului
- **RmtInf** — Informații de remitere pentru referințe de plată structurate sau nestructurate

## Context de afaceri

- Mesajul principal pentru transferurile de credit transfrontaliere și interne inițiate de client
- Utilizat în SEPA SCT, SEPA Instant, CBPR+ și sistemele de compensare naționale
- Conține informații de remitere structurate pentru a susține reconcilierea automată
- Suportă metode de decontare serială, prin acoperire și directă pentru lanțuri de plăți cu mai multe etape

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Antet de grup cu ID-ul mesajului, data creării, numărul de tranzacții și informații de decontare</td>
          <td class="operational-matrix-table__right">Mesajul principal pentru transferurile de credit transfrontaliere și interne inițiate de client</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Informații privind tranzacția de transfer de credit cu sumă, comisioane și scop</td>
          <td class="operational-matrix-table__right">Utilizat în SEPA SCT, SEPA Instant, CBPR+ și sistemele de compensare naționale</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identificarea debitorului și a agentului debitorului cu detaliile contului</td>
          <td class="operational-matrix-table__right">Conține informații de remitere structurate pentru a susține reconcilierea automată</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identificarea creditorului și a agentului creditorului cu detaliile contului</td>
          <td class="operational-matrix-table__right">Suportă metode de decontare serială, prin acoperire și directă pentru lanțuri de plăți cu mai multe etape</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Informații de remitere pentru referințe de plată structurate sau nestructurate</td>
          <td class="operational-matrix-table__right">Agentul debitorului creează un pacs.008 și îl trimite agentului creditorului (direct sau prin intermediari). Fiecare agent din lanț validează, îmbogățește și transmite instrucțiunea până când agentul creditorului creditează contul beneficiarului.</td>
        </tr>
    </tbody>
  </table>
</div>

## Context CBPR+ și scheme de plată

- Înlocuiește MT103 și MT103+ pentru transferurile de credit transfrontaliere ale clienților
- Termenul limită pentru adresele structurate din noiembrie 2026 se aplică tuturor adreselor poștale ale părților
- SWIFT gpi necesită pacs.008 pentru urmărirea de la un capăt la altul bazată pe UETR
- 13 revizuiri reflectă evoluția continuă a schemei în infrastructurile de piață

## Fluxul mesajului

Agentul debitorului creează un pacs.008 și îl trimite agentului creditorului (direct sau prin intermediari). Fiecare agent din lanț validează, îmbogățește și transmite instrucțiunea până când agentul creditorului creditează contul beneficiarului.

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">Revizii timpurii</td>
          <td class="version-diff-table__takeaway">Util mai ales pentru analiza migrării din sisteme vechi și pentru contextul istoric al versiunilor.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">Revizii moderne anterioare celei curente</td>
          <td class="version-diff-table__takeaway">Acestea sunt reviziile care apar cel mai probabil în proiecte recente de migrare sau coexistență.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">Revizia curentă a catalogului</td>
          <td class="version-diff-table__takeaway">Folosește această versiune pentru planificarea implementării curente, verificând în continuare regulile schemei și pregătirea contrapărților.</td>
        </tr>
    </tbody>
  </table>
</div>

## Exemplu XML comentat

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### Comentarii pe câmpuri

- `MsgId`: Acesta ar trebui să identifice plicul mesajului, nu referința de plată a clientului final.
- `EndToEndId`: Păstrează stabilă trasabilitatea orientată spre client în sistemele ulterioare ori de câte ori este posibil.
- `UETR`: Folosește acest câmp în mod consecvent în medii transfrontaliere și cu urmărire intensă; nu îl genera ad hoc în etapele ulterioare ale procesului.
- `IntrBkSttlmAmt`: Validează suma și moneda prin reguli de business înainte de validarea schemei.
- `Dbtr` / `Cdtr`: Calitatea datelor despre părți, structura adresei și identificatorii sunt de obicei principalii factori ai volumului de corecții.

## Compară pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="Compară pacs.008 vs pacs.009">
  <table>
    <caption>Compară pacs.008 vs pacs.009</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensiune</th>
        <th>pacs.008.001.13</th>
        <th>Mesaj de comparație</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Scop principal</td>
          <td class="message-comparison-table__current">Transfer de credit al clientului</td>
          <td class="message-comparison-table__other">Transfer de credit în cont propriu al instituției sau etapă de acoperire</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Responsabil de business</td>
          <td class="message-comparison-table__current">Operațiuni de plăți ale clienților</td>
          <td class="message-comparison-table__other">Operațiuni de trezorerie / corespondent / finanțare</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Asocieri tipice</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004 și uneori fluxuri pacs.008 asociate</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Presupunere greșită de evitat</td>
          <td class="message-comparison-table__current">Că toate transferurile bancă-la-bancă aparțin aici</td>
          <td class="message-comparison-table__other">Că poate înlocui instrucțiunile de transfer de credit ale clientului</td>
        </tr>
    </tbody>
  </table>
</div>

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## Versiuni acceptate

<div class="message-versions-table" tabindex="0" aria-label="Versiuni acceptate">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Versiune</th>
        <th>Stare</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>Curent</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/ro/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Retur de plată</td>
          <td class="related-messages-table__overview">Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi aplicată, a fost trimisă din eroare sau este reclamată de instituția inițiatoare.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ro/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Transfer de credit între instituții financiare</td>
          <td class="related-messages-table__overview">Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în numele unui client. Suportă finanțarea interbancară, plățile de acoperire și gestionarea lichidității.</td>
        </tr>
    </tbody>
  </table>
</div>

