---
title: pacs.008.001.13 | FI'dan FI'ya müşteri kredi transferi | pacs008
description: pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI'dan FI'ya müşteri kredi transferi

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
          <td class="message-metadata-table__label"><strong>ISO adı</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Kayıt durumu</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Yıl</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Sürüm</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## Genel bakış

pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 2025-02-27; kaynak bağlantıları aşağıda listelenmiştir.

## Temel veri öğeleri

- **GrpHdr** — Mesaj kimliği, oluşturma tarihi, işlem sayısı ve takas bilgisi içeren Grup Başlığı
- **CdtTrfTxInf** — Tutar, masraflar ve amaç içeren Kredi Transferi İşlem Bilgisi
- **Dbtr / DbtrAgt** — Borçlu ve Borçlu Aracısı kimlik bilgileri ve hesap detayları
- **Cdtr / CdtrAgt** — Alacaklı ve Alacaklı Aracısı kimlik bilgileri ve hesap detayları
- **RmtInf** — Yapılandırılmış veya yapılandırılmamış ödeme referansları için Havale Bilgisi

## İş bağlamı

- Müşteri tarafından başlatılan sınır ötesi ve yurt içi kredi transferleri için birincil mesajdır
- SEPA SCT, SEPA Instant, CBPR+ ve ulusal takas sistemlerinde kullanılır
- Doğrudan mutabakatı desteklemek için yapılandırılmış havale bilgisi taşır
- Çok bacaklı ödeme zincirleri için sıralı, teminat ve doğrudan takas yöntemlerini destekler

<div class="operational-matrix-table" tabindex="0" aria-label="Temel veri öğeleri İş bağlamı">
  <table>
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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Mesaj kimliği, oluşturma tarihi, işlem sayısı ve takas bilgisi içeren Grup Başlığı</td>
          <td class="operational-matrix-table__right">Müşteri tarafından başlatılan sınır ötesi ve yurt içi kredi transferleri için birincil mesajdır</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Tutar, masraflar ve amaç içeren Kredi Transferi İşlem Bilgisi</td>
          <td class="operational-matrix-table__right">SEPA SCT, SEPA Instant, CBPR+ ve ulusal takas sistemlerinde kullanılır</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Borçlu ve Borçlu Aracısı kimlik bilgileri ve hesap detayları</td>
          <td class="operational-matrix-table__right">Doğrudan mutabakatı desteklemek için yapılandırılmış havale bilgisi taşır</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Alacaklı ve Alacaklı Aracısı kimlik bilgileri ve hesap detayları</td>
          <td class="operational-matrix-table__right">Çok bacaklı ödeme zincirleri için sıralı, teminat ve doğrudan takas yöntemlerini destekler</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Yapılandırılmış veya yapılandırılmamış ödeme referansları için Havale Bilgisi</td>
          <td class="operational-matrix-table__right">Borçlu aracı bir pacs.008 oluşturur ve alacaklı aracıya gönderir (doğrudan veya aracılar üzerinden). Zincirdeki her aracı talimatı doğrular, zenginleştirir ve iletir; alacaklı aracı lehdarın hesabına alacak kaydedene kadar süreç devam eder.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ ve şema bağlamı

- Sınır ötesi müşteri kredi transferleri için MT103 ve MT103+'ın yerine geçer
- Kasım 2026 yapılandırılmış adres son tarihi tüm taraf posta adresleri için geçerlidir
- SWIFT gpi, UETR tabanlı uçtan uca takip için pacs.008 gerektirir
- 13 revizyon, piyasa altyapılarındaki devam eden şema evrimini yansıtır

## Mesaj akışı

Borçlu aracı bir pacs.008 oluşturur ve alacaklı aracıya gönderir (doğrudan veya aracılar üzerinden). Zincirdeki her aracı talimatı doğrular, zenginleştirir ve iletir; alacaklı aracı lehdarın hesabına alacak kaydedene kadar süreç devam eder.

## Sürüm fark tablosu

<div class="version-diff-table" tabindex="0" aria-label="Sürüm fark tablosu">
  <table>
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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">Erken sürümler</td>
          <td class="version-diff-table__takeaway">Esas olarak eski sistemlerden geçiş analizi ve sürüm geçmişi bağlamı için yararlıdır.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">Mevcut sürümden önceki modern sürümler</td>
          <td class="version-diff-table__takeaway">Son dönem geçiş veya birlikte çalışma projelerinde en çok karşılaşılması muhtemel sürümler bunlardır.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">Geçerli katalog sürümü</td>
          <td class="version-diff-table__takeaway">Bunu mevcut sürüm planlaması için kullanın; ancak şema kullanım kuralları ve karşı taraf hazırlığı yine de doğrulanmalıdır.</td>
        </tr>
    </tbody>
  </table>
</div>

## Açıklamalı XML örneği

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

### Alan açıklamaları

- `MsgId`: Bu alan son müşteri ödeme referansını değil, mesaj zarfının kendisini tanımlamalıdır.
- `EndToEndId`: Mümkün olduğunda müşteri tarafındaki izlenebilirliği sonraki sistemler boyunca istikrarlı tutun.
- `UETR`: Bunu sınır ötesi ve yoğun izleme gerektiren ortamlarda tutarlı şekilde kullanın; sonraki işlem aşamalarında ad hoc üretmeyin.
- `IntrBkSttlmAmt`: Şema doğrulamasından önce tutar ve para birimini iş kurallarıyla doğrulayın.
- `Dbtr` / `Cdtr`: Taraf verisi kalitesi, adres yapısı ve tanımlayıcılar genellikle düzeltme oranlarının ana belirleyicileridir.

## Karşılaştır pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="Karşılaştır pacs.008 vs pacs.009">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Boyut</th>
        <th>pacs.008.001.13</th>
        <th>Karşılaştırma mesajı</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Temel amaç</td>
          <td class="message-comparison-table__current">Müşteri kredi transferi</td>
          <td class="message-comparison-table__other">Kurumun kendi hesabına kredi transferi veya karşılama ayağı</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">İş sahibi</td>
          <td class="message-comparison-table__current">Müşteri ödeme operasyonları</td>
          <td class="message-comparison-table__other">Hazine / muhabirlik / fonlama operasyonları</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Tipik eşleşmeler</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004 ve bazen ilişkili pacs.008 akışları</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Kaçınılması gereken yanlış varsayım</td>
          <td class="message-comparison-table__current">Tüm bankadan bankaya transferlerin burada yer aldığı</td>
          <td class="message-comparison-table__other">Müşteri kredi transferi talimatlarının yerini alabileceği</td>
        </tr>
    </tbody>
  </table>
</div>

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## Desteklenen sürümler

<div class="message-versions-table" tabindex="0" aria-label="Desteklenen sürümler">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Sürüm</th>
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
          <td class="message-versions-table__status"><strong>Güncel</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/tr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI&#39;dan FI&#39;ya ödeme durumu raporu</td>
          <td class="related-messages-table__overview">pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tr/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Ödeme iadesi</td>
          <td class="related-messages-table__overview">pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak kuruluş tarafından geri çağrıldığında fon akışını tersine çevirir.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tr/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Finansal kuruluşlar arası kredi transferi</td>
          <td class="related-messages-table__overview">pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler.</td>
        </tr>
    </tbody>
  </table>
</div>

