---
title: pacs.028.001.05 — FI to FI Payment Status Request | Português
description: A mensagem pacs.028 é enviada por uma instituição financeira para solicitar o status de uma instrução de pagamento enviada anteriormente. Permite o rastreamento proativo do processamento de pagamentos sem aguardar um relatório de status não solicitado.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **Nome ISO** | FIToFIPaymentStatusRequestV05 |
| **Status de registro** | Registered |
| **Ano** | 2019 |
| **Versão** | 5 |

## Visão geral

A mensagem pacs.028 é enviada por uma instituição financeira para solicitar o status de uma instrução de pagamento enviada anteriormente. Permite o rastreamento proativo do processamento de pagamentos sem aguardar um relatório de status não solicitado.

## Elementos de dados principais

- **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e registro de data/hora de criação
- **TxInf** — Informações da transação identificando o pagamento a ser consultado
- **OrgnlGrpInf** — Informações do grupo original com referência à mensagem de origem
- **OrgnlInstrId** — Identificação da instrução original do pagamento de origem
- **OrgnlEndToEndId** — Identificação de ponta a ponta original para rastreabilidade

## Contexto de negócio

- Permite consulta proativa de status para instruções de pagamento em trânsito
- Suporta equipes operacionais na investigação de pagamentos atrasados ou ausentes
- Complementa pacs.002 ao iniciar a comunicação de status em vez de aguardar
- Utilizado em fluxos de trabalho de tratamento de exceções e monitoramento de SLA

## Contexto CBPR+ e esquemas

- Substitui padrões de consulta de status MT199 e consultas manuais de mensagens SWIFT
- CBPR+ suporta solicitações de status estruturadas vinculadas a identificadores da mensagem original
- O rastreamento baseado em UETR via gpi reduz a necessidade de consultas manuais
- Cada vez mais integrado em painéis automatizados de operações de pagamento

## Fluxo de mensagem

O agente instruente envia pacs.028 ao agente instruído para solicitar o status de um pagamento específico. O agente instruído responde com um pacs.002 contendo o status de processamento atual.

## Mensagens relacionadas

- [`pacs.002.001.12`](/pt/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.008.001.13`](/pt/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/pt/pacs.009.001.10/) — Financial Institution Credit Transfer

