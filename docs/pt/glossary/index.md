---
title: "ISO 20022 glossary | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# ISO 20022 glossary

This glossary defines the key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Câmara de compensação automatizada. Uma rede que processa pagamentos eletrónicos agrupados entre instituições financeiras.

**AdrLine** — Linha de endereço. Um campo de endereço em texto livre nas estruturas de endereço postal ISO 20022. Até 7 linhas de 70 caracteres cada.

**ACCP** — Perfil de cliente aceite. Um código de estado pacs.002 que indica que as verificações anteriores foram aprovadas.

**ACSC** — Liquidação aceite concluída. Um código de estado pacs.002 que confirma que a liquidação na conta do devedor foi concluída.

**ACSP** — Liquidação aceite em curso. Um código de estado pacs.002 que indica que todas as verificações foram aprovadas e a liquidação está em curso.

## B

**BAH** — Cabeçalho de aplicação empresarial (head.001). Um envelope padronizado que envolve as mensagens empresariais ISO 20022 para transporte via SWIFT.

**BIC** — Código de identificação empresarial (ISO 9362). Um código de 8 ou 11 caracteres que identifica de forma única uma instituição financeira.

## C

**CBPR+** — Pagamentos e relatórios transfronteiriços Plus. O programa SWIFT para a migração da mensageria de pagamentos transfronteiriços de MT para ISO 20022.

**CdtTrfTxInf** — Informação de transação de transferência a crédito. O principal bloco de construção ao nível da transação em pacs.008.

**ChrgBr** — Portador de encargos. Especifica quem paga os encargos da transação. Valores: DEBT, CRED, SHAR, SLEV.

**CLRG** — Liquidação por sistema de compensação. Os fundos transitam por um sistema de compensação como TARGET2, EURO1 ou CHIPS.

**COVE** — Liquidação por método de cobertura. Um pagamento de cobertura pacs.009 separado gere o financiamento entre correspondentes.

**CSM** — Mecanismo de compensação e liquidação. Uma infraestrutura que processa e liquida instruções de pagamento.

## D–N

**Dbtr** — Devedor. A parte que deve fundos e inicia o pagamento.

**DbtrAgt** — Agente do devedor. A instituição financeira que gere a conta do devedor.

**E2E ID** — Identificação ponta a ponta (EndToEndId). Uma referência que deve permanecer inalterada através de todos os agentes na cadeia de pagamento.

**EPC** — Conselho Europeu de Pagamentos. O organismo que gere os regulamentos dos esquemas de pagamento SEPA.

**FI** — Instituição financeira. Um banco ou outra instituição que participa na compensação e liquidação de pagamentos.

**FIToFI** — De instituição financeira para instituição financeira. Descreve o domínio interbancário onde operam as mensagens pacs.

**gpi** — Inovação global de pagamentos. A iniciativa SWIFT para pagamentos transfronteiriços mais rápidos e transparentes.

**GrpHdr** — Cabeçalho de grupo. O bloco de metadados ao nível da mensagem nas mensagens pacs.

**Hybrid address** — Um formato de endereço postal que combina elementos estruturados com elementos não estruturados AdrLine.

**IBAN** — Número de conta bancária internacional (ISO 13616). Validado utilizando a soma de verificação ISO 7064 Mod 97-10.

**INDA** — Liquidação pelo agente instruído. Os fundos liquidam-se nos livros do agente instruído.

**INGA** — Liquidação pelo agente instrutor. Os fundos liquidam-se nos livros do agente instrutor.

**InstrId** — Identificação da instrução. Uma referência ponto a ponto entre agentes adjacentes.

**IntrBkSttlmAmt** — Montante de liquidação interbancária.

**ISO 20022** — Uma norma internacional para o intercâmbio eletrónico de dados entre instituições financeiras.

**LEI** — Identificador de entidade jurídica (ISO 17442). Um código alfanumérico de 20 caracteres.

**MsgId** — Identificação da mensagem. Um identificador único para o envelope da mensagem.

**MT** — Tipo de mensagem. O formato de mensagem legado do SWIFT. Em processo de substituição por mensagens MX ISO 20022.

**MX** — O formato de mensagem XML ISO 20022 utilizado pelo SWIFT.

**NbOfTxs** — Número de transações. Indica quantas transações individuais estão contidas na mensagem.

## P

**pacs** — Compensação e liquidação de pagamentos. O domínio empresarial ISO 20022 para as mensagens de pagamento interbancárias.

**pacs.002** — Relatório de estado de pagamento FI a FI.

**pacs.003** — Débito direto de cliente FI a FI.

**pacs.004** — Devolução de pagamento.

**pacs.007** — Reversão de pagamento FI a FI.

**pacs.008** — Transferência a crédito de cliente FI a FI. Substitui MT103.

**pacs.009** — Transferência a crédito de instituição financeira. Substitui MT202/MT202COV.

**pacs.010** — Débito direto de instituição financeira.

**pacs.028** — Pedido de estado de pagamento FI a FI.

**pain** — Iniciação de pagamento. O domínio empresarial ISO 20022 para as mensagens de cliente para banco.

**PII** — Informação de identificação pessoal. pacs008 mascara os PII nos registos estruturados.

**PstlAdr** — Endereço postal. Suporta formatos estruturados e não estruturados.

## R–U

**RJCT** — Rejeitado. Um código de estado pacs.002 que indica que o pagamento foi rejeitado.

**RmtInf** — Informação de remessa. Dados de referência de pagamento transportados em pacs.008.

**RTGS** — Liquidação bruta em tempo real. Transações liquidam-se individualmente e em tempo real.

**SCT** — Transferência a crédito SEPA. O esquema de transferência a crédito em euros gerido pelo EPC.

**SCT Inst** — Transferência a crédito instantânea SEPA. Liquidada em menos de 10 segundos.

**SDD** — Débito direto SEPA. O esquema de débito direto em euros gerido pelo EPC.

**SEPA** — Espaço Único de Pagamentos em Euros. Uma iniciativa de integração de pagamentos em 36 países europeus.

**SLEV** — Nível de serviço. Obrigatório para SEPA. Os encargos seguem as regras do esquema.

**STP** — Processamento direto automatizado. Processamento automatizado de pagamentos ponta a ponta.

**SttlmMtd** — Método de liquidação. Define como ocorre a liquidação interbancária: CLRG, INDA, INGA ou COVE.

**TxId** — Identificação da transação. Uma referência interbancária atribuída pelo primeiro agente instrutor.

**UETR** — Referência única de transação ponta a ponta. Um identificador UUID v4 para rastreamento gpi.

## X

**XSD** — Definição de esquema XML. O esquema formal que define a estrutura de uma mensagem XML ISO 20022.

**XXE** — Entidade externa XML. Uma vulnerabilidade de segurança na análise XML. pacs008 previne ataques XXE utilizando defusedxml.

## Referências

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

