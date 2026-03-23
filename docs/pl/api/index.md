---
title: API | pacs008
description: Obsługa przepływów REST i CLI w pacs008. Generowanie, walidacja, orkiestracja API i wsparcie zgodności dla przepływów przelewów kredytowych klientów...
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# API

Projekt zapewnia zarówno REST API, jak i CLI do operacyjnych przepływów wiadomości płatniczych.

> Ostatnio zweryfikowano względem źródeł pierwotnych 23 marca 2026 r. z użyciem publicznych materiałów ISO 20022, EPC i Swift wskazanych na tej stronie.

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

| Endpoint | Opis |
|---|---|
| `GET /health` | Health check — zwraca status usługi |
| `POST /validate` | Waliduje dane płatności względem schematu bez generowania XML |
| `POST /generate` | Generuje XML synchronicznie i zwraca plik |
| `POST /generate/async` | Wysyła asynchroniczne zadanie generowania |
| `GET /status/{job_id}` | Odpytuje status zadania po ID |
| `GET /download/{job_id}` | Pobiera wygenerowany XML po zakończeniu zadania |
| `DELETE /jobs/{job_id}` | Anulowanie oczekującego lub trwającego zadania |
| `GET /docs` | Interaktywny Swagger UI do eksploracji i testowania wszystkich endpointów |

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

| Pole | Opis | Ograniczenie |
|---|---|---|
| `msg_id` | Identyfikator wiadomości | Maks. 35 znaków |
| `creation_date_time` | Znacznik czasu utworzenia | Format ISO 8601 |
| `nb_of_txs` | Liczba transakcji | Dodatnia liczba całkowita |
| `settlement_method` | Metoda rozrachunku | CLRG, INDA, COVE lub INGA |
| `end_to_end_id` | Identyfikator end-to-end | Maks. 35 znaków |
| `interbank_settlement_amount` | Kwota rozrachunku międzybankowego | Dziesiętna, np. `25000.00` |
| `interbank_settlement_currency` | Waluta rozrachunku | Kod ISO 4217 |
| `charge_bearer` | Płatnik prowizji | DEBT, CRED, SHAR lub SLEV |
| `debtor_name` | Nazwa dłużnika | Maks. 140 znaków |
| `debtor_agent_bic` | BIC agenta dłużnika | 8 lub 11 znaków |
| `creditor_agent_bic` | BIC agenta wierzyciela | 8 lub 11 znaków |
| `creditor_name` | Nazwa wierzyciela | Maks. 140 znaków |

### Pola specyficzne dla wersji

| Pole | Opis | Ograniczenie |
|---|---|---|
| `uetr` | Unikalny referencja transakcji end-to-end | Format UUID — dostępny od v08 |
| `mandate_id` | Identyfikator upoważnienia | Dostępny od v10 |
| `expiry_date_time` | Znacznik czasu wygaśnięcia wiadomości | Dostępny w v13 |

