---
title: "Perguntas frequentes | pacs008"
description: Perguntas comuns sobre mensagens pacs ISO 20022, migração CBPR+, seleção de mensagens, implementação e o toolkit pacs008.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# Perguntas frequentes

Esta página responde perguntas comuns sobre mensagens pacs ISO 20022, como elas funcionam juntas e como o pacs008 ajuda equipes a implementá-las.

## Geral

### O que é ISO 20022?

ISO 20022 é um padrão internacional para mensagens financeiras. Define uma linguagem e modelo comuns para mensagens de pagamento trocadas entre instituições financeiras. Ao contrário de formatos mais antigos como SWIFT MT, ISO 20022 usa XML e suporta dados mais ricos e estruturados para partes, valores e referências.

### O que são mensagens pacs?

A família de mensagens pacs (payments clearing and settlement) cobre instruções de pagamento interbancário, relatórios de status, devoluções, estornos e consultas. Inclui pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 e pacs.028. Cada mensagem desempenha um papel específico no ciclo de vida do pagamento.

### Como as mensagens pacs diferem das mensagens SWIFT MT?

As mensagens SWIFT MT usam um formato plano com tags de campo (ex.: MT103 para transferências de crédito de clientes). As mensagens pacs usam XML hierárquico com estruturas de dados mais ricas. As principais diferenças incluem suporte para múltiplas transações por mensagem, identificação estruturada de partes (LEI, múltiplos IDs), endereços postais estruturados e informações de remessa estruturadas. MT103 corresponde a pacs.008, MT202 a pacs.009 e o texto de status MT199 é substituído por pacs.002.

### Qual é a relação entre mensagens pain e pacs?

As mensagens pain (payment initiation) trafegam entre o cliente e seu banco. As mensagens pacs trafegam entre bancos. Uma iniciação de transferência de crédito pain.001 do banco do devedor torna-se uma instrução interbancária pacs.008. Os dois domínios compartilham elementos de dados comuns, mas atendem diferentes partes da cadeia de pagamento.

## Seleção de mensagens

### Quando devo usar pacs.008?

Use pacs.008 para instruções de transferência de crédito de clientes entre bancos. Ele transporta dados das partes devedora e credora, valores, informações de remessa e detalhes de liquidação. É a mensagem principal para enviar pagamentos de clientes pela rede interbancária, seja domesticamente (SEPA) ou internacionalmente (CBPR+).

### Quando devo usar pacs.009 em vez de pacs.008?

Use pacs.009 para transferências de conta própria da instituição, etapas de financiamento e pagamentos de cobertura. Ao contrário de pacs.008, que transporta um pagamento de cliente em nome de um devedor, pacs.009 movimenta fundos entre bancos por conta própria. Em fluxos de método de cobertura, pacs.009 transporta o financiamento enquanto pacs.008 transporta a instrução do cliente em um caminho separado.

### Qual é a diferença entre pacs.004 e pacs.007?

pacs.004 devolve fundos liquidados do lado receptor de volta pela cadeia. pacs.007 estorna um pagamento do lado instrutor original para frente pela cadeia. Use pacs.004 quando o banco beneficiário não puder aplicar o crédito após a liquidação. Use pacs.007 quando o originador descobrir um erro, duplicidade ou fraude.

### Quando devo usar pacs.028 em vez de esperar por pacs.002?

Use pacs.028 quando precisar solicitar ativamente o status de um pagamento que não recebeu uma atualização pacs.002 oportuna. pacs.002 é orientado por eventos (o agente receptor o envia proativamente), enquanto pacs.028 é orientado por exceções (o agente instrutor o solicita). Use pacs.028 para atualizações de pagamento atrasadas, incertas ou ausentes, não como tráfego de rotina.

### Para que serve pacs.003?

pacs.003 transporta instruções de débito direto de clientes entre bancos. O agente do credor o envia ao agente do devedor para cobrar fundos. Requer uma referência de mandato válida e suporta esquemas de débito direto SEPA Core e B2B. Não é usado para transferências de crédito ou débitos de conta própria da instituição.

### Para que serve pacs.010?

pacs.010 trata de débitos diretos entre instituições financeiras em suas próprias contas. É usado para cobranças entre bancos como taxas, chamadas de margem e obrigações similares sob acordos bilaterais. Não é usado para débitos diretos de clientes ou transferências de crédito.

## Estrutura da mensagem

### O que é o Group Header (GrpHdr)?

O Group Header aparece exatamente uma vez por mensagem pacs. Contém o identificador da mensagem (MsgId), timestamp de criação (CreDtTm), número de transações (NbOfTxs), informações de liquidação (SttlmInf) e opcionalmente o valor total de liquidação interbancária e informações do tipo de pagamento. Identifica o envelope da mensagem, não as transações comerciais individuais.

### Quais são os identificadores de pagamento em pacs.008?

pacs.008 usa quatro identificadores principais. MsgId identifica o envelope da mensagem e muda a cada salto. InstrId é uma referência ponto a ponto entre agentes adjacentes e pode mudar por salto. EndToEndId é definido pelo originador e não deve ser alterado por nenhum agente na cadeia. TxId é atribuído pelo primeiro agente instrutor e permanece constante no espaço interbancário. UETR é um UUID que permanece inalterado em todas as etapas para rastreamento de ponta a ponta.

### Quais métodos de liquidação estão disponíveis?

Quatro métodos de liquidação são definidos. CLRG liquida através de um sistema de compensação como TARGET2, EURO1 ou CHIPS. INDA liquida nos livros do agente instruído onde o agente devedor mantém uma conta. INGA liquida nos livros do agente instrutor onde o agente instruído mantém uma conta. COVE liquida através de um pagamento de cobertura separado transportado por pacs.009.

### O que significam os códigos de portador de encargos?

DEBT significa que todos os encargos são suportados pelo devedor (equivalente a MT103 OUR). CRED significa que todos os encargos são suportados pelo credor (equivalente a BEN). SHAR significa que os encargos são compartilhados entre os agentes do devedor e do credor (equivalente a SHA). SLEV significa que os encargos seguem as regras do nível de serviço e é obrigatório para transferências de crédito SEPA.

## CBPR+ e migração

### O que é CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) é o programa da SWIFT para adoção do ISO 20022 em mensagens de pagamento transfronteiriças. Entrou em operação em março de 2023 e substitui mensagens MT por equivalentes pacs. CBPR+ exige pacs.002 para toda comunicação de status, suporta dados de partes mais ricos e endereços estruturados, e usa rastreamento baseado em UETR através do gpi.

### O que aconteceu com o período de coexistência MT/MX?

O período de coexistência para instruções de pagamento transfronteiriças terminou em novembro de 2025. Desde então, as mensagens CBPR+ devem usar o formato ISO 20022 (MX). Os serviços de tradução que convertiam entre MT e MX durante a transição não estão mais disponíveis para novos fluxos. Os bancos agora devem enviar e receber mensagens pacs nativas.

### O que é o prazo de endereços estruturados de novembro de 2026?

A partir de novembro de 2026, SWIFT CBPR+ exige endereços postais estruturados em mensagens de pagamento transfronteiriças. Linhas de endereço não estruturadas (apenas AdrLine) não serão mais aceitas para campos-chave de partes. No mínimo, TwnNm e Ctry são obrigatórios, com StrtNm e BldgNb ou PstBx recomendados. Isso melhora a triagem de sanções e reduz reparos manuais.

### Como pacs.008 substitui MT103?

pacs.008 substitui MT103 e MT103+ para transferências de crédito de clientes. Mapeamento principal: campo 20 do MT103 corresponde a MsgId ou InstrId; campo 32A divide-se em IntrBkSttlmDt e IntrBkSttlmAmt; campo 50a corresponde a Dbtr e DbtrAcct; campo 59a corresponde a Cdtr e CdtrAcct; campo 70 corresponde a RmtInf; campo 71A corresponde a ChrgBr. pacs.008 adiciona UETR, remessa estruturada, identificação LEI e suporta múltiplas transações por mensagem.

### Como pacs.009 substitui MT202?

pacs.009 substitui MT202 e MT202COV para transferências entre instituições. Em fluxos de método de cobertura, o MT202COV (que transportava tanto financiamento quanto dados do cliente subjacente) divide-se claramente: pacs.009 transporta a etapa de financiamento enquanto pacs.008 transporta a instrução do cliente diretamente. Essa separação melhora a qualidade dos dados e reduz problemas de reconciliação.

## Detalhes técnicos

### O que são endereços estruturados versus não estruturados?

Endereços estruturados usam elementos XML separados para cada componente: StrtNm (rua), BldgNb (número do edifício), PstCd (código postal), TwnNm (cidade), Ctry (país) e elementos opcionais como Flr, Room e DstrctNm. Endereços não estruturados usam até sete elementos AdrLine com texto livre. Endereços híbridos combinam ambos durante o período de transição. Após novembro de 2026, CBPR+ exige o formato estruturado.

### O que é UETR e como funciona o rastreamento gpi?

UETR (Unique End-to-End Transaction Reference) é um identificador UUID v4 gerado pelo agente devedor e transportado inalterado em todas as etapas de um pagamento. Aparece em pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 e pacs.028. SWIFT gpi usa o UETR para rastrear pagamentos através de um banco de dados Tracker baseado em nuvem. Cada agente confirma recebimento e processamento, permitindo visibilidade de ponta a ponta e monitoramento de SLA.

### Quais são os códigos de status comuns de pacs.002?

ACCP significa aceito após verificações de perfil do cliente. ACSP significa aceito e liquidação em andamento. ACSC significa que a liquidação na conta do devedor está completa. RJCT significa rejeitado (com código de motivo em StsRsnInf). PDNG significa pendente de processamento adicional. RCVD significa recebido mas ainda não processado. Cada status pode incluir um código de motivo estruturado como AC01 (conta incorreta), AM04 (fundos insuficientes) ou RC01 (BIC incorreto).

### Quais são os códigos de motivo de devolução comuns em pacs.004?

Códigos de motivo de devolução frequentes incluem AC01 (número de conta incorreto), AC04 (conta encerrada), AC06 (conta bloqueada), AM04 (fundos insuficientes), BE04 (endereço do credor ausente), CUST (solicitado pelo cliente), DUPL (pagamento duplicado), FOCR (após solicitação de cancelamento) e FR01 (fraude). A lista completa é definida nos Conjuntos de Códigos Externos ISO 20022.

### O que é informação de remessa estruturada?

A remessa estruturada em pacs.008 usa o elemento RmtInf/Strd para transportar referências de documentos (números de fatura, notas de crédito), valores (devidos, remetidos, impostos, descontos) e referências do credor (referências RF ISO 11649). Isso permite correspondência automatizada de faturas e reconciliação. Códigos de tipo de documento comuns incluem CINV (fatura comercial), CREN (nota de crédito) e SOAC (extrato de conta).

### O que é LEI e quando é usado?

LEI (Legal Entity Identifier) é um código alfanumérico de 20 caracteres conforme ISO 17442. Identifica exclusivamente entidades legais participantes em transações financeiras. Nas mensagens pacs, LEI aparece em OrgId/LEI para partes e FinInstnId/LEI para agentes. CBPR+ incentiva cada vez mais o LEI para identificação de partes e agentes. Melhora a desambiguação de entidades e suporta requisitos de relatórios regulatórios.

## Sobre o toolkit pacs008

### O que o pacs008 faz?

pacs008 é um toolkit Python que gera, valida e envia mensagens de pagamento ISO 20022. Lê dados de pagamento de fontes CSV, JSON, JSONL, SQLite e Parquet, valida contra JSON Schema e XSD, verifica identificadores IBAN e BIC, limpa dados para conformidade com caracteres SWIFT e produz arquivos XML. Fornece uma REST API, CLI e biblioteca Python.

### Quais tipos de mensagem o pacs008 suporta?

pacs008 suporta oito tipos de mensagem: pacs.002.001.12 (relatório de status), pacs.003.001.09 (débito direto de cliente), pacs.004.001.11 (devolução de pagamento), pacs.007.001.11 (estorno de pagamento), pacs.008.001.13 (transferência de crédito de cliente), pacs.009.001.10 (transferência de crédito de instituição financeira), pacs.010.001.05 (débito direto de instituição financeira) e pacs.028.001.05 (solicitação de status de pagamento).

### Como o pacs008 ajuda com o prazo de endereços estruturados de 2026?

pacs008 valida campos de endereço postal estruturados e híbridos antes da geração XML. Sinaliza dados de endereço não estruturados que falhariam após o prazo de novembro de 2026, suporta tanto formatos híbridos pré-prazo quanto formatos apenas estruturados pós-prazo, e integra verificações de qualidade de endereço em pipelines de CI e fluxos de trabalho de validação em lote.

### O pacs008 pode validar dados sem gerar XML?

Sim. Use o flag CLI `--dry-run` ou o endpoint da API `POST /validate` para validar dados de pagamento sem gerar XML. O pipeline de validação verifica conformidade com JSON Schema, formato e checksum IBAN, estrutura BIC e conformidade com caracteres SWIFT. O código de saída ou resposta da API indica se a validação passou ou falhou.

## Referências

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
