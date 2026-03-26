---
title: "API | pacs008"
description: תמיכת תהליכי REST ו-CLI ב-pacs008. יצירה, אימות, תיאום API ותמיכת ציות לתהליכי העברת אשראי ללקוחות בין מוסדות פיננסיים.
lang: he-IL
lastUpdated: true
image: /logo.webp
---

# API

הפרויקט מספק גם REST API וגם CLI לתהליכי עיבוד הודעות תשלום תפעוליים.

## הערות יישום

- השתמשו ביצירה סינכרונית לבדיקות תפעוליות ואצוות קטנות כאשר הקורא מצפה ל-XML מיידית.
- השתמשו ביצירה אסינכרונית כאשר קבצי הקלט גדולים, כאשר יש צורך בניסיונות חוזרים, או כאשר היצירה היא חלק ממנוע תיאום רחב יותר.
- שמרו גם את נתוני הקלט המקוריים וגם את דוח האימות כדי שצוותי התמיכה יוכלו לשחזר את פלט ה-XML בזמן תקלה.
- קבעו את נתיבי התבניות ו-XSD בתצורת הפריסה כדי להימנע משדרוגים שקטים.

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

<div class="api-endpoints-table" tabindex="0" aria-label="נקודות קצה">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>תיאור</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">בדיקת תקינות — מחזיר את סטטוס השירות</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">אימות נתוני תשלום מול הסכמה ללא יצירת XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">יצירת XML באופן סינכרוני והחזרת הקובץ</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">שליחת משימת יצירה א-סינכרונית</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">סקר סטטוס המשימה לפי מזהה</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">הורדת ה-XML שנוצר לאחר השלמת המשימה</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">ביטול משימה ממתינה או פעילה</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">ממשק Swagger UI אינטראקטיבי לחקירה ובדיקת כל נקודות הקצה</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/he/pacs.002.001.12/) — דוח סטטוס תשלום בין מוסדות פיננסיים
- [`pacs.003.001.09`](/he/pacs.003.001.09/) — חיוב ישיר ללקוח בין מוסדות פיננסיים
- [`pacs.004.001.11`](/he/pacs.004.001.11/) — החזר תשלום
- [`pacs.007.001.11`](/he/pacs.007.001.11/) — היפוך תשלום בין מוסדות פיננסיים
- [`pacs.008.001.13`](/he/pacs.008.001.13/) — העברת אשראי ללקוח בין מוסדות פיננסיים
- [`pacs.009.001.10`](/he/pacs.009.001.10/) — העברת אשראי בין מוסדות פיננסיים
- [`pacs.010.001.05`](/he/pacs.010.001.05/) — חיוב ישיר בין מוסדות פיננסיים
- [`pacs.028.001.05`](/he/pacs.028.001.05/) — בקשת סטטוס תשלום בין מוסדות פיננסיים

### דוגמת אימות

שלח נתוני תשלום לאימות לפני יצירת XML.

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

### דוגמת יצירה סינכרונית

יצירת קובץ XML מסוג pacs.008.001.13 מנתוני JSON.

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

### יצירה א-סינכרונית

לקבצים גדולים יותר או לשימוש ב-pipeline, שלח משימה א-סינכרונית וסקר עד להשלמה.

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

## Docker

הפעל את ה-API בקונטיינר באמצעות קובץ ה-Dockerfile המצורף.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## אימות IBAN ו-BIC

אמת מזהים פיננסיים באופן עצמאי מיצירת XML.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## עיבוד זרימתי

טען מערכי נתונים גדולים בקבוצות מוגדרות להגבלת השימוש בזיכרון.

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

## שירות אימות

הפעל את צינור האימות המלא לפני יצירה באופן תכנותי.

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

## שדות נתונים נדרשים

כל רשומת תשלום חייבת לכלול את השדות הבאים. שדות ספציפיים לגרסה מצוינים בהתאם.

<div class="api-fields-table" tabindex="0" aria-label="שדות נתונים נדרשים">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>שדה</th>
        <th>תיאור</th>
        <th>אילוץ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">מזהה הודעה</td>
          <td class="api-fields-table__constraint">מקסימום 35 תווים</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">חותמת זמן יצירה</td>
          <td class="api-fields-table__constraint">פורמט ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">מספר עסקאות</td>
          <td class="api-fields-table__constraint">מספר שלם חיובי</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">שיטת סליקה</td>
          <td class="api-fields-table__constraint">CLRG ,INDA ,COVE או INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">מזהה קצה לקצה</td>
          <td class="api-fields-table__constraint">מקסימום 35 תווים</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">סכום סליקה בין-בנקאי</td>
          <td class="api-fields-table__constraint">עשרוני, למשל `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">מטבע סליקה</td>
          <td class="api-fields-table__constraint">קוד ISO 4217</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">נושא העמלות</td>
          <td class="api-fields-table__constraint">DEBT ,CRED ,SHAR או SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">שם החייב</td>
          <td class="api-fields-table__constraint">מקסימום 140 תווים</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC של סוכן החייב</td>
          <td class="api-fields-table__constraint">8 או 11 תווים</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC של סוכן הנושה</td>
          <td class="api-fields-table__constraint">8 או 11 תווים</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">שם הנושה</td>
          <td class="api-fields-table__constraint">מקסימום 140 תווים</td>
        </tr>
    </tbody>
  </table>
</div>

### שדות ספציפיים לגרסה

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="שדות ספציפיים לגרסה">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>שדה</th>
        <th>תיאור</th>
        <th>אילוץ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">מזהה עסקה ייחודי קצה לקצה</td>
          <td class="api-fields-table__constraint">פורמט UUID — זמין מגרסה v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">מזהה הרשאה</td>
          <td class="api-fields-table__constraint">זמין מגרסה v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">חותמת זמן תפוגת הודעה</td>
          <td class="api-fields-table__constraint">זמין בגרסה v13</td>
        </tr>
    </tbody>
  </table>
</div>

