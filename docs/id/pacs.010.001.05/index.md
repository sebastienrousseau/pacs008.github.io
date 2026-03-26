---
title: "pacs.010.001.05 | Direct Debit Antar Lembaga Keuangan | pacs008"
description: Pesan pacs.010 digunakan antara lembaga keuangan untuk transaksi debit langsung pada rekening lembaga itu sendiri. Pesan ini memungkinkan satu lembaga...
lang: id-ID
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.010 common in retail payment products?"
    answer: "Usually no. It fits bank-to-bank direct-debit scenarios better than standard retail products."
  - question: "What should teams design first?"
    answer: "Start with approval rules, bilateral controls, and exception handling before finalising XML templates."
---

# pacs.010.001.05 — Direct Debit Antar Lembaga Keuangan

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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

Pesan pacs.010 digunakan antara lembaga keuangan untuk transaksi debit langsung pada rekening lembaga itu sendiri. Pesan ini memungkinkan satu lembaga untuk menagih dana langsung dari rekening lembaga lain.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 2025-02-27; tautan sumber tercantum di bawah.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan informasi penyelesaian
- **DrctDbtTxInf** — Informasi Transaksi Debit Langsung dengan jumlah penagihan
- **Cdtr / CdtrAgt** — Identifikasi lembaga kreditur dan agennya
- **Dbtr / DbtrAgt** — Identifikasi lembaga debitur dan agennya
- **IntrBkSttlmAmt** — Jumlah Penyelesaian Antarbank dalam mata uang penyelesaian

## Konteks bisnis

- Mendukung penagihan debit langsung antarbank antara lembaga keuangan
- Digunakan untuk penagihan biaya, margin call, dan kewajiban penyelesaian institusional
- Memerlukan pengaturan bilateral yang telah disepakati sebelumnya antara lembaga peserta
- Penting untuk manajemen kas institusional dan siklus penyelesaian antarbank

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header dengan identifikasi pesan dan informasi penyelesaian</td>
          <td class="operational-matrix-table__right">Mendukung penagihan debit langsung antarbank antara lembaga keuangan</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Informasi Transaksi Debit Langsung dengan jumlah penagihan</td>
          <td class="operational-matrix-table__right">Digunakan untuk penagihan biaya, margin call, dan kewajiban penyelesaian institusional</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identifikasi lembaga kreditur dan agennya</td>
          <td class="operational-matrix-table__right">Memerlukan pengaturan bilateral yang telah disepakati sebelumnya antara lembaga peserta</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identifikasi lembaga debitur dan agennya</td>
          <td class="operational-matrix-table__right">Penting untuk manajemen kas institusional dan siklus penyelesaian antarbank</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Jumlah Penyelesaian Antarbank dalam mata uang penyelesaian</td>
          <td class="operational-matrix-table__right">Lembaga kreditur mengirim pacs.010 ke lembaga debitur untuk menagih dana berdasarkan pengaturan yang telah disepakati sebelumnya. Lembaga debitur memvalidasi permintaan dan menyelesaikan atau menolak debit langsung.</td>
        </tr>
    </tbody>
  </table>
</div>

## Konteks CBPR+ dan skema

- Menggantikan elemen MT204 untuk pemrosesan debit langsung antarbank
- Identifikasi pihak terstruktur mengikuti persyaratan yang sama seperti pesan pacs lainnya
- Validasi pengidentifikasi institusional (BIC, LEI) bersifat wajib
- Termasuk dalam peta jalan adopsi ISO 20022 penuh di seluruh infrastruktur pasar

## Alur pesan

Lembaga kreditur mengirim pacs.010 ke lembaga debitur untuk menagih dana berdasarkan pengaturan yang telah disepakati sebelumnya. Lembaga debitur memvalidasi permintaan dan menyelesaikan atau menolak debit langsung.

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">Implementasi saat ini di pacs008</td>
          <td class="version-diff-table__takeaway">Menjadi titik acuan untuk dukungan debit langsung antar lembaga dalam proyek saat ini.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">Revisi katalog berikutnya</td>
          <td class="version-diff-table__takeaway">Tinjau sebelum mengadopsi persyaratan infrastruktur yang lebih baru.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contoh XML beranotasi

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Komentar bidang

- `InstrId`: Use an identifier that links back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need clear bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly. This is not a retail-customer debit model.

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/id/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Transfer Kredit Antar Lembaga Keuangan</td>
          <td class="related-messages-table__overview">Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/id/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Laporan Status Pembayaran FI ke FI</td>
          <td class="related-messages-table__overview">Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/id/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Direct Debit Pelanggan FI ke FI</td>
          <td class="related-messages-table__overview">Pesan pacs.003 dipertukarkan antara lembaga keuangan untuk mengeksekusi instruksi debit langsung pelanggan. Pesan ini memungkinkan bank kreditur untuk menagih dana dari bank debitur atas nama kreditur.</td>
        </tr>
    </tbody>
  </table>
</div>

