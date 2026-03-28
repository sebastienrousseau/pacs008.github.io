---
title: "pacs.002.001.12 | FI'dan FI'ya ödeme durumu raporu | pacs008"
description: pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki...
lang: tr-TR
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.002 a payment message?"
    answer: "No. It reports status for an earlier instruction rather than moving value itself."
  - question: "Should pacs.002 replace internal workflow states?"
    answer: "No. It should inform them, but internal case states still need their own operational logic."
---

# pacs.002.001.12 — FI'dan FI'ya ödeme durumu raporu

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Genel bakış

pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 2025-02-27; kaynak bağlantıları aşağıda listelenmiştir.

## Temel veri öğeleri

- **GrpHdr** — Mesaj tanımlama ve oluşturma zaman damgası içeren Grup Başlığı
- **OrgnlGrpInfAndSts** — Toplu düzeyde raporlama için Orijinal Grup Bilgisi ve Durumu
- **TxInfAndSts** — Bireysel işlem sonuçları için İşlem Bilgisi ve Durumu
- **StsRsnInf** — Yapılandırılmış neden kodları içeren Durum Nedeni Bilgisi
- **OrgnlTxRef** — Kaynak talimata geri bağlayan Orijinal İşlem Referansı

## İş bağlamı

- Kredi transferlerinin, doğrudan borçlandırmaların ve ödeme iadelerinin takas onayı veya ret bildirimi için kullanılır
- Talimat veren ve talimat alan aracılar arasında mutabakatı sağlar
- pacs.008 ve pacs.009 mesajlarının işlendiğini onaylamak için CBPR+ akışlarında gereklidir
- Hem toplu grup düzeyinde hem de bireysel işlem düzeyinde durum raporlamasını destekler

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
          <td class="operational-matrix-table__right">Kredi transferlerinin, doğrudan borçlandırmaların ve ödeme iadelerinin takas onayı veya ret bildirimi için kullanılır</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Toplu düzeyde raporlama için Orijinal Grup Bilgisi ve Durumu</td>
          <td class="operational-matrix-table__right">Talimat veren ve talimat alan aracılar arasında mutabakatı sağlar</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Bireysel işlem sonuçları için İşlem Bilgisi ve Durumu</td>
          <td class="operational-matrix-table__right">pacs.008 ve pacs.009 mesajlarının işlendiğini onaylamak için CBPR+ akışlarında gereklidir</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Yapılandırılmış neden kodları içeren Durum Nedeni Bilgisi</td>
          <td class="operational-matrix-table__right">Hem toplu grup düzeyinde hem de bireysel işlem düzeyinde durum raporlamasını destekler</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Kaynak talimata geri bağlayan Orijinal İşlem Referansı</td>
          <td class="operational-matrix-table__right">Talimat alan aracı (alıcı), pacs.008 veya pacs.009 gibi alınan bir ödeme talimatının kabulünü, takasını veya reddini onaylamak üzere talimat veren aracıya (gönderici) pacs.002 gönderir.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ ve şema bağlamı

- MT mesajlarındaki MT199 ve alan 79 durum açıklamalarının yerine geçer
- CBPR+, tüm ödeme durumu iletişimi için pacs.002 kullanımını zorunlu kılar
- Yapılandırılmış neden kodları, serbest metin ret açıklamalarının yerine geçer
- SWIFT gpi takip entegrasyonu, uçtan uca şeffaflık için pacs.002 gerektirir

## Mesaj akışı

Talimat alan aracı (alıcı), pacs.008 veya pacs.009 gibi alınan bir ödeme talimatının kabulünü, takasını veya reddini onaylamak üzere talimat veren aracıya (gönderici) pacs.002 gönderir.

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">pacs008 içindeki mevcut uygulama</td>
          <td class="version-diff-table__takeaway">Bunu mevcut proje şablonları ve doğrulama varlıklarıyla uyum sağlarken kullanın.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">Daha sonraki katalog sürümleri</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## Açıklamalı XML örneği

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Alan açıklamaları

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## Karşılaştır pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="Karşılaştır pacs.002 vs pacs.028">
  <table>
    <caption>Karşılaştır pacs.002 vs pacs.028</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Boyut</th>
        <th>pacs.002.001.12</th>
        <th>Karşılaştırma mesajı</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Temel amaç</td>
          <td class="message-comparison-table__current">Durum bildir</td>
          <td class="message-comparison-table__other">Durum iste</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Etkileşimi kim başlatır</td>
          <td class="message-comparison-table__current">Durumu gönderen kurum</td>
          <td class="message-comparison-table__other">Durumu soran kurum</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Operasyonel duruş</td>
          <td class="message-comparison-table__current">Olay güdümlü raporlama</td>
          <td class="message-comparison-table__other">İstisna güdümlü sorgu</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Kaçınılması gereken yanlış varsayım</td>
          <td class="message-comparison-table__current">Durum raporlamasının inceleme ve araştırma iş akışlarının yerini aldığı</td>
          <td class="message-comparison-table__other">Her ödemenin açık bir durum isteğine ihtiyaç duyduğu</td>
        </tr>
    </tbody>
  </table>
</div>

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/tr/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Finansal kuruluşlar arası kredi transferi</td>
          <td class="related-messages-table__overview">pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tr/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">FI&#39;dan FI&#39;ya ödeme durumu talebi</td>
          <td class="related-messages-table__overview">pacs.028 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu talep etmek üzere bir finans kuruluşu tarafından gönderilir. İstenmeyen bir durum raporu beklemeden ödeme işleme sürecinin proaktif takibini sağlar.</td>
        </tr>
    </tbody>
  </table>
</div>

