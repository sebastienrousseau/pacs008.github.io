---
title: pacs.003.001.09 | Prélèvement client FI à FI | pacs008
description: Le message pacs.003 est échangé entre institutions financières pour exécuter une instruction de prélèvement client. Il permet à la banque du créancier de...
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — Prélèvement client FI à FI

| | |
|---|---|
| **Nom ISO** | FIToFICustomerDirectDebitV09 |
| **Statut d'enregistrement** | Registered |
| **Année** | 2019 |
| **Version** | 9 |

## Présentation

Le message pacs.003 est échangé entre institutions financières pour exécuter une instruction de prélèvement client. Il permet à la banque du créancier de collecter des fonds auprès de la banque du débiteur au nom du créancier.

> Dernière vérification par rapport aux sources primaires le 23 mars 2026. Date de référence du catalogue ISO 20022 : 2025-02-27 ; les liens vers les sources figurent ci-dessous.

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

| Éléments de données clés | Contexte métier |
|---|---|
| **GrpHdr** — En-tête de groupe avec identification du message et informations de règlement | Prend en charge les schémas SEPA Core et B2B de prélèvement |
| **DrctDbtTxInf** — Informations de transaction de prélèvement avec montant et parties | Utilisé pour la collecte de paiements récurrents tels que les abonnements, factures et remboursements de prêts |
| **Cdtr** — Identification et coordonnées du compte du créancier | Nécessite une référence de mandat valide entre débiteur et créancier |
| **CdtrAgt** — Identification de l'agent du créancier (institution collectrice) | Permet la collecte en masse de plusieurs instructions de prélèvement dans un seul message |
| **DbtrAgt** — Identification de l'agent du débiteur (institution payeuse) | L'agent du créancier initie pacs.003 vers l'agent du débiteur pour collecter des fonds. L'agent du débiteur valide le mandat, vérifie la couverture du compte et règle ou retourne la transaction. |

## Contexte CBPR+ et schémas

- Les exigences d'adresse structurée et d'identification des parties s'appliquent également aux prélèvements
- Les données relatives au mandat doivent être entièrement structurées à partir de novembre 2026
- Remplace les formats de prélèvement de type MT104 dans les flux transfrontaliers
- La validation de l'identification du schéma créancier est de plus en plus appliquée

## Flux de message

L'agent du créancier initie pacs.003 vers l'agent du débiteur pour collecter des fonds. L'agent du débiteur valide le mandat, vérifie la couverture du compte et règle ou retourne la transaction.

## Tableau des écarts de version

| Plage de versions | Pourquoi c'est important | Conséquence pratique |
|---|---|---|
| pacs.003.001.09 | Implémentation actuelle dans pacs008 | Utile pour la modélisation de références de prélèvement dans le projet actuel. |
| pacs.003.001.10-11 | Révisions ultérieures du catalogue | Examinez les révisions ultérieures pour les évolutions de mandat, de statut et d'interopérabilité avant tout usage greenfield. |

## Exemple XML commenté

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Commentaires sur les champs

- `EndToEndId`: Gardez les identifiants de mandat et de recouvrement distincts des références de facture métier.
- `IntrBkSttlmAmt`: Validez la précision du montant débité et les règles de devise avant de générer le XML.
- `Dbtr` / `Cdtr`: La réussite d'un prélèvement dépend souvent davantage de la qualité du compte et du mandat que de la structure XML.

## Références primaires

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Messages associés
| Type de message | Description | Présentation |
|---|---|---|
| [`pacs.004.001.11`](/fr/pacs.004.001.11/) | Retour de paiement | Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu'un paiement ne peut être appliqué, a été envoyé par erreur ou fait l'objet d'un rappel par l'institution d'origine. |
| [`pacs.007.001.11`](/fr/pacs.007.001.11/) | Annulation de paiement FI à FI | Le message pacs.007 est utilisé pour annuler une instruction de paiement précédemment envoyée qui n'a pas encore été réglée ou pour demander l'annulation d'un paiement réglé. Contrairement au pacs.004 (retour), il est initié par l'agent instructeur d'origine. |
| [`pacs.002.001.12`](/fr/pacs.002.001.12/) | Rapport de statut de paiement FI à FI | Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d'une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d'un message de paiement. |

