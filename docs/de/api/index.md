---
title: API | Deutsch
description: REST- und CLI-Unterstützung in pacs008.
lang: de-DE
lastUpdated: true
image: /logo.svg
---

# API

Das Projekt bietet sowohl eine REST-API als auch eine CLI für operative Zahlungsnachrichten-Workflows.

## Installation

Installieren Sie das Paket von PyPI. Python 3.9.2 oder höher ist erforderlich.

```bash
python -m pip install pacs008
```

---

## REST API

Starten Sie den integrierten FastAPI-Server, um HTTP-Endpunkte für Validierung und Generierung bereitzustellen.

### Server starten

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Endpunkte

| Endpoint | Beschreibung |
|---|---|
| `GET /health` | Integritätsprüfung — gibt den Dienststatus zurück |
| `POST /validate` | Zahlungsdaten gegen das Schema validieren, ohne XML zu generieren |
| `POST /generate` | XML synchron generieren und die Datei zurückgeben |
| `POST /generate/async` | Einen asynchronen Generierungsauftrag einreichen |
| `GET /status/{job_id}` | Auftragsstatus anhand der ID abfragen |
| `GET /download/{job_id}` | Das generierte XML herunterladen, sobald der Auftrag abgeschlossen ist |
| `DELETE /jobs/{job_id}` | Einen ausstehenden oder laufenden Job abbrechen |
| `GET /docs` | Interaktive Swagger UI zum Erkunden und Testen aller Endpunkte |

### Validierungsbeispiel

Zahlungsdaten zur Validierung einreichen, bevor XML generiert wird.

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

### Beispiel für synchrone Generierung

Eine XML-Datei vom Typ pacs.008.001.13 aus einer JSON-Nutzlast generieren.

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

### Asynchrone Generierung

Für größere Dateien oder Pipeline-Nutzung einen asynchronen Auftrag einreichen und auf Abschluss abfragen.

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

---

## CLI

Die Befehlszeilenschnittstelle akzeptiert eine Datendatei, eine Nachrichtenversion, eine Vorlage und ein Schema. Sie validiert die Eingabe und schreibt das generierte XML in das Ausgabeverzeichnis.

### Grundlegende Verwendung

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Beispiel

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Probelaufmodus

Verwenden Sie `--dry-run`, um Eingabedaten zu validieren, ohne XML zu generieren. Der Exit-Code gibt an, ob die Validierung erfolgreich war (`0`) oder fehlgeschlagen ist (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Fügen Sie `--verbose` für eine detaillierte Ausgabe während der Generierung hinzu.

---

## Python API

Verwenden Sie die Bibliothek direkt in Python-Skripten oder -Diensten.

### XML aus einer Liste von Zahlungsdatensätzen generieren

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

### SWIFT-Konformitätsprüfung

Daten vor der Generierung anhand der SWIFT-Zeichensatz- und Feldlängenregeln validieren und bereinigen.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

Betreiben Sie die API in einem Container mit dem mitgelieferten Dockerfile.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

---

## IBAN- und BIC-Validierung

Validieren Sie Finanzkennungen unabhängig von der XML-Generierung.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Streaming

Laden Sie große Datensätze in konfigurierbaren Blöcken, um den Speicherverbrauch zu begrenzen.

```python
from pacs008.data.loader import load_payment_data_streaming

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    print(f"Processing {len(chunk)} records")
```

---

## Validierungsdienst

Führen Sie die vollständige Validierungspipeline vor der Generierung programmatisch aus.

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

## Erforderliche Datenfelder

Jeder Zahlungsdatensatz muss die folgenden Felder enthalten. Versionsspezifische Felder sind entsprechend gekennzeichnet.

| Feld | Beschreibung | Einschränkung |
|---|---|---|
| `msg_id` | Nachrichtenkennung | Maximal 35 Zeichen |
| `creation_date_time` | Erstellungszeitstempel | ISO 8601-Format |
| `nb_of_txs` | Anzahl der Transaktionen | Positive ganze Zahl |
| `settlement_method` | Abrechnungsmethode | CLRG, INDA, COVE oder INGA |
| `end_to_end_id` | End-to-End-Kennung | Maximal 35 Zeichen |
| `interbank_settlement_amount` | Interbanken-Abrechnungsbetrag | Dezimalzahl, z.B. `25000.00` |
| `interbank_settlement_currency` | Abrechnungswährung | ISO 4217-Code |
| `charge_bearer` | Kostenträger | DEBT, CRED, SHAR oder SLEV |
| `debtor_name` | Name des Schuldners | Maximal 140 Zeichen |
| `debtor_agent_bic` | BIC des Schuldner-Agenten | 8 oder 11 Zeichen |
| `creditor_agent_bic` | BIC des Gläubiger-Agenten | 8 oder 11 Zeichen |
| `creditor_name` | Name des Gläubigers | Maximal 140 Zeichen |

### Versionsspezifische Felder

| Feld | Beschreibung | Einschränkung |
|---|---|---|
| `uetr` | Eindeutige End-to-End-Transaktionsreferenz | UUID-Format — verfügbar ab v08 |
| `mandate_id` | Mandatskennung | Verfügbar ab v10 |
| `expiry_date_time` | Ablaufzeitstempel der Nachricht | Verfügbar in v13 |

