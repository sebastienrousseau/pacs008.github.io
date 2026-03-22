---
title: pacs.008.001.13 — FI to FI Customer Credit Transfer | Português
description: A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém informações sobre devedor, credor, valor e dados de remessa para uma ou mais transações de transferência de crédito.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **Nome ISO** | FIToFICustomerCreditTransferV13 |
| **Status de registro** | Registered |
| **Ano** | 2023 |
| **Versão** | 13 |

## Visão geral

A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém informações sobre devedor, credor, valor e dados de remessa para uma ou mais transações de transferência de crédito.

## Elementos de dados principais

- **GrpHdr** — Cabeçalho de grupo com ID da mensagem, data de criação, número de transações e informações de liquidação
- **CdtTrfTxInf** — Informações da transação de transferência de crédito com valor, encargos e finalidade
- **Dbtr / DbtrAgt** — Identificação do devedor e do agente do devedor com dados da conta
- **Cdtr / CdtrAgt** — Identificação do credor e do agente do credor com dados da conta
- **RmtInf** — Informações de remessa para referências de pagamento estruturadas ou não estruturadas

## Contexto de negócio

- A mensagem principal para transferências de crédito transfronteiriças e domésticas iniciadas pelo cliente
- Utilizada em SEPA SCT, SEPA Instant, CBPR+ e sistemas de compensação nacionais
- Contém informações de remessa estruturadas para suportar a reconciliação automatizada
- Suporta métodos de liquidação serial, por cobertura e direto para cadeias de pagamento com múltiplas etapas

## Contexto CBPR+ e esquemas

- Substitui MT103 e MT103+ para transferências de crédito transfronteiriças de clientes
- O prazo de novembro de 2026 para endereços estruturados aplica-se a todos os endereços postais das partes
- SWIFT gpi requer pacs.008 para rastreamento de ponta a ponta baseado em UETR
- 13 revisões refletem a evolução contínua do esquema em infraestruturas de mercado

## Fluxo de mensagem

O agente do devedor cria um pacs.008 e o envia ao agente do credor (diretamente ou via intermediários). Cada agente na cadeia valida, enriquece e encaminha a instrução até que o agente do credor credite a conta do beneficiário.

## Versões suportadas

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Mensagens relacionadas

- [`pacs.002.001.12`](/pt/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.004.001.11`](/pt/pacs.004.001.11/) — Payment Return
- [`pacs.009.001.10`](/pt/pacs.009.001.10/) — Financial Institution Credit Transfer

