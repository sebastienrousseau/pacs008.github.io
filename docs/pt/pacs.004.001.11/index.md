---
title: "pacs.004.001.11 | Retorno de pagamento | pacs008"
description: A mensagem pacs.004 é utilizada para devolver uma transação de pagamento previamente liquidada. Reverte o fluxo de fundos quando um pagamento não pode ser...
lang: pt-BR
lastUpdated: true
image: /logo.webp
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — Retorno de pagamento

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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
          <td class="operational-matrix-table__right">Trata devoluções pós-liquidação quando a conta do beneficiário não pode ser creditada</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informações da transação com valor da devolução e partes envolvidas</td>
          <td class="operational-matrix-table__right">Suporta cenários de rechamada onde o originador solicita a devolução de fundos</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informações do grupo original vinculando à mensagem de origem</td>
          <td class="operational-matrix-table__right">Contém códigos de motivo de devolução estruturados para transparência regulatória e operacional</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Informações do motivo da devolução com códigos de motivo estruturados</td>
          <td class="operational-matrix-table__right">Aplica-se tanto a devoluções de transferências de crédito (pacs.008) quanto a devoluções de débitos diretos (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Referência da transação original para correspondência e reconciliação</td>
          <td class="operational-matrix-table__right">O agente instruído envia pacs.004 de volta pela cadeia de pagamento para devolver fundos previamente liquidados. Cada agente na cadeia processa a devolução e recredita as contas pertinentes.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexto CBPR+ e esquemas

- Substitui MT103 RETURN e mensagens de devolução pelo método de cobertura
- Códigos de motivo de devolução são padronizados e legíveis por máquina sob ISO 20022
- CBPR+ requer dados completos de referência da transação original para correspondência
- O rastreamento SWIFT gpi se estende a transações de devolução para visibilidade de ponta a ponta

## Fluxo de mensagem

O agente instruído envia pacs.004 de volta pela cadeia de pagamento para devolver fundos previamente liquidados. Cada agente na cadeia processa a devolução e recredita as contas pertinentes.

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">Implementação atual no pacs008</td>
          <td class="version-diff-table__takeaway">Alinha-se aos modelos XML atuais para retornos de pagamento.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">Revisões posteriores do catálogo</td>
          <td class="version-diff-table__takeaway">Revise versões posteriores das mensagens de retorno quando atualizações de esquema ou novas contrapartes estiverem no escopo.</td>
        </tr>
    </tbody>
  </table>
</div>

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

<div class="message-comparison-table" tabindex="0" aria-label="Comparar pacs.004 vs pacs.007">
  <table>
    <caption>Comparar pacs.004 vs pacs.007</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensão</th>
        <th>pacs.004.001.11</th>
        <th>Mensagem de comparação</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Objetivo principal</td>
          <td class="message-comparison-table__current">Return settled funds</td>
          <td class="message-comparison-table__other">Reverse a previously instructed payment</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Receiving / beneficiary side</td>
          <td class="message-comparison-table__other">Original instructing side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Back through the chain</td>
          <td class="message-comparison-table__other">Forward through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Mais adequado para</td>
          <td class="message-comparison-table__current">Tratamento de devoluções após a liquidação</td>
          <td class="message-comparison-table__other">Tratamento de reversões por recall, erro ou fraude</td>
        </tr>
    </tbody>
  </table>
</div>

## Referências primárias

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/pt/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Débito direto de cliente FI a FI</td>
          <td class="related-messages-table__overview">A mensagem pacs.003 é trocada entre instituições financeiras para executar uma instrução de débito direto do cliente. Permite que o banco do credor colete fundos do banco do devedor em nome do credor.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pt/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Relatório de status de pagamento FI a FI</td>
          <td class="related-messages-table__overview">A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento.</td>
        </tr>
    </tbody>
  </table>
</div>

