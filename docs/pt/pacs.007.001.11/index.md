---
title: pacs.007.001.11 | Reversão de pagamento FI a FI | pacs008
description: A mensagem pacs.007 é utilizada para reverter uma instrução de pagamento enviada anteriormente que ainda não foi liquidada ou para solicitar a reversão de...
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — Reversão de pagamento FI a FI

| | |
|---|---|
| **Nome ISO** | FIToFIPaymentReversalV11 |
| **Status de registro** | Registered |
| **Ano** | 2019 |
| **Versão** | 11 |

## Visão geral

A mensagem pacs.007 é utilizada para reverter uma instrução de pagamento enviada anteriormente que ainda não foi liquidada ou para solicitar a reversão de um pagamento liquidado. Diferentemente do pacs.004 (devolução), é iniciada pelo agente instruente original.

> Última revisão com base em fontes primárias em 23 de março de 2026. Data de referência do catálogo ISO 20022: 2025-02-27; os links das fontes estão abaixo.

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

| Elementos de dados principais | Contexto de negócio |
|---|---|
| **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e registro de data/hora de criação | Iniciado quando o remetente original identifica um erro antes ou após a liquidação |
| **TxInf** — Informações da transação com valor da reversão e partes envolvidas | Utilizado em cenários de fraude onde é necessária uma reversão rápida |
| **OrgnlGrpInf** — Informações do grupo original com referência à mensagem de origem | Suporta tanto a reversão total quanto parcial dos valores do pagamento original |
| **RvslRsnInf** — Informações do motivo da reversão com códigos de motivo estruturados | Contém códigos de motivo de reversão estruturados para processamento a jusante |
| **OrgnlTxRef** — Referência da transação original para rastreabilidade de ponta a ponta | O agente instruente (remetente original) envia pacs.007 para frente pela cadeia de pagamento para reverter um pagamento previamente instruído. Cada agente processa a instrução de reversão e ajusta a liquidação de acordo. |

## Contexto CBPR+ e esquemas

- Distingue-se do pacs.004 pela direção — a reversão flui para frente a partir do originador, a devolução flui para trás a partir do beneficiário
- CBPR+ requer pareamento com identificadores da mensagem original para correspondência automatizada
- Códigos de motivo estruturados substituem narrativas em texto livre de mensagens MT legadas
- Cada vez mais utilizado em fluxos de trabalho de rechamada de pagamentos instantâneos e prevenção de fraudes

## Fluxo de mensagem

O agente instruente (remetente original) envia pacs.007 para frente pela cadeia de pagamento para reverter um pagamento previamente instruído. Cada agente processa a instrução de reversão e ajusta a liquidação de acordo.

## Tabela de diferenças de versão

| Faixa de versão | Por que importa | Implicação de implementação |
|---|---|---|
| pacs.007.001.11 | Implementação atual no pacs008 | Boa base para modelagem de fluxos de reversão. |
| pacs.007.001.12-13 | Revisões posteriores do catálogo | Check later revisions for current market-infrastructure alignment. |

## Exemplo XML comentado

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### Comentários de campo

- `MsgId`: A própria reversão precisa do seu próprio identificador seguro para auditoria.
- `OrgnlInstrId`: Preserve a referência original do pagamento para evitar rupturas na reconciliação.
- `RvslRsnInf`: Use motivos de reversão estruturados para que casos de fraude, erro e pagamento em duplicidade possam ser encaminhados de forma distinta.

## Comparar pacs.007 vs pacs.004

| Dimensão | pacs.007.001.11 | Mensagem de comparação |
|---|---|---|
| Objetivo principal | Reverse a previously instructed payment | Return settled funds |
| Initiated by | Original instructing side | Receiving / beneficiary side |
| Direction of flow | Forward through the chain | Back through the chain |
| Mais adequado para | Tratamento de reversões por recall, erro ou fraude | Tratamento de devoluções após a liquidação |

## Referências primárias

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Mensagens relacionadas
| Tipo de mensagem | Descrição | Visão geral |
|---|---|---|
| [`pacs.008.001.13`](/pt/pacs.008.001.13/) | Transferência de crédito de cliente FI a FI | A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém informações sobre devedor, credor, valor e dados de remessa para uma ou mais transações de transferência de crédito. |
| [`pacs.004.001.11`](/pt/pacs.004.001.11/) | Retorno de pagamento | A mensagem pacs.004 é utilizada para devolver uma transação de pagamento previamente liquidada. Reverte o fluxo de fundos quando um pagamento não pode ser aplicado, foi enviado por engano ou está sendo rechamado pela instituição originadora. |
| [`pacs.002.001.12`](/pt/pacs.002.001.12/) | Relatório de status de pagamento FI a FI | A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento. |

