---
title: "pacs008 API Reference | pacs008"
description: REST at CLI workflow support sa pacs008.
lang: tl-PH
lastUpdated: true
image: /logo.webp
---

# pacs008 API Reference

Ang proyekto ay nagbibigay ng parehong REST API at CLI para sa mga operational na workflow ng pagproseso ng mensahe ng pagbabayad.

## Pag-install

I-install ang package mula sa PyPI. Nangangailangan ng Python 3.9.2 o mas bago.

```bash
python -m pip install pacs008
```

---

## REST API

Simulan ang built-in na FastAPI server upang magbigay ng HTTP endpoint para sa validation at generation.

### Simulan ang server

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Mga Endpoint

<div class="api-endpoints-table" tabindex="0" aria-label="Mga Endpoint">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Paglalarawan</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Health check — nagbabalik ng katayuan ng serbisyo</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">I-validate ang datos ng pagbabayad laban sa schema nang hindi gumagawa ng XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">Gumawa ng XML nang sabay-sabay at ibalik ang file</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Magsumite ng asynchronous na trabaho ng generation</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Suriin ang katayuan ng trabaho ayon sa ID</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">I-download ang nabuong XML pagkatapos makumpleto ang trabaho</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Kanselahin ang nakabinbin o tumatakbong trabaho</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Interactive na Swagger UI para sa paggalugad at pagsubok ng lahat ng endpoint</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/tl/pacs.002.001.12/) — Ulat ng kalagayan ng pagbabayad sa pagitan ng mga institusyong pinansyal
- [`pacs.003.001.09`](/tl/pacs.003.001.09/) — Direct debit ng kliyente sa pagitan ng mga institusyong pinansyal
- [`pacs.004.001.11`](/tl/pacs.004.001.11/) — Pagbabalik ng bayad
- [`pacs.007.001.11`](/tl/pacs.007.001.11/) — Pagbaligtad ng bayad sa pagitan ng mga institusyong pinansyal
- [`pacs.008.001.13`](/tl/pacs.008.001.13/) — Credit transfer ng kliyente sa pagitan ng mga institusyong pinansyal
- [`pacs.009.001.10`](/tl/pacs.009.001.10/) — Credit transfer sa pagitan ng mga institusyong pinansyal
- [`pacs.010.001.05`](/tl/pacs.010.001.05/) — Direct debit sa pagitan ng mga institusyong pinansyal
- [`pacs.028.001.05`](/tl/pacs.028.001.05/) — Kahilingan ng kalagayan ng bayad sa pagitan ng mga institusyong pinansyal

### Halimbawa ng validation

Magsumite ng datos ng pagbabayad para sa validation bago gumawa ng XML.

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

### Halimbawa ng synchronous na generation

Gumawa ng XML file na pacs.008.001.13 mula sa datos na JSON.

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

### Asynchronous na generation

Para sa mas malalaking file o paggamit sa pipeline, magsumite ng asynchronous na trabaho at mag-poll hanggang sa makumpleto.

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

Ang command-line interface ay tumatanggap ng data file, bersyon ng mensahe, template, at schema. Vine-validate nito ang input at isinusulat ang nabuong XML sa output directory.

### Pangunahing paggamit

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Halimbawa

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Dry-run mode

Gamitin ang `--dry-run` para i-validate ang input data nang hindi gumagawa ng XML. Ang exit code ay nagpapakita kung pumasa (`0`) o nabigo (`1`) ang validation.

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Magdagdag ng `--verbose` para sa detalyadong output sa panahon ng generation.

---

## Python API

Gamitin ang library nang direkta sa mga Python script o serbisyo.

### Gumawa ng XML mula sa mga record ng pagbabayad

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

Suriin at linisin ang datos laban sa mga patakaran ng character at haba ng field ng SWIFT bago ang generation.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

Patakbuhin ang API sa isang container gamit ang kasama na Dockerfile.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## Validation ng IBAN at BIC

I-validate ang mga financial identifier nang hiwalay sa XML generation.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Streaming

I-load ang malalaking dataset sa mga nako-configure na tipak upang limitahan ang paggamit ng memory.

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

## Serbisyo ng validation

Patakbuhin ang buong pre-generation validation pipeline nang programmatically.

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

## Mga kinakailangang data field

Bawat record ng pagbabayad ay dapat maglaman ng mga field na ito. Ang mga field na tukoy sa bersyon ay nakalista sa ibaba.

<div class="api-fields-table" tabindex="0" aria-label="Mga kinakailangang data field">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Field</th>
        <th>Paglalarawan</th>
        <th>Limitasyon</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Identifier ng mensahe</td>
          <td class="api-fields-table__constraint">Pinakamataas na 35 character</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Timestamp ng paglikha</td>
          <td class="api-fields-table__constraint">Format na ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Bilang ng mga transaksyon</td>
          <td class="api-fields-table__constraint">Positibong integer</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Paraan ng settlement</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE, o INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">End-to-end identifier</td>
          <td class="api-fields-table__constraint">Pinakamataas na 35 character</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Interbank settlement amount</td>
          <td class="api-fields-table__constraint">Decimal, hal. `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Settlement currency</td>
          <td class="api-fields-table__constraint">ISO 4217 code</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Charge bearer</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR, o SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Pangalan ng debtor</td>
          <td class="api-fields-table__constraint">Pinakamataas na 140 character</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC ng debtor agent</td>
          <td class="api-fields-table__constraint">8 o 11 character</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC ng creditor agent</td>
          <td class="api-fields-table__constraint">8 o 11 character</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Pangalan ng creditor</td>
          <td class="api-fields-table__constraint">Pinakamataas na 140 character</td>
        </tr>
    </tbody>
  </table>
</div>

### Mga field na tukoy sa bersyon

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Mga field na tukoy sa bersyon">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Field</th>
        <th>Paglalarawan</th>
        <th>Limitasyon</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Natatanging reperensya ng transaksyon mula simula hanggang dulo</td>
          <td class="api-fields-table__constraint">Format na UUID — available mula v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Identifier ng mandato</td>
          <td class="api-fields-table__constraint">Available mula v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Timestamp ng pag-expire ng mensahe</td>
          <td class="api-fields-table__constraint">Available sa v13</td>
        </tr>
    </tbody>
  </table>
</div>

