---
title: "Frequently asked questions | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# Frequently asked questions

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## Geral

### O que é ISO 20022?

ISO 20022 é uma norma internacional para mensagens financeiras. Define uma linguagem e modelo comuns para mensagens de pagamento trocadas entre instituições financeiras. Ao contrário de formatos antigos como SWIFT MT, ISO 20022 utiliza XML e suporta dados mais ricos e estruturados para partes, montantes e referências.

### O que são mensagens pacs?

A família de mensagens pacs (payments clearing and settlement) cobre instruções de pagamento interbancárias, relatórios de estado, devoluções, reversões e consultas. Inclui pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 e pacs.028.

### Como diferem as mensagens pacs das mensagens SWIFT MT?

As mensagens SWIFT MT utilizam um formato plano com etiquetas de campo. As mensagens pacs utilizam XML hierárquico com estruturas de dados mais ricas, incluindo suporte para múltiplas transações por mensagem, identificação estruturada das partes e endereços postais estruturados.

### Qual é a relação entre mensagens pain e pacs?

As mensagens pain (payment initiation) viajam entre o cliente e o seu banco. As mensagens pacs viajam entre bancos. Uma iniciação de transferência pain.001 torna-se uma instrução interbancária pacs.008.

## Seleção de mensagem

### Quando devo usar pacs.008?

Use pacs.008 para instruções de transferência a crédito de clientes entre bancos. Transporta dados das partes devedor e credor, montantes, informação de remessa e detalhes de liquidação.

### Quando devo usar pacs.009 em vez de pacs.008?

Use pacs.009 para transferências em conta própria da instituição, etapas de financiamento e pagamentos de cobertura.

### Qual é a diferença entre pacs.004 e pacs.007?

pacs.004 devolve fundos liquidados do lado recetor pela cadeia. pacs.007 reverte um pagamento do lado instrutor original em diante pela cadeia.

### Quando devo usar pacs.028 em vez de esperar por pacs.002?

Use pacs.028 quando precisar de solicitar ativamente o estado de um pagamento que não recebeu uma atualização pacs.002 atempada.

### Para que serve pacs.003?

pacs.003 transporta instruções de débito direto de clientes entre bancos para cobrança de fundos.

### Para que serve pacs.010?

pacs.010 gere débitos diretos entre instituições financeiras nas suas próprias contas.

## Estrutura da mensagem

### O que é o cabeçalho de grupo (GrpHdr)?

O cabeçalho de grupo aparece exatamente uma vez por mensagem pacs. Contém o identificador da mensagem (MsgId), o timestamp de criação (CreDtTm), o número de transações (NbOfTxs) e informação de liquidação (SttlmInf).

### Quais são os identificadores de pagamento em pacs.008?

pacs.008 utiliza quatro identificadores principais: MsgId, InstrId, EndToEndId, TxId e UETR. EndToEndId e TxId não devem ser alterados por nenhum agente na cadeia.

### Que métodos de liquidação estão disponíveis?

Quatro métodos: CLRG (sistema de compensação), INDA (agente instruído), INGA (agente instrutor) e COVE (pagamento de cobertura).

### O que significam os códigos de portador de encargos?

DEBT significa que todos os encargos são suportados pelo devedor. CRED pelo credor. SHAR significa encargos partilhados. SLEV segue as regras do nível de serviço e é obrigatório para SEPA.

## CBPR+ e migração

### O que é CBPR+?

CBPR+ é o programa SWIFT para a adoção de ISO 20022 na mensageria de pagamentos transfronteiriços. Entrou em funcionamento em março de 2023.

### O que aconteceu ao período de coexistência MT/MX?

O período de coexistência terminou em novembro de 2025. Desde então, as mensagens CBPR+ devem utilizar o formato ISO 20022 (MX).

### Qual é o prazo de endereços estruturados de novembro de 2026?

A partir de novembro de 2026, SWIFT CBPR+ exige endereços postais estruturados nas mensagens de pagamento transfronteiriças. Como mínimo, TwnNm e Ctry são obrigatórios.

### Como pacs.008 substitui MT103?

pacs.008 substitui MT103 e MT103+ para transferências a crédito de clientes. O campo 20 de MT103 mapeia para MsgId ou InstrId; o campo 32A divide-se em IntrBkSttlmDt e IntrBkSttlmAmt; o campo 50a mapeia para Dbtr e DbtrAcct.

### Como pacs.009 substitui MT202?

pacs.009 substitui MT202 e MT202COV. Nos fluxos de cobertura, pacs.009 transporta a etapa de financiamento enquanto pacs.008 transporta a instrução do cliente diretamente.

## Detalhes técnicos

### O que são endereços estruturados e não estruturados?

Os endereços estruturados utilizam elementos XML separados: StrtNm, BldgNb, PstCd, TwnNm, Ctry. Os endereços não estruturados utilizam até sete elementos AdrLine com texto livre.

### O que é UETR e como funciona o rastreamento gpi?

UETR é um identificador UUID v4 gerado pelo agente do devedor e transportado inalterado em todas as etapas de um pagamento. SWIFT gpi utiliza o UETR para rastrear pagamentos.

### Quais são os códigos de estado pacs.002 comuns?

ACCP (aceite), ACSP (liquidação em curso), ACSC (liquidação concluída), RJCT (rejeitado), PDNG (pendente).

### Quais são os códigos de motivo de devolução comuns em pacs.004?

AC01 (conta incorreta), AC04 (conta encerrada), AC06 (conta bloqueada), AM04 (fundos insuficientes), BE04 (endereço do credor em falta), CUST (solicitado pelo cliente), DUPL (pagamento duplicado), FOCR (após pedido de cancelamento), FR01 (fraude).

### O que é informação de remessa estruturada?

A remessa estruturada em pacs.008 utiliza o elemento RmtInf/Strd para transportar referências de documentos, montantes e referências de credor. Permite a reconciliação automática de faturas.

### O que é LEI e quando é utilizado?

LEI (Legal Entity Identifier) é um código alfanumérico de 20 caracteres por ISO 17442. Nos mensagens pacs, aparece em OrgId/LEI para partes e FinInstnId/LEI para agentes.

## Sobre o toolkit pacs008

### O que faz pacs008?

pacs008 é um toolkit Python que gera, valida e distribui mensagens de pagamento ISO 20022.

### Que tipos de mensagem suporta pacs008?

pacs008 suporta oito tipos: pacs.002.001.12, pacs.003.001.09, pacs.004.001.11, pacs.007.001.11, pacs.008.001.13, pacs.009.001.10, pacs.010.001.05 e pacs.028.001.05.

### Como ajuda pacs008 com o prazo de endereços estruturados de 2026?

pacs008 valida os campos de endereço postal estruturado e híbrido antes da geração XML.

### pacs008 pode validar dados sem gerar XML?

Sim. Use o flag CLI `--dry-run` ou o endpoint API `POST /validate`.

## Referências

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

