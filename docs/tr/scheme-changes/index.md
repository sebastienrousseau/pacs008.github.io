---
title: "Şema değişiklik günlüğü | pacs008"
description: "Bir mesajın kabul edilip edilmeyeceğini belirleyen her kural değişikliği, yürürlük tarihine göre gruplanmış."
lang: tr-TR
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /tr/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# Şema değişiklik günlüğü

Bir mesajın kabul edilip edilmeyeceğini belirleyen her kural değişikliği, yürürlük tarihine göre gruplanmış.

Kural kayıt defterinden üretildi, kural seti `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

Swift Kasım 2026'dan itibaren yıllık Standards Release döngüsüne geçiyor; bu liste son tarihte bitmek yerine her yıl büyüyecek.

Abone ol: [Atom feed](/scheme-changes.xml).

## Kural seti sürümleme

Kural tanımlayıcıları küçük sürümler arasında sabit kalır. Bir kuralın sonucunun değişmesi yeni bir set sürümü gerektirir; böylece rapor yeniden üretilebilir kalır.

### 2027-11-01

- `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments (chaps-uk, error) *(announced, not yet enforced)*
- `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS (chaps-uk, error) *(announced, not yet enforced)*

### 2026-11-14

- `CBPR-ADDR-001` — Fully unstructured postal address is not accepted (cbpr-plus, error)
- `CBPR-ADDR-002` — Town Name is mandatory in a structured element (cbpr-plus, error)
- `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code (cbpr-plus, error)
- `CBPR-ADDR-005` — Agent identified by BIC only is exempt (cbpr-plus, info)
- `CBPR-ADDR-006` — Message types excepted from the address requirement (cbpr-plus, info)
- `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses (chaps-uk, error)

### 2025-11-22

- `CBPR-ADDR-004` — Hybrid postal address is accepted (cbpr-plus, info)


## Bir kural seti nasıl sabitlenir

Doğrulama raporları setin sürümünü ve özetini kaydeder. Bir tutarsızlık bildirirken ikisini de belirtin ki tam set yeniden oluşturulabilsin.
