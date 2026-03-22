---
title: pacs.008.001.13 — FI to FI Customer Credit Transfer | Français
description: Le message pacs.008 est l'instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d'un client. Il porte les informations de débiteur, créancier, montant et remise pour une ou plusieurs transactions de virement.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **Nom ISO** | FIToFICustomerCreditTransferV13 |
| **Statut d'enregistrement** | Registered |
| **Année** | 2023 |
| **Version** | 13 |

## Présentation

Le message pacs.008 est l'instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d'un client. Il porte les informations de débiteur, créancier, montant et remise pour une ou plusieurs transactions de virement.

## Éléments de données clés

- **GrpHdr** — En-tête de groupe avec ID de message, date de création, nombre de transactions et informations de règlement
- **CdtTrfTxInf** — Informations de transaction de virement avec montant, frais et objet
- **Dbtr / DbtrAgt** — Identification et coordonnées du compte du débiteur et de son agent
- **Cdtr / CdtrAgt** — Identification et coordonnées du compte du créancier et de son agent
- **RmtInf** — Informations de remise pour les références de paiement structurées ou non structurées

## Contexte métier

- Le message principal pour les virements transfrontaliers et nationaux initiés par les clients
- Utilisé dans SEPA SCT, SEPA Instant, CBPR+ et les systèmes de compensation nationaux
- Porte des informations de remise structurées pour la réconciliation automatique
- Prend en charge les méthodes de règlement série, couverture et directe pour les chaînes de paiement multi-étapes

## Contexte CBPR+ et schémas

- Remplace MT103 et MT103+ pour les virements clients transfrontaliers
- L'échéance d'adresse structurée de novembre 2026 s'applique à toutes les adresses postales des parties
- SWIFT gpi exige pacs.008 pour le suivi de bout en bout basé sur l'UETR
- 13 révisions reflètent l'évolution continue des schémas à travers les infrastructures de marché

## Flux de message

L'agent du débiteur crée un pacs.008 et l'envoie à l'agent du créancier (directement ou via des intermédiaires). Chaque agent de la chaîne valide, enrichit et transmet l'instruction jusqu'à ce que l'agent du créancier crédite le compte du bénéficiaire.

## Versions prises en charge

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Messages associés

- [`pacs.002.001.12`](/fr/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.004.001.11`](/fr/pacs.004.001.11/) — Payment Return
- [`pacs.009.001.10`](/fr/pacs.009.001.10/) — Financial Institution Credit Transfer

