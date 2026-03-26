---
title: "pacs.009.001.10 | Finansal kuruluşlar arası kredi transferi | pacs008"
description: pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için...
lang: tr-TR
lastUpdated: true
image: /logo.webp
faq:
  - question: "When should I choose pacs.009 over pacs.008?"
    answer: "Choose pacs.009 for own-account transfers and cover legs; choose pacs.008 for customer-credit-transfer instructions."
  - question: "Why is pacs.009 often harder to reconcile than expected?"
    answer: "Because banks must preserve the relationship between treasury funding, correspondent legs, and any linked customer payment."
---

# pacs.009.001.10 — Finansal kuruluşlar arası kredi transferi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## Genel bakış

pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 2025-02-27; kaynak bağlantıları aşağıda listelenmiştir.

## Temel veri öğeleri

- **GrpHdr** — Mesaj tanımlama ve takas bilgisi içeren Grup Başlığı
- **CdtTrfTxInf** — Bankalar arası takas tutarı içeren Kredi Transferi İşlem Bilgisi
- **Dbtr / DbtrAgt** — Borçlu kuruluş ve aracısının kimlik bilgileri
- **Cdtr / CdtrAgt** — Alacaklı kuruluş ve aracısının kimlik bilgileri
- **IntrBkSttlmAmt** — Takas para birimi cinsinden Bankalar Arası Takas Tutarı

## İş bağlamı

- Bankaların kendi hesapları arasındaki transferler ve teminat ödemeleri için kullanılır
- Muhabir bankacılık ortakları arasında likidite yönetimini destekler
- Teminat yöntemiyle takas edilen müşteri kredi transferlerinin teminat bacağını taşır
- Finans kuruluşları arasında hazine ve fonlama operasyonlarını mümkün kılar

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
          <td class="operational-matrix-table__right">Bankaların kendi hesapları arasındaki transferler ve teminat ödemeleri için kullanılır</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Bankalar arası takas tutarı içeren Kredi Transferi İşlem Bilgisi</td>
          <td class="operational-matrix-table__right">Muhabir bankacılık ortakları arasında likidite yönetimini destekler</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Borçlu kuruluş ve aracısının kimlik bilgileri</td>
          <td class="operational-matrix-table__right">Teminat yöntemiyle takas edilen müşteri kredi transferlerinin teminat bacağını taşır</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Alacaklı kuruluş ve aracısının kimlik bilgileri</td>
          <td class="operational-matrix-table__right">Finans kuruluşları arasında hazine ve fonlama operasyonlarını mümkün kılar</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Takas para birimi cinsinden Bankalar Arası Takas Tutarı</td>
          <td class="operational-matrix-table__right">Borçlu kuruluş, kendi fonlarını transfer etmek üzere alacaklı kuruluşa pacs.009 gönderir. Teminat yöntemi ödemelerinde pacs.009 fonlama bacağını sağlarken, pacs.008 müşteri talimatını ayrı bir yoldan taşır.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ ve şema bağlamı

- Kuruluşlar arası transferler için MT202 ve MT202COV'nin yerine geçer
- Teminat yöntemi akışları, pacs.009'u temel pacs.008 müşteri talimatıyla eşleştirir
- Yapılandırılmış taraf verileri ve LEI tanımlama gereksinimleri giderek artmaktadır
- SWIFT gpi, muhabir bankacılık şeffaflığı için pacs.009'u kapsar

## Mesaj akışı

Borçlu kuruluş, kendi fonlarını transfer etmek üzere alacaklı kuruluşa pacs.009 gönderir. Teminat yöntemi ödemelerinde pacs.009 fonlama bacağını sağlarken, pacs.008 müşteri talimatını ayrı bir yoldan taşır.

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">pacs008 içindeki mevcut uygulama</td>
          <td class="version-diff-table__takeaway">FI kredi transfer akışları için mevcut proje desteğiyle uyumludur.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">Daha sonraki katalog sürümleri</td>
          <td class="version-diff-table__takeaway">Muhabirlik ve karşılama ödemesi ortamlarında yol haritası planlaması için önemlidir.</td>
        </tr>
    </tbody>
  </table>
</div>

## Açıklamalı XML örneği

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

### Alan açıklamaları

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## Karşılaştır pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="Karşılaştır pacs.009 vs pacs.008">
  <table>
    <caption>Karşılaştır pacs.009 vs pacs.008</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Boyut</th>
        <th>pacs.009.001.10</th>
        <th>Karşılaştırma mesajı</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Temel amaç</td>
          <td class="message-comparison-table__current">Kurumun kendi hesabına kredi transferi veya karşılama ayağı</td>
          <td class="message-comparison-table__other">Müşteri kredi transferi</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">İş sahibi</td>
          <td class="message-comparison-table__current">Hazine / muhabirlik / fonlama operasyonları</td>
          <td class="message-comparison-table__other">Müşteri ödeme operasyonları</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Tipik eşleşmeler</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004 ve bağlantılı pacs.008 akışları</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Kaçınılması gereken yanlış varsayım</td>
          <td class="message-comparison-table__current">Bunun yalnızca daha teknik bir pacs.008 olduğu</td>
          <td class="message-comparison-table__other">Kurum fonlama akışlarını sorunsuz taşıyabildiği</td>
        </tr>
    </tbody>
  </table>
</div>

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/tr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI&#39;dan FI&#39;ya ödeme durumu raporu</td>
          <td class="related-messages-table__overview">pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tr/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Finansal kuruluşlar arası doğrudan borçlandırma</td>
          <td class="related-messages-table__overview">pacs.010 mesajı, kuruluşun kendi hesabındaki doğrudan borçlandırma işlemleri için finans kuruluşları arasında kullanılır. Bir kuruluşun başka bir kuruluşun hesabından doğrudan fon tahsil etmesini sağlar.</td>
        </tr>
    </tbody>
  </table>
</div>

