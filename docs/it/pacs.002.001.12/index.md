---
title: pacs.002.001.12 | FI to FI Payment Status Report | pacs008
description: Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un'istruzione di pagamento precedentemente inviata. Fornisce...
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **Nome ISO** | FIToFIPaymentStatusReportV12 |
| **Stato di registrazione** | Registered |
| **Anno** | 2019 |
| **Versione** | 12 |

## Panoramica

Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un'istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all'interno di un messaggio di pagamento.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 27 February 2025; i collegamenti alle fonti sono riportati di seguito.

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

| Elementi di dati chiave | Contesto di business |
|---|---|
| **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione | Utilizzato per confermare il regolamento o segnalare il rifiuto di bonifici, addebiti diretti e restituzioni di pagamento |
| **OrgnlGrpInfAndSts** — Informazioni e stato del gruppo originale per la reportistica a livello aggregato | Consente la riconciliazione tra agenti ordinanti e agenti incaricati |
| **TxInfAndSts** — Informazioni e stato della transazione per gli esiti delle singole transazioni | Obbligatorio nei flussi CBPR+ per confermare l'elaborazione dei messaggi pacs.008 e pacs.009 |
| **StsRsnInf** — Informazioni sul motivo dello stato con codici motivo strutturati | Supporta la reportistica di stato sia a livello di gruppo aggregato che a livello di singola transazione |
| **OrgnlTxRef** — Riferimento alla transazione originale che collega all'istruzione di origine | L'agente incaricato (destinatario) invia pacs.002 all'agente ordinante (mittente) per confermare l'accettazione, il regolamento o il rifiuto di un'istruzione di pagamento ricevuta come pacs.008 o pacs.009. |

## Contesto CBPR+ e schemi

- Sostituisce MT199 e le narrative di stato nel campo 79 dei messaggi MT
- CBPR+ rende obbligatorio pacs.002 per tutte le comunicazioni sullo stato dei pagamenti
- I codici motivo strutturati sostituiscono le spiegazioni di rifiuto in testo libero
- L'integrazione con il tracciamento SWIFT gpi richiede pacs.002 per la trasparenza end-to-end

## Flusso del messaggio

L'agente incaricato (destinatario) invia pacs.002 all'agente ordinante (mittente) per confermare l'accettazione, il regolamento o il rifiuto di un'istruzione di pagamento ricevuta come pacs.008 o pacs.009.

## Tabella delle differenze di versione

| Intervallo di versione | Perché conta | Implicazione implementativa |
|---|---|---|
| pacs.002.001.12 | Implementazione attuale in pacs008 | Da usare quando si lavora con i template e gli artefatti di validazione attualmente supportati dal progetto. |
| pacs.002.001.13-15 | Revisioni successive del catalogo | Review later ISO revisions before starting new interoperability work or onboarding new infrastructures. |

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

- `MsgId`: Use a new identifier for the status report itself, not the original payment instruction.
- `OrgnlInstrId`: Keep the original instruction identifier intact so status can be matched automatically.
- `TxSts`: This is the operational state; map it carefully to internal workflow states rather than assuming a one-to-one match.
- `StsRsnInf`: Structured reason codes are far more useful than free text for repair and analytics.

## Confrontare pacs.002 vs pacs.028

| Dimensione | pacs.002.001.12 | Messaggio di confronto |
|---|---|---|
| Scopo principale | Report status | Request status |
| Who starts the interaction | The institution sending the status | The institution asking for status |
| Operational posture | Event-driven reporting | Exception-driven enquiry |
| Assunzione errata da evitare | That status reporting replaces investigation workflows | That every payment needs an explicit status request |

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Messaggi correlati
| Tipo di messaggio | Descrizione | Panoramica |
|---|---|---|
| [`pacs.008.001.13`](/it/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Il messaggio pacs.008 è l'istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene informazioni su debitore, creditore, importo e dettagli di rimessa per una o più transazioni di bonifico. |
| [`pacs.009.001.10`](/it/pacs.009.001.10/) | Financial Institution Credit Transfer | Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell'istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità. |
| [`pacs.028.001.05`](/it/pacs.028.001.05/) | FI to FI Payment Status Request | Il messaggio pacs.028 viene inviato da un istituto finanziario per richiedere lo stato di un'istruzione di pagamento precedentemente inviata. Consente il tracciamento proattivo dell'elaborazione dei pagamenti senza attendere un rapporto di stato non richiesto. |

