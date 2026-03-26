---
title: "pacs.002.001.12 | Rapport de statut de paiement FI à FI | pacs008"
description: "Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d'une instruction de paiement précédemment envoyée. Il fournit une..."
lang: fr-FR
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.002 a payment message?"
    answer: "No. It reports status for an earlier instruction rather than moving value itself."
  - question: "Should pacs.002 replace internal workflow states?"
    answer: "No. It should inform them, but internal case states still need their own operational logic."
---

# pacs.002.001.12 — Rapport de statut de paiement FI à FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Présentation

Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d'une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d'un message de paiement.

> Dernière vérification par rapport aux sources primaires le 23 mars 2026. Date de référence du catalogue ISO 20022 : 2025-02-27 ; les liens vers les sources figurent ci-dessous.

## Éléments de données clés

- **GrpHdr** — En-tête de groupe avec identification du message et horodatage de création
- **OrgnlGrpInfAndSts** — Informations et statut du groupe d'origine pour le reporting en masse
- **TxInfAndSts** — Informations et statut de la transaction pour les résultats individuels
- **StsRsnInf** — Informations sur le motif du statut avec codes de raison structurés
- **OrgnlTxRef** — Référence de la transaction d'origine reliant à l'instruction source

## Contexte métier

- Utilisé pour confirmer le règlement ou signaler le rejet de virements, prélèvements et retours de paiement
- Permet la réconciliation entre agents instructeurs et instruits
- Requis dans les flux CBPR+ pour accuser réception du traitement des messages pacs.008 et pacs.009
- Prend en charge le reporting de statut au niveau du groupe et au niveau des transactions individuelles

<div class="operational-matrix-table" tabindex="0" aria-label="Éléments de données clés Contexte métier">
  <table>
    <caption>Key data elements and business context</caption>
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
          <td class="operational-matrix-table__right">Utilisé pour confirmer le règlement ou signaler le rejet de virements, prélèvements et retours de paiement</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Informations et statut du groupe d&#39;origine pour le reporting en masse</td>
          <td class="operational-matrix-table__right">Permet la réconciliation entre agents instructeurs et instruits</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Informations et statut de la transaction pour les résultats individuels</td>
          <td class="operational-matrix-table__right">Requis dans les flux CBPR+ pour accuser réception du traitement des messages pacs.008 et pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Informations sur le motif du statut avec codes de raison structurés</td>
          <td class="operational-matrix-table__right">Prend en charge le reporting de statut au niveau du groupe et au niveau des transactions individuelles</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Référence de la transaction d&#39;origine reliant à l&#39;instruction source</td>
          <td class="operational-matrix-table__right">L&#39;agent instruit (récepteur) envoie pacs.002 à l&#39;agent instructeur (émetteur) pour confirmer l&#39;acceptation, le règlement ou le rejet d&#39;une instruction de paiement reçue telle que pacs.008 ou pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexte CBPR+ et schémas

- Remplace les narratifs de statut MT199 et du champ 79 dans les messages MT
- CBPR+ impose pacs.002 pour toute communication de statut de paiement
- Les codes de raison structurés remplacent les explications de rejet en texte libre
- L'intégration du suivi SWIFT gpi nécessite pacs.002 pour la transparence de bout en bout

## Flux de message

L'agent instruit (récepteur) envoie pacs.002 à l'agent instructeur (émetteur) pour confirmer l'acceptation, le règlement ou le rejet d'une instruction de paiement reçue telle que pacs.008 ou pacs.009.

## Tableau des écarts de version

<div class="version-diff-table" tabindex="0" aria-label="Tableau des écarts de version">
  <table>
    <caption>Tableau des écarts de version</caption>
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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">Implémentation actuelle dans pacs008</td>
          <td class="version-diff-table__takeaway">À utiliser lorsque vous travaillez avec les modèles et artefacts de validation actuellement pris en charge par le projet.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">Révisions ultérieures du catalogue</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## Exemple XML commenté

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Commentaires sur les champs

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## Comparer pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="Comparer pacs.002 vs pacs.028">
  <table>
    <caption>Comparer pacs.002 vs pacs.028</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimension</th>
        <th>pacs.002.001.12</th>
        <th>Message de comparaison</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Objectif principal</td>
          <td class="message-comparison-table__current">Report status</td>
          <td class="message-comparison-table__other">Request status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Qui initie l&#39;interaction</td>
          <td class="message-comparison-table__current">L&#39;établissement qui envoie le statut</td>
          <td class="message-comparison-table__other">L&#39;établissement qui demande le statut</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Posture opérationnelle</td>
          <td class="message-comparison-table__current">Reporting déclenché par événement</td>
          <td class="message-comparison-table__other">Demande pilotée par exception</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Hypothèse erronée à éviter</td>
          <td class="message-comparison-table__current">Que le reporting de statut remplace les processus d&#39;investigation</td>
          <td class="message-comparison-table__other">Que chaque paiement nécessite une demande de statut explicite</td>
        </tr>
    </tbody>
  </table>
</div>

## Références primaires

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/fr/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Virement entre institutions financières</td>
          <td class="related-messages-table__overview">Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l&#39;institution plutôt que pour un client. Il prend en charge le financement interbancaire, les paiements de couverture et la gestion de liquidité.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/fr/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">Demande de statut de paiement FI à FI</td>
          <td class="related-messages-table__overview">Le message pacs.028 est envoyé par une institution financière pour demander le statut d&#39;une instruction de paiement précédemment envoyée. Il permet le suivi proactif du traitement des paiements sans attendre un rapport de statut non sollicité.</td>
        </tr>
    </tbody>
  </table>
</div>

