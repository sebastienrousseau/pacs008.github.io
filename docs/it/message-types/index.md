---
title: Tipi di messaggio | pacs008 ISO 20022
description: Definizioni e versioni di messaggi pacs ISO 20022 supportate. Generazione, validazione, orchestrazione API e conformità per i flussi di bonifico cliente...
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# Tipi di messaggio

pacs008 copre la definizione di messaggio pacs.008 principale e i messaggi correlati utilizzati nei flussi di orchestrazione e riconciliazione.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026 usando materiali pubblici ISO 20022, EPC e Swift collegati in questa pagina.

## Supporto incluso

<div class="message-coverage-table" tabindex="0" aria-label="Supporto incluso">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-version">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Tipo di messaggio</th>
        <th>Descrizione</th>
        <th>Versione</th>
        <th>Anno</th>
        <th>Panoramica</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/it/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">Rapporto di stato del pagamento tra istituzioni finanziarie</td>
          <td class="message-coverage-table__version"><code>pacs.002.001.12</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un&#39;istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all&#39;interno di un messaggio di pagamento.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/it/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">Addebito diretto cliente tra istituzioni finanziarie</td>
          <td class="message-coverage-table__version"><code>pacs.003.001.09</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Il messaggio pacs.003 viene scambiato tra istituti finanziari per eseguire un&#39;istruzione di addebito diretto del cliente. Consente alla banca del creditore di raccogliere fondi dalla banca del debitore per conto del creditore.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/it/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">Reso di pagamento</td>
          <td class="message-coverage-table__version"><code>pacs.004.001.11</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un pagamento non può essere applicato, è stato inviato per errore o viene richiamato dall&#39;istituto di origine.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/it/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">Storno di pagamento tra istituzioni finanziarie</td>
          <td class="message-coverage-table__version"><code>pacs.007.001.11</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Il messaggio pacs.007 viene utilizzato per stornare un&#39;istruzione di pagamento precedentemente inviata che non è ancora stata regolata o per richiedere lo storno di un pagamento regolato. A differenza di pacs.004 (restituzione), è avviato dall&#39;agente ordinante originale.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/it/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">Bonifico cliente tra istituzioni finanziarie</td>
          <td class="message-coverage-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">Il messaggio pacs.008 è l&#39;istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene informazioni su debitore, creditore, importo e dettagli di rimessa per una o più transazioni di bonifico.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/it/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">Bonifico tra istituzioni finanziarie</td>
          <td class="message-coverage-table__version"><code>pacs.009.001.10</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell&#39;istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/it/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">Addebito diretto tra istituzioni finanziarie</td>
          <td class="message-coverage-table__version"><code>pacs.010.001.05</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Il messaggio pacs.010 viene utilizzato tra istituti finanziari per transazioni di addebito diretto sul conto proprio dell&#39;istituto. Consente a un istituto di raccogliere fondi direttamente dal conto di un altro istituto.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/it/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">Richiesta di stato del pagamento tra istituzioni finanziarie</td>
          <td class="message-coverage-table__version"><code>pacs.028.001.05</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Il messaggio pacs.028 viene inviato da un istituto finanziario per richiedere lo stato di un&#39;istruzione di pagamento precedentemente inviata. Consente il tracciamento proattivo dell&#39;elaborazione dei pagamenti senza attendere un rapporto di stato non richiesto.</td>
        </tr>
    </tbody>
  </table>
</div>

## Modello di distribuzione

Ogni tipo di messaggio supportato è affiancato da modelli XML e logica di validazione affinché i team possano standardizzare la generazione e i test di regressione su più canali.

## Scegliere il messaggio corretto

Il catalogo dei messaggi è particolarmente utile quando i team devono decidere quale messaggio avvia il lavoro, quale riporta lo stato e quale corregge o annulla il flusso.

Vedere la [guida alla selezione dei messaggi](/it/message-selection/) per una vista decisionale sintetica sui flussi pacs supportati.


## Contesto di mercato 2026

- **SEPA SCT / SCT Inst**: pacs.008 rimane centrale per lo scambio di bonifici e l'elaborazione dei pagamenti istantanei.
- **CBPR+**: pacs.008 continua a sostituire i payload transfrontalieri in stile MT103 con dati strutturati più ricchi.
- **Indirizzi strutturati**: le attuali linee guida di mercato indicano la transizione di novembre 2026 dall'uso di indirizzi postali completamente non strutturati.
- **Metodo seriale e STP**: le catene banca-a-banca multi-tratta restano importanti, e le varianti straight-through rimangono essenziali per l'efficienza operativa.

## Capacità operative

pacs008 fornisce generazione e validazione basate su modelli attraverso le revisioni delle definizioni di messaggi supportate:

- confrontare le versioni
- eseguire test di regressione sugli aggiornamenti degli schemi
- rafforzare i dati dei messaggi di pagamento in uscita prima del rilascio
- supportare team di prodotto, operazioni e migrazione da un'unica base di codice

