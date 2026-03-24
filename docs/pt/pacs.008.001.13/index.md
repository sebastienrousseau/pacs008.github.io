---
title: pacs.008.001.13 | Transferência de crédito de cliente FI a FI | pacs008
description: A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém...
lang: pt-BR
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — Transferência de crédito de cliente FI a FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Status de registro</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Ano</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Versão</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## Visão geral

A mensagem pacs.008 é a instrução de pagamento principal trocada entre instituições financeiras para transferir fundos em nome de um cliente. Contém informações sobre devedor, credor, valor e dados de remessa para uma ou mais transações de transferência de crédito.

> Última revisão com base em fontes primárias em 23 de março de 2026. Data de referência do catálogo ISO 20022: 2025-02-27; os links das fontes estão abaixo.

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Cabeçalho de grupo com ID da mensagem, data de criação, número de transações e informações de liquidação</td>
          <td class="operational-matrix-table__right">A mensagem principal para transferências de crédito transfronteiriças e domésticas iniciadas pelo cliente</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Informações da transação de transferência de crédito com valor, encargos e finalidade</td>
          <td class="operational-matrix-table__right">Utilizada em SEPA SCT, SEPA Instant, CBPR+ e sistemas de compensação nacionais</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identificação do devedor e do agente do devedor com dados da conta</td>
          <td class="operational-matrix-table__right">Contém informações de remessa estruturadas para suportar a reconciliação automatizada</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identificação do credor e do agente do credor com dados da conta</td>
          <td class="operational-matrix-table__right">Suporta métodos de liquidação serial, por cobertura e direto para cadeias de pagamento com múltiplas etapas</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Informações de remessa para referências de pagamento estruturadas ou não estruturadas</td>
          <td class="operational-matrix-table__right">O agente do devedor cria um pacs.008 e o envia ao agente do credor (diretamente ou via intermediários). Cada agente na cadeia valida, enriquece e encaminha a instrução até que o agente do credor credite a conta do beneficiário.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexto CBPR+ e esquemas

- Substitui MT103 e MT103+ para transferências de crédito transfronteiriças de clientes
- O prazo de novembro de 2026 para endereços estruturados aplica-se a todos os endereços postais das partes
- SWIFT gpi requer pacs.008 para rastreamento de ponta a ponta baseado em UETR
- 13 revisões refletem a evolução contínua do esquema em infraestruturas de mercado

## Fluxo de mensagem

O agente do devedor cria um pacs.008 e o envia ao agente do credor (diretamente ou via intermediários). Cada agente na cadeia valida, enriquece e encaminha a instrução até que o agente do credor credite a conta do beneficiário.

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">Revisões iniciais</td>
          <td class="version-diff-table__takeaway">Útil principalmente para análise de migrações legadas e contexto de histórico de versões.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">Revisões modernas anteriores à atual</td>
          <td class="version-diff-table__takeaway">Estas são as revisões com maior probabilidade de aparecer em projetos recentes de migração ou coexistência.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">Revisão atual do catálogo</td>
          <td class="version-diff-table__takeaway">Use isto para planejamento com a versão atual, ainda validando diretrizes de esquema e prontidão das contrapartes.</td>
        </tr>
    </tbody>
  </table>
</div>

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

- `MsgId`: Este campo deve identificar o envelope da mensagem, e não a referência de pagamento do cliente final.
- `EndToEndId`: Mantenha a rastreabilidade voltada ao cliente estável em todos os sistemas posteriores sempre que possível.
- `UETR`: Use isto de forma consistente em ambientes transfronteiriços com forte exigência de rastreabilidade; não o gere de forma ad hoc em etapas posteriores do processamento.
- `IntrBkSttlmAmt`: Valide valor e moeda com regras de negócio antes da validação do esquema.
- `Dbtr` / `Cdtr`: A qualidade dos dados das partes, a estrutura do endereço e os identificadores costumam ser os principais fatores do volume de reparos.

## Comparar pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="Comparar pacs.008 vs pacs.009">
  <table>
    <caption>Comparar pacs.008 vs pacs.009</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensão</th>
        <th>pacs.008.001.13</th>
        <th>Mensagem de comparação</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Objetivo principal</td>
          <td class="message-comparison-table__current">Transferência de crédito de cliente</td>
          <td class="message-comparison-table__other">Transferência de crédito de conta própria da instituição ou perna de cobertura</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Responsável de negócio</td>
          <td class="message-comparison-table__current">Operações de pagamentos de clientes</td>
          <td class="message-comparison-table__other">Operações de tesouraria, banco correspondente e financiamento</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Combinações típicas</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, and sometimes linked pacs.008 flows</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Suposição errada a evitar</td>
          <td class="message-comparison-table__current">That all bank-to-bank transfers belong here</td>
          <td class="message-comparison-table__other">That it can replace customer credit-transfer instructions</td>
        </tr>
    </tbody>
  </table>
</div>

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

<div class="message-versions-table" tabindex="0" aria-label="Versões suportadas">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Versão</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>Atual</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/pt/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Retorno de pagamento</td>
          <td class="related-messages-table__overview">A mensagem pacs.004 é utilizada para devolver uma transação de pagamento previamente liquidada. Reverte o fluxo de fundos quando um pagamento não pode ser aplicado, foi enviado por engano ou está sendo rechamado pela instituição originadora.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/pt/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Transferência de crédito entre instituições financeiras</td>
          <td class="related-messages-table__overview">A mensagem pacs.009 é utilizada para transferências de crédito entre instituições financeiras onde a transferência ocorre por conta própria da instituição e não em nome de um cliente. Suporta financiamento interbancário, pagamentos de cobertura e gestão de liquidez.</td>
        </tr>
    </tbody>
  </table>
</div>

