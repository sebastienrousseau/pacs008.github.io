---
title: Guía de selección de mensajes | pacs008
description: Elija el mensaje pacs de ISO 20022 adecuado para generación, estados, devoluciones, reversos y consultas.
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# Guía de selección de mensajes

Elija la familia pacs primero según el evento operativo y después según el esquema y el modelo operativo.

> Revisado por última vez frente a fuentes primarias el 23 de marzo de 2026 utilizando materiales públicos de ISO 20022, EPC y Swift enlazados en esta página.

## Matriz rápida de decisión

| Tipo de mensaje | Descripción | Descripción general |
|---|---|---|
| [`pacs.002.001.12`](/es/pacs.002.001.12/) | Informe de estado de pagos FI a FI | El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago. |
| [`pacs.003.001.09`](/es/pacs.003.001.09/) | Débito directo de cliente FI a FI | El mensaje pacs.003 se intercambia entre instituciones financieras para ejecutar una instrucción de adeudo directo de cliente. Permite al banco del acreedor cobrar fondos del banco del deudor en nombre del acreedor. |
| [`pacs.004.001.11`](/es/pacs.004.001.11/) | Devolución de pago | El mensaje pacs.004 se utiliza para devolver una transacción de pago liquidada previamente. Invierte el flujo de fondos cuando un pago no puede aplicarse, se envió por error o está siendo reclamado por la institución originadora. |
| [`pacs.007.001.11`](/es/pacs.007.001.11/) | Reverso de pago FI a FI | El mensaje pacs.007 se utiliza para revertir una instrucción de pago enviada previamente que aún no ha sido liquidada o para solicitar la reversión de un pago liquidado. A diferencia de pacs.004 (devolución), es iniciado por el agente ordenante original. |
| [`pacs.008.001.13`](/es/pacs.008.001.13/) | Transferencia de crédito de cliente FI a FI | El mensaje pacs.008 es la instrucción de pago central intercambiada entre instituciones financieras para transferir fondos en nombre de un cliente. Contiene información de deudor, acreedor, importe y remesa para una o más transacciones de transferencia. |
| [`pacs.009.001.10`](/es/pacs.009.001.10/) | Transferencia de crédito entre instituciones financieras | El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta financiación interbancaria, pagos de cobertura y gestión de liquidez. |
| [`pacs.010.001.05`](/es/pacs.010.001.05/) | Débito directo entre instituciones financieras | El mensaje pacs.010 se utiliza entre instituciones financieras para transacciones de adeudo directo por cuenta propia de la institución. Permite a una institución cobrar fondos directamente de la cuenta de otra institución. |
| [`pacs.028.001.05`](/es/pacs.028.001.05/) | Solicitud de estado de pago FI a FI | El mensaje pacs.028 es enviado por una institución financiera para solicitar el estado de una instrucción de pago enviada previamente. Permite el seguimiento proactivo del procesamiento de pagos sin esperar un informe de estado no solicitado. |

## Puntos de comparación habituales

| Comparación | Diferencia clave |
|---|---|
| `pacs.008` vs `pacs.009` | Pago de cliente frente a movimiento institucional o de cobertura |
| `pacs.004` vs `pacs.007` | Devolución desde el lado receptor frente a reverso desde el lado ordenante |
| `pacs.002` vs `pacs.028` | Informe de estado frente a solicitud de estado |

## Páginas de mensajes admitidos

- [`pacs.002.001.12`](/es/pacs.002.001.12/) — Informe de estado de pagos FI a FI
- [`pacs.003.001.09`](/es/pacs.003.001.09/) — Débito directo de cliente FI a FI
- [`pacs.004.001.11`](/es/pacs.004.001.11/) — Devolución de pago
- [`pacs.007.001.11`](/es/pacs.007.001.11/) — Reverso de pago FI a FI
- [`pacs.008.001.13`](/es/pacs.008.001.13/) — Transferencia de crédito de cliente FI a FI
- [`pacs.009.001.10`](/es/pacs.009.001.10/) — Transferencia de crédito entre instituciones financieras
- [`pacs.010.001.05`](/es/pacs.010.001.05/) — Débito directo entre instituciones financieras
- [`pacs.028.001.05`](/es/pacs.028.001.05/) — Solicitud de estado de pago FI a FI

