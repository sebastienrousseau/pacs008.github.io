---
title: API | Italiano
description: Supporto flussi REST e CLI in pacs008.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# API

Il progetto fornisce sia una REST API sia una CLI per i flussi operativi di elaborazione dei messaggi di pagamento.

## Installazione

Installa il pacchetto da PyPI. È richiesto Python 3.9.2 o versione successiva.

```bash
python -m pip install pacs008
```

---

## REST API

Avvia il server FastAPI integrato per esporre endpoint HTTP per la validazione e la generazione.

### Avvia il server

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Endpoint

| Endpoint | Descrizione |
|---|---|
| `GET /health` | Health check — restituisce lo stato del servizio |
| `POST /validate` | Valida i dati di pagamento rispetto allo schema senza generare XML |
| `POST /generate` | Genera XML in modo sincrono e restituisce il file |
| `POST /generate/async` | Invia un job di generazione asincrono |
| `GET /status/{job_id}` | Interroga lo stato del job tramite ID |
| `GET /download/{job_id}` | Scarica l'XML generato al completamento del job |
| `GET /docs` | Swagger UI interattiva per esplorare e testare tutti gli endpoint |

### Esempio di validazione

Invia i dati di pagamento per la validazione prima di generare XML.

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

### Esempio di generazione sincrona

Genera un file XML pacs.008.001.13 da un payload JSON.

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

### Generazione asincrona

Per file di grandi dimensioni o utilizzo in pipeline, invia un job asincrono e interroga il completamento.

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

L'interfaccia a riga di comando accetta un file di dati, una versione del messaggio, un template e uno schema. Valida l'input e scrive l'XML generato nella directory di output.

### Utilizzo di base

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Esempio

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Modalità dry-run

Usa `--dry-run` per validare i dati di input senza generare XML. Il codice di uscita indica se la validazione è riuscita (`0`) o fallita (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Aggiungi `--verbose` per un output dettagliato durante la generazione.

---

## Python API

Usa la libreria direttamente in script o servizi Python.

### Genera XML da un elenco di record di pagamento

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

### Verifica di conformità SWIFT

Valida e normalizza i dati rispetto alle regole di set di caratteri e lunghezza dei campi SWIFT prima della generazione.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Campi dati obbligatori

Ogni record di pagamento deve includere i seguenti campi. I campi specifici per versione sono indicati ove applicabile.

| Campo | Descrizione | Vincolo |
|---|---|---|
| `msg_id` | Identificatore del messaggio | Max 35 caratteri |
| `creation_date_time` | Timestamp di creazione | Formato ISO 8601 |
| `nb_of_txs` | Numero di transazioni | Numero intero positivo |
| `settlement_method` | Metodo di regolamento | CLRG, INDA, COVE o INGA |
| `end_to_end_id` | Identificatore end-to-end | Max 35 caratteri |
| `interbank_settlement_amount` | Importo di regolamento interbancario | Decimale, es. `25000.00` |
| `interbank_settlement_currency` | Valuta di regolamento | Codice ISO 4217 |
| `charge_bearer` | Portatore delle commissioni | DEBT, CRED, SHAR o SLEV |
| `debtor_name` | Nome del debitore | Max 140 caratteri |
| `debtor_agent_bic` | BIC dell'agente debitore | 8 o 11 caratteri |
| `creditor_agent_bic` | BIC dell'agente creditore | 8 o 11 caratteri |
| `creditor_name` | Nome del creditore | Max 140 caratteri |

### Campi specifici per versione

| Campo | Descrizione | Vincolo |
|---|---|---|
| `uetr` | Riferimento univoco di transazione end-to-end | Formato UUID — disponibile dalla v08 |
| `mandate_id` | Identificatore del mandato | Disponibile dalla v10 |
| `expiry_date_time` | Timestamp di scadenza del messaggio | Disponibile nella v13 |

