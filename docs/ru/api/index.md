---
title: API | Русский
description: Поддержка рабочих процессов REST и CLI в pacs008.
lang: ru-RU
lastUpdated: true
image: /logo.svg
---

# API

Проект предоставляет как REST API, так и CLI для операционных потоков обработки платёжных сообщений.

## Установка

Установите пакет из PyPI. Требуется Python 3.9.2 или выше.

```bash
python -m pip install pacs008
```

---

## REST API

Запустите встроенный сервер FastAPI для предоставления HTTP-эндпоинтов валидации и генерации.

### Запустить сервер

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Эндпоинты

| Endpoint | Описание |
|---|---|
| `GET /health` | Проверка работоспособности — возвращает статус сервиса |
| `POST /validate` | Валидировать платёжные данные по схеме без генерации XML |
| `POST /generate` | Синхронно сгенерировать XML и вернуть файл |
| `POST /generate/async` | Отправить задание на асинхронную генерацию |
| `GET /status/{job_id}` | Опросить статус задания по идентификатору |
| `GET /download/{job_id}` | Скачать сгенерированный XML после завершения задания |
| `DELETE /jobs/{job_id}` | Отменить ожидающую или выполняемую задачу |
| `GET /docs` | Интерактивный Swagger UI для просмотра и тестирования всех эндпоинтов |

### Пример валидации

Отправьте платёжные данные для валидации перед генерацией XML.

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

### Пример синхронной генерации

Сгенерировать XML-файл pacs.008.001.13 из JSON-нагрузки.

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

### Асинхронная генерация

Для больших файлов или использования в пайплайне отправьте асинхронное задание и опрашивайте статус до завершения.

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

---

## CLI

Интерфейс командной строки принимает файл данных, версию сообщения, шаблон и схему. Он валидирует входные данные и записывает сгенерированный XML в выходной каталог.

### Базовое использование

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Пример

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Режим проверки без генерации

Используйте `--dry-run` для валидации входных данных без генерации XML. Код возврата указывает, прошла ли валидация (`0`) или завершилась с ошибкой (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Добавьте `--verbose` для подробного вывода в процессе генерации.

---

## Python API

Используйте библиотеку непосредственно в Python-скриптах или сервисах.

### Сгенерировать XML из списка платёжных записей

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

### Проверка соответствия SWIFT

Валидировать и очистить данные по правилам набора символов и длины полей SWIFT перед генерацией.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

Запустите API в контейнере с помощью прилагаемого Dockerfile.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

---

## Валидация IBAN и BIC

Проверяйте финансовые идентификаторы независимо от генерации XML.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Потоковая обработка

Загружайте большие наборы данных настраиваемыми порциями для ограничения использования памяти.

```python
from pacs008.data.loader import load_payment_data_streaming

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    print(f"Processing {len(chunk)} records")
```

---

## Сервис валидации

Запускайте полный конвейер валидации перед генерацией программно.

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

## Обязательные поля данных

Каждая платёжная запись должна содержать следующие поля. Поля, специфичные для версий, отмечены там, где применимо.

| Поле | Описание | Ограничение |
|---|---|---|
| `msg_id` | Идентификатор сообщения | Максимум 35 символов |
| `creation_date_time` | Временная метка создания | Формат ISO 8601 |
| `nb_of_txs` | Количество транзакций | Положительное целое число |
| `settlement_method` | Метод расчёта | CLRG, INDA, COVE или INGA |
| `end_to_end_id` | Сквозной идентификатор | Максимум 35 символов |
| `interbank_settlement_amount` | Сумма межбанковского расчёта | Десятичное число, например `25000.00` |
| `interbank_settlement_currency` | Валюта расчёта | Код ISO 4217 |
| `charge_bearer` | Плательщик комиссий | DEBT, CRED, SHAR или SLEV |
| `debtor_name` | Наименование дебитора | Максимум 140 символов |
| `debtor_agent_bic` | BIC агента дебитора | 8 или 11 символов |
| `creditor_agent_bic` | BIC агента кредитора | 8 или 11 символов |
| `creditor_name` | Наименование кредитора | Максимум 140 символов |

### Поля, специфичные для версий

| Поле | Описание | Ограничение |
|---|---|---|
| `uetr` | Уникальная сквозная ссылка на транзакцию | Формат UUID — доступно начиная с v08 |
| `mandate_id` | Идентификатор мандата | Доступно начиная с v10 |
| `expiry_date_time` | Временная метка истечения срока сообщения | Доступно в v13 |

