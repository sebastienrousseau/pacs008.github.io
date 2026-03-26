---
title: "pacs008 API संदर्भ | pacs008"
description: Dukungan alur kerja REST dan CLI di pacs008.
lang: id-ID
lastUpdated: true
image: /logo.webp
---

# pacs008 API संदर्भ

Proyek ini menyediakan REST API dan CLI untuk alur kerja pemrosesan pesan pembayaran operasional.

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

<div class="api-endpoints-table" tabindex="0" aria-label="Endpoint">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Deskripsi</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Pemeriksaan kesehatan — mengembalikan status layanan</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">Validasi data pembayaran terhadap skema tanpa membuat XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">Buat XML secara sinkron dan kembalikan file</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Kirim pekerjaan pembuatan asinkron</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Poll status pekerjaan berdasarkan ID</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Unduh XML yang dihasilkan setelah pekerjaan selesai</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Membatalkan tugas yang tertunda atau sedang berjalan</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Antarmuka Swagger UI interaktif untuk menjelajahi dan menguji semua endpoint</td>
        </tr>
    </tbody>
  </table>
</div>

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

<div class="api-fields-table" tabindex="0" aria-label="Bidang data yang diperlukan">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Bidang</th>
        <th>Deskripsi</th>
        <th>Batasan</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Pengidentifikasi pesan</td>
          <td class="api-fields-table__constraint">Maksimal 35 karakter</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Stempel waktu pembuatan</td>
          <td class="api-fields-table__constraint">Format ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Jumlah transaksi</td>
          <td class="api-fields-table__constraint">Bilangan bulat positif</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Metode penyelesaian</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE, atau INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">Pengidentifikasi ujung ke ujung</td>
          <td class="api-fields-table__constraint">Maksimal 35 karakter</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Jumlah penyelesaian antarbank</td>
          <td class="api-fields-table__constraint">Desimal, mis. `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Mata uang penyelesaian</td>
          <td class="api-fields-table__constraint">Kode ISO 4217</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Penanggung biaya</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR, atau SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Nama debitur</td>
          <td class="api-fields-table__constraint">Maksimal 140 karakter</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC agen debitur</td>
          <td class="api-fields-table__constraint">8 atau 11 karakter</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC agen kreditur</td>
          <td class="api-fields-table__constraint">8 atau 11 karakter</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Nama kreditur</td>
          <td class="api-fields-table__constraint">Maksimal 140 karakter</td>
        </tr>
    </tbody>
  </table>
</div>

### Bidang khusus versi

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Bidang khusus versi">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Bidang</th>
        <th>Deskripsi</th>
        <th>Batasan</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Referensi transaksi ujung ke ujung yang unik</td>
          <td class="api-fields-table__constraint">Format UUID — tersedia dari v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Pengidentifikasi mandat</td>
          <td class="api-fields-table__constraint">Tersedia dari v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Stempel waktu kedaluwarsa pesan</td>
          <td class="api-fields-table__constraint">Tersedia di v13</td>
        </tr>
    </tbody>
  </table>
</div>

