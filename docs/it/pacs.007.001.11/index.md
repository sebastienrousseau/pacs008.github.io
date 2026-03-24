---
title: pacs.007.001.11 | Storno di pagamento tra istituzioni finanziarie | pacs008
description: Il messaggio pacs.007 viene utilizzato per stornare un'istruzione di pagamento precedentemente inviata che non è ancora stata regolata o per richiedere lo...
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — Storno di pagamento tra istituzioni finanziarie

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Panoramica

Il messaggio pacs.007 viene utilizzato per stornare un'istruzione di pagamento precedentemente inviata che non è ancora stata regolata o per richiedere lo storno di un pagamento regolato. A differenza di pacs.004 (restituzione), è avviato dall'agente ordinante originale.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 2025-02-27; i collegamenti alle fonti sono riportati di seguito.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione
- **TxInf** — Informazioni sulla transazione con importo dello storno e parti coinvolte
- **OrgnlGrpInf** — Informazioni sul gruppo originale con riferimento al messaggio di origine
- **RvslRsnInf** — Informazioni sul motivo dello storno con codici motivo strutturati
- **OrgnlTxRef** — Riferimento alla transazione originale per la tracciabilità end-to-end

## Contesto di business

- Avviato quando il mittente originale identifica un errore prima o dopo il regolamento
- Utilizzato in scenari di frode in cui è richiesto uno storno rapido
- Supporta lo storno sia totale che parziale degli importi del pagamento originale
- Trasporta codici motivo di storno strutturati per l'elaborazione a valle

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione</td>
          <td class="operational-matrix-table__right">Avviato quando il mittente originale identifica un errore prima o dopo il regolamento</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informazioni sulla transazione con importo dello storno e parti coinvolte</td>
          <td class="operational-matrix-table__right">Utilizzato in scenari di frode in cui è richiesto uno storno rapido</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informazioni sul gruppo originale con riferimento al messaggio di origine</td>
          <td class="operational-matrix-table__right">Supporta lo storno sia totale che parziale degli importi del pagamento originale</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Informazioni sul motivo dello storno con codici motivo strutturati</td>
          <td class="operational-matrix-table__right">Trasporta codici motivo di storno strutturati per l&#39;elaborazione a valle</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Riferimento alla transazione originale per la tracciabilità end-to-end</td>
          <td class="operational-matrix-table__right">L&#39;agente ordinante (mittente originale) invia pacs.007 in avanti attraverso la catena di pagamento per stornare un pagamento precedentemente istruito. Ogni agente elabora l&#39;istruzione di storno e adegua il regolamento di conseguenza.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contesto CBPR+ e schemi

- Si distingue da pacs.004 per la direzione — lo storno procede in avanti dall'ordinante, la restituzione procede all'indietro dal beneficiario
- CBPR+ richiede l'associazione con gli identificativi del messaggio originale per l'abbinamento automatico
- I codici motivo strutturati sostituiscono le narrative in testo libero dei messaggi MT legacy
- Sempre più utilizzato nei flussi di lavoro di richiamo dei pagamenti istantanei e prevenzione delle frodi

## Flusso del messaggio

L'agente ordinante (mittente originale) invia pacs.007 in avanti attraverso la catena di pagamento per stornare un pagamento precedentemente istruito. Ogni agente elabora l'istruzione di storno e adegua il regolamento di conseguenza.

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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">Implementazione attuale in pacs008</td>
          <td class="version-diff-table__takeaway">Buona base per modellare i flussi di storno.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">Revisioni successive del catalogo</td>
          <td class="version-diff-table__takeaway">Check later revisions for current market-infrastructure alignment.</td>
        </tr>
    </tbody>
  </table>
</div>

## Esempio XML commentato

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

### Commenti sui campi

- `MsgId`: La reversa stessa ha bisogno di un proprio identificatore sicuro per l'audit.
- `OrgnlInstrId`: Conserva il riferimento di pagamento originale per evitare rotture nella riconciliazione.
- `RvslRsnInf`: Usa motivi di reversa strutturati in modo che i casi di frode, errore e pagamento duplicato possano essere instradati in modo diverso.

## Confrontare pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="Confrontare pacs.007 vs pacs.004">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensione</th>
        <th>pacs.007.001.11</th>
        <th>Messaggio di confronto</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Scopo principale</td>
          <td class="message-comparison-table__current">Reverse a previously instructed payment</td>
          <td class="message-comparison-table__other">Return settled funds</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Original instructing side</td>
          <td class="message-comparison-table__other">Receiving / beneficiary side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Forward through the chain</td>
          <td class="message-comparison-table__other">Back through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Più adatto a</td>
          <td class="message-comparison-table__current">Gestione delle inversioni dovute a recall, errore o frode</td>
          <td class="message-comparison-table__other">Gestione dei resi dopo il regolamento</td>
        </tr>
    </tbody>
  </table>
</div>

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/it/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Bonifico cliente tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.008 è l&#39;istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene informazioni su debitore, creditore, importo e dettagli di rimessa per una o più transazioni di bonifico.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/it/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Reso di pagamento</td>
          <td class="related-messages-table__overview">Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un pagamento non può essere applicato, è stato inviato per errore o viene richiamato dall&#39;istituto di origine.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/it/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rapporto di stato del pagamento tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un&#39;istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all&#39;interno di un messaggio di pagamento.</td>
        </tr>
    </tbody>
  </table>
</div>

