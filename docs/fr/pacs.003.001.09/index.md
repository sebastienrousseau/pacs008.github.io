---
title: pacs.003.001.09 — FI to FI Customer Direct Debit | Français
description: Le message pacs.003 est échangé entre institutions financières pour exécuter une instruction de prélèvement client. Il permet à la banque du créancier de collecter des fonds auprès de la banque du débiteur au nom du créancier.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **Nom ISO** | FIToFICustomerDirectDebitV09 |
| **Statut d'enregistrement** | Registered |
| **Année** | 2019 |
| **Version** | 9 |

## Présentation

Le message pacs.003 est échangé entre institutions financières pour exécuter une instruction de prélèvement client. Il permet à la banque du créancier de collecter des fonds auprès de la banque du débiteur au nom du créancier.

## Éléments de données clés

- **GrpHdr** — En-tête de groupe avec identification du message et informations de règlement
- **DrctDbtTxInf** — Informations de transaction de prélèvement avec montant et parties
- **Cdtr** — Identification et coordonnées du compte du créancier
- **CdtrAgt** — Identification de l'agent du créancier (institution collectrice)
- **DbtrAgt** — Identification de l'agent du débiteur (institution payeuse)

## Contexte métier

- Prend en charge les schémas SEPA Core et B2B de prélèvement
- Utilisé pour la collecte de paiements récurrents tels que les abonnements, factures et remboursements de prêts
- Nécessite une référence de mandat valide entre débiteur et créancier
- Permet la collecte en masse de plusieurs instructions de prélèvement dans un seul message

## Contexte CBPR+ et schémas

- Les exigences d'adresse structurée et d'identification des parties s'appliquent également aux prélèvements
- Les données relatives au mandat doivent être entièrement structurées à partir de novembre 2026
- Remplace les formats de prélèvement de type MT104 dans les flux transfrontaliers
- La validation de l'identification du schéma créancier est de plus en plus appliquée

## Flux de message

L'agent du créancier initie pacs.003 vers l'agent du débiteur pour collecter des fonds. L'agent du débiteur valide le mandat, vérifie la couverture du compte et règle ou retourne la transaction.

## Messages associés

- [`pacs.004.001.11`](/fr/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/fr/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.002.001.12`](/fr/pacs.002.001.12/) — FI to FI Payment Status Report

