---
title: pacs.028.001.05 — FI to FI Payment Status Request | Français
description: Le message pacs.028 est envoyé par une institution financière pour demander le statut d'une instruction de paiement précédemment envoyée. Il permet le suivi proactif du traitement des paiements sans attendre un rapport de statut non sollicité.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **Nom ISO** | FIToFIPaymentStatusRequestV05 |
| **Statut d'enregistrement** | Registered |
| **Année** | 2019 |
| **Version** | 5 |

## Présentation

Le message pacs.028 est envoyé par une institution financière pour demander le statut d'une instruction de paiement précédemment envoyée. Il permet le suivi proactif du traitement des paiements sans attendre un rapport de statut non sollicité.

## Éléments de données clés

- **GrpHdr** — En-tête de groupe avec identification du message et horodatage de création
- **TxInf** — Informations de transaction identifiant le paiement à interroger
- **OrgnlGrpInf** — Informations du groupe d'origine référençant le message source
- **OrgnlInstrId** — Identification de l'instruction d'origine du paiement source
- **OrgnlEndToEndId** — Identification de bout en bout d'origine pour la traçabilité

## Contexte métier

- Permet l'interrogation proactive du statut pour les instructions de paiement en transit
- Aide les équipes d'opérations à enquêter sur les paiements retardés ou manquants
- Complète pacs.002 en initiant la communication de statut plutôt que d'attendre
- Utilisé dans les flux de gestion d'exceptions et de surveillance des SLA

## Contexte CBPR+ et schémas

- Remplace les modèles d'interrogation de statut MT199 et les requêtes manuelles de messages SWIFT
- CBPR+ prend en charge les demandes de statut structurées liées aux identifiants de message d'origine
- Le suivi basé sur l'UETR via gpi réduit le besoin d'interrogations manuelles
- De plus en plus intégré dans les tableaux de bord automatisés d'opérations de paiement

## Flux de message

L'agent instructeur envoie pacs.028 à l'agent instruit pour demander le statut d'un paiement spécifique. L'agent instruit répond avec un pacs.002 contenant le statut de traitement actuel.

## Messages associés

- [`pacs.002.001.12`](/fr/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.008.001.13`](/fr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/fr/pacs.009.001.10/) — Financial Institution Credit Transfer

