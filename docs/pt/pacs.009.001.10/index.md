---
title: pacs.009.001.10 | Transferência de crédito entre instituições financeiras | pacs008
description: A mensagem pacs.009 é utilizada para transferências de crédito entre instituições financeiras onde a transferência ocorre por conta própria da instituição...
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Transferência de crédito entre instituições financeiras

| | |
|---|---|
| **Nome ISO** | FinancialInstitutionCreditTransferV10 |
| **Status de registro** | Registered |
| **Ano** | 2019 |
| **Versão** | 10 |

## Visão geral

A mensagem pacs.009 é utilizada para transferências de crédito entre instituições financeiras onde a transferência ocorre por conta própria da instituição e não em nome de um cliente. Suporta financiamento interbancário, pagamentos de cobertura e gestão de liquidez.

> Última revisão com base em fontes primárias em 23 de março de 2026. Data de referência do catálogo ISO 20022: 2025-02-27; os links das fontes estão abaixo.

## Elementos de dados principais

- **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e informações de liquidação
- **CdtTrfTxInf** — Informações da transação de transferência de crédito com valor de liquidação interbancária
- **Dbtr / DbtrAgt** — Identificação da instituição devedora e de seu agente
- **Cdtr / CdtrAgt** — Identificação da instituição credora e de seu agente
- **IntrBkSttlmAmt** — Valor de liquidação interbancária na moeda de liquidação

## Contexto de negócio

- Utilizado para transferências interbancárias por conta própria e pagamentos de cobertura
- Suporta a gestão de liquidez entre parceiros de correspondência bancária
- Contém a etapa de cobertura de transferências de crédito de clientes liquidadas pelo método de cobertura
- Permite operações de tesouraria e financiamento entre instituições financeiras

| Elementos de dados principais | Contexto de negócio |
|---|---|
| **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e informações de liquidação | Utilizado para transferências interbancárias por conta própria e pagamentos de cobertura |
| **CdtTrfTxInf** — Informações da transação de transferência de crédito com valor de liquidação interbancária | Suporta a gestão de liquidez entre parceiros de correspondência bancária |
| **Dbtr / DbtrAgt** — Identificação da instituição devedora e de seu agente | Contém a etapa de cobertura de transferências de crédito de clientes liquidadas pelo método de cobertura |
| **Cdtr / CdtrAgt** — Identificação da instituição credora e de seu agente | Permite operações de tesouraria e financiamento entre instituições financeiras |
| **IntrBkSttlmAmt** — Valor de liquidação interbancária na moeda de liquidação | A instituição devedora envia pacs.009 à instituição credora para transferir seus próprios fundos. Para pagamentos pelo método de cobertura, pacs.009 fornece a etapa de financiamento enquanto pacs.008 transporta a instrução do cliente por um caminho separado. |

## Contexto CBPR+ e esquemas

- Substitui MT202 e MT202COV para transferências entre instituições
- Fluxos pelo método de cobertura pareiam pacs.009 com a instrução de cliente pacs.008 subjacente
- Dados estruturados de partes e identificação LEI são cada vez mais exigidos
- SWIFT gpi cobre pacs.009 para transparência na correspondência bancária

## Fluxo de mensagem

A instituição devedora envia pacs.009 à instituição credora para transferir seus próprios fundos. Para pagamentos pelo método de cobertura, pacs.009 fornece a etapa de financiamento enquanto pacs.008 transporta a instrução do cliente por um caminho separado.

## Tabela de diferenças de versão

| Faixa de versão | Por que importa | Implicação de implementação |
|---|---|---|
| pacs.009.001.10 | Implementação atual no pacs008 | Corresponde ao suporte atual do projeto para fluxos de transferência de crédito FI. |
| pacs.009.001.11-12 | Revisões posteriores do catálogo | Importante para o planejamento do roteiro em ambientes de banco correspondente e pagamentos de cobertura. |

## Exemplo XML comentado

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Comentários de campo

- `InstrId`: Use um identificador da etapa de financiamento que ainda possa ser associado ao fluxo de cliente subjacente.
- `IntrBkSttlmAmt`: Fluxos de conta própria e de cobertura frequentemente exigem controles de tesouraria mais rígidos sobre valores e datas de liquidação.
- `Dbtr` / `Cdtr`: Estas são partes institucionais, não papéis de cliente de varejo; modele-as de acordo.

## Comparar pacs.009 vs pacs.008

| Dimensão | pacs.009.001.10 | Mensagem de comparação |
|---|---|---|
| Objetivo principal | Transferência de crédito de conta própria da instituição ou perna de cobertura | Transferência de crédito de cliente |
| Responsável de negócio | Operações de tesouraria, banco correspondente e financiamento | Operações de pagamentos de clientes |
| Combinações típicas | pacs.002, pacs.004 e fluxos pacs.008 vinculados | pacs.002, pacs.004, pacs.007, pacs.028 |
| Suposição errada a evitar | Que é apenas uma pacs.008 mais técnica | Que pode transportar com facilidade fluxos de financiamento institucional |

## Referências primárias

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## Mensagens relacionadas
| Tipo de mensagem | Descrição | Visão geral |
|---|---|---|
| [`pacs.008.001.13`](/pt/pacs.008.001.13/) | Transferência de crédito de cliente FI a FI | A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém informações sobre devedor, credor, valor e dados de remessa para uma ou mais transações de transferência de crédito. |
| [`pacs.002.001.12`](/pt/pacs.002.001.12/) | Relatório de status de pagamento FI a FI | A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento. |
| [`pacs.010.001.05`](/pt/pacs.010.001.05/) | Débito direto entre instituições financeiras | A mensagem pacs.010 é utilizada entre instituições financeiras para transações de débito direto na conta própria da instituição. Permite que uma instituição colete fundos diretamente da conta de outra instituição. |

