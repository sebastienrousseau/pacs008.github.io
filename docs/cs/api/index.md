---
title: "Reference API pacs008 | pacs008"
description: Podpora REST a CLI pracovních postupů v pacs008.
lang: cs-CZ
lastUpdated: true
image: /logo.webp
---

# Reference API pacs008

Projekt poskytuje REST API i CLI pro provozní pracovní postupy zpracování platebních zpráv.

## Instalace

Nainstalujte balíček z PyPI. Vyžaduje Python 3.9.2 nebo novější.

```bash
python -m pip install pacs008
```

---

## REST API

Spusťte vestavěný FastAPI server pro obsluhu HTTP endpointů pro validaci a generování.

### Spustit server

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Endpointy

<div class="api-endpoints-table" tabindex="0" aria-label="Endpointy">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Popis</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Kontrola stavu — vrátí stav služby</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">Validace platebních dat proti schématu bez generování XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">Synchronní generování XML a vrácení souboru</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Odeslání asynchronní generovací úlohy</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Dotaz na stav úlohy podle ID</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Stažení vygenerovaného XML po dokončení úlohy</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Zrušit čekající nebo běžící úlohu</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Interaktivní Swagger UI pro prozkoumání a testování všech endpointů</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/cs/pacs.002.001.12/) — Zpráva o stavu platby mezi finančními institucemi
- [`pacs.003.001.09`](/cs/pacs.003.001.09/) — Přímý inkaso zákazníka mezi finančními institucemi
- [`pacs.004.001.11`](/cs/pacs.004.001.11/) — Vrácení platby
- [`pacs.007.001.11`](/cs/pacs.007.001.11/) — Storno platby mezi finančními institucemi
- [`pacs.008.001.13`](/cs/pacs.008.001.13/) — Úhrada zákazníka mezi finančními institucemi
- [`pacs.009.001.10`](/cs/pacs.009.001.10/) — Úhrada mezi finančními institucemi
- [`pacs.010.001.05`](/cs/pacs.010.001.05/) — Přímý inkaso mezi finančními institucemi
- [`pacs.028.001.05`](/cs/pacs.028.001.05/) — Dotaz na stav platby mezi finančními institucemi

### Příklad validace

Odešlete platební data k validaci před generováním XML.

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

### Příklad synchronního generování

Vygenerujte soubor XML pacs.008.001.13 z JSON dat.

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

### Asynchronní generování

Pro větší soubory nebo použití v pipeline odešlete asynchronní úlohu a dotazujte se na její dokončení.

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

Rozhraní příkazového řádku přijímá datový soubor, verzi zprávy, šablonu a schéma. Validuje vstup a zapisuje vygenerované XML do výstupního adresáře.

### Základní použití

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Příklad

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Režim suchého běhu

Použijte `--dry-run` k validaci vstupních dat bez generování XML. Návratový kód ukazuje, zda validace prošla (`0`) nebo selhala (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Přidejte `--verbose` pro podrobný výstup během generování.

---

## Python API

Použijte knihovnu přímo v Python skriptech nebo službách.

### Generování XML z platebních záznamů

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

### Kontrola souladu se SWIFT

Kontrola a čištění dat proti pravidlům znakové sady a délky polí SWIFT před generováním.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

Spusťte API v kontejneru pomocí přiloženého Dockerfile.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## Validace IBAN a BIC

Validujte finanční identifikátory nezávisle na generování XML.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Streaming

Načítejte velké datové sady v konfigurovatelných blocích pro omezení využití paměti.

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

## Validační služba

Spusťte úplný předgenerační validační řetězec programově.

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

## Povinná datová pole

Každý platební záznam musí obsahovat tato pole. Pole specifická pro verzi jsou uvedena níže.

<div class="api-fields-table" tabindex="0" aria-label="Povinná datová pole">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Pole</th>
        <th>Popis</th>
        <th>Omezení</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Identifikátor zprávy</td>
          <td class="api-fields-table__constraint">Max. 35 znaků</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Časové razítko vytvoření</td>
          <td class="api-fields-table__constraint">Formát ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Počet transakcí</td>
          <td class="api-fields-table__constraint">Kladné celé číslo</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Metoda vypořádání</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE nebo INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">Identifikátor end-to-end</td>
          <td class="api-fields-table__constraint">Max. 35 znaků</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Mezibankovní vypořádací částka</td>
          <td class="api-fields-table__constraint">Desetinné číslo, např. `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Měna vypořádání</td>
          <td class="api-fields-table__constraint">Kód ISO 4217</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Nositel poplatků</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR nebo SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Jméno dlužníka</td>
          <td class="api-fields-table__constraint">Max. 140 znaků</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC agenta dlužníka</td>
          <td class="api-fields-table__constraint">8 nebo 11 znaků</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC agenta věřitele</td>
          <td class="api-fields-table__constraint">8 nebo 11 znaků</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Jméno věřitele</td>
          <td class="api-fields-table__constraint">Max. 140 znaků</td>
        </tr>
    </tbody>
  </table>
</div>

### Pole specifická pro verzi

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Pole specifická pro verzi">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Pole</th>
        <th>Popis</th>
        <th>Omezení</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Jedinečná reference transakce end-to-end</td>
          <td class="api-fields-table__constraint">Formát UUID — dostupný od v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Identifikátor mandátu</td>
          <td class="api-fields-table__constraint">Dostupný od v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Časové razítko expirace zprávy</td>
          <td class="api-fields-table__constraint">Dostupný ve v13</td>
        </tr>
    </tbody>
  </table>
</div>

