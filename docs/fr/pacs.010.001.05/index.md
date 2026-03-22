---
title: pacs.010.001.05 — Financial Institution Direct Debit | Français
description: Le message pacs.010 est utilisé entre institutions financières pour les transactions de prélèvement sur le compte propre de l'institution. Il permet à une institution de collecter des fonds directement depuis le compte d'une autre institution.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **Nom ISO** | FinancialInstitutionDirectDebitV05 |
| **Statut d'enregistrement** | Registered |
| **Année** | 2019 |
| **Version** | 5 |

## Présentation

Le message pacs.010 est utilisé entre institutions financières pour les transactions de prélèvement sur le compte propre de l'institution. Il permet à une institution de collecter des fonds directement depuis le compte d'une autre institution.

## Éléments de données clés

- **GrpHdr** — En-tête de groupe avec identification du message et informations de règlement
- **DrctDbtTxInf** — Informations de transaction de prélèvement avec montant de collecte
- **Cdtr / CdtrAgt** — Institution créancière et identification de son agent
- **Dbtr / DbtrAgt** — Institution débitrice et identification de son agent
- **IntrBkSttlmAmt** — Montant de règlement interbancaire dans la devise de règlement

## Contexte métier

- Prend en charge la collecte de prélèvement interbancaire entre institutions financières
- Utilisé pour la collecte de frais, les appels de marge et les obligations de règlement institutionnel
- Nécessite des arrangements bilatéraux préétablis entre institutions participantes
- Essentiel pour la gestion de trésorerie institutionnelle et les cycles de règlement interbancaire

## Contexte CBPR+ et schémas

- Remplace des éléments du MT204 pour le traitement des prélèvements interbancaires
- L'identification structurée des parties suit les mêmes exigences que les autres messages pacs
- La validation des identifiants institutionnels (BIC, LEI) est obligatoire
- Inclus dans les feuilles de route d'adoption complète ISO 20022 à travers les infrastructures de marché

## Flux de message

L'institution créancière envoie pacs.010 à l'institution débitrice pour collecter des fonds selon un accord préétabli. L'institution débitrice valide la demande et règle ou rejette le prélèvement.

## Messages associés

- [`pacs.009.001.10`](/fr/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.002.001.12`](/fr/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/fr/pacs.003.001.09/) — FI to FI Customer Direct Debit

