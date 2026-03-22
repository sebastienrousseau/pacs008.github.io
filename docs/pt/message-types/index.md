---
title: Tipos de mensagem | Português
description: Definições e versões de mensagens pacs ISO 20022 suportadas.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# Tipos de mensagem

O Pacs008 cobre a definição de mensagem pacs.008 principal e mensagens relacionadas utilizadas em fluxos de orquestração e reconciliação.

## Suporte incluído

| Tipo de mensagem | Descrição |
|---|---|
| [`pacs.002.001.12`](/pt/pacs.002.001.12/) | FI to FI Payment Status Report |
| [`pacs.003.001.09`](/pt/pacs.003.001.09/) | FI to FI Customer Direct Debit |
| [`pacs.004.001.11`](/pt/pacs.004.001.11/) | Payment Return |
| [`pacs.007.001.11`](/pt/pacs.007.001.11/) | FI to FI Payment Reversal |
| [`pacs.008.001.01`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.02`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.03`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.04`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.05`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.06`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.07`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.08`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.09`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.10`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.11`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.12`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.13`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.009.001.10`](/pt/pacs.009.001.10/) | Financial Institution Credit Transfer |
| [`pacs.010.001.05`](/pt/pacs.010.001.05/) | Financial Institution Direct Debit |
| [`pacs.028.001.05`](/pt/pacs.028.001.05/) | FI to FI Payment Status Request |

## Modelo de entrega

Cada tipo de mensagem suportado é acompanhado por ativos de template e lógica de validação para que as equipes possam padronizar a geração e os testes de regressão em múltiplos canais.

## Contexto de mercado 2026

- **SEPA SCT / SCT Inst**: pacs.008 continua central para a troca de transferências de crédito e processamento de pagamentos instantâneos.
- **CBPR+**: pacs.008 continua substituindo payloads transfronteiriços estilo MT103 por dados estruturados mais ricos.
- **Endereços estruturados**: as orientações atuais do mercado apontam para a transição em novembro de 2026 abandonando endereços postais totalmente não estruturados.
- **Método serial e STP**: cadeias banco a banco de múltiplas etapas continuam importantes, e variantes de processamento direto permanecem essenciais para a eficiência operacional.

## Capacidades operacionais

O Pacs008 fornece geração e validação baseadas em templates através das revisões de definições de mensagens suportadas:

- comparar versões
- realizar testes de regressão de atualizações de esquemas
- fortalecer dados de mensagens de pagamento de saída antes do lançamento
- apoiar equipes de produto, operações e migração a partir de uma única base de código

