---
title: API | Português
description: Suporte a fluxos REST e CLI no Pacs008.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# API

O projeto fornece tanto uma API REST quanto uma CLI para fluxos operacionais de mensagens de pagamento.

## Capacidades da API

- endpoints de saúde e prontidão
- validação de dados antes da geração XML
- geração síncrona para fluxos diretos
- execução assíncrona de tarefas para pipelines mais longos
- arquivos gerados para download através de fluxos de conclusão de tarefas

## Capacidades da CLI

- apontar para um arquivo fonte e versão de mensagem
- validar contra XSD antes da entrega
- gerar XML em diretórios de saída compatíveis com pipelines
- integrar-se a trabalhos CI, agendamentos em lote e ferramentas de operador local

## Foco na implementação

O Pacs008 é projetado para uso operacional pelas equipes de processamento de pagamentos:

- validação pré-voo antes da criação da mensagem
- seleção de esquema e versão em tempo de execução
- fluxos de geração assíncronos para serviços internos
- saídas determinísticas para testes e trilhas de auditoria

## Requisitos de qualidade de dados para 2026

Os requisitos de qualidade das mensagens estão se tornando mais rigorosos no setor, particularmente em torno de:

- identificação de partes e agentes
- prontidão de endereços estruturados ou híbridos
- tratamento mais rico de remessas e referências
- transparência ao longo de cadeias de pagamento seriais

A API e a CLI são projetadas para tornar essas verificações parte do fluxo de trabalho em vez de uma etapa de revisão manual.

