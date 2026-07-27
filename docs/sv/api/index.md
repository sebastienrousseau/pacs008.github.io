---
title: "pacs008 API-referens | pacs008"
description: REST- och CLI-arbetsflödesstöd i pacs008.
lang: sv-SE
lastUpdated: true
image: /logo.webp
---

# pacs008 API-referens

Projektet tillhandahåller både ett REST-API och CLI för operativa arbetsflöden för betalningsmeddelanden.

## Installation

Installera paketet från PyPI. Kräver Python 3.9.2 eller senare.

```bash
python -m pip install pacs008
```

---

## REST API

Starta den inbyggda FastAPI-servern för att tillhandahålla HTTP-ändpunkter för validering och generering.

### Starta servern

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Ändpunkter

<div class="api-endpoints-table" tabindex="0" aria-label="Ändpunkter">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Beskrivning</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Hälsokontroll — returnerar tjänstens status</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">Validera betalningsdata mot schema utan att generera XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">Generera XML synkront och returnera filen</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Skicka in ett asynkront genereringsjobb</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Kontrollera jobbstatus med ID</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Ladda ner genererad XML efter att jobbet är klart</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Avbryt ett väntande eller pågående jobb</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Interaktivt Swagger UI för att utforska och testa alla ändpunkter</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/sv/pacs.002.001.12/) — Statusrapport för betalning mellan finansinstitut
- [`pacs.003.001.09`](/sv/pacs.003.001.09/) — Autogiro för kund mellan finansinstitut
- [`pacs.004.001.11`](/sv/pacs.004.001.11/) — Betalningsretur
- [`pacs.007.001.11`](/sv/pacs.007.001.11/) — Betalningsåterföring mellan finansinstitut
- [`pacs.008.001.13`](/sv/pacs.008.001.13/) — Kundkreditöverföring mellan finansinstitut
- [`pacs.009.001.10`](/sv/pacs.009.001.10/) — Kreditöverföring mellan finansinstitut
- [`pacs.010.001.05`](/sv/pacs.010.001.05/) — Autogiro mellan finansinstitut
- [`pacs.028.001.05`](/sv/pacs.028.001.05/) — Statusförfrågan för betalning mellan finansinstitut

### Valideringsexempel

Skicka in betalningsdata för validering innan XML genereras.

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

### Synkront genereringsexempel

Generera en XML-fil för pacs.008.001.13 från JSON-data.

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

### Asynkron generering

För större filer eller pipelineanvändning, skicka in ett asynkront jobb och polla tills det är klart.

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

Kommandoradsgränssnittet tar en datafil, meddelandeversion, mall och schema. Det validerar indata och skriver genererad XML till utdatakatalogen.

### Grundläggande användning

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Exempel

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Torrkörningsläge

Använd `--dry-run` för att validera indata utan att generera XML. Utgångskoden visar om valideringen lyckades (`0`) eller misslyckades (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Lägg till `--verbose` för detaljerad utdata under generering.

---

## Python API

Använd biblioteket direkt i Python-skript eller tjänster.

### Generera XML från betalningsposter

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

### SWIFT-efterlevnadskontroll

Kontrollera och rensa data mot SWIFT:s tecken- och fältlängdsregler före generering.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

Kör API:et i en container med den medföljande Dockerfile.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## IBAN- och BIC-validering

Validera finansiella identifierare oberoende av XML-generering.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Strömning

Ladda stora dataset i konfigurerbara block för att begränsa minnesanvändningen.

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

## Valideringstjänst

Kör hela förgenereringens valideringspipeline programmatiskt.

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

## Obligatoriska datafält

Varje betalningspost måste innehålla dessa fält. Versionsspecifika fält listas nedan.

<div class="api-fields-table" tabindex="0" aria-label="Obligatoriska datafält">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Fält</th>
        <th>Beskrivning</th>
        <th>Begränsning</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Meddelandeidentifierare</td>
          <td class="api-fields-table__constraint">Max 35 tecken</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Tidsstämpel för skapande</td>
          <td class="api-fields-table__constraint">ISO 8601-format</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Antal transaktioner</td>
          <td class="api-fields-table__constraint">Positivt heltal</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Avvecklingsmetod</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE eller INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">Identifierare från början till slut</td>
          <td class="api-fields-table__constraint">Max 35 tecken</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Interbankavvecklingsbelopp</td>
          <td class="api-fields-table__constraint">Decimal, t.ex. `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Avvecklingsvaluta</td>
          <td class="api-fields-table__constraint">ISO 4217-kod</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Avgiftsbärare</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR eller SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Gäldenärens namn</td>
          <td class="api-fields-table__constraint">Max 140 tecken</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">Gäldenärsagentens BIC</td>
          <td class="api-fields-table__constraint">8 eller 11 tecken</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">Borgenärsagentens BIC</td>
          <td class="api-fields-table__constraint">8 eller 11 tecken</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Borgenärens namn</td>
          <td class="api-fields-table__constraint">Max 140 tecken</td>
        </tr>
    </tbody>
  </table>
</div>

### Versionsspecifika fält

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Versionsspecifika fält">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Fält</th>
        <th>Beskrivning</th>
        <th>Begränsning</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Unik transaktionsreferens från början till slut</td>
          <td class="api-fields-table__constraint">UUID-format — tillgänglig från v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Mandatidentifierare</td>
          <td class="api-fields-table__constraint">Tillgänglig från v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Tidsstämpel för meddelandets utgång</td>
          <td class="api-fields-table__constraint">Tillgänglig i v13</td>
        </tr>
    </tbody>
  </table>
</div>

