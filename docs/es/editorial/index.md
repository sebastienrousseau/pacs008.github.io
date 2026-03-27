---
title: "Política editorial | pacs008"
description: Cómo se crea, revisa y mantiene el contenido de pacs008.com. Fuentes, proceso de revisión y calendario de actualizaciones.
lang: es-ES
lastUpdated: true
image: /logo.webp
---

# Política editorial

Esta página explica cómo se crea, revisa y mantiene actualizado el contenido de pacs008.com.

## Fuentes

Toda la documentación de mensajes se basa en fuentes primarias:

- [Catálogo de definiciones de mensajes ISO 20022](https://www.iso20022.org/iso-20022-message-definitions) para especificaciones de mensajes e historial de versiones.
- [Directrices de uso de SWIFT CBPR+](https://www.swift.com/standards/iso-20022) para el contexto de pagos transfronterizos.
- [Reglamento SEPA de transferencias de crédito del EPC](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) para las normas de transferencias de crédito en euros.
- [Reglamento SEPA de transferencias de crédito instantáneas del EPC](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) para las normas de pagos instantáneos.

## Proceso de revisión del contenido

Cada página de pacs008.com pasa por una revisión estructurada antes de su publicación. El contenido nuevo comienza con un borrador basado en fuentes primarias. El borrador se verifica en cuanto a precisión técnica frente al catálogo de mensajes ISO 20022 y la documentación del esquema pertinente. Los números de versión, los identificadores de registro y las definiciones de campo se contrastan con las entradas oficiales del catálogo.

Tras la revisión inicial, el contenido se somete a una comprobación estructural para garantizar la coherencia con las páginas existentes. La navegación, las referencias cruzadas y la terminología se estandarizan en todo el sitio. La fecha de revisión mostrada en cada página de mensaje refleja la verificación más reciente frente a las fuentes primarias.

## Proceso de revisión

Cada página de mensaje muestra una fecha de revisión. Las revisiones verifican que los números de versión, el estado de registro y el contexto del esquema coincidan con las fuentes primarias citadas.

## Precisión técnica

El contenido técnico sigue las definiciones de mensajes ISO 20022 tal como se publican en el catálogo oficial. Los nombres de los campos, los tipos de datos y las reglas de cardinalidad coinciden con los esquemas XSD de cada versión de mensaje. Cuando el uso específico del esquema difiere del estándar base, se cita directamente la documentación del esquema correspondiente.

Los ejemplos de código de la documentación de la API se prueban con la versión actual del toolkit pacs008. Los comandos CLI, los endpoints de la API y los métodos de la biblioteca Python reflejan el paquete publicado en PyPI. Los ejemplos se actualizan con cada nueva versión para mantenerse sincronizados con el toolkit.

## Metodología de traducción

pacs008.com está disponible en 22 idiomas. Todo el contenido se crea en inglés. Las páginas traducidas se generan a partir del material fuente en inglés revisado mediante un script de compilación que conserva la estructura de la página, la jerarquía de encabezados y los destinos de los enlaces en todas las versiones lingüísticas.

Los términos técnicos, los identificadores ISO y los códigos estándar no se traducen para evitar ambigüedades. Términos como pacs.008.001.13, BIC, IBAN y CBPR+ aparecen en su forma estándar en todos los idiomas. El contenido no técnico se traduce para que resulte natural en cada idioma de destino. Las traducciones se revisan en cuanto a coherencia estructural y se regeneran cuando cambia el material fuente en inglés.

## Frecuencia de actualización

El contenido se actualiza en respuesta a tres factores desencadenantes. Primero, cuando ISO 20022 publica una nueva versión del catálogo de mensajes que afecta a las definiciones de mensajes pacs. Segundo, cuando SWIFT publica directrices de uso de CBPR+ actualizadas o plazos de migración. Tercero, cuando el EPC actualiza los reglamentos de transferencias de crédito o de transferencias de crédito instantáneas SEPA.

El toolkit pacs008 sigue el versionado semántico. Cada nueva versión se refleja en la documentación de la API y en el registro de cambios. El sitio se reconstruye y se vuelve a desplegar con cada actualización de contenido o del toolkit.

## Generación de contenido

La estructura de las páginas y el contenido traducido se generan a partir de material fuente en inglés verificado mediante un script de compilación. Esto garantiza la coherencia estructural en los 22 idiomas, manteniendo los términos técnicos y los identificadores ISO en su forma estándar.

## Precisión y límites

pacs008.com busca ser preciso y actual, pero no sustituye los reglamentos de esquemas, los acuerdos con contrapartes ni el asesoramiento jurídico. Confirme siempre los detalles de implementación con las fuentes primarias y las reglas específicas del mercado o esquema en el que opera.

## Contacto

Si encuentra un error o tiene una corrección, abra un issue en el [repositorio pacs008](https://github.com/sebastienrousseau/pacs008/issues).
