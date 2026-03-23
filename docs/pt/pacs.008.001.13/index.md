---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém...
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **Nome ISO** | FIToFICustomerCreditTransferV13 |
| **Status de registro** | Registered |
| **Ano** | 2023 |
| **Versão** | 13 |

## Visão geral

A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém informações sobre devedor, credor, valor e dados de remessa para uma ou mais transações de transferência de crédito.

> Última revisão com base em fontes primárias em 23 de março de 2026. Data de referência do catálogo ISO 20022: 27 February 2025; os links das fontes estão abaixo.

## Elementos de dados principais

- **GrpHdr** — Cabeçalho de grupo com ID da mensagem, data de criação, número de transações e informações de liquidação
- **CdtTrfTxInf** — Informações da transação de transferência de crédito com valor, encargos e finalidade
- **Dbtr / DbtrAgt** — Identificação do devedor e do agente do devedor com dados da conta
- **Cdtr / CdtrAgt** — Identificação do credor e do agente do credor com dados da conta
- **RmtInf** — Informações de remessa para referências de pagamento estruturadas ou não estruturadas

## Contexto de negócio

- A mensagem principal para transferências de crédito transfronteiriças e domésticas iniciadas pelo cliente
- Utilizada em SEPA SCT, SEPA Instant, CBPR+ e sistemas de compensação nacionais
- Contém informações de remessa estruturadas para suportar a reconciliação automatizada
- Suporta métodos de liquidação serial, por cobertura e direto para cadeias de pagamento com múltiplas etapas

| Elementos de dados principais | Contexto de negócio |
|---|---|
| **GrpHdr** — Cabeçalho de grupo com ID da mensagem, data de criação, número de transações e informações de liquidação | A mensagem principal para transferências de crédito transfronteiriças e domésticas iniciadas pelo cliente |
| **CdtTrfTxInf** — Informações da transação de transferência de crédito com valor, encargos e finalidade | Utilizada em SEPA SCT, SEPA Instant, CBPR+ e sistemas de compensação nacionais |
| **Dbtr / DbtrAgt** — Identificação do devedor e do agente do devedor com dados da conta | Contém informações de remessa estruturadas para suportar a reconciliação automatizada |
| **Cdtr / CdtrAgt** — Identificação do credor e do agente do credor com dados da conta | Suporta métodos de liquidação serial, por cobertura e direto para cadeias de pagamento com múltiplas etapas |
| **RmtInf** — Informações de remessa para referências de pagamento estruturadas ou não estruturadas | O agente do devedor cria um pacs.008 e o envia ao agente do credor (diretamente ou via intermediários). Cada agente na cadeia valida, enriquece e encaminha a instrução até que o agente do credor credite a conta do beneficiário. |

## Contexto CBPR+ e esquemas

- Substitui MT103 e MT103+ para transferências de crédito transfronteiriças de clientes
- O prazo de novembro de 2026 para endereços estruturados aplica-se a todos os endereços postais das partes
- SWIFT gpi requer pacs.008 para rastreamento de ponta a ponta baseado em UETR
- 13 revisões refletem a evolução contínua do esquema em infraestruturas de mercado

## Fluxo de mensagem

O agente do devedor cria um pacs.008 e o envia ao agente do credor (diretamente ou via intermediários). Cada agente na cadeia valida, enriquece e encaminha a instrução até que o agente do credor credite a conta do beneficiário.

## Tabela de diferenças de versão

| Faixa de versão | Por que importa | Implicação de implementação |
|---|---|---|
| pacs.008.001.01-07 | Revisões iniciais | Útil principalmente para análise de migrações legadas e contexto de histórico de versões. |
| pacs.008.001.08-12 | Revisões modernas anteriores à atual | Estas são as revisões com maior probabilidade de aparecer em projetos recentes de migração ou coexistência. |
| pacs.008.001.13 | Revisão atual do catálogo | Use isto para planejamento com a versão atual, ainda validando diretrizes de esquema e prontidão das contrapartes. |

## Exemplo XML comentado

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### Comentários de campo

- `MsgId`: This should identify the message envelope, not the end-customer payment reference.
- `EndToEndId`: Keep customer-facing traceability stable across downstream systems where possible.
- `UETR`: Use this consistently in cross-border and tracking-heavy environments; do not generate it ad hoc in later workflow stages.
- `IntrBkSttlmAmt`: Validate amount and currency using business rules before schema validation.
- `Dbtr` / `Cdtr`: Party quality, address structure, and identifiers are usually the main determinants of repair rates.

## Comparar pacs.008 vs pacs.009

| Dimensão | pacs.008.001.13 | Mensagem de comparação |
|---|---|---|
| Objetivo principal | Transferência de crédito de cliente | Transferência de crédito de conta própria da instituição ou perna de cobertura |
| Responsável de negócio | Operações de pagamentos de clientes | Operações de tesouraria, correspondência e funding |
| Combinações típicas | pacs.002, pacs.004, pacs.007, pacs.028 | pacs.002, pacs.004, and sometimes linked pacs.008 flows |
| Suposição errada a evitar | That all bank-to-bank transfers belong here | That it can replace customer credit-transfer instructions |

## Referências primárias

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## Versões suportadas

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Mensagens relacionadas
| Tipo de mensagem | Descrição | Visão geral |
|---|---|---|
| [`pacs.002.001.12`](/pt/pacs.002.001.12/) | FI to FI Payment Status Report | A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento. |
| [`pacs.004.001.11`](/pt/pacs.004.001.11/) | Payment Return | A mensagem pacs.004 é utilizada para devolver uma transação de pagamento previamente liquidada. Reverte o fluxo de fundos quando um pagamento não pode ser aplicado, foi enviado por engano ou está sendo rechamado pela instituição originadora. |
| [`pacs.009.001.10`](/pt/pacs.009.001.10/) | Financial Institution Credit Transfer | A mensagem pacs.009 é utilizada para transferências de crédito entre instituições financeiras onde a transferência ocorre por conta própria da instituição e não em nome de um cliente. Suporta financiamento interbancário, pagamentos de cobertura e gestão de liquidez. |

