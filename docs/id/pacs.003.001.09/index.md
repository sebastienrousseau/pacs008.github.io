---
title: pacs.003.001.09 | Direct Debit Pelanggan FI ke FI | pacs008
description: Pesan pacs.003 dipertukarkan antara lembaga keuangan untuk mengeksekusi instruksi debit langsung pelanggan. Pesan ini memungkinkan bank kreditur untuk...
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — Direct Debit Pelanggan FI ke FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
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
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## Ikhtisar

Pesan pacs.003 dipertukarkan antara lembaga keuangan untuk mengeksekusi instruksi debit langsung pelanggan. Pesan ini memungkinkan bank kreditur untuk menagih dana dari bank debitur atas nama kreditur.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 2025-02-27; tautan sumber tercantum di bawah.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan informasi penyelesaian
- **DrctDbtTxInf** — Informasi Transaksi Debit Langsung dengan jumlah dan pihak-pihak
- **Cdtr** — Identifikasi kreditur dan rincian rekening
- **CdtrAgt** — Identifikasi Agen Kreditur (lembaga penagih)
- **DbtrAgt** — Identifikasi Agen Debitur (lembaga pembayar)

## Konteks bisnis

- Mendukung skema debit langsung SEPA Core dan B2B
- Digunakan untuk penagihan pembayaran berulang seperti langganan, tagihan utilitas, dan pembayaran cicilan pinjaman
- Memerlukan referensi mandat yang valid antara debitur dan kreditur
- Memungkinkan penagihan massal beberapa instruksi debit langsung dalam satu pesan

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header dengan identifikasi pesan dan informasi penyelesaian</td>
          <td class="operational-matrix-table__right">Mendukung skema debit langsung SEPA Core dan B2B</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Informasi Transaksi Debit Langsung dengan jumlah dan pihak-pihak</td>
          <td class="operational-matrix-table__right">Digunakan untuk penagihan pembayaran berulang seperti langganan, tagihan utilitas, dan pembayaran cicilan pinjaman</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Identifikasi kreditur dan rincian rekening</td>
          <td class="operational-matrix-table__right">Memerlukan referensi mandat yang valid antara debitur dan kreditur</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Identifikasi Agen Kreditur (lembaga penagih)</td>
          <td class="operational-matrix-table__right">Memungkinkan penagihan massal beberapa instruksi debit langsung dalam satu pesan</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Identifikasi Agen Debitur (lembaga pembayar)</td>
          <td class="operational-matrix-table__right">Agen kreditur menginisiasi pacs.003 menuju agen debitur untuk menagih dana. Agen debitur memvalidasi mandat, memeriksa cakupan rekening, dan menyelesaikan atau mengembalikan transaksi.</td>
        </tr>
    </tbody>
  </table>
</div>

## Konteks CBPR+ dan skema

- Persyaratan alamat terstruktur dan identifikasi pihak berlaku sama untuk debit langsung
- Data terkait mandat harus sepenuhnya terstruktur mulai November 2026
- Menggantikan format debit langsung gaya MT104 warisan dalam alur lintas batas
- Validasi identifikasi skema kreditur semakin ditegakkan

## Alur pesan

Agen kreditur menginisiasi pacs.003 menuju agen debitur untuk menagih dana. Agen debitur memvalidasi mandat, memeriksa cakupan rekening, dan menyelesaikan atau mengembalikan transaksi.

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
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">Implementasi saat ini di pacs008</td>
          <td class="version-diff-table__takeaway">Berguna untuk pemodelan referensi debit langsung dalam proyek saat ini.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">Revisi katalog berikutnya</td>
          <td class="version-diff-table__takeaway">Periksa revisi yang lebih baru untuk pembaruan mandat, status, dan interoperabilitas sebelum penggunaan pada implementasi baru.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contoh XML beranotasi

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Komentar bidang

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: Keberhasilan debit langsung sering lebih bergantung pada kualitas rekening dan mandat daripada pada struktur XML.

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
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
          <td class="related-messages-table__id"><a href="/id/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Retur Pembayaran</td>
          <td class="related-messages-table__overview">Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran tidak dapat diterapkan, dikirim secara keliru, atau sedang ditarik kembali oleh lembaga asal.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/id/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">Pembalikan Pembayaran FI ke FI</td>
          <td class="related-messages-table__overview">Pesan pacs.007 digunakan untuk membalikkan instruksi pembayaran yang sebelumnya dikirim yang belum diselesaikan atau untuk meminta pembalikan pembayaran yang telah diselesaikan. Berbeda dengan pacs.004 (pengembalian), pesan ini diinisiasi oleh agen yang memberi instruksi asli.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/id/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Laporan Status Pembayaran FI ke FI</td>
          <td class="related-messages-table__overview">Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran.</td>
        </tr>
    </tbody>
  </table>
</div>

