---
title: "Échéance adresse structurée novembre 2026 | pacs008"
description: "Impact de l'échéance SWIFT CBPR+ de novembre 2026 sur les adresses postales structurées pour pacs.008 et les messages de paiement associés, et comment..."
lang: fr-FR
layout: page
date: "2026-07-27"
name: pacs008
short_name: pacs008
start_url: /
display: standalone
background_color: "#ffffff"
theme_color: "#084a53"
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "Auditer la qualité actuelle des données d'adresse pour les enregistrements de débiteur, créancier et agent."
  - name: "Step 2"
    text: "Mapper les champs d'adresse non structurés existants au format structuré (rue, bâtiment, code postal, ville, pays)."
  - name: "Step 3"
    text: "Ajouter la validation d'adresse à votre pipeline de pré-génération avec pacs008."
  - name: "Step 4"
    text: "Tester avec des données de paiement représentatives avant l'échéance."
---

# Échéance adresse structurée novembre 2026

SWIFT exige des adresses postales structurées dans les messages de paiement transfrontaliers à partir de novembre 2026. Cette page explique ce qui change, quels messages sont concernés et comment pacs008 aide les équipes à se préparer.

## Ce qui change

Il s'agit d'une exigence minimale, et non maximale. À compter du 14 novembre 2026, une partie concernée doit renseigner la ville dans TwnNm et le pays dans Ctry sous forme de code ISO 3166 à deux lettres. La rue, le numéro de bâtiment et le code postal peuvent rester dans les lignes d'adresse : il s'agit alors d'une adresse hybride, qui est acceptée. Seule l'adresse entièrement non structurée — l'adresse complète en texte libre, sans ville ni pays structurés — est supprimée. Les agents identifiés uniquement par un BIC ne sont pas concernés.

## Pourquoi c'est important

- Les adresses non structurées augmentent les taux de réparation manuelle et retardent le traitement automatique.
- Les adresses structurées améliorent la précision du filtrage des sanctions en séparant le nom de la partie des données de localisation.
- Les exigences réglementaires et de schéma imposent de plus en plus des données structurées pour la conformité et le reporting.
- Les taux de rejet des paiements transfrontaliers augmentent lorsque la qualité des adresses ne répond pas aux attentes des contreparties.

## Quels messages sont concernés

- **pacs.008** — adresses postales du débiteur et du créancier dans les virements clients.
- **pacs.009** — adresses des institutions dans les transferts de crédit entre institutions financières et les paiements de couverture.
- **pacs.004** — adresses des parties dans les retours de paiement.
- **pacs.003** — adresses du créancier et du débiteur dans les prélèvements clients.

## Comment pacs008 aide

- Valide les champs d'adresse postale structurée et hybride avant la génération XML.
- Signale les données d'adresse non structurées qui échoueraient après l'échéance.
- Prend en charge les formats hybrides pré-échéance et les formats structurés post-échéance.
- Intègre les contrôles de qualité d'adresse dans les pipelines CI et les flux de validation par lots.

## Normative rules

Generated from the pacs008 rule registry (ruleset `2026.11.0`).
Each rule has a stable identifier, an effective date, an authoritative source and
both a passing and a failing test fixture.

| Rule | Profile | Effective | Severity | Requirement | Source |
|---|---|---|---|---|---|
| `CBPR-ADDR-001` | cbpr-plus | 2026-11-14 | Error | Fully unstructured postal address is not accepted | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-002` | cbpr-plus | 2026-11-14 | Error | Town Name is mandatory in a structured element | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-003` | cbpr-plus | 2026-11-14 | Error | Country is mandatory as a two-letter ISO 3166 code | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-004` | cbpr-plus | 2025-11-22 | Info | Hybrid postal address is accepted | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-005` | cbpr-plus | 2026-11-14 | Info | Agent identified by BIC only is exempt | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-006` | cbpr-plus | 2026-11-14 | Info | Message types excepted from the address requirement | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CHAPS-ADDR-001` | chaps-uk | 2026-11-14 | Error | CHAPS validation library rejects fully unstructured addresses | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) |

### Address formats compared

| Format | `TwnNm` | `Ctry` | `AdrLine` | Before 14 Nov 2026 | On or after |
|---|---|---|---|---|---|
| Fully structured | Present | Present | Absent | Accepted | Accepted |
| Hybrid | Present | Present | Present | Accepted | Accepted |
| Fully unstructured | Absent | Absent | Present | Accepted | **Rejected** |

### Exceptions

The requirement does not apply to these message types: `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060`.

Agents identified by BIC alone remain valid without a postal address
(`CBPR-ADDR-005`). Do not add a partial address solely to satisfy the rule.

### Test fixtures

Download and run these through the [workbench](/live/), the CLI or the API.
Each maps to the rule it exercises.

- [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) — passes `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) — fails `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-002`
- [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) — fails `CBPR-ADDR-002`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-003`
- [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) — fails `CBPR-ADDR-003`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-004`
- [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) — passes `CBPR-ADDR-005`
- [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) — passes `CHAPS-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) — fails `CHAPS-ADDR-001`

## Chronologie

| Date | Scheme | Change | Rule |
|---|---|---|---|
| `2025-11-22` | CBPR+ | Hybrid postal address option available | `CBPR-ADDR-004` |
| `2025-11-22` | CBPR+ | MT/MX coexistence for payment instructions ends | — |
| `2026-11-14` | CBPR+ | Fully unstructured postal address rejected | `CBPR-ADDR-001` |
| `2026-11-14` | CHAPS | CHAPS validation library rejects unstructured addresses | `CHAPS-ADDR-001` |
| `2026-11-14` | CBPR+ | MT101 interbank coexistence ends; contingency relays to `pain.001` | — |
| `2026-11-14` | Swift | `camt.110` investigation requests must be receivable | — |
| `2026-11-14` | Swift | Annual Standards Release cycle begins | — |
| `2027-11` | CHAPS | Purpose codes mandatory on all payments (announced) | `CHAPS-PURP-001` |
| `2027-11` | CHAPS | Structured remittance information mandatory (announced) | `CHAPS-RMT-001` |
| `2027-11` | Swift | `camt.110` and `camt.111` both mandatory (announced) | — |

## Que faire maintenant

- Auditer la qualité actuelle des données d'adresse pour les enregistrements de débiteur, créancier et agent.
- Mapper les champs d'adresse non structurés existants au format structuré (rue, bâtiment, code postal, ville, pays).
- Ajouter la validation d'adresse à votre pipeline de pré-génération avec pacs008.
- Tester avec des données de paiement représentatives avant l'échéance.

## Références

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

