---
title: "Yapılandırılmış adres son tarihi Kasım 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: tr-TR
layout: page
date: "2026-07-27"
name: pacs008
short_name: pacs008
start_url: /
display: standalone
background_color: "#ffffff"
theme_color: "#084a53"
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "Borçlu, alacaklı ve acente kayıtlarında mevcut adres veri kalitesini denetleyin."
  - name: "Step 2"
    text: "Mevcut yapılandırılmamış adres alanlarını yapılandırılmış formata eşleyin (sokak, bina, posta kodu, şehir, ülke)."
  - name: "Step 3"
    text: "pacs008 kullanarak ön oluşturma hattına adres doğrulaması ekleyin."
  - name: "Step 4"
    text: "Son tarihten önce temsili ödeme verileriyle test edin."
---

# Yapılandırılmış adres son tarihi Kasım 2026

SWIFT, Kasım 2026'dan itibaren sınır ötesi ödeme mesajlarında yapılandırılmış posta adresleri gerektirmektedir. Ne değişiyor, hangi mesajlar etkileniyor ve pacs008 ekiplerin hazırlanmasına nasıl yardımcı oluyor.

## Ne değişiyor

SWIFT CBPR+ sınır ötesi ödeme mesajlarında yapılandırılmamış posta adreslerinden yapılandırılmış adres alanlarına geçiş yapmaktadır. Kasım 2026 son tarihinden sonra, kilit taraf adres alanları sokak adı, bina numarası, posta kodu, şehir ve ülke için ayrı öğelerle yapılandırılmış formatı kullanmalıdır.

## Neden önemli

- Yapılandırılmamış adresler manuel onarım oranlarını artırır ve doğrudan işlemeyi geciktirir.
- Yapılandırılmış adresler, taraf adını konum verilerinden ayırarak yaptırım tarama doğruluğunu artırır.
- Düzenleyici ve şema gereksinimleri, uyumluluk ve raporlama için yapılandırılmış verileri giderek daha fazla zorunlu kılmaktadır.
- Adres kalitesi karşı taraf beklentilerini karşılamadığında sınır ötesi ödeme red oranları yükselir.

## Hangi mesajlar etkileniyor

- **pacs.008** — müşteri kredi transferlerinde borçlu ve alacaklı posta adresleri.
- **pacs.009** — finansal kuruluşlar arası kredi transferleri ve teminat ödemelerinde kurum adresleri.
- **pacs.004** — ödeme iadelerinde taraf adresleri.
- **pacs.003** — müşteri doğrudan borçlandırmalarında alacaklı ve borçlu adresleri.

## pacs008 nasıl yardımcı olur

- XML oluşturmadan önce yapılandırılmış ve hibrit posta adresi alanlarını doğrular.
- Son tarihten sonra başarısız olacak yapılandırılmamış adres verilerini işaretler.
- Hem son tarih öncesi hibrit formatları hem de son tarih sonrası yalnızca yapılandırılmış formatları destekler.
- Adres kalite kontrollerini CI hatlarına ve toplu doğrulama iş akışlarına entegre eder.

## Normative rules

Generated from the pacs008 rule registry (ruleset `2026.11.0`).
Each rule has a stable identifier, an effective date, an authoritative source and
both a passing and a failing test fixture.

| Rule | Profile | Effective | Severity | Requirement | Source |
|---|---|---|---|---|---|
| `CBPR-ADDR-001` | cbpr-plus | 2026-11-14 | Error | Fully unstructured postal address is not accepted | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-002` | cbpr-plus | 2026-11-14 | Error | Town Name is mandatory in a structured element | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-003` | cbpr-plus | 2026-11-14 | Error | Country is mandatory as a two-letter ISO 3166 code | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-004` | cbpr-plus | 2025-11-22 | Info | Hybrid postal address is accepted | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-005` | cbpr-plus | 2026-11-14 | Info | Agent identified by BIC only is exempt | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-006` | cbpr-plus | 2026-11-14 | Info | Message types excepted from the address requirement | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CHAPS-ADDR-001` | chaps-uk | 2026-11-14 | Error | CHAPS validation library rejects fully unstructured addresses | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) |

### Address formats compared

| Format | `TwnNm` | `Ctry` | `AdrLine` | Before 14 Nov 2026 | On or after |
|---|---|---|---|---|---|
| Fully structured | Present | Present | Absent | Accepted | Accepted |
| Hybrid | Present | Present | Present | Accepted | Accepted |
| Fully unstructured | Absent | Absent | Present | Accepted | **Rejected** |

### Exceptions

The requirement does not apply to these message types: `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060`.

Agents identified by BIC alone remain valid without a postal address
(`CBPR-ADDR-005`). Do not add a partial address solely to satisfy the rule.

### Test fixtures

Download and run these through the [workbench](/live/), the CLI or the API.
Each maps to the rule it exercises.

- [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) — passes `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) — fails `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-002`
- [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) — fails `CBPR-ADDR-002`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-003`
- [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) — fails `CBPR-ADDR-003`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-004`
- [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) — passes `CBPR-ADDR-005`
- [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) — passes `CHAPS-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) — fails `CHAPS-ADDR-001`

## Zaman çizelgesi

- **Mart 2023** — SWIFT CBPR+ sınır ötesi ödemeler için ISO 20022 ile kullanıma açıldı.
- **Kasım 2025** — MT ve MX ödeme talimatları için birlikte var olma dönemi sona eriyor.
- **Kasım 2026** — yapılandırılmış posta adresi gerekliliği CBPR+ mesajları için yürürlüğe giriyor.
- **November 2027** — the Bank of England has announced that purpose codes and structured remittance information become mandatory for all CHAPS payments, and camt.110/camt.111 become mandatory across Swift.

## Şimdi ne yapmalı

- Borçlu, alacaklı ve acente kayıtlarında mevcut adres veri kalitesini denetleyin.
- Mevcut yapılandırılmamış adres alanlarını yapılandırılmış formata eşleyin (sokak, bina, posta kodu, şehir, ülke).
- pacs008 kullanarak ön oluşturma hattına adres doğrulaması ekleyin.
- Son tarihten önce temsili ödeme verileriyle test edin.

## Kaynaklar

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

