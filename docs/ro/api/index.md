---
title: API | Română
description: Suport pentru fluxuri REST și CLI în pacs008.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# API

Proiectul oferă atât un REST API, cât și un CLI pentru fluxurile operaționale de mesaje de plăți.

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

| Endpoint | Descriere |
|---|---|
| `GET /health` | Health check — returnează starea serviciului |
| `POST /validate` | Validează datele de plată față de schemă fără a genera XML |
| `POST /generate` | Generează XML sincron și returnează fișierul |
| `POST /generate/async` | Trimite un job de generare asincron |
| `GET /status/{job_id}` | Interoghează starea jobului după ID |
| `GET /download/{job_id}` | Descarcă XML-ul generat după finalizarea jobului |
| `GET /docs` | Swagger UI interactiv pentru explorarea și testarea tuturor endpoint-urilor |

### Exemplu de validare

Trimiteți date de plată pentru validare înainte de a genera XML.

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

### Exemplu de generare sincronă

Generați un fișier XML pacs.008.001.13 dintr-un payload JSON.

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

### Generare asincronă

Pentru fișiere mai mari sau utilizare în pipeline, trimiteți un job asincron și interogați finalizarea.

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

## Câmpuri de date obligatorii

Fiecare înregistrare de plată trebuie să includă câmpurile de mai jos. Câmpurile specifice versiunii sunt menționate acolo unde este aplicabil.

| Câmp | Descriere | Constrângere |
|---|---|---|
| `msg_id` | Identificator mesaj | Max. 35 de caractere |
| `creation_date_time` | Marcaj temporal de creare | Format ISO 8601 |
| `nb_of_txs` | Număr de tranzacții | Număr întreg pozitiv |
| `settlement_method` | Metodă de decontare | CLRG, INDA, COVE sau INGA |
| `end_to_end_id` | Identificator end-to-end | Max. 35 de caractere |
| `interbank_settlement_amount` | Suma de decontare interbancară | Zecimal, ex.: `25000.00` |
| `interbank_settlement_currency` | Moneda de decontare | Cod ISO 4217 |
| `charge_bearer` | Purtătorul taxelor | DEBT, CRED, SHAR sau SLEV |
| `debtor_name` | Numele debitorului | Max. 140 de caractere |
| `debtor_agent_bic` | BIC agentul debitorului | 8 sau 11 caractere |
| `creditor_agent_bic` | BIC agentul creditorului | 8 sau 11 caractere |
| `creditor_name` | Numele creditorului | Max. 140 de caractere |

### Câmpuri specifice versiunii

| Câmp | Descriere | Constrângere |
|---|---|---|
| `uetr` | Referință unică de tranzacție end-to-end | Format UUID — disponibil începând cu v08 |
| `mandate_id` | Identificator mandat | Disponibil începând cu v10 |
| `expiry_date_time` | Marcaj temporal de expirare a mesajului | Disponibil în v13 |

