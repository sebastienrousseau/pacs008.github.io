---
title: pacs.003.001.09 — FI to FI Customer Direct Debit | Português
description: A mensagem pacs.003 é trocada entre instituições financeiras para executar uma instrução de débito direto do cliente. Permite que o banco do credor colete fundos do banco do devedor em nome do credor.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **Nome ISO** | FIToFICustomerDirectDebitV09 |
| **Status de registro** | Registered |
| **Ano** | 2019 |
| **Versão** | 9 |

## Visão geral

A mensagem pacs.003 é trocada entre instituições financeiras para executar uma instrução de débito direto do cliente. Permite que o banco do credor colete fundos do banco do devedor em nome do credor.

## Elementos de dados principais

- **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e informações de liquidação
- **DrctDbtTxInf** — Informações da transação de débito direto com valor e partes envolvidas
- **Cdtr** — Identificação do credor e dados da conta
- **CdtrAgt** — Identificação do agente do credor (instituição coletora)
- **DbtrAgt** — Identificação do agente do devedor (instituição pagadora)

## Contexto de negócio

- Suporta os esquemas de débito direto SEPA Core e B2B
- Utilizado para cobrança de pagamentos recorrentes, como assinaturas, contas de serviços públicos e amortizações de empréstimos
- Requer uma referência de mandato válida entre devedor e credor
- Permite a cobrança em lote de múltiplas instruções de débito direto em uma única mensagem

## Contexto CBPR+ e esquemas

- Requisitos de endereço estruturado e identificação de partes aplicam-se igualmente a débitos diretos
- Dados relacionados ao mandato devem ser totalmente estruturados a partir de novembro de 2026
- Substitui formatos legados de débito direto no estilo MT104 em fluxos transfronteiriços
- A validação da identificação do esquema do credor é cada vez mais exigida

## Fluxo de mensagem

O agente do credor inicia pacs.003 em direção ao agente do devedor para coletar fundos. O agente do devedor valida o mandato, verifica a cobertura da conta e liquida ou devolve a transação.

## Mensagens relacionadas

- [`pacs.004.001.11`](/pt/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/pt/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.002.001.12`](/pt/pacs.002.001.12/) — FI to FI Payment Status Report

