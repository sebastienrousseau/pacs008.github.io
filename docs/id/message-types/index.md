---
title: Jenis Pesan | pacs008 ISO 20022
description: Definisi dan versi pesan pacs ISO 20022 yang didukung.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# Jenis Pesan

pacs008 mencakup definisi pesan inti pacs.008 dan pesan terkait yang digunakan dalam alur orkestrasi dan rekonsiliasi.

## Dukungan yang disertakan

<div class="message-coverage-table" tabindex="0" aria-label="Dukungan yang disertakan">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Jenis pesan</th>
        <th>Deskripsi</th>
        <th>Tahun</th>
        <th>Ikhtisar</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/id/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">Laporan Status Pembayaran FI ke FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/id/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">Direct Debit Pelanggan FI ke FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Pesan pacs.003 dipertukarkan antara lembaga keuangan untuk mengeksekusi instruksi debit langsung pelanggan. Pesan ini memungkinkan bank kreditur untuk menagih dana dari bank debitur atas nama kreditur.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/id/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">Retur Pembayaran</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran tidak dapat diterapkan, dikirim secara keliru, atau sedang ditarik kembali oleh lembaga asal.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/id/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">Pembalikan Pembayaran FI ke FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Pesan pacs.007 digunakan untuk membalikkan instruksi pembayaran yang sebelumnya dikirim yang belum diselesaikan atau untuk meminta pembalikan pembayaran yang telah diselesaikan. Berbeda dengan pacs.004 (pengembalian), pesan ini diinisiasi oleh agen yang memberi instruksi asli.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/id/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">Transfer Kredit Pelanggan FI ke FI</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/id/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">Transfer Kredit Antar Lembaga Keuangan</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/id/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">Direct Debit Antar Lembaga Keuangan</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Pesan pacs.010 digunakan antara lembaga keuangan untuk transaksi debit langsung pada rekening lembaga itu sendiri. Pesan ini memungkinkan satu lembaga untuk menagih dana langsung dari rekening lembaga lain.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/id/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">Permintaan Status Pembayaran FI ke FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Pesan pacs.028 dikirim oleh lembaga keuangan untuk meminta status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memungkinkan pelacakan proaktif pemrosesan pembayaran tanpa menunggu laporan status yang tidak diminta.</td>
        </tr>
    </tbody>
  </table>
</div>

## Model pengiriman

Setiap jenis pesan yang didukung dilengkapi dengan berkas contoh XML dan logika validasi sehingga tim dapat menstandarkan pembuatan dan pengujian regresi di berbagai saluran.

## Memilih pesan yang tepat

Katalog pesan paling penting ketika tim harus memutuskan pesan mana yang memulai alur, mana yang melaporkan status, dan mana yang memperbaiki atau membalikkan proses.

Lihat [panduan pemilihan pesan](/id/message-selection/) untuk ringkasan keputusan lintas alur pacs yang didukung.

## Konteks pasar 2026

- **SEPA SCT / SCT Inst**: pacs.008 tetap sentral untuk pertukaran transfer kredit dan pemrosesan pembayaran instan.
- **CBPR+**: pacs.008 terus menggantikan muatan lintas batas gaya MT103 dengan data terstruktur yang lebih kaya.
- **Alamat terstruktur**: panduan pasar saat ini menunjukkan peralihan November 2026 dari alamat pos yang sepenuhnya tidak terstruktur.
- **Metode serial dan STP**: rantai bank-ke-bank multi-tahap tetap penting, dan varian pemrosesan langsung tetap penting untuk efisiensi operasional.

## Kemampuan operasional

pacs008 menyediakan pembuatan dan validasi berbasis contoh XML di seluruh revisi definisi pesan yang didukung:

- membandingkan versi
- menguji regresi pembaruan skema
- memperkuat data pesan pembayaran keluar sebelum rilis
- mendukung tim produk, operasi, dan migrasi dari satu basis kode

