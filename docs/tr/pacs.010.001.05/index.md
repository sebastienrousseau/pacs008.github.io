---
title: "pacs.010.001.05 | Finansal kuruluşlar arası doğrudan borçlandırma | pacs008"
description: pacs.010 mesajı, kuruluşun kendi hesabındaki doğrudan borçlandırma işlemleri için finans kuruluşları arasında kullanılır. Bir kuruluşun başka bir...
lang: tr-TR
lastUpdated: true
image: /logo.svg
faq:
  - question: "pacs.010 perakende ödeme ürünlerinde yaygın mıdır?"
    answer: "Genellikle hayır. Standart perakende ürünlerden çok bankalar arası doğrudan borçlandırma senaryolarına uygundur."
  - question: "Ekipler önce neyi tasarlamalı?"
    answer: "XML şablonlarını sonlandırmadan önce onay kuralları, ikili kontroller ve istisna işleme ile başlayın."
---

# pacs.010.001.05 — Finansal kuruluşlar arası doğrudan borçlandırma

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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

pacs.010 mesajı, kuruluşun kendi hesabındaki doğrudan borçlandırma işlemleri için finans kuruluşları arasında kullanılır. Bir kuruluşun başka bir kuruluşun hesabından doğrudan fon tahsil etmesini sağlar.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 2025-02-27; kaynak bağlantıları aşağıda listelenmiştir.

## Temel veri öğeleri

- **GrpHdr** — Mesaj tanımlama ve takas bilgisi içeren Grup Başlığı
- **DrctDbtTxInf** — Tahsilat tutarı içeren Doğrudan Borçlandırma İşlem Bilgisi
- **Cdtr / CdtrAgt** — Alacaklı kuruluş ve aracısının kimlik bilgileri
- **Dbtr / DbtrAgt** — Borçlu kuruluş ve aracısının kimlik bilgileri
- **IntrBkSttlmAmt** — Takas para birimi cinsinden Bankalar Arası Takas Tutarı

## İş bağlamı

- Finans kuruluşları arasında bankalar arası doğrudan borçlandırma tahsilatını destekler
- Ücret tahsilatı, teminat tamamlama çağrıları ve kurumsal takas yükümlülükleri için kullanılır
- Katılımcı kuruluşlar arasında önceden üzerinde anlaşılmış ikili düzenlemeler gerektirir
- Kurumsal nakit yönetimi ve bankalar arası takas döngüleri için kritik öneme sahiptir

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
          <td class="operational-matrix-table__right">Finans kuruluşları arasında bankalar arası doğrudan borçlandırma tahsilatını destekler</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Tahsilat tutarı içeren Doğrudan Borçlandırma İşlem Bilgisi</td>
          <td class="operational-matrix-table__right">Ücret tahsilatı, teminat tamamlama çağrıları ve kurumsal takas yükümlülükleri için kullanılır</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Alacaklı kuruluş ve aracısının kimlik bilgileri</td>
          <td class="operational-matrix-table__right">Katılımcı kuruluşlar arasında önceden üzerinde anlaşılmış ikili düzenlemeler gerektirir</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Borçlu kuruluş ve aracısının kimlik bilgileri</td>
          <td class="operational-matrix-table__right">Kurumsal nakit yönetimi ve bankalar arası takas döngüleri için kritik öneme sahiptir</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Takas para birimi cinsinden Bankalar Arası Takas Tutarı</td>
          <td class="operational-matrix-table__right">Alacaklı kuruluş, önceden üzerinde anlaşılmış bir düzenleme kapsamında fon tahsil etmek üzere borçlu kuruluşa pacs.010 gönderir. Borçlu kuruluş talebi doğrular ve doğrudan borçlandırmayı takas eder veya reddeder.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ ve şema bağlamı

- Bankalar arası doğrudan borçlandırma işleme için MT204'ün bazı unsurlarının yerine geçer
- Yapılandırılmış taraf tanımlama, diğer pacs mesajlarıyla aynı gereksinimlere uyar
- Kurumsal tanımlayıcıların (BIC, LEI) doğrulanması zorunludur
- Piyasa altyapıları genelinde tam ISO 20022 benimseme yol haritalarına dahildir

## Mesaj akışı

Alacaklı kuruluş, önceden üzerinde anlaşılmış bir düzenleme kapsamında fon tahsil etmek üzere borçlu kuruluşa pacs.010 gönderir. Borçlu kuruluş talebi doğrular ve doğrudan borçlandırmayı takas eder veya reddeder.

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">pacs008 içindeki mevcut uygulama</td>
          <td class="version-diff-table__takeaway">Mevcut projede kurumlar arası doğrudan borçlandırma desteği için referans noktasıdır.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">Daha sonraki katalog sürümü</td>
          <td class="version-diff-table__takeaway">Daha yeni altyapı gereksinimlerini benimsemeden önce gözden geçirin.</td>
        </tr>
    </tbody>
  </table>
</div>

## Açıklamalı XML örneği

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Alan açıklamaları

- `InstrId`: Use an identifier that links back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need clear bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly. This is not a retail-customer debit model.

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/tr/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Finansal kuruluşlar arası kredi transferi</td>
          <td class="related-messages-table__overview">pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI&#39;dan FI&#39;ya ödeme durumu raporu</td>
          <td class="related-messages-table__overview">pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tr/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">FI&#39;dan FI&#39;ya müşteri doğrudan borçlandırması</td>
          <td class="related-messages-table__overview">pacs.003 mesajı, bir müşteri doğrudan borçlandırma talimatını yürütmek üzere finans kuruluşları arasında iletilir. Alacaklının bankasının, alacaklı adına borçlunun bankasından fon tahsil etmesini sağlar.</td>
        </tr>
    </tbody>
  </table>
</div>

