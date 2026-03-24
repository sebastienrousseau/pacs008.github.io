---
title: pacs.004.001.11 | Retorno de pagamento | pacs008
description: A mensagem pacs.004 é utilizada para devolver uma transação de pagamento previamente liquidada. Reverte o fluxo de fundos quando um pagamento não pode ser...
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Retorno de pagamento

| | |
|---|---|
| **Nome ISO** | PaymentReturnV11 |
| **Status de registro** | Registered |
| **Ano** | 2019 |
| **Versão** | 11 |

## Visão geral

A mensagem pacs.004 é utilizada para devolver uma transação de pagamento previamente liquidada. Reverte o fluxo de fundos quando um pagamento não pode ser aplicado, foi enviado por engano ou está sendo rechamado pela instituição originadora.

> Última revisão com base em fontes primárias em 23 de março de 2026. Data de referência do catálogo ISO 20022: 2025-02-27; os links das fontes estão abaixo.

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

| Elementos de dados principais | Contexto de negócio |
|---|---|
| **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e registro de data/hora de criação | Trata devoluções pós-liquidação quando a conta do beneficiário não pode ser creditada |
| **TxInf** — Informações da transação com valor da devolução e partes envolvidas | Suporta cenários de rechamada onde o originador solicita a devolução de fundos |
| **OrgnlGrpInf** — Informações do grupo original vinculando à mensagem de origem | Contém códigos de motivo de devolução estruturados para transparência regulatória e operacional |
| **RtrRsnInf** — Informações do motivo da devolução com códigos de motivo estruturados | Aplica-se tanto a devoluções de transferências de crédito (pacs.008) quanto a devoluções de débitos diretos (pacs.003) |
| **OrgnlTxRef** — Referência da transação original para correspondência e reconciliação | O agente instruído envia pacs.004 de volta pela cadeia de pagamento para devolver fundos previamente liquidados. Cada agente na cadeia processa a devolução e recredita as contas pertinentes. |

## Contexto CBPR+ e esquemas

- Substitui MT103 RETURN e mensagens de devolução pelo método de cobertura
- Códigos de motivo de devolução são padronizados e legíveis por máquina sob ISO 20022
- CBPR+ requer dados completos de referência da transação original para correspondência
- O rastreamento SWIFT gpi se estende a transações de devolução para visibilidade de ponta a ponta

## Fluxo de mensagem

O agente instruído envia pacs.004 de volta pela cadeia de pagamento para devolver fundos previamente liquidados. Cada agente na cadeia processa a devolução e recredita as contas pertinentes.

## Tabela de diferenças de versão

| Faixa de versão | Por que importa | Implicação de implementação |
|---|---|---|
| pacs.004.001.11 | Implementação atual no pacs008 | Alinha-se aos modelos XML atuais para retornos de pagamento. |
| pacs.004.001.12-14 | Revisões posteriores do catálogo | Revise versões posteriores das mensagens de retorno quando atualizações de esquema ou novas contrapartes estiverem no escopo. |

## Exemplo XML comentado

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### Comentários de campo

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: A qualidade dos códigos de motivo é crucial para a comunicação posterior com o cliente e o encaminhamento operacional.

## Comparar pacs.004 vs pacs.007

| Dimensão | pacs.004.001.11 | Mensagem de comparação |
|---|---|---|
| Objetivo principal | Return settled funds | Reverse a previously instructed payment |
| Initiated by | Receiving / beneficiary side | Original instructing side |
| Direction of flow | Back through the chain | Forward through the chain |
| Mais adequado para | Tratamento de devoluções após a liquidação | Tratamento de reversões por recall, erro ou fraude |

## Referências primárias

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Mensagens relacionadas
| Tipo de mensagem | Descrição | Visão geral |
|---|---|---|
| [`pacs.008.001.13`](/pt/pacs.008.001.13/) | Transferência de crédito de cliente FI a FI | A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém informações sobre devedor, credor, valor e dados de remessa para uma ou mais transações de transferência de crédito. |
| [`pacs.003.001.09`](/pt/pacs.003.001.09/) | Débito direto de cliente FI a FI | A mensagem pacs.003 é trocada entre instituições financeiras para executar uma instrução de débito direto do cliente. Permite que o banco do credor colete fundos do banco do devedor em nome do credor. |
| [`pacs.002.001.12`](/pt/pacs.002.001.12/) | Relatório de status de pagamento FI a FI | A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento. |

