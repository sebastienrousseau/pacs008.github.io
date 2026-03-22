---
title: pacs.009.001.10 — Financial Institution Credit Transfer | Português
description: A mensagem pacs.009 é utilizada para transferências de crédito entre instituições financeiras onde a transferência ocorre por conta própria da instituição e não em nome de um cliente. Suporta financiamento interbancário, pagamentos de cobertura e gestão de liquidez.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **Nome ISO** | FinancialInstitutionCreditTransferV10 |
| **Status de registro** | Registered |
| **Ano** | 2019 |
| **Versão** | 10 |

## Visão geral

A mensagem pacs.009 é utilizada para transferências de crédito entre instituições financeiras onde a transferência ocorre por conta própria da instituição e não em nome de um cliente. Suporta financiamento interbancário, pagamentos de cobertura e gestão de liquidez.

## Elementos de dados principais

- **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e informações de liquidação
- **CdtTrfTxInf** — Informações da transação de transferência de crédito com valor de liquidação interbancária
- **Dbtr / DbtrAgt** — Identificação da instituição devedora e de seu agente
- **Cdtr / CdtrAgt** — Identificação da instituição credora e de seu agente
- **IntrBkSttlmAmt** — Valor de liquidação interbancária na moeda de liquidação

## Contexto de negócio

- Utilizado para transferências interbancárias por conta própria e pagamentos de cobertura
- Suporta a gestão de liquidez entre parceiros de correspondência bancária
- Contém a etapa de cobertura de transferências de crédito de clientes liquidadas pelo método de cobertura
- Permite operações de tesouraria e financiamento entre instituições financeiras

## Contexto CBPR+ e esquemas

- Substitui MT202 e MT202COV para transferências entre instituições
- Fluxos pelo método de cobertura pareiam pacs.009 com a instrução de cliente pacs.008 subjacente
- Dados estruturados de partes e identificação LEI são cada vez mais exigidos
- SWIFT gpi cobre pacs.009 para transparência na correspondência bancária

## Fluxo de mensagem

A instituição devedora envia pacs.009 à instituição credora para transferir seus próprios fundos. Para pagamentos pelo método de cobertura, pacs.009 fornece a etapa de financiamento enquanto pacs.008 transporta a instrução do cliente por um caminho separado.

## Mensagens relacionadas

- [`pacs.008.001.13`](/pt/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.002.001.12`](/pt/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.010.001.05`](/pt/pacs.010.001.05/) — Financial Institution Direct Debit

