---
title: "Prazo de endereço estruturado novembro 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: pt-BR
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "Auditar a qualidade atual dos dados de endereço nos registros de devedor, credor e agente."
  - name: "Step 2"
    text: "Mapear os campos de endereço não estruturados existentes para o formato estruturado (rua, edifício, código postal, cidade, país)."
  - name: "Step 3"
    text: "Adicionar validação de endereço ao pipeline de pré-geração usando o pacs008."
  - name: "Step 4"
    text: "Testar com dados de pagamento representativos antes do prazo."
---

# Prazo de endereço estruturado novembro 2026

O SWIFT exige endereços postais estruturados em mensagens de pagamento transfronteiriças a partir de novembro de 2026. O que muda, quais mensagens são afetadas e como o pacs008 ajuda as equipes a se prepararem.

## O que está mudando

O SWIFT CBPR+ está migrando de endereços postais não estruturados para campos de endereço estruturados em mensagens de pagamento transfronteiriças. Após o prazo de novembro de 2026, os campos de endereço das partes principais devem usar o formato estruturado com elementos separados para nome da rua, número do edifício, código postal, cidade e país.

## Por que é importante

- Endereços não estruturados aumentam as taxas de reparo manual e atrasam o processamento direto.
- Endereços estruturados melhoram a precisão da triagem de sanções ao separar o nome da parte dos dados de localização.
- Requisitos regulatórios e de esquema exigem cada vez mais dados estruturados para conformidade e relatórios.
- As taxas de rejeição de pagamentos transfronteiriços aumentam quando a qualidade do endereço não atende às expectativas das contrapartes.

## Quais mensagens são afetadas

- **pacs.008** — endereços postais do devedor e do credor em transferências de crédito de clientes.
- **pacs.009** — endereços de instituições em transferências de crédito entre instituições financeiras e pagamentos de cobertura.
- **pacs.004** — endereços das partes em devoluções de pagamento.
- **pacs.003** — endereços do credor e do devedor em débitos diretos de clientes.

## Como o pacs008 ajuda

- Valida campos de endereço postal estruturado e híbrido antes da geração de XML.
- Sinaliza dados de endereço não estruturados que falhariam após o prazo.
- Suporta tanto formatos híbridos pré-prazo quanto formatos apenas estruturados pós-prazo.
- Integra verificações de qualidade de endereço em pipelines de CI e fluxos de trabalho de validação em lote.

## Cronologia

- **Março de 2023** — SWIFT CBPR+ entra em operação com ISO 20022 para pagamentos transfronteiriços.
- **Novembro de 2025** — o período de coexistência para instruções de pagamento MT e MX termina.
- **Novembro de 2026** — o requisito de endereço postal estruturado entra em vigor para mensagens CBPR+.

## O que fazer agora

- Auditar a qualidade atual dos dados de endereço nos registros de devedor, credor e agente.
- Mapear os campos de endereço não estruturados existentes para o formato estruturado (rua, edifício, código postal, cidade, país).
- Adicionar validação de endereço ao pipeline de pré-geração usando o pacs008.
- Testar com dados de pagamento representativos antes do prazo.

## Referências

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

