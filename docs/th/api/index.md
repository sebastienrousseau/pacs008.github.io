---
title: "Справочник API pacs008 | pacs008"
description: การสนับสนุนเวิร์กโฟลว์ REST และ CLI ใน pacs008
lang: th-TH
lastUpdated: true
image: /logo.webp
---

# Справочник API pacs008

โครงการนี้จัดเตรียมทั้ง REST API และ CLI สำหรับเวิร์กโฟลว์การประมวลผลข้อความการชำระเงินเชิงปฏิบัติการ

## บันทึกการติดตั้งใช้งาน

- ใช้การสร้างแบบซิงโครนัสสำหรับการตรวจสอบเชิงปฏิบัติการและงานเป็นชุดขนาดเล็กเมื่อผู้เรียกต้องการ XML ทันที
- ใช้การสร้างแบบอะซิงโครนัสเมื่อไฟล์อินพุตมีขนาดใหญ่ งานต้องลองใหม่ หรือการสร้างเป็นส่วนหนึ่งของระบบประสานงานที่กว้างกว่า
- เก็บทั้งข้อมูลนำเข้าต้นทางและรายงานการตรวจสอบไว้ เพื่อให้ทีมสนับสนุนสามารถสร้างผลลัพธ์ XML ซ้ำได้ระหว่างเกิดเหตุการณ์
- ตรึงเส้นทางของแม่แบบและ XSD ไว้ในค่ากำหนดการปรับใช้ เพื่อหลีกเลี่ยงการอัปเกรดแบบเงียบ

## การติดตั้ง

ติดตั้งแพ็คเกจจาก PyPI ต้องใช้ Python 3.9.2 หรือสูงกว่า

```bash
python -m pip install pacs008
```

---

## REST API

เริ่มเซิร์ฟเวอร์ FastAPI ในตัวเพื่อเปิดใช้งาน HTTP endpoints สำหรับการตรวจสอบความถูกต้องและการสร้าง

### เริ่มเซิร์ฟเวอร์

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Endpoints

<div class="api-endpoints-table" tabindex="0" aria-label="Endpoints">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>คำอธิบาย</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">ตรวจสอบสถานะ — คืนค่าสถานะบริการ</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">ตรวจสอบข้อมูลการชำระเงินกับสคีมาโดยไม่สร้าง XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">สร้าง XML แบบซิงโครนัสและส่งคืนไฟล์</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">ส่งงานสร้างแบบอะซิงโครนัส</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">ตรวจสอบสถานะงานตาม ID</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">ดาวน์โหลด XML ที่สร้างแล้วเมื่องานเสร็จสิ้น</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">ยกเลิกงานที่รอดำเนินการหรือกำลังดำเนินการ</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Swagger UI แบบโต้ตอบสำหรับสำรวจและทดสอบ endpoints ทั้งหมด</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/th/pacs.002.001.12/) — รายงานสถานะการชำระเงินระหว่างสถาบันการเงิน
- [`pacs.003.001.09`](/th/pacs.003.001.09/) — การหักบัญชีลูกค้าระหว่างสถาบันการเงิน
- [`pacs.004.001.11`](/th/pacs.004.001.11/) — การคืนเงินชำระ
- [`pacs.007.001.11`](/th/pacs.007.001.11/) — การกลับรายการชำระเงินระหว่างสถาบันการเงิน
- [`pacs.008.001.13`](/th/pacs.008.001.13/) — การโอนเครดิตลูกค้าระหว่างสถาบันการเงิน
- [`pacs.009.001.10`](/th/pacs.009.001.10/) — การโอนเครดิตระหว่างสถาบันการเงิน
- [`pacs.010.001.05`](/th/pacs.010.001.05/) — การหักบัญชีระหว่างสถาบันการเงิน
- [`pacs.028.001.05`](/th/pacs.028.001.05/) — คำขอสถานะการชำระเงินระหว่างสถาบันการเงิน

### ตัวอย่างการตรวจสอบความถูกต้อง

ส่งข้อมูลการชำระเงินเพื่อตรวจสอบความถูกต้องก่อนสร้าง XML

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

### ตัวอย่างการสร้างแบบซิงโครนัส

สร้างไฟล์ XML pacs.008.001.13 จากข้อมูล JSON

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

### การสร้างแบบอะซิงโครนัส

สำหรับไฟล์ขนาดใหญ่หรือการใช้งานในไปป์ไลน์ ให้ส่งงานแบบ async และตรวจสอบจนกว่าจะเสร็จสิ้น

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

อินเทอร์เฟซบรรทัดคำสั่งรับไฟล์ข้อมูล เวอร์ชันข้อความ เทมเพลต และสคีมา โดยจะตรวจสอบอินพุตและเขียน XML ที่สร้างไปยังไดเรกทอรีเอาต์พุต

### การใช้งานพื้นฐาน

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### ตัวอย่าง

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### โหมด Dry-run

ใช้ `--dry-run` เพื่อตรวจสอบข้อมูลอินพุตโดยไม่สร้าง XML รหัสออกแสดงว่าการตรวจสอบผ่าน (`0`) หรือล้มเหลว (`1`)

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

เพิ่ม `--verbose` สำหรับผลลัพธ์โดยละเอียดระหว่างการสร้าง

---

## Python API

ใช้ไลบรารีโดยตรงใน Python scripts หรือบริการ

### สร้าง XML จากรายการบันทึกการชำระเงิน

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

### การตรวจสอบความสอดคล้อง SWIFT

ตรวจสอบและทำความสะอาดข้อมูลตามกฎชุดอักขระและความยาวฟิลด์ของ SWIFT ก่อนสร้าง

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

รัน API ในคอนเทนเนอร์โดยใช้ Dockerfile ที่แนบมา

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## การตรวจสอบ IBAN และ BIC

ตรวจสอบตัวระบุทางการเงินโดยไม่ขึ้นกับการสร้าง XML

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## การประมวลผลแบบสตรีม

โหลดชุดข้อมูลขนาดใหญ่ในส่วนย่อยที่กำหนดค่าได้เพื่อจำกัดการใช้หน่วยความจำ

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

## บริการตรวจสอบ

เรียกใช้ pipeline การตรวจสอบก่อนสร้างแบบเต็มรูปแบบโดยทางโปรแกรม

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

## ฟิลด์ข้อมูลที่จำเป็น

ทุกบันทึกการชำระเงินต้องมีฟิลด์ต่อไปนี้ ฟิลด์เฉพาะเวอร์ชันจะระบุไว้ตามความเหมาะสม

<div class="api-fields-table" tabindex="0" aria-label="ฟิลด์ข้อมูลที่จำเป็น">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>ฟิลด์</th>
        <th>คำอธิบาย</th>
        <th>ข้อจำกัด</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">ตัวระบุข้อความ</td>
          <td class="api-fields-table__constraint">สูงสุด 35 อักขระ</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">ประทับเวลาการสร้าง</td>
          <td class="api-fields-table__constraint">รูปแบบ ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">จำนวนธุรกรรม</td>
          <td class="api-fields-table__constraint">จำนวนเต็มบวก</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">วิธีการชำระบัญชี</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE หรือ INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">ตัวระบุแบบครบวงจร</td>
          <td class="api-fields-table__constraint">สูงสุด 35 อักขระ</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">จำนวนเงินชำระบัญชีระหว่างธนาคาร</td>
          <td class="api-fields-table__constraint">ทศนิยม เช่น `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">สกุลเงินชำระบัญชี</td>
          <td class="api-fields-table__constraint">รหัส ISO 4217</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">ผู้รับผิดชอบค่าธรรมเนียม</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR หรือ SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">ชื่อลูกหนี้</td>
          <td class="api-fields-table__constraint">สูงสุด 140 อักขระ</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC ตัวแทนลูกหนี้</td>
          <td class="api-fields-table__constraint">8 หรือ 11 อักขระ</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC ตัวแทนเจ้าหนี้</td>
          <td class="api-fields-table__constraint">8 หรือ 11 อักขระ</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">ชื่อเจ้าหนี้</td>
          <td class="api-fields-table__constraint">สูงสุด 140 อักขระ</td>
        </tr>
    </tbody>
  </table>
</div>

### ฟิลด์เฉพาะเวอร์ชัน

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="ฟิลด์เฉพาะเวอร์ชัน">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>ฟิลด์</th>
        <th>คำอธิบาย</th>
        <th>ข้อจำกัด</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">การอ้างอิงธุรกรรมแบบครบวงจรที่ไม่ซ้ำกัน</td>
          <td class="api-fields-table__constraint">รูปแบบ UUID — ใช้ได้ตั้งแต่ v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">ตัวระบุคำสั่งมอบอำนาจ</td>
          <td class="api-fields-table__constraint">ใช้ได้ตั้งแต่ v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">ประทับเวลาหมดอายุข้อความ</td>
          <td class="api-fields-table__constraint">ใช้ได้ใน v13</td>
        </tr>
    </tbody>
  </table>
</div>

