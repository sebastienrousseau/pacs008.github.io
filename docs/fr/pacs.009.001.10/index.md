---
title: pacs.009.001.10 — Financial Institution Credit Transfer | Français
description: Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l'institution plutôt que pour un client. Il prend en charge le financement interbancaire, les paiements de couverture et la gestion de liquidité.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **Nom ISO** | FinancialInstitutionCreditTransferV10 |
| **Statut d'enregistrement** | Registered |
| **Année** | 2019 |
| **Version** | 10 |

## Présentation

Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l'institution plutôt que pour un client. Il prend en charge le financement interbancaire, les paiements de couverture et la gestion de liquidité.

## Éléments de données clés

- **GrpHdr** — En-tête de groupe avec identification du message et informations de règlement
- **CdtTrfTxInf** — Informations de transaction de virement avec montant de règlement interbancaire
- **Dbtr / DbtrAgt** — Institution débitrice et identification de son agent
- **Cdtr / CdtrAgt** — Institution créancière et identification de son agent
- **IntrBkSttlmAmt** — Montant de règlement interbancaire dans la devise de règlement

## Contexte métier

- Utilisé pour les virements de compte propre banque à banque et les paiements de couverture
- Prend en charge la gestion de liquidité entre partenaires de banque correspondante
- Porte le volet couverture des virements clients réglés par méthode de couverture
- Permet les opérations de trésorerie et de financement entre institutions financières

## Contexte CBPR+ et schémas

- Remplace MT202 et MT202COV pour les transferts d'institution à institution
- Les flux de méthode de couverture associent pacs.009 à l'instruction client pacs.008 sous-jacente
- Les données de partie structurées et l'identification LEI sont de plus en plus requises
- SWIFT gpi couvre pacs.009 pour la transparence de la banque correspondante

## Flux de message

L'institution débitrice envoie pacs.009 à l'institution créancière pour transférer ses propres fonds. Pour les paiements par couverture, pacs.009 fournit le volet financement tandis que pacs.008 porte l'instruction client par un chemin séparé.

## Messages associés

- [`pacs.008.001.13`](/fr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.002.001.12`](/fr/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.010.001.05`](/fr/pacs.010.001.05/) — Financial Institution Direct Debit

