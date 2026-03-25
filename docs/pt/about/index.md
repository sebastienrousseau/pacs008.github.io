---
title: "Sobre o pacs008 | pacs008"
description: O que o pacs008 faz e para quem é destinado.
lang: pt-BR
lastUpdated: true
image: /logo.svg
howtoName: "Como implementar mensagens de pagamento ISO 20022 pacs.008"
howtoDescription: "Lista de verificação passo a passo para implementar a geração e validação de mensagens ISO 20022 pacs.008."
howto:
  - name: "Passo 1"
    text: "Escolha a família de mensagens correta para o evento de negócio antes de escrever modelos."
  - name: "Passo 2"
    text: "Valide os dados de negócio antes da geração XML para que erros de esquema não sejam o primeiro sinal."
  - name: "Passo 3"
    text: "Trate a qualidade de BIC, IBAN, remessas e endereço postal como critério de lançamento, não como limpeza posterior."
  - name: "Passo 4"
    text: "Realize testes de regressão para cada alteração de regras de esquema ou banco com dados de pagamento representativos."
---

# Sobre o pacs008

O pacs008 é um kit de ferramentas Python para automatizar fluxos de transferência de crédito ISO 20022 entre instituições financeiras.

## O que faz

- Gera XML para `pacs.008` e definições de mensagens pacs relacionadas
- Valida dados e XML contra esquemas
- Expõe um serviço FastAPI para processos automatizados
- Fornece uma CLI para execução local e pipelines CI
- Suporta fontes de dados estruturadas incluindo CSV, JSON, JSONL, SQLite e Parquet
- Valida identificadores IBAN (75 países, checksum ISO 7064) e BIC (ISO 9362)
- Limpa dados de pagamento para conformidade SWIFT com transliteração e controle de comprimento de campos
- Processa grandes conjuntos de dados em lotes configuráveis para processamento eficiente em memória
- Inclui uma imagem Docker para implantação contêinerizada da API

## Para quem é

- equipes de operações de pagamento
- engenheiros de plataforma construindo infraestrutura interna de processamento de pagamentos
- programas de migração rumo ao ISO 20022
- equipes de conformidade e QA validando mensagens de pagamento de saída

## Validação

Múltiplas camadas de validação operam antes de qualquer XML ser escrito:

- Validação JSON Schema contra 20 esquemas específicos de tipo de mensagem
- Verificação de formato e checksum IBAN abrangendo 75 países
- Validação de estrutura BIC e código de país conforme ISO 9362
- Validação XSD do XML gerado contra os esquemas oficiais ISO 20022

## Segurança

pacs008 aplica defesa em profundidade em cada camada do pipeline de processamento:

- Prevenção de XXE via defusedxml para todas as operações de parsing XML
- Proteção contra travessia de caminho com lista de permissões rigorosa de diretórios
- Mascaramento de PII em logs JSON estruturados para conformidade com LGPD e PCI DSS
- Prevenção de injeção SQL com sanitização rigorosa de nomes de tabela para fontes SQLite

## Preparação 2026

O pacs008 é projetado em torno dos prazos operacionais e dos requisitos de qualidade de dados relevantes para 2026:

- tratamento de endereços postais estruturados e híbridos para CBPR+ e migrações de esquemas
- validação mais forte da qualidade de dados de devedor, credor e agente
- geração com consciência de versão através de revisões pacs.008 legadas e atuais
- caminhos de automação que se adequam a CI, operações em lote e serviços de pagamento internos

## Foco operacional

O pacs008 vai além da referência de definição de mensagem para apoiar a implementação operacional:

- gerar XML a partir de dados de origem reais
- validar antes da entrega
- modelar cadeias de pagamento e formatos posteriores
- tornar alterações específicas de esquema testáveis em código

## Lista de verificação de implementação

- Selecionar a família de mensagens correta para o evento de negócio antes de escrever modelos XML.
- Validar os dados de negócio antes da geração de XML para que erros de esquema não sejam o primeiro sinal.
- Tratar a qualidade de BIC, IBAN, remessa e endereço postal como critério de release, e não como limpeza posterior.
- Executar testes de regressão para cada alteração de regra de esquema ou de banco com dados de pagamento representativos.

