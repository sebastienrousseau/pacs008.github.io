---
title: À propos de pacs008 | Français
description: Ce que fait pacs008 et à qui il s'adresse.
lang: fr-FR
lastUpdated: true
image: /logo.svg
---

# À propos de pacs008

pacs008 est une boîte à outils Python pour automatiser les flux ISO 20022 de virement client FI-to-FI.

## Ce qu'il fait

- Génère du XML pour `pacs.008` et les définitions de messages pacs associées
- Valide les données et le XML par rapport aux schémas
- Expose un service FastAPI pour les flux automatisés
- Fournit une CLI pour l'exécution locale et les pipelines CI
- Prend en charge les sources de données structurées : CSV, JSON, JSONL, SQLite et Parquet

## Pour qui

- équipes d'opérations de paiement
- ingénieurs de plateforme construisant l'infrastructure de traitement des paiements interne
- programmes de migration vers ISO 20022
- équipes de conformité et d'assurance qualité validant les messages de paiement sortants

## Préparation 2026

pacs008 est conçu autour des échéances opérationnelles et des exigences de qualité de données pertinentes en 2026 :

- gestion des adresses postales structurées et hybrides pour CBPR+ et les migrations de schémas
- validation renforcée de la qualité des données débiteur, créancier et agent
- génération tenant compte des versions à travers les révisions pacs.008 anciennes et actuelles
- chemins d'automatisation adaptés au CI, aux opérations par lots et aux services de paiement internes

## Orientation opérationnelle

pacs008 va au-delà de la référence des définitions de messages pour soutenir l'implémentation opérationnelle :

- générer du XML à partir de données sources réelles
- valider avant livraison
- modéliser les chaînes de paiement et les formats en aval
- rendre les modifications spécifiques aux schémas testables dans le code

