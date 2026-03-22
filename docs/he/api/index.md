---
title: API | עברית
description: תמיכת תהליכי REST ו-CLI ב-Pacs008.
lang: he-IL
lastUpdated: true
image: /logo.svg
---

# API

הפרויקט מספק גם REST API וגם CLI לתהליכי עיבוד הודעות תשלום תפעוליים.

## התקנה

התקן את החבילה מ-PyPI. נדרש Python 3.9.2 ומעלה.

```bash
python -m pip install pacs008
```

---

## REST API

הפעל את שרת FastAPI המובנה כדי לחשוף נקודות קצה HTTP לאימות ולייצור.

### הפעלת השרת

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### נקודות קצה

| Endpoint | תיאור |
|---|---|
| `GET /health` | בדיקת תקינות — מחזיר את סטטוס השירות |
| `POST /validate` | אימות נתוני תשלום מול הסכמה ללא יצירת XML |
| `POST /generate` | יצירת XML באופן סינכרוני והחזרת הקובץ |
| `POST /generate/async` | שליחת משימת יצירה א-סינכרונית |
| `GET /status/{job_id}` | סקר סטטוס המשימה לפי מזהה |
| `GET /download/{job_id}` | הורדת ה-XML שנוצר לאחר השלמת המשימה |
| `GET /docs` | ממשק Swagger UI אינטראקטיבי לחקירה ובדיקת כל נקודות הקצה |

### דוגמת אימות

שלח נתוני תשלום לאימות לפני יצירת XML.

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

### דוגמת יצירה סינכרונית

יצירת קובץ XML מסוג pacs.008.001.13 מ-payload בפורמט JSON.

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

### יצירה א-סינכרונית

לקבצים גדולים יותר או לשימוש ב-pipeline, שלח משימה א-סינכרונית וסקר עד להשלמה.

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

ממשק שורת הפקודה מקבל קובץ נתונים, גרסת הודעה, תבנית וסכמה. הוא מאמת את הקלט וכותב את ה-XML שנוצר לספריית הפלט.

### שימוש בסיסי

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### דוגמה

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### מצב ריצה יבשה

השתמש ב-`--dry-run` לאימות נתוני קלט ללא יצירת XML. קוד היציאה מציין אם האימות עבר (`0`) או נכשל (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

הוסף `--verbose` לפלט מפורט במהלך היצירה.

---

## Python API

השתמש בספרייה ישירות בסקריפטים או בשירותי Python.

### יצירת XML מרשימה של רשומות תשלום

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

### בדיקת תאימות SWIFT

אמת ונקה נתונים מול כללי מערך התווים ואורך השדה של SWIFT לפני היצירה.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## שדות נתונים נדרשים

כל רשומת תשלום חייבת לכלול את השדות הבאים. שדות ספציפיים לגרסה מצוינים בהתאם.

| שדה | תיאור | אילוץ |
|---|---|---|
| `msg_id` | מזהה הודעה | מקסימום 35 תווים |
| `creation_date_time` | חותמת זמן יצירה | פורמט ISO 8601 |
| `nb_of_txs` | מספר עסקאות | מספר שלם חיובי |
| `settlement_method` | שיטת סליקה | CLRG ,INDA ,COVE או INGA |
| `end_to_end_id` | מזהה קצה לקצה | מקסימום 35 תווים |
| `interbank_settlement_amount` | סכום סליקה בין-בנקאי | עשרוני, למשל `25000.00` |
| `interbank_settlement_currency` | מטבע סליקה | קוד ISO 4217 |
| `charge_bearer` | נושא העמלות | DEBT ,CRED ,SHAR או SLEV |
| `debtor_name` | שם החייב | מקסימום 140 תווים |
| `debtor_agent_bic` | BIC של סוכן החייב | 8 או 11 תווים |
| `creditor_agent_bic` | BIC של סוכן הנושה | 8 או 11 תווים |
| `creditor_name` | שם הנושה | מקסימום 140 תווים |

### שדות ספציפיים לגרסה

| שדה | תיאור | אילוץ |
|---|---|---|
| `uetr` | מזהה עסקה ייחודי קצה לקצה | פורמט UUID — זמין מגרסה v08 |
| `mandate_id` | מזהה הרשאה | זמין מגרסה v10 |
| `expiry_date_time` | חותמת זמן תפוגת הודעה | זמין בגרסה v13 |

