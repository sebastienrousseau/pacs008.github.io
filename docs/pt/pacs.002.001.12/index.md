---
title: pacs.002.001.12 | FI to FI Payment Status Report | pacs008
description: A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece...
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

> Última revisão com base em fontes primárias em 23 de março de 2026. Data de referência do catálogo ISO 20022: 27 February 2025; os links das fontes estão abaixo.

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

| Elementos de dados principais | Contexto de negócio |
|---|---|
| **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e registro de data/hora de criação | Utilizado para confirmar a liquidação ou reportar a rejeição de transferências de crédito, débitos diretos e devoluções de pagamento |
| **OrgnlGrpInfAndSts** — Informações e status do grupo original para relatórios em nível agregado | Possibilita a reconciliação entre agentes instruentes e agentes instruídos |
| **TxInfAndSts** — Informações e status da transação para resultados de transações individuais | Obrigatório nos fluxos CBPR+ para confirmar o processamento de mensagens pacs.008 e pacs.009 |
| **StsRsnInf** — Informações do motivo do status com códigos de motivo estruturados | Suporta relatórios de status tanto em nível de grupo agregado quanto em nível de transação individual |
| **OrgnlTxRef** — Referência da transação original vinculando à instrução de origem | O agente instruído (receptor) envia pacs.002 de volta ao agente instruente (remetente) para confirmar a aceitação, liquidação ou rejeição de uma instrução de pagamento recebida, como pacs.008 ou pacs.009. |

## Contexto CBPR+ e esquemas

- Substitui MT199 e narrativas de status no campo 79 de mensagens MT
- CBPR+ exige pacs.002 para toda comunicação de status de pagamento
- Códigos de motivo estruturados substituem explicações de rejeição em texto livre
- A integração com o rastreamento SWIFT gpi requer pacs.002 para transparência de ponta a ponta

## Fluxo de mensagem

O agente instruído (receptor) envia pacs.002 de volta ao agente instruente (remetente) para confirmar a aceitação, liquidação ou rejeição de uma instrução de pagamento recebida, como pacs.008 ou pacs.009.

## Tabela de diferenças de versão

| Faixa de versão | Por que importa | Implicação de implementação |
|---|---|---|
| pacs.002.001.12 | Implementação atual no pacs008 | Use isto ao trabalhar com os templates e artefatos de validação atualmente suportados pelo projeto. |
| pacs.002.001.13-15 | Revisões posteriores do catálogo | Review later ISO revisions before starting new interoperability work or onboarding new infrastructures. |

## Exemplo XML comentado

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Comentários de campo

- `MsgId`: Use a new identifier for the status report itself, not the original payment instruction.
- `OrgnlInstrId`: Keep the original instruction identifier intact so status can be matched automatically.
- `TxSts`: This is the operational state; map it carefully to internal workflow states rather than assuming a one-to-one match.
- `StsRsnInf`: Structured reason codes are far more useful than free text for repair and analytics.

## Comparar pacs.002 vs pacs.028

| Dimensão | pacs.002.001.12 | Mensagem de comparação |
|---|---|---|
| Objetivo principal | Report status | Request status |
| Who starts the interaction | The institution sending the status | The institution asking for status |
| Operational posture | Event-driven reporting | Exception-driven enquiry |
| Suposição errada a evitar | That status reporting replaces investigation workflows | That every payment needs an explicit status request |

## Referências primárias

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Mensagens relacionadas
| Tipo de mensagem | Descrição | Visão geral |
|---|---|---|
| [`pacs.008.001.13`](/pt/pacs.008.001.13/) | FI to FI Customer Credit Transfer | A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém informações sobre devedor, credor, valor e dados de remessa para uma ou mais transações de transferência de crédito. |
| [`pacs.009.001.10`](/pt/pacs.009.001.10/) | Financial Institution Credit Transfer | A mensagem pacs.009 é utilizada para transferências de crédito entre instituições financeiras onde a transferência ocorre por conta própria da instituição e não em nome de um cliente. Suporta financiamento interbancário, pagamentos de cobertura e gestão de liquidez. |
| [`pacs.028.001.05`](/pt/pacs.028.001.05/) | FI to FI Payment Status Request | A mensagem pacs.028 é enviada por uma instituição financeira para solicitar o status de uma instrução de pagamento enviada anteriormente. Permite o rastreamento proativo do processamento de pagamentos sem aguardar um relatório de status não solicitado. |

