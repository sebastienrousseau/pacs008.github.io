---
title: "Guia de seleção de mensagens | pacs008"
description: Escolha a mensagem pacs ISO 20022 correta para geração, status, devoluções, reversões e consultas.
lang: pt-BR
lastUpdated: true
image: /logo.webp
---

# Guia de seleção de mensagens

Escolha a família pacs primeiro pelo evento operacional e depois pelo esquema e pelo modelo operacional.

## Matriz rápida de decisão

<div class="decision-matrix-table" tabindex="0" aria-label="Matriz rápida de decisão">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
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
          <td class="decision-matrix-table__id"><a href="/pt/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">Relatório de status de pagamento FI a FI</td>
          <td class="decision-matrix-table__overview">A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pt/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">Débito direto de cliente FI a FI</td>
          <td class="decision-matrix-table__overview">A mensagem pacs.003 é trocada entre instituições financeiras para executar uma instrução de débito direto do cliente. Permite que o banco do credor colete fundos do banco do devedor em nome do credor.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pt/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Retorno de pagamento</td>
          <td class="decision-matrix-table__overview">A mensagem pacs.004 é utilizada para devolver uma transação de pagamento previamente liquidada. Reverte o fluxo de fundos quando um pagamento não pode ser aplicado, foi enviado por engano ou está sendo rechamado pela instituição originadora.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pt/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">Reversão de pagamento FI a FI</td>
          <td class="decision-matrix-table__overview">A mensagem pacs.007 é utilizada para reverter uma instrução de pagamento enviada anteriormente que ainda não foi liquidada ou para solicitar a reversão de um pagamento liquidado. Diferentemente do pacs.004 (devolução), é iniciada pelo agente instruente original.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pt/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">Transferência de crédito de cliente FI a FI</td>
          <td class="decision-matrix-table__overview">A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém informações sobre devedor, credor, valor e dados de remessa para uma ou mais transações de transferência de crédito.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pt/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Transferência de crédito entre instituições financeiras</td>
          <td class="decision-matrix-table__overview">A mensagem pacs.009 é utilizada para transferências de crédito entre instituições financeiras onde a transferência ocorre por conta própria da instituição e não em nome de um cliente. Suporta financiamento interbancário, pagamentos de cobertura e gestão de liquidez.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pt/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Débito direto entre instituições financeiras</td>
          <td class="decision-matrix-table__overview">A mensagem pacs.010 é utilizada entre instituições financeiras para transações de débito direto na conta própria da instituição. Permite que uma instituição colete fundos diretamente da conta de outra instituição.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pt/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">Solicitação de status de pagamento FI a FI</td>
          <td class="decision-matrix-table__overview">A mensagem pacs.028 é enviada por uma instituição financeira para solicitar o status de uma instrução de pagamento enviada anteriormente. Permite o rastreamento proativo do processamento de pagamentos sem aguardar um relatório de status não solicitado.</td>
        </tr>
    </tbody>
  </table>
</div>

## Pontos de comparação comuns

<div class="comparison-points-table" tabindex="0" aria-label="Pontos de comparação comuns">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>Comparar</th>
        <th>Diferença principal</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">Pagamento de cliente versus movimento institucional ou de cobertura</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">Devolução do lado recebedor versus reversão do lado originador</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">Relatório de status versus solicitação de status</td>
        </tr>
    </tbody>
  </table>
</div>

## Páginas de mensagens suportadas

- [`pacs.002.001.12`](/pt/pacs.002.001.12/) — Relatório de status de pagamento FI a FI
- [`pacs.003.001.09`](/pt/pacs.003.001.09/) — Débito direto de cliente FI a FI
- [`pacs.004.001.11`](/pt/pacs.004.001.11/) — Retorno de pagamento
- [`pacs.007.001.11`](/pt/pacs.007.001.11/) — Reversão de pagamento FI a FI
- [`pacs.008.001.13`](/pt/pacs.008.001.13/) — Transferência de crédito de cliente FI a FI
- [`pacs.009.001.10`](/pt/pacs.009.001.10/) — Transferência de crédito entre instituições financeiras
- [`pacs.010.001.05`](/pt/pacs.010.001.05/) — Débito direto entre instituições financeiras
- [`pacs.028.001.05`](/pt/pacs.028.001.05/) — Solicitação de status de pagamento FI a FI

