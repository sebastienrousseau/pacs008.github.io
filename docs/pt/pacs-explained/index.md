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

**Etapa 1 — Iniciação.** O pagamento origina-se no domínio cliente-banco (pain.001).

**Etapa 2 — Instrução interbancária.** O agente do devedor cria um pacs.008 e envia-o ao próximo agente na cadeia. No fluxo de cobertura, pacs.008 vai diretamente ao agente do credor enquanto pacs.009 transporta o financiamento.

**Etapa 3 — Reporte de estado.** O agente recetor pode devolver um pacs.002 confirmando aceitação, rejeição ou estado pendente.

**Etapa 4 — Liquidação.** Ocorre através de sistema de compensação (CLRG), contas de correspondente (INDA/INGA) ou pagamento de cobertura (COVE).

**Etapa 5 — Crédito ao beneficiário.** O agente do credor credita o beneficiário.

**Etapa 6 — Gestão de exceções.** pacs.004 para devoluções, pacs.007 para reversões, pacs.028 para consultas de estado.

### Fluxo método serial

```text
Agente Devedor --(pacs.008)--> Agente Intermediário
Agente Intermediário --(pacs.002)--> Agente Devedor [estado]
Agente Intermediário --(pacs.008)--> Agente Credor
Agente Credor --(pacs.002)--> Agente Intermediário [estado]
```

### Fluxo método de cobertura

```text
Agente Devedor --(pacs.008)--> Agente Credor [direto, com dados do cliente]
Agente Devedor --(pacs.009)--> Banco de Cobertura --(pacs.009)--> Agente Credor [etapa de financiamento]
```

## Estrutura XML de pacs.008

pacs.008 tem dois blocos principais: o Cabeçalho de Grupo (GrpHdr) e a Informação de Transação de Transferência a Crédito (CdtTrfTxInf).

### Cabeçalho de Grupo (GrpHdr)

Aparece exatamente uma vez por mensagem. Contém MsgId, CreDtTm, NbOfTxs, SttlmInf, IntrBkSttlmDt e PmtTpInf.

### Informação de Transação (CdtTrfTxInf)

Cada transação contém: PmtId, IntrBkSttlmAmt, InstdAmt, ChrgBr, Dbtr/DbtrAcct/DbtrAgt, Cdtr/CdtrAcct/CdtrAgt, IntrmyAgt, RmtInf, Purp e RgltryRptg.

## Métodos de liquidação

- **CLRG** — Liquidação através de sistema de compensação.
- **INDA** — Liquidação nos livros do agente instruído.
- **INGA** — Liquidação nos livros do agente instrutor.
- **COVE** — Liquidação através de pagamento de cobertura pacs.009.

## Códigos de portador de encargos

- **DEBT** — Devedor suporta todos os encargos (equivalente MT103: OUR).
- **CRED** — Credor suporta todos os encargos (equivalente MT103: BEN).
- **SHAR** — Encargos partilhados (equivalente MT103: SHA).
- **SLEV** — Obrigatório para SEPA. Sem deduções do montante.

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

## Identificação das partes

- **BIC** — Código de identificação empresarial (ISO 9362).
- **LEI** — Identificador de entidade jurídica (ISO 17442).
- **IBAN** — Número de conta bancária internacional (ISO 13616).

## Informação de remessa

- **Não estruturada** — Texto livre até 140 caracteres.
- **Estruturada** — Referências de documentos com tipos CINV, CREN, SOAC.

## UETR e rastreamento gpi

UETR é um UUID v4 gerado pelo agente do devedor. SWIFT gpi utiliza o UETR para rastrear pagamentos.

## Referências

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

