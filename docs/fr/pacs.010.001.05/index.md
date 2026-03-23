---
title: pacs.010.001.05 | Financial Institution Direct Debit | pacs008
description: Le message pacs.010 est utilisé entre institutions financières pour les transactions de prélèvement sur le compte propre de l'institution. Il permet à une...
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

> Dernière vérification par rapport aux sources primaires le 23 mars 2026. Date de référence du catalogue ISO 20022 : 27 February 2025 ; les liens vers les sources figurent ci-dessous.

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

| Éléments de données clés | Contexte métier |
|---|---|
| **GrpHdr** — En-tête de groupe avec identification du message et informations de règlement | Prend en charge la collecte de prélèvement interbancaire entre institutions financières |
| **DrctDbtTxInf** — Informations de transaction de prélèvement avec montant de collecte | Utilisé pour la collecte de frais, les appels de marge et les obligations de règlement institutionnel |
| **Cdtr / CdtrAgt** — Institution créancière et identification de son agent | Nécessite des arrangements bilatéraux préétablis entre institutions participantes |
| **Dbtr / DbtrAgt** — Institution débitrice et identification de son agent | Essentiel pour la gestion de trésorerie institutionnelle et les cycles de règlement interbancaire |
| **IntrBkSttlmAmt** — Montant de règlement interbancaire dans la devise de règlement | L'institution créancière envoie pacs.010 à l'institution débitrice pour collecter des fonds selon un accord préétabli. L'institution débitrice valide la demande et règle ou rejette le prélèvement. |

## Contexte CBPR+ et schémas

- Remplace des éléments du MT204 pour le traitement des prélèvements interbancaires
- L'identification structurée des parties suit les mêmes exigences que les autres messages pacs
- La validation des identifiants institutionnels (BIC, LEI) est obligatoire
- Inclus dans les feuilles de route d'adoption complète ISO 20022 à travers les infrastructures de marché

## Flux de message

L'institution créancière envoie pacs.010 à l'institution débitrice pour collecter des fonds selon un accord préétabli. L'institution débitrice valide la demande et règle ou rejette le prélèvement.

## Tableau des écarts de version

| Plage de versions | Pourquoi c'est important | Conséquence pratique |
|---|---|---|
| pacs.010.001.05 | Implémentation actuelle dans pacs008 | Point de référence pour la prise en charge des prélèvements d'institution dans le projet actuel. |
| pacs.010.001.06 | Révision ultérieure du catalogue | Review before adopting newer infrastructure requirements. |

## Exemple XML commenté

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Commentaires sur les champs

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need explicit bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly; this is not a retail-customer debit model.

## Références primaires

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Messages associés
| Type de message | Description | Présentation |
|---|---|---|
| [`pacs.009.001.10`](/fr/pacs.009.001.10/) | Financial Institution Credit Transfer | Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l'institution plutôt que pour un client. Il prend en charge le financement interbancaire, les paiements de couverture et la gestion de liquidité. |
| [`pacs.002.001.12`](/fr/pacs.002.001.12/) | FI to FI Payment Status Report | Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d'une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d'un message de paiement. |
| [`pacs.003.001.09`](/fr/pacs.003.001.09/) | FI to FI Customer Direct Debit | Le message pacs.003 est échangé entre institutions financières pour exécuter une instruction de prélèvement client. Il permet à la banque du créancier de collecter des fonds auprès de la banque du débiteur au nom du créancier. |

