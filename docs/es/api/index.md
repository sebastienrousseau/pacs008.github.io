---
title: API | Español
description: Soporte de flujos REST y CLI en pacs008.
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# API

El proyecto proporciona tanto una API REST como una CLI para flujos de procesamiento de mensajes de pago.

## Instalación

Instale el paquete desde PyPI. Se requiere Python 3.9.2 o superior.

```bash
python -m pip install pacs008
```

---

## REST API

Inicie el servidor FastAPI integrado para exponer puntos de conexión HTTP para validación y generación.

### Iniciar el servidor

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Puntos de conexión

| Endpoint | Descripción |
|---|---|
| `GET /health` | Comprobación de estado — devuelve el estado del servicio |
| `POST /validate` | Validar datos de pago contra el esquema sin generar XML |
| `POST /generate` | Generar XML de forma sincrónica y devolver el archivo |
| `POST /generate/async` | Enviar un trabajo de generación asíncrona |
| `GET /status/{job_id}` | Consultar el estado del trabajo por ID |
| `GET /download/{job_id}` | Descargar el XML generado una vez completado el trabajo |
| `GET /docs` | Interfaz Swagger UI interactiva para explorar y probar todos los puntos de conexión |

### Ejemplo de validación

Envíe datos de pago para validación antes de generar XML.

```bash
curl -X POST http://localhost:8000/validate \
  -H "Content-Type: application/json" \
  -d '{
    "message_type": "pacs.008.001.13",
    "data": [{
      "msg_id": "MSG-2026-001",
      "creation_date_time": "2026-01-15T10:30:00",
      "nb_of_txs": "1",
      "settlement_method": "CLRG",
      "interbank_settlement_date": "2026-01-15",
      "end_to_end_id": "E2E-INV-2026-001",
      "interbank_settlement_amount": "25000.00",
      "interbank_settlement_currency": "EUR",
      "charge_bearer": "SHAR",
      "debtor_name": "Acme Corp GmbH",
      "debtor_agent_bic": "DEUTDEFF",
      "creditor_agent_bic": "COBADEFF",
      "creditor_name": "Widget Industries SA"
    }]
  }'
```

### Ejemplo de generación sincrónica

Generar un archivo XML pacs.008.001.13 a partir de una carga útil JSON.

```bash
curl -X POST http://localhost:8000/generate \
  -H "Content-Type: application/json" \
  -d '{
    "message_type": "pacs.008.001.13",
    "template": "pacs008/templates/pacs.008.001.13/template.xml",
    "schema": "pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd",
    "data": [{
      "msg_id": "MSG-2026-001",
      "creation_date_time": "2026-01-15T10:30:00",
      "nb_of_txs": "1",
      "settlement_method": "CLRG",
      "interbank_settlement_date": "2026-01-15",
      "end_to_end_id": "E2E-INV-2026-001",
      "tx_id": "TX-001",
      "interbank_settlement_amount": "25000.00",
      "interbank_settlement_currency": "EUR",
      "charge_bearer": "SHAR",
      "debtor_name": "Acme Corp GmbH",
      "debtor_agent_bic": "DEUTDEFF",
      "creditor_agent_bic": "COBADEFF",
      "creditor_name": "Widget Industries SA"
    }]
  }' --output pacs008_output.xml
```

### Generación asíncrona

Para archivos más grandes o uso en pipelines, envíe un trabajo asíncrono y consulte hasta su finalización.

```bash
# Submit the job
JOB=$(curl -s -X POST http://localhost:8000/generate/async \
  -H "Content-Type: application/json" \
  -d '{"message_type":"pacs.008.001.13","data":[...]}')

JOB_ID=$(echo $JOB | jq -r '.job_id')

# Poll for completion
curl http://localhost:8000/status/$JOB_ID

# Download the result
curl http://localhost:8000/download/$JOB_ID --output result.xml
```

---

## CLI

La interfaz de línea de comandos acepta un archivo de datos, una versión de mensaje, una plantilla y un esquema. Valida la entrada y escribe el XML generado en el directorio de salida.

### Uso básico

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Ejemplo

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Modo de prueba

Use `--dry-run` para validar los datos de entrada sin generar XML. El código de salida indica si la validación fue exitosa (`0`) o falló (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Añada `--verbose` para obtener una salida detallada durante la generación.

---

## Python API

Use la biblioteca directamente en scripts o servicios Python.

### Generar XML a partir de una lista de registros de pago

```python
from pacs008 import generate_xml_string

payments = [{
    "msg_id": "MSG-2026-001",
    "creation_date_time": "2026-01-15T10:30:00",
    "nb_of_txs": "1",
    "settlement_method": "CLRG",
    "interbank_settlement_date": "2026-01-15",
    "end_to_end_id": "E2E-INV-2026-001",
    "tx_id": "TX-001",
    "interbank_settlement_amount": "25000.00",
    "interbank_settlement_currency": "EUR",
    "charge_bearer": "SHAR",
    "debtor_name": "Acme Corp GmbH",
    "debtor_agent_bic": "DEUTDEFF",
    "creditor_agent_bic": "COBADEFF",
    "creditor_name": "Widget Industries SA",
}]

xml = generate_xml_string(
    payments,
    "pacs.008.001.13",
    "pacs008/templates/pacs.008.001.13/template.xml",
    "pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd",
)
print(xml)
```

### Verificación de conformidad SWIFT

Validar y limpiar los datos según las reglas de juego de caracteres y longitud de campo de SWIFT antes de la generación.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Campos de datos requeridos

Cada registro de pago debe incluir los siguientes campos. Los campos específicos de la versión se indican cuando corresponde.

| Campo | Descripción | Restricción |
|---|---|---|
| `msg_id` | Identificador del mensaje | Máximo 35 caracteres |
| `creation_date_time` | Marca de tiempo de creación | Formato ISO 8601 |
| `nb_of_txs` | Número de transacciones | Entero positivo |
| `settlement_method` | Método de liquidación | CLRG, INDA, COVE o INGA |
| `end_to_end_id` | Identificador extremo a extremo | Máximo 35 caracteres |
| `interbank_settlement_amount` | Importe de liquidación interbancaria | Decimal, p.ej. `25000.00` |
| `interbank_settlement_currency` | Divisa de liquidación | Código ISO 4217 |
| `charge_bearer` | Portador de cargos | DEBT, CRED, SHAR o SLEV |
| `debtor_name` | Nombre del deudor | Máximo 140 caracteres |
| `debtor_agent_bic` | BIC del agente deudor | 8 o 11 caracteres |
| `creditor_agent_bic` | BIC del agente acreedor | 8 o 11 caracteres |
| `creditor_name` | Nombre del acreedor | Máximo 140 caracteres |

### Campos específicos de versión

| Campo | Descripción | Restricción |
|---|---|---|
| `uetr` | Referencia de transacción única extremo a extremo | Formato UUID — disponible desde v08 |
| `mandate_id` | Identificador de mandato | Disponible desde v10 |
| `expiry_date_time` | Marca de tiempo de expiración del mensaje | Disponible en v13 |

