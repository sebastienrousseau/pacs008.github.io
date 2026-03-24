---
title: "pacs.028.001.05 | Permintaan Status Pembayaran FI ke FI | pacs008"
description: Pesan pacs.028 dikirim oleh lembaga keuangan untuk meminta status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memungkinkan pelacakan proaktif...
lang: id-ID
lastUpdated: true
image: /logo.svg
faq:
  - question: "Should pacs.028 be sent after every payment?"
    answer: "Usually no. It works best as a targeted exception tool, not as blanket traffic."
  - question: "What makes pacs.028 useful?"
    answer: "Clear timeout, escalation, and reconciliation rules around the original payment case."
---

# pacs.028.001.05 — Permintaan Status Pembayaran FI ke FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Ikhtisar

Pesan pacs.028 dikirim oleh lembaga keuangan untuk meminta status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memungkinkan pelacakan proaktif pemrosesan pembayaran tanpa menunggu laporan status yang tidak diminta.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 2025-02-27; tautan sumber tercantum di bawah.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan stempel waktu pembuatan
- **TxInf** — Informasi Transaksi yang mengidentifikasi pembayaran yang akan ditanyakan
- **OrgnlGrpInf** — Informasi Grup Asli yang merujuk pesan sumber
- **OrgnlInstrId** — Identifikasi Instruksi Asli dari pembayaran sumber
- **OrgnlEndToEndId** — Identifikasi Ujung ke Ujung Asli untuk ketertelusuran

## Konteks bisnis

- Memungkinkan pertanyaan status proaktif untuk instruksi pembayaran yang sedang dalam perjalanan
- Mendukung tim operasi yang menyelidiki pembayaran yang tertunda atau hilang
- Melengkapi pacs.002 dengan menginisiasi komunikasi status alih-alih menunggu
- Digunakan dalam alur kerja penanganan pengecualian dan pemantauan SLA

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
          <td class="operational-matrix-table__right">Memungkinkan pertanyaan status proaktif untuk instruksi pembayaran yang sedang dalam perjalanan</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informasi Transaksi yang mengidentifikasi pembayaran yang akan ditanyakan</td>
          <td class="operational-matrix-table__right">Mendukung tim operasi yang menyelidiki pembayaran yang tertunda atau hilang</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informasi Grup Asli yang merujuk pesan sumber</td>
          <td class="operational-matrix-table__right">Melengkapi pacs.002 dengan menginisiasi komunikasi status alih-alih menunggu</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — Identifikasi Instruksi Asli dari pembayaran sumber</td>
          <td class="operational-matrix-table__right">Digunakan dalam alur kerja penanganan pengecualian dan pemantauan SLA</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — Identifikasi Ujung ke Ujung Asli untuk ketertelusuran</td>
          <td class="operational-matrix-table__right">Agen yang memberi instruksi mengirim pacs.028 ke agen yang diinstruksikan untuk meminta status pembayaran tertentu. Agen yang diinstruksikan merespons dengan pacs.002 yang berisi status pemrosesan terkini.</td>
        </tr>
    </tbody>
  </table>
</div>

## Konteks CBPR+ dan skema

- Menggantikan pola pertanyaan status MT199 dan kueri pesan SWIFT manual
- CBPR+ mendukung permintaan status terstruktur yang ditautkan ke pengidentifikasi pesan asli
- Pelacakan berbasis UETR melalui gpi mengurangi kebutuhan pertanyaan manual
- Semakin terintegrasi ke dalam dasbor operasi pembayaran otomatis

## Alur pesan

Agen yang memberi instruksi mengirim pacs.028 ke agen yang diinstruksikan untuk meminta status pembayaran tertentu. Agen yang diinstruksikan merespons dengan pacs.002 yang berisi status pemrosesan terkini.

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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">Implementasi saat ini di pacs008</td>
          <td class="version-diff-table__takeaway">Cocok untuk pemodelan permintaan status saat ini.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">Revisi katalog berikutnya</td>
          <td class="version-diff-table__takeaway">Periksa revisi katalog yang lebih baru untuk perencanaan interoperabilitas di masa depan.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contoh XML beranotasi

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Komentar bidang

- `MsgId`: Permintaan itu sendiri memerlukan pengenal yang dapat diaudit dan berbeda dari pembayaran dasarnya.
- `OrgnlInstrId`: Gunakan pengenal sumber yang tepat dari instruksi asli untuk memaksimalkan akurasi pencocokan.
- `OrgnlEndToEndId`: Menyertakan keterlacakan pelanggan membantu tim operasional merekonsiliasi enquiry lebih cepat.

## Bandingkan pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="Bandingkan pacs.028 vs pacs.002">
  <table>
    <caption>Bandingkan pacs.028 vs pacs.002</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensi</th>
        <th>pacs.028.001.05</th>
        <th>Pesan pembanding</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Tujuan utama</td>
          <td class="message-comparison-table__current">Minta status</td>
          <td class="message-comparison-table__other">Laporkan status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Siapa yang memulai interaksi</td>
          <td class="message-comparison-table__current">Institusi yang meminta status</td>
          <td class="message-comparison-table__other">Institusi yang mengirim status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Posisi operasional</td>
          <td class="message-comparison-table__current">Permintaan berbasis pengecualian</td>
          <td class="message-comparison-table__other">Pelaporan berbasis peristiwa</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Asumsi keliru yang harus dihindari</td>
          <td class="message-comparison-table__current">Bahwa ini harus dikirim secara rutin untuk setiap pembayaran</td>
          <td class="message-comparison-table__other">Bahwa ini menghilangkan kebutuhan akan manajemen kasus proaktif</td>
        </tr>
    </tbody>
  </table>
</div>

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/id/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Laporan Status Pembayaran FI ke FI</td>
          <td class="related-messages-table__overview">Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/id/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Transfer Kredit Pelanggan FI ke FI</td>
          <td class="related-messages-table__overview">Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/id/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Transfer Kredit Antar Lembaga Keuangan</td>
          <td class="related-messages-table__overview">Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas.</td>
        </tr>
    </tbody>
  </table>
</div>

