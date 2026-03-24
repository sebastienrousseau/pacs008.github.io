---
title: Mesaj seçim rehberi | pacs008
description: Oluşturma, durum bildirimi, iade, ters kayıt ve sorgular için doğru ISO 20022 pacs mesajını seçin.
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# Mesaj seçim rehberi

Önce iş olayına göre pacs ailesini, ardından şema ve işletim modeline göre seçin.



## Hızlı karar matrisi

<div class="decision-matrix-table" tabindex="0" aria-label="Hızlı karar matrisi">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
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
          <td class="decision-matrix-table__id"><a href="/tr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">FI&#39;dan FI&#39;ya ödeme durumu raporu</td>
          <td class="decision-matrix-table__overview">pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/tr/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">FI&#39;dan FI&#39;ya müşteri doğrudan borçlandırması</td>
          <td class="decision-matrix-table__overview">pacs.003 mesajı, bir müşteri doğrudan borçlandırma talimatını yürütmek üzere finans kuruluşları arasında iletilir. Alacaklının bankasının, alacaklı adına borçlunun bankasından fon tahsil etmesini sağlar.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/tr/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Ödeme iadesi</td>
          <td class="decision-matrix-table__overview">pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak kuruluş tarafından geri çağrıldığında fon akışını tersine çevirir.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/tr/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">FI&#39;dan FI&#39;ya ödeme geri alma mesajı</td>
          <td class="decision-matrix-table__overview">pacs.007 mesajı, henüz takas edilmemiş daha önce gönderilmiş bir ödeme talimatını tersine çevirmek veya takas edilmiş bir ödemenin tersine çevrilmesini talep etmek için kullanılır. pacs.004&#39;ten (iade) farklı olarak, orijinal talimat veren aracı tarafından başlatılır.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/tr/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">FI&#39;dan FI&#39;ya müşteri kredi transferi</td>
          <td class="decision-matrix-table__overview">pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/tr/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Finansal kuruluşlar arası kredi transferi</td>
          <td class="decision-matrix-table__overview">pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/tr/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Finansal kuruluşlar arası doğrudan borçlandırma</td>
          <td class="decision-matrix-table__overview">pacs.010 mesajı, kuruluşun kendi hesabındaki doğrudan borçlandırma işlemleri için finans kuruluşları arasında kullanılır. Bir kuruluşun başka bir kuruluşun hesabından doğrudan fon tahsil etmesini sağlar.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/tr/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">FI&#39;dan FI&#39;ya ödeme durumu talebi</td>
          <td class="decision-matrix-table__overview">pacs.028 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu talep etmek üzere bir finans kuruluşu tarafından gönderilir. İstenmeyen bir durum raporu beklemeden ödeme işleme sürecinin proaktif takibini sağlar.</td>
        </tr>
    </tbody>
  </table>
</div>

## Yaygın karşılaştırma noktaları

<div class="comparison-points-table" tabindex="0" aria-label="Yaygın karşılaştırma noktaları">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>Karşılaştırma</th>
        <th>Temel fark</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">Müşteri ödemesi ile kurumsal ya da karşılama hareketi arasındaki fark</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">Alıcı taraftan iade ile gönderen taraftan geri çevirme arasındaki fark</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">Durum raporu ile durum isteği arasındaki fark</td>
        </tr>
    </tbody>
  </table>
</div>

## Desteklenen mesaj sayfaları

- [`pacs.002.001.12`](/tr/pacs.002.001.12/) — FI'dan FI'ya ödeme durumu raporu
- [`pacs.003.001.09`](/tr/pacs.003.001.09/) — FI'dan FI'ya müşteri doğrudan borçlandırması
- [`pacs.004.001.11`](/tr/pacs.004.001.11/) — Ödeme iadesi
- [`pacs.007.001.11`](/tr/pacs.007.001.11/) — FI'dan FI'ya ödeme geri alma mesajı
- [`pacs.008.001.13`](/tr/pacs.008.001.13/) — FI'dan FI'ya müşteri kredi transferi
- [`pacs.009.001.10`](/tr/pacs.009.001.10/) — Finansal kuruluşlar arası kredi transferi
- [`pacs.010.001.05`](/tr/pacs.010.001.05/) — Finansal kuruluşlar arası doğrudan borçlandırma
- [`pacs.028.001.05`](/tr/pacs.028.001.05/) — FI'dan FI'ya ödeme durumu talebi

