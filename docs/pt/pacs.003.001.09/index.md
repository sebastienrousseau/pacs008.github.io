---
title: "pacs.003.001.09 | Débito direto de cliente FI a FI | pacs008"
description: A mensagem pacs.003 é trocada entre instituições financeiras para executar uma instrução de débito direto do cliente. Permite que o banco do credor colete...
lang: pt-BR
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.003 the direct-debit mirror of pacs.008?"
    answer: "No. It handles customer direct-debit flows, which have different mandate, timing, and exception rules."
  - question: "What matters most operationally?"
    answer: "Mandate quality, debtor-account rules, and return handling matter more than XML generation."
---

# pacs.003.001.09 — Débito direto de cliente FI a FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
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
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Cabeçalho de grupo com identificação da mensagem e informações de liquidação</td>
          <td class="operational-matrix-table__right">Suporta os esquemas de débito direto SEPA Core e B2B</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Informações da transação de débito direto com valor e partes envolvidas</td>
          <td class="operational-matrix-table__right">Utilizado para cobrança de pagamentos recorrentes, como assinaturas, contas de serviços públicos e amortizações de empréstimos</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Identificação do credor e dados da conta</td>
          <td class="operational-matrix-table__right">Requer uma referência de mandato válida entre devedor e credor</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Identificação do agente do credor (instituição coletora)</td>
          <td class="operational-matrix-table__right">Permite a cobrança em lote de múltiplas instruções de débito direto em uma única mensagem</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Identificação do agente do devedor (instituição pagadora)</td>
          <td class="operational-matrix-table__right">O agente do credor inicia pacs.003 em direção ao agente do devedor para coletar fundos. O agente do devedor valida o mandato, verifica a cobertura da conta e liquida ou devolve a transação.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexto CBPR+ e esquemas

- Requisitos de endereço estruturado e identificação de partes aplicam-se igualmente a débitos diretos
- Dados relacionados ao mandato devem ser totalmente estruturados a partir de novembro de 2026
- Substitui formatos legados de débito direto no estilo MT104 em fluxos transfronteiriços
- A validação da identificação do esquema do credor é cada vez mais exigida

## Fluxo de mensagem

O agente do credor inicia pacs.003 em direção ao agente do devedor para coletar fundos. O agente do devedor valida o mandato, verifica a cobertura da conta e liquida ou devolve a transação.

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
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">Implementação atual no pacs008</td>
          <td class="version-diff-table__takeaway">Útil para a modelagem de referências de débito direto no projeto atual.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">Revisões posteriores do catálogo</td>
          <td class="version-diff-table__takeaway">Revise versões posteriores para mudanças de mandato, status e interoperabilidade antes do uso em uma nova implementação.</td>
        </tr>
    </tbody>
  </table>
</div>

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

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: O sucesso do débito direto costuma depender mais da qualidade da conta e do mandato do que da estrutura do XML.

## Referências primárias

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
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
          <td class="related-messages-table__id"><a href="/pt/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Retorno de pagamento</td>
          <td class="related-messages-table__overview">A mensagem pacs.004 é utilizada para devolver uma transação de pagamento previamente liquidada. Reverte o fluxo de fundos quando um pagamento não pode ser aplicado, foi enviado por engano ou está sendo rechamado pela instituição originadora.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pt/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">Reversão de pagamento FI a FI</td>
          <td class="related-messages-table__overview">A mensagem pacs.007 é utilizada para reverter uma instrução de pagamento enviada anteriormente que ainda não foi liquidada ou para solicitar a reversão de um pagamento liquidado. Diferentemente do pacs.004 (devolução), é iniciada pelo agente instruente original.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pt/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Relatório de status de pagamento FI a FI</td>
          <td class="related-messages-table__overview">A mensagem pacs.002 é enviada por uma instituição financeira para reportar o status de uma instrução de pagamento enviada anteriormente. Fornece informações de confirmação, rejeição ou status pendente para transações individuais dentro de uma mensagem de pagamento.</td>
        </tr>
    </tbody>
  </table>
</div>

