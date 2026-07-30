---
title: "Danh mục thông điệp và quy tắc | pacs008"
description: "Phạm vi phản ánh các mẫu đi kèm gói phần mềm, nên không thể tuyên bố nhiều hơn những gì phần mềm làm được."
lang: vi-VN
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /vi/danh-muc/
robots: "index, follow"
draft: false
noindex: false
---

# Danh mục thông điệp và quy tắc

Tạo từ các sổ đăng ký pacs008, bộ quy tắc `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).
Phạm vi phản ánh các mẫu đi kèm gói phần mềm, nên không thể tuyên bố nhiều hơn những gì phần mềm làm được.

## Họ thông điệp

| Họ | Tên | Phiên bản | Số lượng | Quy tắc áp dụng |
|---|---|---|---|---|
| [`pacs.008`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008.001.01 - .13 | 13 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |
| [`pacs.002`](/vi/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002.001.12 | 1 | — |
| [`pacs.003`](/vi/pacs.003.001.09/) | FI to FI Customer Direct Debit | pacs.003.001.09 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.004`](/vi/pacs.004.001.11/) | Payment Return | pacs.004.001.11 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.007`](/vi/pacs.007.001.11/) | FI to FI Payment Reversal | pacs.007.001.11 | 1 | — |
| [`pacs.009`](/vi/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009.001.10 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001` |
| [`pacs.010`](/vi/pacs.010.001.05/) | Financial Institution Direct Debit | pacs.010.001.05 | 1 | — |
| [`pacs.028`](/vi/pacs.028.001.05/) | FI to FI Payment Status Request | pacs.028.001.05 | 1 | — |

### Chưa triển khai

Chúng tôi liệt kê vì sự vắng mặt của chúng dễ bị mặc định là có.

| Họ | Trạng thái | Ghi chú |
|---|---|---|
| `pain.*` | Not implemented | The package cannot generate or parse pain messages. The browser workbench can now validate pain.001, pain.002, pain.007 and pain.008 against their XSDs. Structural validation only. Scoped in sebastienrousseau/pacs008#13. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/13) |
| `camt.*` | Not implemented | The package cannot generate or parse camt messages. The browser workbench can now validate camt.110 and camt.111 against their XSDs, which covers the November 2026 receive-and-consume obligation for reading an incoming camt.110 — but structural validation is not the same as support. Scoped in sebastienrousseau/pacs008#12. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/12) |
| `head.001` | Not implemented | Business Application Header not shipped as a standalone template. |

## Hồ sơ sơ đồ

| Hồ sơ | Tên | Trạng thái | Hiệu lực |
|---|---|---|---|
| `cbpr-plus` | SWIFT CBPR+ | stable | 2026-11-14 |
| `chaps-uk` | Bank of England CHAPS | stable | 2026-11-14 |
| `t2-rtgs` | Eurosystem T2 RTGS | stable | 2026-11-14 |
| `fedwire` | US Federal Reserve Fedwire | stable | 2025-03-10 |
| `hvps-plus` | HVPS+ High-Value Payments | stable | 2026-11-14 |
| `sct-inst` | SEPA Instant Credit Transfer | stable | 2025-01-01 |

## Quy tắc

Mỗi quy tắc có mã định danh ổn định, không đổi giữa các bản phát hành nhỏ. Thay đổi kết quả đòi hỏi phiên bản bộ mới.

*Tóm tắt quy tắc và văn bản khắc phục hiển thị bằng tiếng Anh: đó là nội dung quy phạm của quy tắc, được mọi giao diện tham chiếu theo mã định danh.*

#### `CBPR-ADDR-001` — Fully unstructured postal address is not accepted

| | |
|---|---|
| Hồ sơ | cbpr-plus |
| Lớp | scheme |
| Mức độ | error |
| Hiệu lực từ | 2026-11-14 |
| Thông điệp | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Đường dẫn | `{party}/PstlAdr` |
| Nguồn | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), đã xác minh 2026-07-28 |
| Tệp kiểm thử | [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) (đạt) · [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (đạt) · [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) (không đạt) |

From 14 November 2026 a fully unstructured postal address is rejected in CBPR+ payment messages.

**Khắc phục.** Supply Town Name and Country in their structured elements. A compliant hybrid address is sufficient; a fully structured address is preferred.

#### `CBPR-ADDR-002` — Town Name is mandatory in a structured element

| | |
|---|---|
| Hồ sơ | cbpr-plus |
| Lớp | scheme |
| Mức độ | error |
| Hiệu lực từ | 2026-11-14 |
| Thông điệp | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Đường dẫn | `{party}/PstlAdr/TwnNm` |
| Nguồn | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), đã xác minh 2026-07-28 |
| Tệp kiểm thử | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (đạt) · [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) (không đạt) |

Town Name must be carried in TwnNm, not in an address line.

**Khắc phục.** Move the town into <TwnNm>. Leaving it inside <AdrLine> does not satisfy the requirement.

#### `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code

| | |
|---|---|
| Hồ sơ | cbpr-plus |
| Lớp | scheme |
| Mức độ | error |
| Hiệu lực từ | 2026-11-14 |
| Thông điệp | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Đường dẫn | `{party}/PstlAdr/Ctry` |
| Nguồn | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), đã xác minh 2026-07-28 |
| Tệp kiểm thử | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (đạt) · [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) (không đạt) |

Country must be carried in Ctry as a two-letter ISO 3166 alpha-2 code.

**Khắc phục.** Use the alpha-2 code, for example GB rather than United Kingdom or GBR.

#### `CBPR-ADDR-004` — Hybrid postal address is accepted

| | |
|---|---|
| Hồ sơ | cbpr-plus |
| Lớp | scheme |
| Mức độ | info |
| Hiệu lực từ | 2025-11-22 |
| Thông điệp | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| Đường dẫn | `{party}/PstlAdr` |
| Nguồn | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), đã xác minh 2026-07-28 |
| Tệp kiểm thử | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (đạt) |

A hybrid address — structured Town Name and Country alongside address lines — is accepted, both before and after the November 2026 change.

**Khắc phục.** No action required. Note that a fully structured address remains preferable for downstream data quality.

#### `CBPR-ADDR-005` — Agent identified by BIC only is exempt

| | |
|---|---|
| Hồ sơ | cbpr-plus |
| Lớp | scheme |
| Mức độ | info |
| Hiệu lực từ | 2026-11-14 |
| Thông điệp | `pacs.008`, `pacs.009` |
| Đường dẫn | `{agent}/FinInstnId/BICFI` |
| Nguồn | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), đã xác minh 2026-07-28 |
| Tệp kiểm thử | [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) (đạt) |

For agent fields, BIC-only identification remains valid; no postal address is required.

**Khắc phục.** No action required. Do not add a partial address purely to satisfy the address rule.

#### `CBPR-ADDR-006` — Message types excepted from the address requirement

| | |
|---|---|
| Hồ sơ | cbpr-plus |
| Lớp | scheme |
| Mức độ | info |
| Hiệu lực từ | 2026-11-14 |
| Thông điệp | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| Đường dẫn | — |
| Nguồn | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), đã xác minh 2026-07-28 |
| Tệp kiểm thử | — |

The structured address requirement does not apply to admi.024, camt.025, camt.052, camt.053, camt.054 and camt.060.

**Khắc phục.** No action required for these message types.

#### `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses

| | |
|---|---|
| Hồ sơ | chaps-uk |
| Lớp | scheme |
| Mức độ | error |
| Hiệu lực từ | 2026-11-14 |
| Thông điệp | `pacs.008`, `pacs.009` |
| Đường dẫn | `{party}/PstlAdr` |
| Nguồn | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), đã xác minh 2026-07-28 |
| Tệp kiểm thử | [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) (đạt) · [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) (không đạt) |

From November 2026 the CHAPS validation library rejects payments carrying a fully unstructured address. Hybrid is the minimum acceptable form.

**Khắc phục.** Structure the address to at least hybrid form before submission to CHAPS.

#### `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments — **đã công bố, chưa áp dụng**

| | |
|---|---|
| Hồ sơ | chaps-uk |
| Lớp | scheme |
| Mức độ | error |
| Hiệu lực từ | 2027-11-01 |
| Thông điệp | `pacs.008`, `pacs.009` |
| Đường dẫn | `CdtTrfTxInf/Purp/Cd` |
| Nguồn | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), đã xác minh 2026-07-28 |
| Tệp kiểm thử | — |

From November 2027 the Bank of England requires a purpose code on all CHAPS payments, extending the earlier property and FI-to-FI requirement.

**Khắc phục.** Populate <Purp><Cd> with an appropriate ISO 20022 external purpose code.

*Effective date is the announced month; the exact day should be re-verified against the Bank of England policy statement before this rule is enforced.*

#### `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS — **đã công bố, chưa áp dụng**

| | |
|---|---|
| Hồ sơ | chaps-uk |
| Lớp | scheme |
| Mức độ | error |
| Hiệu lực từ | 2027-11-01 |
| Thông điệp | `pacs.008` |
| Đường dẫn | `CdtTrfTxInf/RmtInf/Strd` |
| Nguồn | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), đã xác minh 2026-07-28 |
| Tệp kiểm thử | — |

From November 2027 remittance information carried in CHAPS payments must be structured.

**Khắc phục.** Carry remittance data in <RmtInf><Strd> rather than <RmtInf><Ustrd>.

*Announced in the Bank of England consultation; re-verify scope and exact date before enforcement.*


## Nguồn

| Nguồn | Nhà xuất bản | Tài liệu | Hiệu lực | Đã xác minh |
|---|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-11-14 | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-11-14 | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2025-01-01 | 2026-07-28 |

## Ghi nhận ISO 20022

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

Định nghĩa và mã định danh thông điệp trên trang này bắt nguồn từ tài liệu ISO 20022, sử dụng theo [ISO 20022 Intellectual Property Right Policy](https://www.iso20022.org/terms-use).
