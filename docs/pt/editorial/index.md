---
title: "Política editorial | pacs008"
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule.
lang: pt-BR
lastUpdated: true
image: /logo.webp
---

# Política editorial

How content on pacs008.com is created, reviewed, and kept current.

## Sources

All message documentation is based on primary sources:

- [Catálogo de definições de mensagens ISO 20022](https://www.iso20022.org/iso-20022-message-definitions) para especificações de mensagens e histórico de versões.
- [Diretrizes de utilização SWIFT CBPR+](https://www.swift.com/standards/iso-20022) para o contexto de pagamentos transfronteiriços.
- [Regulamento SEPA de transferências a crédito do EPC](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) para as regras de transferências a crédito em euros.
- [Regulamento SEPA de transferências a crédito instantâneas do EPC](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) para as regras de pagamentos instantâneos.

## Processo de revisão de conteúdo

Cada página do pacs008.com passa por uma revisão estruturada antes da publicação. Os novos conteúdos começam com um rascunho baseado em fontes primárias. O rascunho é verificado quanto à precisão técnica face ao catálogo de mensagens ISO 20022 e à documentação do esquema pertinente.

Após a revisão inicial, o conteúdo passa por uma verificação estrutural para garantir a coerência com as páginas existentes. Navegação, referências cruzadas e terminologia são normalizadas em todo o site. A data de revisão apresentada em cada página de mensagem reflete a verificação mais recente face às fontes primárias.

## Review process

Each message page shows a review date. Reviews check that version numbers, registration status, and scheme context still match the primary sources listed above.

Content is updated when ISO 20022 publishes new catalogue versions, when SWIFT releases updated usage guidelines, or when scheme rules change.

## Precisão técnica

O conteúdo técnico segue as definições de mensagens ISO 20022 conforme publicadas no catálogo oficial. Nomes de campos, tipos de dados e regras de cardinalidade correspondem aos esquemas XSD de cada versão de mensagem. Quando a utilização específica do esquema difere do padrão base, a documentação do esquema relevante é citada diretamente.

Os exemplos de código na documentação da API são testados com a versão atual do toolkit pacs008. Comandos CLI, endpoints da API e métodos da biblioteca Python refletem o pacote publicado no PyPI. Os exemplos são atualizados a cada nova versão para se manterem sincronizados com o toolkit.

## Metodologia de tradução

O pacs008.com está disponível em 22 idiomas. Todo o conteúdo é criado em inglês. As páginas traduzidas são geradas a partir do material fonte inglês revisto através de um script de construção que preserva a estrutura da página, a hierarquia de títulos e os destinos dos links em todas as versões linguísticas.

Termos técnicos, identificadores ISO e códigos normalizados não são traduzidos para evitar ambiguidade. Termos como pacs.008.001.13, BIC, IBAN e CBPR+ aparecem na sua forma padrão em todos os idiomas. O conteúdo não técnico é traduzido para soar natural em cada idioma de destino. As traduções são verificadas quanto à coerência estrutural e regeneradas quando o material fonte em inglês é alterado.

## Frequência de atualização

O conteúdo é atualizado em resposta a três fatores. Primeiro, quando a ISO 20022 publica uma nova versão do catálogo de mensagens que afeta as definições de mensagens pacs. Segundo, quando a SWIFT divulga diretrizes CBPR+ atualizadas ou novos prazos de migração. Terceiro, quando o EPC atualiza os regulamentos de transferências a crédito ou transferências a crédito instantâneas SEPA.

O toolkit pacs008 segue o versionamento semântico. Cada nova versão é refletida na documentação da API e no registo de alterações. O site é reconstruído e reimplantado a cada atualização de conteúdo ou do toolkit.

## Content generation

Page structure and translated content are generated from reviewed English source material using a build script. This ensures structural consistency across all 22 languages while keeping technical terms and ISO identifiers in their standard form.

## Accuracy and limits

pacs008.com aims to be accurate and current, but it is not a substitute for scheme rulebooks, counterparty agreements, or legal advice. Always confirm implementation details against the primary sources and the specific rules of the market or scheme you operate in.

## Contact

If you find an error or have a correction, please open an issue in the [pacs008 repository](https://github.com/sebastienrousseau/pacs008/issues).
