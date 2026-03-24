---
title: pacs.010.001.05 | Addebito diretto tra istituzioni finanziarie | pacs008
description: Il messaggio pacs.010 viene utilizzato tra istituti finanziari per transazioni di addebito diretto sul conto proprio dell'istituto. Consente a un istituto...
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Addebito diretto tra istituzioni finanziarie

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
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
          <td class="message-metadata-table__label"><strong>Nome ISO</strong></td>
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Panoramica

Il messaggio pacs.010 viene utilizzato tra istituti finanziari per transazioni di addebito diretto sul conto proprio dell'istituto. Consente a un istituto di raccogliere fondi direttamente dal conto di un altro istituto.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 2025-02-27; i collegamenti alle fonti sono riportati di seguito.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e informazioni di regolamento
- **DrctDbtTxInf** — Informazioni sulla transazione di addebito diretto con importo di riscossione
- **Cdtr / CdtrAgt** — Identificazione dell'istituto creditore e del suo agente
- **Dbtr / DbtrAgt** — Identificazione dell'istituto debitore e del suo agente
- **IntrBkSttlmAmt** — Importo di regolamento interbancario nella valuta di regolamento

## Contesto di business

- Supporta la riscossione interbancaria tramite addebito diretto tra istituti finanziari
- Utilizzato per la riscossione di commissioni, richieste di margine e obblighi di regolamento istituzionale
- Richiede accordi bilaterali prestabiliti tra gli istituti partecipanti
- Essenziale per la gestione della liquidità istituzionale e i cicli di regolamento interbancario

<div class="operational-matrix-table" tabindex="0" aria-label="Elementi di dati chiave Contesto di business">
  <table>
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
          <td class="operational-matrix-table__right">Supporta la riscossione interbancaria tramite addebito diretto tra istituti finanziari</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Informazioni sulla transazione di addebito diretto con importo di riscossione</td>
          <td class="operational-matrix-table__right">Utilizzato per la riscossione di commissioni, richieste di margine e obblighi di regolamento istituzionale</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identificazione dell&#39;istituto creditore e del suo agente</td>
          <td class="operational-matrix-table__right">Richiede accordi bilaterali prestabiliti tra gli istituti partecipanti</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identificazione dell&#39;istituto debitore e del suo agente</td>
          <td class="operational-matrix-table__right">Essenziale per la gestione della liquidità istituzionale e i cicli di regolamento interbancario</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Importo di regolamento interbancario nella valuta di regolamento</td>
          <td class="operational-matrix-table__right">L&#39;istituto creditore invia pacs.010 all&#39;istituto debitore per raccogliere fondi in base a un accordo prestabilito. L&#39;istituto debitore convalida la richiesta e regola o rifiuta l&#39;addebito diretto.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contesto CBPR+ e schemi

- Sostituisce elementi di MT204 per l'elaborazione degli addebiti diretti interbancari
- L'identificazione strutturata delle parti segue gli stessi requisiti degli altri messaggi pacs
- La validazione degli identificativi istituzionali (BIC, LEI) è obbligatoria
- Incluso nei piani di adozione completa di ISO 20022 tra le infrastrutture di mercato

## Flusso del messaggio

L'istituto creditore invia pacs.010 all'istituto debitore per raccogliere fondi in base a un accordo prestabilito. L'istituto debitore convalida la richiesta e regola o rifiuta l'addebito diretto.

## Tabella delle differenze di versione

<div class="version-diff-table" tabindex="0" aria-label="Tabella delle differenze di versione">
  <table>
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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">Implementazione attuale in pacs008</td>
          <td class="version-diff-table__takeaway">Punto di riferimento per il supporto agli addebiti diretti tra istituzioni nel progetto attuale.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">Revisione successiva del catalogo</td>
          <td class="version-diff-table__takeaway">Review before adopting newer infrastructure requirements.</td>
        </tr>
    </tbody>
  </table>
</div>

## Esempio XML commentato

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

### Commenti sui campi

- `InstrId`: Use an identifier that links back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need clear bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly. This is not a retail-customer debit model.

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

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
          <td class="related-messages-table__id"><a href="/it/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Bonifico tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell&#39;istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/it/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rapporto di stato del pagamento tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un&#39;istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all&#39;interno di un messaggio di pagamento.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/it/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Addebito diretto cliente tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.003 viene scambiato tra istituti finanziari per eseguire un&#39;istruzione di addebito diretto del cliente. Consente alla banca del creditore di raccogliere fondi dalla banca del debitore per conto del creditore.</td>
        </tr>
    </tbody>
  </table>
</div>

