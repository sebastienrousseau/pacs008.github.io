---
title: API | pacs008
description: Suport pentru fluxuri REST și CLI în pacs008.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# API

Proiectul oferă atât un REST API, cât și un CLI pentru fluxurile operaționale de mesaje de plăți.

## Note de implementare

- Folosește generarea sincronă pentru verificări operaționale și loturi mici când apelantul așteaptă XML imediat.
- Folosește generarea asincronă când fișierele de intrare sunt mari, joburile trebuie reluate sau generarea face parte dintr-un motor de orchestrare mai amplu.
- Păstrează atât datele sursă de intrare, cât și raportul de validare, astfel încât echipele de suport să poată reproduce ieșirea XML în timpul incidentelor.
- Fixează căile către șabloane și XSD în configurația de implementare pentru a evita upgrade-urile silențioase.

## Instalare

Instalați pachetul din PyPI. Este necesar Python 3.9.2 sau o versiune superioară.

```bash
python -m pip install pacs008
```

---

## REST API

Porniți serverul FastAPI integrat pentru a expune endpoint-uri HTTP pentru validare și generare.

### Pornire server

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Endpoint-uri

<div class="api-endpoints-table" tabindex="0" aria-label="Endpoint-uri">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Descriere</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Health check — returnează starea serviciului</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">Validează datele de plată față de schemă fără a genera XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">Generează XML sincron și returnează fișierul</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Trimite un job de generare asincron</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Interoghează starea jobului după ID</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Descarcă XML-ul generat după finalizarea jobului</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Anularea unei sarcini în așteptare sau în curs de execuție</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Swagger UI interactiv pentru explorarea și testarea tuturor endpoint-urilor</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/ro/pacs.002.001.12/) — Raport de stare a plății FI-la-FI
- [`pacs.003.001.09`](/ro/pacs.003.001.09/) — Debit direct de client FI-la-FI
- [`pacs.004.001.11`](/ro/pacs.004.001.11/) — Retur de plată
- [`pacs.007.001.11`](/ro/pacs.007.001.11/) — Reversare de plată FI-la-FI
- [`pacs.008.001.13`](/ro/pacs.008.001.13/) — Transfer de credit client FI-la-FI
- [`pacs.009.001.10`](/ro/pacs.009.001.10/) — Transfer de credit între instituții financiare
- [`pacs.010.001.05`](/ro/pacs.010.001.05/) — Debit direct între instituții financiare
- [`pacs.028.001.05`](/ro/pacs.028.001.05/) — Cerere de stare a plății FI-la-FI

### Exemplu de validare

Trimiteți date de plată pentru validare înainte de a genera XML.

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

### Exemplu de generare sincronă

Generați un fișier XML pacs.008.001.13 din date JSON.

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

### Generare asincronă

Pentru fișiere mai mari sau utilizare în pipeline, trimiteți un job asincron și interogați finalizarea.

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

Interfața în linie de comandă acceptă un fișier de date, o versiune de mesaj, un șablon și o schemă. Validează datele de intrare și scrie XML-ul generat în directorul de ieșire.

### Utilizare de bază

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Exemplu

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Modul dry-run

Utilizați `--dry-run` pentru a valida datele de intrare fără a genera XML. Codul de ieșire indică dacă validarea a trecut (`0`) sau a eșuat (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Adăugați `--verbose` pentru ieșire detaliată în timpul generării.

---

## Python API

Utilizați biblioteca direct în scripturi sau servicii Python.

### Generați XML dintr-o listă de înregistrări de plată

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

### Verificare de conformitate SWIFT

Validați și curățați datele față de regulile de set de caractere și lungime a câmpurilor SWIFT înainte de generare.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

Rulați API-ul într-un container folosind Dockerfile-ul inclus.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## Validare IBAN și BIC

Validați identificatorii financiari independent de generarea XML.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Streaming

Încărcați seturi mari de date în loturi configurabile pentru a limita utilizarea memoriei.

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

## Serviciu de validare

Rulați pipeline-ul complet de validare pre-generare în mod programatic.

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

## Câmpuri de date obligatorii

Fiecare înregistrare de plată trebuie să includă câmpurile de mai jos. Câmpurile specifice versiunii sunt menționate acolo unde este aplicabil.

<div class="api-fields-table" tabindex="0" aria-label="Câmpuri de date obligatorii">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Câmp</th>
        <th>Descriere</th>
        <th>Constrângere</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Identificator mesaj</td>
          <td class="api-fields-table__constraint">Max. 35 de caractere</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Marcaj temporal de creare</td>
          <td class="api-fields-table__constraint">Format ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Număr de tranzacții</td>
          <td class="api-fields-table__constraint">Număr întreg pozitiv</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Metodă de decontare</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE sau INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">Identificator end-to-end</td>
          <td class="api-fields-table__constraint">Max. 35 de caractere</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Suma de decontare interbancară</td>
          <td class="api-fields-table__constraint">Zecimal, ex.: `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Moneda de decontare</td>
          <td class="api-fields-table__constraint">Cod ISO 4217</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Purtătorul taxelor</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR sau SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Numele debitorului</td>
          <td class="api-fields-table__constraint">Max. 140 de caractere</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC agentul debitorului</td>
          <td class="api-fields-table__constraint">8 sau 11 caractere</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC agentul creditorului</td>
          <td class="api-fields-table__constraint">8 sau 11 caractere</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Numele creditorului</td>
          <td class="api-fields-table__constraint">Max. 140 de caractere</td>
        </tr>
    </tbody>
  </table>
</div>

### Câmpuri specifice versiunii

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Câmpuri specifice versiunii">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Câmp</th>
        <th>Descriere</th>
        <th>Constrângere</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Referință unică de tranzacție end-to-end</td>
          <td class="api-fields-table__constraint">Format UUID — disponibil începând cu v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Identificator mandat</td>
          <td class="api-fields-table__constraint">Disponibil începând cu v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Marcaj temporal de expirare a mesajului</td>
          <td class="api-fields-table__constraint">Disponibil în v13</td>
        </tr>
    </tbody>
  </table>
</div>

