---
title: pacs.028.001.05 | Solicitação de status de pagamento FI a FI | pacs008
description: A mensagem pacs.028 é enviada por uma instituição financeira para solicitar o status de uma instrução de pagamento enviada anteriormente. Permite o...
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — Solicitação de status de pagamento FI a FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Nome ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Visão geral

A mensagem pacs.028 é enviada por uma instituição financeira para solicitar o status de uma instrução de pagamento enviada anteriormente. Permite o rastreamento proativo do processamento de pagamentos sem aguardar um relatório de status não solicitado.

> Última revisão com base em fontes primárias em 23 de março de 2026. Data de referência do catálogo ISO 20022: 2025-02-27; os links das fontes estão abaixo.

## Elementos de dados principais

- **GrpHdr** — Cabeçalho de grupo com identificação da mensagem e registro de data/hora de criação
- **TxInf** — Informações da transação identificando o pagamento a ser consultado
- **OrgnlGrpInf** — Informações do grupo original com referência à mensagem de origem
- **OrgnlInstrId** — Identificação da instrução original do pagamento de origem
- **OrgnlEndToEndId** — Identificação de ponta a ponta original para rastreabilidade

## Contexto de negócio

- Permite consulta proativa de status para instruções de pagamento em trânsito
- Suporta equipes operacionais na investigação de pagamentos atrasados ou ausentes
- Complementa pacs.002 ao iniciar a comunicação de status em vez de aguardar
- Utilizado em fluxos de trabalho de tratamento de exceções e monitoramento de SLA

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Cabeçalho de grupo com identificação da mensagem e registro de data/hora de criação</td>
          <td class="operational-matrix-table__right">Permite consulta proativa de status para instruções de pagamento em trânsito</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informações da transação identificando o pagamento a ser consultado</td>
          <td class="operational-matrix-table__right">Suporta equipes operacionais na investigação de pagamentos atrasados ou ausentes</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informações do grupo original com referência à mensagem de origem</td>
          <td class="operational-matrix-table__right">Complementa pacs.002 ao iniciar a comunicação de status em vez de aguardar</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — Identificação da instrução original do pagamento de origem</td>
          <td class="operational-matrix-table__right">Utilizado em fluxos de trabalho de tratamento de exceções e monitoramento de SLA</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — Identificação de ponta a ponta original para rastreabilidade</td>
          <td class="operational-matrix-table__right">O agente instruente envia pacs.028 ao agente instruído para solicitar o status de um pagamento específico. O agente instruído responde com um pacs.002 contendo o status de processamento atual.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexto CBPR+ e esquemas

- Substitui padrões de consulta de status MT199 e consultas manuais de mensagens SWIFT
- CBPR+ suporta solicitações de status estruturadas vinculadas a identificadores da mensagem original
- O rastreamento baseado em UETR via gpi reduz a necessidade de consultas manuais
- Cada vez mais integrado em painéis automatizados de operações de pagamento

## Fluxo de mensagem

O agente instruente envia pacs.028 ao agente instruído para solicitar o status de um pagamento específico. O agente instruído responde com um pacs.002 contendo o status de processamento atual.

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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">Implementação atual no pacs008</td>
          <td class="version-diff-table__takeaway">Adequado para a modelagem atual de solicitações de status.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">Revisão posterior do catálogo</td>
          <td class="version-diff-table__takeaway">Consulte a revisão mais recente do catálogo para o planejamento futuro de interoperabilidade.</td>
        </tr>
    </tbody>
  </table>
</div>

## Exemplo XML comentado

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Comentários de campo

- `MsgId`: A própria solicitação precisa de um identificador auditável distinto do pagamento subjacente.
- `OrgnlInstrId`: Use o identificador de origem exato da instrução original para maximizar a precisão da conciliação.
- `OrgnlEndToEndId`: Incluir rastreabilidade voltada ao cliente ajuda as equipes operacionais a reconciliar a consulta mais rapidamente.

## Comparar pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="Comparar pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensão</th>
        <th>pacs.028.001.05</th>
        <th>Mensagem de comparação</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Objetivo principal</td>
          <td class="message-comparison-table__current">Request status</td>
          <td class="message-comparison-table__other">Report status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Quem inicia a interação</td>
          <td class="message-comparison-table__current">A instituição que solicita o status</td>
          <td class="message-comparison-table__other">A instituição que envia o status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Postura operacional</td>
          <td class="message-comparison-table__current">Consulta orientada por exceção</td>
          <td class="message-comparison-table__other">Event-driven reporting</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Suposição errada a evitar</td>
          <td class="message-comparison-table__current">Que ele deveria ser enviado rotineiramente para cada pagamento</td>
          <td class="message-comparison-table__other">Que ele elimina a necessidade de gerenciamento proativo de casos</td>
        </tr>
    </tbody>
  </table>
</div>

## Referências primárias

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/pt/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Relatório de status de pagamento FI a FI</td>
          <td class="related-messages-table__overview">A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pt/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Transferência de crédito de cliente FI a FI</td>
          <td class="related-messages-table__overview">A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém informações sobre devedor, credor, valor e dados de remessa para uma ou mais transações de transferência de crédito.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pt/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Transferência de crédito entre instituições financeiras</td>
          <td class="related-messages-table__overview">A mensagem pacs.009 é utilizada para transferências de crédito entre instituições financeiras onde a transferência ocorre por conta própria da instituição e não em nome de um cliente. Suporta financiamento interbancário, pagamentos de cobertura e gestão de liquidez.</td>
        </tr>
    </tbody>
  </table>
</div>

