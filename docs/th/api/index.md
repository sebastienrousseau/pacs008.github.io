---
title: API | ไทย
description: การสนับสนุนเวิร์กโฟลว์ REST และ CLI ใน pacs008
lang: th-TH
lastUpdated: true
image: /logo.svg
---

# API

โครงการนี้จัดเตรียมทั้ง REST API และ CLI สำหรับเวิร์กโฟลว์การประมวลผลข้อความการชำระเงินเชิงปฏิบัติการ

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

| Endpoint | คำอธิบาย |
|---|---|
| `GET /health` | ตรวจสอบสถานะ — คืนค่าสถานะบริการ |
| `POST /validate` | ตรวจสอบข้อมูลการชำระเงินกับสคีมาโดยไม่สร้าง XML |
| `POST /generate` | สร้าง XML แบบซิงโครนัสและส่งคืนไฟล์ |
| `POST /generate/async` | ส่งงานสร้างแบบอะซิงโครนัส |
| `GET /status/{job_id}` | ตรวจสอบสถานะงานตาม ID |
| `GET /download/{job_id}` | ดาวน์โหลด XML ที่สร้างแล้วเมื่องานเสร็จสิ้น |
| `GET /docs` | Swagger UI แบบโต้ตอบสำหรับสำรวจและทดสอบ endpoints ทั้งหมด |

### ตัวอย่างการตรวจสอบความถูกต้อง

ส่งข้อมูลการชำระเงินเพื่อตรวจสอบความถูกต้องก่อนสร้าง XML

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

### ตัวอย่างการสร้างแบบซิงโครนัส

สร้างไฟล์ XML pacs.008.001.13 จาก JSON payload

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

### การสร้างแบบอะซิงโครนัส

สำหรับไฟล์ขนาดใหญ่หรือการใช้งานในไปป์ไลน์ ให้ส่งงานแบบ async และตรวจสอบจนกว่าจะเสร็จสิ้น

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

## ฟิลด์ข้อมูลที่จำเป็น

ทุกบันทึกการชำระเงินต้องมีฟิลด์ต่อไปนี้ ฟิลด์เฉพาะเวอร์ชันจะระบุไว้ตามความเหมาะสม

| ฟิลด์ | คำอธิบาย | ข้อจำกัด |
|---|---|---|
| `msg_id` | ตัวระบุข้อความ | สูงสุด 35 อักขระ |
| `creation_date_time` | ประทับเวลาการสร้าง | รูปแบบ ISO 8601 |
| `nb_of_txs` | จำนวนธุรกรรม | จำนวนเต็มบวก |
| `settlement_method` | วิธีการชำระบัญชี | CLRG, INDA, COVE หรือ INGA |
| `end_to_end_id` | ตัวระบุแบบครบวงจร | สูงสุด 35 อักขระ |
| `interbank_settlement_amount` | จำนวนเงินชำระบัญชีระหว่างธนาคาร | ทศนิยม เช่น `25000.00` |
| `interbank_settlement_currency` | สกุลเงินชำระบัญชี | รหัส ISO 4217 |
| `charge_bearer` | ผู้รับผิดชอบค่าธรรมเนียม | DEBT, CRED, SHAR หรือ SLEV |
| `debtor_name` | ชื่อลูกหนี้ | สูงสุด 140 อักขระ |
| `debtor_agent_bic` | BIC ตัวแทนลูกหนี้ | 8 หรือ 11 อักขระ |
| `creditor_agent_bic` | BIC ตัวแทนเจ้าหนี้ | 8 หรือ 11 อักขระ |
| `creditor_name` | ชื่อเจ้าหนี้ | สูงสุด 140 อักขระ |

### ฟิลด์เฉพาะเวอร์ชัน

| ฟิลด์ | คำอธิบาย | ข้อจำกัด |
|---|---|---|
| `uetr` | การอ้างอิงธุรกรรมแบบครบวงจรที่ไม่ซ้ำกัน | รูปแบบ UUID — ใช้ได้ตั้งแต่ v08 |
| `mandate_id` | ตัวระบุคำสั่งมอบอำนาจ | ใช้ได้ตั้งแต่ v10 |
| `expiry_date_time` | ประทับเวลาหมดอายุข้อความ | ใช้ได้ใน v13 |

