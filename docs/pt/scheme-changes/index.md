---
title: "Registo de alterações de esquema | pacs008"
description: "Cada alteração de regra que determina se uma mensagem é aceite, agrupada por data de entrada em vigor."
lang: pt-BR
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /pt/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# Registo de alterações de esquema

Cada alteração de regra que determina se uma mensagem é aceite, agrupada por data de entrada em vigor.

Gerado a partir do registo de regras, conjunto `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

A partir de novembro de 2026 a Swift adota um ciclo anual de Standards Release, pelo que esta lista crescerá todos os anos em vez de terminar no prazo.

Subscrever: [Atom feed](/scheme-changes.xml).

## Versionamento do conjunto de regras

Os identificadores de regra mantêm-se estáveis entre versões menores. Uma alteração no resultado de uma regra exige nova versão do conjunto, para que um relatório continue reproduzível.

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


## Como fixar um conjunto de regras

Os relatórios de validação registam a versão e o hash do conjunto. Cite ambos ao reportar uma discrepância, para reconstituir o conjunto exato.
