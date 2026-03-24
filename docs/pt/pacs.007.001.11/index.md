---
title: pacs.007.001.11 | Reversão de pagamento FI a FI | pacs008
description: A mensagem pacs.007 é utilizada para reverter uma instrução de pagamento enviada anteriormente que ainda não foi liquidada ou para solicitar a reversão de...
lang: pt-BR
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.007 only for fraud scenarios?"
    answer: "No. Fraud is a major use case, but any instructing-side need to reverse a payment can trigger it."
  - question: "Can it be handled like a normal return?"
    answer: "No. Reversal timing, reason capture, and reconciliation differ materially from returns."
---

# pacs.007.001.11 — Reversão de pagamento FI a FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Campo</th>
        <th scope="col">Valor</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Nome ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Status de registro</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Ano</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Versão</strong></td>
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

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

<div class="operational-matrix-table" tabindex="0" aria-label="Elementos de dados principais Contexto de negócio">
  <table>
    <caption>Key data elements and business context</caption>
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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Cabeçalho de grupo com identificação da mensagem e registro de data/hora de criação</td>
          <td class="operational-matrix-table__right">Iniciado quando o remetente original identifica um erro antes ou após a liquidação</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informações da transação com valor da reversão e partes envolvidas</td>
          <td class="operational-matrix-table__right">Utilizado em cenários de fraude onde é necessária uma reversão rápida</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informações do grupo original com referência à mensagem de origem</td>
          <td class="operational-matrix-table__right">Suporta tanto a reversão total quanto parcial dos valores do pagamento original</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Informações do motivo da reversão com códigos de motivo estruturados</td>
          <td class="operational-matrix-table__right">Contém códigos de motivo de reversão estruturados para processamento a jusante</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Referência da transação original para rastreabilidade de ponta a ponta</td>
          <td class="operational-matrix-table__right">O agente instruente (remetente original) envia pacs.007 para frente pela cadeia de pagamento para reverter um pagamento previamente instruído. Cada agente processa a instrução de reversão e ajusta a liquidação de acordo.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexto CBPR+ e esquemas

- Distingue-se do pacs.004 pela direção — a reversão flui para frente a partir do originador, a devolução flui para trás a partir do beneficiário
- CBPR+ requer pareamento com identificadores da mensagem original para correspondência automatizada
- Códigos de motivo estruturados substituem narrativas em texto livre de mensagens MT legadas
- Cada vez mais utilizado em fluxos de trabalho de rechamada de pagamentos instantâneos e prevenção de fraudes

## Fluxo de mensagem

O agente instruente (remetente original) envia pacs.007 para frente pela cadeia de pagamento para reverter um pagamento previamente instruído. Cada agente processa a instrução de reversão e ajusta a liquidação de acordo.

## Tabela de diferenças de versão

<div class="version-diff-table" tabindex="0" aria-label="Tabela de diferenças de versão">
  <table>
    <caption>Tabela de diferenças de versão</caption>
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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">Implementação atual no pacs008</td>
          <td class="version-diff-table__takeaway">Boa base para modelagem de fluxos de reversão.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">Revisões posteriores do catálogo</td>
          <td class="version-diff-table__takeaway">Check later revisions for current market-infrastructure alignment.</td>
        </tr>
    </tbody>
  </table>
</div>

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

- `MsgId`: The reversal needs its own identifier.
- `OrgnlInstrId`: Preserve a referência original do pagamento para evitar rupturas na reconciliação.
- `RvslRsnInf`: Use structured reversal reasons so cases can be routed correctly.

## Comparar pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="Comparar pacs.007 vs pacs.004">
  <table>
    <caption>Comparar pacs.007 vs pacs.004</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensão</th>
        <th>pacs.007.001.11</th>
        <th>Mensagem de comparação</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Objetivo principal</td>
          <td class="message-comparison-table__current">Reverse a previously instructed payment</td>
          <td class="message-comparison-table__other">Return settled funds</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Original instructing side</td>
          <td class="message-comparison-table__other">Receiving / beneficiary side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Forward through the chain</td>
          <td class="message-comparison-table__other">Back through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Mais adequado para</td>
          <td class="message-comparison-table__current">Tratamento de reversões por recall, erro ou fraude</td>
          <td class="message-comparison-table__other">Tratamento de devoluções após a liquidação</td>
        </tr>
    </tbody>
  </table>
</div>

## Referências primárias

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

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
          <td class="related-messages-table__id"><a href="/pt/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Retorno de pagamento</td>
          <td class="related-messages-table__overview">A mensagem pacs.004 é utilizada para devolver uma transação de pagamento previamente liquidada. Reverte o fluxo de fundos quando um pagamento não pode ser aplicado, foi enviado por engano ou está sendo rechamado pela instituição originadora.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pt/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Relatório de status de pagamento FI a FI</td>
          <td class="related-messages-table__overview">A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento.</td>
        </tr>
    </tbody>
  </table>
</div>

