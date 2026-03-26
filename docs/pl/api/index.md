---
title: "API | pacs008"
description: Obsługa przepływów REST i CLI w pacs008.
lang: pl-PL
lastUpdated: true
image: /logo.webp
---

# API

Projekt zapewnia zarówno REST API, jak i CLI do operacyjnych przepływów wiadomości płatniczych.

## Uwagi wdrożeniowe

- Używaj generowania synchronicznego do kontroli operacyjnych i małych wsadów, gdy wywołujący oczekuje XML natychmiast.
- Używaj generowania asynchronicznego, gdy pliki wejściowe są duże, zadania wymagają ponowień lub generowanie jest częścią większego silnika orkiestracji.
- Przechowuj zarówno źródłowe dane wejściowe, jak i raport walidacji, aby zespoły wsparcia mogły odtworzyć wynik XML podczas incydentu.
- Zablokuj ścieżki szablonów i XSD w konfiguracji wdrożenia, aby uniknąć cichych aktualizacji.

## Instalacja

Zainstaluj pakiet z PyPI. Wymagany jest Python 3.9.2 lub nowszy.

```bash
python -m pip install pacs008
```

---

## REST API

Uruchom wbudowany serwer FastAPI, aby udostępnić endpointy HTTP do walidacji i generowania.

### Uruchom serwer

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
        <th>Opis</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Health check — zwraca status usługi</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">Waliduje dane płatności względem schematu bez generowania XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">Generuje XML synchronicznie i zwraca plik</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Wysyła asynchroniczne zadanie generowania</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Odpytuje status zadania po ID</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Pobiera wygenerowany XML po zakończeniu zadania</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Anulowanie oczekującego lub trwającego zadania</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Interaktywny Swagger UI do eksploracji i testowania wszystkich endpointów</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/pl/pacs.002.001.12/) — Raport statusu płatności FI-do-FI
- [`pacs.003.001.09`](/pl/pacs.003.001.09/) — Polecenie zapłaty klienta FI-do-FI
- [`pacs.004.001.11`](/pl/pacs.004.001.11/) — Zwrot płatności
- [`pacs.007.001.11`](/pl/pacs.007.001.11/) — Odwrócenie płatności FI-do-FI
- [`pacs.008.001.13`](/pl/pacs.008.001.13/) — Przelew kredytowy klienta FI-do-FI
- [`pacs.009.001.10`](/pl/pacs.009.001.10/) — Przelew kredytowy między instytucjami finansowymi
- [`pacs.010.001.05`](/pl/pacs.010.001.05/) — Polecenie zapłaty między instytucjami finansowymi
- [`pacs.028.001.05`](/pl/pacs.028.001.05/) — Zapytanie o status płatności FI-do-FI

### Przykład walidacji

Wyślij dane płatności do walidacji przed generowaniem XML.

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

### Przykład generowania synchronicznego

Wygeneruj plik XML pacs.008.001.13 z ładunku JSON.

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

### Generowanie asynchroniczne

W przypadku większych plików lub potoków przetwarzania wyślij zadanie asynchroniczne i odpytuj o jego zakończenie.

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

Interfejs wiersza poleceń przyjmuje plik danych, wersję wiadomości, szablon i schemat. Waliduje dane wejściowe i zapisuje wygenerowany XML do katalogu wyjściowego.

### Podstawowe użycie

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Przykład

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Tryb dry-run

Użyj `--dry-run`, aby walidować dane wejściowe bez generowania XML. Kod wyjścia wskazuje, czy walidacja zakończyła się powodzeniem (`0`) lub niepowodzeniem (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Dodaj `--verbose`, aby uzyskać szczegółowe dane wyjściowe podczas generowania.

---

## Python API

Używaj biblioteki bezpośrednio w skryptach lub usługach Python.

### Generuj XML z listy rekordów płatności

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

### Kontrola zgodności SWIFT

Waliduj i oczyść dane zgodnie z regułami zestawu znaków i długości pól SWIFT przed generowaniem.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

Uruchom API w kontenerze, korzystając z dołączonego Dockerfile.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## Walidacja IBAN i BIC

Waliduj identyfikatory finansowe niezależnie od generowania XML.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Przetwarzanie strumieniowe

Ładuj duże zbiory danych w konfigurowalnych porcjach, aby ograniczyć zużycie pamięci.

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

## Usługa walidacji

Uruchom pełny potok walidacji przed generowaniem w sposób programistyczny.

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

## Wymagane pola danych

Każdy rekord płatności musi zawierać poniższe pola. Pola specyficzne dla wersji są oznaczone tam, gdzie ma to zastosowanie.

<div class="api-fields-table" tabindex="0" aria-label="Wymagane pola danych">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Pole</th>
        <th>Opis</th>
        <th>Ograniczenie</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Identyfikator wiadomości</td>
          <td class="api-fields-table__constraint">Maks. 35 znaków</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Znacznik czasu utworzenia</td>
          <td class="api-fields-table__constraint">Format ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Liczba transakcji</td>
          <td class="api-fields-table__constraint">Dodatnia liczba całkowita</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Metoda rozrachunku</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE lub INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">Identyfikator end-to-end</td>
          <td class="api-fields-table__constraint">Maks. 35 znaków</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Kwota rozrachunku międzybankowego</td>
          <td class="api-fields-table__constraint">Dziesiętna, np. `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Waluta rozrachunku</td>
          <td class="api-fields-table__constraint">Kod ISO 4217</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Płatnik prowizji</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR lub SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Nazwa dłużnika</td>
          <td class="api-fields-table__constraint">Maks. 140 znaków</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC agenta dłużnika</td>
          <td class="api-fields-table__constraint">8 lub 11 znaków</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC agenta wierzyciela</td>
          <td class="api-fields-table__constraint">8 lub 11 znaków</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Nazwa wierzyciela</td>
          <td class="api-fields-table__constraint">Maks. 140 znaków</td>
        </tr>
    </tbody>
  </table>
</div>

### Pola specyficzne dla wersji

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Pola specyficzne dla wersji">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Pole</th>
        <th>Opis</th>
        <th>Ograniczenie</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Unikalny referencja transakcji end-to-end</td>
          <td class="api-fields-table__constraint">Format UUID — dostępny od v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Identyfikator upoważnienia</td>
          <td class="api-fields-table__constraint">Dostępny od v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Znacznik czasu wygaśnięcia wiadomości</td>
          <td class="api-fields-table__constraint">Dostępny w v13</td>
        </tr>
    </tbody>
  </table>
</div>

