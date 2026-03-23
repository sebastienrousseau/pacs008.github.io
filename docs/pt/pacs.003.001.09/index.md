---
title: pacs.003.001.09 | Débito direto de cliente FI a FI | pacs008
description: A mensagem pacs.003 é trocada entre instituições financeiras para executar uma instrução de débito direto do cliente. Permite que o banco do credor colete...
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — Débito direto de cliente FI a FI

| | |
|---|---|
| **Nome ISO** | FIToFICustomerDirectDebitV09 |
| **Status de registro** | Registered |
| **Ano** | 2019 |
| **Versão** | 9 |

## Visão geral

A mensagem pacs.003 é trocada entre instituições financeiras para executar uma instrução de débito direto do cliente. Permite que o banco do credor colete fundos do banco do devedor em nome do credor.

> Última revisão com base em fontes primárias em 23 de março de 2026. Data de referência do catálogo ISO 20022: 2025-02-27; os links das fontes estão abaixo.

## Elementos de dados principais

- **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e informações de liquidação
- **DrctDbtTxInf** — Informações da transação de débito direto com valor e partes envolvidas
- **Cdtr** — Identificação do credor e dados da conta
- **CdtrAgt** — Identificação do agente do credor (instituição coletora)
- **DbtrAgt** — Identificação do agente do devedor (instituição pagadora)

## Contexto de negócio

- Suporta os esquemas de débito direto SEPA Core e B2B
- Utilizado para cobrança de pagamentos recorrentes, como assinaturas, contas de serviços públicos e amortizações de empréstimos
- Requer uma referência de mandato válida entre devedor e credor
- Permite a cobrança em lote de múltiplas instruções de débito direto em uma única mensagem

| Elementos de dados principais | Contexto de negócio |
|---|---|
| **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e informações de liquidação | Suporta os esquemas de débito direto SEPA Core e B2B |
| **DrctDbtTxInf** — Informações da transação de débito direto com valor e partes envolvidas | Utilizado para cobrança de pagamentos recorrentes, como assinaturas, contas de serviços públicos e amortizações de empréstimos |
| **Cdtr** — Identificação do credor e dados da conta | Requer uma referência de mandato válida entre devedor e credor |
| **CdtrAgt** — Identificação do agente do credor (instituição coletora) | Permite a cobrança em lote de múltiplas instruções de débito direto em uma única mensagem |
| **DbtrAgt** — Identificação do agente do devedor (instituição pagadora) | O agente do credor inicia pacs.003 em direção ao agente do devedor para coletar fundos. O agente do devedor valida o mandato, verifica a cobertura da conta e liquida ou devolve a transação. |

## Contexto CBPR+ e esquemas

- Requisitos de endereço estruturado e identificação de partes aplicam-se igualmente a débitos diretos
- Dados relacionados ao mandato devem ser totalmente estruturados a partir de novembro de 2026
- Substitui formatos legados de débito direto no estilo MT104 em fluxos transfronteiriços
- A validação da identificação do esquema do credor é cada vez mais exigida

## Fluxo de mensagem

O agente do credor inicia pacs.003 em direção ao agente do devedor para coletar fundos. O agente do devedor valida o mandato, verifica a cobertura da conta e liquida ou devolve a transação.

## Tabela de diferenças de versão

| Faixa de versão | Por que importa | Implicação de implementação |
|---|---|---|
| pacs.003.001.09 | Implementação atual no pacs008 | Útil para a modelagem de referências de débito direto no projeto atual. |
| pacs.003.001.10-11 | Revisões posteriores do catálogo | Check later revisions for mandate, status, and interoperability updates before greenfield use. |

## Exemplo XML comentado

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Comentários de campo

- `EndToEndId`: Mantenha identificadores de mandato e de cobrança separados das referências de faturas comerciais.
- `IntrBkSttlmAmt`: Valide a precisão do valor do débito e as regras de moeda antes de gerar o XML.
- `Dbtr` / `Cdtr`: O sucesso do débito direto costuma depender mais da qualidade da conta e do mandato do que da estrutura do XML.

## Referências primárias

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Mensagens relacionadas
| Tipo de mensagem | Descrição | Visão geral |
|---|---|---|
| [`pacs.004.001.11`](/pt/pacs.004.001.11/) | Retorno de pagamento | A mensagem pacs.004 é utilizada para devolver uma transação de pagamento previamente liquidada. Reverte o fluxo de fundos quando um pagamento não pode ser aplicado, foi enviado por engano ou está sendo rechamado pela instituição originadora. |
| [`pacs.007.001.11`](/pt/pacs.007.001.11/) | Reversão de pagamento FI a FI | A mensagem pacs.007 é utilizada para reverter uma instrução de pagamento enviada anteriormente que ainda não foi liquidada ou para solicitar a reversão de um pagamento liquidado. Diferentemente do pacs.004 (devolução), é iniciada pelo agente instruente original. |
| [`pacs.002.001.12`](/pt/pacs.002.001.12/) | Relatório de status de pagamento FI a FI | A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento. |

