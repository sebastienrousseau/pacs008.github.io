---
title: "Perguntas frequentes sobre ISO 20022 | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: pt-BR
lastUpdated: true
image: /logo.webp
---

# Perguntas frequentes sobre ISO 20022

Common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## Geral

### O que é ISO 20022?

ISO 20022 é uma norma internacional para mensagens financeiras. Define uma linguagem e modelo comuns para mensagens de pagamento trocadas entre instituições financeiras. Ao contrário de formatos antigos como SWIFT MT, ISO 20022 utiliza XML e suporta dados mais ricos e estruturados para partes, montantes e referências.

### O que são mensagens pacs?

A família de mensagens pacs (payments clearing and settlement) cobre instruções de pagamento interbancárias, relatórios de estado, devoluções, reversões e consultas. Inclui pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 e pacs.028. Cada mensagem desempenha um papel específico no ciclo de vida do pagamento.

### Como diferem as mensagens pacs das mensagens SWIFT MT?

As mensagens SWIFT MT utilizam um formato plano com etiquetas de campo (por exemplo, MT103 para transferências a crédito de clientes). As mensagens pacs utilizam XML hierárquico com estruturas de dados mais ricas. As diferenças principais incluem suporte para múltiplas transações por mensagem, identificação estruturada das partes (LEI, múltiplos identificadores), endereços postais estruturados e informação de remessa estruturada. MT103 mapeia para pacs.008, MT202 mapeia para pacs.009, e o texto de estado MT199 é substituído por pacs.002.

### Qual é a relação entre mensagens pain e pacs?

As mensagens pain (payment initiation) viajam entre o cliente e o seu banco. As mensagens pacs viajam entre bancos. Uma iniciação de transferência a crédito pain.001 do banco do devedor torna-se uma instrução interbancária pacs.008. Os dois domínios partilham elementos de dados comuns, mas servem partes diferentes da cadeia de pagamento.

## Seleção de mensagem

### Quando devo usar pacs.008?

Use pacs.008 para instruções de transferência a crédito de clientes entre bancos. Transporta dados das partes devedor e credor, montantes, informação de remessa e detalhes de liquidação. É a mensagem principal para o envio de pagamentos de clientes na rede interbancária, tanto a nível doméstico (SEPA) como transfronteiriço (CBPR+).

### Quando devo usar pacs.009 em vez de pacs.008?

Use pacs.009 para transferências em conta própria da instituição, etapas de financiamento e pagamentos de cobertura. Ao contrário de pacs.008, que transporta um pagamento de cliente em nome de um devedor, pacs.009 movimenta fundos entre bancos em nome próprio. Nos fluxos de cobertura, pacs.009 assegura o financiamento enquanto pacs.008 transporta a instrução do cliente num caminho separado.

### Qual é a diferença entre pacs.004 e pacs.007?

pacs.004 devolve fundos liquidados do lado recetor pela cadeia. pacs.007 reverte um pagamento do lado instrutor original em diante pela cadeia. Use pacs.004 quando o banco beneficiário não consegue aplicar o crédito após a liquidação. Use pacs.007 quando o emissor descobre um erro, duplicação ou fraude.

### Quando devo usar pacs.028 em vez de esperar por pacs.002?

Use pacs.028 quando precisar de solicitar ativamente o estado de um pagamento que não recebeu uma atualização pacs.002 atempada. pacs.002 é orientado por eventos (o agente recetor envia-o proativamente), enquanto pacs.028 é orientado por exceções (o agente instrutor solicita-o). Use pacs.028 para atualizações de pagamento atrasadas, pouco claras ou em falta, não como tráfego de rotina.

### Para que serve pacs.003?

pacs.003 transporta instruções de débito direto de clientes entre bancos. O agente do credor envia-o ao agente do devedor para cobrança de fundos. Requer uma referência de mandato válida e suporta os esquemas de débito direto SEPA Core e B2B. Não é utilizado para transferências a crédito nem para débitos diretos em conta própria entre instituições.

### Para que serve pacs.010?

pacs.010 gere débitos diretos entre instituições financeiras nas suas próprias contas. É utilizado para cobranças entre bancos, como taxas, chamadas de margem e obrigações similares ao abrigo de acordos bilaterais. Não é utilizado para débitos diretos de clientes nem para transferências a crédito.

## Estrutura da mensagem

### O que é o cabeçalho de grupo (GrpHdr)?

O cabeçalho de grupo aparece exatamente uma vez por mensagem pacs. Contém o identificador da mensagem (MsgId), o timestamp de criação (CreDtTm), o número de transações (NbOfTxs), informação de liquidação (SttlmInf), e opcionalmente o montante total de liquidação interbancária e informação sobre o tipo de pagamento. Identifica o envelope da mensagem, não as transações comerciais individuais.

### Quais são os identificadores de pagamento em pacs.008?

pacs.008 utiliza quatro identificadores principais. MsgId identifica o envelope da mensagem e muda a cada salto. InstrId é uma referência ponto a ponto entre agentes adjacentes e pode mudar a cada salto. EndToEndId é definido pelo emissor e não deve ser alterado por nenhum agente na cadeia. TxId é atribuído pelo primeiro agente instrutor e permanece constante no espaço interbancário. UETR é um UUID que permanece inalterado em todas as etapas para rastreamento de ponta a ponta.

### Que métodos de liquidação estão disponíveis?

Quatro métodos de liquidação estão definidos. CLRG liquida através de um sistema de compensação como TARGET2, EURO1 ou CHIPS. INDA liquida nos livros do agente instruído onde o agente do devedor detém uma conta. INGA liquida nos livros do agente instrutor onde o agente instruído detém uma conta. COVE liquida através de um pagamento de cobertura separado transportado por pacs.009.

### O que significam os códigos de portador de encargos?

DEBT significa que todos os encargos são suportados pelo devedor (equivalente a MT103 OUR). CRED significa que todos os encargos são suportados pelo credor (equivalente a BEN). SHAR significa que os encargos são partilhados entre os agentes devedor e credor (equivalente a SHA). SLEV significa que os encargos seguem as regras do nível de serviço e é obrigatório para transferências a crédito SEPA.

## CBPR+ e migração

### O que é CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) é o programa SWIFT para a adoção de ISO 20022 na mensageria de pagamentos transfronteiriços. Entrou em funcionamento em março de 2023 e substitui mensagens MT pelos equivalentes pacs. CBPR+ impõe pacs.002 para toda a comunicação de estado, suporta dados de partes mais ricos e endereços estruturados, e utiliza rastreamento baseado em UETR através de gpi.

### O que aconteceu ao período de coexistência MT/MX?

O período de coexistência para instruções de pagamento transfronteiriças terminou em novembro de 2025. Desde então, as mensagens CBPR+ devem utilizar o formato ISO 20022 (MX). Os serviços de tradução que convertiam entre MT e MX durante a transição deixaram de estar disponíveis para novos fluxos. Os bancos devem agora enviar e receber mensagens pacs nativas.

### Qual é o prazo de endereços estruturados de novembro de 2026?

A partir de novembro de 2026, SWIFT CBPR+ exige endereços postais estruturados nas mensagens de pagamento transfronteiriças. As linhas de endereço não estruturadas (apenas AdrLine) deixarão de ser aceites para campos de partes chave. No mínimo, TwnNm e Ctry são obrigatórios, com StrtNm e BldgNb ou PstBx recomendados. Isto melhora o rastreio de sanções e reduz a reparação manual.

### Como pacs.008 substitui MT103?

pacs.008 substitui MT103 e MT103+ para transferências a crédito de clientes. Mapeamento principal: o campo 20 de MT103 mapeia para MsgId ou InstrId; o campo 32A divide-se em IntrBkSttlmDt e IntrBkSttlmAmt; o campo 50a mapeia para Dbtr e DbtrAcct; o campo 59a mapeia para Cdtr e CdtrAcct; o campo 70 mapeia para RmtInf; o campo 71A mapeia para ChrgBr. pacs.008 acrescenta UETR, remessa estruturada, identificação LEI, e suporta múltiplas transações por mensagem.

### Como pacs.009 substitui MT202?

pacs.009 substitui MT202 e MT202COV para transferências entre instituições. Nos fluxos de cobertura, o MT202COV (que transportava tanto o financiamento como os dados subjacentes do cliente) divide-se de forma limpa: pacs.009 transporta a etapa de financiamento enquanto pacs.008 transporta a instrução do cliente diretamente. Esta separação melhora a qualidade dos dados e reduz problemas de reconciliação.

## Detalhes técnicos

### O que são endereços estruturados e não estruturados?

Os endereços estruturados utilizam elementos XML separados para cada componente: StrtNm (rua), BldgNb (número do edifício), PstCd (código postal), TwnNm (cidade), Ctry (país), e elementos opcionais como Flr, Room e DstrctNm. Os endereços não estruturados utilizam até sete elementos AdrLine com texto livre. Os endereços híbridos combinam ambos durante o período de transição. Após novembro de 2026, CBPR+ exige o formato estruturado.

### O que é UETR e como funciona o rastreamento gpi?

UETR (Unique End-to-End Transaction Reference) é um identificador UUID v4 gerado pelo agente do devedor e transportado inalterado em todas as etapas de um pagamento. Aparece em pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 e pacs.028. SWIFT gpi utiliza o UETR para rastrear pagamentos através de uma base de dados Tracker na cloud. Cada agente confirma a receção e o processamento, permitindo visibilidade de ponta a ponta e monitorização de SLA.

### Quais são os códigos de estado pacs.002 comuns?

ACCP significa aceite após verificações de perfil do cliente. ACSP significa aceite e a liquidação está em curso. ACSC significa que a liquidação na conta do devedor está concluída. RJCT significa rejeitado (com um código de motivo em StsRsnInf). PDNG significa pendente de processamento ulterior. RCVD significa recebido mas ainda não processado. Cada estado pode incluir um código de motivo estruturado como AC01 (número de conta incorreto), AM04 (fundos insuficientes) ou RC01 (BIC incorreto).

### Quais são os códigos de motivo de devolução comuns em pacs.004?

Os códigos de motivo de devolução frequentes incluem AC01 (número de conta incorreto), AC04 (conta encerrada), AC06 (conta bloqueada), AM04 (fundos insuficientes), BE04 (endereço do credor em falta), CUST (solicitado pelo cliente), DUPL (pagamento duplicado), FOCR (após pedido de cancelamento) e FR01 (fraude). A lista completa está definida nos External Code Sets de ISO 20022.

### O que é informação de remessa estruturada?

A remessa estruturada em pacs.008 utiliza o elemento RmtInf/Strd para transportar referências de documentos (números de fatura, notas de crédito), montantes (devido, remetido, imposto, desconto) e referências de credor (referências RF ISO 11649). Permite a correspondência automatizada de faturas e a reconciliação. Os códigos de tipo de documento comuns incluem CINV (fatura comercial), CREN (nota de crédito) e SOAC (extrato de conta).

### O que é LEI e quando é utilizado?

LEI (Legal Entity Identifier) é um código alfanumérico de 20 caracteres conforme ISO 17442. Identifica de forma única as entidades jurídicas que participam em transações financeiras. Nas mensagens pacs, LEI aparece em OrgId/LEI para partes e FinInstnId/LEI para agentes. CBPR+ encoraja cada vez mais o LEI para identificação de partes e agentes. Melhora a desambiguação de entidades e apoia os requisitos de reporte regulamentar.

## Sobre o toolkit pacs008

### O que faz pacs008?

pacs008 é um toolkit Python que gera, valida e distribui mensagens de pagamento ISO 20022. Lê dados de pagamento a partir de fontes CSV, JSON, JSONL, SQLite e Parquet, valida contra JSON Schema e XSD, verifica identificadores IBAN e BIC, limpa dados para conformidade com caracteres SWIFT, e produz ficheiros XML. Disponibiliza uma API REST, um CLI e uma biblioteca Python.

### Que tipos de mensagem suporta pacs008?

pacs008 suporta oito tipos de mensagem: pacs.002.001.12 (relatório de estado), pacs.003.001.09 (débito direto de clientes), pacs.004.001.11 (devolução de pagamento), pacs.007.001.11 (reversão de pagamento), pacs.008.001.13 (transferência a crédito de clientes), pacs.009.001.10 (transferência a crédito entre instituições financeiras), pacs.010.001.05 (débito direto entre instituições financeiras) e pacs.028.001.05 (pedido de estado de pagamento).

### Como ajuda pacs008 com o prazo de endereços estruturados de 2026?

pacs008 valida os campos de endereço postal estruturado e híbrido antes da geração XML. Sinaliza dados de endereço não estruturados que falhariam após o prazo de novembro de 2026, suporta formatos híbridos antes do prazo e formatos exclusivamente estruturados após o prazo, e integra verificações de qualidade de endereço em pipelines CI e fluxos de validação em lote.

### pacs008 pode validar dados sem gerar XML?

Sim. Use o flag CLI `--dry-run` ou o endpoint API `POST /validate` para validar dados de pagamento sem gerar XML. O pipeline de validação verifica conformidade com JSON Schema, formato e checksum IBAN, estrutura BIC e conformidade com caracteres SWIFT. O código de saída ou a resposta da API indica se a validação foi bem-sucedida ou falhou.

## Referências

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

