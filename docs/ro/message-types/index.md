---
title: "Tipuri de mesaje | pacs008 ISO 20022"
description: Definiții și versiuni de mesaje pacs ISO 20022 acceptate.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# Tipuri de mesaje

pacs008 acoperă definiția de mesaj pacs.008 principală și mesajele conexe utilizate în fluxurile de orchestrare și reconciliere.

## Suport inclus

<div class="message-coverage-table" tabindex="0" aria-label="Suport inclus">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Tip de mesaj</th>
        <th>Descriere</th>
        <th>An</th>
        <th>Prezentare generală</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/ro/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">Raport de stare a plății FI-la-FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ro/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">Debit direct de client FI-la-FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Mesajul pacs.003 este schimbat între instituții financiare pentru a executa o instrucțiune de debitare directă a clientului. Permite băncii creditorului să colecteze fonduri de la banca debitorului în numele creditorului.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ro/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">Retur de plată</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi aplicată, a fost trimisă din eroare sau este reclamată de instituția inițiatoare.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ro/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">Reversare de plată FI-la-FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Mesajul pacs.007 este utilizat pentru a inversa o instrucțiune de plată trimisă anterior care nu a fost încă decontată sau pentru a solicita inversarea unei plăți decontate. Spre deosebire de pacs.004 (returnare), este inițiat de agentul ordonator original.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ro/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">Transfer de credit client FI-la-FI</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține informații despre debitor, creditor, sumă și detalii de remitere pentru una sau mai multe tranzacții de transfer de credit.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ro/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">Transfer de credit între instituții financiare</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în numele unui client. Suportă finanțarea interbancară, plățile de acoperire și gestionarea lichidității.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ro/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">Debit direct între instituții financiare</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Mesajul pacs.010 este utilizat între instituții financiare pentru tranzacții de debitare directă pe contul propriu al instituției. Permite unei instituții să colecteze fonduri direct din contul altei instituții.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ro/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">Cerere de stare a plății FI-la-FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Mesajul pacs.028 este trimis de o instituție financiară pentru a solicita statusul unei instrucțiuni de plată trimise anterior. Permite urmărirea proactivă a procesării plăților fără a aștepta un raport de status nesolicitat.</td>
        </tr>
    </tbody>
  </table>
</div>

## Model de livrare

Fiecare tip de mesaj acceptat este susținut de active șablon și logică de validare, astfel încât echipele pot standardiza generarea și testele de regresie pe mai multe canale.

## Alegerea mesajului potrivit

Catalogul de mesaje este deosebit de important atunci când echipele trebuie să decidă ce mesaj pornește fluxul, care raportează statusul și care corectează sau inversează procesul.

Vezi [ghidul de selecție a mesajelor](/ro/message-selection/) pentru o vedere scurtă asupra deciziei în fluxurile pacs suportate.

## Contextul pieței 2026

- **SEPA SCT / SCT Inst**: pacs.008 rămâne central pentru schimbul de transferuri de credit și procesarea plăților instantanee.
- **CBPR+**: pacs.008 continuă să înlocuiască sarcinile transfrontaliere în stil MT103 cu date structurate mai bogate.
- **Adrese structurate**: ghidul actual al pieței indică tranziția din noiembrie 2026 de la adresele poștale complet nestructurate.
- **Metoda serială și STP**: lanțurile bancă-la-bancă multi-etapă rămân importante, iar variantele de procesare directă rămân esențiale pentru eficiența operațională.

## Capacități operaționale

pacs008 oferă generare și validare bazate pe șabloane pe reviziile definițiilor de mesaje acceptate:

- compara versiunile
- testa regresiv actualizările de scheme
- consolida datele mesajelor de plată de ieșire înainte de lansare
- susține echipele de produs, operațiuni și migrare dintr-o singură bază de cod

