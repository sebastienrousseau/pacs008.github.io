---
title: Guia de seleção de mensagens | pacs008
description: Escolha a mensagem pacs ISO 20022 correta para geração, status, devoluções, reversões e consultas.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# Guia de seleção de mensagens

Escolha a família pacs primeiro pelo evento operacional e depois pelo esquema e pelo modelo operacional.

> Última revisão com base em fontes primárias em 23 de março de 2026 usando materiais públicos da ISO 20022, EPC e Swift referenciados nesta página.

## Matriz rápida de decisão

| Tipo de mensagem | Descrição | Visão geral |
|---|---|---|
| [`pacs.002.001.12`](/pt/pacs.002.001.12/) | FI to FI Payment Status Report | A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento. |
| [`pacs.003.001.09`](/pt/pacs.003.001.09/) | FI to FI Customer Direct Debit | A mensagem pacs.003 é trocada entre instituições financeiras para executar uma instrução de débito direto do cliente. Permite que o banco do credor colete fundos do banco do devedor em nome do credor. |
| [`pacs.004.001.11`](/pt/pacs.004.001.11/) | Payment Return | A mensagem pacs.004 é utilizada para devolver uma transação de pagamento previamente liquidada. Reverte o fluxo de fundos quando um pagamento não pode ser aplicado, foi enviado por engano ou está sendo rechamado pela instituição originadora. |
| [`pacs.007.001.11`](/pt/pacs.007.001.11/) | FI to FI Payment Reversal | A mensagem pacs.007 é utilizada para reverter uma instrução de pagamento enviada anteriormente que ainda não foi liquidada ou para solicitar a reversão de um pagamento liquidado. Diferentemente do pacs.004 (devolução), é iniciada pelo agente instruente original. |
| [`pacs.008.001.13`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer | A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém informações sobre devedor, credor, valor e dados de remessa para uma ou mais transações de transferência de crédito. |
| [`pacs.009.001.10`](/pt/pacs.009.001.10/) | Financial Institution Credit Transfer | A mensagem pacs.009 é utilizada para transferências de crédito entre instituições financeiras onde a transferência ocorre por conta própria da instituição e não em nome de um cliente. Suporta financiamento interbancário, pagamentos de cobertura e gestão de liquidez. |
| [`pacs.010.001.05`](/pt/pacs.010.001.05/) | Financial Institution Direct Debit | A mensagem pacs.010 é utilizada entre instituições financeiras para transações de débito direto na conta própria da instituição. Permite que uma instituição colete fundos diretamente da conta de outra instituição. |
| [`pacs.028.001.05`](/pt/pacs.028.001.05/) | FI to FI Payment Status Request | A mensagem pacs.028 é enviada por uma instituição financeira para solicitar o status de uma instrução de pagamento enviada anteriormente. Permite o rastreamento proativo do processamento de pagamentos sem aguardar um relatório de status não solicitado. |

## Pontos de comparação comuns

| Comparar | Diferença principal |
|---|---|
| `pacs.008` vs `pacs.009` | Pagamento de cliente versus movimento institucional ou de cobertura |
| `pacs.004` vs `pacs.007` | Devolução do lado recebedor versus reversão do lado originador |
| `pacs.002` vs `pacs.028` | Relatório de status versus solicitação de status |

## Páginas de mensagens suportadas

- [`pacs.002.001.12`](/pt/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/pt/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/pt/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/pt/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.13`](/pt/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/pt/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/pt/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/pt/pacs.028.001.05/) — FI to FI Payment Status Request

