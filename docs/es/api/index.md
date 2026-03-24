---
title: API | pacs008
description: Soporte de flujos REST y CLI en pacs008.
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# API

El proyecto proporciona tanto una API REST como una CLI para flujos de procesamiento de mensajes de pago.

## Notas de implantación

- Utilice generación síncrona para comprobaciones operativas y lotes pequeños cuando el llamador espere XML de inmediato.
- Utilice generación asíncrona cuando los archivos de entrada sean grandes, los trabajos necesiten reintentos o la generación forme parte de un motor de orquestación mayor.
- Conserve tanto la carga útil fuente como el informe de validación para que los equipos de soporte puedan reproducir la salida XML durante una incidencia.
- Fije las rutas de plantillas y XSD en la configuración de despliegue para evitar actualizaciones silenciosas.

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

<div class="api-endpoints-table" tabindex="0" aria-label="Puntos de conexión">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Comprobación de estado — devuelve el estado del servicio</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">Validar datos de pago contra el esquema sin generar XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">Generar XML de forma sincrónica y devolver el archivo</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Enviar un trabajo de generación asíncrona</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Consultar el estado del trabajo por ID</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Descargar el XML generado una vez completado el trabajo</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Cancelar un trabajo pendiente o en ejecución</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Interfaz Swagger UI interactiva para explorar y probar todos los puntos de conexión</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/es/pacs.002.001.12/) — Informe de estado de pagos FI a FI
- [`pacs.003.001.09`](/es/pacs.003.001.09/) — Débito directo de cliente FI a FI
- [`pacs.004.001.11`](/es/pacs.004.001.11/) — Devolución de pago
- [`pacs.007.001.11`](/es/pacs.007.001.11/) — Reverso de pago FI a FI
- [`pacs.008.001.13`](/es/pacs.008.001.13/) — Transferencia de crédito de cliente FI a FI
- [`pacs.009.001.10`](/es/pacs.009.001.10/) — Transferencia de crédito entre instituciones financieras
- [`pacs.010.001.05`](/es/pacs.010.001.05/) — Débito directo entre instituciones financieras
- [`pacs.028.001.05`](/es/pacs.028.001.05/) — Solicitud de estado de pago FI a FI

### Ejemplo de validación

Envíe datos de pago para validación antes de generar XML.

```bash
curl -X POST http://localhost:8000/api/validate \
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

```json
{
  "valid": true,
  "message_type": "pacs.008.001.13",
  "errors": [],
  "warnings": []
}
```

### Ejemplo de generación sincrónica

Generar un archivo XML pacs.008.001.13 a partir de una carga útil JSON.

```bash
curl -X POST http://localhost:8000/api/generate \
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
JOB=$(curl -s -X POST http://localhost:8000/api/generate/async \
  -H "Content-Type: application/json" \
  -d '{"message_type":"pacs.008.001.13","data":[...]}')

JOB_ID=$(echo $JOB | jq -r '.job_id')

# Poll for completion
curl http://localhost:8000/api/status/$JOB_ID

# Download the result
curl http://localhost:8000/api/download/$JOB_ID --output result.xml
```

```json
{
  "job_id": "8f7f0d4b-7df9-4d1a-8d47-19f4f28b6d38",
  "status": "completed",
  "message_type": "pacs.008.001.13",
  "download_url": "/api/download/8f7f0d4b-7df9-4d1a-8d47-19f4f28b6d38"
}
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

## Docker

Ejecute la API en un contenedor utilizando el Dockerfile incluido.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## Validación IBAN y BIC

Valide identificadores financieros de forma independiente a la generación XML.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Streaming

Cargue grandes conjuntos de datos en lotes configurables para limitar el uso de memoria.

```python
from pacs008.data.loader import load_payment_data_streaming

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    print(f"Processing {len(chunk)} records")
```

```python
from pacs008.validation import validate_batch

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    report = validate_batch(chunk, "pacs.008.001.13")
    print(report.summary())
```

---

## Servicio de validación

Ejecute el pipeline completo de validación previo a la generación de forma programática.

```python
from pacs008.validation import ValidationService, ValidationConfig

service = ValidationService()
report = service.validate_all(ValidationConfig(
    xml_message_type="pacs.008.001.13",
    xml_template_file_path="pacs008/templates/pacs.008.001.13/template.xml",
    xsd_schema_file_path="pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd",
    data_file_path="payments.csv",
))
print(report.is_valid, report.errors)
```

---

## Campos de datos requeridos

Cada registro de pago debe incluir los siguientes campos. Los campos específicos de la versión se indican cuando corresponde.

<div class="api-fields-table" tabindex="0" aria-label="Campos de datos requeridos">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Campo</th>
        <th>Descripción</th>
        <th>Restricción</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Identificador del mensaje</td>
          <td class="api-fields-table__constraint">Máximo 35 caracteres</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Marca de tiempo de creación</td>
          <td class="api-fields-table__constraint">Formato ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Número de transacciones</td>
          <td class="api-fields-table__constraint">Entero positivo</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Método de liquidación</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE o INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">Identificador extremo a extremo</td>
          <td class="api-fields-table__constraint">Máximo 35 caracteres</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Importe de liquidación interbancaria</td>
          <td class="api-fields-table__constraint">Decimal, p.ej. `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Divisa de liquidación</td>
          <td class="api-fields-table__constraint">Código ISO 4217</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Portador de cargos</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR o SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Nombre del deudor</td>
          <td class="api-fields-table__constraint">Máximo 140 caracteres</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC del agente deudor</td>
          <td class="api-fields-table__constraint">8 o 11 caracteres</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC del agente acreedor</td>
          <td class="api-fields-table__constraint">8 o 11 caracteres</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Nombre del acreedor</td>
          <td class="api-fields-table__constraint">Máximo 140 caracteres</td>
        </tr>
    </tbody>
  </table>
</div>

### Campos específicos de versión

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Campos específicos de versión">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Campo</th>
        <th>Descripción</th>
        <th>Restricción</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Referencia de transacción única extremo a extremo</td>
          <td class="api-fields-table__constraint">Formato UUID — disponible desde v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Identificador de mandato</td>
          <td class="api-fields-table__constraint">Disponible desde v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Marca de tiempo de expiración del mensaje</td>
          <td class="api-fields-table__constraint">Disponible en v13</td>
        </tr>
    </tbody>
  </table>
</div>

