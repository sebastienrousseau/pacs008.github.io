---
title: API | Українська
description: Підтримка робочих процесів REST та CLI у Pacs008.
lang: uk-UA
lastUpdated: true
image: /logo.svg
---

# API

Проєкт надає як REST API, так і CLI для операційних потоків обробки платіжних повідомлень.

## Встановлення

Встановіть пакет із PyPI. Потрібен Python 3.9.2 або вище.

```bash
python -m pip install pacs008
```

---

## REST API

Запустіть вбудований сервер FastAPI для надання HTTP-ендпоінтів валідації та генерації.

### Запустити сервер

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Ендпоінти

| Endpoint | Опис |
|---|---|
| `GET /health` | Перевірка стану — повертає статус сервісу |
| `POST /validate` | Валідувати платіжні дані за схемою без генерації XML |
| `POST /generate` | Синхронно згенерувати XML і повернути файл |
| `POST /generate/async` | Надіслати завдання на асинхронну генерацію |
| `GET /status/{job_id}` | Опитати статус завдання за ідентифікатором |
| `GET /download/{job_id}` | Завантажити згенерований XML після завершення завдання |
| `GET /docs` | Інтерактивний Swagger UI для перегляду та тестування всіх ендпоінтів |

### Приклад валідації

Надішліть платіжні дані для валідації перед генерацією XML.

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

### Приклад синхронної генерації

Згенерувати XML-файл pacs.008.001.13 із JSON-навантаження.

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

### Асинхронна генерація

Для великих файлів або використання в пайплайні надішліть асинхронне завдання та опитуйте статус до завершення.

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

Інтерфейс командного рядка приймає файл даних, версію повідомлення, шаблон і схему. Він валідує вхідні дані та записує згенерований XML у вихідний каталог.

### Базове використання

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Приклад

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Режим перевірки без генерації

Використовуйте `--dry-run` для валідації вхідних даних без генерації XML. Код завершення вказує, чи пройшла валідація (`0`) або завершилась з помилкою (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Додайте `--verbose` для докладного виведення під час генерації.

---

## Python API

Використовуйте бібліотеку безпосередньо в Python-скриптах або сервісах.

### Згенерувати XML зі списку платіжних записів

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

### Перевірка відповідності SWIFT

Валідуйте та очищайте дані за правилами набору символів і довжини полів SWIFT перед генерацією.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Обов'язкові поля даних

Кожен платіжний запис повинен містити наступні поля. Поля, специфічні для версій, відзначені там, де застосовно.

| Поле | Опис | Обмеження |
|---|---|---|
| `msg_id` | Ідентифікатор повідомлення | Максимум 35 символів |
| `creation_date_time` | Мітка часу створення | Формат ISO 8601 |
| `nb_of_txs` | Кількість транзакцій | Позитивне ціле число |
| `settlement_method` | Метод розрахунку | CLRG, INDA, COVE або INGA |
| `end_to_end_id` | Наскрізний ідентифікатор | Максимум 35 символів |
| `interbank_settlement_amount` | Сума міжбанківського розрахунку | Десяткове число, наприклад `25000.00` |
| `interbank_settlement_currency` | Валюта розрахунку | Код ISO 4217 |
| `charge_bearer` | Платник комісій | DEBT, CRED, SHAR або SLEV |
| `debtor_name` | Найменування дебітора | Максимум 140 символів |
| `debtor_agent_bic` | BIC агента дебітора | 8 або 11 символів |
| `creditor_agent_bic` | BIC агента кредитора | 8 або 11 символів |
| `creditor_name` | Найменування кредитора | Максимум 140 символів |

### Поля, специфічні для версій

| Поле | Опис | Обмеження |
|---|---|---|
| `uetr` | Унікальне наскрізне посилання на транзакцію | Формат UUID — доступно починаючи з v08 |
| `mandate_id` | Ідентифікатор мандата | Доступно починаючи з v10 |
| `expiry_date_time` | Мітка часу закінчення строку дії повідомлення | Доступно у v13 |

