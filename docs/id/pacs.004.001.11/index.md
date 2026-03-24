---
title: pacs.004.001.11 | Retur Pembayaran | pacs008
description: Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran...
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Retur Pembayaran

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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

Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran tidak dapat diterapkan, dikirim secara keliru, atau sedang ditarik kembali oleh lembaga asal.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 2025-02-27; tautan sumber tercantum di bawah.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan stempel waktu pembuatan
- **TxInf** — Informasi Transaksi dengan jumlah pengembalian dan pihak-pihak
- **OrgnlGrpInf** — Informasi Grup Asli yang menghubungkan ke pesan sumber
- **RtrRsnInf** — Informasi Alasan Pengembalian dengan kode alasan terstruktur
- **OrgnlTxRef** — Referensi Transaksi Asli untuk pencocokan dan rekonsiliasi

## Konteks bisnis

- Menangani pengembalian pasca-penyelesaian ketika rekening penerima manfaat tidak dapat dikreditkan
- Mendukung skenario penarikan kembali di mana pengirim asal meminta pengembalian dana
- Membawa kode alasan pengembalian terstruktur untuk transparansi regulasi dan operasional
- Berlaku untuk pengembalian transfer kredit (pacs.008) dan pengembalian debit langsung (pacs.003)

<div class="operational-matrix-table" tabindex="0" aria-label="Elemen data utama Konteks bisnis">
  <table>
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
          <td class="operational-matrix-table__right">Menangani pengembalian pasca-penyelesaian ketika rekening penerima manfaat tidak dapat dikreditkan</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Informasi Transaksi dengan jumlah pengembalian dan pihak-pihak</td>
          <td class="operational-matrix-table__right">Mendukung skenario penarikan kembali di mana pengirim asal meminta pengembalian dana</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Informasi Grup Asli yang menghubungkan ke pesan sumber</td>
          <td class="operational-matrix-table__right">Membawa kode alasan pengembalian terstruktur untuk transparansi regulasi dan operasional</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Informasi Alasan Pengembalian dengan kode alasan terstruktur</td>
          <td class="operational-matrix-table__right">Berlaku untuk pengembalian transfer kredit (pacs.008) dan pengembalian debit langsung (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Referensi Transaksi Asli untuk pencocokan dan rekonsiliasi</td>
          <td class="operational-matrix-table__right">Agen yang diinstruksikan mengirim pacs.004 kembali melalui rantai pembayaran untuk mengembalikan dana yang sebelumnya telah diselesaikan. Setiap agen dalam rantai memproses pengembalian dan mengkreditkan kembali rekening yang relevan.</td>
        </tr>
    </tbody>
  </table>
</div>

## Konteks CBPR+ dan skema

- Menggantikan MT103 RETURN dan pesan pengembalian metode cover
- Kode alasan pengembalian distandarkan dan dapat dibaca mesin berdasarkan ISO 20022
- CBPR+ memerlukan data referensi transaksi asli yang lengkap untuk pencocokan
- Pelacakan SWIFT gpi diperluas ke transaksi pengembalian untuk visibilitas ujung-ke-ujung

## Alur pesan

Agen yang diinstruksikan mengirim pacs.004 kembali melalui rantai pembayaran untuk mengembalikan dana yang sebelumnya telah diselesaikan. Setiap agen dalam rantai memproses pengembalian dan mengkreditkan kembali rekening yang relevan.

## Tabel perbedaan versi

<div class="version-diff-table" tabindex="0" aria-label="Tabel perbedaan versi">
  <table>
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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">Implementasi saat ini di pacs008</td>
          <td class="version-diff-table__takeaway">Selaras dengan contoh XML saat ini untuk retur pembayaran.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">Revisi katalog berikutnya</td>
          <td class="version-diff-table__takeaway">Tinjau revisi pesan retur yang lebih baru saat peningkatan skema atau pihak lawan baru masuk dalam cakupan.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contoh XML beranotasi

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### Komentar bidang

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: Kualitas kode alasan sangat penting untuk komunikasi pelanggan di sistem lanjutan dan perutean operasional.

## Bandingkan pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="Bandingkan pacs.004 vs pacs.007">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensi</th>
        <th>pacs.004.001.11</th>
        <th>Pesan pembanding</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Tujuan utama</td>
          <td class="message-comparison-table__current">Mengembalikan dana yang sudah diselesaikan</td>
          <td class="message-comparison-table__other">Membalik pembayaran yang sebelumnya telah diinstruksikan</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Diinisiasi oleh</td>
          <td class="message-comparison-table__current">Pihak penerima / penerima manfaat</td>
          <td class="message-comparison-table__other">Pihak pemberi instruksi asal</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Arah alur</td>
          <td class="message-comparison-table__current">Kembali melalui rantai</td>
          <td class="message-comparison-table__other">Maju melalui rantai</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Paling cocok untuk</td>
          <td class="message-comparison-table__current">Penanganan pengembalian pasca-penyelesaian</td>
          <td class="message-comparison-table__other">Penanganan pembalikan karena recall, kesalahan, atau penipuan</td>
        </tr>
    </tbody>
  </table>
</div>

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/id/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Direct Debit Pelanggan FI ke FI</td>
          <td class="related-messages-table__overview">Pesan pacs.003 dipertukarkan antara lembaga keuangan untuk mengeksekusi instruksi debit langsung pelanggan. Pesan ini memungkinkan bank kreditur untuk menagih dana dari bank debitur atas nama kreditur.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/id/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Laporan Status Pembayaran FI ke FI</td>
          <td class="related-messages-table__overview">Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran.</td>
        </tr>
    </tbody>
  </table>
</div>

