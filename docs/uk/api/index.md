---
title: "API | pacs008"
description: Підтримка робочих процесів REST та CLI у pacs008.
lang: uk-UA
lastUpdated: true
image: /logo.webp
---

# API

Проєкт надає як REST API, так і CLI для операційних потоків обробки платіжних повідомлень.

## Нотатки з впровадження

- Використовуйте синхронне генерування для операторських перевірок і невеликих пакетів, коли викликач очікує негайний XML-файл.
- Використовуйте асинхронне генерування, коли вхідні файли великі, потрібні повторні спроби або генерування є частиною ширшого оркестраційного процесу.
- Зберігайте і вихідні вхідні дані, і звіт валідації, щоб служба підтримки могла відтворити XML під час інциденту.
- Фіксуйте шляхи до шаблонів і XSD у конфігурації розгортання, щоб уникнути непомітних оновлень.

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

<div class="api-endpoints-table" tabindex="0" aria-label="Ендпоінти">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Опис</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Перевірка стану — повертає статус сервісу</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">Валідувати платіжні дані за схемою без генерації XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">Синхронно згенерувати XML і повернути файл</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Надіслати завдання на асинхронну генерацію</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Опитати статус завдання за ідентифікатором</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Завантажити згенерований XML після завершення завдання</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Скасувати очікувану або виконувану задачу</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Інтерактивний Swagger UI для перегляду та тестування всіх ендпоінтів</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/uk/pacs.002.001.12/) — Звіт про статус платежу між фінансовими установами
- [`pacs.003.001.09`](/uk/pacs.003.001.09/) — Клієнтське пряме дебетування між фінансовими установами
- [`pacs.004.001.11`](/uk/pacs.004.001.11/) — Повернення платежу
- [`pacs.007.001.11`](/uk/pacs.007.001.11/) — Сторнування платежу між фінансовими установами
- [`pacs.008.001.13`](/uk/pacs.008.001.13/) — Клієнтський кредитовий переказ між фінансовими установами
- [`pacs.009.001.10`](/uk/pacs.009.001.10/) — Кредитовий переказ між фінансовими установами
- [`pacs.010.001.05`](/uk/pacs.010.001.05/) — Пряме дебетування між фінансовими установами
- [`pacs.028.001.05`](/uk/pacs.028.001.05/) — Запит статусу платежу між фінансовими установами

### Приклад валідації

Надішліть платіжні дані для валідації перед генерацією XML.

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

### Приклад синхронної генерації

Згенерувати XML-файл pacs.008.001.13 із даних JSON.

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

### Асинхронна генерація

Для великих файлів або використання в пайплайні надішліть асинхронне завдання та опитуйте статус до завершення.

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

## Docker

Запустіть API у контейнері за допомогою наданого Dockerfile.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## Валідація IBAN та BIC

Перевіряйте фінансові ідентифікатори незалежно від генерації XML.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Потокова обробка

Завантажуйте великі набори даних налаштовуваними порціями для обмеження використання пам'яті.

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

## Сервіс валідації

Запускайте повний конвеєр валідації перед генерацією програмно.

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

## Обов'язкові поля даних

Кожен платіжний запис повинен містити наступні поля. Поля, специфічні для версій, відзначені там, де застосовно.

<div class="api-fields-table" tabindex="0" aria-label="Обов&#39;язкові поля даних">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Поле</th>
        <th>Опис</th>
        <th>Обмеження</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Ідентифікатор повідомлення</td>
          <td class="api-fields-table__constraint">Максимум 35 символів</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Мітка часу створення</td>
          <td class="api-fields-table__constraint">Формат ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Кількість транзакцій</td>
          <td class="api-fields-table__constraint">Позитивне ціле число</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Метод розрахунку</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE або INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">Наскрізний ідентифікатор</td>
          <td class="api-fields-table__constraint">Максимум 35 символів</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Сума міжбанківського розрахунку</td>
          <td class="api-fields-table__constraint">Десяткове число, наприклад `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Валюта розрахунку</td>
          <td class="api-fields-table__constraint">Код ISO 4217</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Платник комісій</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR або SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Найменування дебітора</td>
          <td class="api-fields-table__constraint">Максимум 140 символів</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC агента дебітора</td>
          <td class="api-fields-table__constraint">8 або 11 символів</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC агента кредитора</td>
          <td class="api-fields-table__constraint">8 або 11 символів</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Найменування кредитора</td>
          <td class="api-fields-table__constraint">Максимум 140 символів</td>
        </tr>
    </tbody>
  </table>
</div>

### Поля, специфічні для версій

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Поля, специфічні для версій">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Поле</th>
        <th>Опис</th>
        <th>Обмеження</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Унікальне наскрізне посилання на транзакцію</td>
          <td class="api-fields-table__constraint">Формат UUID — доступно починаючи з v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Ідентифікатор мандата</td>
          <td class="api-fields-table__constraint">Доступно починаючи з v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Мітка часу закінчення строку дії повідомлення</td>
          <td class="api-fields-table__constraint">Доступно у v13</td>
        </tr>
    </tbody>
  </table>
</div>

