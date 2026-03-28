---
title: "pacs.007.001.11 | FI'dan FI'ya ödeme geri alma mesajı | pacs008"
description: pacs.007 mesajı, henüz takas edilmemiş daha önce gönderilmiş bir ödeme talimatını tersine çevirmek veya takas edilmiş bir ödemenin tersine çevrilmesini...
lang: tr-TR
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.007 only for fraud scenarios?"
    answer: "No. Fraud is a major use case, but any instructing-side need to reverse a payment can trigger it."
  - question: "Can it be handled like a normal return?"
    answer: "No. Reversal timing, reason capture, and reconciliation differ materially from returns."
---

# pacs.007.001.11 — FI'dan FI'ya ödeme geri alma mesajı

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Genel bakış

pacs.007 mesajı, henüz takas edilmemiş daha önce gönderilmiş bir ödeme talimatını tersine çevirmek veya takas edilmiş bir ödemenin tersine çevrilmesini talep etmek için kullanılır. pacs.004'ten (iade) farklı olarak, orijinal talimat veren aracı tarafından başlatılır.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 2025-02-27; kaynak bağlantıları aşağıda listelenmiştir.

## Temel veri öğeleri

- **GrpHdr** — Mesaj tanımlama ve oluşturma zaman damgası içeren Grup Başlığı
- **TxInf** — Tersine çevirme tutarı ve tarafları içeren İşlem Bilgisi
- **OrgnlGrpInf** — Kaynak mesaja referans veren Orijinal Grup Bilgisi
- **RvslRsnInf** — Yapılandırılmış neden kodları içeren Tersine Çevirme Nedeni Bilgisi
- **OrgnlTxRef** — Uçtan uca izlenebilirlik için Orijinal İşlem Referansı

## İş bağlamı

- Orijinal gönderici, takas öncesinde veya sonrasında bir hata tespit ettiğinde başlatılır
- Hızlı tersine çevirme gerektiren dolandırıcılık senaryolarında kullanılır
- Orijinal ödeme tutarlarının hem tam hem de kısmi tersine çevrilmesini destekler
- Alt akış işleme için yapılandırılmış tersine çevirme neden kodları taşır

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Mesaj tanımlama ve oluşturma zaman damgası içeren Grup Başlığı</td>
          <td class="operational-matrix-table__right">Orijinal gönderici, takas öncesinde veya sonrasında bir hata tespit ettiğinde başlatılır</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Tersine çevirme tutarı ve tarafları içeren İşlem Bilgisi</td>
          <td class="operational-matrix-table__right">Hızlı tersine çevirme gerektiren dolandırıcılık senaryolarında kullanılır</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Kaynak mesaja referans veren Orijinal Grup Bilgisi</td>
          <td class="operational-matrix-table__right">Orijinal ödeme tutarlarının hem tam hem de kısmi tersine çevrilmesini destekler</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Yapılandırılmış neden kodları içeren Tersine Çevirme Nedeni Bilgisi</td>
          <td class="operational-matrix-table__right">Alt akış işleme için yapılandırılmış tersine çevirme neden kodları taşır</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Uçtan uca izlenebilirlik için Orijinal İşlem Referansı</td>
          <td class="operational-matrix-table__right">Talimat veren aracı (orijinal gönderici), daha önce talimat verilmiş bir ödemeyi tersine çevirmek üzere ödeme zinciri boyunca ileriye pacs.007 gönderir. Her aracı tersine çevirme talimatını işler ve takası buna göre ayarlar.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ ve şema bağlamı

- pacs.004'ten yönle ayrılır — tersine çevirme göndericiden ileriye, iade lehdarden geriye akar
- CBPR+, otomatik eşleştirme için orijinal mesaj tanımlayıcıları ile eşleştirme gerektirir
- Yapılandırılmış neden kodları, eski MT mesajlarındaki serbest metin açıklamalarının yerine geçer
- Anlık ödeme geri çağırma ve dolandırıcılık önleme iş akışlarında giderek daha fazla kullanılmaktadır

## Mesaj akışı

Talimat veren aracı (orijinal gönderici), daha önce talimat verilmiş bir ödemeyi tersine çevirmek üzere ödeme zinciri boyunca ileriye pacs.007 gönderir. Her aracı tersine çevirme talimatını işler ve takası buna göre ayarlar.

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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">pacs008 içindeki mevcut uygulama</td>
          <td class="version-diff-table__takeaway">Geri çevirme iş akışı modellemesi için iyi bir başlangıç noktasıdır.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">Daha sonraki katalog sürümleri</td>
          <td class="version-diff-table__takeaway">Mevcut piyasa altyapısına uyum için sonraki sürümleri inceleyin.</td>
        </tr>
    </tbody>
  </table>
</div>

## Açıklamalı XML örneği

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### Alan açıklamaları

- `MsgId`: The reversal needs its own identifier.
- `OrgnlInstrId`: Mutabakat kırılmalarını önlemek için orijinal ödeme referansını koruyun.
- `RvslRsnInf`: Use structured reversal reasons so cases can be routed correctly.

## Karşılaştır pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="Karşılaştır pacs.007 vs pacs.004">
  <table>
    <caption>Karşılaştır pacs.007 vs pacs.004</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Boyut</th>
        <th>pacs.007.001.11</th>
        <th>Karşılaştırma mesajı</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Temel amaç</td>
          <td class="message-comparison-table__current">Reverse a previously instructed payment</td>
          <td class="message-comparison-table__other">Return settled funds</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Original instructing side</td>
          <td class="message-comparison-table__other">Receiving / beneficiary side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Forward through the chain</td>
          <td class="message-comparison-table__other">Back through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">En uygun olduğu durum</td>
          <td class="message-comparison-table__current">Geri çağırma, hata veya dolandırıcılık kaynaklı geri çevirme işleme</td>
          <td class="message-comparison-table__other">Mutabakattan sonra iade işleme</td>
        </tr>
    </tbody>
  </table>
</div>

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

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
          <td class="related-messages-table__id"><a href="/tr/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">FI&#39;dan FI&#39;ya müşteri kredi transferi</td>
          <td class="related-messages-table__overview">pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tr/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Ödeme iadesi</td>
          <td class="related-messages-table__overview">pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak kuruluş tarafından geri çağrıldığında fon akışını tersine çevirir.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI&#39;dan FI&#39;ya ödeme durumu raporu</td>
          <td class="related-messages-table__overview">pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar.</td>
        </tr>
    </tbody>
  </table>
</div>

