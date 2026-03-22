---
title: API | Français
description: Prise en charge REST et CLI dans Pacs008.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# API

Le projet fournit à la fois une API REST et une CLI pour les flux de traitement des messages de paiement.

## Capacités API

- points de terminaison de santé et de disponibilité
- validation des données avant génération XML
- génération synchrone pour les flux directs
- exécution asynchrone de tâches pour les pipelines de longue durée
- fichiers générés téléchargeables via les flux de complétion de tâches

## Capacités CLI

- pointer vers un fichier source et une version de message
- valider par rapport au XSD avant livraison
- générer du XML dans des répertoires de sortie compatibles pipeline
- s'intégrer aux tâches CI, aux planifications par lots et aux outils d'opérateur local

## Orientation de l'implémentation

Pacs008 est conçu pour une utilisation opérationnelle par les équipes de traitement des paiements :

- validation pré-vol avant la création du message
- sélection du schéma et de la version à l'exécution
- flux de génération asynchrones pour les services internes
- sorties déterministes pour les tests et les pistes d'audit

## Exigences de qualité des données pour 2026

Les exigences de qualité des messages se renforcent dans l'industrie, notamment autour de :

- identification des parties et des agents
- disponibilité des adresses structurées ou hybrides
- gestion enrichie des remises et des références
- transparence à travers les chaînes de paiement sérielles

L'API et la CLI sont conçues pour intégrer ces vérifications dans le flux de travail plutôt que comme une étape de revue manuelle.

