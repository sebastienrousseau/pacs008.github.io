---
title: Panduan pemilihan pesan | pacs008
description: Pilih pesan pacs ISO 20022 yang tepat untuk pembuatan, pelaporan status, retur, pembalikan, dan permintaan status.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# Panduan pemilihan pesan

Pilih keluarga pacs berdasarkan peristiwa bisnis terlebih dahulu, lalu berdasarkan skema dan model operasional.



## Matriks keputusan cepat

<div class="decision-matrix-table" tabindex="0" aria-label="Matriks keputusan cepat">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
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
          <td class="decision-matrix-table__id"><a href="/id/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">Laporan Status Pembayaran FI ke FI</td>
          <td class="decision-matrix-table__overview">Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/id/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">Direct Debit Pelanggan FI ke FI</td>
          <td class="decision-matrix-table__overview">Pesan pacs.003 dipertukarkan antara lembaga keuangan untuk mengeksekusi instruksi debit langsung pelanggan. Pesan ini memungkinkan bank kreditur untuk menagih dana dari bank debitur atas nama kreditur.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/id/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Retur Pembayaran</td>
          <td class="decision-matrix-table__overview">Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran tidak dapat diterapkan, dikirim secara keliru, atau sedang ditarik kembali oleh lembaga asal.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/id/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">Pembalikan Pembayaran FI ke FI</td>
          <td class="decision-matrix-table__overview">Pesan pacs.007 digunakan untuk membalikkan instruksi pembayaran yang sebelumnya dikirim yang belum diselesaikan atau untuk meminta pembalikan pembayaran yang telah diselesaikan. Berbeda dengan pacs.004 (pengembalian), pesan ini diinisiasi oleh agen yang memberi instruksi asli.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/id/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">Transfer Kredit Pelanggan FI ke FI</td>
          <td class="decision-matrix-table__overview">Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/id/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Transfer Kredit Antar Lembaga Keuangan</td>
          <td class="decision-matrix-table__overview">Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/id/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Direct Debit Antar Lembaga Keuangan</td>
          <td class="decision-matrix-table__overview">Pesan pacs.010 digunakan antara lembaga keuangan untuk transaksi debit langsung pada rekening lembaga itu sendiri. Pesan ini memungkinkan satu lembaga untuk menagih dana langsung dari rekening lembaga lain.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/id/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">Permintaan Status Pembayaran FI ke FI</td>
          <td class="decision-matrix-table__overview">Pesan pacs.028 dikirim oleh lembaga keuangan untuk meminta status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memungkinkan pelacakan proaktif pemrosesan pembayaran tanpa menunggu laporan status yang tidak diminta.</td>
        </tr>
    </tbody>
  </table>
</div>

## Titik perbandingan umum

<div class="comparison-points-table" tabindex="0" aria-label="Titik perbandingan umum">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>Perbandingan</th>
        <th>Perbedaan utama</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">Pembayaran nasabah versus perpindahan dana institusional atau pembayaran penutup</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">Retur dari pihak penerima versus pembalikan dari pihak pengirim</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">Laporan status versus permintaan status</td>
        </tr>
    </tbody>
  </table>
</div>

## Halaman pesan yang didukung

- [`pacs.002.001.12`](/id/pacs.002.001.12/) — Laporan Status Pembayaran FI ke FI
- [`pacs.003.001.09`](/id/pacs.003.001.09/) — Direct Debit Pelanggan FI ke FI
- [`pacs.004.001.11`](/id/pacs.004.001.11/) — Retur Pembayaran
- [`pacs.007.001.11`](/id/pacs.007.001.11/) — Pembalikan Pembayaran FI ke FI
- [`pacs.008.001.13`](/id/pacs.008.001.13/) — Transfer Kredit Pelanggan FI ke FI
- [`pacs.009.001.10`](/id/pacs.009.001.10/) — Transfer Kredit Antar Lembaga Keuangan
- [`pacs.010.001.05`](/id/pacs.010.001.05/) — Direct Debit Antar Lembaga Keuangan
- [`pacs.028.001.05`](/id/pacs.028.001.05/) — Permintaan Status Pembayaran FI ke FI

