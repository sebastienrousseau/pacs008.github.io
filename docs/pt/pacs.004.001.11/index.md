---
title: pacs.004.001.11 — Payment Return | Português
description: A mensagem pacs.004 é utilizada para devolver uma transação de pagamento previamente liquidada. Reverte o fluxo de fundos quando um pagamento não pode ser aplicado, foi enviado por engano ou está sendo rechamado pela instituição originadora.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **Nome ISO** | PaymentReturnV11 |
| **Status de registro** | Registered |
| **Ano** | 2019 |
| **Versão** | 11 |

## Visão geral

A mensagem pacs.004 é utilizada para devolver uma transação de pagamento previamente liquidada. Reverte o fluxo de fundos quando um pagamento não pode ser aplicado, foi enviado por engano ou está sendo rechamado pela instituição originadora.

## Elementos de dados principais

- **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e registro de data/hora de criação
- **TxInf** — Informações da transação com valor da devolução e partes envolvidas
- **OrgnlGrpInf** — Informações do grupo original vinculando à mensagem de origem
- **RtrRsnInf** — Informações do motivo da devolução com códigos de motivo estruturados
- **OrgnlTxRef** — Referência da transação original para correspondência e reconciliação

## Contexto de negócio

- Trata devoluções pós-liquidação quando a conta do beneficiário não pode ser creditada
- Suporta cenários de rechamada onde o originador solicita a devolução de fundos
- Contém códigos de motivo de devolução estruturados para transparência regulatória e operacional
- Aplica-se tanto a devoluções de transferências de crédito (pacs.008) quanto a devoluções de débitos diretos (pacs.003)

## Contexto CBPR+ e esquemas

- Substitui MT103 RETURN e mensagens de devolução pelo método de cobertura
- Códigos de motivo de devolução são padronizados e legíveis por máquina sob ISO 20022
- CBPR+ requer dados completos de referência da transação original para correspondência
- O rastreamento SWIFT gpi se estende a transações de devolução para visibilidade de ponta a ponta

## Fluxo de mensagem

O agente instruído envia pacs.004 de volta pela cadeia de pagamento para devolver fundos previamente liquidados. Cada agente na cadeia processa a devolução e recredita as contas pertinentes.

## Mensagens relacionadas

- [`pacs.008.001.13`](/pt/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.003.001.09`](/pt/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.002.001.12`](/pt/pacs.002.001.12/) — FI to FI Payment Status Report

