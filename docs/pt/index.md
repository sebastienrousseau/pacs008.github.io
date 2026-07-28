---
title: "Automatize o processamento de mensagens pacs.008 ISO 20022 | pacs008"
description: "Geração, validação, orquestração de API e suporte de conformidade para fluxos de transferência de crédito de clientes entre instituições financeiras."
lang: "pt-BR"
author: "Sebastien Rousseau"
lastUpdated: true
image: "/logo.webp"
imageAlt: "pacs008"
canonical: "/pt/"
robots: "index, follow"
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "pacs008"
pageType: "home"
schemaType: "WebSite"
heroText: "Automatize o processamento de mensagens pacs.008 ISO 20022."
home: true
metaTitle: "pacs008"
subtitle: "Geração, validação, orquestração de API e suporte de conformidade para fluxos de transferência de crédito de clientes entre instituições financeiras."
tagline: "Geração, validação, orquestração de API e suporte de conformidade para fluxos de transferência de crédito de clientes entre instituições financeiras."
actionText: "Saiba mais sobre o pacs008"
actionLink: "/pt/about/"
date: "2026-07-27"
news_publication_date: "2026-07-27"
item_pub_date: "2026-07-27"
last_build_date: "2026-07-27"
name: "pacs008"
short_name: "pacs008"
start_url: "/"
display: "standalone"
background_color: "#ffffff"
theme_color: "#084a53"
---

# Automatize o processamento de mensagens pacs.008 ISO 20022.

Geração, validação, orquestração de API e suporte de conformidade para fluxos de transferência de crédito de clientes entre instituições financeiras.

## O que faz

- **O que faz**: Gera XML para `pacs.008` e definições de mensagens pacs relacionadas; Valida dados e XML contra esquemas; Expõe um serviço FastAPI para processos automatizados.
- **Validação**: Validação JSON Schema contra 20 esquemas específicos de tipo de mensagem; Verificação de formato e checksum IBAN abrangendo 75 países; Validação XSD do XML gerado contra os esquemas oficiais ISO 20022.
- **Segurança**: Prevenção de XXE via defusedxml para todas as operações de parsing XML; Proteção contra travessia de caminho com lista de permissões rigorosa de diretórios; Mascaramento de PII em logs JSON estruturados para conformidade com LGPD e PCI DSS.
- **Preparação 2026**: tratamento de endereços postais estruturados e híbridos para CBPR+ e migrações de esquemas; validação mais forte da qualidade de dados de devedor, credor e agente; geração com consciência de versão através de revisões pacs.008 legadas e atuais.

## Installation & Quickstart

```bash
pip install pacs008
```

Read the full [API & CLI Reference](/pt/api/) and [Selection Guide](/pt/message-selection/).
