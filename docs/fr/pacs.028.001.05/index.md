---
title: pacs.028.001.05 | Demande de statut de paiement FI à FI | pacs008
description: Le message pacs.028 est envoyé par une institution financière pour demander le statut d'une instruction de paiement précédemment envoyée. Il permet le...
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — Demande de statut de paiement FI à FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Présentation

Le message pacs.028 est envoyé par une institution financière pour demander le statut d'une instruction de paiement précédemment envoyée. Il permet le suivi proactif du traitement des paiements sans attendre un rapport de statut non sollicité.

> Dernière vérification par rapport aux sources primaires le 23 mars 2026. Date de référence du catalogue ISO 20022 : 2025-02-27 ; les liens vers les sources figurent ci-dessous.

## Éléments de données clés

- **GrpHdr** — En-tête de groupe avec identification du message et horodatage de création
- **TxInf** — Informations de transaction identifiant le paiement à interroger
- **OrgnlGrpInf** — Informations du groupe d'origine référençant le message source
- **OrgnlInstrId** — Identification de l'instruction d'origine du paiement source
- **OrgnlEndToEndId** — Identification de bout en bout d'origine pour la traçabilité

## Contexte métier

- Permet l'interrogation proactive du statut pour les instructions de paiement en transit
- Aide les équipes d'opérations à enquêter sur les paiements retardés ou manquants
- Complète pacs.002 en initiant la communication de statut plutôt que d'attendre
- Utilisé dans les flux de gestion d'exceptions et de surveillance des SLA

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — En-tête de groupe avec identification du message et horodatage de création</td>
          <td class="operational-matrix-table__right">Permet l&#39;interrogation proactive du statut pour les instructions de paiement en transit</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informations de transaction identifiant le paiement à interroger</td>
          <td class="operational-matrix-table__right">Aide les équipes d&#39;opérations à enquêter sur les paiements retardés ou manquants</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informations du groupe d&#39;origine référençant le message source</td>
          <td class="operational-matrix-table__right">Complète pacs.002 en initiant la communication de statut plutôt que d&#39;attendre</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — Identification de l&#39;instruction d&#39;origine du paiement source</td>
          <td class="operational-matrix-table__right">Utilisé dans les flux de gestion d&#39;exceptions et de surveillance des SLA</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — Identification de bout en bout d&#39;origine pour la traçabilité</td>
          <td class="operational-matrix-table__right">L&#39;agent instructeur envoie pacs.028 à l&#39;agent instruit pour demander le statut d&#39;un paiement spécifique. L&#39;agent instruit répond avec un pacs.002 contenant le statut de traitement actuel.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexte CBPR+ et schémas

- Remplace les modèles d'interrogation de statut MT199 et les requêtes manuelles de messages SWIFT
- CBPR+ prend en charge les demandes de statut structurées liées aux identifiants de message d'origine
- Le suivi basé sur l'UETR via gpi réduit le besoin d'interrogations manuelles
- De plus en plus intégré dans les tableaux de bord automatisés d'opérations de paiement

## Flux de message

L'agent instructeur envoie pacs.028 à l'agent instruit pour demander le statut d'un paiement spécifique. L'agent instruit répond avec un pacs.002 contenant le statut de traitement actuel.

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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">Implémentation actuelle dans pacs008</td>
          <td class="version-diff-table__takeaway">Adapté à la modélisation actuelle des demandes de statut.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">Révision ultérieure du catalogue</td>
          <td class="version-diff-table__takeaway">Consultez la version plus récente du catalogue pour la planification future de l&#39;interopérabilité.</td>
        </tr>
    </tbody>
  </table>
</div>

## Exemple XML commenté

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Commentaires sur les champs

- `MsgId`: La demande elle-même a besoin d'un identifiant traçable distinct du paiement sous-jacent.
- `OrgnlInstrId`: Utilisez l'identifiant source exact de l'instruction d'origine afin de maximiser la précision du rapprochement.
- `OrgnlEndToEndId`: Inclure une traçabilité côté client aide les équipes opérations à rapprocher la demande plus rapidement.

## Comparer pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="Comparer pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.028.001.05</th>
        <th>Message de comparaison</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Objectif principal</td>
          <td class="message-comparison-table__current">Request status</td>
          <td class="message-comparison-table__other">Report status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Qui initie l&#39;interaction</td>
          <td class="message-comparison-table__current">L&#39;établissement qui demande le statut</td>
          <td class="message-comparison-table__other">L&#39;établissement qui envoie le statut</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Posture opérationnelle</td>
          <td class="message-comparison-table__current">Demande pilotée par exception</td>
          <td class="message-comparison-table__other">Reporting déclenché par événement</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Hypothèse erronée à éviter</td>
          <td class="message-comparison-table__current">Qu&#39;il devrait être envoyé de façon routinière pour chaque paiement</td>
          <td class="message-comparison-table__other">Qu&#39;il supprime le besoin d&#39;une gestion proactive des cas</td>
        </tr>
    </tbody>
  </table>
</div>

## Références primaires

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


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
          <td class="related-messages-table__id"><a href="/fr/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Virement client FI à FI</td>
          <td class="related-messages-table__overview">Le message pacs.008 est l&#39;instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d&#39;un client. Il porte les informations de débiteur, créancier, montant et remise pour une ou plusieurs transactions de virement.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/fr/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Virement entre institutions financières</td>
          <td class="related-messages-table__overview">Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l&#39;institution plutôt que pour un client. Il prend en charge le financement interbancaire, les paiements de couverture et la gestion de liquidité.</td>
        </tr>
    </tbody>
  </table>
</div>

