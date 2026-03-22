---
title: Tipuri de mesaje | Română
description: Definiții și versiuni de mesaje pacs ISO 20022 acceptate.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# Tipuri de mesaje

Pacs008 acoperă definiția de mesaj pacs.008 principală și mesajele conexe utilizate în fluxurile de orchestrare și reconciliere.

## Suport inclus

- `pacs.002.001.12`
- `pacs.003.001.09`
- `pacs.004.001.11`
- `pacs.007.001.11`
- `pacs.008.001.01`
- `pacs.008.001.02`
- `pacs.008.001.03`
- `pacs.008.001.04`
- `pacs.008.001.05`
- `pacs.008.001.06`
- `pacs.008.001.07`
- `pacs.008.001.08`
- `pacs.008.001.09`
- `pacs.008.001.10`
- `pacs.008.001.11`
- `pacs.008.001.12`
- `pacs.008.001.13`
- `pacs.009.001.10`
- `pacs.010.001.05`
- `pacs.028.001.05`

## Model de livrare

Fiecare tip de mesaj acceptat este susținut de active șablon și logică de validare, astfel încât echipele pot standardiza generarea și testele de regresie pe mai multe canale.

## Contextul pieței 2026

- **SEPA SCT / SCT Inst**: pacs.008 rămâne central pentru schimbul de transferuri de credit și procesarea plăților instantanee.
- **CBPR+**: pacs.008 continuă să înlocuiască sarcinile transfrontaliere în stil MT103 cu date structurate mai bogate.
- **Adrese structurate**: ghidul actual al pieței indică tranziția din noiembrie 2026 de la adresele poștale complet nestructurate.
- **Metoda serială și STP**: lanțurile bancă-la-bancă multi-etapă rămân importante, iar variantele de procesare directă rămân esențiale pentru eficiența operațională.

## Capacități operaționale

Pacs008 oferă generare și validare bazate pe șabloane pe reviziile definițiilor de mesaje acceptate:

- compara versiunile
- testa regresiv actualizările de scheme
- consolida datele mesajelor de plată de ieșire înainte de lansare
- susține echipele de produs, operațiuni și migrare dintr-o singură bază de cod

