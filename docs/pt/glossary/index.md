---
title: "Glossário ISO 20022 | pacs008"
description: Definições dos principais termos de ISO 20022 e mensagens de pagamento usados em pacs.008 e mensagens relacionadas.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# Glossário ISO 20022

Este glossário define os termos-chave, abreviações e conceitos técnicos usados nos mensagens pacs ISO 20022 e neste site.

## A

**ACH** — Automated Clearing House (Câmara de Compensação Automatizada). Uma rede que processa pagamentos eletrônicos em lote entre instituições financeiras.

**AdrLine** — Address Line (Linha de Endereço). Um campo de endereço em texto livre nas estruturas de endereço postal ISO 20022. Até 7 linhas de 70 caracteres cada. Sendo substituído por elementos de endereço estruturados para CBPR+ até novembro de 2026.

**ACCP** — Accepted Customer Profile (Perfil de Cliente Aceito). Código de status pacs.002 indicando que as verificações precedentes (sintaxe, perfil do cliente) foram aprovadas.

**ACSC** — Accepted Settlement Completed (Liquidação Aceita Concluída). Código de status pacs.002 confirmando que a liquidação na conta do devedor foi concluída.

**ACSP** — Accepted Settlement in Process (Liquidação Aceita em Processo). Código de status pacs.002 indicando que todas as verificações foram aprovadas e a liquidação está em andamento.

## B

**BAH** — Business Application Header (head.001). Um envelope padronizado que envolve mensagens de negócios ISO 20022 para transporte via SWIFT. Contém informações de roteamento, identificador de definição de mensagem e BICs de remetente/destinatário.

**BIC** — Business Identifier Code (ISO 9362). Um código de 8 ou 11 caracteres que identifica exclusivamente uma instituição financeira. Formato: BBBBCCLL (código do banco + país + localização) com código de agência BBB opcional.

## C

**CBPR+** — Cross-Border Payments and Reporting Plus. Programa da SWIFT para migração de mensagens de pagamento transfronteiriço de MT para ISO 20022. Entrou em operação em março de 2023.

**CdtTrfTxInf** — Credit Transfer Transaction Information (Informação de Transação de Transferência de Crédito). O principal bloco de construção em nível de transação em pacs.008, contendo detalhes de pagamento, partes, valores e informações de remessa.

**ChrgBr** — Charge Bearer (Portador de Encargos). Especifica quem paga os encargos da transação. Valores: DEBT (devedor), CRED (credor), SHAR (compartilhado), SLEV (nível de serviço, apenas SEPA).

**CLRG** — Liquidação por sistema de compensação. Método de liquidação em que os fundos transitam por um sistema de compensação como TARGET2, EURO1 ou CHIPS.

**COVE** — Liquidação por método de cobertura. Método de liquidação em que um pagamento de cobertura pacs.009 separado trata do financiamento entre correspondentes enquanto pacs.008 transporta os dados do cliente diretamente.

**CSM** — Clearing and Settlement Mechanism (Mecanismo de Compensação e Liquidação). Uma infraestrutura que processa e liquida instruções de pagamento entre instituições participantes.

## D

**Dbtr** — Debtor (Devedor). A parte que deve fundos e inicia o pagamento. Em pacs.008, o elemento Dbtr contém o nome, endereço postal, identificação e país de residência do devedor.

**DbtrAgt** — Debtor Agent (Agente do Devedor). A instituição financeira que administra a conta do devedor e envia a instrução pacs.008.

## E

**E2E ID** — End-to-End Identification (EndToEndId). Uma referência atribuída pelo originador que deve permanecer inalterada em todos os agentes na cadeia de pagamento. Usada para rastreabilidade no nível do cliente.

**EPC** — European Payments Council (Conselho Europeu de Pagamentos). O órgão que gerencia os regulamentos dos esquemas de pagamento SEPA para transferências de crédito e débitos diretos.

## F

**FI** — Financial Institution (Instituição Financeira). Um banco ou outra instituição que participa da compensação e liquidação de pagamentos.

**FIToFI** — Financial Institution to Financial Institution (Instituição Financeira para Instituição Financeira). Descreve o domínio interbancário onde operam os mensagens pacs.

## G

**gpi** — Global Payments Innovation (Inovação Global de Pagamentos). Iniciativa da SWIFT para pagamentos transfronteiriços mais rápidos e transparentes. Usa UETR para rastreamento de ponta a ponta via um Tracker baseado em nuvem.

**GrpHdr** — Group Header (Cabeçalho do Grupo). O bloco de metadados em nível de mensagem nos mensagens pacs. Contém MsgId, CreDtTm, NbOfTxs, informações de liquidação e informações de tipo de pagamento.

## H

**Endereço híbrido** — Um formato de endereço postal que combina elementos estruturados (StrtNm, TwnNm, Ctry) com elementos AdrLine não estruturados. Permitido durante o período de transição antes do prazo de endereços estruturados de novembro de 2026.

## I

**IBAN** — International Bank Account Number (ISO 13616). Um formato padronizado de número de conta usado para pagamentos transfronteiriços e domésticos. Validado usando checksum ISO 7064 Mod 97-10.

**INDA** — Instructed Agent settlement (Liquidação pelo Agente Instruído). Método de liquidação em que os fundos são liquidados nos livros do agente instruído, onde o agente devedor mantém uma conta nostro.

**INGA** — Instructing Agent settlement (Liquidação pelo Agente Instrutor). Método de liquidação em que os fundos são liquidados nos livros do agente instrutor, onde o agente instruído mantém uma conta nostro.

**InstrId** — Instruction Identification (Identificação da Instrução). Uma referência ponto a ponto entre agentes adjacentes na cadeia de pagamento. Pode mudar a cada salto.

**IntrBkSttlmAmt** — Interbank Settlement Amount (Valor de Liquidação Interbancária). O valor que é liquidado entre o agente instrutor e o agente instruído, na moeda de liquidação.

**ISO 20022** — Um padrão internacional para intercâmbio eletrônico de dados entre instituições financeiras. Define um modelo de dados comum e formatos de mensagem baseados em XML para pagamentos, títulos, financiamento comercial e outros domínios financeiros.

## L

**LEI** — Legal Entity Identifier (ISO 17442). Um código alfanumérico de 20 caracteres que identifica exclusivamente entidades legais participantes em transações financeiras. Usado em OrgId/LEI para partes e FinInstnId/LEI para agentes.

## M

**MsgId** — Message Identification (Identificação da Mensagem). Um identificador exclusivo para o envelope da mensagem, atribuído pelo agente remetente. Muda a cada salto na cadeia de pagamento.

**MT** — Message Type (Tipo de Mensagem). Formato de mensagem legado da SWIFT (ex.: MT103 para transferências de crédito de clientes, MT202 para transferências de instituições financeiras). Sendo substituído por mensagens MX ISO 20022.

**MX** — O formato de mensagem XML ISO 20022 usado pela SWIFT. As mensagens MX substituem as mensagens MT para pagamentos transfronteiriços sob o CBPR+.

## N

**NbOfTxs** — Number of Transactions (Número de Transações). Um elemento do Group Header indicando quantas transações individuais estão contidas na mensagem.

## P

**pacs** — Payments Clearing and Settlement (Compensação e Liquidação de Pagamentos). O domínio de negócios ISO 20022 que cobre mensagens de pagamento interbancárias.

**pacs.002** — Relatório de Status de Pagamento FI a FI. Reporta o status de processamento (aceito, rejeitado, pendente, liquidado) de uma instrução de pagamento anterior.

**pacs.003** — Débito Direto de Cliente FI a FI. Transporta uma instrução de débito direto de cliente entre bancos para coleta de fundos.

**pacs.004** — Devolução de Pagamento. Devolve fundos liquidados pela cadeia de pagamento quando um pagamento não pode ser aplicado.

**pacs.007** — Estorno de Pagamento FI a FI. Estorna uma instrução de pagamento do remetente original para frente pela cadeia.

**pacs.008** — Transferência de Crédito de Cliente FI a FI. A principal mensagem interbancária para transferências de crédito de clientes. Substitui MT103.

**pacs.009** — Transferência de Crédito de Instituição Financeira. Move fundos entre bancos por conta própria. Cobre financiamento, pagamentos de cobertura e gestão de liquidez. Substitui MT202/MT202COV.

**pacs.010** — Débito Direto de Instituição Financeira. Permite que um banco debite a conta própria de outro banco sob acordo bilateral.

**pacs.028** — Solicitação de Status de Pagamento FI a FI. Solicita ativamente o status de um pagamento anterior quando nenhuma atualização pacs.002 chegou.

**pain** — Payment Initiation (Iniciação de Pagamento). O domínio de negócios ISO 20022 que cobre mensagens de cliente para banco (ex.: pain.001 para iniciação de transferência de crédito).

**PII** — Personally Identifiable Information (Informações de Identificação Pessoal). Dados que podem identificar um indivíduo. pacs008 mascara PII em logs estruturados.

**PstlAdr** — Postal Address (Endereço Postal). A estrutura de endereço usada para partes em mensagens pacs. Suporta formatos estruturados (StrtNm, TwnNm, Ctry) e não estruturados (AdrLine).

## R

**RJCT** — Rejected (Rejeitado). Código de status pacs.002 indicando que o pagamento foi rejeitado.

**RmtInf** — Remittance Information (Informação de Remessa). Dados de referência de pagamento transportados em pacs.008. Suporta formatos não estruturados (texto livre, máx 140 caracteres) e estruturados (referências de documentos, valores, referências do credor).

**RTGS** — Real-Time Gross Settlement (Liquidação Bruta em Tempo Real). Um sistema de pagamento onde as transações são liquidadas individualmente e em tempo real (ex.: TARGET2, Fedwire, CHAPS).

## S

**SCT** — SEPA Credit Transfer. O esquema de transferência de crédito em euros gerenciado pelo EPC, usando pacs.008.

**SCT Inst** — SEPA Instant Credit Transfer. A variante de pagamento instantâneo do SCT, liquidando em menos de 10 segundos.

**SDD** — SEPA Direct Debit. O esquema de débito direto em euros gerenciado pelo EPC, usando pacs.003.

**SEPA** — Single Euro Payments Area (Área Única de Pagamentos em Euros). Uma iniciativa de integração de pagamentos cobrindo transferências de crédito, débitos diretos e pagamentos com cartão em euros em 36 países europeus.

**SLEV** — Service Level (Nível de Serviço). Um código de portador de encargos obrigatório para SEPA. Significa que os encargos seguem as regras do esquema sem deduções do valor da transferência.

**STP** — Straight-Through Processing (Processamento Direto). Processamento automatizado de pagamentos de ponta a ponta sem intervenção manual.

**SttlmMtd** — Settlement Method (Método de Liquidação). Define como a liquidação interbancária ocorre: CLRG (sistema de compensação), INDA (agente instruído), INGA (agente instrutor) ou COVE (pagamento de cobertura).

## T

**TxId** — Transaction Identification (Identificação da Transação). Uma referência interbancária atribuída pelo primeiro agente instrutor. Não deve ser alterada por agentes subsequentes.

## U

**UETR** — Unique End-to-End Transaction Reference (Referência Única de Transação de Ponta a Ponta). Um identificador UUID v4 gerado pelo agente devedor e transportado inalterado em todas as etapas de um pagamento para rastreamento gpi.

## X

**XSD** — XML Schema Definition (Definição de Esquema XML). O esquema formal que define a estrutura, elementos e tipos de dados de uma mensagem XML ISO 20022.

**XXE** — XML External Entity (Entidade Externa XML). Uma vulnerabilidade de segurança na análise de XML. pacs008 previne ataques XXE usando defusedxml.

## Referências

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)
