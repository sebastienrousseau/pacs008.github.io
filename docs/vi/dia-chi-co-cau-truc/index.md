---
title: "Hạn chót địa chỉ có cấu trúc tháng 11 năm 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: vi-VN
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
    text: "Kiểm toán chất lượng dữ liệu địa chỉ hiện tại trong các bản ghi bên nợ, bên có và đại lý."
  - name: "Step 2"
    text: "Ánh xạ các trường địa chỉ phi cấu trúc hiện có sang định dạng có cấu trúc (đường, tòa nhà, mã bưu chính, thành phố, quốc gia)."
  - name: "Step 3"
    text: "Thêm xác thực địa chỉ vào pipeline tiền tạo bằng pacs008."
  - name: "Step 4"
    text: "Kiểm thử với dữ liệu thanh toán đại diện trước thời hạn."
---

# Hạn chót địa chỉ có cấu trúc tháng 11 năm 2026

SWIFT yêu cầu địa chỉ bưu chính có cấu trúc trong các thông điệp thanh toán xuyên biên giới từ tháng 11 năm 2026. Điều gì thay đổi, thông điệp nào bị ảnh hưởng và pacs008 hỗ trợ các đội nhóm chuẩn bị như thế nào.

## Điều gì thay đổi

Đây là yêu cầu tối thiểu, không phải tối đa. Từ ngày 14 tháng 11 năm 2026, bên thuộc phạm vi áp dụng phải ghi thành phố trong TwnNm và quốc gia trong Ctry dưới dạng mã ISO 3166 hai chữ cái. Đường phố, số nhà và mã bưu chính có thể vẫn nằm trong các dòng địa chỉ: đó là địa chỉ lai và được chấp nhận. Chỉ địa chỉ hoàn toàn phi cấu trúc bị loại bỏ — tức toàn bộ địa chỉ ở dạng văn bản tự do, không có thành phố và quốc gia có cấu trúc. Các tổ chức chỉ được nhận diện bằng BIC không bị ảnh hưởng.

## Tại sao điều này quan trọng

- Địa chỉ phi cấu trúc làm tăng tỷ lệ sửa chữa thủ công và làm chậm quá trình xử lý trực tiếp.
- Địa chỉ có cấu trúc cải thiện độ chính xác của việc sàng lọc trừng phạt bằng cách tách tên bên khỏi dữ liệu vị trí.
- Các yêu cầu pháp lý và yêu cầu của hệ thống ngày càng bắt buộc dữ liệu có cấu trúc cho tuân thủ và báo cáo.
- Tỷ lệ từ chối thanh toán xuyên biên giới tăng khi chất lượng địa chỉ không đáp ứng kỳ vọng của đối tác.

## Thông điệp nào bị ảnh hưởng

- **pacs.008** — địa chỉ bưu chính của bên nợ và bên có trong chuyển khoản tín dụng khách hàng.
- **pacs.009** — địa chỉ tổ chức trong chuyển khoản tín dụng giữa các tổ chức tài chính và thanh toán bảo lãnh.
- **pacs.004** — địa chỉ các bên trong hoàn trả thanh toán.
- **pacs.003** — địa chỉ bên có và bên nợ trong ghi nợ trực tiếp khách hàng.

## pacs008 hỗ trợ như thế nào

- Xác thực các trường địa chỉ bưu chính có cấu trúc và kết hợp trước khi tạo XML.
- Đánh dấu dữ liệu địa chỉ phi cấu trúc sẽ không đạt sau thời hạn.
- Hỗ trợ cả định dạng kết hợp trước thời hạn và định dạng chỉ có cấu trúc sau thời hạn.
- Tích hợp kiểm tra chất lượng địa chỉ vào các pipeline CI và quy trình xác thực theo lô.

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

## Dòng thời gian

| Date | Scheme | Change | Rule |
|---|---|---|---|
| `2025-11-22` | CBPR+ | Hybrid postal address option available | `CBPR-ADDR-004` |
| `2025-11-22` | CBPR+ | MT/MX coexistence for payment instructions ends | — |
| `2026-11-14` | CBPR+ | Fully unstructured postal address rejected | `CBPR-ADDR-001` |
| `2026-11-14` | CHAPS | CHAPS validation library rejects unstructured addresses | `CHAPS-ADDR-001` |
| `2026-11-14` | CBPR+ | MT101 interbank coexistence ends; contingency relays to `pain.001` | — |
| `2026-11-14` | Swift | `camt.110` investigation requests must be receivable | — |
| `2026-11-14` | Swift | Annual Standards Release cycle begins | — |
| `2027-11` | CHAPS | Purpose codes mandatory on all payments (announced) | `CHAPS-PURP-001` |
| `2027-11` | CHAPS | Structured remittance information mandatory (announced) | `CHAPS-RMT-001` |
| `2027-11` | Swift | `camt.110` and `camt.111` both mandatory (announced) | — |

## Cần làm gì bây giờ

- Kiểm toán chất lượng dữ liệu địa chỉ hiện tại trong các bản ghi bên nợ, bên có và đại lý.
- Ánh xạ các trường địa chỉ phi cấu trúc hiện có sang định dạng có cấu trúc (đường, tòa nhà, mã bưu chính, thành phố, quốc gia).
- Thêm xác thực địa chỉ vào pipeline tiền tạo bằng pacs008.
- Kiểm thử với dữ liệu thanh toán đại diện trước thời hạn.

## Tài liệu tham khảo

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

