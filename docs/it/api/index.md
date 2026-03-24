---
title: API | pacs008
description: Supporto flussi REST e CLI in pacs008. Generazione, validazione, orchestrazione API e conformità per i flussi di bonifico cliente tra istituzioni finanziarie.
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# API

Il progetto fornisce sia una REST API sia una CLI per i flussi operativi di elaborazione dei messaggi di pagamento.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026 usando materiali pubblici ISO 20022, EPC e Swift collegati in questa pagina.

## Note di implementazione

- Usare la generazione sincrona per controlli operativi e piccoli batch quando il chiamante si aspetta subito il file XML.
- Usare la generazione asincrona quando i file di input sono grandi, i job richiedono retry o la generazione fa parte di un processo di orchestrazione più ampio.
- Conservare sia il payload di origine sia il report di validazione affinché i team di supporto possano riprodurre l'output XML durante gli incidenti.
- Bloccare le versioni dei percorsi dei modelli XML e dei file XSD nella configurazione di distribuzione per evitare aggiornamenti silenziosi.

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

<div class="api-endpoints-table" tabindex="0" aria-label="Endpoint">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Descrizione</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Health check — restituisce lo stato del servizio</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">Valida i dati di pagamento rispetto allo schema senza generare XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">Genera XML in modo sincrono e restituisce il file</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Invia un job di generazione asincrono</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Interroga lo stato del job tramite ID</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Scarica l&#39;XML generato al completamento del job</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Annullare un job in attesa o in esecuzione</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Swagger UI interattiva per esplorare e testare tutti gli endpoint</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/it/pacs.002.001.12/) — Rapporto di stato del pagamento tra istituzioni finanziarie
- [`pacs.003.001.09`](/it/pacs.003.001.09/) — Addebito diretto cliente tra istituzioni finanziarie
- [`pacs.004.001.11`](/it/pacs.004.001.11/) — Reso di pagamento
- [`pacs.007.001.11`](/it/pacs.007.001.11/) — Storno di pagamento tra istituzioni finanziarie
- [`pacs.008.001.13`](/it/pacs.008.001.13/) — Bonifico cliente tra istituzioni finanziarie
- [`pacs.009.001.10`](/it/pacs.009.001.10/) — Bonifico tra istituzioni finanziarie
- [`pacs.010.001.05`](/it/pacs.010.001.05/) — Addebito diretto tra istituzioni finanziarie
- [`pacs.028.001.05`](/it/pacs.028.001.05/) — Richiesta di stato del pagamento tra istituzioni finanziarie

### Esempio di validazione

Invia i dati di pagamento per la validazione prima di generare XML.

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

### Esempio di generazione sincrona

Genera un file XML pacs.008.001.13 da un payload JSON.

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

### Generazione asincrona

Per file di grandi dimensioni o utilizzo in pipeline, invia un job asincrono e interroga il completamento.

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

L'interfaccia a riga di comando accetta un file di dati, una versione del messaggio, un modello XML e uno schema. Valida l'input e scrive l'XML generato nella directory di output.

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

## Docker

Esegui l'API in un container utilizzando il Dockerfile incluso.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## Validazione IBAN e BIC

Valida gli identificativi finanziari indipendentemente dalla generazione XML.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Streaming

Carica grandi set di dati in blocchi configurabili per limitare l'utilizzo di memoria.

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

## Servizio di validazione

Esegui la pipeline completa di validazione pre-generazione in modo programmatico.

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

## Campi dati obbligatori

Ogni record di pagamento deve includere i seguenti campi. I campi specifici per versione sono indicati ove applicabile.

<div class="api-fields-table" tabindex="0" aria-label="Campi dati obbligatori">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Campo</th>
        <th>Descrizione</th>
        <th>Vincolo</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Identificatore del messaggio</td>
          <td class="api-fields-table__constraint">Max 35 caratteri</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Timestamp di creazione</td>
          <td class="api-fields-table__constraint">Formato ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Numero di transazioni</td>
          <td class="api-fields-table__constraint">Numero intero positivo</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Metodo di regolamento</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE o INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">Identificatore end-to-end</td>
          <td class="api-fields-table__constraint">Max 35 caratteri</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Importo di regolamento interbancario</td>
          <td class="api-fields-table__constraint">Decimale, es. `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Valuta di regolamento</td>
          <td class="api-fields-table__constraint">Codice ISO 4217</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Portatore delle commissioni</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR o SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Nome del debitore</td>
          <td class="api-fields-table__constraint">Max 140 caratteri</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC dell&#39;agente debitore</td>
          <td class="api-fields-table__constraint">8 o 11 caratteri</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC dell&#39;agente creditore</td>
          <td class="api-fields-table__constraint">8 o 11 caratteri</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Nome del creditore</td>
          <td class="api-fields-table__constraint">Max 140 caratteri</td>
        </tr>
    </tbody>
  </table>
</div>

### Campi specifici per versione

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Campi specifici per versione">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Campo</th>
        <th>Descrizione</th>
        <th>Vincolo</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Riferimento univoco di transazione end-to-end</td>
          <td class="api-fields-table__constraint">Formato UUID — disponibile dalla v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Identificatore del mandato</td>
          <td class="api-fields-table__constraint">Disponibile dalla v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Timestamp di scadenza del messaggio</td>
          <td class="api-fields-table__constraint">Disponibile nella v13</td>
        </tr>
    </tbody>
  </table>
</div>

