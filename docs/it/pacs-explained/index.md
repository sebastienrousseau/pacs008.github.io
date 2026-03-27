---
title: "Spiegazione dei messaggi PACS | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: it-IT
lastUpdated: true
image: /logo.webp
---

# Spiegazione dei messaggi PACS

A detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Ciclo di vita del pagamento

Il ciclo di vita completo del pagamento pacs coinvolge sei fasi e diversi tipi di messaggio che lavorano insieme.

**Fase 1 — Iniziazione.** Il pagamento ha origine nel dominio cliente-banca (pain.001). La banca del debitore riceve l'istruzione e la mappa nel dominio interbancario.

**Fase 2 — Istruzione interbancaria.** L'agente del debitore crea un pacs.008 e lo invia al prossimo agente nella catena. In un flusso seriale, il pacs.008 viaggia passo dopo passo attraverso gli intermediari. In un flusso di copertura, il pacs.008 va direttamente dall'agente del debitore all'agente del creditore, mentre un pacs.009 separato trasporta la tratta di finanziamento.

**Fase 3 — Reporting dello stato.** Ad ogni passaggio, l'agente ricevente può restituire un pacs.002 che conferma l'accettazione (ACCP/ACSP/ACSC), il rifiuto (RJCT) o lo stato in sospeso (PDNG).

**Fase 4 — Regolamento.** Il regolamento avviene attraverso un sistema di compensazione (CLRG), su conti di corrispondenza (INDA/INGA) o tramite un pagamento di copertura (COVE).

**Fase 5 — Accredito al beneficiario.** L'agente del creditore accredita il beneficiario e può inviare una notifica al cliente.

**Fase 6 — Gestione delle eccezioni.** Se il beneficiario non può essere accreditato dopo il regolamento, pacs.004 restituisce i fondi. Se l'originatore scopre un errore, pacs.007 procede in avanti. Se lo stato è sconosciuto, pacs.028 interroga il prossimo agente.

### Flusso metodo seriale

```text
Agente Debitore --(pacs.008)--> Agente Intermediario
Agente Intermediario --(pacs.002)--> Agente Debitore [stato]
Agente Intermediario --(pacs.008)--> Agente Creditore
Agente Creditore --(pacs.002)--> Agente Intermediario [stato]
Agente Creditore --> Creditore [notifica di accredito]
```

### Flusso metodo di copertura

```text
Agente Debitore --(pacs.008)--> Agente Creditore [diretto, con dati cliente]
Agente Debitore --(pacs.009)--> Banca di Copertura --(pacs.009)--> Agente Creditore [tratta di finanziamento]
```

## Struttura XML di pacs.008

pacs.008 ha due blocchi principali: l'Intestazione di Gruppo (GrpHdr) e le Informazioni sulla Transazione di Bonifico (CdtTrfTxInf).

### Intestazione di Gruppo (GrpHdr)

L'Intestazione di Gruppo appare esattamente una volta per messaggio e contiene:

- **MsgId** — Identificatore univoco del messaggio assegnato dall'agente mittente. Max 35 caratteri.
- **CreDtTm** — Timestamp di creazione in formato ISO 8601.
- **NbOfTxs** — Conteggio delle transazioni individuali nel messaggio.
- **SttlmInf** — Informazioni di regolamento incluso il metodo di regolamento (SttlmMtd).
- **IntrBkSttlmDt** — Data del regolamento interbancario.
- **PmtTpInf** — Informazioni sul tipo di pagamento inclusi priorità, livello di servizio e scopo.

### Informazioni sulla Transazione di Bonifico (CdtTrfTxInf)

Ogni transazione contiene:

- **PmtId** — Identificatori di pagamento: InstrId, EndToEndId, TxId e UETR.
- **IntrBkSttlmAmt** — Importo del regolamento interbancario con codice valuta.
- **InstdAmt** — Importo originale istruito.
- **ChrgBr** — Codice portatore delle spese (DEBT, CRED, SHAR o SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — Nome, indirizzo, identificazione, conto e agente del debitore.
- **Cdtr / CdtrAcct / CdtrAgt** — Nome, indirizzo, identificazione, conto e agente del creditore.
- **IntrmyAgt1 / 2 / 3** — Fino a tre agenti intermediari.
- **RmtInf** — Informazioni di rimessa, non strutturate o strutturate.
- **Purp** — Codice scopo strutturato.
- **RgltryRptg** — Dettagli di reporting regolamentare.

## Identificatori di pagamento

I messaggi pacs utilizzano diversi identificatori che svolgono ruoli diversi nella catena di pagamento.

<div class="api-fields-table" tabindex="0" aria-label="Identificatori di pagamento">
  <table>
    <caption>Identificatori di pagamento e i loro ruoli</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Identificatore</th>
        <th scope="col">Impostato da</th>
        <th scope="col">Cambia nella catena?</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><strong>MsgId</strong></td><td class="api-fields-table__desc">Ogni agente mittente</td><td class="api-fields-table__constraint">Sì — nuovo per messaggio</td></tr>
        <tr><td class="api-fields-table__field"><strong>InstrId</strong></td><td class="api-fields-table__desc">Ogni agente istruttore</td><td class="api-fields-table__constraint">Sì — può cambiare ad ogni passaggio</td></tr>
        <tr><td class="api-fields-table__field"><strong>EndToEndId</strong></td><td class="api-fields-table__desc">Originatore (debitore)</td><td class="api-fields-table__constraint">No — non deve essere alterato</td></tr>
        <tr><td class="api-fields-table__field"><strong>TxId</strong></td><td class="api-fields-table__desc">Primo agente istruttore</td><td class="api-fields-table__constraint">No — non deve essere alterato</td></tr>
        <tr><td class="api-fields-table__field"><strong>UETR</strong></td><td class="api-fields-table__desc">Agente del debitore</td><td class="api-fields-table__constraint">No — tracciamento universale</td></tr>
    </tbody>
  </table>
</div>

## Metodi di regolamento

L'elemento SttlmMtd definisce come avviene il regolamento interbancario.

- **CLRG** — Regolamento attraverso un sistema di compensazione come TARGET2, EURO1 o CHIPS.
- **INDA** — Regolamento nei libri dell'agente istruito. L'agente del debitore detiene un conto nostro.
- **INGA** — Regolamento nei libri dell'agente istruttore. L'agente istruito detiene un conto nostro.
- **COVE** — Regolamento attraverso un pagamento di copertura separato pacs.009.

## Codici portatore delle spese

- **DEBT** — Il debitore sostiene tutte le spese (equivalente MT103: OUR).
- **CRED** — Il creditore sostiene tutte le spese (equivalente MT103: BEN).
- **SHAR** — Le spese sono condivise (equivalente MT103: SHA).
- **SLEV** — Le spese seguono il livello di servizio. Obbligatorio per SEPA. Nessuna detrazione dall'importo del trasferimento.

## Mappatura campi MT103 verso pacs.008

<div class="api-fields-table" tabindex="0" aria-label="Mappatura campi MT103 verso pacs.008">
  <table>
    <caption>Principali corrispondenze di campo da MT103 a pacs.008</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Campo MT103</th>
        <th scope="col">Nome MT103</th>
        <th scope="col">Percorso XML pacs.008</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field">20</td><td class="api-fields-table__desc">Riferimento del mittente</td><td class="api-fields-table__constraint">GrpHdr/MsgId or PmtId/InstrId</td></tr>
        <tr><td class="api-fields-table__field">23B</td><td class="api-fields-table__desc">Codice operazione bancaria</td><td class="api-fields-table__constraint">PmtTpInf/SvcLvl</td></tr>
        <tr><td class="api-fields-table__field">32A</td><td class="api-fields-table__desc">Data valuta / Importo</td><td class="api-fields-table__constraint">IntrBkSttlmDt + IntrBkSttlmAmt</td></tr>
        <tr><td class="api-fields-table__field">33B</td><td class="api-fields-table__desc">Importo istruito</td><td class="api-fields-table__constraint">InstdAmt</td></tr>
        <tr><td class="api-fields-table__field">50a</td><td class="api-fields-table__desc">Cliente ordinante</td><td class="api-fields-table__constraint">Dbtr + DbtrAcct</td></tr>
        <tr><td class="api-fields-table__field">52a</td><td class="api-fields-table__desc">Istituzione ordinante</td><td class="api-fields-table__constraint">DbtrAgt</td></tr>
        <tr><td class="api-fields-table__field">57a</td><td class="api-fields-table__desc">Istituzione del conto</td><td class="api-fields-table__constraint">CdtrAgt</td></tr>
        <tr><td class="api-fields-table__field">59a</td><td class="api-fields-table__desc">Cliente beneficiario</td><td class="api-fields-table__constraint">Cdtr + CdtrAcct</td></tr>
        <tr><td class="api-fields-table__field">70</td><td class="api-fields-table__desc">Informazioni di rimessa</td><td class="api-fields-table__constraint">RmtInf/Ustrd or RmtInf/Strd</td></tr>
        <tr><td class="api-fields-table__field">71A</td><td class="api-fields-table__desc">Dettaglio spese</td><td class="api-fields-table__constraint">ChrgBr (BEN→CRED, OUR→DEBT, SHA→SHAR)</td></tr>
        <tr><td class="api-fields-table__field">72</td><td class="api-fields-table__desc">Info mittente al destinatario</td><td class="api-fields-table__constraint">InstrForCdtrAgt / InstrForNxtAgt</td></tr>
        <tr><td class="api-fields-table__field">N/A</td><td class="api-fields-table__desc">UETR (Block 3, field 121)</td><td class="api-fields-table__constraint">PmtId/UETR</td></tr>
    </tbody>
  </table>
</div>

## Codici di stato e di motivo

### Codici di stato pacs.002

<div class="api-fields-table" tabindex="0" aria-label="Codici di stato pacs.002">
  <table>
    <caption>Codici di stato transazione in pacs.002</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Codice</th>
        <th scope="col">Significato</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>ACCP</code></td><td class="api-fields-table__desc">Accettato — controlli preliminari superati</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSP</code></td><td class="api-fields-table__desc">Accettato — regolamento in corso</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSC</code></td><td class="api-fields-table__desc">Accettato — regolamento completato</td></tr>
        <tr><td class="api-fields-table__field"><code>RCVD</code></td><td class="api-fields-table__desc">Ricevuto — non ancora elaborato</td></tr>
        <tr><td class="api-fields-table__field"><code>PDNG</code></td><td class="api-fields-table__desc">In sospeso — ulteriore elaborazione necessaria</td></tr>
        <tr><td class="api-fields-table__field"><code>RJCT</code></td><td class="api-fields-table__desc">Rifiutato — con codice motivo</td></tr>
    </tbody>
  </table>
</div>

### Codici di motivo comuni di rifiuto e restituzione

<div class="api-fields-table" tabindex="0" aria-label="Codici di motivo comuni">
  <table>
    <caption>Codici di motivo di rifiuto e restituzione più utilizzati</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Codice</th>
        <th scope="col">Nome</th>
        <th scope="col">Descrizione</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>AC01</code></td><td class="api-fields-table__desc">Numero di conto errato</td><td class="api-fields-table__constraint">Il numero di conto è invalido o inesistente</td></tr>
        <tr><td class="api-fields-table__field"><code>AC04</code></td><td class="api-fields-table__desc">Conto chiuso</td><td class="api-fields-table__constraint">Il conto è chiuso</td></tr>
        <tr><td class="api-fields-table__field"><code>AC06</code></td><td class="api-fields-table__desc">Conto bloccato</td><td class="api-fields-table__constraint">Il conto è bloccato per le transazioni</td></tr>
        <tr><td class="api-fields-table__field"><code>AM04</code></td><td class="api-fields-table__desc">Fondi insufficienti</td><td class="api-fields-table__constraint">Fondi insufficienti sul conto del debitore</td></tr>
        <tr><td class="api-fields-table__field"><code>AM05</code></td><td class="api-fields-table__desc">Duplicazione</td><td class="api-fields-table__constraint">Pagamento duplicato rilevato</td></tr>
        <tr><td class="api-fields-table__field"><code>BE04</code></td><td class="api-fields-table__desc">Indirizzo creditore mancante</td><td class="api-fields-table__constraint">L'indirizzo del creditore è mancante o incompleto</td></tr>
        <tr><td class="api-fields-table__field"><code>CUST</code></td><td class="api-fields-table__desc">Richiesto dal cliente</td><td class="api-fields-table__constraint">Restituzione o rifiuto richiesto dal cliente</td></tr>
        <tr><td class="api-fields-table__field"><code>DUPL</code></td><td class="api-fields-table__desc">Pagamento duplicato</td><td class="api-fields-table__constraint">Pagamento duplicato identificato</td></tr>
        <tr><td class="api-fields-table__field"><code>FOCR</code></td><td class="api-fields-table__desc">A seguito di annullamento</td><td class="api-fields-table__constraint">A seguito di richiesta di annullamento</td></tr>
        <tr><td class="api-fields-table__field"><code>FR01</code></td><td class="api-fields-table__desc">Frode</td><td class="api-fields-table__constraint">Sospetta frode</td></tr>
        <tr><td class="api-fields-table__field"><code>RC01</code></td><td class="api-fields-table__desc">BIC errato</td><td class="api-fields-table__constraint">Il BIC è errato o sconosciuto</td></tr>
        <tr><td class="api-fields-table__field"><code>RR03</code></td><td class="api-fields-table__desc">Nome/indirizzo creditore mancante</td><td class="api-fields-table__constraint">Nome o dati dell'indirizzo del creditore mancanti</td></tr>
        <tr><td class="api-fields-table__field"><code>TM01</code></td><td class="api-fields-table__desc">Ora limite superata</td><td class="api-fields-table__constraint">L'ora limite di elaborazione è stata superata</td></tr>
    </tbody>
  </table>
</div>

## Formato dell'indirizzo postale

### Indirizzo strutturato

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### Indirizzo non strutturato (deprecato per CBPR+ dopo novembre 2026)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

## Identificazione delle parti

Le parti in pacs.008 supportano diversi metodi di identificazione:

- **BIC** — Codice identificativo aziendale per ISO 9362. 8 o 11 caratteri (BBBBCCLL o BBBBCCLLBBB). Utilizzato in FinInstnId/BICFI per gli agenti e OrgId/AnyBIC per le parti.
- **LEI** — Identificativo dell'entità giuridica per ISO 17442. 20 caratteri alfanumerici. Appare in OrgId/LEI per le parti e FinInstnId/LEI per gli agenti. Migliora la disambiguazione delle entità per il reporting regolamentare.
- **IBAN** — Numero di conto bancario internazionale per ISO 13616. Utilizzato in DbtrAcct/Id/IBAN e CdtrAcct/Id/IBAN.
- **ID organizzazione** — Altri identificatori basati su schema (codice fiscale, DUNS, numero cliente) tramite OrgId/Othr con un codice nome schema.
- **ID privati** — Per le persone fisiche: data e luogo di nascita, passaporto (CCPT), carta d'identità (NIDN) o patente di guida (DRLC) tramite PrvtId.

## Informazioni di rimessa

I dati di rimessa in pacs.008 utilizzano l'elemento RmtInf con due forme:

**Non strutturate** — Testo libero fino a 140 caratteri per occorrenza. Semplice ma limita la riconciliazione automatizzata.

**Strutturate** — Riferimenti di documenti con codici tipo, numeri, date e importi. Tipi di documenti comuni: CINV (fattura commerciale), CREN (nota di credito), SOAC (estratto conto). Supporta i riferimenti creditore ISO 11649 (RF + cifre di controllo + riferimento) tramite CdtrRefInf. Consente la corrispondenza automatica delle fatture e i pagamenti multi-fattura.

## UETR e tracciamento gpi

UETR (Unique End-to-End Transaction Reference) è un UUID v4 generato dall'agente del debitore. Appare in PmtId/UETR attraverso pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 e pacs.028. Non deve essere modificato lungo l'intera catena di pagamento.

SWIFT gpi utilizza l'UETR per tracciare i pagamenti attraverso un database Tracker basato su cloud. Ogni agente conferma la ricezione e l'elaborazione, consentendo la visibilità da un capo all'altro. L'SLA gpi per i pagamenti transfrontalieri mira all'accredito in giornata sul conto del creditore.

## Riferimenti

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

