---
title: API | Română
description: Suport pentru fluxuri REST și CLI în Pacs008.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# API

Proiectul oferă atât un REST API, cât și un CLI pentru fluxurile operaționale de mesaje de plăți.

## Capacități API

- endpoint-uri de sănătate și pregătire
- validarea datelor înainte de generarea XML
- generare sincronă pentru fluxuri directe
- execuție asincronă a sarcinilor pentru pipeline-uri mai lungi
- fișiere generate descărcabile prin fluxuri de finalizare a sarcinilor

## Capacități CLI

- indicarea unui fișier sursă și a unei versiuni de mesaj
- validarea față de XSD înainte de livrare
- generarea XML în directoare de ieșire prietenoase cu pipeline-urile
- integrarea în sarcini CI, programări batch și instrumente locale de operator

## Focus pe implementare

Pacs008 este conceput pentru utilizare operațională de către echipele de procesare a plăților:

- validare pre-zbor înainte de crearea mesajului
- selecția schemei și versiunii la runtime
- fluxuri de generare asincrone pentru servicii interne
- ieșiri deterministe pentru teste și urme de audit

## Cerințe de calitate a datelor pentru 2026

Cerințele de calitate a mesajelor se înăspresc în industrie, în special în jurul:

- identificarea părților și agenților
- pregătirea adreselor structurate sau hibride
- gestionare mai bogată a remiterilor și referințelor
- transparență pe lanțurile de plăți seriale

API-ul și CLI-ul sunt concepute pentru a face aceste verificări parte din fluxul de lucru în loc de un pas de revizuire manuală.

