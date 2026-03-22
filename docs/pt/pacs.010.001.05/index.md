---
title: pacs.010.001.05 — Financial Institution Direct Debit | Português
description: A mensagem pacs.010 é utilizada entre instituições financeiras para transações de débito direto na conta própria da instituição. Permite que uma instituição colete fundos diretamente da conta de outra instituição.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **Nome ISO** | FinancialInstitutionDirectDebitV05 |
| **Status de registro** | Registered |
| **Ano** | 2019 |
| **Versão** | 5 |

## Visão geral

A mensagem pacs.010 é utilizada entre instituições financeiras para transações de débito direto na conta própria da instituição. Permite que uma instituição colete fundos diretamente da conta de outra instituição.

## Elementos de dados principais

- **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e informações de liquidação
- **DrctDbtTxInf** — Informações da transação de débito direto com valor de cobrança
- **Cdtr / CdtrAgt** — Identificação da instituição credora e de seu agente
- **Dbtr / DbtrAgt** — Identificação da instituição devedora e de seu agente
- **IntrBkSttlmAmt** — Valor de liquidação interbancária na moeda de liquidação

## Contexto de negócio

- Suporta a cobrança interbancária por débito direto entre instituições financeiras
- Utilizado para cobrança de taxas, chamadas de margem e obrigações de liquidação institucional
- Requer acordos bilaterais pré-estabelecidos entre as instituições participantes
- Essencial para a gestão de caixa institucional e ciclos de liquidação interbancária

## Contexto CBPR+ e esquemas

- Substitui elementos do MT204 para processamento de débitos diretos interbancários
- A identificação estruturada de partes segue os mesmos requisitos de outras mensagens pacs
- A validação de identificadores institucionais (BIC, LEI) é obrigatória
- Incluído nos roteiros de adoção completa de ISO 20022 em infraestruturas de mercado

## Fluxo de mensagem

A instituição credora envia pacs.010 à instituição devedora para coletar fundos com base em um acordo pré-estabelecido. A instituição devedora valida a solicitação e liquida ou rejeita o débito direto.

## Mensagens relacionadas

- [`pacs.009.001.10`](/pt/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.002.001.12`](/pt/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/pt/pacs.003.001.09/) — FI to FI Customer Direct Debit

