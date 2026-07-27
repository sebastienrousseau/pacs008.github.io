---
title: "Glossário ISO 20022 | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages. Covers SWIFT, CBPR+, IBAN, BIC, settlement methods, and...
lang: pt-BR
lastUpdated: true
image: /logo.webp
---

# Glossário ISO 20022

Key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Câmara de compensação automatizada. Uma rede que processa pagamentos eletrónicos agrupados entre instituições financeiras.

**AdrLine** — Linha de endereço. Um campo de endereço em texto livre nas estruturas de endereço postal ISO 20022. Até 7 linhas de 70 caracteres cada. Em processo de substituição por elementos de endereço estruturados para CBPR+ até novembro de 2026.

**ACCP** — Perfil de cliente aceite. Um código de estado pacs.002 que indica que as verificações anteriores (sintaxe, perfil do cliente) foram aprovadas.

**ACSC** — Liquidação aceite concluída. Um código de estado pacs.002 que confirma que a liquidação na conta do devedor foi concluída.

**ACSP** — Liquidação aceite em curso. Um código de estado pacs.002 que indica que todas as verificações foram aprovadas e a liquidação está em curso.

## B

**BAH** — Cabeçalho de aplicação empresarial (head.001). Um envelope padronizado que envolve as mensagens empresariais ISO 20022 para transporte via SWIFT. Contém informações de encaminhamento, identificador da definição da mensagem e BICs do remetente/destinatário.

**BIC** — Código de identificação empresarial (ISO 9362). Um código de 8 ou 11 caracteres que identifica de forma única uma instituição financeira. Formato: BBBBCCLL (código do banco + país + localização) com código de agência BBB opcional.

## C

**CBPR+** — Pagamentos e relatórios transfronteiriços Plus. O programa SWIFT para a migração da mensageria de pagamentos transfronteiriços de MT para ISO 20022. Entrou em funcionamento em março de 2023.

**CdtTrfTxInf** — Informação de transação de transferência a crédito. O principal bloco de construção ao nível da transação em pacs.008, contendo detalhes do pagamento, partes, montantes e informação de remessa.

**ChrgBr** — Portador de encargos. Especifica quem paga os encargos da transação. Valores: DEBT (devedor), CRED (credor), SHAR (partilhado), SLEV (nível de serviço, apenas SEPA).

**CLRG** — Liquidação por sistema de compensação. Um método de liquidação em que os fundos transitam por um sistema de compensação como TARGET2, EURO1 ou CHIPS.

**COVE** — Liquidação por método de cobertura. Um método de liquidação em que um pagamento de cobertura pacs.009 separado gere o financiamento entre correspondentes enquanto pacs.008 transporta os dados do cliente diretamente.

**CSM** — Mecanismo de compensação e liquidação. Uma infraestrutura que processa e liquida instruções de pagamento entre as instituições participantes.

## D

**Dbtr** — Devedor. A parte que deve fundos e inicia o pagamento. Em pacs.008, o elemento Dbtr contém o nome do devedor, endereço postal, identificação e país de residência.

**DbtrAgt** — Agente do devedor. A instituição financeira que gere a conta do devedor e envia a instrução pacs.008.

## E

**E2E ID** — Identificação ponta a ponta (EndToEndId). Uma referência atribuída pelo originador que deve permanecer inalterada através de todos os agentes na cadeia de pagamento. Utilizada para rastreabilidade ao nível do cliente.

**EPC** — Conselho Europeu de Pagamentos. O organismo que gere os regulamentos dos esquemas de pagamento SEPA para transferências a crédito e débitos diretos.

## F

**FI** — Instituição financeira. Um banco ou outra instituição que participa na compensação e liquidação de pagamentos.

**FIToFI** — De instituição financeira para instituição financeira. Descreve o domínio interbancário onde operam as mensagens pacs.

## G

**gpi** — Inovação global de pagamentos. A iniciativa SWIFT para pagamentos transfronteiriços mais rápidos e transparentes. Utiliza o UETR para rastreamento ponta a ponta através de um Tracker baseado na nuvem.

**GrpHdr** — Cabeçalho de grupo. O bloco de metadados ao nível da mensagem nas mensagens pacs. Contém MsgId, CreDtTm, NbOfTxs, informação de liquidação e informação do tipo de pagamento.

## H

**Hybrid address** — Um formato de endereço postal que combina elementos estruturados (StrtNm, TwnNm, Ctry) com elementos não estruturados AdrLine. Permitido durante o período de transição antes do prazo de endereço estruturado de novembro de 2026.

## I

**IBAN** — Número de conta bancária internacional (ISO 13616). Um formato de número de conta padronizado utilizado para pagamentos transfronteiriços e nacionais. Validado utilizando a soma de verificação ISO 7064 Mod 97-10.

**INDA** — Liquidação pelo agente instruído. Um método de liquidação em que os fundos se liquidam nos livros do agente instruído, onde o agente do devedor detém uma conta nostro.

**INGA** — Liquidação pelo agente instrutor. Um método de liquidação em que os fundos se liquidam nos livros do agente instrutor, onde o agente instruído detém uma conta nostro.

**InstrId** — Identificação da instrução. Uma referência ponto a ponto entre agentes adjacentes na cadeia de pagamento. Pode mudar a cada passagem.

**IntrBkSttlmAmt** — Montante de liquidação interbancária. O montante que se liquida entre o agente instrutor e o agente instruído, na moeda de liquidação.

**ISO 20022** — Uma norma internacional para o intercâmbio eletrónico de dados entre instituições financeiras. Define um modelo de dados comum e formatos de mensagens baseados em XML para pagamentos, títulos, financiamento comercial e outros domínios financeiros.

## L

**LEI** — Identificador de entidade jurídica (ISO 17442). Um código alfanumérico de 20 caracteres que identifica de forma única as entidades jurídicas participantes em transações financeiras. Utilizado em OrgId/LEI para as partes e FinInstnId/LEI para os agentes.

## M

**MsgId** — Identificação da mensagem. Um identificador único para o envelope da mensagem, atribuído pelo agente remetente. Muda a cada passagem na cadeia de pagamento.

**MT** — Tipo de mensagem. O formato de mensagem legado do SWIFT (ex., MT103 para transferências a crédito de clientes, MT202 para transferências entre instituições financeiras). Em processo de substituição por mensagens MX ISO 20022.

**MX** — O formato de mensagem XML ISO 20022 utilizado pelo SWIFT. As mensagens MX substituem as mensagens MT para pagamentos transfronteiriços sob CBPR+.

## N

**NbOfTxs** — Número de transações. Um elemento do cabeçalho de grupo que indica quantas transações individuais estão contidas na mensagem.

## P

**pacs** — Compensação e liquidação de pagamentos. O domínio empresarial ISO 20022 que abrange as mensagens de pagamento interbancárias.

**pacs.002** — Relatório de estado de pagamento FI a FI. Reporta o estado de processamento (aceite, rejeitado, pendente, liquidado) de uma instrução de pagamento anterior.

**pacs.003** — Débito direto de cliente FI a FI. Transporta uma instrução de débito direto de cliente entre bancos para cobrança de fundos.

**pacs.004** — Devolução de pagamento. Devolve os fundos liquidados através da cadeia de pagamento quando um pagamento não pode ser aplicado.

**pacs.007** — Reversão de pagamento FI a FI. Reverte uma instrução de pagamento do remetente original através da cadeia.

**pacs.008** — Transferência a crédito de cliente FI a FI. A principal mensagem interbancária para transferências a crédito de clientes. Substitui MT103.

**pacs.009** — Transferência a crédito de instituição financeira. Move fundos entre bancos por conta própria. Cobre financiamento, pagamentos de cobertura e gestão de liquidez. Substitui MT202/MT202COV.

**pacs.010** — Débito direto de instituição financeira. Permite que um banco debite a conta própria de outro banco ao abrigo de um acordo bilateral.

**pacs.028** — Pedido de estado de pagamento FI a FI. Solicita ativamente o estado de um pagamento anterior quando nenhuma atualização pacs.002 foi recebida.

**pain** — Iniciação de pagamento. O domínio empresarial ISO 20022 que abrange as mensagens de cliente para banco (ex., pain.001 para iniciação de transferência a crédito).

**PII** — Informação de identificação pessoal. Dados que podem identificar um indivíduo. pacs008 mascara os PII nos registos estruturados.

**PstlAdr** — Endereço postal. A estrutura de endereço utilizada para as partes nas mensagens pacs. Suporta formatos estruturados (StrtNm, TwnNm, Ctry) e não estruturados (AdrLine).

## R

**RJCT** — Rejeitado. Um código de estado pacs.002 que indica que o pagamento foi rejeitado.

**RmtInf** — Informação de remessa. Dados de referência de pagamento transportados em pacs.008. Suporta formatos não estruturados (texto livre, máx. 140 caracteres) e estruturados (referências de documentos, montantes, referências do credor).

**RTGS** — Liquidação bruta em tempo real. Um sistema de pagamento em que as transações se liquidam individualmente e em tempo real (ex., TARGET2, Fedwire, CHAPS).

## S

**SCT** — Transferência a crédito SEPA. O esquema de transferência a crédito em euros gerido pelo EPC, utilizando pacs.008.

**SCT Inst** — Transferência a crédito instantânea SEPA. A variante de pagamento instantâneo do SCT, liquidada em menos de 10 segundos.

**SDD** — Débito direto SEPA. O esquema de débito direto em euros gerido pelo EPC, utilizando pacs.003.

**SEPA** — Espaço Único de Pagamentos em Euros. Uma iniciativa de integração de pagamentos que abrange transferências a crédito, débitos diretos e pagamentos por cartão em euros em 36 países europeus.

**SLEV** — Nível de serviço. Um código de portador de encargos obrigatório para SEPA. Significa que os encargos seguem as regras do esquema sem deduções do montante da transferência.

**STP** — Processamento direto automatizado. Processamento automatizado de pagamentos ponta a ponta sem intervenção manual.

**SttlmMtd** — Método de liquidação. Define como ocorre a liquidação interbancária: CLRG (sistema de compensação), INDA (agente instruído), INGA (agente instrutor) ou COVE (pagamento de cobertura).

## T

**TxId** — Identificação da transação. Uma referência interbancária atribuída pelo primeiro agente instrutor. Não deve ser alterada pelos agentes subsequentes.

## U

**UETR** — Referência única de transação ponta a ponta. Um identificador UUID v4 gerado pelo agente do devedor e transportado inalterado através de todas as etapas de um pagamento para rastreamento gpi.

## X

**XSD** — Definição de esquema XML. O esquema formal que define a estrutura, os elementos e os tipos de dados de uma mensagem XML ISO 20022.

**XXE** — Entidade externa XML. Uma vulnerabilidade de segurança na análise XML. pacs008 previne ataques XXE utilizando defusedxml.

## Referências

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

