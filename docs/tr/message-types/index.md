---
title: Mesaj Türleri | Türkçe
description: Desteklenen ISO 20022 pacs mesaj tanımları ve sürümleri.
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# Mesaj Türleri

Pacs008, temel pacs.008 mesaj tanımını ve orkestrasyon ve mutabakat akışlarında kullanılan ilgili mesajları kapsar.

## Dahil edilen destek

- [`pacs.002.001.12`](/tr/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/tr/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/tr/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/tr/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.01`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.02`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.03`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.04`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.05`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.06`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.07`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.08`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.09`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.10`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.11`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.12`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.13`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/tr/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/tr/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/tr/pacs.028.001.05/) — FI to FI Payment Status Request

## Teslimat modeli

Desteklenen her mesaj türü, ekiplerin birden çok kanalda oluşturma ve regresyon testini standartlaştırabilmesi için şablon varlıkları ve doğrulama mantığıyla desteklenir.

## 2026 pazar bağlamı

- **SEPA SCT / SCT Inst**: pacs.008, kredi transferi alışverişi ve anlık ödeme işleme için merkezi olmaya devam ediyor.
- **CBPR+**: pacs.008, MT103 tarzı sınır ötesi yükleri daha zengin yapılandırılmış verilerle değiştirmeye devam ediyor.
- **Yapılandırılmış adresler**: mevcut pazar rehberliği, Kasım 2026'da tamamen yapılandırılmamış posta adreslerinden geçişi işaret ediyor.
- **Seri yöntem ve STP**: çok bacaklı bankadan bankaya zincirleri hâlâ önemli ve doğrudan işleme varyantları operasyonel verimlilik için gerekli olmaya devam ediyor.

## Operasyonel yetenekler

Pacs008, desteklenen mesaj tanımı revizyonları boyunca şablon destekli oluşturma ve doğrulama sağlar:

- sürümleri karşılaştırma
- şema güncellemelerinin regresyon testi
- yayınlamadan önce giden ödeme mesajı verilerini güçlendirme
- tek bir kod tabanından ürün, operasyon ve geçiş ekiplerini destekleme

