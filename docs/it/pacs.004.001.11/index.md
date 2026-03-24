---
title: pacs.004.001.11 | Reso di pagamento | pacs008
description: Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un...
lang: it-IT
lastUpdated: true
image: /logo.svg
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — Reso di pagamento

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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

Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un pagamento non può essere applicato, è stato inviato per errore o viene richiamato dall'istituto di origine.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 2025-02-27; i collegamenti alle fonti sono riportati di seguito.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione
- **TxInf** — Informazioni sulla transazione con importo della restituzione e parti coinvolte
- **OrgnlGrpInf** — Informazioni sul gruppo originale con collegamento al messaggio di origine
- **RtrRsnInf** — Informazioni sul motivo della restituzione con codici motivo strutturati
- **OrgnlTxRef** — Riferimento alla transazione originale per abbinamento e riconciliazione

## Contesto di business

- Gestisce le restituzioni post-regolamento quando il conto del beneficiario non può essere accreditato
- Supporta scenari di richiamo in cui l'ordinante richiede la restituzione dei fondi
- Trasporta codici motivo di restituzione strutturati per la trasparenza normativa e operativa
- Si applica sia alle restituzioni di bonifici (pacs.008) che alle restituzioni di addebiti diretti (pacs.003)

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione</td>
          <td class="operational-matrix-table__right">Gestisce le restituzioni post-regolamento quando il conto del beneficiario non può essere accreditato</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informazioni sulla transazione con importo della restituzione e parti coinvolte</td>
          <td class="operational-matrix-table__right">Supporta scenari di richiamo in cui l&#39;ordinante richiede la restituzione dei fondi</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informazioni sul gruppo originale con collegamento al messaggio di origine</td>
          <td class="operational-matrix-table__right">Trasporta codici motivo di restituzione strutturati per la trasparenza normativa e operativa</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Informazioni sul motivo della restituzione con codici motivo strutturati</td>
          <td class="operational-matrix-table__right">Si applica sia alle restituzioni di bonifici (pacs.008) che alle restituzioni di addebiti diretti (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Riferimento alla transazione originale per abbinamento e riconciliazione</td>
          <td class="operational-matrix-table__right">L&#39;agente incaricato invia pacs.004 attraverso la catena di pagamento per restituire fondi precedentemente regolati. Ogni agente nella catena elabora la restituzione e riaccredita i conti pertinenti.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contesto CBPR+ e schemi

- Sostituisce MT103 RETURN e la messaggistica di restituzione con metodo copertura
- I codici motivo di restituzione sono standardizzati e leggibili automaticamente secondo ISO 20022
- CBPR+ richiede i dati completi di riferimento della transazione originale per l'abbinamento
- Il tracciamento SWIFT gpi si estende alle transazioni di restituzione per la visibilità end-to-end

## Flusso del messaggio

L'agente incaricato invia pacs.004 attraverso la catena di pagamento per restituire fondi precedentemente regolati. Ogni agente nella catena elabora la restituzione e riaccredita i conti pertinenti.

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">Implementazione attuale in pacs008</td>
          <td class="version-diff-table__takeaway">Si allinea ai modelli attuali per i messaggi di ritorno del pagamento.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">Revisioni successive del catalogo</td>
          <td class="version-diff-table__takeaway">Rivedi le revisioni successive dei messaggi di ritorno quando aggiornamenti di schema o nuove controparti rientrano nell&#39;ambito.</td>
        </tr>
    </tbody>
  </table>
</div>

## Esempio XML commentato

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

### Commenti sui campi

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: Kualitas kode alasan sangat penting untuk komunikasi lanjutan kepada nasabah dan pengalihan operasional.

## Confrontare pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="Confrontare pacs.004 vs pacs.007">
  <table>
    <caption>Confrontare pacs.004 vs pacs.007</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensione</th>
        <th>pacs.004.001.11</th>
        <th>Messaggio di confronto</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Scopo principale</td>
          <td class="message-comparison-table__current">Return settled funds</td>
          <td class="message-comparison-table__other">Reverse a previously instructed payment</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Receiving / beneficiary side</td>
          <td class="message-comparison-table__other">Original instructing side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Back through the chain</td>
          <td class="message-comparison-table__other">Forward through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Più adatto a</td>
          <td class="message-comparison-table__current">Gestione dei resi dopo il regolamento</td>
          <td class="message-comparison-table__other">Gestione delle inversioni dovute a recall, errore o frode</td>
        </tr>
    </tbody>
  </table>
</div>

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
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
          <td class="related-messages-table__id"><a href="/it/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Addebito diretto cliente tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.003 viene scambiato tra istituti finanziari per eseguire un&#39;istruzione di addebito diretto del cliente. Consente alla banca del creditore di raccogliere fondi dalla banca del debitore per conto del creditore.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/it/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rapporto di stato del pagamento tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un&#39;istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all&#39;interno di un messaggio di pagamento.</td>
        </tr>
    </tbody>
  </table>
</div>

