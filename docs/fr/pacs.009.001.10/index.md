---
title: pacs.009.001.10 | Virement entre institutions financières | pacs008
description: Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l'institution plutôt...
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Virement entre institutions financières

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Nom ISO</strong></td>
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Statut d&#39;enregistrement</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Année</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Version</strong></td>
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — En-tête de groupe avec identification du message et informations de règlement</td>
          <td class="operational-matrix-table__right">Utilisé pour les virements de compte propre banque à banque et les paiements de couverture</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Informations de transaction de virement avec montant de règlement interbancaire</td>
          <td class="operational-matrix-table__right">Prend en charge la gestion de liquidité entre partenaires de banque correspondante</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Institution débitrice et identification de son agent</td>
          <td class="operational-matrix-table__right">Porte le volet couverture des virements clients réglés par méthode de couverture</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Institution créancière et identification de son agent</td>
          <td class="operational-matrix-table__right">Permet les opérations de trésorerie et de financement entre institutions financières</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Montant de règlement interbancaire dans la devise de règlement</td>
          <td class="operational-matrix-table__right">L&#39;institution débitrice envoie pacs.009 à l&#39;institution créancière pour transférer ses propres fonds. Pour les paiements par couverture, pacs.009 fournit le volet financement tandis que pacs.008 porte l&#39;instruction client par un chemin séparé.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexte CBPR+ et schémas

- Remplace MT202 et MT202COV pour les transferts d'institution à institution
- Les flux de méthode de couverture associent pacs.009 à l'instruction client pacs.008 sous-jacente
- Les données de partie structurées et l'identification LEI sont de plus en plus requises
- SWIFT gpi couvre pacs.009 pour la transparence de la banque correspondante

## Flux de message

L'institution débitrice envoie pacs.009 à l'institution créancière pour transférer ses propres fonds. Pour les paiements par couverture, pacs.009 fournit le volet financement tandis que pacs.008 porte l'instruction client par un chemin séparé.

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">Implémentation actuelle dans pacs008</td>
          <td class="version-diff-table__takeaway">Correspond au niveau actuel de prise en charge du projet pour les flux de virements FI.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">Révisions ultérieures du catalogue</td>
          <td class="version-diff-table__takeaway">Important pour la planification de la feuille de route dans les environnements de correspondance et de paiements de couverture.</td>
        </tr>
    </tbody>
  </table>
</div>

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

- `InstrId`: Utilisez un identifiant de volet de liquidité qui puisse rester rattaché au flux client sous-jacent.
- `IntrBkSttlmAmt`: Les flux sur compte propre et de couverture exigent souvent des contrôles de trésorerie plus stricts sur les montants et les dates de règlement.
- `Dbtr` / `Cdtr`: Il s'agit de parties institutionnelles, et non de rôles de clientèle de détail ; modélisez-les comme tels.

## Comparer pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="Comparer pacs.009 vs pacs.008">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.009.001.10</th>
        <th>Message de comparaison</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Objectif principal</td>
          <td class="message-comparison-table__current">Virement sur compte propre d&#39;institution ou jambe de couverture</td>
          <td class="message-comparison-table__other">Virement client</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Responsable métier</td>
          <td class="message-comparison-table__current">Opérations de trésorerie, de correspondance et de liquidité</td>
          <td class="message-comparison-table__other">Opérations de paiements clients</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Associations typiques</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004 et flux pacs.008 liés</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Hypothèse erronée à éviter</td>
          <td class="message-comparison-table__current">Qu&#39;il s&#39;agit simplement d&#39;une pacs.008 plus technique</td>
          <td class="message-comparison-table__other">Qu&#39;il peut porter sans difficulté des flux de liquidité entre institutions</td>
        </tr>
    </tbody>
  </table>
</div>

## Références primaires

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


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
          <td class="related-messages-table__id"><a href="/fr/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Virement client FI à FI</td>
          <td class="related-messages-table__overview">Le message pacs.008 est l&#39;instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d&#39;un client. Il porte les informations de débiteur, créancier, montant et remise pour une ou plusieurs transactions de virement.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/fr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Rapport de statut de paiement FI à FI</td>
          <td class="related-messages-table__overview">Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d&#39;une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d&#39;un message de paiement.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/fr/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Prélèvement entre institutions financières</td>
          <td class="related-messages-table__overview">Le message pacs.010 est utilisé entre institutions financières pour les transactions de prélèvement sur le compte propre de l&#39;institution. Il permet à une institution de collecter des fonds directement depuis le compte d&#39;une autre institution.</td>
        </tr>
    </tbody>
  </table>
</div>

