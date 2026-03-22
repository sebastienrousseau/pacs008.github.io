---
title: واجهة البرمجة | العربية
description: دعم سير عمل REST و CLI في pacs008.
lang: ar-SA
lastUpdated: true
image: /logo.svg
---

# واجهة البرمجة

يوفر المشروع واجهة REST API و CLI لتدفقات معالجة رسائل الدفع التشغيلية.

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
| `GET /docs` | واجهة Swagger UI التفاعلية لاستكشاف جميع نقاط الخدمة واختبارها |

### مثال على التحقق

أرسل بيانات الدفع للتحقق قبل توليد XML.

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

### مثال على التوليد المتزامن

توليد ملف XML من النوع pacs.008.001.13 من حمولة JSON.

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

### التوليد غير المتزامن

للملفات الكبيرة أو استخدام خطوط الأنابيب، أرسل مهمة غير متزامنة واستطلع حتى الاكتمال.

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

