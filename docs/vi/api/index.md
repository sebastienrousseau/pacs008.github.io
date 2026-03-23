---
title: API | Tiếng Việt
description: Hỗ trợ quy trình REST và CLI trong pacs008.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# API

Dự án cung cấp cả REST API và CLI cho quy trình xử lý thông điệp thanh toán vận hành.

## Cài đặt

Cài đặt gói từ PyPI. Yêu cầu Python 3.9.2 trở lên.

```bash
python -m pip install pacs008
```

---

## REST API

Khởi động máy chủ FastAPI tích hợp để cung cấp các HTTP endpoint cho việc xác thực và tạo tệp.

### Khởi động máy chủ

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Các endpoint

| Endpoint | Mô tả |
|---|---|
| `GET /health` | Kiểm tra trạng thái — trả về trạng thái dịch vụ |
| `POST /validate` | Xác thực dữ liệu thanh toán theo lược đồ mà không tạo XML |
| `POST /generate` | Tạo XML đồng bộ và trả về tệp |
| `POST /generate/async` | Gửi tác vụ tạo tệp bất đồng bộ |
| `GET /status/{job_id}` | Truy vấn trạng thái tác vụ theo ID |
| `GET /download/{job_id}` | Tải xuống XML đã tạo khi tác vụ hoàn tất |
| `DELETE /jobs/{job_id}` | Hủy tác vụ đang chờ hoặc đang chạy |
| `GET /docs` | Swagger UI tương tác để khám phá và kiểm tra tất cả các endpoint |

### Ví dụ xác thực

Gửi dữ liệu thanh toán để xác thực trước khi tạo XML.

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

### Ví dụ tạo tệp đồng bộ

Tạo tệp XML pacs.008.001.13 từ JSON payload.

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

### Tạo tệp bất đồng bộ

Đối với các tệp lớn hơn hoặc sử dụng trong pipeline, hãy gửi tác vụ bất đồng bộ và truy vấn đến khi hoàn tất.

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

Giao diện dòng lệnh nhận một tệp dữ liệu, phiên bản thông điệp, mẫu và lược đồ. Nó xác thực đầu vào và ghi XML đã tạo vào thư mục đầu ra.

### Sử dụng cơ bản

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Ví dụ

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Chế độ chạy thử

Dùng `--dry-run` để xác thực dữ liệu đầu vào mà không tạo XML. Mã thoát cho biết xác thực đã thành công (`0`) hay thất bại (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Thêm `--verbose` để xem đầu ra chi tiết trong quá trình tạo tệp.

---

## Python API

Sử dụng thư viện trực tiếp trong các script hoặc dịch vụ Python.

### Tạo XML từ danh sách bản ghi thanh toán

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

### Kiểm tra tuân thủ SWIFT

Xác thực và làm sạch dữ liệu theo các quy tắc bộ ký tự và độ dài trường của SWIFT trước khi tạo tệp.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

Chạy API trong container sử dụng Dockerfile đi kèm.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

---

## Xác thực IBAN và BIC

Xác thực mã định danh tài chính độc lập với việc tạo XML.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Xử lý luồng

Tải tập dữ liệu lớn theo từng phần có thể cấu hình để giới hạn sử dụng bộ nhớ.

```python
from pacs008.data.loader import load_payment_data_streaming

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    print(f"Processing {len(chunk)} records")
```

---

## Dịch vụ xác thực

Chạy toàn bộ pipeline xác thực trước khi tạo theo phương thức lập trình.

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

## Các trường dữ liệu bắt buộc

Mỗi bản ghi thanh toán phải bao gồm các trường sau. Các trường theo phiên bản cụ thể được ghi chú khi áp dụng.

| Trường | Mô tả | Ràng buộc |
|---|---|---|
| `msg_id` | Mã định danh thông điệp | Tối đa 35 ký tự |
| `creation_date_time` | Dấu thời gian tạo | Định dạng ISO 8601 |
| `nb_of_txs` | Số lượng giao dịch | Số nguyên dương |
| `settlement_method` | Phương thức thanh toán bù trừ | CLRG, INDA, COVE hoặc INGA |
| `end_to_end_id` | Mã định danh đầu-cuối | Tối đa 35 ký tự |
| `interbank_settlement_amount` | Số tiền thanh toán liên ngân hàng | Số thập phân, ví dụ `25000.00` |
| `interbank_settlement_currency` | Tiền tệ thanh toán bù trừ | Mã ISO 4217 |
| `charge_bearer` | Bên chịu phí | DEBT, CRED, SHAR hoặc SLEV |
| `debtor_name` | Tên con nợ | Tối đa 140 ký tự |
| `debtor_agent_bic` | BIC đại lý con nợ | 8 hoặc 11 ký tự |
| `creditor_agent_bic` | BIC đại lý chủ nợ | 8 hoặc 11 ký tự |
| `creditor_name` | Tên chủ nợ | Tối đa 140 ký tự |

### Các trường theo phiên bản cụ thể

| Trường | Mô tả | Ràng buộc |
|---|---|---|
| `uetr` | Tham chiếu giao dịch đầu-cuối duy nhất | Định dạng UUID — có từ v08 |
| `mandate_id` | Mã định danh ủy quyền | Có từ v10 |
| `expiry_date_time` | Dấu thời gian hết hạn thông điệp | Có trong v13 |

