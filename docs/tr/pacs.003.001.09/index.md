---
title: "pacs.003.001.09 | FI'dan FI'ya müşteri doğrudan borçlandırması | pacs008"
description: pacs.003 mesajı, bir müşteri doğrudan borçlandırma talimatını yürütmek üzere finans kuruluşları arasında iletilir. Alacaklının bankasının, alacaklı adına...
lang: tr-TR
lastUpdated: true
image: /logo.svg
faq:
  - question: "pacs.003, pacs.008'in doğrudan borçlandırma aynası mıdır?"
    answer: "Hayır. Farklı talimat, zamanlama ve istisna kurallarına sahip müşteri doğrudan borçlandırma akışlarını yönetir."
  - question: "Operasyonel olarak en önemli olan nedir?"
    answer: "Talimat kalitesi, borçlu hesap kuralları ve iade işleme, XML üretiminden daha önemlidir."
---

# pacs.003.001.09 — FI'dan FI'ya müşteri doğrudan borçlandırması

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Alan</th>
        <th scope="col">Değer</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO adı</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Kayıt durumu</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Yıl</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Sürüm</strong></td>
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## Genel bakış

pacs.003 mesajı, bir müşteri doğrudan borçlandırma talimatını yürütmek üzere finans kuruluşları arasında iletilir. Alacaklının bankasının, alacaklı adına borçlunun bankasından fon tahsil etmesini sağlar.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 2025-02-27; kaynak bağlantıları aşağıda listelenmiştir.

## Temel veri öğeleri

- **GrpHdr** — Mesaj tanımlama ve takas bilgisi içeren Grup Başlığı
- **DrctDbtTxInf** — Tutar ve tarafları içeren Doğrudan Borçlandırma İşlem Bilgisi
- **Cdtr** — Alacaklı kimlik bilgileri ve hesap detayları
- **CdtrAgt** — Alacaklı Aracısı (tahsilat kuruluşu) kimlik bilgileri
- **DbtrAgt** — Borçlu Aracısı (ödeme kuruluşu) kimlik bilgileri

## İş bağlamı

- SEPA Core ve B2B doğrudan borçlandırma şemalarını destekler
- Abonelikler, fatura ödemeleri ve kredi geri ödemeleri gibi tekrarlayan ödeme tahsilatı için kullanılır
- Borçlu ile alacaklı arasında geçerli bir yetki referansı gerektirir
- Tek bir mesajda birden fazla doğrudan borçlandırma talimatının toplu tahsilatını sağlar

<div class="operational-matrix-table" tabindex="0" aria-label="Temel veri öğeleri İş bağlamı">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Temel veri öğeleri</th>
        <th>İş bağlamı</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Mesaj tanımlama ve takas bilgisi içeren Grup Başlığı</td>
          <td class="operational-matrix-table__right">SEPA Core ve B2B doğrudan borçlandırma şemalarını destekler</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Tutar ve tarafları içeren Doğrudan Borçlandırma İşlem Bilgisi</td>
          <td class="operational-matrix-table__right">Abonelikler, fatura ödemeleri ve kredi geri ödemeleri gibi tekrarlayan ödeme tahsilatı için kullanılır</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Alacaklı kimlik bilgileri ve hesap detayları</td>
          <td class="operational-matrix-table__right">Borçlu ile alacaklı arasında geçerli bir yetki referansı gerektirir</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Alacaklı Aracısı (tahsilat kuruluşu) kimlik bilgileri</td>
          <td class="operational-matrix-table__right">Tek bir mesajda birden fazla doğrudan borçlandırma talimatının toplu tahsilatını sağlar</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Borçlu Aracısı (ödeme kuruluşu) kimlik bilgileri</td>
          <td class="operational-matrix-table__right">Alacaklı aracı, fon tahsil etmek üzere borçlu aracıya pacs.003 başlatır. Borçlu aracı yetkiyi doğrular, hesap bakiyesini kontrol eder ve işlemi takas eder veya iade eder.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ ve şema bağlamı

- Yapılandırılmış adres ve taraf tanımlama gereksinimleri doğrudan borçlandırmalara eşit şekilde uygulanır
- Yetkiyle ilgili veriler Kasım 2026'dan itibaren tamamen yapılandırılmış olmalıdır
- Sınır ötesi akışlarda eski MT104 tarzı doğrudan borçlandırma formatlarının yerine geçer
- Alacaklı şema tanımlama doğrulaması giderek daha fazla uygulanmaktadır

## Mesaj akışı

Alacaklı aracı, fon tahsil etmek üzere borçlu aracıya pacs.003 başlatır. Borçlu aracı yetkiyi doğrular, hesap bakiyesini kontrol eder ve işlemi takas eder veya iade eder.

## Sürüm fark tablosu

<div class="version-diff-table" tabindex="0" aria-label="Sürüm fark tablosu">
  <table>
    <caption>Sürüm fark tablosu</caption>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Sürüm aralığı</th>
        <th>Neden önemli</th>
        <th>Uygulama çıkarımı</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">pacs008 içindeki mevcut uygulama</td>
          <td class="version-diff-table__takeaway">Mevcut projede doğrudan borçlandırma referanslarının modellenmesi için faydalıdır.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">Daha sonraki katalog sürümleri</td>
          <td class="version-diff-table__takeaway">Yeni bir uygulamaya başlamadan önce yetki, durum ve birlikte çalışabilirlik güncellemeleri için sonraki sürümleri inceleyin.</td>
        </tr>
    </tbody>
  </table>
</div>

## Açıklamalı XML örneği

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

### Alan açıklamaları

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: Doğrudan borçlandırmanın başarısı çoğu zaman XML yapısından çok hesap ve talimat kalitesine bağlıdır.

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

## İlgili mesajlar
<div class="related-messages-table" tabindex="0" aria-label="İlgili mesajlar">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Mesaj türü</th>
        <th>Açıklama</th>
        <th>Genel bakış</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/tr/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Ödeme iadesi</td>
          <td class="related-messages-table__overview">pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak kuruluş tarafından geri çağrıldığında fon akışını tersine çevirir.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tr/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">FI&#39;dan FI&#39;ya ödeme geri alma mesajı</td>
          <td class="related-messages-table__overview">pacs.007 mesajı, henüz takas edilmemiş daha önce gönderilmiş bir ödeme talimatını tersine çevirmek veya takas edilmiş bir ödemenin tersine çevrilmesini talep etmek için kullanılır. pacs.004&#39;ten (iade) farklı olarak, orijinal talimat veren aracı tarafından başlatılır.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI&#39;dan FI&#39;ya ödeme durumu raporu</td>
          <td class="related-messages-table__overview">pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar.</td>
        </tr>
    </tbody>
  </table>
</div>

