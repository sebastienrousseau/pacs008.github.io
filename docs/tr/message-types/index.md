---
title: Mesaj Türleri | pacs008 ISO 20022
description: Desteklenen ISO 20022 pacs mesaj tanımları ve sürümleri. FI-to-FI müşteri kredi transferi iş akışları için oluşturma, doğrulama, API orkestrasyonu ve...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# Mesaj Türleri

pacs008, temel pacs.008 mesaj tanımını ve orkestrasyon ve mutabakat akışlarında kullanılan ilgili mesajları kapsar.

> Bu sayfada referans verilen ISO 20022, EPC ve Swift herkese açık materyalleri kullanılarak birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi.

## Dahil edilen destek

| Mesaj türü | Açıklama | Sürüm | Yıl | Genel bakış |
|---|---|---|---|---|
| [`pacs.002.001.12`](/tr/pacs.002.001.12/) | FI to FI Payment Status Report | `pacs.002.001.12` | 2019 | pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar. |
| [`pacs.003.001.09`](/tr/pacs.003.001.09/) | FI to FI Customer Direct Debit | `pacs.003.001.09` | 2019 | pacs.003 mesajı, bir müşteri doğrudan borçlandırma talimatını yürütmek üzere finans kuruluşları arasında iletilir. Alacaklının bankasının, alacaklı adına borçlunun bankasından fon tahsil etmesini sağlar. |
| [`pacs.004.001.11`](/tr/pacs.004.001.11/) | Payment Return | `pacs.004.001.11` | 2019 | pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak kuruluş tarafından geri çağrıldığında fon akışını tersine çevirir. |
| [`pacs.007.001.11`](/tr/pacs.007.001.11/) | FI to FI Payment Reversal | `pacs.007.001.11` | 2019 | pacs.007 mesajı, henüz takas edilmemiş daha önce gönderilmiş bir ödeme talimatını tersine çevirmek veya takas edilmiş bir ödemenin tersine çevrilmesini talep etmek için kullanılır. pacs.004'ten (iade) farklı olarak, orijinal talimat veren aracı tarafından başlatılır. |
| [`pacs.008.001.13`](/tr/pacs.008.001.13/) | FI to FI Customer Credit Transfer | `pacs.008.001.13` | 2023 | pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır. |
| [`pacs.009.001.10`](/tr/pacs.009.001.10/) | Financial Institution Credit Transfer | `pacs.009.001.10` | 2019 | pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler. |
| [`pacs.010.001.05`](/tr/pacs.010.001.05/) | Financial Institution Direct Debit | `pacs.010.001.05` | 2019 | pacs.010 mesajı, kuruluşun kendi hesabındaki doğrudan borçlandırma işlemleri için finans kuruluşları arasında kullanılır. Bir kuruluşun başka bir kuruluşun hesabından doğrudan fon tahsil etmesini sağlar. |
| [`pacs.028.001.05`](/tr/pacs.028.001.05/) | FI to FI Payment Status Request | `pacs.028.001.05` | 2019 | pacs.028 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu talep etmek üzere bir finans kuruluşu tarafından gönderilir. İstenmeyen bir durum raporu beklemeden ödeme işleme sürecinin proaktif takibini sağlar. |

## Teslimat modeli

Desteklenen her mesaj türü, ekiplerin birden çok kanalda oluşturma ve regresyon testini standartlaştırabilmesi için şablon varlıkları ve doğrulama mantığıyla desteklenir.


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

