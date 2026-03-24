---
title: "Types de messages | pacs008 ISO 20022"
description: Définitions et versions de messages pacs ISO 20022 prises en charge.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# Types de messages

pacs008 couvre la définition de message pacs.008 principale et les messages liés utilisés dans les flux d'orchestration et de rapprochement.

## Prise en charge incluse

<div class="message-coverage-table" tabindex="0" aria-label="Prise en charge incluse">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Type de message</th>
        <th>Description</th>
        <th>Année</th>
        <th>Présentation</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/fr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">Rapport de statut de paiement FI à FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Le message pacs.002 est envoyé par une institution financière pour rapporter le statut d&#39;une instruction de paiement précédemment envoyée. Il fournit une confirmation, un rejet ou un statut en attente pour les transactions individuelles au sein d&#39;un message de paiement.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/fr/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">Prélèvement client FI à FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Le message pacs.003 est échangé entre institutions financières pour exécuter une instruction de prélèvement client. Il permet à la banque du créancier de collecter des fonds auprès de la banque du débiteur au nom du créancier.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/fr/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">Retour de paiement</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Le message pacs.004 est utilisé pour retourner une transaction de paiement précédemment réglée. Il inverse le flux de fonds lorsqu&#39;un paiement ne peut être appliqué, a été envoyé par erreur ou fait l&#39;objet d&#39;un rappel par l&#39;institution d&#39;origine.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/fr/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">Annulation de paiement FI à FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Le message pacs.007 est utilisé pour annuler une instruction de paiement précédemment envoyée qui n&#39;a pas encore été réglée ou pour demander l&#39;annulation d&#39;un paiement réglé. Contrairement au pacs.004 (retour), il est initié par l&#39;agent instructeur d&#39;origine.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/fr/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">Virement client FI à FI</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">Le message pacs.008 est l&#39;instruction de paiement centrale échangée entre institutions financières pour transférer des fonds au nom d&#39;un client. Il porte les informations de débiteur, créancier, montant et remise pour une ou plusieurs transactions de virement.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/fr/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">Virement entre institutions financières</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Le message pacs.009 est utilisé pour les virements entre institutions financières lorsque le transfert est pour le compte propre de l&#39;institution plutôt que pour un client. Il prend en charge le financement interbancaire, les paiements de couverture et la gestion de liquidité.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/fr/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">Prélèvement entre institutions financières</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Le message pacs.010 est utilisé entre institutions financières pour les transactions de prélèvement sur le compte propre de l&#39;institution. Il permet à une institution de collecter des fonds directement depuis le compte d&#39;une autre institution.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/fr/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">Demande de statut de paiement FI à FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Le message pacs.028 est envoyé par une institution financière pour demander le statut d&#39;une instruction de paiement précédemment envoyée. Il permet le suivi proactif du traitement des paiements sans attendre un rapport de statut non sollicité.</td>
        </tr>
    </tbody>
  </table>
</div>

## Mode de livraison

Chaque type de message pris en charge repose sur des modèles et une logique de validation afin de normaliser la génération et les tests de régression.

## Choisir le bon message

Le catalogue de messages est surtout utile lorsque les équipes doivent décider quel message initie l'action, lequel rapporte le statut et lequel corrige ou annule le flux.

Voir le [guide de sélection des messages](/fr/message-selection/) pour une vue de décision synthétique sur les flux pacs pris en charge.

## Contexte de marché 2026

- **SEPA SCT / SCT Inst** : pacs.008 reste central pour l'échange de virements et le traitement des paiements instantanés.
- **CBPR+** : pacs.008 continue de remplacer les charges MT103 transfrontalières par des données structurées plus riches.
- **Adresses structurées** : les orientations actuelles du marché indiquent la bascule de novembre 2026 abandonnant les adresses postales entièrement non structurées.
- **Méthode série et STP** : les chaînes banque à banque multi-étapes restent importantes, et les variantes de traitement direct demeurent essentielles pour l'efficacité opérationnelle.

## Capacités opérationnelles

pacs008 fournit une génération et une validation appuyées par des modèles à travers les révisions de définitions de messages prises en charge :

- comparer les versions
- tester en régression les mises à jour de schémas
- renforcer les données de messages de paiement sortants avant publication
- accompagner les équipes produit, opérations et migration depuis une seule base de code

