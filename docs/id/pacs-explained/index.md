---
title: "Penjelasan pesan PACS | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: id-ID
lastUpdated: true
image: /logo.webp
---

# Penjelasan pesan PACS

A detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Siklus Hidup Pembayaran

Siklus hidup pembayaran pacs lengkap melibatkan enam tahap dan beberapa jenis pesan yang bekerja bersama.

**Tahap 1 — Inisiasi.** Pembayaran berasal dari domain pelanggan-ke-bank (pain.001). Bank debitur menerima instruksi dan memetakannya ke domain antarbank.

**Tahap 2 — Instruksi antarbank.** Agen debitur membuat pacs.008 dan mengirimnya ke agen berikutnya dalam rantai. Dalam alur serial, pacs.008 berpindah tahap demi tahap melalui perantara. Dalam alur cover, pacs.008 langsung dari agen debitur ke agen kreditur, sementara pacs.009 terpisah membawa jalur pendanaan melalui rantai koresponden.

**Tahap 3 — Laporan status.** Di setiap hop, agen penerima dapat mengembalikan pacs.002 yang mengonfirmasi penerimaan (ACCP/ACSP/ACSC), penolakan (RJCT), atau status tertunda (PDNG). Di CBPR+, pacs.002 wajib untuk semua komunikasi status pembayaran.

**Tahap 4 — Penyelesaian.** Penyelesaian terjadi melalui sistem kliring (CLRG), pada rekening koresponden (INDA/INGA), atau melalui pembayaran cover (COVE). Tanggal dan jumlah penyelesaian antarbank menentukan kapan dan berapa yang diselesaikan.

**Tahap 5 — Kredit ke penerima.** Agen kreditur mengkredit penerima dan dapat mengirim pemberitahuan pelanggan.

**Tahap 6 — Penanganan pengecualian.** Jika penerima tidak dapat dikredit setelah penyelesaian, pacs.004 mengembalikan dana melalui rantai. Jika pengirim menemukan kesalahan atau penipuan, pacs.007 berjalan maju melalui rantai. Jika status tidak diketahui, pacs.028 menanyakan agen berikutnya dan jawaban kembali melalui pacs.002.

### Alur serial

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Alur cover

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## Struktur XML pacs.008

pacs.008 terdiri dari dua blok utama: header grup (GrpHdr) dan informasi transaksi transfer kredit (CdtTrfTxInf).

### Header Grup (GrpHdr)

Header grup muncul tepat satu kali per pesan dan berisi:

- **MsgId** — Pengenal pesan unik yang ditetapkan oleh agen pengirim. Maksimal 35 karakter, harus unik per pengirim.
- **CreDtTm** — Timestamp pembuatan dalam format ISO 8601.
- **NbOfTxs** — Jumlah transaksi individual dalam pesan.
- **SttlmInf** — Informasi penyelesaian termasuk metode penyelesaian (SttlmMtd) dan opsional sistem kliring serta rekening penyelesaian.
- **IntrBkSttlmDt** — Tanggal penyelesaian antarbank.
- **PmtTpInf** — Informasi jenis pembayaran termasuk prioritas, tingkat layanan, instrumen lokal, dan tujuan kategori.

### Informasi Transaksi Transfer Kredit (CdtTrfTxInf)

Setiap transaksi berisi:

- **PmtId** — Pengenal pembayaran: InstrId, EndToEndId, TxId, dan UETR.
- **IntrBkSttlmAmt** — Jumlah penyelesaian antarbank dengan kode mata uang.
- **InstdAmt** — Jumlah asli yang diinstruksikan (dapat berbeda dari jumlah penyelesaian karena konversi mata uang).
- **ChrgBr** — Kode penanggung biaya (DEBT, CRED, SHAR, atau SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — Nama, alamat, identifikasi, rekening, dan agen debitur.
- **Cdtr / CdtrAcct / CdtrAgt** — Nama, alamat, identifikasi, rekening, dan agen kreditur.
- **IntrmyAgt1 / 2 / 3** — Hingga tiga agen perantara dalam rantai.
- **RmtInf** — Informasi remitansi, baik tidak terstruktur (teks bebas) maupun terstruktur (referensi dokumen, jumlah, tanggal).
- **Purp** — Kode tujuan terstruktur.
- **RgltryRptg** — Detail pelaporan regulasi.

## Pengenal pembayaran

Pesan pacs menggunakan beberapa pengenal yang memiliki peran berbeda dalam rantai pembayaran.

<div class="api-fields-table" tabindex="0" aria-label="Pengenal pembayaran">
  <table>
    <caption>Pengenal pembayaran dan perannya</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Pengenal</th>
        <th scope="col">Ditetapkan oleh</th>
        <th scope="col">Berubah dalam rantai?</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">Setiap agen pengirim</td>
          <td class="api-fields-table__constraint">Ya — baru per pesan</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">Setiap agen penginstruksi</td>
          <td class="api-fields-table__constraint">Ya — dapat berubah per hop</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">Pengirim (debitur)</td>
          <td class="api-fields-table__constraint">Tidak — tidak boleh diubah</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">Agen penginstruksi pertama</td>
          <td class="api-fields-table__constraint">Tidak — tidak boleh diubah</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">Agen debitur</td>
          <td class="api-fields-table__constraint">Tidak — pelacakan universal</td>
        </tr>
    </tbody>
  </table>
</div>

## Metode penyelesaian

Elemen SttlmMtd mendefinisikan cara penyelesaian antarbank terjadi.

- **CLRG** — Penyelesaian melalui sistem kliring seperti TARGET2, EURO1, atau CHIPS. Paling umum untuk kliring domestik dan regional.
- **INDA** — Penyelesaian pada pembukuan agen yang diinstruksikan. Agen debitur memiliki rekening nostro pada agen berikutnya. Khas untuk perbankan koresponden bilateral.
- **INGA** — Penyelesaian pada pembukuan agen penginstruksi. Agen yang diinstruksikan memiliki rekening nostro pada agen pengirim. Lebih jarang dari INDA.
- **COVE** — Penyelesaian melalui pembayaran cover terpisah. pacs.009 membawa jalur pendanaan sementara pacs.008 membawa data pelanggan secara langsung. Digunakan dalam perbankan koresponden lintas batas.

## Kode penanggung biaya

Elemen ChrgBr menentukan siapa yang menanggung biaya pembayaran.

- **DEBT** — Debitur menanggung semua biaya (setara MT103: OUR). Kreditur menerima jumlah penuh.
- **CRED** — Kreditur menanggung semua biaya (setara MT103: BEN). Biaya dipotong dari transfer.
- **SHAR** — Biaya dibagi (setara MT103: SHA). Masing-masing pihak membayar biaya agennya sendiri. Paling umum untuk pembayaran lintas batas.
- **SLEV** — Biaya mengikuti tingkat layanan. Wajib untuk SEPA. Tanpa pemotongan dari jumlah transfer.

## Format alamat pos

### Alamat terstruktur

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### Alamat tidak terstruktur (usang untuk CBPR+ setelah November 2026)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

Batasan utama: StrtNm maksimal 70 karakter (CBPR+), TwnNm maksimal 35 karakter (CBPR+), Ctry dalam format ISO 3166-1 alpha-2, AdrLine maksimal 70 karakter per baris dan maksimal 7 baris.

## Identifikasi pihak

Pihak dalam pacs.008 mendukung beberapa metode identifikasi:

- **BIC** — Kode Pengenal Bisnis per ISO 9362. 8 atau 11 karakter (BBBBCCLL atau BBBBCCLLBBB). Digunakan di FinInstnId/BICFI untuk agen dan OrgId/AnyBIC untuk pihak.
- **LEI** — Pengenal Entitas Hukum per ISO 17442. 20 karakter alfanumerik. Muncul di OrgId/LEI untuk pihak dan FinInstnId/LEI untuk agen. Meningkatkan disambiguasi entitas untuk pelaporan regulasi.
- **IBAN** — Nomor Rekening Bank Internasional per ISO 13616. Digunakan di DbtrAcct/Id/IBAN dan CdtrAcct/Id/IBAN.
- **ID organisasi** — Pengenal berbasis skema lainnya (nomor pajak, DUNS, nomor pelanggan) melalui OrgId/Othr dengan kode nama skema.
- **ID pribadi** — Untuk orang perseorangan: tanggal dan tempat lahir, paspor (CCPT), KTP (NIDN), atau SIM (DRLC) melalui PrvtId.

## Informasi remitansi

Data remitansi dalam pacs.008 menggunakan elemen RmtInf dengan dua bentuk:

**Tidak terstruktur** — Teks bebas hingga 140 karakter per kemunculan. Sederhana tetapi membatasi rekonsiliasi otomatis.

**Terstruktur** — Referensi dokumen dengan kode jenis, nomor, tanggal, dan jumlah. Jenis dokumen umum: CINV (faktur komersial), CREN (nota kredit), SOAC (laporan rekening). Mendukung referensi kreditur ISO 11649 (RF + digit cek + referensi) melalui CdtrRefInf. Memungkinkan pencocokan faktur otomatis dan pembayaran multi-faktur.

## UETR dan pelacakan gpi

UETR (Unique End-to-End Transaction Reference) adalah UUID v4 yang dihasilkan oleh agen debitur. Muncul di PmtId/UETR di seluruh pacs.008, pacs.009, pacs.002, pacs.004, pacs.007, dan pacs.028. Harus tetap tidak berubah sepanjang seluruh rantai pembayaran.

SWIFT gpi menggunakan UETR untuk melacak pembayaran melalui database Tracker berbasis cloud. Setiap agen mengonfirmasi penerimaan dan pemrosesan, memungkinkan visibilitas ujung ke ujung. SLA gpi untuk pembayaran lintas batas menargetkan kredit di hari yang sama ke rekening kreditur.

## Referensi

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

