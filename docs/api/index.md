---
title: API | pacs008
description: REST and CLI workflow support in pacs008. Generation, validation, API orchestration, and compliance support for FI-to-FI customer credit transfer workflows.
lang: en-GB
lastUpdated: true
image: /logo.svg
---

# API

The project provides both a REST API and a CLI for operational payment message workflows.

> Last reviewed against primary sources on 23 March 2026 using ISO 20022, EPC, and Swift public materials referenced on this page.

## Implementation notes

- Use synchronous generation for operator-driven checks and small batches where the caller expects an immediate XML file.
- Use asynchronous generation when input files are large, when jobs need retry semantics, or when generation is part of a broader workflow engine.
- Persist both the source payload and validation report so support teams can reproduce XML output during incident review.
- Version-lock template and XSD file paths in deployment configuration to avoid silent upgrades during releases.

## Installation

Install the package from PyPI. Python 3.9.2 or higher is required.

```bash
python -m pip install pacs008
```

---

## REST API

Start the built-in FastAPI server to expose HTTP endpoints for validation and generation.

### Start the server

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Endpoints

| Endpoint | Description |
|---|---|
| `GET /health` | Health check — returns service status |
| `POST /validate` | Validate payment data against the schema without generating XML |
| `POST /generate` | Generate XML synchronously and return the file |
| `POST /generate/async` | Submit an asynchronous generation job |
| `GET /status/{job_id}` | Poll job status by ID |
| `GET /download/{job_id}` | Download the generated XML once the job completes |
| `DELETE /jobs/{job_id}` | Cancel a pending or running job |
| `GET /docs` | Interactive Swagger UI for exploring and testing all endpoints |

- [`pacs.002.001.12`](/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.13`](/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/pacs.028.001.05/) — FI to FI Payment Status Request

### Validation example

Submit payment data for validation before generating XML.

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

### Synchronous generation example

Generate a pacs.008.001.13 XML file from a JSON payload.

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

### Asynchronous generation

For larger files or pipeline use, submit an async job and poll for completion.

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

The command-line interface accepts a data file, a message version, a template, and a schema. It validates the input and writes the generated XML to the output directory.

### Basic usage

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Example

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Dry-run mode

Use `--dry-run` to validate input data without generating XML. The exit code indicates whether validation passed (`0`) or failed (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Add `--verbose` for detailed output during generation.

---

## Python API

Use the library directly in Python scripts or services.

### Generate XML from a list of payment records

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

### SWIFT compliance check

Validate and cleanse data against SWIFT character-set and field-length rules before generation.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

Run the API in a container using the bundled Dockerfile.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## IBAN and BIC validation

Validate financial identifiers independently of XML generation.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Streaming

Load large datasets in configurable chunks to limit memory usage.

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

## Validation service

Run the full pre-generation validation pipeline programmatically.

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

## Required data fields

Every payment record must include the following fields. Version-specific fields are noted where applicable.

| Field | Description | Constraint |
|---|---|---|
| `msg_id` | Message identifier | Max 35 characters |
| `creation_date_time` | Creation timestamp | ISO 8601 format |
| `nb_of_txs` | Number of transactions | Positive integer |
| `settlement_method` | Settlement method | CLRG, INDA, COVE, or INGA |
| `end_to_end_id` | End-to-end identifier | Max 35 characters |
| `interbank_settlement_amount` | Interbank settlement amount | Decimal, e.g. `25000.00` |
| `interbank_settlement_currency` | Settlement currency | ISO 4217 code |
| `charge_bearer` | Charge bearer | DEBT, CRED, SHAR, or SLEV |
| `debtor_name` | Debtor name | Max 140 characters |
| `debtor_agent_bic` | Debtor agent BIC | 8 or 11 characters |
| `creditor_agent_bic` | Creditor agent BIC | 8 or 11 characters |
| `creditor_name` | Creditor name | Max 140 characters |

### Version-specific fields

| Field | Description | Constraint |
|---|---|---|
| `uetr` | Unique end-to-end transaction reference | UUID format — available from v08 |
| `mandate_id` | Mandate identifier | Available from v10 |
| `expiry_date_time` | Message expiry timestamp | Available in v13 |

