---
title: Mesaj Türleri | pacs008 ISO 20022
description: Desteklenen ISO 20022 pacs mesaj tanımları ve sürümleri. Finansal kuruluşlar arasındaki müşteri kredi transferi iş akışları için oluşturma, doğrulama, API...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# Mesaj Türleri

pacs008, temel pacs.008 mesaj tanımını ve orkestrasyon ve mutabakat akışlarında kullanılan ilgili mesajları kapsar.

> Bu sayfada referans verilen ISO 20022, EPC ve Swift herkese açık materyalleri kullanılarak birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi.

## Dahil edilen destek

<div class="message-coverage-table" tabindex="0" aria-label="Dahil edilen destek">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-version">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Mesaj türü</th>
        <th>Açıklama</th>
        <th>Sürüm</th>
        <th>Yıl</th>
        <th>Genel bakış</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/tr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">FI&#39;dan FI&#39;ya ödeme durumu raporu</td>
          <td class="message-coverage-table__version"><code>pacs.002.001.12</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/tr/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">FI&#39;dan FI&#39;ya müşteri doğrudan borçlandırması</td>
          <td class="message-coverage-table__version"><code>pacs.003.001.09</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.003 mesajı, bir müşteri doğrudan borçlandırma talimatını yürütmek üzere finans kuruluşları arasında iletilir. Alacaklının bankasının, alacaklı adına borçlunun bankasından fon tahsil etmesini sağlar.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/tr/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">Ödeme iadesi</td>
          <td class="message-coverage-table__version"><code>pacs.004.001.11</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak kuruluş tarafından geri çağrıldığında fon akışını tersine çevirir.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/tr/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">FI&#39;dan FI&#39;ya ödeme geri alma mesajı</td>
          <td class="message-coverage-table__version"><code>pacs.007.001.11</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.007 mesajı, henüz takas edilmemiş daha önce gönderilmiş bir ödeme talimatını tersine çevirmek veya takas edilmiş bir ödemenin tersine çevrilmesini talep etmek için kullanılır. pacs.004&#39;ten (iade) farklı olarak, orijinal talimat veren aracı tarafından başlatılır.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/tr/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">FI&#39;dan FI&#39;ya müşteri kredi transferi</td>
          <td class="message-coverage-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/tr/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">Finansal kuruluşlar arası kredi transferi</td>
          <td class="message-coverage-table__version"><code>pacs.009.001.10</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/tr/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">Finansal kuruluşlar arası doğrudan borçlandırma</td>
          <td class="message-coverage-table__version"><code>pacs.010.001.05</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.010 mesajı, kuruluşun kendi hesabındaki doğrudan borçlandırma işlemleri için finans kuruluşları arasında kullanılır. Bir kuruluşun başka bir kuruluşun hesabından doğrudan fon tahsil etmesini sağlar.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/tr/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">FI&#39;dan FI&#39;ya ödeme durumu talebi</td>
          <td class="message-coverage-table__version"><code>pacs.028.001.05</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.028 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu talep etmek üzere bir finans kuruluşu tarafından gönderilir. İstenmeyen bir durum raporu beklemeden ödeme işleme sürecinin proaktif takibini sağlar.</td>
        </tr>
    </tbody>
  </table>
</div>

## Teslimat modeli

Desteklenen her mesaj türü, ekiplerin birden çok kanalda oluşturma ve regresyon testini standartlaştırabilmesi için şablon varlıkları ve doğrulama mantığıyla desteklenir.

## Doğru mesajı seçmek

Mesaj kataloğu, ekiplerin hangi mesajın akışı başlattığını, hangisinin durum bildirdiğini ve hangisinin süreci düzelttiğini veya geri çevirdiğini belirlemesi gerektiğinde özellikle önemlidir.

Desteklenen pacs akışları için kısa karar görünümü almak üzere [mesaj seçim rehberine](/tr/message-selection/) bakın.


## 2026 pazar bağlamı

- **SEPA SCT / SCT Inst**: pacs.008, kredi transferi alışverişi ve anlık ödeme işleme için merkezi olmaya devam ediyor.
- **CBPR+**: pacs.008, MT103 tarzı sınır ötesi yükleri daha zengin yapılandırılmış verilerle değiştirmeye devam ediyor.
- **Yapılandırılmış adresler**: mevcut pazar rehberliği, Kasım 2026'da tamamen yapılandırılmamış posta adreslerinden geçişi işaret ediyor.
- **Seri yöntem ve STP**: çok bacaklı bankadan bankaya zincirleri hâlâ önemli ve doğrudan işleme varyantları operasyonel verimlilik için gerekli olmaya devam ediyor.

## Operasyonel yetenekler

pacs008, desteklenen mesaj tanımı revizyonları boyunca şablon destekli oluşturma ve doğrulama sağlar:

- sürümleri karşılaştırma
- şema güncellemelerinin regresyon testi
- yayınlamadan önce giden ödeme mesajı verilerini güçlendirme
- tek bir kod tabanından ürün, operasyon ve geçiş ekiplerini destekleme

