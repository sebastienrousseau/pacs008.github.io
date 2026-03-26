---
title: "pacs.007.001.11 | Pembalikan Pembayaran FI ke FI | pacs008"
description: Pesan pacs.007 digunakan untuk membalikkan instruksi pembayaran yang sebelumnya dikirim yang belum diselesaikan atau untuk meminta pembalikan pembayaran...
lang: id-ID
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.007 only for fraud scenarios?"
    answer: "No. Fraud is a major use case, but any instructing-side need to reverse a payment can trigger it."
  - question: "Can it be handled like a normal return?"
    answer: "No. Reversal timing, reason capture, and reconciliation differ materially from returns."
---

# pacs.007.001.11 — Pembalikan Pembayaran FI ke FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Bidang</th>
        <th scope="col">Nilai</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Nama ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Status pendaftaran</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Tahun</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Versi</strong></td>
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Ikhtisar

Pesan pacs.007 digunakan untuk membalikkan instruksi pembayaran yang sebelumnya dikirim yang belum diselesaikan atau untuk meminta pembalikan pembayaran yang telah diselesaikan. Berbeda dengan pacs.004 (pengembalian), pesan ini diinisiasi oleh agen yang memberi instruksi asli.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 2025-02-27; tautan sumber tercantum di bawah.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan stempel waktu pembuatan
- **TxInf** — Informasi Transaksi dengan jumlah pembalikan dan pihak-pihak
- **OrgnlGrpInf** — Informasi Grup Asli yang merujuk pesan sumber
- **RvslRsnInf** — Informasi Alasan Pembalikan dengan kode alasan terstruktur
- **OrgnlTxRef** — Referensi Transaksi Asli untuk ketertelusuran ujung-ke-ujung

## Konteks bisnis

- Diinisiasi ketika pengirim asli mengidentifikasi kesalahan sebelum atau sesudah penyelesaian
- Digunakan dalam skenario penipuan di mana pembalikan cepat diperlukan
- Mendukung pembalikan penuh dan sebagian dari jumlah pembayaran asli
- Membawa kode alasan pembalikan terstruktur untuk pemrosesan hilir

<div class="operational-matrix-table" tabindex="0" aria-label="Elemen data utama Konteks bisnis">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Elemen data utama</th>
        <th>Konteks bisnis</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header dengan identifikasi pesan dan stempel waktu pembuatan</td>
          <td class="operational-matrix-table__right">Diinisiasi ketika pengirim asli mengidentifikasi kesalahan sebelum atau sesudah penyelesaian</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informasi Transaksi dengan jumlah pembalikan dan pihak-pihak</td>
          <td class="operational-matrix-table__right">Digunakan dalam skenario penipuan di mana pembalikan cepat diperlukan</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informasi Grup Asli yang merujuk pesan sumber</td>
          <td class="operational-matrix-table__right">Mendukung pembalikan penuh dan sebagian dari jumlah pembayaran asli</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Informasi Alasan Pembalikan dengan kode alasan terstruktur</td>
          <td class="operational-matrix-table__right">Membawa kode alasan pembalikan terstruktur untuk pemrosesan hilir</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Referensi Transaksi Asli untuk ketertelusuran ujung-ke-ujung</td>
          <td class="operational-matrix-table__right">Agen yang memberi instruksi (pengirim asli) mengirim pacs.007 maju melalui rantai pembayaran untuk membalikkan pembayaran yang sebelumnya diinstruksikan. Setiap agen memproses instruksi pembalikan dan menyesuaikan penyelesaian sesuai kebutuhan.</td>
        </tr>
    </tbody>
  </table>
</div>

## Konteks CBPR+ dan skema

- Dibedakan dari pacs.004 berdasarkan arah — pembalikan mengalir maju dari pengirim asal, pengembalian mengalir mundur dari penerima manfaat
- CBPR+ memerlukan pemasangan dengan pengidentifikasi pesan asli untuk pencocokan otomatis
- Kode alasan terstruktur menggantikan narasi teks bebas dari pesan MT warisan
- Semakin banyak digunakan dalam alur kerja penarikan kembali pembayaran instan dan pencegahan penipuan

## Alur pesan

Agen yang memberi instruksi (pengirim asli) mengirim pacs.007 maju melalui rantai pembayaran untuk membalikkan pembayaran yang sebelumnya diinstruksikan. Setiap agen memproses instruksi pembalikan dan menyesuaikan penyelesaian sesuai kebutuhan.

## Tabel perbedaan versi

<div class="version-diff-table" tabindex="0" aria-label="Tabel perbedaan versi">
  <table>
    <caption>Tabel perbedaan versi</caption>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Rentang versi</th>
        <th>Mengapa ini penting</th>
        <th>Kesimpulan implementasi</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">Implementasi saat ini di pacs008</td>
          <td class="version-diff-table__takeaway">Landasan yang baik untuk pemodelan alur pembalikan pembayaran.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">Revisi katalog berikutnya</td>
          <td class="version-diff-table__takeaway">Periksa revisi yang lebih baru untuk keselarasan dengan infrastruktur pasar saat ini.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contoh XML beranotasi

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### Komentar bidang

- `MsgId`: The reversal needs its own identifier.
- `OrgnlInstrId`: Pertahankan referensi pembayaran asli agar rekonsiliasi tidak terputus.
- `RvslRsnInf`: Use structured reversal reasons so cases can be routed correctly.

## Bandingkan pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="Bandingkan pacs.007 vs pacs.004">
  <table>
    <caption>Bandingkan pacs.007 vs pacs.004</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensi</th>
        <th>pacs.007.001.11</th>
        <th>Pesan pembanding</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Tujuan utama</td>
          <td class="message-comparison-table__current">Membalik pembayaran yang sebelumnya telah diinstruksikan</td>
          <td class="message-comparison-table__other">Mengembalikan dana yang sudah diselesaikan</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Diinisiasi oleh</td>
          <td class="message-comparison-table__current">Pihak pemberi instruksi asal</td>
          <td class="message-comparison-table__other">Pihak penerima / penerima manfaat</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Arah alur</td>
          <td class="message-comparison-table__current">Maju melalui rantai</td>
          <td class="message-comparison-table__other">Kembali melalui rantai</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Paling cocok untuk</td>
          <td class="message-comparison-table__current">Penanganan pembalikan karena recall, kesalahan, atau penipuan</td>
          <td class="message-comparison-table__other">Penanganan pengembalian pasca-penyelesaian</td>
        </tr>
    </tbody>
  </table>
</div>

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

## Pesan terkait
<div class="related-messages-table" tabindex="0" aria-label="Pesan terkait">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Jenis pesan</th>
        <th>Deskripsi</th>
        <th>Ikhtisar</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/id/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Transfer Kredit Pelanggan FI ke FI</td>
          <td class="related-messages-table__overview">Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/id/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Retur Pembayaran</td>
          <td class="related-messages-table__overview">Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran tidak dapat diterapkan, dikirim secara keliru, atau sedang ditarik kembali oleh lembaga asal.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/id/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Laporan Status Pembayaran FI ke FI</td>
          <td class="related-messages-table__overview">Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran.</td>
        </tr>
    </tbody>
  </table>
</div>

