---
title: "Guida alla selezione dei messaggi | pacs008"
description: Scegli il messaggio pacs ISO 20022 corretto per generazione, stati, resi, storni e richieste.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# Guida alla selezione dei messaggi

Scegli la famiglia pacs prima in base all'evento operativo e poi in base allo schema e al modello operativo.

## Matrice decisionale rapida

<div class="decision-matrix-table" tabindex="0" aria-label="Matrice decisionale rapida">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
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
          <td class="decision-matrix-table__id"><a href="/it/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">Rapporto di stato del pagamento tra istituzioni finanziarie</td>
          <td class="decision-matrix-table__overview">Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un&#39;istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all&#39;interno di un messaggio di pagamento.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/it/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">Addebito diretto cliente tra istituzioni finanziarie</td>
          <td class="decision-matrix-table__overview">Il messaggio pacs.003 viene scambiato tra istituti finanziari per eseguire un&#39;istruzione di addebito diretto del cliente. Consente alla banca del creditore di raccogliere fondi dalla banca del debitore per conto del creditore.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/it/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Reso di pagamento</td>
          <td class="decision-matrix-table__overview">Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un pagamento non può essere applicato, è stato inviato per errore o viene richiamato dall&#39;istituto di origine.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/it/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">Storno di pagamento tra istituzioni finanziarie</td>
          <td class="decision-matrix-table__overview">Il messaggio pacs.007 viene utilizzato per stornare un&#39;istruzione di pagamento precedentemente inviata che non è ancora stata regolata o per richiedere lo storno di un pagamento regolato. A differenza di pacs.004 (restituzione), è avviato dall&#39;agente ordinante originale.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/it/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">Bonifico cliente tra istituzioni finanziarie</td>
          <td class="decision-matrix-table__overview">Il messaggio pacs.008 è l&#39;istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene informazioni su debitore, creditore, importo e dettagli di rimessa per una o più transazioni di bonifico.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/it/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Bonifico tra istituzioni finanziarie</td>
          <td class="decision-matrix-table__overview">Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell&#39;istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/it/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Addebito diretto tra istituzioni finanziarie</td>
          <td class="decision-matrix-table__overview">Il messaggio pacs.010 viene utilizzato tra istituti finanziari per transazioni di addebito diretto sul conto proprio dell&#39;istituto. Consente a un istituto di raccogliere fondi direttamente dal conto di un altro istituto.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/it/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">Richiesta di stato del pagamento tra istituzioni finanziarie</td>
          <td class="decision-matrix-table__overview">Il messaggio pacs.028 viene inviato da un istituto finanziario per richiedere lo stato di un&#39;istruzione di pagamento precedentemente inviata. Consente il tracciamento proattivo dell&#39;elaborazione dei pagamenti senza attendere un rapporto di stato non richiesto.</td>
        </tr>
    </tbody>
  </table>
</div>

## Punti di confronto comuni

<div class="comparison-points-table" tabindex="0" aria-label="Punti di confronto comuni">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>Confronto</th>
        <th>Distinzione chiave</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">Pagamento cliente rispetto a movimento istituzionale o di copertura</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">Reso dal lato ricevente rispetto a storno dal lato ordinante</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">Rapporto di stato rispetto a richiesta di stato</td>
        </tr>
    </tbody>
  </table>
</div>

## Pagine dei messaggi supportati

- [`pacs.002.001.12`](/it/pacs.002.001.12/) — Rapporto di stato del pagamento tra istituzioni finanziarie
- [`pacs.003.001.09`](/it/pacs.003.001.09/) — Addebito diretto cliente tra istituzioni finanziarie
- [`pacs.004.001.11`](/it/pacs.004.001.11/) — Reso di pagamento
- [`pacs.007.001.11`](/it/pacs.007.001.11/) — Storno di pagamento tra istituzioni finanziarie
- [`pacs.008.001.13`](/it/pacs.008.001.13/) — Bonifico cliente tra istituzioni finanziarie
- [`pacs.009.001.10`](/it/pacs.009.001.10/) — Bonifico tra istituzioni finanziarie
- [`pacs.010.001.05`](/it/pacs.010.001.05/) — Addebito diretto tra istituzioni finanziarie
- [`pacs.028.001.05`](/it/pacs.028.001.05/) — Richiesta di stato del pagamento tra istituzioni finanziarie

