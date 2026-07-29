---
title: "Journal des évolutions de schéma | pacs008"
description: "Chaque évolution de règle qui détermine l'acceptation d'un message, regroupée par date d'entrée en vigueur."
lang: fr-FR
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /fr/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# Journal des évolutions de schéma

Chaque évolution de règle qui détermine l'acceptation d'un message, regroupée par date d'entrée en vigueur.

Généré à partir du registre des règles, jeu de règles `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

Swift adopte un cycle annuel de Standards Release à partir de novembre 2026 : cette liste s'allongera chaque année plutôt que de s'arrêter à l'échéance.

S'abonner: [Atom feed](/scheme-changes.xml).

## Versionnage du jeu de règles

Les identifiants de règles restent stables entre versions mineures. Toute modification du résultat (succès/échec) impose une nouvelle version du jeu de règles, afin qu'un rapport produit avec un jeu donné reste reproductible.

### 2027-11-01

- `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments (chaps-uk, error) *(announced, not yet enforced)*
- `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS (chaps-uk, error) *(announced, not yet enforced)*

### 2026-11-14

- `CBPR-ADDR-001` — Fully unstructured postal address is not accepted (cbpr-plus, error)
- `CBPR-ADDR-002` — Town Name is mandatory in a structured element (cbpr-plus, error)
- `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code (cbpr-plus, error)
- `CBPR-ADDR-005` — Agent identified by BIC only is exempt (cbpr-plus, info)
- `CBPR-ADDR-006` — Message types excepted from the address requirement (cbpr-plus, info)
- `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses (chaps-uk, error)

### 2025-11-22

- `CBPR-ADDR-004` — Hybrid postal address is accepted (cbpr-plus, info)


## Comment figer un jeu de règles

Les rapports de validation consignent la version et l'empreinte du jeu de règles. Citez les deux en cas d'écart, afin de reconstituer exactement le jeu ayant produit un constat.
