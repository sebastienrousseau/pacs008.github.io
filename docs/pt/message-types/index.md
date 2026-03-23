---
title: Tipos de mensagem | pacs008 ISO 20022
description: Definições e versões de mensagens pacs ISO 20022 suportadas. Geração, validação, orquestração de API e suporte de conformidade para fluxos de...
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# Tipos de mensagem

O pacs008 cobre a definição de mensagem pacs.008 principal e mensagens relacionadas utilizadas em fluxos de orquestração e reconciliação.

> Última revisão com base em fontes primárias em 23 de março de 2026 usando materiais públicos da ISO 20022, EPC e Swift referenciados nesta página.

## Suporte incluído

| Tipo de mensagem | Descrição | Versão | Ano | Visão geral |
|---|---|---|---|---|
| [`pacs.002.001.12`](/pt/pacs.002.001.12/) | Relatório de status de pagamento FI a FI | `pacs.002.001.12` | 2019 | A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento. |
| [`pacs.003.001.09`](/pt/pacs.003.001.09/) | Débito direto de cliente FI a FI | `pacs.003.001.09` | 2019 | A mensagem pacs.003 é trocada entre instituições financeiras para executar uma instrução de débito direto do cliente. Permite que o banco do credor colete fundos do banco do devedor em nome do credor. |
| [`pacs.004.001.11`](/pt/pacs.004.001.11/) | Retorno de pagamento | `pacs.004.001.11` | 2019 | A mensagem pacs.004 é utilizada para devolver uma transação de pagamento previamente liquidada. Reverte o fluxo de fundos quando um pagamento não pode ser aplicado, foi enviado por engano ou está sendo rechamado pela instituição originadora. |
| [`pacs.007.001.11`](/pt/pacs.007.001.11/) | Reversão de pagamento FI a FI | `pacs.007.001.11` | 2019 | A mensagem pacs.007 é utilizada para reverter uma instrução de pagamento enviada anteriormente que ainda não foi liquidada ou para solicitar a reversão de um pagamento liquidado. Diferentemente do pacs.004 (devolução), é iniciada pelo agente instruente original. |
| [`pacs.008.001.13`](/pt/pacs.008.001.13/) | Transferência de crédito de cliente FI a FI | `pacs.008.001.13` | 2023 | A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém informações sobre devedor, credor, valor e dados de remessa para uma ou mais transações de transferência de crédito. |
| [`pacs.009.001.10`](/pt/pacs.009.001.10/) | Transferência de crédito entre instituições financeiras | `pacs.009.001.10` | 2019 | A mensagem pacs.009 é utilizada para transferências de crédito entre instituições financeiras onde a transferência ocorre por conta própria da instituição e não em nome de um cliente. Suporta financiamento interbancário, pagamentos de cobertura e gestão de liquidez. |
| [`pacs.010.001.05`](/pt/pacs.010.001.05/) | Débito direto entre instituições financeiras | `pacs.010.001.05` | 2019 | A mensagem pacs.010 é utilizada entre instituições financeiras para transações de débito direto na conta própria da instituição. Permite que uma instituição colete fundos diretamente da conta de outra instituição. |
| [`pacs.028.001.05`](/pt/pacs.028.001.05/) | Solicitação de status de pagamento FI a FI | `pacs.028.001.05` | 2019 | A mensagem pacs.028 é enviada por uma instituição financeira para solicitar o status de uma instrução de pagamento enviada anteriormente. Permite o rastreamento proativo do processamento de pagamentos sem aguardar um relatório de status não solicitado. |

## Modelo de entrega

Cada tipo de mensagem suportado é acompanhado por modelos XML e lógica de validação para que as equipes possam padronizar a geração e os testes de regressão em múltiplos canais.

## Escolher a mensagem correta

O catálogo de mensagens é mais importante quando as equipes precisam decidir qual mensagem inicia o fluxo, qual informa o status e qual corrige ou reverte a operação.

Veja o [guia de seleção de mensagens](/pt/message-selection/) para uma visão resumida de decisão sobre os fluxos pacs suportados.


## Contexto de mercado 2026

- **SEPA SCT / SCT Inst**: pacs.008 continua central para a troca de transferências de crédito e processamento de pagamentos instantâneos.
- **CBPR+**: pacs.008 continua substituindo payloads transfronteiriços estilo MT103 por dados estruturados mais ricos.
- **Endereços estruturados**: as orientações atuais do mercado apontam para a transição em novembro de 2026 abandonando endereços postais totalmente não estruturados.
- **Método serial e STP**: cadeias banco a banco de múltiplas etapas continuam importantes, e variantes de processamento direto permanecem essenciais para a eficiência operacional.

## Capacidades operacionais

O pacs008 fornece geração e validação baseadas em modelos através das revisões de definições de mensagens suportadas:

- comparar versões
- realizar testes de regressão de atualizações de esquemas
- fortalecer dados de mensagens de pagamento de saída antes do lançamento
- apoiar equipes de produto, operações e migração a partir de uma única base de código

