---
title: "pacs.003.001.09 | Addebito diretto cliente tra istituzioni finanziarie | pacs008"
description: "Il messaggio pacs.003 viene scambiato tra istituti finanziari per eseguire un'istruzione di addebito diretto del cliente. Consente alla banca del..."
lang: it-IT
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.003 the direct-debit mirror of pacs.008?"
    answer: "No. It handles customer direct-debit flows, which have different mandate, timing, and exception rules."
  - question: "What matters most operationally?"
    answer: "Mandate quality, debtor-account rules, and return handling matter more than XML generation."
---

# pacs.003.001.09 — Addebito diretto cliente tra istituzioni finanziarie

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Campo</th>
        <th scope="col">Valore</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Nome ISO</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Stato di registrazione</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Anno</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Versione</strong></td>
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## Panoramica

Il messaggio pacs.003 viene scambiato tra istituti finanziari per eseguire un'istruzione di addebito diretto del cliente. Consente alla banca del creditore di raccogliere fondi dalla banca del debitore per conto del creditore.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 2025-02-27; i collegamenti alle fonti sono riportati di seguito.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e informazioni di regolamento
- **DrctDbtTxInf** — Informazioni sulla transazione di addebito diretto con importo e parti coinvolte
- **Cdtr** — Identificazione del creditore e dettagli del conto
- **CdtrAgt** — Identificazione dell'agente del creditore (istituto di incasso)
- **DbtrAgt** — Identificazione dell'agente del debitore (istituto pagante)

## Contesto di business

- Supporta gli schemi di addebito diretto SEPA Core e B2B
- Utilizzato per la riscossione di pagamenti ricorrenti come abbonamenti, bollette e rimborsi di prestiti
- Richiede un riferimento di mandato valido tra debitore e creditore
- Consente la riscossione massiva di molteplici istruzioni di addebito diretto in un unico messaggio

<div class="operational-matrix-table" tabindex="0" aria-label="Elementi di dati chiave Contesto di business">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Elementi di dati chiave</th>
        <th>Contesto di business</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Intestazione di gruppo con identificazione del messaggio e informazioni di regolamento</td>
          <td class="operational-matrix-table__right">Supporta gli schemi di addebito diretto SEPA Core e B2B</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Informazioni sulla transazione di addebito diretto con importo e parti coinvolte</td>
          <td class="operational-matrix-table__right">Utilizzato per la riscossione di pagamenti ricorrenti come abbonamenti, bollette e rimborsi di prestiti</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Identificazione del creditore e dettagli del conto</td>
          <td class="operational-matrix-table__right">Richiede un riferimento di mandato valido tra debitore e creditore</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Identificazione dell&#39;agente del creditore (istituto di incasso)</td>
          <td class="operational-matrix-table__right">Consente la riscossione massiva di molteplici istruzioni di addebito diretto in un unico messaggio</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Identificazione dell&#39;agente del debitore (istituto pagante)</td>
          <td class="operational-matrix-table__right">L&#39;agente del creditore avvia pacs.003 verso l&#39;agente del debitore per raccogliere i fondi. L&#39;agente del debitore convalida il mandato, verifica la copertura del conto e procede al regolamento o alla restituzione della transazione.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contesto CBPR+ e schemi

- I requisiti di indirizzo strutturato e identificazione delle parti si applicano ugualmente agli addebiti diretti
- I dati relativi al mandato devono essere completamente strutturati da novembre 2026
- Sostituisce nei flussi transfrontalieri i precedenti formati di addebito diretto in stile MT104
- La validazione dell'identificazione dello schema del creditore è sempre più applicata

## Flusso del messaggio

L'agente del creditore avvia pacs.003 verso l'agente del debitore per raccogliere i fondi. L'agente del debitore convalida il mandato, verifica la copertura del conto e procede al regolamento o alla restituzione della transazione.

## Tabella delle differenze di versione

<div class="version-diff-table" tabindex="0" aria-label="Tabella delle differenze di versione">
  <table>
    <caption>Tabella delle differenze di versione</caption>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Intervallo di versione</th>
        <th>Perché conta</th>
        <th>Implicazione implementativa</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">Implementazione attuale in pacs008</td>
          <td class="version-diff-table__takeaway">Utile per la modellazione dei riferimenti di addebito diretto nel progetto corrente.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">Revisioni successive del catalogo</td>
          <td class="version-diff-table__takeaway">Periksa revisi yang lebih baru untuk pembaruan mandat, status, dan interoperabilitas sebelum dipakai dalam implementasi baru.</td>
        </tr>
    </tbody>
  </table>
</div>

## Esempio XML commentato

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

### Commenti sui campi

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: Il buon esito di un addebito diretto dipende spesso piu dalla qualita del conto e del mandato che dalla struttura XML.

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

## Messaggi correlati
<div class="related-messages-table" tabindex="0" aria-label="Messaggi correlati">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Tipo di messaggio</th>
        <th>Descrizione</th>
        <th>Panoramica</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/it/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Reso di pagamento</td>
          <td class="related-messages-table__overview">Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un pagamento non può essere applicato, è stato inviato per errore o viene richiamato dall&#39;istituto di origine.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/it/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">Storno di pagamento tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.007 viene utilizzato per stornare un&#39;istruzione di pagamento precedentemente inviata che non è ancora stata regolata o per richiedere lo storno di un pagamento regolato. A differenza di pacs.004 (restituzione), è avviato dall&#39;agente ordinante originale.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/it/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rapporto di stato del pagamento tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un&#39;istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all&#39;interno di un messaggio di pagamento.</td>
        </tr>
    </tbody>
  </table>
</div>

