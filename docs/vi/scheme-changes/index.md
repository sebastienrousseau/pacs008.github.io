---
title: "Nhật ký thay đổi sơ đồ | pacs008"
description: "Mọi thay đổi quy tắc quyết định thông điệp có được chấp nhận hay không, nhóm theo ngày hiệu lực."
lang: vi-VN
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /vi/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# Nhật ký thay đổi sơ đồ

Mọi thay đổi quy tắc quyết định thông điệp có được chấp nhận hay không, nhóm theo ngày hiệu lực.

Tạo từ sổ đăng ký quy tắc, bộ quy tắc `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

Từ tháng 11 năm 2026 Swift chuyển sang chu kỳ Standards Release hằng năm, nên danh sách này sẽ dài thêm mỗi năm thay vì dừng ở hạn chót.

Đăng ký nhận tin: [Atom feed](/scheme-changes.xml).

## Đánh phiên bản bộ quy tắc

Mã định danh quy tắc ổn định giữa các bản phát hành nhỏ. Thay đổi kết quả của một quy tắc đòi hỏi phiên bản bộ mới, để báo cáo vẫn tái lập được.

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


## Cách ghim một bộ quy tắc

Báo cáo kiểm tra ghi lại phiên bản và mã băm của bộ. Nêu cả hai khi báo sai lệch, để dựng lại đúng bộ quy tắc.
