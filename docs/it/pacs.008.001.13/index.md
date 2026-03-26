---
title: "pacs.008.001.13 | Bonifico cliente tra istituzioni finanziarie | pacs008"
description: "Il messaggio pacs.008 è l'istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene..."
lang: it-IT
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — Bonifico cliente tra istituzioni finanziarie

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Stato di registrazione</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Anno</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Versione</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## Panoramica

Il messaggio pacs.008 è l'istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene informazioni su debitore, creditore, importo e dettagli di rimessa per una o più transazioni di bonifico.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 2025-02-27; i collegamenti alle fonti sono riportati di seguito.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con ID messaggio, data di creazione, numero di transazioni e informazioni di regolamento
- **CdtTrfTxInf** — Informazioni sulla transazione di bonifico con importo, commissioni e finalità
- **Dbtr / DbtrAgt** — Identificazione del debitore e dell'agente del debitore con dettagli del conto
- **Cdtr / CdtrAgt** — Identificazione del creditore e dell'agente del creditore con dettagli del conto
- **RmtInf** — Informazioni di rimessa per riferimenti di pagamento strutturati o non strutturati

## Contesto di business

- Il messaggio principale per bonifici transfrontalieri e domestici avviati dal cliente
- Utilizzato attraverso SEPA SCT, SEPA Instant, CBPR+ e i sistemi di compensazione nazionali
- Trasporta informazioni di rimessa strutturate per supportare la riconciliazione automatica
- Supporta metodi di regolamento seriale, copertura e diretto per catene di pagamento multi-tratta

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Intestazione di gruppo con ID messaggio, data di creazione, numero di transazioni e informazioni di regolamento</td>
          <td class="operational-matrix-table__right">Il messaggio principale per bonifici transfrontalieri e domestici avviati dal cliente</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Informazioni sulla transazione di bonifico con importo, commissioni e finalità</td>
          <td class="operational-matrix-table__right">Utilizzato attraverso SEPA SCT, SEPA Instant, CBPR+ e i sistemi di compensazione nazionali</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identificazione del debitore e dell&#39;agente del debitore con dettagli del conto</td>
          <td class="operational-matrix-table__right">Trasporta informazioni di rimessa strutturate per supportare la riconciliazione automatica</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identificazione del creditore e dell&#39;agente del creditore con dettagli del conto</td>
          <td class="operational-matrix-table__right">Supporta metodi di regolamento seriale, copertura e diretto per catene di pagamento multi-tratta</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Informazioni di rimessa per riferimenti di pagamento strutturati o non strutturati</td>
          <td class="operational-matrix-table__right">L&#39;agente del debitore crea un pacs.008 e lo invia all&#39;agente del creditore (direttamente o tramite intermediari). Ogni agente nella catena convalida, arricchisce e inoltra l&#39;istruzione fino a quando l&#39;agente del creditore accredita il conto del beneficiario.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contesto CBPR+ e schemi

- Sostituisce MT103 e MT103+ per i bonifici transfrontalieri della clientela
- La scadenza per gli indirizzi strutturati di novembre 2026 si applica a tutti gli indirizzi postali delle parti
- SWIFT gpi richiede pacs.008 per il tracciamento end-to-end basato su UETR
- 13 revisioni riflettono l'evoluzione continua dello schema attraverso le infrastrutture di mercato

## Flusso del messaggio

L'agente del debitore crea un pacs.008 e lo invia all'agente del creditore (direttamente o tramite intermediari). Ogni agente nella catena convalida, arricchisce e inoltra l'istruzione fino a quando l'agente del creditore accredita il conto del beneficiario.

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">Revisioni iniziali</td>
          <td class="version-diff-table__takeaway">Utile soprattutto per l&#39;analisi delle migrazioni da sistemi precedenti e per il contesto storico delle versioni.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">Revisioni moderne precedenti a quella attuale</td>
          <td class="version-diff-table__takeaway">Sono le revisioni che più probabilmente compariranno nei recenti progetti di migrazione o coesistenza.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">Revisione attuale del catalogo</td>
          <td class="version-diff-table__takeaway">Da usare per pianificare sulla versione corrente, continuando però a verificare regole di schema e prontezza delle controparti.</td>
        </tr>
    </tbody>
  </table>
</div>

## Esempio XML commentato

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

### Commenti sui campi

- `MsgId`: Questo campo deve identificare l'involucro del messaggio, non il riferimento di pagamento del cliente finale.
- `EndToEndId`: Jaga agar keterlacakan yang terlihat oleh nasabah tetap stabil di seluruh sistem hilir bila memungkinkan.
- `UETR`: Usa questo campo in modo coerente negli ambienti transfrontalieri e ad alta tracciabilità; non generarlo in modo estemporaneo nelle fasi successive del processo.
- `IntrBkSttlmAmt`: Valida importo e valuta con regole di business prima della validazione dello schema.
- `Dbtr` / `Cdtr`: La qualità dei dati delle parti, la struttura degli indirizzi e gli identificatori sono di solito i principali fattori che determinano il volume di riparazione.

## Confrontare pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="Confrontare pacs.008 vs pacs.009">
  <table>
    <caption>Confrontare pacs.008 vs pacs.009</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensione</th>
        <th>pacs.008.001.13</th>
        <th>Messaggio di confronto</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Scopo principale</td>
          <td class="message-comparison-table__current">Trasferimento di credito del cliente</td>
          <td class="message-comparison-table__other">Trasferimento di credito su conto proprio dell&#39;istituzione o gamba di copertura</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Responsabile di business</td>
          <td class="message-comparison-table__current">Operazioni di pagamento del cliente</td>
          <td class="message-comparison-table__other">Operazioni di tesoreria, corrispondenza e funding</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Abbinamenti tipici</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004 e, in alcuni casi, flussi pacs.008 collegati</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Ipotesi errata da evitare</td>
          <td class="message-comparison-table__current">Che tutti i trasferimenti banca-a-banca rientrino qui</td>
          <td class="message-comparison-table__other">Che possa sostituire le istruzioni di trasferimento di credito del cliente</td>
        </tr>
    </tbody>
  </table>
</div>

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## Versioni supportate

<div class="message-versions-table" tabindex="0" aria-label="Versioni supportate">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Versione</th>
        <th>Stato</th>
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
          <td class="message-versions-table__status"><strong>Corrente</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/it/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Reso di pagamento</td>
          <td class="related-messages-table__overview">Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un pagamento non può essere applicato, è stato inviato per errore o viene richiamato dall&#39;istituto di origine.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/it/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Bonifico tra istituzioni finanziarie</td>
          <td class="related-messages-table__overview">Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell&#39;istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità.</td>
        </tr>
    </tbody>
  </table>
</div>

