---
title: pacs.010.001.05 | Débito direto entre instituições financeiras | pacs008
description: A mensagem pacs.010 é utilizada entre instituições financeiras para transações de débito direto na conta própria da instituição. Permite que uma...
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Débito direto entre instituições financeiras

| | |
|---|---|
| **Nome ISO** | FinancialInstitutionDirectDebitV05 |
| **Status de registro** | Registered |
| **Ano** | 2019 |
| **Versão** | 5 |

## Visão geral

A mensagem pacs.010 é utilizada entre instituições financeiras para transações de débito direto na conta própria da instituição. Permite que uma instituição colete fundos diretamente da conta de outra instituição.

> Última revisão com base em fontes primárias em 23 de março de 2026. Data de referência do catálogo ISO 20022: 2025-02-27; os links das fontes estão abaixo.

## Elementos de dados principais

- **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e informações de liquidação
- **DrctDbtTxInf** — Informações da transação de débito direto com valor de cobrança
- **Cdtr / CdtrAgt** — Identificação da instituição credora e de seu agente
- **Dbtr / DbtrAgt** — Identificação da instituição devedora e de seu agente
- **IntrBkSttlmAmt** — Valor de liquidação interbancária na moeda de liquidação

## Contexto de negócio

- Suporta a cobrança interbancária por débito direto entre instituições financeiras
- Utilizado para cobrança de taxas, chamadas de margem e obrigações de liquidação institucional
- Requer acordos bilaterais pré-estabelecidos entre as instituições participantes
- Essencial para a gestão de caixa institucional e ciclos de liquidação interbancária

| Elementos de dados principais | Contexto de negócio |
|---|---|
| **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e informações de liquidação | Suporta a cobrança interbancária por débito direto entre instituições financeiras |
| **DrctDbtTxInf** — Informações da transação de débito direto com valor de cobrança | Utilizado para cobrança de taxas, chamadas de margem e obrigações de liquidação institucional |
| **Cdtr / CdtrAgt** — Identificação da instituição credora e de seu agente | Requer acordos bilaterais pré-estabelecidos entre as instituições participantes |
| **Dbtr / DbtrAgt** — Identificação da instituição devedora e de seu agente | Essencial para a gestão de caixa institucional e ciclos de liquidação interbancária |
| **IntrBkSttlmAmt** — Valor de liquidação interbancária na moeda de liquidação | A instituição credora envia pacs.010 à instituição devedora para coletar fundos com base em um acordo pré-estabelecido. A instituição devedora valida a solicitação e liquida ou rejeita o débito direto. |

## Contexto CBPR+ e esquemas

- Substitui elementos do MT204 para processamento de débitos diretos interbancários
- A identificação estruturada de partes segue os mesmos requisitos de outras mensagens pacs
- A validação de identificadores institucionais (BIC, LEI) é obrigatória
- Incluído nos roteiros de adoção completa de ISO 20022 em infraestruturas de mercado

## Fluxo de mensagem

A instituição credora envia pacs.010 à instituição devedora para coletar fundos com base em um acordo pré-estabelecido. A instituição devedora valida a solicitação e liquida ou rejeita o débito direto.

## Tabela de diferenças de versão

| Faixa de versão | Por que importa | Implicação de implementação |
|---|---|---|
| pacs.010.001.05 | Implementação atual no pacs008 | Ponto de referência para o suporte a débitos diretos entre instituições no projeto atual. |
| pacs.010.001.06 | Revisão posterior do catálogo | Review before adopting newer infrastructure requirements. |

## Exemplo XML comentado

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Comentários de campo

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Valores de débito direto entre instituições frequentemente exigem controles bilaterais explícitos de tolerância.
- `Cdtr` / `Dbtr`: Defina claramente os papéis institucionais; este não é um modelo de débito para cliente de varejo.

## Referências primárias

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Mensagens relacionadas
| Tipo de mensagem | Descrição | Visão geral |
|---|---|---|
| [`pacs.009.001.10`](/pt/pacs.009.001.10/) | Transferência de crédito entre instituições financeiras | A mensagem pacs.009 é utilizada para transferências de crédito entre instituições financeiras onde a transferência ocorre por conta própria da instituição e não em nome de um cliente. Suporta financiamento interbancário, pagamentos de cobertura e gestão de liquidez. |
| [`pacs.002.001.12`](/pt/pacs.002.001.12/) | Relatório de status de pagamento FI a FI | A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento. |
| [`pacs.003.001.09`](/pt/pacs.003.001.09/) | Débito direto de cliente FI a FI | A mensagem pacs.003 é trocada entre instituições financeiras para executar uma instrução de débito direto do cliente. Permite que o banco do credor colete fundos do banco do devedor em nome do credor. |

