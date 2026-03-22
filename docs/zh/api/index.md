---
title: API | 简体中文
description: pacs008 中的 REST 和 CLI 工作流支持。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# API

该项目同时提供 REST API 和 CLI，用于运营支付报文处理工作流。

## 安装

从 PyPI 安装软件包。需要 Python 3.9.2 或更高版本。

```bash
python -m pip install pacs008
```

---

## REST API

启动内置 FastAPI 服务器以提供用于验证和生成的 HTTP 端点。

### 启动服务器

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### 端点

| Endpoint | 说明 |
|---|---|
| `GET /health` | 健康检查 — 返回服务状态 |
| `POST /validate` | 根据模式验证支付数据，无需生成 XML |
| `POST /generate` | 同步生成 XML 并返回文件 |
| `POST /generate/async` | 提交异步生成任务 |
| `GET /status/{job_id}` | 按 ID 轮询任务状态 |
| `GET /download/{job_id}` | 任务完成后下载生成的 XML |
| `GET /docs` | 用于探索和测试所有端点的交互式 Swagger UI |

### 验证示例

在生成 XML 之前提交支付数据进行验证。

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

### 同步生成示例

从 JSON 载荷生成 pacs.008.001.13 XML 文件。

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

### 异步生成

对于较大的文件或流水线使用场景，提交异步任务并轮询直至完成。

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

命令行界面接受数据文件、报文版本、模板和模式。它验证输入并将生成的 XML 写入输出目录。

### 基本用法

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### 示例

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### 演习模式

使用 `--dry-run` 验证输入数据而不生成 XML。退出码表示验证是否通过（`0`）或失败（`1`）。

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

添加 `--verbose` 以在生成过程中获得详细输出。

---

## Python API

直接在 Python 脚本或服务中使用该库。

### 从支付记录列表生成 XML

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

### SWIFT 合规性检查

在生成之前根据 SWIFT 字符集和字段长度规则验证并清理数据。

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## 必填数据字段

每条支付记录必须包含以下字段。版本特定字段在适用处有说明。

| 字段 | 说明 | 约束 |
|---|---|---|
| `msg_id` | 报文标识符 | 最多 35 个字符 |
| `creation_date_time` | 创建时间戳 | ISO 8601 格式 |
| `nb_of_txs` | 交易数量 | 正整数 |
| `settlement_method` | 清算方式 | CLRG、INDA、COVE 或 INGA |
| `end_to_end_id` | 端到端标识符 | 最多 35 个字符 |
| `interbank_settlement_amount` | 银行间清算金额 | 小数，例如 `25000.00` |
| `interbank_settlement_currency` | 清算货币 | ISO 4217 代码 |
| `charge_bearer` | 费用承担方 | DEBT、CRED、SHAR 或 SLEV |
| `debtor_name` | 付款方名称 | 最多 140 个字符 |
| `debtor_agent_bic` | 付款方代理 BIC | 8 或 11 个字符 |
| `creditor_agent_bic` | 收款方代理 BIC | 8 或 11 个字符 |
| `creditor_name` | 收款方名称 | 最多 140 个字符 |

### 版本特定字段

| 字段 | 说明 | 约束 |
|---|---|---|
| `uetr` | 唯一端到端交易参考 | UUID 格式 — 从 v08 起可用 |
| `mandate_id` | 授权标识符 | 从 v10 起可用 |
| `expiry_date_time` | 报文到期时间戳 | 在 v13 中可用 |

