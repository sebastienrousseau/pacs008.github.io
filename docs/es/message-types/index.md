---
title: Tipos de mensaje | pacs008 ISO 20022
description: Definiciones y versiones de mensajes pacs ISO 20022 compatibles.
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# Tipos de mensaje

pacs008 cubre la definición de mensaje pacs.008 principal y los mensajes relacionados utilizados en flujos de orquestación y reconciliación.

## Soporte incluido

<div class="message-coverage-table" tabindex="0" aria-label="Soporte incluido">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Tipo de mensaje</th>
        <th>Descripción</th>
        <th>Año</th>
        <th>Descripción general</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/es/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">Informe de estado de pagos FI a FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/es/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">Débito directo de cliente FI a FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">El mensaje pacs.003 se intercambia entre instituciones financieras para ejecutar una instrucción de adeudo directo de cliente. Permite al banco del acreedor cobrar fondos del banco del deudor en nombre del acreedor.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/es/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">Devolución de pago</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">El mensaje pacs.004 se utiliza para devolver una transacción de pago liquidada previamente. Invierte el flujo de fondos cuando un pago no puede aplicarse, se envió por error o está siendo reclamado por la institución originadora.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/es/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">Reverso de pago FI a FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">El mensaje pacs.007 se utiliza para revertir una instrucción de pago enviada previamente que aún no ha sido liquidada o para solicitar la reversión de un pago liquidado. A diferencia de pacs.004 (devolución), es iniciado por el agente ordenante original.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/es/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">Transferencia de crédito de cliente FI a FI</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">El mensaje pacs.008 es la instrucción de pago central intercambiada entre instituciones financieras para transferir fondos en nombre de un cliente. Contiene información de deudor, acreedor, importe y remesa para una o más transacciones de transferencia.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/es/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">Transferencia de crédito entre instituciones financieras</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta financiación interbancaria, pagos de cobertura y gestión de liquidez.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/es/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">Débito directo entre instituciones financieras</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">El mensaje pacs.010 se utiliza entre instituciones financieras para transacciones de adeudo directo por cuenta propia de la institución. Permite a una institución cobrar fondos directamente de la cuenta de otra institución.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/es/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">Solicitud de estado de pago FI a FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">El mensaje pacs.028 es enviado por una institución financiera para solicitar el estado de una instrucción de pago enviada previamente. Permite el seguimiento proactivo del procesamiento de pagos sin esperar un informe de estado no solicitado.</td>
        </tr>
    </tbody>
  </table>
</div>

## Modelo de entrega

Cada tipo de mensaje compatible está respaldado por plantillas y lógica de validación para que los equipos puedan estandarizar la generación y las pruebas de regresión en múltiples canales.

## Elegir el mensaje correcto

El catálogo de mensajes es más importante cuando los equipos deben decidir qué mensaje inicia el trabajo, cuál informa del estado y cuál corrige o revierte el flujo.

Consulte la [guía de selección de mensajes](/es/message-selection/) para una vista resumida de decisión sobre los flujos pacs soportados.

## Contexto de mercado 2026

- **SEPA SCT / SCT Inst**: pacs.008 sigue siendo central para el intercambio de transferencias y el procesamiento de pagos instantáneos.
- **CBPR+**: pacs.008 continúa reemplazando las cargas MT103 transfronterizas con datos estructurados más ricos.
- **Direcciones estructuradas**: la guía actual del mercado apunta a la transición de noviembre de 2026 alejándose de las direcciones postales completamente no estructuradas.
- **Método serial y STP**: las cadenas banco a banco de múltiples tramos siguen siendo importantes, y las variantes de procesamiento directo siguen siendo esenciales para la eficiencia operativa.

## Capacidades operativas

pacs008 proporciona generación y validación respaldadas por plantillas a través de las revisiones de definiciones de mensajes compatibles:

- comparar versiones
- realizar pruebas de regresión de actualizaciones de esquemas
- fortalecer los datos de mensajes de pago salientes antes del lanzamiento
- apoyar a los equipos de producto, operaciones y migración desde una sola base de código

