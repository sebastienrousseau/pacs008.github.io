---
title: Mesaj seçim rehberi | pacs008
description: Oluşturma, durum bildirimi, iade, ters kayıt ve sorgular için doğru ISO 20022 pacs mesajını seçin.
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# Mesaj seçim rehberi

Önce iş olayına göre pacs ailesini, ardından şema ve işletim modeline göre seçin.

> Bu sayfada referans verilen ISO 20022, EPC ve Swift herkese açık materyalleri kullanılarak birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi.

## Hızlı karar matrisi

| Mesaj türü | Açıklama | Genel bakış |
|---|---|---|
| [`pacs.002.001.12`](/tr/pacs.002.001.12/) | FI'dan FI'ya ödeme durumu raporu | pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar. |
| [`pacs.003.001.09`](/tr/pacs.003.001.09/) | FI'dan FI'ya müşteri doğrudan borçlandırması | pacs.003 mesajı, bir müşteri doğrudan borçlandırma talimatını yürütmek üzere finans kuruluşları arasında iletilir. Alacaklının bankasının, alacaklı adına borçlunun bankasından fon tahsil etmesini sağlar. |
| [`pacs.004.001.11`](/tr/pacs.004.001.11/) | Ödeme iadesi | pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak kuruluş tarafından geri çağrıldığında fon akışını tersine çevirir. |
| [`pacs.007.001.11`](/tr/pacs.007.001.11/) | FI'dan FI'ya ödeme geri alma mesajı | pacs.007 mesajı, henüz takas edilmemiş daha önce gönderilmiş bir ödeme talimatını tersine çevirmek veya takas edilmiş bir ödemenin tersine çevrilmesini talep etmek için kullanılır. pacs.004'ten (iade) farklı olarak, orijinal talimat veren aracı tarafından başlatılır. |
| [`pacs.008.001.13`](/tr/pacs.008.001.13/) | FI'dan FI'ya müşteri kredi transferi | pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır. |
| [`pacs.009.001.10`](/tr/pacs.009.001.10/) | Finansal kuruluşlar arası kredi transferi | pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler. |
| [`pacs.010.001.05`](/tr/pacs.010.001.05/) | Finansal kuruluşlar arası doğrudan borçlandırma | pacs.010 mesajı, kuruluşun kendi hesabındaki doğrudan borçlandırma işlemleri için finans kuruluşları arasında kullanılır. Bir kuruluşun başka bir kuruluşun hesabından doğrudan fon tahsil etmesini sağlar. |
| [`pacs.028.001.05`](/tr/pacs.028.001.05/) | FI'dan FI'ya ödeme durumu talebi | pacs.028 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu talep etmek üzere bir finans kuruluşu tarafından gönderilir. İstenmeyen bir durum raporu beklemeden ödeme işleme sürecinin proaktif takibini sağlar. |

## Yaygın karşılaştırma noktaları

| Karşılaştırma | Temel fark |
|---|---|
| `pacs.008` vs `pacs.009` | Müşteri ödemesi ile kurumsal ya da karşılama hareketi arasındaki fark |
| `pacs.004` vs `pacs.007` | Alıcı taraftan iade ile gönderen taraftan geri çevirme arasındaki fark |
| `pacs.002` vs `pacs.028` | Durum raporu ile durum isteği arasındaki fark |

## Desteklenen mesaj sayfaları

- [`pacs.002.001.12`](/tr/pacs.002.001.12/) — FI'dan FI'ya ödeme durumu raporu
- [`pacs.003.001.09`](/tr/pacs.003.001.09/) — FI'dan FI'ya müşteri doğrudan borçlandırması
- [`pacs.004.001.11`](/tr/pacs.004.001.11/) — Ödeme iadesi
- [`pacs.007.001.11`](/tr/pacs.007.001.11/) — FI'dan FI'ya ödeme geri alma mesajı
- [`pacs.008.001.13`](/tr/pacs.008.001.13/) — FI'dan FI'ya müşteri kredi transferi
- [`pacs.009.001.10`](/tr/pacs.009.001.10/) — Finansal kuruluşlar arası kredi transferi
- [`pacs.010.001.05`](/tr/pacs.010.001.05/) — Finansal kuruluşlar arası doğrudan borçlandırma
- [`pacs.028.001.05`](/tr/pacs.028.001.05/) — FI'dan FI'ya ödeme durumu talebi

