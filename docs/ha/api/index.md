---
title: "Bayyanar API na pacs008 | pacs008"
description: Tallafin ayyukan REST da CLI a cikin pacs008.
lang: ha-NG
lastUpdated: true
image: /logo.webp
---

# Bayyanar API na pacs008

Aikin yana ba da REST API da CLI don ayyukan sarrafa saƙonnin biyan kuɗi.

## Shigarwa

Shigar da fakitin daga PyPI. Ana buƙatar Python 3.9.2 ko na baya.

```bash
python -m pip install pacs008
```

---

## REST API

Fara sabar FastAPI ɗin da aka gina a ciki don samar da ƙarshen HTTP don tabbatarwa da ƙirƙira.

### Fara sabar

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Ƙarshen hanyoyi

<div class="api-endpoints-table" tabindex="0" aria-label="Ƙarshen hanyoyi">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Bayani</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Binciken lafiya — yana mayar da matsayin sabis</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">Tabbatar da bayanan biyan kuɗi akan tsari ba tare da ƙirƙirar XML ba</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">Ƙirƙirar XML a daidai lokaci kuma mayar da fayil</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Ƙaddamar da aikin ƙirƙira mara daidaituwa</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Bincika matsayin aiki ta ID</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Saukar da XML ɗin da aka ƙirƙira bayan aikin ya kammala</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Soke aikin da ke jira ko wanda ke gudana</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Swagger UI mai hulɗa don bincika da gwada duk ƙarshen hanyoyi</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/ha/pacs.002.001.12/) — Rahoton matsayin biyan kuɗi tsakanin cibiyoyin kuɗi
- [`pacs.003.001.09`](/ha/pacs.003.001.09/) — Cire kuɗi kai tsaye na abokin ciniki tsakanin cibiyoyin kuɗi
- [`pacs.004.001.11`](/ha/pacs.004.001.11/) — Mayar da biyan kuɗi
- [`pacs.007.001.11`](/ha/pacs.007.001.11/) — Soke biyan kuɗi tsakanin cibiyoyin kuɗi
- [`pacs.008.001.13`](/ha/pacs.008.001.13/) — Canja wurin kuɗi na abokin ciniki tsakanin cibiyoyin kuɗi
- [`pacs.009.001.10`](/ha/pacs.009.001.10/) — Canja wurin kuɗi tsakanin cibiyoyin kuɗi
- [`pacs.010.001.05`](/ha/pacs.010.001.05/) — Cire kuɗi kai tsaye tsakanin cibiyoyin kuɗi
- [`pacs.028.001.05`](/ha/pacs.028.001.05/) — Neman matsayin biyan kuɗi tsakanin cibiyoyin kuɗi

### Misalin tabbatarwa

Ƙaddamar da bayanan biyan kuɗi don tabbatarwa kafin ƙirƙirar XML.

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

### Misalin ƙirƙira a daidai lokaci

Ƙirƙirar fayilin XML pacs.008.001.13 daga bayanan JSON.

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

### Ƙirƙira mara daidaituwa

Don manyan fayiloli ko amfani da bututu, ƙaddamar da aikin mara daidaituwa kuma bincika har sai ya kammala.

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

Hanyar layin umarni tana karɓar fayilin bayanai, sigar saƙo, samfuri, da tsari. Tana tabbatar da shigarwa kuma tana rubuta XML ɗin da aka ƙirƙira zuwa kundin fitarwa.

### Amfani na asali

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Misali

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Yanayin gwaji-bushewa

Yi amfani da `--dry-run` don tabbatar da bayanan shigarwa ba tare da ƙirƙirar XML ba. Lambar fitarwa tana nuna ko tabbatarwa ta wuce (`0`) ko ta gaza (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Ƙara `--verbose` don cikakken fitarwa yayin ƙirƙira.

---

## Python API

Yi amfani da ɗakin karatu kai tsaye a cikin rubutun Python ko sabis.

### Ƙirƙirar XML daga bayanan biyan kuɗi

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

### Binciken biyayya na SWIFT

Bincika kuma tsaftace bayanai akan ƙa'idodin haruffa da tsawon fili na SWIFT kafin ƙirƙira.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

Gudanar da API a cikin akwati ta amfani da Dockerfile ɗin da aka haɗa.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## Tabbatar da IBAN da BIC

Tabbatar da masu ganowa na kuɗi daban da ƙirƙirar XML.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Kwararar bayanai

Ɗaukar manyan bayanan bayanai a cikin guntaye masu iya saiti don iyakance amfani da ƙwaƙwalwar ajiya.

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

## Sabis na tabbatarwa

Gudanar da cikakken bututun tabbatarwa kafin ƙirƙira ta hanyar shirye-shirye.

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

## Filayen bayanai da ake buƙata

Kowane rikodin biyan kuɗi dole ne ya ƙunshi waɗannan filaye. Filayen da suka danganci siga an lissafa su a ƙasa.

<div class="api-fields-table" tabindex="0" aria-label="Filayen bayanai da ake buƙata">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Fili</th>
        <th>Bayani</th>
        <th>Ƙayyadaddun sharadi</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Mai ganowa saƙo</td>
          <td class="api-fields-table__constraint">Mafi yawan haruffa 35</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Tambarin lokaci na ƙirƙira</td>
          <td class="api-fields-table__constraint">Tsarin ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Adadin ciniki</td>
          <td class="api-fields-table__constraint">Adadi mai kyau</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Hanyar biyan kuɗi</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE, ko INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">Mai ganowa daga farko zuwa ƙarshe</td>
          <td class="api-fields-table__constraint">Mafi yawan haruffa 35</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Adadin biyan kuɗi tsakanin bankuna</td>
          <td class="api-fields-table__constraint">Adadi mai dasimai, misali `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Kuɗin biyan kuɗi</td>
          <td class="api-fields-table__constraint">Lambar ISO 4217</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Mai ɗaukar cajin</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR, ko SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Sunan mai bashi</td>
          <td class="api-fields-table__constraint">Mafi yawan haruffa 140</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC na wakilin mai bashi</td>
          <td class="api-fields-table__constraint">Haruffa 8 ko 11</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC na wakilin mai ba da bashi</td>
          <td class="api-fields-table__constraint">Haruffa 8 ko 11</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Sunan mai ba da bashi</td>
          <td class="api-fields-table__constraint">Mafi yawan haruffa 140</td>
        </tr>
    </tbody>
  </table>
</div>

### Filayen da suka danganci siga

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Filayen da suka danganci siga">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Fili</th>
        <th>Bayani</th>
        <th>Ƙayyadaddun sharadi</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Nassarin ciniki na musamman daga farko zuwa ƙarshe</td>
          <td class="api-fields-table__constraint">Tsarin UUID — yana samuwa daga v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Mai ganowa izini</td>
          <td class="api-fields-table__constraint">Yana samuwa daga v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Tambarin lokaci na ƙarewar saƙo</td>
          <td class="api-fields-table__constraint">Yana samuwa a v13</td>
        </tr>
    </tbody>
  </table>
</div>

