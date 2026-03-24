---
title: pacs.002.001.12 | Rapporto di stato del pagamento tra istituzioni finanziarie | pacs008
description: Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un'istruzione di pagamento precedentemente inviata. Fornisce...
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — Rapporto di stato del pagamento tra istituzioni finanziarie

| | |
|---|---|
| **Nome ISO** | FIToFIPaymentStatusReportV12 |
| **Stato di registrazione** | Registered |
| **Anno** | 2019 |
| **Versione** | 12 |

## Panoramica

Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un'istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all'interno di un messaggio di pagamento.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 2025-02-27; i collegamenti alle fonti sono riportati di seguito.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione
- **OrgnlGrpInfAndSts** — Informazioni e stato del gruppo originale per la reportistica a livello aggregato
- **TxInfAndSts** — Informazioni e stato della transazione per gli esiti delle singole transazioni
- **StsRsnInf** — Informazioni sul motivo dello stato con codici motivo strutturati
- **OrgnlTxRef** — Riferimento alla transazione originale che collega all'istruzione di origine

## Contesto di business

- Utilizzato per confermare il regolamento o segnalare il rifiuto di bonifici, addebiti diretti e restituzioni di pagamento
- Consente la riconciliazione tra agenti ordinanti e agenti incaricati
- Obbligatorio nei flussi CBPR+ per confermare l'elaborazione dei messaggi pacs.008 e pacs.009
- Supporta la reportistica di stato sia a livello di gruppo aggregato che a livello di singola transazione

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
          <td class="operational-matrix-table__right">Utilizzato per confermare il regolamento o segnalare il rifiuto di bonifici, addebiti diretti e restituzioni di pagamento</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlGrpInfAndSts** — Informazioni e stato del gruppo originale per la reportistica a livello aggregato</td>
          <td class="operational-matrix-table__right">Consente la riconciliazione tra agenti ordinanti e agenti incaricati</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**TxInfAndSts** — Informazioni e stato della transazione per gli esiti delle singole transazioni</td>
          <td class="operational-matrix-table__right">Obbligatorio nei flussi CBPR+ per confermare l&#39;elaborazione dei messaggi pacs.008 e pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**StsRsnInf** — Informazioni sul motivo dello stato con codici motivo strutturati</td>
          <td class="operational-matrix-table__right">Supporta la reportistica di stato sia a livello di gruppo aggregato che a livello di singola transazione</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlTxRef** — Riferimento alla transazione originale che collega all&#39;istruzione di origine</td>
          <td class="operational-matrix-table__right">L&#39;agente incaricato (destinatario) invia pacs.002 all&#39;agente ordinante (mittente) per confermare l&#39;accettazione, il regolamento o il rifiuto di un&#39;istruzione di pagamento ricevuta come pacs.008 o pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contesto CBPR+ e schemi

- Sostituisce MT199 e le narrative di stato nel campo 79 dei messaggi MT
- CBPR+ rende obbligatorio pacs.002 per tutte le comunicazioni sullo stato dei pagamenti
- I codici motivo strutturati sostituiscono le spiegazioni di rifiuto in testo libero
- L'integrazione con il tracciamento SWIFT gpi richiede pacs.002 per la trasparenza end-to-end

## Flusso del messaggio

L'agente incaricato (destinatario) invia pacs.002 all'agente ordinante (mittente) per confermare l'accettazione, il regolamento o il rifiuto di un'istruzione di pagamento ricevuta come pacs.008 o pacs.009.

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">Implementazione attuale in pacs008</td>
          <td class="version-diff-table__takeaway">Da usare quando si lavora con i modelli XML di progetto e gli artefatti di validazione attualmente supportati.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">Revisioni successive del catalogo</td>
          <td class="version-diff-table__takeaway">Esamina le revisioni ISO successive prima di avviare nuovi lavori di interoperabilita o di integrare nuove infrastrutture.</td>
        </tr>
    </tbody>
  </table>
</div>

## Esempio XML commentato

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Commenti sui campi

- `MsgId`: Usa un nuovo identificatore per il rapporto di stato stesso, non per l'istruzione di pagamento originale.
- `OrgnlInstrId`: Mantieni intatto l'identificatore dell'istruzione originale in modo che lo stato possa essere riconciliato automaticamente.
- `TxSts`: Questo e lo stato operativo; mappalo con attenzione sugli stati interni del processo invece di presumere una corrispondenza diretta.
- `StsRsnInf`: I codici motivo strutturati sono molto piu utili del testo libero per le riparazioni e l'analitica.

## Confrontare pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="Confrontare pacs.002 vs pacs.028">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensione</th>
        <th>pacs.002.001.12</th>
        <th>Messaggio di confronto</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Scopo principale</td>
          <td class="message-comparison-table__current">Rapporto di stato</td>
          <td class="message-comparison-table__other">Richiesta di stato</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Chi avvia l&#39;interazione</td>
          <td class="message-comparison-table__current">L&#39;istituzione che invia lo stato</td>
          <td class="message-comparison-table__other">L&#39;istituzione che richiede lo stato</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Impostazione operativa</td>
          <td class="message-comparison-table__current">Reporting guidato da evento</td>
          <td class="message-comparison-table__other">Richiesta guidata da eccezioni</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Ipotesi errata da evitare</td>
          <td class="message-comparison-table__current">Che la reportistica di stato sostituisca i flussi di investigazione</td>
          <td class="message-comparison-table__other">Che ogni pagamento richieda una richiesta di stato esplicita</td>
        </tr>
    </tbody>
  </table>
</div>

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


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
          <td class="related-messages-table__id"><a href="/it/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Bonifico tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell&#39;istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/it/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">Richiesta di stato del pagamento tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.028 viene inviato da un istituto finanziario per richiedere lo stato di un&#39;istruzione di pagamento precedentemente inviata. Consente il tracciamento proattivo dell&#39;elaborazione dei pagamenti senza attendere un rapporto di stato non richiesto.</td>
        </tr>
    </tbody>
  </table>
</div>

