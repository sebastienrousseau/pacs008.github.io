---
title: "API | pacs008"
description: REST- und CLI-Unterstützung in pacs008.
lang: de-DE
lastUpdated: true
image: /logo.webp
---

# API

Das Projekt bietet sowohl eine REST-API als auch eine CLI für operative Zahlungsnachrichten-Workflows.

## Implementierungshinweise

- Synchrone Erzeugung für operatorgesteuerte Prüfungen und kleine Batches verwenden, wenn der Aufrufer sofort XML erwartet.
- Asynchrone Erzeugung verwenden, wenn Eingabedateien groß sind, Jobs wiederholbar sein müssen oder die Erzeugung Teil einer größeren Workflow-Engine ist.
- Sowohl das Quell-Payload als auch den Validierungsbericht speichern, damit Support-Teams XML-Ausgaben bei Vorfällen reproduzieren können.
- Template- und XSD-Pfade in der Deployment-Konfiguration versionieren, damit es nicht zu stillen Upgrades kommt.

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

<div class="api-endpoints-table" tabindex="0" aria-label="Endpunkte">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Beschreibung</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Integritätsprüfung — gibt den Dienststatus zurück</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">Zahlungsdaten gegen das Schema validieren, ohne XML zu generieren</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">XML synchron generieren und die Datei zurückgeben</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Einen asynchronen Generierungsauftrag einreichen</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Auftragsstatus anhand der ID abfragen</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Das generierte XML herunterladen, sobald der Auftrag abgeschlossen ist</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Einen ausstehenden oder laufenden Job abbrechen</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Interaktive Swagger UI zum Erkunden und Testen aller Endpunkte</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/de/pacs.002.001.12/) — FI-zu-FI-Zahlungsstatusbericht
- [`pacs.003.001.09`](/de/pacs.003.001.09/) — FI-zu-FI-Kundenlastschrift
- [`pacs.004.001.11`](/de/pacs.004.001.11/) — Zahlungsrückgabe
- [`pacs.007.001.11`](/de/pacs.007.001.11/) — FI-zu-FI-Zahlungsstornierung
- [`pacs.008.001.13`](/de/pacs.008.001.13/) — FI-zu-FI-Kundenkredittransfer
- [`pacs.009.001.10`](/de/pacs.009.001.10/) — Kredittransfer zwischen Finanzinstituten
- [`pacs.010.001.05`](/de/pacs.010.001.05/) — Lastschrift zwischen Finanzinstituten
- [`pacs.028.001.05`](/de/pacs.028.001.05/) — FI-zu-FI-Anfrage zum Zahlungsstatus

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

```json
{
  "valid": true,
  "message_type": "pacs.008.001.13",
  "errors": [],
  "warnings": []
}
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

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
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

```python
from pacs008.validation import validate_batch

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    report = validate_batch(chunk, "pacs.008.001.13")
    print(report.summary())
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

<div class="api-fields-table" tabindex="0" aria-label="Erforderliche Datenfelder">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Feld</th>
        <th>Beschreibung</th>
        <th>Einschränkung</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Nachrichtenkennung</td>
          <td class="api-fields-table__constraint">Maximal 35 Zeichen</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Erstellungszeitstempel</td>
          <td class="api-fields-table__constraint">ISO 8601-Format</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Anzahl der Transaktionen</td>
          <td class="api-fields-table__constraint">Positive ganze Zahl</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Abrechnungsmethode</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE oder INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">End-to-End-Kennung</td>
          <td class="api-fields-table__constraint">Maximal 35 Zeichen</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Interbanken-Abrechnungsbetrag</td>
          <td class="api-fields-table__constraint">Dezimalzahl, z.B. `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Abrechnungswährung</td>
          <td class="api-fields-table__constraint">ISO 4217-Code</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Kostenträger</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR oder SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Name des Schuldners</td>
          <td class="api-fields-table__constraint">Maximal 140 Zeichen</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC des Schuldner-Agenten</td>
          <td class="api-fields-table__constraint">8 oder 11 Zeichen</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC des Gläubiger-Agenten</td>
          <td class="api-fields-table__constraint">8 oder 11 Zeichen</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Name des Gläubigers</td>
          <td class="api-fields-table__constraint">Maximal 140 Zeichen</td>
        </tr>
    </tbody>
  </table>
</div>

### Versionsspezifische Felder

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Versionsspezifische Felder">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Feld</th>
        <th>Beschreibung</th>
        <th>Einschränkung</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Eindeutige End-to-End-Transaktionsreferenz</td>
          <td class="api-fields-table__constraint">UUID-Format — verfügbar ab v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Mandatskennung</td>
          <td class="api-fields-table__constraint">Verfügbar ab v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Ablaufzeitstempel der Nachricht</td>
          <td class="api-fields-table__constraint">Verfügbar in v13</td>
        </tr>
    </tbody>
  </table>
</div>

