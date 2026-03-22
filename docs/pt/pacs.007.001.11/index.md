---
title: pacs.007.001.11 — FI to FI Payment Reversal | Português
description: A mensagem pacs.007 é utilizada para reverter uma instrução de pagamento enviada anteriormente que ainda não foi liquidada ou para solicitar a reversão de um pagamento liquidado. Diferentemente do pacs.004 (devolução), é iniciada pelo agente instruente original.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **Nome ISO** | FIToFIPaymentReversalV11 |
| **Status de registro** | Registered |
| **Ano** | 2019 |
| **Versão** | 11 |

## Visão geral

A mensagem pacs.007 é utilizada para reverter uma instrução de pagamento enviada anteriormente que ainda não foi liquidada ou para solicitar a reversão de um pagamento liquidado. Diferentemente do pacs.004 (devolução), é iniciada pelo agente instruente original.

## Elementos de dados principais

- **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e registro de data/hora de criação
- **TxInf** — Informações da transação com valor da reversão e partes envolvidas
- **OrgnlGrpInf** — Informações do grupo original com referência à mensagem de origem
- **RvslRsnInf** — Informações do motivo da reversão com códigos de motivo estruturados
- **OrgnlTxRef** — Referência da transação original para rastreabilidade de ponta a ponta

## Contexto de negócio

- Iniciado quando o remetente original identifica um erro antes ou após a liquidação
- Utilizado em cenários de fraude onde é necessária uma reversão rápida
- Suporta tanto a reversão total quanto parcial dos valores do pagamento original
- Contém códigos de motivo de reversão estruturados para processamento a jusante

## Contexto CBPR+ e esquemas

- Distingue-se do pacs.004 pela direção — a reversão flui para frente a partir do originador, a devolução flui para trás a partir do beneficiário
- CBPR+ requer pareamento com identificadores da mensagem original para correspondência automatizada
- Códigos de motivo estruturados substituem narrativas em texto livre de mensagens MT legadas
- Cada vez mais utilizado em fluxos de trabalho de rechamada de pagamentos instantâneos e prevenção de fraudes

## Fluxo de mensagem

O agente instruente (remetente original) envia pacs.007 para frente pela cadeia de pagamento para reverter um pagamento previamente instruído. Cada agente processa a instrução de reversão e ajusta a liquidação de acordo.

## Mensagens relacionadas

- [`pacs.008.001.13`](/pt/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.004.001.11`](/pt/pacs.004.001.11/) — Payment Return
- [`pacs.002.001.12`](/pt/pacs.002.001.12/) — FI to FI Payment Status Report

