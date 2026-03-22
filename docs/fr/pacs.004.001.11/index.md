---
title: pacs.004.001.11 — Payment Return | Français
description: Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu'un paiement ne peut être appliqué, a été envoyé par erreur ou fait l'objet d'un rappel par l'institution d'origine.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **Nom ISO** | PaymentReturnV11 |
| **Statut d'enregistrement** | Registered |
| **Année** | 2019 |
| **Version** | 11 |

## Présentation

Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu'un paiement ne peut être appliqué, a été envoyé par erreur ou fait l'objet d'un rappel par l'institution d'origine.

## Éléments de données clés

- **GrpHdr** — En-tête de groupe avec identification du message et horodatage de création
- **TxInf** — Informations de transaction avec montant de retour et parties
- **OrgnlGrpInf** — Informations du groupe d'origine reliant au message source
- **RtrRsnInf** — Informations sur le motif de retour avec codes de raison structurés
- **OrgnlTxRef** — Référence de la transaction d'origine pour appariement et réconciliation

## Contexte métier

- Gère les retours post-règlement lorsque le compte du bénéficiaire ne peut être crédité
- Prend en charge les scénarios de rappel lorsque l'expéditeur demande le retour des fonds
- Porte des codes de raison de retour structurés pour la transparence réglementaire et opérationnelle
- S'applique aux retours de virements (pacs.008) et aux retours de prélèvements (pacs.003)

## Contexte CBPR+ et schémas

- Remplace le MT103 RETURN et la messagerie de retour par couverture
- Les codes de raison de retour sont normalisés et lisibles par machine selon ISO 20022
- CBPR+ exige les données complètes de référence de la transaction d'origine pour l'appariement
- Le suivi SWIFT gpi s'étend aux transactions de retour pour une visibilité de bout en bout

## Flux de message

L'agent instruit envoie pacs.004 en retour à travers la chaîne de paiement pour restituer les fonds précédemment réglés. Chaque agent de la chaîne traite le retour et recrédite les comptes concernés.

## Messages associés

- [`pacs.008.001.13`](/fr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.003.001.09`](/fr/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.002.001.12`](/fr/pacs.002.001.12/) — FI to FI Payment Status Report

