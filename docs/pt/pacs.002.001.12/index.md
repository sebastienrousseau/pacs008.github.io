---
title: pacs.002.001.12 — FI to FI Payment Status Report | Português
description: A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **Nome ISO** | FIToFIPaymentStatusReportV12 |
| **Status de registro** | Registered |
| **Ano** | 2019 |
| **Versão** | 12 |

## Visão geral

A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento.

## Elementos de dados principais

- **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e registro de data/hora de criação
- **OrgnlGrpInfAndSts** — Informações e status do grupo original para relatórios em nível agregado
- **TxInfAndSts** — Informações e status da transação para resultados de transações individuais
- **StsRsnInf** — Informações do motivo do status com códigos de motivo estruturados
- **OrgnlTxRef** — Referência da transação original vinculando à instrução de origem

## Contexto de negócio

- Utilizado para confirmar a liquidação ou reportar a rejeição de transferências de crédito, débitos diretos e devoluções de pagamento
- Possibilita a reconciliação entre agentes instruentes e agentes instruídos
- Obrigatório nos fluxos CBPR+ para confirmar o processamento de mensagens pacs.008 e pacs.009
- Suporta relatórios de status tanto em nível de grupo agregado quanto em nível de transação individual

## Contexto CBPR+ e esquemas

- Substitui MT199 e narrativas de status no campo 79 de mensagens MT
- CBPR+ exige pacs.002 para toda comunicação de status de pagamento
- Códigos de motivo estruturados substituem explicações de rejeição em texto livre
- A integração com o rastreamento SWIFT gpi requer pacs.002 para transparência de ponta a ponta

## Fluxo de mensagem

O agente instruído (receptor) envia pacs.002 de volta ao agente instruente (remetente) para confirmar a aceitação, liquidação ou rejeição de uma instrução de pagamento recebida, como pacs.008 ou pacs.009.

## Mensagens relacionadas

- [`pacs.008.001.13`](/pt/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/pt/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.028.001.05`](/pt/pacs.028.001.05/) — FI to FI Payment Status Request

