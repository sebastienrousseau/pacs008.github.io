---
title: pacs.010.001.05 | Débito directo entre instituciones financieras | pacs008
description: El mensaje pacs.010 se utiliza entre instituciones financieras para transacciones de adeudo directo por cuenta propia de la institución. Permite a una...
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Débito directo entre instituciones financieras

| | |
|---|---|
| **Nombre ISO** | FinancialInstitutionDirectDebitV05 |
| **Estado de registro** | Registered |
| **Año** | 2019 |
| **Versión** | 5 |

## Descripción general

El mensaje pacs.010 se utiliza entre instituciones financieras para transacciones de adeudo directo por cuenta propia de la institución. Permite a una institución cobrar fondos directamente de la cuenta de otra institución.

> Revisado por última vez frente a fuentes primarias el 23 de marzo de 2026. Fecha de referencia del catálogo ISO 20022: 2025-02-27; los enlaces a las fuentes se muestran a continuación.

## Elementos de datos clave

- **GrpHdr** — Cabecera de grupo con identificación del mensaje e información de liquidación
- **DrctDbtTxInf** — Información de transacción de adeudo directo con importe de cobro
- **Cdtr / CdtrAgt** — Institución acreedora e identificación de su agente
- **Dbtr / DbtrAgt** — Institución deudora e identificación de su agente
- **IntrBkSttlmAmt** — Importe de liquidación interbancaria en la divisa de liquidación

## Contexto de negocio

- Soporta cobro de adeudos directos interbancarios entre instituciones financieras
- Se utiliza para cobro de comisiones, llamadas de margen y obligaciones de liquidación institucional
- Requiere acuerdos bilaterales preestablecidos entre instituciones participantes
- Crítico para la gestión de tesorería institucional y ciclos de liquidación interbancaria

| Elementos de datos clave | Contexto de negocio |
|---|---|
| **GrpHdr** — Cabecera de grupo con identificación del mensaje e información de liquidación | Soporta cobro de adeudos directos interbancarios entre instituciones financieras |
| **DrctDbtTxInf** — Información de transacción de adeudo directo con importe de cobro | Se utiliza para cobro de comisiones, llamadas de margen y obligaciones de liquidación institucional |
| **Cdtr / CdtrAgt** — Institución acreedora e identificación de su agente | Requiere acuerdos bilaterales preestablecidos entre instituciones participantes |
| **Dbtr / DbtrAgt** — Institución deudora e identificación de su agente | Crítico para la gestión de tesorería institucional y ciclos de liquidación interbancaria |
| **IntrBkSttlmAmt** — Importe de liquidación interbancaria en la divisa de liquidación | La institución acreedora envía pacs.010 a la institución deudora para cobrar fondos bajo un acuerdo preestablecido. La institución deudora valida la solicitud y liquida o rechaza el adeudo directo. |

## Contexto CBPR+ y esquemas

- Sustituye elementos del MT204 para procesamiento de adeudos directos interbancarios
- La identificación estructurada de partes sigue los mismos requisitos que otros mensajes pacs
- La validación de identificadores institucionales (BIC, LEI) es obligatoria
- Incluido en las hojas de ruta de adopción completa de ISO 20022 en infraestructuras de mercado

## Flujo de mensaje

La institución acreedora envía pacs.010 a la institución deudora para cobrar fondos bajo un acuerdo preestablecido. La institución deudora valida la solicitud y liquida o rechaza el adeudo directo.

## Tabla de diferencias de versión

| Rango de versiones | Por qué importa | Conclusión de implementación |
|---|---|---|
| pacs.010.001.05 | Implementación actual en pacs008 | Punto de referencia para el soporte de adeudos directos entre instituciones en el proyecto actual. |
| pacs.010.001.06 | Revisión posterior del catálogo | Review before adopting newer infrastructure requirements. |

## Fragmento XML comentado

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Comentarios de campos

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Los importes de adeudo directo entre instituciones suelen requerir controles bilaterales explícitos de tolerancia.
- `Cdtr` / `Dbtr`: Defina con claridad los roles institucionales; este no es un modelo de adeudo para clientes minoristas.

## Referencias primarias

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Mensajes relacionados
| Tipo de mensaje | Descripción | Descripción general |
|---|---|---|
| [`pacs.009.001.10`](/es/pacs.009.001.10/) | Transferencia de crédito entre instituciones financieras | El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta financiación interbancaria, pagos de cobertura y gestión de liquidez. |
| [`pacs.002.001.12`](/es/pacs.002.001.12/) | Informe de estado de pagos FI a FI | El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago. |
| [`pacs.003.001.09`](/es/pacs.003.001.09/) | Débito directo de cliente FI a FI | El mensaje pacs.003 se intercambia entre instituciones financieras para ejecutar una instrucción de adeudo directo de cliente. Permite al banco del acreedor cobrar fondos del banco del deudor en nombre del acreedor. |

