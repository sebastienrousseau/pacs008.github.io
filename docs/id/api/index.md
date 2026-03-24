---
title: API | pacs008
description: Dukungan alur kerja REST dan CLI di pacs008. Pembuatan, validasi, orkestrasi API, dan dukungan kepatuhan untuk alur transfer kredit pelanggan antar...
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# API

Proyek ini menyediakan REST API dan CLI untuk alur kerja pemrosesan pesan pembayaran operasional.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026 menggunakan materi publik ISO 20022, EPC, dan Swift yang dirujuk pada halaman ini.

## Catatan implementasi

- Gunakan pembuatan sinkron untuk pemeriksaan operasional dan batch kecil saat pemanggil membutuhkan XML segera.
- Gunakan pembuatan asinkron saat file input besar, pekerjaan perlu percobaan ulang, atau proses pembuatan menjadi bagian dari mesin orkestrasi yang lebih luas.
- Simpan data masukan sumber dan laporan validasi agar tim dukungan dapat mereproduksi keluaran XML saat insiden.
- Kunci jalur model XML dan XSD di konfigurasi penerapan untuk mencegah pembaruan diam-diam.

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
| `DELETE /jobs/{job_id}` | Membatalkan tugas yang tertunda atau sedang berjalan |
| `GET /docs` | Antarmuka Swagger UI interaktif untuk menjelajahi dan menguji semua endpoint |

- [`pacs.002.001.12`](/id/pacs.002.001.12/) — Laporan Status Pembayaran FI ke FI
- [`pacs.003.001.09`](/id/pacs.003.001.09/) — Direct Debit Pelanggan FI ke FI
- [`pacs.004.001.11`](/id/pacs.004.001.11/) — Retur Pembayaran
- [`pacs.007.001.11`](/id/pacs.007.001.11/) — Pembalikan Pembayaran FI ke FI
- [`pacs.008.001.13`](/id/pacs.008.001.13/) — Transfer Kredit Pelanggan FI ke FI
- [`pacs.009.001.10`](/id/pacs.009.001.10/) — Transfer Kredit Antar Lembaga Keuangan
- [`pacs.010.001.05`](/id/pacs.010.001.05/) — Direct Debit Antar Lembaga Keuangan
- [`pacs.028.001.05`](/id/pacs.028.001.05/) — Permintaan Status Pembayaran FI ke FI

### Contoh validasi

Kirim data pembayaran untuk validasi sebelum membuat XML.

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

### Contoh pembuatan sinkron

Buat file XML pacs.008.001.13 dari data JSON.

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

### Pembuatan asinkron

Untuk file yang lebih besar atau penggunaan pipeline, kirimkan pekerjaan asinkron dan lakukan polling hingga selesai.

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

## Docker

Jalankan API dalam kontainer menggunakan Dockerfile yang disertakan.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## Validasi IBAN dan BIC

Validasi pengenal keuangan secara independen dari pembuatan XML.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Streaming

Muat kumpulan data besar dalam potongan yang dapat dikonfigurasi untuk membatasi penggunaan memori.

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

## Layanan validasi

Jalankan pipeline validasi pra-pembuatan lengkap secara terprogram.

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

