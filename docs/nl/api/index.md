---
title: API | pacs008
description: REST- en CLI-workflowondersteuning in pacs008. Generatie, validatie, API-orchestratie en compliance-ondersteuning voor FI-to-FI-klantoverdrachtworkflows.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# API

Het project biedt zowel een REST API als een CLI voor operationele betalingsberichtworkflows.

> Laatst gecontroleerd aan de hand van primaire bronnen op 23 maart 2026 met openbare ISO 20022-, EPC- en Swift-materialen waarnaar op deze pagina wordt verwezen.

## Implementatienotities

- Gebruik synchrone generatie voor operatorgestuurde controles en kleine batches wanneer de aanroeper direct XML verwacht.
- Gebruik asynchrone generatie wanneer invoerbestanden groot zijn, jobs retries nodig hebben of generatie deel uitmaakt van een bredere workflow-engine.
- Sla zowel de bronpayload als het validatierapport op zodat supportteams XML-uitvoer tijdens incidenten kunnen reproduceren.
- Vergrendel template- en XSD-paden in de deploymentconfiguratie om stille upgrades te voorkomen.

## Installatie

Installeer het pakket via PyPI. Python 3.9.2 of hoger is vereist.

```bash
python -m pip install pacs008
```

---

## REST API

Start de ingebouwde FastAPI-server om HTTP-eindpunten voor validatie en generatie beschikbaar te stellen.

### Start de server

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Eindpunten

| Endpoint | Beschrijving |
|---|---|
| `GET /health` | Health check — geeft de servicestatus terug |
| `POST /validate` | Valideer betalingsgegevens tegen het schema zonder XML te genereren |
| `POST /generate` | Genereer XML synchroon en retourneer het bestand |
| `POST /generate/async` | Dien een asynchrone generatietaak in |
| `GET /status/{job_id}` | Peil de taakstatus op ID |
| `GET /download/{job_id}` | Download de gegenereerde XML zodra de taak voltooid is |
| `DELETE /jobs/{job_id}` | Een wachtende of lopende taak annuleren |
| `GET /docs` | Interactieve Swagger UI voor het verkennen en testen van alle eindpunten |

- [`pacs.002.001.12`](/nl/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/nl/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/nl/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/nl/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.13`](/nl/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/nl/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/nl/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/nl/pacs.028.001.05/) — FI to FI Payment Status Request

### Validatievoorbeeld

Dien betalingsgegevens in voor validatie voordat XML wordt gegenereerd.

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

### Synchroon generatievoorbeeld

Genereer een pacs.008.001.13 XML-bestand vanuit een JSON-payload.

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

### Asynchrone generatie

Voor grotere bestanden of pipelinegebruik dient u een asynchrone taak in en peilt u op voltooiing.

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

De opdrachtregelinterface accepteert een gegevensbestand, een berichtversie, een sjabloon en een schema. Het valideert de invoer en schrijft de gegenereerde XML naar de uitvoermap.

### Basisgebruik

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Voorbeeld

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Dry-run modus

Gebruik `--dry-run` om invoergegevens te valideren zonder XML te genereren. De afsluitcode geeft aan of de validatie geslaagd (`0`) of mislukt (`1`) is.

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Voeg `--verbose` toe voor gedetailleerde uitvoer tijdens de generatie.

---

## Python API

Gebruik de bibliotheek rechtstreeks in Python-scripts of -services.

### Genereer XML vanuit een lijst met betalingsrecords

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

### SWIFT-compliancecontrole

Valideer en reinig gegevens op basis van de SWIFT-tekenset en veldlengteregels voorafgaand aan de generatie.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

Voer de API uit in een container met behulp van het meegeleverde Dockerfile.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## IBAN- en BIC-validatie

Valideer financiële identificaties onafhankelijk van XML-generatie.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Streaming

Laad grote datasets in configureerbare blokken om het geheugengebruik te beperken.

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

## Validatiedienst

Voer de volledige pre-generatie validatiepipeline programmatisch uit.

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

## Verplichte gegevensvelden

Elk betalingsrecord moet de volgende velden bevatten. Versiespecifieke velden zijn aangegeven waar van toepassing.

| Veld | Beschrijving | Beperking |
|---|---|---|
| `msg_id` | Berichtidentificatie | Max. 35 tekens |
| `creation_date_time` | Aanmaaktijdstempel | ISO 8601-formaat |
| `nb_of_txs` | Aantal transacties | Positief geheel getal |
| `settlement_method` | Verrekeningmethode | CLRG, INDA, COVE of INGA |
| `end_to_end_id` | End-to-end-identificatie | Max. 35 tekens |
| `interbank_settlement_amount` | Interbancair verrekeningsbedrag | Decimaal, bijv. `25000.00` |
| `interbank_settlement_currency` | Verrekeningsvaluta | ISO 4217-code |
| `charge_bearer` | Kostendrager | DEBT, CRED, SHAR of SLEV |
| `debtor_name` | Naam debiteur | Max. 140 tekens |
| `debtor_agent_bic` | BIC debiteuragent | 8 of 11 tekens |
| `creditor_agent_bic` | BIC crediteuragent | 8 of 11 tekens |
| `creditor_name` | Naam crediteur | Max. 140 tekens |

### Versiespecifieke velden

| Veld | Beschrijving | Beperking |
|---|---|---|
| `uetr` | Unieke end-to-end transactiereferentie | UUID-formaat — beschikbaar vanaf v08 |
| `mandate_id` | Machtigingsidentificatie | Beschikbaar vanaf v10 |
| `expiry_date_time` | Tijdstempel vervaldatum bericht | Beschikbaar in v13 |

