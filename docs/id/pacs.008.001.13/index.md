---
title: pacs.008.001.13 | Transfer Kredit Pelanggan FI ke FI | pacs008
description: Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa...
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — Transfer Kredit Pelanggan FI ke FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Nama ISO</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Status pendaftaran</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Tahun</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Versi</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## Ikhtisar

Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 2025-02-27; tautan sumber tercantum di bawah.

## Elemen data utama

- **GrpHdr** — Group Header dengan ID pesan, tanggal pembuatan, jumlah transaksi, dan informasi penyelesaian
- **CdtTrfTxInf** — Informasi Transaksi Transfer Kredit dengan jumlah, biaya, dan tujuan
- **Dbtr / DbtrAgt** — Identifikasi dan rincian rekening Debitur dan Agen Debitur
- **Cdtr / CdtrAgt** — Identifikasi dan rincian rekening Kreditur dan Agen Kreditur
- **RmtInf** — Informasi Remitansi untuk referensi pembayaran terstruktur atau tidak terstruktur

## Konteks bisnis

- Pesan utama untuk transfer kredit lintas batas dan domestik yang diinisiasi pelanggan
- Digunakan di seluruh SEPA SCT, SEPA Instant, CBPR+, dan sistem kliring nasional
- Membawa informasi remitansi terstruktur untuk mendukung rekonsiliasi langsung otomatis
- Mendukung metode penyelesaian serial, cover, dan langsung untuk rantai pembayaran multi-kaki

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header dengan ID pesan, tanggal pembuatan, jumlah transaksi, dan informasi penyelesaian</td>
          <td class="operational-matrix-table__right">Pesan utama untuk transfer kredit lintas batas dan domestik yang diinisiasi pelanggan</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Informasi Transaksi Transfer Kredit dengan jumlah, biaya, dan tujuan</td>
          <td class="operational-matrix-table__right">Digunakan di seluruh SEPA SCT, SEPA Instant, CBPR+, dan sistem kliring nasional</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identifikasi dan rincian rekening Debitur dan Agen Debitur</td>
          <td class="operational-matrix-table__right">Membawa informasi remitansi terstruktur untuk mendukung rekonsiliasi langsung otomatis</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identifikasi dan rincian rekening Kreditur dan Agen Kreditur</td>
          <td class="operational-matrix-table__right">Mendukung metode penyelesaian serial, cover, dan langsung untuk rantai pembayaran multi-kaki</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Informasi Remitansi untuk referensi pembayaran terstruktur atau tidak terstruktur</td>
          <td class="operational-matrix-table__right">Agen debitur membuat pacs.008 dan mengirimkannya ke agen kreditur (langsung atau melalui perantara). Setiap agen dalam rantai memvalidasi, memperkaya, dan meneruskan instruksi hingga agen kreditur mengkreditkan rekening penerima manfaat.</td>
        </tr>
    </tbody>
  </table>
</div>

## Konteks CBPR+ dan skema

- Menggantikan MT103 dan MT103+ untuk transfer kredit pelanggan lintas batas
- Tenggat alamat terstruktur November 2026 berlaku untuk semua alamat pos pihak
- SWIFT gpi memerlukan pacs.008 untuk pelacakan ujung-ke-ujung berbasis UETR
- 13 revisi mencerminkan evolusi skema yang berkelanjutan di seluruh infrastruktur pasar

## Alur pesan

Agen debitur membuat pacs.008 dan mengirimkannya ke agen kreditur (langsung atau melalui perantara). Setiap agen dalam rantai memvalidasi, memperkaya, dan meneruskan instruksi hingga agen kreditur mengkreditkan rekening penerima manfaat.

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">Revisi awal</td>
          <td class="version-diff-table__takeaway">Terutama berguna untuk analisis migrasi dari sistem lama dan konteks riwayat versi.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">Revisi modern sebelum versi saat ini</td>
          <td class="version-diff-table__takeaway">Inilah revisi yang paling mungkin muncul dalam proyek migrasi atau koeksistensi terbaru.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">Revisi katalog saat ini</td>
          <td class="version-diff-table__takeaway">Gunakan ini untuk perencanaan versi saat ini, sambil tetap memvalidasi pedoman penggunaan skema dan kesiapan pihak lawan.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contoh XML beranotasi

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### Komentar bidang

- `MsgId`: Ini harus mengidentifikasi envelope pesan, bukan referensi pembayaran pelanggan akhir.
- `EndToEndId`: Jaga keterlacakan yang terlihat oleh pelanggan tetap stabil di seluruh sistem lanjutan bila memungkinkan.
- `UETR`: Gunakan ini secara konsisten dalam lingkungan lintas batas dan yang menuntut pelacakan tinggi; jangan hasilkan secara ad hoc pada tahap proses berikutnya.
- `IntrBkSttlmAmt`: Validasi jumlah dan mata uang menggunakan aturan bisnis sebelum validasi skema.
- `Dbtr` / `Cdtr`: Kualitas pihak, struktur alamat, dan pengenal biasanya menjadi penentu utama tingkat perbaikan.

## Bandingkan pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="Bandingkan pacs.008 vs pacs.009">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensi</th>
        <th>pacs.008.001.13</th>
        <th>Pesan pembanding</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Tujuan utama</td>
          <td class="message-comparison-table__current">Transfer kredit nasabah</td>
          <td class="message-comparison-table__other">Transfer kredit rekening milik institusi sendiri atau tahap penutup pendanaan</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Pemilik bisnis</td>
          <td class="message-comparison-table__current">Operasi pembayaran nasabah</td>
          <td class="message-comparison-table__other">Operasi tresuri / perbankan koresponden / pendanaan</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Pasangan umum</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">aliran pacs.002, pacs.004, dan kadang-kadang aliran pacs.008 yang terkait</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Asumsi keliru yang harus dihindari</td>
          <td class="message-comparison-table__current">Bahwa semua transfer antarbank termasuk di sini</td>
          <td class="message-comparison-table__other">Bahwa ini dapat menggantikan instruksi transfer kredit nasabah</td>
        </tr>
    </tbody>
  </table>
</div>

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## Versi yang didukung

<div class="message-versions-table" tabindex="0" aria-label="Versi yang didukung">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Versi</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>Saat ini</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/id/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Retur Pembayaran</td>
          <td class="related-messages-table__overview">Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran tidak dapat diterapkan, dikirim secara keliru, atau sedang ditarik kembali oleh lembaga asal.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/id/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Transfer Kredit Antar Lembaga Keuangan</td>
          <td class="related-messages-table__overview">Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas.</td>
        </tr>
    </tbody>
  </table>
</div>

