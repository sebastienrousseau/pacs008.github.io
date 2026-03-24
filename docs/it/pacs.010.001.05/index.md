---
title: pacs.010.001.05 | Addebito diretto tra istituzioni finanziarie | pacs008
description: Il messaggio pacs.010 viene utilizzato tra istituti finanziari per transazioni di addebito diretto sul conto proprio dell'istituto. Consente a un istituto...
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Addebito diretto tra istituzioni finanziarie

| | |
|---|---|
| **Nome ISO** | FinancialInstitutionDirectDebitV05 |
| **Stato di registrazione** | Registered |
| **Anno** | 2019 |
| **Versione** | 5 |

## Panoramica

Il messaggio pacs.010 viene utilizzato tra istituti finanziari per transazioni di addebito diretto sul conto proprio dell'istituto. Consente a un istituto di raccogliere fondi direttamente dal conto di un altro istituto.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 2025-02-27; i collegamenti alle fonti sono riportati di seguito.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e informazioni di regolamento
- **DrctDbtTxInf** — Informazioni sulla transazione di addebito diretto con importo di riscossione
- **Cdtr / CdtrAgt** — Identificazione dell'istituto creditore e del suo agente
- **Dbtr / DbtrAgt** — Identificazione dell'istituto debitore e del suo agente
- **IntrBkSttlmAmt** — Importo di regolamento interbancario nella valuta di regolamento

## Contesto di business

- Supporta la riscossione interbancaria tramite addebito diretto tra istituti finanziari
- Utilizzato per la riscossione di commissioni, richieste di margine e obblighi di regolamento istituzionale
- Richiede accordi bilaterali prestabiliti tra gli istituti partecipanti
- Essenziale per la gestione della liquidità istituzionale e i cicli di regolamento interbancario

| Elementi di dati chiave | Contesto di business |
|---|---|
| **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e informazioni di regolamento | Supporta la riscossione interbancaria tramite addebito diretto tra istituti finanziari |
| **DrctDbtTxInf** — Informazioni sulla transazione di addebito diretto con importo di riscossione | Utilizzato per la riscossione di commissioni, richieste di margine e obblighi di regolamento istituzionale |
| **Cdtr / CdtrAgt** — Identificazione dell'istituto creditore e del suo agente | Richiede accordi bilaterali prestabiliti tra gli istituti partecipanti |
| **Dbtr / DbtrAgt** — Identificazione dell'istituto debitore e del suo agente | Essenziale per la gestione della liquidità istituzionale e i cicli di regolamento interbancario |
| **IntrBkSttlmAmt** — Importo di regolamento interbancario nella valuta di regolamento | L'istituto creditore invia pacs.010 all'istituto debitore per raccogliere fondi in base a un accordo prestabilito. L'istituto debitore convalida la richiesta e regola o rifiuta l'addebito diretto. |

## Contesto CBPR+ e schemi

- Sostituisce elementi di MT204 per l'elaborazione degli addebiti diretti interbancari
- L'identificazione strutturata delle parti segue gli stessi requisiti degli altri messaggi pacs
- La validazione degli identificativi istituzionali (BIC, LEI) è obbligatoria
- Incluso nei piani di adozione completa di ISO 20022 tra le infrastrutture di mercato

## Flusso del messaggio

L'istituto creditore invia pacs.010 all'istituto debitore per raccogliere fondi in base a un accordo prestabilito. L'istituto debitore convalida la richiesta e regola o rifiuta l'addebito diretto.

## Tabella delle differenze di versione

| Intervallo di versione | Perché conta | Implicazione implementativa |
|---|---|---|
| pacs.010.001.05 | Implementazione attuale in pacs008 | Punto di riferimento per il supporto agli addebiti diretti tra istituzioni nel progetto attuale. |
| pacs.010.001.06 | Revisione successiva del catalogo | Review before adopting newer infrastructure requirements. |

## Esempio XML commentato

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Commenti sui campi

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Gli importi degli addebiti diretti tra istituzioni richiedono spesso controlli bilaterali espliciti di tolleranza.
- `Cdtr` / `Dbtr`: Definisci chiaramente i ruoli istituzionali; questo non e un modello di addebito per clienti retail.

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Messaggi correlati
| Tipo di messaggio | Descrizione | Panoramica |
|---|---|---|
| [`pacs.009.001.10`](/it/pacs.009.001.10/) | Bonifico tra istituzioni finanziarie | Il messaggio pacs.009 viene utilizzato per bonifici tra istituti finanziari in cui il trasferimento avviene per conto proprio dell'istituto anziché per conto di un cliente. Supporta il finanziamento interbancario, i pagamenti di copertura e la gestione della liquidità. |
| [`pacs.002.001.12`](/it/pacs.002.001.12/) | Rapporto di stato del pagamento tra istituzioni finanziarie | Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un'istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all'interno di un messaggio di pagamento. |
| [`pacs.003.001.09`](/it/pacs.003.001.09/) | Addebito diretto cliente tra istituzioni finanziarie | Il messaggio pacs.003 viene scambiato tra istituti finanziari per eseguire un'istruzione di addebito diretto del cliente. Consente alla banca del creditore di raccogliere fondi dalla banca del debitore per conto del creditore. |

