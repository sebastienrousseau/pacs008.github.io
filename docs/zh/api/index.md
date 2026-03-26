---
title: "API | pacs008"
description: pacs008 中的 REST 和 CLI 工作流支持。 面向金融机构间客户信贷转账工作流的生成、校验、API 编排与合规支持。
lang: zh-CN
lastUpdated: true
image: /logo.webp
---

# API

该项目同时提供 REST API 和 CLI，用于运营支付报文处理工作流。

## 实施说明

- 当调用方需要立即获得 XML，用于操作检查或小批量处理时，使用同步生成。
- 当输入文件较大、任务需要重试或生成过程属于更大编排流程的一部分时，使用异步生成。
- 保留原始负载和校验报告，以便支持团队在事故期间重现 XML 输出。
- 在部署配置中固定模板和 XSD 路径，避免静默升级。

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

<div class="api-endpoints-table" tabindex="0" aria-label="端点">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">健康检查 — 返回服务状态</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">根据模式验证支付数据，无需生成 XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">同步生成 XML 并返回文件</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">提交异步生成任务</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">按 ID 轮询任务状态</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">任务完成后下载生成的 XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">取消待处理或正在运行的作业</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">用于探索和测试所有端点的交互式 Swagger UI</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/zh/pacs.002.001.12/) — 金融机构间支付状态报告
- [`pacs.003.001.09`](/zh/pacs.003.001.09/) — 金融机构间客户直接借记
- [`pacs.004.001.11`](/zh/pacs.004.001.11/) — 支付退回
- [`pacs.007.001.11`](/zh/pacs.007.001.11/) — 金融机构间支付撤销
- [`pacs.008.001.13`](/zh/pacs.008.001.13/) — 金融机构间客户信用转账
- [`pacs.009.001.10`](/zh/pacs.009.001.10/) — 金融机构信用转账
- [`pacs.010.001.05`](/zh/pacs.010.001.05/) — 金融机构直接借记
- [`pacs.028.001.05`](/zh/pacs.028.001.05/) — 金融机构间支付状态请求

### 验证示例

在生成 XML 之前提交支付数据进行验证。

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

### 同步生成示例

从 JSON 载荷生成 pacs.008.001.13 XML 文件。

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

### 异步生成

对于较大的文件或流水线使用场景，提交异步任务并轮询直至完成。

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

## Docker

使用附带的 Dockerfile 在容器中运行 API。

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## IBAN 和 BIC 验证

独立于 XML 生成验证金融标识符。

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## 流式处理

以可配置的块大小加载大型数据集以限制内存使用。

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

## 验证服务

以编程方式运行完整的生成前验证管道。

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

## 必填数据字段

每条支付记录必须包含以下字段。版本特定字段在适用处有说明。

<div class="api-fields-table" tabindex="0" aria-label="必填数据字段">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>字段</th>
        <th>说明</th>
        <th>约束</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">报文标识符</td>
          <td class="api-fields-table__constraint">最多 35 个字符</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">创建时间戳</td>
          <td class="api-fields-table__constraint">ISO 8601 格式</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">交易数量</td>
          <td class="api-fields-table__constraint">正整数</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">清算方式</td>
          <td class="api-fields-table__constraint">CLRG、INDA、COVE 或 INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">端到端标识符</td>
          <td class="api-fields-table__constraint">最多 35 个字符</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">银行间清算金额</td>
          <td class="api-fields-table__constraint">小数，例如 `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">清算货币</td>
          <td class="api-fields-table__constraint">ISO 4217 代码</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">费用承担方</td>
          <td class="api-fields-table__constraint">DEBT、CRED、SHAR 或 SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">付款方名称</td>
          <td class="api-fields-table__constraint">最多 140 个字符</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">付款方代理 BIC</td>
          <td class="api-fields-table__constraint">8 或 11 个字符</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">收款方代理 BIC</td>
          <td class="api-fields-table__constraint">8 或 11 个字符</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">收款方名称</td>
          <td class="api-fields-table__constraint">最多 140 个字符</td>
        </tr>
    </tbody>
  </table>
</div>

### 版本特定字段

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="版本特定字段">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>字段</th>
        <th>说明</th>
        <th>约束</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">唯一端到端交易参考</td>
          <td class="api-fields-table__constraint">UUID 格式 — 从 v08 起可用</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">授权标识符</td>
          <td class="api-fields-table__constraint">从 v10 起可用</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">报文到期时间戳</td>
          <td class="api-fields-table__constraint">在 v13 中可用</td>
        </tr>
    </tbody>
  </table>
</div>

