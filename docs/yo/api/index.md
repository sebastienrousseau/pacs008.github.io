---
title: "Ìtọ́kasí API pacs008 | pacs008"
description: Àtìlẹ́yìn ọ̀nà iṣẹ́ REST àti CLI nínú pacs008.
lang: yo-NG
lastUpdated: true
image: /logo.webp
---

# Ìtọ́kasí API pacs008

Iṣẹ́ náà pèsè REST API àti CLI fún àwọn ọ̀nà iṣẹ́ ìṣàkóso ìfiránṣẹ́ ìsanwó.

## Ìgbékalẹ̀

Fi àpò náà sórí ẹ̀rọ láti PyPI. Ó nílò Python 3.9.2 tàbí tí ó tẹ̀lé e.

```bash
python -m pip install pacs008
```

---

## REST API

Bẹ̀rẹ̀ olùpèsè FastAPI tí a kọ́ sínú fún pípèsè àwọn ọ̀nà HTTP fún ìṣàyẹ̀wò àti ṣíṣẹ̀dá.

### Bẹ̀rẹ̀ olùpèsè

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Àwọn ọ̀nà ìparí

<div class="api-endpoints-table" tabindex="0" aria-label="Àwọn ọ̀nà ìparí">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Àlàyé</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Àyẹ̀wò ìlera — ó dá ipò iṣẹ́ padà</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">Ṣàyẹ̀wò dátà ìsanwó lòdì sí ètò láìṣẹ̀dá XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">Ṣẹ̀dá XML ní àkókò kan náà kí o sì dá fáìlì padà</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Fi iṣẹ́ ṣíṣẹ̀dá aládàáṣe sílẹ̀</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Ṣàyẹ̀wò ipò iṣẹ́ nípasẹ̀ ID</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Gbà XML tí a ṣẹ̀dá sílẹ̀ lẹ́yìn tí iṣẹ́ bá parí</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Fagilee iṣẹ́ tí ó ń dúró de tàbí tí ó ń ṣiṣẹ́</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Swagger UI aládàáṣe fún ṣíṣàwárí àti dídán gbogbo àwọn ọ̀nà ìparí wò</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/yo/pacs.002.001.12/) — Ìròyìn ipò ìsanwó láàárín àwọn ilé-iṣẹ́ ìṣúná
- [`pacs.003.001.09`](/yo/pacs.003.001.09/) — Gbígbà owó tààrà fún oníbàárà láàárín àwọn ilé-iṣẹ́ ìṣúná
- [`pacs.004.001.11`](/yo/pacs.004.001.11/) — Ìdápadà ìsanwó
- [`pacs.007.001.11`](/yo/pacs.007.001.11/) — Ìfàgílé ìsanwó láàárín àwọn ilé-iṣẹ́ ìṣúná
- [`pacs.008.001.13`](/yo/pacs.008.001.13/) — Gbígbé owó àṣẹ fún oníbàárà láàárín àwọn ilé-iṣẹ́ ìṣúná
- [`pacs.009.001.10`](/yo/pacs.009.001.10/) — Gbígbé owó àṣẹ láàárín àwọn ilé-iṣẹ́ ìṣúná
- [`pacs.010.001.05`](/yo/pacs.010.001.05/) — Gbígbà owó tààrà láàárín àwọn ilé-iṣẹ́ ìṣúná
- [`pacs.028.001.05`](/yo/pacs.028.001.05/) — Ìbéèrè ipò ìsanwó láàárín àwọn ilé-iṣẹ́ ìṣúná

### Àpẹẹrẹ ìṣàyẹ̀wò

Fi dátà ìsanwó sílẹ̀ fún ìṣàyẹ̀wò ṣáájú ṣíṣẹ̀dá XML.

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

### Àpẹẹrẹ ṣíṣẹ̀dá ní àkókò kan náà

Ṣẹ̀dá fáìlì XML pacs.008.001.13 láti dátà JSON.

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

### Ṣíṣẹ̀dá aládàáṣe

Fún àwọn fáìlì ńlá tàbí lílo ọ̀nà, fi iṣẹ́ aládàáṣe sílẹ̀ kí o sì ṣàyẹ̀wò tí ó fi parí.

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

Ẹnu ọ̀nà ìtọ́sọ́nà laini gba fáìlì dátà, ẹ̀dà ìfiránṣẹ́, àwòṣe, àti ètò.

### Ìlò ìpìlẹ̀

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Àpẹẹrẹ

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Ìpò ìṣàyẹ̀wò gbígbẹ

Lo `--dry-run` láti ṣàyẹ̀wò dátà ìwọlé láìṣẹ̀dá XML.

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Fi `--verbose` kún fún ìjáde àlàyé nígbà ṣíṣẹ̀dá.

---

## Python API

Lo ilé ìkàwé tààrà nínú àwọn ìwé Python tàbí àwọn iṣẹ́.

### Ṣẹ̀dá XML láti àwọn àkọsílẹ̀ ìsanwó

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

### Àyẹ̀wò ìtẹ̀lé SWIFT

Ṣàyẹ̀wò kí o sì fọ́ dátà lòdì sí àwọn ìlànà ohun àmì àti gígùn pápá SWIFT ṣáájú ṣíṣẹ̀dá.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

Mú API ṣiṣẹ́ nínú àpótí nípa lílo Dockerfile tí a fi sínú.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## Ìṣàyẹ̀wò IBAN àti BIC

Ṣàyẹ̀wò àwọn àmì ìdánimọ̀ ìṣúná lọ́tọ̀ sí ṣíṣẹ̀dá XML.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Ṣíṣàn dátà

Gbé àwọn àkójọ dátà ńlá sínú àwọn ìpín tí a lè ṣètò láti dín lílo ìrántí kù.

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

## Iṣẹ́ ìṣàyẹ̀wò

Mú ọ̀nà ìṣàyẹ̀wò kíkún ṣáájú-ṣíṣẹ̀dá ṣiṣẹ́ nípasẹ̀ ètò.

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

## Àwọn pápá dátà tí a nílò

Àkọsílẹ̀ ìsanwó kọ̀ọ̀kan gbọdọ̀ ní àwọn pápá wọ̀nyí nínú.

<div class="api-fields-table" tabindex="0" aria-label="Àwọn pápá dátà tí a nílò">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Pápá</th>
        <th>Àlàyé</th>
        <th>Ìdíwọ́n</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Àmì ìdánimọ̀ ìfiránṣẹ́</td>
          <td class="api-fields-table__constraint">Ó pọ̀ jù lọ ohun àmì 35</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Àmì àkókò ṣíṣẹ̀dá</td>
          <td class="api-fields-table__constraint">Ètò ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Iye àwọn ìṣòwò</td>
          <td class="api-fields-table__constraint">Odidi rere</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Ọ̀nà ìsanwó</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE, tàbí INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">Àmì ìdánimọ̀ láti ìbẹ̀rẹ̀ dé òpin</td>
          <td class="api-fields-table__constraint">Ó pọ̀ jù lọ ohun àmì 35</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Iye ìsanwó láàárín àwọn ilé ìfowópamọ́</td>
          <td class="api-fields-table__constraint">Dẹsímálì, f.à. `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Owó ìsanwó</td>
          <td class="api-fields-table__constraint">Àmì ISO 4217</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Olùdá ìdíyelé</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR, tàbí SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Orúkọ onígbèsè</td>
          <td class="api-fields-table__constraint">Ó pọ̀ jù lọ ohun àmì 140</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC aṣojú onígbèsè</td>
          <td class="api-fields-table__constraint">Ohun àmì 8 tàbí 11</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC aṣojú olùgbàmú</td>
          <td class="api-fields-table__constraint">Ohun àmì 8 tàbí 11</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Orúkọ olùgbàmú</td>
          <td class="api-fields-table__constraint">Ó pọ̀ jù lọ ohun àmì 140</td>
        </tr>
    </tbody>
  </table>
</div>

### Àwọn pápá tí ó kan ẹ̀dà kan pàtó

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Àwọn pápá tí ó kan ẹ̀dà kan pàtó">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Pápá</th>
        <th>Àlàyé</th>
        <th>Ìdíwọ́n</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Ìtọ́kasí ìṣòwò aláìlẹ́gbẹ́ láti ìbẹ̀rẹ̀ dé òpin</td>
          <td class="api-fields-table__constraint">Ètò UUID — ó wà láti v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Àmì ìdánimọ̀ àṣẹ</td>
          <td class="api-fields-table__constraint">Ó wà láti v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Àmì àkókò ìparí ìfiránṣẹ́</td>
          <td class="api-fields-table__constraint">Ó wà ní v13</td>
        </tr>
    </tbody>
  </table>
</div>

