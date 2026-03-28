---
title: "pacs.002.001.12 | Laporan Status Pembayaran FI ke FI | pacs008"
description: Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi...
lang: id-ID
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.002 a payment message?"
    answer: "No. It reports status for an earlier instruction rather than moving value itself."
  - question: "Should pacs.002 replace internal workflow states?"
    answer: "No. It should inform them, but internal case states still need their own operational logic."
---

# pacs.002.001.12 — Laporan Status Pembayaran FI ke FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Ikhtisar

Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 2025-02-27; tautan sumber tercantum di bawah.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan stempel waktu pembuatan
- **OrgnlGrpInfAndSts** — Informasi Grup Asli dan Status untuk pelaporan tingkat massal
- **TxInfAndSts** — Informasi Transaksi dan Status untuk hasil transaksi individual
- **StsRsnInf** — Informasi Alasan Status dengan kode alasan terstruktur
- **OrgnlTxRef** — Referensi Transaksi Asli yang menghubungkan kembali ke instruksi sumber

## Konteks bisnis

- Digunakan untuk mengonfirmasi penyelesaian atau melaporkan penolakan transfer kredit, debit langsung, dan pengembalian pembayaran
- Memungkinkan rekonsiliasi antara agen yang memberi instruksi dan agen yang diinstruksikan
- Diperlukan dalam alur CBPR+ untuk mengakui pemrosesan pesan pacs.008 dan pacs.009
- Mendukung pelaporan status baik tingkat grup massal maupun tingkat transaksi individual

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
          <td class="operational-matrix-table__right">Digunakan untuk mengonfirmasi penyelesaian atau melaporkan penolakan transfer kredit, debit langsung, dan pengembalian pembayaran</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Informasi Grup Asli dan Status untuk pelaporan tingkat massal</td>
          <td class="operational-matrix-table__right">Memungkinkan rekonsiliasi antara agen yang memberi instruksi dan agen yang diinstruksikan</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Informasi Transaksi dan Status untuk hasil transaksi individual</td>
          <td class="operational-matrix-table__right">Diperlukan dalam alur CBPR+ untuk mengakui pemrosesan pesan pacs.008 dan pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Informasi Alasan Status dengan kode alasan terstruktur</td>
          <td class="operational-matrix-table__right">Mendukung pelaporan status baik tingkat grup massal maupun tingkat transaksi individual</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Referensi Transaksi Asli yang menghubungkan kembali ke instruksi sumber</td>
          <td class="operational-matrix-table__right">Agen yang diinstruksikan (penerima) mengirim pacs.002 kembali ke agen yang memberi instruksi (pengirim) untuk mengonfirmasi penerimaan, penyelesaian, atau penolakan instruksi pembayaran yang diterima seperti pacs.008 atau pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## Konteks CBPR+ dan skema

- Menggantikan narasi status MT199 dan field 79 dalam pesan MT
- CBPR+ mewajibkan pacs.002 untuk semua komunikasi status pembayaran
- Kode alasan terstruktur menggantikan penjelasan penolakan teks bebas
- Integrasi pelacakan SWIFT gpi memerlukan pacs.002 untuk transparansi ujung-ke-ujung

## Alur pesan

Agen yang diinstruksikan (penerima) mengirim pacs.002 kembali ke agen yang memberi instruksi (pengirim) untuk mengonfirmasi penerimaan, penyelesaian, atau penolakan instruksi pembayaran yang diterima seperti pacs.008 atau pacs.009.

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">Implementasi saat ini di pacs008</td>
          <td class="version-diff-table__takeaway">Gunakan ini saat menyesuaikan dengan contoh XML proyek saat ini dan aset validasi.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">Revisi katalog berikutnya</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contoh XML beranotasi

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Komentar bidang

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## Bandingkan pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="Bandingkan pacs.002 vs pacs.028">
  <table>
    <caption>Bandingkan pacs.002 vs pacs.028</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensi</th>
        <th>pacs.002.001.12</th>
        <th>Pesan pembanding</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Tujuan utama</td>
          <td class="message-comparison-table__current">Laporkan status</td>
          <td class="message-comparison-table__other">Minta status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Siapa yang memulai interaksi</td>
          <td class="message-comparison-table__current">Institusi yang mengirim status</td>
          <td class="message-comparison-table__other">Institusi yang meminta status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Posisi operasional</td>
          <td class="message-comparison-table__current">Pelaporan berbasis peristiwa</td>
          <td class="message-comparison-table__other">Permintaan berbasis pengecualian</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Asumsi keliru yang harus dihindari</td>
          <td class="message-comparison-table__current">Bahwa pelaporan status menggantikan alur penelusuran dan investigasi</td>
          <td class="message-comparison-table__other">Bahwa setiap pembayaran memerlukan permintaan status eksplisit</td>
        </tr>
    </tbody>
  </table>
</div>

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
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
          <td class="related-messages-table__id"><a href="/id/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Transfer Kredit Antar Lembaga Keuangan</td>
          <td class="related-messages-table__overview">Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/id/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">Permintaan Status Pembayaran FI ke FI</td>
          <td class="related-messages-table__overview">Pesan pacs.028 dikirim oleh lembaga keuangan untuk meminta status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memungkinkan pelacakan proaktif pemrosesan pembayaran tanpa menunggu laporan status yang tidak diminta.</td>
        </tr>
    </tbody>
  </table>
</div>

