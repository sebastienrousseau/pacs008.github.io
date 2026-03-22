---
title: API | Nederlands
description: REST- en CLI-workflowondersteuning in Pacs008.
lang: nl-NL
lastUpdated: true
image: /logo.svg
---

# API

Het project biedt zowel een REST API als een CLI voor operationele betalingsberichtworkflows.

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
| `GET /docs` | Interactieve Swagger UI voor het verkennen en testen van alle eindpunten |

### Validatievoorbeeld

Dien betalingsgegevens in voor validatie voordat XML wordt gegenereerd.

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

### Synchroon generatievoorbeeld

Genereer een pacs.008.001.13 XML-bestand vanuit een JSON-payload.

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

### Asynchrone generatie

Voor grotere bestanden of pipelinegebruik dient u een asynchrone taak in en peilt u op voltooiing.

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

