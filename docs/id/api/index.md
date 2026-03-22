---
title: API | Bahasa Indonesia
description: Dukungan alur kerja REST dan CLI di pacs008.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# API

Proyek ini menyediakan REST API dan CLI untuk alur kerja pemrosesan pesan pembayaran operasional.

## Instalasi

Instal paket dari PyPI. Python 3.9.2 atau lebih tinggi diperlukan.

```bash
python -m pip install pacs008
```

---

## REST API

Jalankan server FastAPI bawaan untuk mengekspos endpoint HTTP untuk validasi dan pembuatan.

### Mulai server

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Endpoint

| Endpoint | Deskripsi |
|---|---|
| `GET /health` | Pemeriksaan kesehatan — mengembalikan status layanan |
| `POST /validate` | Validasi data pembayaran terhadap skema tanpa membuat XML |
| `POST /generate` | Buat XML secara sinkron dan kembalikan file |
| `POST /generate/async` | Kirim pekerjaan pembuatan asinkron |
| `GET /status/{job_id}` | Poll status pekerjaan berdasarkan ID |
| `GET /download/{job_id}` | Unduh XML yang dihasilkan setelah pekerjaan selesai |
| `GET /docs` | Antarmuka Swagger UI interaktif untuk menjelajahi dan menguji semua endpoint |

### Contoh validasi

Kirim data pembayaran untuk validasi sebelum membuat XML.

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

### Contoh pembuatan sinkron

Buat file XML pacs.008.001.13 dari payload JSON.

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

### Pembuatan asinkron

Untuk file yang lebih besar atau penggunaan pipeline, kirimkan pekerjaan asinkron dan lakukan polling hingga selesai.

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

Antarmuka baris perintah menerima file data, versi pesan, templat, dan skema. Antarmuka ini memvalidasi input dan menulis XML yang dihasilkan ke direktori output.

### Penggunaan dasar

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Contoh

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Mode uji coba

Gunakan `--dry-run` untuk memvalidasi data input tanpa membuat XML. Kode keluar menunjukkan apakah validasi berhasil (`0`) atau gagal (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Tambahkan `--verbose` untuk output mendetail selama pembuatan.

---

## Python API

Gunakan pustaka ini langsung dalam skrip atau layanan Python.

### Buat XML dari daftar rekaman pembayaran

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

### Pemeriksaan kepatuhan SWIFT

Validasi dan bersihkan data terhadap aturan set karakter dan panjang bidang SWIFT sebelum pembuatan.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Bidang data yang diperlukan

Setiap rekaman pembayaran harus menyertakan bidang-bidang berikut. Bidang khusus versi dicatat jika berlaku.

| Bidang | Deskripsi | Batasan |
|---|---|---|
| `msg_id` | Pengidentifikasi pesan | Maksimal 35 karakter |
| `creation_date_time` | Stempel waktu pembuatan | Format ISO 8601 |
| `nb_of_txs` | Jumlah transaksi | Bilangan bulat positif |
| `settlement_method` | Metode penyelesaian | CLRG, INDA, COVE, atau INGA |
| `end_to_end_id` | Pengidentifikasi ujung ke ujung | Maksimal 35 karakter |
| `interbank_settlement_amount` | Jumlah penyelesaian antarbank | Desimal, mis. `25000.00` |
| `interbank_settlement_currency` | Mata uang penyelesaian | Kode ISO 4217 |
| `charge_bearer` | Penanggung biaya | DEBT, CRED, SHAR, atau SLEV |
| `debtor_name` | Nama debitur | Maksimal 140 karakter |
| `debtor_agent_bic` | BIC agen debitur | 8 atau 11 karakter |
| `creditor_agent_bic` | BIC agen kreditur | 8 atau 11 karakter |
| `creditor_name` | Nama kreditur | Maksimal 140 karakter |

### Bidang khusus versi

| Bidang | Deskripsi | Batasan |
|---|---|---|
| `uetr` | Referensi transaksi ujung ke ujung yang unik | Format UUID — tersedia dari v08 |
| `mandate_id` | Pengidentifikasi mandat | Tersedia dari v10 |
| `expiry_date_time` | Stempel waktu kedaluwarsa pesan | Tersedia di v13 |

