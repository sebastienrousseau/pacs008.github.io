---
title: pacs.009.001.10 | Bonifico tra istituzioni finanziarie | pacs008
description: Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell'istituto anziché per...
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Bonifico tra istituzioni finanziarie

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## Panoramica

Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell'istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 2025-02-27; i collegamenti alle fonti sono riportati di seguito.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e informazioni di regolamento
- **CdtTrfTxInf** — Informazioni sulla transazione di bonifico con importo di regolamento interbancario
- **Dbtr / DbtrAgt** — Identificazione dell'istituto debitore e del suo agente
- **Cdtr / CdtrAgt** — Identificazione dell'istituto creditore e del suo agente
- **IntrBkSttlmAmt** — Importo di regolamento interbancario nella valuta di regolamento

## Contesto di business

- Utilizzato per trasferimenti bancari su conto proprio e pagamenti di copertura
- Supporta la gestione della liquidità tra partner di corrispondenza bancaria
- Trasporta la tratta di copertura dei bonifici della clientela regolati con metodo copertura
- Consente operazioni di tesoreria e provvista tra istituti finanziari

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
          <td class="operational-matrix-table__right">Utilizzato per trasferimenti bancari su conto proprio e pagamenti di copertura</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Informazioni sulla transazione di bonifico con importo di regolamento interbancario</td>
          <td class="operational-matrix-table__right">Supporta la gestione della liquidità tra partner di corrispondenza bancaria</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identificazione dell&#39;istituto debitore e del suo agente</td>
          <td class="operational-matrix-table__right">Trasporta la tratta di copertura dei bonifici della clientela regolati con metodo copertura</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identificazione dell&#39;istituto creditore e del suo agente</td>
          <td class="operational-matrix-table__right">Consente operazioni di tesoreria e provvista tra istituti finanziari</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Importo di regolamento interbancario nella valuta di regolamento</td>
          <td class="operational-matrix-table__right">L&#39;istituto debitore invia pacs.009 all&#39;istituto creditore per trasferire i propri fondi. Per i pagamenti con metodo copertura, pacs.009 fornisce la tratta di provvista mentre pacs.008 trasporta l&#39;istruzione del cliente attraverso un percorso separato.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contesto CBPR+ e schemi

- Sostituisce MT202 e MT202COV per i trasferimenti tra istituti
- I flussi con metodo copertura associano pacs.009 all'istruzione cliente pacs.008 sottostante
- Dati strutturati sulle parti e identificazione LEI sempre più richiesti
- SWIFT gpi copre pacs.009 per la trasparenza nella corrispondenza bancaria

## Flusso del messaggio

L'istituto debitore invia pacs.009 all'istituto creditore per trasferire i propri fondi. Per i pagamenti con metodo copertura, pacs.009 fornisce la tratta di provvista mentre pacs.008 trasporta l'istruzione del cliente attraverso un percorso separato.

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">Implementazione attuale in pacs008</td>
          <td class="version-diff-table__takeaway">È coerente con il supporto attuale del progetto per i flussi di bonifico FI.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">Revisioni successive del catalogo</td>
          <td class="version-diff-table__takeaway">Importante per la pianificazione evolutiva in ambienti di banca corrispondente e pagamenti di copertura.</td>
        </tr>
    </tbody>
  </table>
</div>

## Esempio XML commentato

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Commenti sui campi

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## Confrontare pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="Confrontare pacs.009 vs pacs.008">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensione</th>
        <th>pacs.009.001.10</th>
        <th>Messaggio di confronto</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Scopo principale</td>
          <td class="message-comparison-table__current">Trasferimento di credito su conto proprio dell&#39;istituzione o gamba di copertura</td>
          <td class="message-comparison-table__other">Trasferimento di credito del cliente</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Responsabile di business</td>
          <td class="message-comparison-table__current">Operazioni di tesoreria, corrispondenza e funding</td>
          <td class="message-comparison-table__other">Operazioni di pagamento del cliente</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Abbinamenti tipici</td>
          <td class="message-comparison-table__current">flussi pacs.002, pacs.004 e pacs.008 collegati</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Ipotesi errata da evitare</td>
          <td class="message-comparison-table__current">Che sia semplicemente una pacs.008 più tecnica</td>
          <td class="message-comparison-table__other">Che possa gestire senza problemi i flussi di provvista tra istituzioni</td>
        </tr>
    </tbody>
  </table>
</div>

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/it/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rapporto di stato del pagamento tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un&#39;istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all&#39;interno di un messaggio di pagamento.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/it/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Addebito diretto tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.010 viene utilizzato tra istituti finanziari per transazioni di addebito diretto sul conto proprio dell&#39;istituto. Consente a un istituto di raccogliere fondi direttamente dal conto di un altro istituto.</td>
        </tr>
    </tbody>
  </table>
</div>

