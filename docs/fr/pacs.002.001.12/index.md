---
title: pacs.002.001.12 — FI to FI Payment Status Report | Français
description: Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d'une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d'un message de paiement.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **Nom ISO** | FIToFIPaymentStatusReportV12 |
| **Statut d'enregistrement** | Registered |
| **Année** | 2019 |
| **Version** | 12 |

## Présentation

Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d'une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d'un message de paiement.

## Éléments de données clés

- **GrpHdr** — En-tête de groupe avec identification du message et horodatage de création
- **OrgnlGrpInfAndSts** — Informations et statut du groupe d'origine pour le reporting en masse
- **TxInfAndSts** — Informations et statut de la transaction pour les résultats individuels
- **StsRsnInf** — Informations sur le motif du statut avec codes de raison structurés
- **OrgnlTxRef** — Référence de la transaction d'origine reliant à l'instruction source

## Contexte métier

- Utilisé pour confirmer le règlement ou signaler le rejet de virements, prélèvements et retours de paiement
- Permet la réconciliation entre agents instructeurs et instruits
- Requis dans les flux CBPR+ pour accuser réception du traitement des messages pacs.008 et pacs.009
- Prend en charge le reporting de statut au niveau du groupe et au niveau des transactions individuelles

## Contexte CBPR+ et schémas

- Remplace les narratifs de statut MT199 et du champ 79 dans les messages MT
- CBPR+ impose pacs.002 pour toute communication de statut de paiement
- Les codes de raison structurés remplacent les explications de rejet en texte libre
- L'intégration du suivi SWIFT gpi nécessite pacs.002 pour la transparence de bout en bout

## Flux de message

L'agent instruit (récepteur) envoie pacs.002 à l'agent instructeur (émetteur) pour confirmer l'acceptation, le règlement ou le rejet d'une instruction de paiement reçue telle que pacs.008 ou pacs.009.

## Messages associés

- [`pacs.008.001.13`](/fr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/fr/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.028.001.05`](/fr/pacs.028.001.05/) — FI to FI Payment Status Request

