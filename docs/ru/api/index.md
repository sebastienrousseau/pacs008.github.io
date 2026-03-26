---
title: "API | pacs008"
description: Поддержка REST и CLI в pacs008 для генерации, валидации, оркестрации API и контроля соответствия в потоках кредитовых переводов FI-to-FI.
lang: ru-RU
lastUpdated: true
image: /logo.webp
---

# API

Проект предоставляет REST API и CLI для операционных сценариев обработки платёжных сообщений.

## Заметки по внедрению

- Используйте синхронную генерацию для операторских проверок и небольших пакетов, когда вызывающая сторона ждёт XML сразу.
- Используйте асинхронную генерацию, когда входные файлы велики, нужны повторные попытки или генерация встроена в более широкий оркестрационный процесс.
- Храните и исходные входные данные, и отчёт о валидации, чтобы служба поддержки могла воспроизвести XML при инциденте.
- Фиксируйте пути к шаблонам и XSD в конфигурации развёртывания, чтобы избежать тихих обновлений.

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

<div class="api-endpoints-table" tabindex="0" aria-label="Эндпоинты">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Описание</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Проверка работоспособности — возвращает статус сервиса</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">Валидировать платёжные данные по схеме без генерации XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">Синхронно сгенерировать XML и вернуть файл</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Отправить задание на асинхронную генерацию</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Опросить статус задания по идентификатору</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Скачать сгенерированный XML после завершения задания</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Отменить ожидающую или выполняемую задачу</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Интерактивный Swagger UI для просмотра и тестирования всех эндпоинтов</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/ru/pacs.002.001.12/) — Отчёт о статусе платежа между финансовыми учреждениями
- [`pacs.003.001.09`](/ru/pacs.003.001.09/) — Клиентское прямое дебетование между финансовыми учреждениями
- [`pacs.004.001.11`](/ru/pacs.004.001.11/) — Возврат платежа
- [`pacs.007.001.11`](/ru/pacs.007.001.11/) — Сторнирование платежа между финансовыми учреждениями
- [`pacs.008.001.13`](/ru/pacs.008.001.13/) — Клиентский кредитовый перевод между финансовыми учреждениями
- [`pacs.009.001.10`](/ru/pacs.009.001.10/) — Кредитовый перевод между финансовыми учреждениями
- [`pacs.010.001.05`](/ru/pacs.010.001.05/) — Прямое дебетование между финансовыми учреждениями
- [`pacs.028.001.05`](/ru/pacs.028.001.05/) — Запрос статуса платежа между финансовыми учреждениями

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

```json
{
  "valid": true,
  "message_type": "pacs.008.001.13",
  "errors": [],
  "warnings": []
}
```

### Пример синхронной генерации

Сгенерировать XML-файл pacs.008.001.13 из данных JSON.

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

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
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

```python
from pacs008.validation import validate_batch

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    report = validate_batch(chunk, "pacs.008.001.13")
    print(report.summary())
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

<div class="api-fields-table" tabindex="0" aria-label="Обязательные поля данных">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Поле</th>
        <th>Описание</th>
        <th>Ограничение</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Идентификатор сообщения</td>
          <td class="api-fields-table__constraint">Максимум 35 символов</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Временная метка создания</td>
          <td class="api-fields-table__constraint">Формат ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Количество транзакций</td>
          <td class="api-fields-table__constraint">Положительное целое число</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Метод расчёта</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE или INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">Сквозной идентификатор</td>
          <td class="api-fields-table__constraint">Максимум 35 символов</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Сумма межбанковского расчёта</td>
          <td class="api-fields-table__constraint">Десятичное число, например `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Валюта расчёта</td>
          <td class="api-fields-table__constraint">Код ISO 4217</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Плательщик комиссий</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR или SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Наименование дебитора</td>
          <td class="api-fields-table__constraint">Максимум 140 символов</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC агента дебитора</td>
          <td class="api-fields-table__constraint">8 или 11 символов</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC агента кредитора</td>
          <td class="api-fields-table__constraint">8 или 11 символов</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Наименование кредитора</td>
          <td class="api-fields-table__constraint">Максимум 140 символов</td>
        </tr>
    </tbody>
  </table>
</div>

### Поля, специфичные для версий

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Поля, специфичные для версий">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Поле</th>
        <th>Описание</th>
        <th>Ограничение</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Уникальная сквозная ссылка на транзакцию</td>
          <td class="api-fields-table__constraint">Формат UUID — доступно начиная с v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Идентификатор мандата</td>
          <td class="api-fields-table__constraint">Доступно начиная с v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Временная метка истечения срока сообщения</td>
          <td class="api-fields-table__constraint">Доступно в v13</td>
        </tr>
    </tbody>
  </table>
</div>

