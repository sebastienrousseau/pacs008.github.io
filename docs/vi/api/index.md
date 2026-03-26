---
title: "API | pacs008"
description: Hỗ trợ quy trình REST và CLI trong pacs008.
lang: vi-VN
lastUpdated: true
image: /logo.webp
---

# API

Dự án cung cấp cả REST API và CLI cho quy trình xử lý thông điệp thanh toán vận hành.

## Ghi chú triển khai

- Dùng tạo sinh đồng bộ cho các kiểm tra vận hành và lô nhỏ khi bên gọi cần XML ngay lập tức.
- Dùng tạo sinh bất đồng bộ khi tệp đầu vào lớn, tác vụ cần thử lại hoặc việc tạo sinh là một phần của bộ điều phối lớn hơn.
- Lưu cả dữ liệu đầu vào nguồn và báo cáo xác thực để đội hỗ trợ có thể tái tạo đầu ra XML khi có sự cố.
- Cố định các đường dẫn mẫu và XSD trong cấu hình triển khai để tránh nâng cấp âm thầm.

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

<div class="api-endpoints-table" tabindex="0" aria-label="Các endpoint">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Mô tả</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Kiểm tra trạng thái — trả về trạng thái dịch vụ</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">Xác thực dữ liệu thanh toán theo lược đồ mà không tạo XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">Tạo XML đồng bộ và trả về tệp</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Gửi tác vụ tạo tệp bất đồng bộ</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Truy vấn trạng thái tác vụ theo ID</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Tải xuống XML đã tạo khi tác vụ hoàn tất</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Hủy tác vụ đang chờ hoặc đang chạy</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Swagger UI tương tác để khám phá và kiểm tra tất cả các endpoint</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/vi/pacs.002.001.12/) — Báo cáo trạng thái thanh toán giữa các tổ chức tài chính
- [`pacs.003.001.09`](/vi/pacs.003.001.09/) — Ghi nợ trực tiếp khách hàng giữa các tổ chức tài chính
- [`pacs.004.001.11`](/vi/pacs.004.001.11/) — Hoàn trả thanh toán
- [`pacs.007.001.11`](/vi/pacs.007.001.11/) — Đảo ngược thanh toán giữa các tổ chức tài chính
- [`pacs.008.001.13`](/vi/pacs.008.001.13/) — Chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính
- [`pacs.009.001.10`](/vi/pacs.009.001.10/) — Chuyển khoản tín dụng giữa các tổ chức tài chính
- [`pacs.010.001.05`](/vi/pacs.010.001.05/) — Ghi nợ trực tiếp giữa các tổ chức tài chính
- [`pacs.028.001.05`](/vi/pacs.028.001.05/) — Yêu cầu trạng thái thanh toán giữa các tổ chức tài chính

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

```json
{
  "valid": true,
  "message_type": "pacs.008.001.13",
  "errors": [],
  "warnings": []
}
```

### Ví dụ tạo tệp đồng bộ

Tạo tệp XML pacs.008.001.13 từ dữ liệu JSON.

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

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
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

```python
from pacs008.validation import validate_batch

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    report = validate_batch(chunk, "pacs.008.001.13")
    print(report.summary())
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

<div class="api-fields-table" tabindex="0" aria-label="Các trường dữ liệu bắt buộc">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Trường</th>
        <th>Mô tả</th>
        <th>Ràng buộc</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Mã định danh thông điệp</td>
          <td class="api-fields-table__constraint">Tối đa 35 ký tự</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Dấu thời gian tạo</td>
          <td class="api-fields-table__constraint">Định dạng ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Số lượng giao dịch</td>
          <td class="api-fields-table__constraint">Số nguyên dương</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Phương thức thanh toán bù trừ</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE hoặc INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">Mã định danh đầu-cuối</td>
          <td class="api-fields-table__constraint">Tối đa 35 ký tự</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Số tiền thanh toán liên ngân hàng</td>
          <td class="api-fields-table__constraint">Số thập phân, ví dụ `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Tiền tệ thanh toán bù trừ</td>
          <td class="api-fields-table__constraint">Mã ISO 4217</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Bên chịu phí</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR hoặc SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Tên con nợ</td>
          <td class="api-fields-table__constraint">Tối đa 140 ký tự</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC đại lý con nợ</td>
          <td class="api-fields-table__constraint">8 hoặc 11 ký tự</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC đại lý chủ nợ</td>
          <td class="api-fields-table__constraint">8 hoặc 11 ký tự</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Tên chủ nợ</td>
          <td class="api-fields-table__constraint">Tối đa 140 ký tự</td>
        </tr>
    </tbody>
  </table>
</div>

### Các trường theo phiên bản cụ thể

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Các trường theo phiên bản cụ thể">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Trường</th>
        <th>Mô tả</th>
        <th>Ràng buộc</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Tham chiếu giao dịch đầu-cuối duy nhất</td>
          <td class="api-fields-table__constraint">Định dạng UUID — có từ v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Mã định danh ủy quyền</td>
          <td class="api-fields-table__constraint">Có từ v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Dấu thời gian hết hạn thông điệp</td>
          <td class="api-fields-table__constraint">Có trong v13</td>
        </tr>
    </tbody>
  </table>
</div>

