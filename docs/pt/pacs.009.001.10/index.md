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

<div class="operational-matrix-table" tabindex="0" aria-label="Elementos de dados principais Contexto de negócio">
  <table>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Elementos de dados principais</th>
        <th>Contexto de negócio</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Cabeçalho de grupo com identificação da mensagem e informações de liquidação</td>
          <td class="operational-matrix-table__right">Utilizado para transferências interbancárias por conta própria e pagamentos de cobertura</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Informações da transação de transferência de crédito com valor de liquidação interbancária</td>
          <td class="operational-matrix-table__right">Suporta a gestão de liquidez entre parceiros de correspondência bancária</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identificação da instituição devedora e de seu agente</td>
          <td class="operational-matrix-table__right">Contém a etapa de cobertura de transferências de crédito de clientes liquidadas pelo método de cobertura</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identificação da instituição credora e de seu agente</td>
          <td class="operational-matrix-table__right">Permite operações de tesouraria e financiamento entre instituições financeiras</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Valor de liquidação interbancária na moeda de liquidação</td>
          <td class="operational-matrix-table__right">A instituição devedora envia pacs.009 à instituição credora para transferir seus próprios fundos. Para pagamentos pelo método de cobertura, pacs.009 fornece a etapa de financiamento enquanto pacs.008 transporta a instrução do cliente por um caminho separado.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexto CBPR+ e esquemas

- Substitui MT202 e MT202COV para transferências entre instituições
- Fluxos pelo método de cobertura pareiam pacs.009 com a instrução de cliente pacs.008 subjacente
- Dados estruturados de partes e identificação LEI são cada vez mais exigidos
- SWIFT gpi cobre pacs.009 para transparência na correspondência bancária

## Fluxo de mensagem

A instituição devedora envia pacs.009 à instituição credora para transferir seus próprios fundos. Para pagamentos pelo método de cobertura, pacs.009 fornece a etapa de financiamento enquanto pacs.008 transporta a instrução do cliente por um caminho separado.

## Tabela de diferenças de versão

<div class="version-diff-table" tabindex="0" aria-label="Tabela de diferenças de versão">
  <table>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Faixa de versão</th>
        <th>Por que importa</th>
        <th>Implicação de implementação</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">Implementação atual no pacs008</td>
          <td class="version-diff-table__takeaway">Corresponde ao suporte atual do projeto para fluxos de transferência de crédito FI.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">Revisões posteriores do catálogo</td>
          <td class="version-diff-table__takeaway">Importante para o planejamento do roteiro em ambientes de banco correspondente e pagamentos de cobertura.</td>
        </tr>
    </tbody>
  </table>
</div>

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

<div class="message-comparison-table" tabindex="0" aria-label="Comparar pacs.009 vs pacs.008">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensão</th>
        <th>pacs.009.001.10</th>
        <th>Mensagem de comparação</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Objetivo principal</td>
          <td class="message-comparison-table__current">Transferência de crédito de conta própria da instituição ou perna de cobertura</td>
          <td class="message-comparison-table__other">Transferência de crédito de cliente</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Responsável de negócio</td>
          <td class="message-comparison-table__current">Operações de tesouraria, banco correspondente e financiamento</td>
          <td class="message-comparison-table__other">Operações de pagamentos de clientes</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Combinações típicas</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004 e fluxos pacs.008 vinculados</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Suposição errada a evitar</td>
          <td class="message-comparison-table__current">Que é apenas uma pacs.008 mais técnica</td>
          <td class="message-comparison-table__other">Que pode transportar com facilidade fluxos de financiamento institucional</td>
        </tr>
    </tbody>
  </table>
</div>

## Referências primárias

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## Mensagens relacionadas
<div class="related-messages-table" tabindex="0" aria-label="Mensagens relacionadas">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Tipo de mensagem</th>
        <th>Descrição</th>
        <th>Visão geral</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/pt/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Transferência de crédito de cliente FI a FI</td>
          <td class="related-messages-table__overview">A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém informações sobre devedor, credor, valor e dados de remessa para uma ou mais transações de transferência de crédito.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pt/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Relatório de status de pagamento FI a FI</td>
          <td class="related-messages-table__overview">A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pt/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Débito direto entre instituições financeiras</td>
          <td class="related-messages-table__overview">A mensagem pacs.010 é utilizada entre instituições financeiras para transações de débito direto na conta própria da instituição. Permite que uma instituição colete fundos diretamente da conta de outra instituição.</td>
        </tr>
    </tbody>
  </table>
</div>

