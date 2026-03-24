---
title: Ghid de selecție a mesajelor | pacs008
description: Alegeți mesajul pacs ISO 20022 potrivit pentru generare, raportare de status, retururi, reversări și interogări.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# Ghid de selecție a mesajelor

Alegeți familia pacs mai întâi după evenimentul de business, apoi după schemă și modelul operațional.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026 folosind materiale publice ISO 20022, EPC și Swift menționate pe această pagină.

## Matrice rapidă de decizie

<div class="decision-matrix-table" tabindex="0" aria-label="Matrice rapidă de decizie">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Tip de mesaj</th>
        <th>Descriere</th>
        <th>Prezentare generală</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ro/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">Raport de stare a plății FI-la-FI</td>
          <td class="decision-matrix-table__overview">Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ro/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">Debit direct de client FI-la-FI</td>
          <td class="decision-matrix-table__overview">Mesajul pacs.003 este schimbat între instituții financiare pentru a executa o instrucțiune de debitare directă a clientului. Permite băncii creditorului să colecteze fonduri de la banca debitorului în numele creditorului.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ro/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Retur de plată</td>
          <td class="decision-matrix-table__overview">Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi aplicată, a fost trimisă din eroare sau este reclamată de instituția inițiatoare.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ro/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">Reversare de plată FI-la-FI</td>
          <td class="decision-matrix-table__overview">Mesajul pacs.007 este utilizat pentru a inversa o instrucțiune de plată trimisă anterior care nu a fost încă decontată sau pentru a solicita inversarea unei plăți decontate. Spre deosebire de pacs.004 (returnare), este inițiat de agentul ordonator original.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ro/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">Transfer de credit client FI-la-FI</td>
          <td class="decision-matrix-table__overview">Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține informații despre debitor, creditor, sumă și detalii de remitere pentru una sau mai multe tranzacții de transfer de credit.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ro/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Transfer de credit între instituții financiare</td>
          <td class="decision-matrix-table__overview">Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în numele unui client. Suportă finanțarea interbancară, plățile de acoperire și gestionarea lichidității.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ro/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Debit direct între instituții financiare</td>
          <td class="decision-matrix-table__overview">Mesajul pacs.010 este utilizat între instituții financiare pentru tranzacții de debitare directă pe contul propriu al instituției. Permite unei instituții să colecteze fonduri direct din contul altei instituții.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ro/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">Cerere de stare a plății FI-la-FI</td>
          <td class="decision-matrix-table__overview">Mesajul pacs.028 este trimis de o instituție financiară pentru a solicita statusul unei instrucțiuni de plată trimise anterior. Permite urmărirea proactivă a procesării plăților fără a aștepta un raport de status nesolicitat.</td>
        </tr>
    </tbody>
  </table>
</div>

## Puncte comune de comparație

<div class="comparison-points-table" tabindex="0" aria-label="Puncte comune de comparație">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>Comparație</th>
        <th>Diferență cheie</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">Plată de client versus mișcare instituțională sau de acoperire</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">Retur din partea destinatarului versus reversare din partea inițiatorului</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">Raport de status versus solicitare de status</td>
        </tr>
    </tbody>
  </table>
</div>

## Pagini de mesaje acceptate

- [`pacs.002.001.12`](/ro/pacs.002.001.12/) — Raport de stare a plății FI-la-FI
- [`pacs.003.001.09`](/ro/pacs.003.001.09/) — Debit direct de client FI-la-FI
- [`pacs.004.001.11`](/ro/pacs.004.001.11/) — Retur de plată
- [`pacs.007.001.11`](/ro/pacs.007.001.11/) — Reversare de plată FI-la-FI
- [`pacs.008.001.13`](/ro/pacs.008.001.13/) — Transfer de credit client FI-la-FI
- [`pacs.009.001.10`](/ro/pacs.009.001.10/) — Transfer de credit între instituții financiare
- [`pacs.010.001.05`](/ro/pacs.010.001.05/) — Debit direct între instituții financiare
- [`pacs.028.001.05`](/ro/pacs.028.001.05/) — Cerere de stare a plății FI-la-FI

