---
title: pacs.008.001.13 | Virement client FI à FI | pacs008
description: Le message pacs.008 est l'instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d'un client. Il porte...
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — Virement client FI à FI

| | |
|---|---|
| **Nom ISO** | FIToFICustomerCreditTransferV13 |
| **Statut d'enregistrement** | Registered |
| **Année** | 2023 |
| **Version** | 13 |

## Présentation

Le message pacs.008 est l'instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d'un client. Il porte les informations de débiteur, créancier, montant et remise pour une ou plusieurs transactions de virement.

> Dernière vérification par rapport aux sources primaires le 23 mars 2026. Date de référence du catalogue ISO 20022 : 2025-02-27 ; les liens vers les sources figurent ci-dessous.

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

| Éléments de données clés | Contexte métier |
|---|---|
| **GrpHdr** — En-tête de groupe avec ID de message, date de création, nombre de transactions et informations de règlement | Le message principal pour les virements transfrontaliers et nationaux initiés par les clients |
| **CdtTrfTxInf** — Informations de transaction de virement avec montant, frais et objet | Utilisé dans SEPA SCT, SEPA Instant, CBPR+ et les systèmes de compensation nationaux |
| **Dbtr / DbtrAgt** — Identification et coordonnées du compte du débiteur et de son agent | Porte des informations de remise structurées pour la réconciliation automatique |
| **Cdtr / CdtrAgt** — Identification et coordonnées du compte du créancier et de son agent | Prend en charge les méthodes de règlement série, couverture et directe pour les chaînes de paiement multi-étapes |
| **RmtInf** — Informations de remise pour les références de paiement structurées ou non structurées | L'agent du débiteur crée un pacs.008 et l'envoie à l'agent du créancier (directement ou via des intermédiaires). Chaque agent de la chaîne valide, enrichit et transmet l'instruction jusqu'à ce que l'agent du créancier crédite le compte du bénéficiaire. |

## Contexte CBPR+ et schémas

- Remplace MT103 et MT103+ pour les virements clients transfrontaliers
- L'échéance d'adresse structurée de novembre 2026 s'applique à toutes les adresses postales des parties
- SWIFT gpi exige pacs.008 pour le suivi de bout en bout basé sur l'UETR
- 13 révisions reflètent l'évolution continue des schémas à travers les infrastructures de marché

## Flux de message

L'agent du débiteur crée un pacs.008 et l'envoie à l'agent du créancier (directement ou via des intermédiaires). Chaque agent de la chaîne valide, enrichit et transmet l'instruction jusqu'à ce que l'agent du créancier crédite le compte du bénéficiaire.

## Tableau des écarts de version

| Plage de versions | Pourquoi c'est important | Conséquence pratique |
|---|---|---|
| pacs.008.001.01-07 | Révisions initiales | Utile surtout pour l'analyse des migrations historiques et du contexte d'évolution des versions. |
| pacs.008.001.08-12 | Révisions modernes avant la version actuelle | Ce sont les révisions les plus susceptibles d'apparaître dans les projets récents de migration ou de coexistence. |
| pacs.008.001.13 | Révision actuelle du catalogue | À utiliser pour planifier autour de la version actuelle, tout en vérifiant les règles de schéma et la préparation des contreparties. |

## Exemple XML commenté

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### Commentaires sur les champs

- `MsgId`: Ce champ doit identifier l'enveloppe du message, et non la référence de paiement du client final.
- `EndToEndId`: Conservez une traçabilité orientée client stable dans les systèmes en aval lorsque c'est possible.
- `UETR`: Utilisez ce champ de façon cohérente dans les environnements transfrontaliers à fort besoin de suivi ; ne le générez pas de façon ad hoc dans des étapes ultérieures du traitement.
- `IntrBkSttlmAmt`: Validez le montant et la devise avec des règles métier avant la validation du schéma.
- `Dbtr` / `Cdtr`: La qualité des données de parties, la structure des adresses et les identifiants sont généralement les principaux facteurs du volume de correction.

## Comparer pacs.008 vs pacs.009

| Dimension | pacs.008.001.13 | Message de comparaison |
|---|---|---|
| Objectif principal | Virement client | Virement sur compte propre d'institution ou jambe de couverture |
| Responsable métier | Opérations de paiements clients | Opérations de trésorerie, de correspondance et de liquidité |
| Associations typiques | pacs.002, pacs.004, pacs.007, pacs.028 | pacs.002, pacs.004, and sometimes linked pacs.008 flows |
| Hypothèse erronée à éviter | That all bank-to-bank transfers belong here | That it can replace customer credit-transfer instructions |

## Références primaires

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


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
| Type de message | Description | Présentation |
|---|---|---|
| [`pacs.002.001.12`](/fr/pacs.002.001.12/) | Rapport de statut de paiement FI à FI | Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d'une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d'un message de paiement. |
| [`pacs.004.001.11`](/fr/pacs.004.001.11/) | Retour de paiement | Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu'un paiement ne peut être appliqué, a été envoyé par erreur ou fait l'objet d'un rappel par l'institution d'origine. |
| [`pacs.009.001.10`](/fr/pacs.009.001.10/) | Virement entre institutions financières | Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l'institution plutôt que pour un client. Il prend en charge le financement interbancaire, les paiements de couverture et la gestion de liquidité. |

