---
title: "Explicação das mensagens PACS | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: pt-BR
lastUpdated: true
image: /logo.webp
---

# Explicação das mensagens PACS

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Ciclo de vida do pagamento

O ciclo de vida completo do pagamento pacs envolve seis etapas e múltiplos tipos de mensagem a trabalhar em conjunto.

**Etapa 1 — Iniciação.** O pagamento origina-se no domínio cliente-banco (pain.001). O banco do devedor recebe a instrução e mapeia-a para o domínio interbancário.

**Etapa 2 — Instrução interbancária.** O agente do devedor cria um pacs.008 e envia-o ao próximo agente na cadeia. No fluxo em série, o pacs.008 transita etapa a etapa através dos intermediários. No fluxo de cobertura, o pacs.008 vai diretamente do agente do devedor ao agente do credor, enquanto um pacs.009 separado transporta a etapa de financiamento através da cadeia de correspondentes.

**Etapa 3 — Reporte de estado.** Em cada etapa, o agente recetor pode devolver um pacs.002 confirmando aceitação (ACCP/ACSP/ACSC), rejeição (RJCT) ou estado pendente (PDNG). No CBPR+, o pacs.002 é obrigatório para toda a comunicação de estado de pagamento.

**Etapa 4 — Liquidação.** A liquidação ocorre através de um sistema de compensação (CLRG), em contas de correspondente (INDA/INGA) ou via pagamento de cobertura (COVE). A data e o montante de liquidação interbancária determinam quando e quanto é liquidado.

**Etapa 5 — Crédito ao beneficiário.** O agente do credor credita o beneficiário e pode enviar uma notificação ao cliente.

**Etapa 6 — Gestão de exceções.** Se o beneficiário não puder ser creditado após a liquidação, o pacs.004 devolve os fundos através da cadeia. Se o remetente descobre um erro ou fraude, o pacs.007 avança na cadeia. Se o estado for desconhecido, o pacs.028 consulta o próximo agente e a resposta regressa via pacs.002.

### Fluxo método serial

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Fluxo método de cobertura

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## Estrutura XML de pacs.008

pacs.008 tem dois blocos principais: o Cabeçalho de Grupo (GrpHdr) e a Informação de Transação de Transferência a Crédito (CdtTrfTxInf).

### Cabeçalho de Grupo (GrpHdr)

O Cabeçalho de Grupo aparece exatamente uma vez por mensagem e contém:

- **MsgId** — Identificador único de mensagem atribuído pelo agente remetente. Máximo 35 caracteres, único por remetente.
- **CreDtTm** — Data e hora de criação no formato ISO 8601.
- **NbOfTxs** — Número de transações individuais na mensagem.
- **SttlmInf** — Informação de liquidação incluindo o método de liquidação (SttlmMtd) e opcionalmente o sistema de compensação e a conta de liquidação.
- **IntrBkSttlmDt** — Data de liquidação interbancária.
- **PmtTpInf** — Informação do tipo de pagamento incluindo prioridade, nível de serviço, instrumento local e finalidade de categoria.

### Informação de Transação (CdtTrfTxInf)

Cada transação contém:

- **PmtId** — Identificadores de pagamento: InstrId, EndToEndId, TxId e UETR.
- **IntrBkSttlmAmt** — Montante de liquidação interbancária com código de moeda.
- **InstdAmt** — Montante original instruído (pode diferir do montante de liquidação devido a câmbio).
- **ChrgBr** — Código de portador de encargos (DEBT, CRED, SHAR ou SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — Nome, endereço, identificação, conta e agente do devedor.
- **Cdtr / CdtrAcct / CdtrAgt** — Nome, endereço, identificação, conta e agente do credor.
- **IntrmyAgt1 / 2 / 3** — Até três agentes intermediários na cadeia.
- **RmtInf** — Informação de remessa, não estruturada (texto livre) ou estruturada (referências de documentos, montantes, datas).
- **Purp** — Código de finalidade estruturado.
- **RgltryRptg** — Detalhes de reporte regulatório.

## Identificadores de pagamento

Mensagens pacs utilizam vários identificadores que desempenham diferentes papéis na cadeia de pagamento.

<div class="api-fields-table" tabindex="0" aria-label="Identificadores de pagamento">
  <table>
    <caption>Identificadores de pagamento e os seus papéis</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Identificador</th>
        <th scope="col">Definido por</th>
        <th scope="col">Muda na cadeia?</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">Cada agente remetente</td>
          <td class="api-fields-table__constraint">Sim — novo por mensagem</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">Cada agente ordenante</td>
          <td class="api-fields-table__constraint">Sim — pode mudar por etapa</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">Ordenante (devedor)</td>
          <td class="api-fields-table__constraint">Não — não deve ser alterado</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">Primeiro agente ordenante</td>
          <td class="api-fields-table__constraint">Não — não deve ser alterado</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">Agente do devedor</td>
          <td class="api-fields-table__constraint">Não — rastreamento universal</td>
        </tr>
    </tbody>
  </table>
</div>

## Métodos de liquidação

O elemento SttlmMtd define como a liquidação interbancária ocorre.

- **CLRG** — Liquidação através de sistema de compensação como TARGET2, EURO1 ou CHIPS. Mais comum para compensação doméstica e regional.
- **INDA** — Liquidação nos livros do agente instruído. O agente do devedor mantém uma conta nostro junto do próximo agente. Típico para banca de correspondente bilateral.
- **INGA** — Liquidação nos livros do agente instrutor. O agente instruído mantém uma conta nostro junto do agente remetente. Menos comum que INDA.
- **COVE** — Liquidação através de pagamento de cobertura separado. pacs.009 transporta a etapa de financiamento enquanto pacs.008 transporta os dados do cliente diretamente. Utilizado na banca de correspondente transfronteiriça.

## Códigos de portador de encargos

O elemento ChrgBr especifica quem suporta os encargos do pagamento.

- **DEBT** — O devedor suporta todos os encargos (equivalente MT103: OUR). O credor recebe o montante integral.
- **CRED** — O credor suporta todos os encargos (equivalente MT103: BEN). Os encargos são deduzidos da transferência.
- **SHAR** — Os encargos são partilhados (equivalente MT103: SHA). Cada parte paga os encargos do seu próprio agente. Mais comum para pagamentos transfronteiriços.
- **SLEV** — Os encargos seguem o nível de serviço. Obrigatório para SEPA. Sem deduções do montante da transferência.

## Formato de endereço postal

### Endereço estruturado

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### Endereço não estruturado (obsoleto para CBPR+ após novembro 2026)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

Restrições principais: StrtNm máximo 70 caracteres (CBPR+), TwnNm máximo 35 caracteres (CBPR+), Ctry em formato ISO 3166-1 alpha-2, AdrLine máximo 70 caracteres por linha e máximo 7 linhas.

## Identificação das partes

As partes em pacs.008 suportam múltiplos métodos de identificação:

- **BIC** — Código de identificação empresarial conforme ISO 9362. 8 ou 11 caracteres (BBBBCCLL ou BBBBCCLLBBB). Utilizado em FinInstnId/BICFI para agentes e OrgId/AnyBIC para partes.
- **LEI** — Identificador de entidade jurídica conforme ISO 17442. 20 caracteres alfanuméricos. Aparece em OrgId/LEI para partes e FinInstnId/LEI para agentes. Melhora a desambiguação de entidades para reporte regulatório.
- **IBAN** — Número de conta bancária internacional conforme ISO 13616. Utilizado em DbtrAcct/Id/IBAN e CdtrAcct/Id/IBAN.
- **IDs de organização** — Outros identificadores baseados em esquema (número fiscal, DUNS, número de cliente) via OrgId/Othr com código de nome de esquema.
- **IDs privados** — Para pessoas singulares: data e local de nascimento, passaporte (CCPT), cartão de identidade (NIDN) ou carta de condução (DRLC) via PrvtId.

## Informação de remessa

Os dados de remessa em pacs.008 utilizam o elemento RmtInf com duas formas:

**Não estruturada** — Texto livre até 140 caracteres por ocorrência. Simples mas limita a reconciliação automatizada.

**Estruturada** — Referências de documentos com códigos de tipo, números, datas e montantes. Tipos de documentos comuns: CINV (fatura comercial), CREN (nota de crédito), SOAC (extrato de conta). Suporta referências de credor ISO 11649 (RF + dígitos de controlo + referência) via CdtrRefInf. Permite correspondência automatizada de faturas e pagamentos multifatura.

## UETR e rastreamento gpi

UETR (Unique End-to-End Transaction Reference) é um UUID v4 gerado pelo agente do devedor. Aparece em PmtId/UETR em pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 e pacs.028. Deve permanecer inalterado ao longo de toda a cadeia de pagamento.

SWIFT gpi utiliza o UETR para rastrear pagamentos através de uma base de dados Tracker na nuvem. Cada agente confirma a receção e o processamento, permitindo visibilidade ponta a ponta. O SLA gpi para pagamentos transfronteiriços visa o crédito no mesmo dia na conta do credor.

## Referências

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

