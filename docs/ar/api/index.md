---
title: واجهة البرمجة | pacs008
description: دعم سير عمل REST و CLI في pacs008. التوليد والتحقق وتنسيق واجهات البرمجة ودعم الامتثال لتدفقات تحويل الائتمان بين المؤسسات المالية.
lang: ar-SA
lastUpdated: true
image: /logo.svg
---

# واجهة البرمجة

يوفر المشروع واجهة REST API و CLI لتدفقات معالجة رسائل الدفع التشغيلية.

> تمت المراجعة مقابل المصادر الأساسية في 23 مارس 2026 باستخدام مواد ISO 20022 وEPC وSwift العامة المشار إليها في هذه الصفحة.

## التثبيت

ثبِّت الحزمة من PyPI. يُشترط Python 3.9.2 أو أعلى.

```bash
python -m pip install pacs008
```

---

## REST API

شغِّل خادم FastAPI المدمج لكشف نقاط HTTP للتحقق والتوليد.

### تشغيل الخادم

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### نقاط الخدمة

| Endpoint | الوصف |
|---|---|
| `GET /health` | فحص الحالة — يُعيد حالة الخدمة |
| `POST /validate` | التحقق من بيانات الدفع مقابل المخطط دون توليد XML |
| `POST /generate` | توليد XML بشكل متزامن وإعادة الملف |
| `POST /generate/async` | إرسال مهمة توليد غير متزامنة |
| `GET /status/{job_id}` | استطلاع حالة المهمة بالمعرّف |
| `GET /download/{job_id}` | تنزيل XML المُولَّد بعد اكتمال المهمة |
| `DELETE /jobs/{job_id}` | إلغاء مهمة معلقة أو قيد التنفيذ |
| `GET /docs` | واجهة Swagger UI التفاعلية لاستكشاف جميع نقاط الخدمة واختبارها |

- [`pacs.002.001.12`](/ar/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/ar/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/ar/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/ar/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.13`](/ar/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/ar/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/ar/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/ar/pacs.028.001.05/) — FI to FI Payment Status Request

### مثال على التحقق

أرسل بيانات الدفع للتحقق قبل توليد XML.

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

### مثال على التوليد المتزامن

توليد ملف XML من النوع pacs.008.001.13 من حمولة JSON.

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

### التوليد غير المتزامن

للملفات الكبيرة أو استخدام خطوط الأنابيب، أرسل مهمة غير متزامنة واستطلع حتى الاكتمال.

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

تقبل واجهة سطر الأوامر ملف بيانات وإصدار رسالة وقالباً ومخططاً. تتحقق من المدخلات وتكتب XML المُولَّد في دليل الإخراج.

### الاستخدام الأساسي

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### مثال

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### وضع التشغيل التجريبي

استخدم `--dry-run` للتحقق من بيانات الإدخال دون توليد XML. يشير رمز الخروج إلى نجاح التحقق (`0`) أو فشله (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

أضف `--verbose` للحصول على إخراج مفصّل أثناء التوليد.

---

## Python API

استخدم المكتبة مباشرةً في سكريبتات أو خدمات Python.

### توليد XML من قائمة سجلات الدفع

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

### فحص الامتثال SWIFT

التحقق من البيانات وتنقيتها وفق قواعد مجموعة أحرف SWIFT وطول الحقول قبل التوليد.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

شغّل API في حاوية باستخدام ملف Dockerfile المرفق.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## التحقق من IBAN وBIC

تحقق من المعرّفات المالية بشكل مستقل عن إنشاء XML.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## المعالجة التدفقية

حمّل مجموعات البيانات الكبيرة على دفعات قابلة للتكوين لتقليل استخدام الذاكرة.

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

## خدمة التحقق

نفّذ خط أنابيب التحقق الكامل قبل الإنشاء برمجياً.

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

## حقول البيانات المطلوبة

يجب أن يتضمن كل سجل دفع الحقول التالية. تُشار الحقول الخاصة بكل إصدار عند الاقتضاء.

| الحقل | الوصف | القيد |
|---|---|---|
| `msg_id` | معرّف الرسالة | الحد الأقصى 35 حرفاً |
| `creation_date_time` | طابع زمن الإنشاء | تنسيق ISO 8601 |
| `nb_of_txs` | عدد المعاملات | عدد صحيح موجب |
| `settlement_method` | طريقة التسوية | CLRG أو INDA أو COVE أو INGA |
| `end_to_end_id` | معرّف النهاية إلى النهاية | الحد الأقصى 35 حرفاً |
| `interbank_settlement_amount` | مبلغ التسوية بين البنوك | عشري، مثلاً `25000.00` |
| `interbank_settlement_currency` | عملة التسوية | رمز ISO 4217 |
| `charge_bearer` | حامل الرسوم | DEBT أو CRED أو SHAR أو SLEV |
| `debtor_name` | اسم المدين | الحد الأقصى 140 حرفاً |
| `debtor_agent_bic` | BIC وكيل المدين | 8 أو 11 حرفاً |
| `creditor_agent_bic` | BIC وكيل الدائن | 8 أو 11 حرفاً |
| `creditor_name` | اسم الدائن | الحد الأقصى 140 حرفاً |

### حقول خاصة بالإصدار

| الحقل | الوصف | القيد |
|---|---|---|
| `uetr` | مرجع المعاملة الفريد من النهاية إلى النهاية | تنسيق UUID — متاح من الإصدار v08 |
| `mandate_id` | معرّف التفويض | متاح من الإصدار v10 |
| `expiry_date_time` | طابع زمن انتهاء صلاحية الرسالة | متاح في الإصدار v13 |

