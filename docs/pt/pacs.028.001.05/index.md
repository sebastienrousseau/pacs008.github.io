---
title: pacs.028.001.05 | FI to FI Payment Status Request | pacs008
description: A mensagem pacs.028 é enviada por uma instituição financeira para solicitar o status de uma instrução de pagamento enviada anteriormente. Permite o...
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

> Última revisão com base em fontes primárias em 23 de março de 2026. Data de referência do catálogo ISO 20022: 27 February 2025; os links das fontes estão abaixo.

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

| Elementos de dados principais | Contexto de negócio |
|---|---|
| **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e registro de data/hora de criação | Permite consulta proativa de status para instruções de pagamento em trânsito |
| **TxInf** — Informações da transação identificando o pagamento a ser consultado | Suporta equipes operacionais na investigação de pagamentos atrasados ou ausentes |
| **OrgnlGrpInf** — Informações do grupo original com referência à mensagem de origem | Complementa pacs.002 ao iniciar a comunicação de status em vez de aguardar |
| **OrgnlInstrId** — Identificação da instrução original do pagamento de origem | Utilizado em fluxos de trabalho de tratamento de exceções e monitoramento de SLA |
| **OrgnlEndToEndId** — Identificação de ponta a ponta original para rastreabilidade | O agente instruente envia pacs.028 ao agente instruído para solicitar o status de um pagamento específico. O agente instruído responde com um pacs.002 contendo o status de processamento atual. |

## Contexto CBPR+ e esquemas

- Substitui padrões de consulta de status MT199 e consultas manuais de mensagens SWIFT
- CBPR+ suporta solicitações de status estruturadas vinculadas a identificadores da mensagem original
- O rastreamento baseado em UETR via gpi reduz a necessidade de consultas manuais
- Cada vez mais integrado em painéis automatizados de operações de pagamento

## Fluxo de mensagem

O agente instruente envia pacs.028 ao agente instruído para solicitar o status de um pagamento específico. O agente instruído responde com um pacs.002 contendo o status de processamento atual.

## Tabela de diferenças de versão

| Faixa de versão | Por que importa | Implicação de implementação |
|---|---|---|
| pacs.028.001.05 | Implementação atual no pacs008 | Adequado para a modelagem atual de solicitações de status. |
| pacs.028.001.06 | Revisão posterior do catálogo | Check the newer catalogue revision for future interoperability planning. |

## Exemplo XML comentado

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Comentários de campo

- `MsgId`: The request itself needs an auditable identifier distinct from the underlying payment.
- `OrgnlInstrId`: Use the exact source identifier from the original instruction to maximize matching accuracy.
- `OrgnlEndToEndId`: Including customer traceability helps operations teams reconcile the enquiry faster.

## Comparar pacs.028 vs pacs.002

| Dimensão | pacs.028.001.05 | Mensagem de comparação |
|---|---|---|
| Objetivo principal | Request status | Report status |
| Who starts the interaction | The institution asking for status | The institution sending the status |
| Operational posture | Exception-driven enquiry | Event-driven reporting |
| Suposição errada a evitar | That it should be sent routinely for every payment | That it eliminates the need for proactive case management |

## Referências primárias

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Mensagens relacionadas
| Tipo de mensagem | Descrição | Visão geral |
|---|---|---|
| [`pacs.002.001.12`](/pt/pacs.002.001.12/) | FI to FI Payment Status Report | A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento. |
| [`pacs.008.001.13`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer | A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém informações sobre devedor, credor, valor e dados de remessa para uma ou mais transações de transferência de crédito. |
| [`pacs.009.001.10`](/pt/pacs.009.001.10/) | Financial Institution Credit Transfer | A mensagem pacs.009 é utilizada para transferências de crédito entre instituições financeiras onde a transferência ocorre por conta própria da instituição e não em nome de um cliente. Suporta financiamento interbancário, pagamentos de cobertura e gestão de liquidez. |

