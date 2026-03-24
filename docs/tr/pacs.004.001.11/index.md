---
title: pacs.004.001.11 | Ödeme iadesi | pacs008
description: pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Ödeme iadesi

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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

pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak kuruluş tarafından geri çağrıldığında fon akışını tersine çevirir.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 2025-02-27; kaynak bağlantıları aşağıda listelenmiştir.

## Temel veri öğeleri

- **GrpHdr** — Mesaj tanımlama ve oluşturma zaman damgası içeren Grup Başlığı
- **TxInf** — İade tutarı ve tarafları içeren İşlem Bilgisi
- **OrgnlGrpInf** — Kaynak mesaja bağlayan Orijinal Grup Bilgisi
- **RtrRsnInf** — Yapılandırılmış neden kodları içeren İade Nedeni Bilgisi
- **OrgnlTxRef** — Eşleştirme ve mutabakat için Orijinal İşlem Referansı

## İş bağlamı

- Lehdarın hesabına alacak kaydedilemediğinde takas sonrası iadeleri işler
- Göndericinin fon iadesi talep ettiği geri çağırma senaryolarını destekler
- Düzenleyici ve operasyonel şeffaflık için yapılandırılmış iade neden kodları taşır
- Hem kredi transferi iadelerine (pacs.008) hem de doğrudan borçlandırma iadelerine (pacs.003) uygulanır

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Mesaj tanımlama ve oluşturma zaman damgası içeren Grup Başlığı</td>
          <td class="operational-matrix-table__right">Lehdarın hesabına alacak kaydedilemediğinde takas sonrası iadeleri işler</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — İade tutarı ve tarafları içeren İşlem Bilgisi</td>
          <td class="operational-matrix-table__right">Göndericinin fon iadesi talep ettiği geri çağırma senaryolarını destekler</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Kaynak mesaja bağlayan Orijinal Grup Bilgisi</td>
          <td class="operational-matrix-table__right">Düzenleyici ve operasyonel şeffaflık için yapılandırılmış iade neden kodları taşır</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Yapılandırılmış neden kodları içeren İade Nedeni Bilgisi</td>
          <td class="operational-matrix-table__right">Hem kredi transferi iadelerine (pacs.008) hem de doğrudan borçlandırma iadelerine (pacs.003) uygulanır</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Eşleştirme ve mutabakat için Orijinal İşlem Referansı</td>
          <td class="operational-matrix-table__right">Talimat alan aracı, daha önce takas edilmiş fonları iade etmek üzere ödeme zinciri boyunca geriye pacs.004 gönderir. Zincirdeki her aracı iadeyi işler ve ilgili hesapları geri alacaklandırır.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ ve şema bağlamı

- MT103 RETURN ve teminat yöntemi iade mesajlarının yerine geçer
- İade neden kodları ISO 20022 kapsamında standartlaştırılmış ve makine tarafından okunabilirdir
- CBPR+, eşleştirme için tam orijinal işlem referans verisi gerektirir
- SWIFT gpi takibi, uçtan uca görünürlük için iade işlemlerine genişletilmiştir

## Mesaj akışı

Talimat alan aracı, daha önce takas edilmiş fonları iade etmek üzere ödeme zinciri boyunca geriye pacs.004 gönderir. Zincirdeki her aracı iadeyi işler ve ilgili hesapları geri alacaklandırır.

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">pacs008 içindeki mevcut uygulama</td>
          <td class="version-diff-table__takeaway">Ödeme iade mesajları için mevcut şablonlarla uyumludur.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">Daha sonraki katalog sürümleri</td>
          <td class="version-diff-table__takeaway">Kapsamda şema yükseltmeleri veya yeni karşı taraflar varsa, daha sonraki iade mesajı sürümlerini inceleyin.</td>
        </tr>
    </tbody>
  </table>
</div>

## Açıklamalı XML örneği

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### Alan açıklamaları

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: Sebep kodlarının kalitesi, sonraki müşteri iletişimi ve operasyonel yönlendirme için kritiktir.

## Karşılaştır pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="Karşılaştır pacs.004 vs pacs.007">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Boyut</th>
        <th>pacs.004.001.11</th>
        <th>Karşılaştırma mesajı</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Temel amaç</td>
          <td class="message-comparison-table__current">Return settled funds</td>
          <td class="message-comparison-table__other">Reverse a previously instructed payment</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Receiving / beneficiary side</td>
          <td class="message-comparison-table__other">Original instructing side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Back through the chain</td>
          <td class="message-comparison-table__other">Forward through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">En uygun olduğu durum</td>
          <td class="message-comparison-table__current">Mutabakattan sonra iade işleme</td>
          <td class="message-comparison-table__other">Geri çağırma, hata veya dolandırıcılık kaynaklı geri çevirme işleme</td>
        </tr>
    </tbody>
  </table>
</div>

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
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
          <td class="related-messages-table__id"><a href="/tr/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">FI&#39;dan FI&#39;ya müşteri doğrudan borçlandırması</td>
          <td class="related-messages-table__overview">pacs.003 mesajı, bir müşteri doğrudan borçlandırma talimatını yürütmek üzere finans kuruluşları arasında iletilir. Alacaklının bankasının, alacaklı adına borçlunun bankasından fon tahsil etmesini sağlar.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/tr/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">FI&#39;dan FI&#39;ya ödeme durumu raporu</td>
          <td class="related-messages-table__overview">pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar.</td>
        </tr>
    </tbody>
  </table>
</div>

