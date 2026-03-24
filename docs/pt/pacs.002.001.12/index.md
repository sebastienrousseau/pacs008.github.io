---
title: pacs.002.001.12 | Relatório de status de pagamento FI a FI | pacs008
description: A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece...
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — Relatório de status de pagamento FI a FI

| | |
|---|---|
| **Nome ISO** | FIToFIPaymentStatusReportV12 |
| **Status de registro** | Registered |
| **Ano** | 2019 |
| **Versão** | 12 |

## Visão geral

A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento.

> Última revisão com base em fontes primárias em 23 de março de 2026. Data de referência do catálogo ISO 20022: 2025-02-27; os links das fontes estão abaixo.

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
          <td class="operational-matrix-table__right">Utilizado para confirmar a liquidação ou reportar a rejeição de transferências de crédito, débitos diretos e devoluções de pagamento</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Informações e status do grupo original para relatórios em nível agregado</td>
          <td class="operational-matrix-table__right">Possibilita a reconciliação entre agentes instruentes e agentes instruídos</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Informações e status da transação para resultados de transações individuais</td>
          <td class="operational-matrix-table__right">Obrigatório nos fluxos CBPR+ para confirmar o processamento de mensagens pacs.008 e pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Informações do motivo do status com códigos de motivo estruturados</td>
          <td class="operational-matrix-table__right">Suporta relatórios de status tanto em nível de grupo agregado quanto em nível de transação individual</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Referência da transação original vinculando à instrução de origem</td>
          <td class="operational-matrix-table__right">O agente instruído (receptor) envia pacs.002 de volta ao agente instruente (remetente) para confirmar a aceitação, liquidação ou rejeição de uma instrução de pagamento recebida, como pacs.008 ou pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexto CBPR+ e esquemas

- Substitui MT199 e narrativas de status no campo 79 de mensagens MT
- CBPR+ exige pacs.002 para toda comunicação de status de pagamento
- Códigos de motivo estruturados substituem explicações de rejeição em texto livre
- A integração com o rastreamento SWIFT gpi requer pacs.002 para transparência de ponta a ponta

## Fluxo de mensagem

O agente instruído (receptor) envia pacs.002 de volta ao agente instruente (remetente) para confirmar a aceitação, liquidação ou rejeição de uma instrução de pagamento recebida, como pacs.008 ou pacs.009.

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">Implementação atual no pacs008</td>
          <td class="version-diff-table__takeaway">Use isto ao trabalhar com os modelos XML e artefatos de validação atualmente suportados pelo projeto.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">Revisões posteriores do catálogo</td>
          <td class="version-diff-table__takeaway">Revise versões ISO posteriores antes de iniciar novos trabalhos de interoperabilidade ou integrar novas infraestruturas.</td>
        </tr>
    </tbody>
  </table>
</div>

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

- `MsgId`: Use um novo identificador para o próprio relatório de status, não para a instrução de pagamento original.
- `OrgnlInstrId`: Mantenha intacto o identificador original da instrução para que o status possa ser conciliado automaticamente.
- `TxSts`: Este é o estado operacional; mapeie-o com cuidado para os estados internos do fluxo em vez de supor correspondência direta.
- `StsRsnInf`: Códigos de motivo estruturados são muito mais úteis do que texto livre para correção e análise.

## Comparar pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="Comparar pacs.002 vs pacs.028">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensão</th>
        <th>pacs.002.001.12</th>
        <th>Mensagem de comparação</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Objetivo principal</td>
          <td class="message-comparison-table__current">Report status</td>
          <td class="message-comparison-table__other">Request status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Quem inicia a interação</td>
          <td class="message-comparison-table__current">A instituição que envia o status</td>
          <td class="message-comparison-table__other">A instituição que solicita o status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Postura operacional</td>
          <td class="message-comparison-table__current">Event-driven reporting</td>
          <td class="message-comparison-table__other">Consulta orientada por exceção</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Suposição errada a evitar</td>
          <td class="message-comparison-table__current">Que o reporte de status substitui os fluxos de investigação</td>
          <td class="message-comparison-table__other">Que todo pagamento precisa de uma solicitação explícita de status</td>
        </tr>
    </tbody>
  </table>
</div>

## Referências primárias

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
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
          <td class="related-messages-table__id"><a href="/pt/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Transferência de crédito entre instituições financeiras</td>
          <td class="related-messages-table__overview">A mensagem pacs.009 é utilizada para transferências de crédito entre instituições financeiras onde a transferência ocorre por conta própria da instituição e não em nome de um cliente. Suporta financiamento interbancário, pagamentos de cobertura e gestão de liquidez.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pt/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">Solicitação de status de pagamento FI a FI</td>
          <td class="related-messages-table__overview">A mensagem pacs.028 é enviada por uma instituição financeira para solicitar o status de uma instrução de pagamento enviada anteriormente. Permite o rastreamento proativo do processamento de pagamentos sem aguardar um relatório de status não solicitado.</td>
        </tr>
    </tbody>
  </table>
</div>

