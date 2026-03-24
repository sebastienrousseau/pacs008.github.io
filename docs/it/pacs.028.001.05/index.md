---
title: pacs.028.001.05 | Richiesta di stato del pagamento tra istituzioni finanziarie | pacs008
description: Il messaggio pacs.028 viene inviato da un istituto finanziario per richiedere lo stato di un'istruzione di pagamento precedentemente inviata. Consente il...
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — Richiesta di stato del pagamento tra istituzioni finanziarie

| | |
|---|---|
| **Nome ISO** | FIToFIPaymentStatusRequestV05 |
| **Stato di registrazione** | Registered |
| **Anno** | 2019 |
| **Versione** | 5 |

## Panoramica

Il messaggio pacs.028 viene inviato da un istituto finanziario per richiedere lo stato di un'istruzione di pagamento precedentemente inviata. Consente il tracciamento proattivo dell'elaborazione dei pagamenti senza attendere un rapporto di stato non richiesto.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 2025-02-27; i collegamenti alle fonti sono riportati di seguito.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione
- **TxInf** — Informazioni sulla transazione che identificano il pagamento oggetto dell'indagine
- **OrgnlGrpInf** — Informazioni sul gruppo originale con riferimento al messaggio di origine
- **OrgnlInstrId** — Identificazione dell'istruzione originale dal pagamento di origine
- **OrgnlEndToEndId** — Identificazione end-to-end originale per la tracciabilità

## Contesto di business

- Consente l'indagine proattiva sullo stato delle istruzioni di pagamento in transito
- Supporta i team operativi nell'indagine su pagamenti ritardati o mancanti
- Integra pacs.002 avviando la comunicazione sullo stato anziché attendere
- Utilizzato nei flussi di lavoro di gestione delle eccezioni e monitoraggio degli SLA

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
          <td class="operational-matrix-table__left">**GrpHdr** — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione</td>
          <td class="operational-matrix-table__right">Consente l&#39;indagine proattiva sullo stato delle istruzioni di pagamento in transito</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**TxInf** — Informazioni sulla transazione che identificano il pagamento oggetto dell&#39;indagine</td>
          <td class="operational-matrix-table__right">Supporta i team operativi nell&#39;indagine su pagamenti ritardati o mancanti</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlGrpInf** — Informazioni sul gruppo originale con riferimento al messaggio di origine</td>
          <td class="operational-matrix-table__right">Integra pacs.002 avviando la comunicazione sullo stato anziché attendere</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlInstrId** — Identificazione dell&#39;istruzione originale dal pagamento di origine</td>
          <td class="operational-matrix-table__right">Utilizzato nei flussi di lavoro di gestione delle eccezioni e monitoraggio degli SLA</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlEndToEndId** — Identificazione end-to-end originale per la tracciabilità</td>
          <td class="operational-matrix-table__right">L&#39;agente ordinante invia pacs.028 all&#39;agente incaricato per richiedere lo stato di un pagamento specifico. L&#39;agente incaricato risponde con un pacs.002 contenente lo stato di elaborazione attuale.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contesto CBPR+ e schemi

- Sostituisce i modelli di richiesta di stato MT199 e le interrogazioni manuali dei messaggi SWIFT
- CBPR+ supporta richieste di stato strutturate collegate agli identificativi del messaggio originale
- Il tracciamento basato su UETR tramite gpi riduce la necessità di indagini manuali
- Sempre più integrato nei cruscotti automatizzati per le operazioni di pagamento

## Flusso del messaggio

L'agente ordinante invia pacs.028 all'agente incaricato per richiedere lo stato di un pagamento specifico. L'agente incaricato risponde con un pacs.002 contenente lo stato di elaborazione attuale.

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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">Implementazione attuale in pacs008</td>
          <td class="version-diff-table__takeaway">Adatto alla modellazione attuale delle richieste di stato.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">Revisione successiva del catalogo</td>
          <td class="version-diff-table__takeaway">Controlla la revisione di catalogo piu recente per la pianificazione futura dell&#39;interoperabilita.</td>
        </tr>
    </tbody>
  </table>
</div>

## Esempio XML commentato

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

### Commenti sui campi

- `MsgId`: La richiesta stessa ha bisogno di un identificatore verificabile distinto dal pagamento sottostante.
- `OrgnlInstrId`: Usa l'identificatore sorgente esatto dell'istruzione originale per massimizzare la precisione dell'abbinamento.
- `OrgnlEndToEndId`: Includere la tracciabilità lato cliente aiuta i team operativi a riconciliare più rapidamente la richiesta.

## Confrontare pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="Confrontare pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensione</th>
        <th>pacs.028.001.05</th>
        <th>Messaggio di confronto</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Scopo principale</td>
          <td class="message-comparison-table__current">Richiesta di stato</td>
          <td class="message-comparison-table__other">Rapporto di stato</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Chi avvia l&#39;interazione</td>
          <td class="message-comparison-table__current">L&#39;istituzione che richiede lo stato</td>
          <td class="message-comparison-table__other">L&#39;istituzione che invia lo stato</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Impostazione operativa</td>
          <td class="message-comparison-table__current">Richiesta guidata da eccezioni</td>
          <td class="message-comparison-table__other">Reporting guidato da evento</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Ipotesi errata da evitare</td>
          <td class="message-comparison-table__current">Che dovrebbe essere inviato di routine per ogni pagamento</td>
          <td class="message-comparison-table__other">Che elimina la necessita di una gestione proattiva dei casi</td>
        </tr>
    </tbody>
  </table>
</div>

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/it/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rapporto di stato del pagamento tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un&#39;istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all&#39;interno di un messaggio di pagamento.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/it/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Bonifico cliente tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.008 è l&#39;istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene informazioni su debitore, creditore, importo e dettagli di rimessa per una o più transazioni di bonifico.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/it/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Bonifico tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell&#39;istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità.</td>
        </tr>
    </tbody>
  </table>
</div>

