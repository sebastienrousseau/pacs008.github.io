---
title: API | pacs008
description: pacs008 中的 REST 和 CLI 工作流程支援。 面向 FI-to-FI 客戶信貸轉帳工作流程的產生、驗證、API 編排與合規支援。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# API

該專案同時提供 REST API 和 CLI，用於營運支付訊息處理工作流程。

> 已於 2026 年 3 月 23 日依據本頁引用的 ISO 20022、EPC 與 Swift 公開資料完成主要來源複核。

## 安裝

從 PyPI 安裝套件。需要 Python 3.9.2 或更高版本。

```bash
python -m pip install pacs008
```

---

## REST API

啟動內建 FastAPI 伺服器以提供用於驗證和產生的 HTTP 端點。

### 啟動伺服器

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### 端點

| Endpoint | 說明 |
|---|---|
| `GET /health` | 健康檢查 — 回傳服務狀態 |
| `POST /validate` | 根據結構描述驗證支付資料，無需產生 XML |
| `POST /generate` | 同步產生 XML 並回傳檔案 |
| `POST /generate/async` | 提交非同步產生任務 |
| `GET /status/{job_id}` | 依 ID 輪詢任務狀態 |
| `GET /download/{job_id}` | 任務完成後下載產生的 XML |
| `DELETE /jobs/{job_id}` | 取消待處理或正在執行的工作 |
| `GET /docs` | 用於探索和測試所有端點的互動式 Swagger UI |

- [`pacs.002.001.12`](/zh-tw/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/zh-tw/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/zh-tw/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/zh-tw/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.13`](/zh-tw/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/zh-tw/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/zh-tw/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/zh-tw/pacs.028.001.05/) — FI to FI Payment Status Request

### 驗證範例

在產生 XML 之前提交支付資料進行驗證。

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

### 同步產生範例

從 JSON 載荷產生 pacs.008.001.13 XML 檔案。

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

### 非同步產生

對於較大的檔案或流水線使用情境，提交非同步任務並輪詢直至完成。

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

命令列介面接受資料檔案、訊息版本、範本和結構描述。它驗證輸入並將產生的 XML 寫入輸出目錄。

### 基本用法

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### 範例

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### 演習模式

使用 `--dry-run` 驗證輸入資料而不產生 XML。結束碼表示驗證是否通過（`0`）或失敗（`1`）。

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

加入 `--verbose` 以在產生過程中取得詳細輸出。

---

## Python API

直接在 Python 腳本或服務中使用該程式庫。

### 從支付記錄清單產生 XML

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

### SWIFT 合規性檢查

在產生之前根據 SWIFT 字元集和欄位長度規則驗證並清理資料。

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

使用附帶的 Dockerfile 在容器中執行 API。

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## IBAN 和 BIC 驗證

獨立於 XML 產生驗證金融識別碼。

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## 串流處理

以可設定的區塊大小載入大型資料集以限制記憶體使用。

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

## 驗證服務

以程式化方式執行完整的產生前驗證管線。

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

## 必填資料欄位

每筆支付記錄必須包含以下欄位。版本特定欄位在適用處有說明。

| 欄位 | 說明 | 限制 |
|---|---|---|
| `msg_id` | 訊息識別碼 | 最多 35 個字元 |
| `creation_date_time` | 建立時間戳記 | ISO 8601 格式 |
| `nb_of_txs` | 交易數量 | 正整數 |
| `settlement_method` | 清算方式 | CLRG、INDA、COVE 或 INGA |
| `end_to_end_id` | 端對端識別碼 | 最多 35 個字元 |
| `interbank_settlement_amount` | 銀行間清算金額 | 小數，例如 `25000.00` |
| `interbank_settlement_currency` | 清算貨幣 | ISO 4217 代碼 |
| `charge_bearer` | 費用承擔方 | DEBT、CRED、SHAR 或 SLEV |
| `debtor_name` | 付款方名稱 | 最多 140 個字元 |
| `debtor_agent_bic` | 付款方代理 BIC | 8 或 11 個字元 |
| `creditor_agent_bic` | 收款方代理 BIC | 8 或 11 個字元 |
| `creditor_name` | 收款方名稱 | 最多 140 個字元 |

### 版本特定欄位

| 欄位 | 說明 | 限制 |
|---|---|---|
| `uetr` | 唯一端對端交易參考 | UUID 格式 — 從 v08 起可用 |
| `mandate_id` | 授權識別碼 | 從 v10 起可用 |
| `expiry_date_time` | 訊息到期時間戳記 | 在 v13 中可用 |

