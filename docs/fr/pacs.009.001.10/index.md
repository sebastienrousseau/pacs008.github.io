---
title: pacs.009.001.10 | Virement entre institutions financières | pacs008
description: Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l'institution plutôt...
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Virement entre institutions financières

| | |
|---|---|
| **Nom ISO** | FinancialInstitutionCreditTransferV10 |
| **Statut d'enregistrement** | Registered |
| **Année** | 2019 |
| **Version** | 10 |

## Présentation

Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l'institution plutôt que pour un client. Il prend en charge le financement interbancaire, les paiements de couverture et la gestion de liquidité.

> Dernière vérification par rapport aux sources primaires le 23 mars 2026. Date de référence du catalogue ISO 20022 : 2025-02-27 ; les liens vers les sources figurent ci-dessous.

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

| Éléments de données clés | Contexte métier |
|---|---|
| **GrpHdr** — En-tête de groupe avec identification du message et informations de règlement | Utilisé pour les virements de compte propre banque à banque et les paiements de couverture |
| **CdtTrfTxInf** — Informations de transaction de virement avec montant de règlement interbancaire | Prend en charge la gestion de liquidité entre partenaires de banque correspondante |
| **Dbtr / DbtrAgt** — Institution débitrice et identification de son agent | Porte le volet couverture des virements clients réglés par méthode de couverture |
| **Cdtr / CdtrAgt** — Institution créancière et identification de son agent | Permet les opérations de trésorerie et de financement entre institutions financières |
| **IntrBkSttlmAmt** — Montant de règlement interbancaire dans la devise de règlement | L'institution débitrice envoie pacs.009 à l'institution créancière pour transférer ses propres fonds. Pour les paiements par couverture, pacs.009 fournit le volet financement tandis que pacs.008 porte l'instruction client par un chemin séparé. |

## Contexte CBPR+ et schémas

- Remplace MT202 et MT202COV pour les transferts d'institution à institution
- Les flux de méthode de couverture associent pacs.009 à l'instruction client pacs.008 sous-jacente
- Les données de partie structurées et l'identification LEI sont de plus en plus requises
- SWIFT gpi couvre pacs.009 pour la transparence de la banque correspondante

## Flux de message

L'institution débitrice envoie pacs.009 à l'institution créancière pour transférer ses propres fonds. Pour les paiements par couverture, pacs.009 fournit le volet financement tandis que pacs.008 porte l'instruction client par un chemin séparé.

## Tableau des écarts de version

| Plage de versions | Pourquoi c'est important | Conséquence pratique |
|---|---|---|
| pacs.009.001.10 | Implémentation actuelle dans pacs008 | Correspond au niveau actuel de prise en charge du projet pour les flux de virements FI. |
| pacs.009.001.11-12 | Révisions ultérieures du catalogue | Important pour la planification de la feuille de route dans les environnements de correspondance et de paiements de couverture. |

## Exemple XML commenté

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Commentaires sur les champs

- `InstrId`: Utilisez un identifiant de jambe de financement qui puisse rester rattaché au flux client sous-jacent.
- `IntrBkSttlmAmt`: Les flux sur compte propre et de couverture exigent souvent des contrôles de trésorerie plus stricts sur les montants et les dates de règlement.
- `Dbtr` / `Cdtr`: Il s'agit de parties institutionnelles, et non de rôles client retail ; modélisez-les comme tels.

## Comparer pacs.009 vs pacs.008

| Dimension | pacs.009.001.10 | Message de comparaison |
|---|---|---|
| Objectif principal | Virement sur compte propre d'institution ou jambe de couverture | Virement client |
| Responsable métier | Opérations de trésorerie, de correspondance et de financement | Opérations de paiements clients |
| Associations typiques | pacs.002, pacs.004 et flux pacs.008 liés | pacs.002, pacs.004, pacs.007, pacs.028 |
| Hypothèse erronée à éviter | Qu'il s'agit simplement d'une pacs.008 plus technique | Qu'il peut porter sans difficulté des flux de financement d'institution |

## Références primaires

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## Messages associés
| Type de message | Description | Présentation |
|---|---|---|
| [`pacs.008.001.13`](/fr/pacs.008.001.13/) | Virement client FI à FI | Le message pacs.008 est l'instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d'un client. Il porte les informations de débiteur, créancier, montant et remise pour une ou plusieurs transactions de virement. |
| [`pacs.002.001.12`](/fr/pacs.002.001.12/) | Rapport de statut de paiement FI à FI | Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d'une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d'un message de paiement. |
| [`pacs.010.001.05`](/fr/pacs.010.001.05/) | Prélèvement entre institutions financières | Le message pacs.010 est utilisé entre institutions financières pour les transactions de prélèvement sur le compte propre de l'institution. Il permet à une institution de collecter des fonds directement depuis le compte d'une autre institution. |

