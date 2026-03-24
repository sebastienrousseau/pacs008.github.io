---
title: pacs.028.001.05 | FI'dan FI'ya ödeme durumu talebi | pacs008
description: pacs.028 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu talep etmek üzere bir finans kuruluşu tarafından gönderilir. İstenmeyen bir durum...
lang: tr-TR
lastUpdated: true
image: /logo.svg
faq:
  - question: "Should pacs.028 be sent after every payment?"
    answer: "Usually no. It works best as a targeted exception tool, not as blanket traffic."
  - question: "What makes pacs.028 useful?"
    answer: "Clear timeout, escalation, and reconciliation rules around the original payment case."
---

# pacs.028.001.05 — FI'dan FI'ya ödeme durumu talebi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Genel bakış

pacs.028 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu talep etmek üzere bir finans kuruluşu tarafından gönderilir. İstenmeyen bir durum raporu beklemeden ödeme işleme sürecinin proaktif takibini sağlar.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 2025-02-27; kaynak bağlantıları aşağıda listelenmiştir.

## Temel veri öğeleri

- **GrpHdr** — Mesaj tanımlama ve oluşturma zaman damgası içeren Grup Başlığı
- **TxInf** — Sorgulanacak ödemeyi tanımlayan İşlem Bilgisi
- **OrgnlGrpInf** — Kaynak mesaja referans veren Orijinal Grup Bilgisi
- **OrgnlInstrId** — Kaynak ödemeden gelen Orijinal Talimat Tanımlayıcısı
- **OrgnlEndToEndId** — İzlenebilirlik için Orijinal Uçtan Uca Tanımlayıcı

## İş bağlamı

- Transit halindeki ödeme talimatları için proaktif durum sorgusunu sağlar
- Gecikmiş veya eksik ödemeleri araştıran operasyon ekiplerini destekler
- Beklemek yerine durum iletişimini başlatarak pacs.002'yi tamamlar
- İstisna işleme ve SLA izleme iş akışlarında kullanılır

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
          <td class="operational-matrix-table__right">Transit halindeki ödeme talimatları için proaktif durum sorgusunu sağlar</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Sorgulanacak ödemeyi tanımlayan İşlem Bilgisi</td>
          <td class="operational-matrix-table__right">Gecikmiş veya eksik ödemeleri araştıran operasyon ekiplerini destekler</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Kaynak mesaja referans veren Orijinal Grup Bilgisi</td>
          <td class="operational-matrix-table__right">Beklemek yerine durum iletişimini başlatarak pacs.002&#39;yi tamamlar</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — Kaynak ödemeden gelen Orijinal Talimat Tanımlayıcısı</td>
          <td class="operational-matrix-table__right">İstisna işleme ve SLA izleme iş akışlarında kullanılır</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — İzlenebilirlik için Orijinal Uçtan Uca Tanımlayıcı</td>
          <td class="operational-matrix-table__right">Talimat veren aracı, belirli bir ödemenin durumunu talep etmek üzere talimat alan aracıya pacs.028 gönderir. Talimat alan aracı, mevcut işleme durumunu içeren bir pacs.002 ile yanıt verir.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ ve şema bağlamı

- MT199 durum sorgusu kalıplarının ve manuel SWIFT mesaj sorgularının yerine geçer
- CBPR+, orijinal mesaj tanımlayıcılarına bağlı yapılandırılmış durum taleplerini destekler
- gpi üzerinden UETR tabanlı takip, manuel sorgu ihtiyacını azaltır
- Otomatik ödeme operasyonları panolarına giderek daha fazla entegre edilmektedir

## Mesaj akışı

Talimat veren aracı, belirli bir ödemenin durumunu talep etmek üzere talimat alan aracıya pacs.028 gönderir. Talimat alan aracı, mevcut işleme durumunu içeren bir pacs.002 ile yanıt verir.

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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">pacs008 içindeki mevcut uygulama</td>
          <td class="version-diff-table__takeaway">Mevcut durum-istek modellemesi için uygundur.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">Daha sonraki katalog sürümü</td>
          <td class="version-diff-table__takeaway">Gelecekteki birlikte çalışabilirlik planlaması için daha yeni katalog sürümünü inceleyin.</td>
        </tr>
    </tbody>
  </table>
</div>

## Açıklamalı XML örneği

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Alan açıklamaları

- `MsgId`: İsteğin kendisi, alttaki ödemeden ayrı ve denetlenebilir bir tanımlayıcı gerektirir.
- `OrgnlInstrId`: Eşleştirme doğruluğunu en üst düzeye çıkarmak için orijinal talimattaki tam kaynak tanımlayıcıyı kullanın.
- `OrgnlEndToEndId`: Müşteri izlenebilirliğini dahil etmek, operasyon ekiplerinin sorguyu daha hızlı mutabık kılmasına yardımcı olur.

## Karşılaştır pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="Karşılaştır pacs.028 vs pacs.002">
  <table>
    <caption>Karşılaştır pacs.028 vs pacs.002</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Boyut</th>
        <th>pacs.028.001.05</th>
        <th>Karşılaştırma mesajı</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Temel amaç</td>
          <td class="message-comparison-table__current">Durum iste</td>
          <td class="message-comparison-table__other">Durum bildir</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Etkileşimi kim başlatır</td>
          <td class="message-comparison-table__current">Durumu soran kurum</td>
          <td class="message-comparison-table__other">Durumu gönderen kurum</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Operasyonel duruş</td>
          <td class="message-comparison-table__current">İstisna güdümlü sorgu</td>
          <td class="message-comparison-table__other">Olay güdümlü raporlama</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Kaçınılması gereken yanlış varsayım</td>
          <td class="message-comparison-table__current">Her ödeme için rutin olarak gönderilmesi gerektiği</td>
          <td class="message-comparison-table__other">Proaktif vaka yönetimi ihtiyacını ortadan kaldırdığı</td>
        </tr>
    </tbody>
  </table>
</div>

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/tr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI&#39;dan FI&#39;ya ödeme durumu raporu</td>
          <td class="related-messages-table__overview">pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tr/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">FI&#39;dan FI&#39;ya müşteri kredi transferi</td>
          <td class="related-messages-table__overview">pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tr/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Finansal kuruluşlar arası kredi transferi</td>
          <td class="related-messages-table__overview">pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler.</td>
        </tr>
    </tbody>
  </table>
</div>

