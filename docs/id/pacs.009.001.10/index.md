---
title: "pacs.009.001.10 | Transfer Kredit Antar Lembaga Keuangan | pacs008"
description: Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan...
lang: id-ID
lastUpdated: true
image: /logo.svg
faq:
  - question: "When should I choose pacs.009 over pacs.008?"
    answer: "Choose pacs.009 for own-account transfers and cover legs; choose pacs.008 for customer-credit-transfer instructions."
  - question: "Why is pacs.009 often harder to reconcile than expected?"
    answer: "Because banks must preserve the relationship between treasury funding, correspondent legs, and any linked customer payment."
---

# pacs.009.001.10 — Transfer Kredit Antar Lembaga Keuangan

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## Ikhtisar

Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 2025-02-27; tautan sumber tercantum di bawah.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan informasi penyelesaian
- **CdtTrfTxInf** — Informasi Transaksi Transfer Kredit dengan jumlah penyelesaian antarbank
- **Dbtr / DbtrAgt** — Identifikasi lembaga debitur dan agennya
- **Cdtr / CdtrAgt** — Identifikasi lembaga kreditur dan agennya
- **IntrBkSttlmAmt** — Jumlah Penyelesaian Antarbank dalam mata uang penyelesaian

## Konteks bisnis

- Digunakan untuk transfer rekening sendiri bank-ke-bank dan pembayaran cover
- Mendukung manajemen likuiditas antara mitra perbankan koresponden
- Membawa kaki cover dari transfer kredit pelanggan yang diselesaikan melalui metode cover
- Memungkinkan operasi perbendaharaan dan pendanaan antara lembaga keuangan

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
          <td class="operational-matrix-table__right">Digunakan untuk transfer rekening sendiri bank-ke-bank dan pembayaran cover</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Informasi Transaksi Transfer Kredit dengan jumlah penyelesaian antarbank</td>
          <td class="operational-matrix-table__right">Mendukung manajemen likuiditas antara mitra perbankan koresponden</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identifikasi lembaga debitur dan agennya</td>
          <td class="operational-matrix-table__right">Membawa kaki cover dari transfer kredit pelanggan yang diselesaikan melalui metode cover</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identifikasi lembaga kreditur dan agennya</td>
          <td class="operational-matrix-table__right">Memungkinkan operasi perbendaharaan dan pendanaan antara lembaga keuangan</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Jumlah Penyelesaian Antarbank dalam mata uang penyelesaian</td>
          <td class="operational-matrix-table__right">Lembaga debitur mengirim pacs.009 ke lembaga kreditur untuk mentransfer dananya sendiri. Untuk pembayaran metode cover, pacs.009 menyediakan kaki pendanaan sementara pacs.008 membawa instruksi pelanggan melalui jalur terpisah.</td>
        </tr>
    </tbody>
  </table>
</div>

## Konteks CBPR+ dan skema

- Menggantikan MT202 dan MT202COV untuk transfer antar lembaga
- Alur metode cover memasangkan pacs.009 dengan instruksi pelanggan pacs.008 yang mendasari
- Data pihak terstruktur dan identifikasi LEI semakin diperlukan
- SWIFT gpi mencakup pacs.009 untuk transparansi perbankan koresponden

## Alur pesan

Lembaga debitur mengirim pacs.009 ke lembaga kreditur untuk mentransfer dananya sendiri. Untuk pembayaran metode cover, pacs.009 menyediakan kaki pendanaan sementara pacs.008 membawa instruksi pelanggan melalui jalur terpisah.

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">Implementasi saat ini di pacs008</td>
          <td class="version-diff-table__takeaway">Sesuai dengan dukungan proyek saat ini untuk alur transfer kredit FI.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">Revisi katalog berikutnya</td>
          <td class="version-diff-table__takeaway">Penting untuk perencanaan peta jalan dalam lingkungan perbankan koresponden dan pembayaran penutup.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contoh XML beranotasi

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Komentar bidang

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## Bandingkan pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="Bandingkan pacs.009 vs pacs.008">
  <table>
    <caption>Bandingkan pacs.009 vs pacs.008</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensi</th>
        <th>pacs.009.001.10</th>
        <th>Pesan pembanding</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Tujuan utama</td>
          <td class="message-comparison-table__current">Transfer kredit rekening milik institusi sendiri atau tahap penutup pendanaan</td>
          <td class="message-comparison-table__other">Transfer kredit nasabah</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Pemilik bisnis</td>
          <td class="message-comparison-table__current">Operasi tresuri / perbankan koresponden / pendanaan</td>
          <td class="message-comparison-table__other">Operasi pembayaran nasabah</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Pasangan umum</td>
          <td class="message-comparison-table__current">aliran pacs.002, pacs.004, dan pacs.008 yang terkait</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Asumsi keliru yang harus dihindari</td>
          <td class="message-comparison-table__current">Bahwa ini sekadar pacs.008 yang lebih teknis</td>
          <td class="message-comparison-table__other">Bahwa pesan ini dapat menangani alur pendanaan antar lembaga dengan jelas</td>
        </tr>
    </tbody>
  </table>
</div>

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/id/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Laporan Status Pembayaran FI ke FI</td>
          <td class="related-messages-table__overview">Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/id/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Direct Debit Antar Lembaga Keuangan</td>
          <td class="related-messages-table__overview">Pesan pacs.010 digunakan antara lembaga keuangan untuk transaksi debit langsung pada rekening lembaga itu sendiri. Pesan ini memungkinkan satu lembaga untuk menagih dana langsung dari rekening lembaga lain.</td>
        </tr>
    </tbody>
  </table>
</div>

