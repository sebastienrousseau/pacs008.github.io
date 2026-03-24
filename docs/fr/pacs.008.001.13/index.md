---
title: pacs.008.001.13 | Virement client FI à FI | pacs008
description: Le message pacs.008 est l'instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d'un client. Il porte...
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — Virement client FI à FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Champ</th>
        <th scope="col">Valeur</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Nom ISO</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Statut d&#39;enregistrement</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Année</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Version</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

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

<div class="operational-matrix-table" tabindex="0" aria-label="Éléments de données clés Contexte métier">
  <table>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Éléments de données clés</th>
        <th>Contexte métier</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — En-tête de groupe avec ID de message, date de création, nombre de transactions et informations de règlement</td>
          <td class="operational-matrix-table__right">Le message principal pour les virements transfrontaliers et nationaux initiés par les clients</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Informations de transaction de virement avec montant, frais et objet</td>
          <td class="operational-matrix-table__right">Utilisé dans SEPA SCT, SEPA Instant, CBPR+ et les systèmes de compensation nationaux</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identification et coordonnées du compte du débiteur et de son agent</td>
          <td class="operational-matrix-table__right">Porte des informations de remise structurées pour la réconciliation automatique</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identification et coordonnées du compte du créancier et de son agent</td>
          <td class="operational-matrix-table__right">Prend en charge les méthodes de règlement série, couverture et directe pour les chaînes de paiement multi-étapes</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Informations de remise pour les références de paiement structurées ou non structurées</td>
          <td class="operational-matrix-table__right">L&#39;agent du débiteur crée un pacs.008 et l&#39;envoie à l&#39;agent du créancier (directement ou via des intermédiaires). Chaque agent de la chaîne valide, enrichit et transmet l&#39;instruction jusqu&#39;à ce que l&#39;agent du créancier crédite le compte du bénéficiaire.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexte CBPR+ et schémas

- Remplace MT103 et MT103+ pour les virements clients transfrontaliers
- L'échéance d'adresse structurée de novembre 2026 s'applique à toutes les adresses postales des parties
- SWIFT gpi exige pacs.008 pour le suivi de bout en bout basé sur l'UETR
- 13 révisions reflètent l'évolution continue des schémas à travers les infrastructures de marché

## Flux de message

L'agent du débiteur crée un pacs.008 et l'envoie à l'agent du créancier (directement ou via des intermédiaires). Chaque agent de la chaîne valide, enrichit et transmet l'instruction jusqu'à ce que l'agent du créancier crédite le compte du bénéficiaire.

## Tableau des écarts de version

<div class="version-diff-table" tabindex="0" aria-label="Tableau des écarts de version">
  <table>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Plage de versions</th>
        <th>Pourquoi c&#39;est important</th>
        <th>Conséquence pratique</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">Révisions initiales</td>
          <td class="version-diff-table__takeaway">Utile surtout pour l&#39;analyse des migrations historiques et du contexte d&#39;évolution des versions.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">Révisions modernes avant la version actuelle</td>
          <td class="version-diff-table__takeaway">Ce sont les révisions les plus susceptibles d&#39;apparaître dans les projets récents de migration ou de coexistence.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">Révision actuelle du catalogue</td>
          <td class="version-diff-table__takeaway">À utiliser pour planifier autour de la version actuelle, tout en vérifiant les règles de schéma et la préparation des contreparties.</td>
        </tr>
    </tbody>
  </table>
</div>

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

<div class="message-comparison-table" tabindex="0" aria-label="Comparer pacs.008 vs pacs.009">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.008.001.13</th>
        <th>Message de comparaison</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Objectif principal</td>
          <td class="message-comparison-table__current">Virement client</td>
          <td class="message-comparison-table__other">Virement sur compte propre d&#39;institution ou jambe de couverture</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Responsable métier</td>
          <td class="message-comparison-table__current">Opérations de paiements clients</td>
          <td class="message-comparison-table__other">Opérations de trésorerie, de correspondance et de liquidité</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Associations typiques</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, and sometimes linked pacs.008 flows</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Hypothèse erronée à éviter</td>
          <td class="message-comparison-table__current">That all bank-to-bank transfers belong here</td>
          <td class="message-comparison-table__other">That it can replace customer credit-transfer instructions</td>
        </tr>
    </tbody>
  </table>
</div>

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

<div class="message-versions-table" tabindex="0" aria-label="Versions prises en charge">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Version</th>
        <th>Statut</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>Actuel</strong></td>
        </tr>
    </tbody>
  </table>
</div>

## Messages associés
<div class="related-messages-table" tabindex="0" aria-label="Messages associés">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Type de message</th>
        <th>Description</th>
        <th>Présentation</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/fr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rapport de statut de paiement FI à FI</td>
          <td class="related-messages-table__overview">Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d&#39;une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d&#39;un message de paiement.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/fr/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Retour de paiement</td>
          <td class="related-messages-table__overview">Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu&#39;un paiement ne peut être appliqué, a été envoyé par erreur ou fait l&#39;objet d&#39;un rappel par l&#39;institution d&#39;origine.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/fr/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Virement entre institutions financières</td>
          <td class="related-messages-table__overview">Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l&#39;institution plutôt que pour un client. Il prend en charge le financement interbancaire, les paiements de couverture et la gestion de liquidité.</td>
        </tr>
    </tbody>
  </table>
</div>

