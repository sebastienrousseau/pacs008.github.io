---
title: API | Italiano
description: Supporto flussi REST e CLI in Pacs008.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# API

Il progetto fornisce sia una REST API sia una CLI per i flussi operativi di elaborazione dei messaggi di pagamento.

## Funzionalità API

- endpoint di salute e prontezza
- validazione dei dati prima della generazione XML
- generazione sincrona per flussi diretti
- esecuzione asincrona di attività per pipeline più lunghe
- file generati scaricabili tramite flussi di completamento attività

## Funzionalità CLI

- puntare a un file sorgente e una versione del messaggio
- validare rispetto a XSD prima della consegna
- generare XML in directory di output compatibili con le pipeline
- integrarsi in attività CI, pianificazioni batch e strumenti operatore locali

## Focus sull'implementazione

Pacs008 è progettato per l'uso operativo nei team di elaborazione pagamenti:

- validazione pre-volo prima della creazione del messaggio
- selezione dello schema e della versione a runtime
- flussi di generazione asincroni per servizi interni
- output deterministici per test e tracce di audit

## Requisiti di qualità dei dati per il 2026

I requisiti di qualità dei messaggi si stanno inasprendo nel settore, in particolare riguardo a:

- identificazione di parti e agenti
- prontezza degli indirizzi strutturati o ibridi
- gestione più ricca di rimesse e riferimenti
- trasparenza lungo le catene di pagamento seriali

L'API e la CLI sono progettate per rendere questi controlli parte del flusso di lavoro anziché un passaggio di revisione manuale.

