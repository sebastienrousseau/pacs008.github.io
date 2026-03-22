---
title: pacs.009.001.10 — Financial Institution Credit Transfer | Tiếng Việt
description: Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt khách hàng. Thông điệp này hỗ trợ cấp vốn liên ngân hàng, thanh toán cover và quản lý thanh khoản.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **Tên ISO** | FinancialInstitutionCreditTransferV10 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 10 |

## Tổng quan

Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt khách hàng. Thông điệp này hỗ trợ cấp vốn liên ngân hàng, thanh toán cover và quản lý thanh khoản.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và thông tin quyết toán
- **CdtTrfTxInf** — Thông tin giao dịch chuyển khoản tín dụng với số tiền quyết toán liên ngân hàng
- **Dbtr / DbtrAgt** — Nhận dạng tổ chức con nợ và đại lý
- **Cdtr / CdtrAgt** — Nhận dạng tổ chức chủ nợ và đại lý
- **IntrBkSttlmAmt** — Số tiền quyết toán liên ngân hàng bằng đồng tiền quyết toán

## Bối cảnh kinh doanh

- Được sử dụng cho chuyển khoản tài khoản tự thân giữa ngân hàng và thanh toán cover
- Hỗ trợ quản lý thanh khoản giữa các đối tác ngân hàng đại lý
- Mang chặng cover của chuyển khoản tín dụng khách hàng được quyết toán qua phương thức cover
- Cho phép các hoạt động ngân quỹ và cấp vốn giữa các tổ chức tài chính

## Bối cảnh CBPR+ và lược đồ

- Thay thế MT202 và MT202COV cho chuyển khoản giữa các tổ chức
- Quy trình phương thức cover ghép cặp pacs.009 với lệnh khách hàng pacs.008 nền tảng
- Dữ liệu các bên có cấu trúc và nhận dạng LEI ngày càng được yêu cầu
- SWIFT gpi bao phủ pacs.009 để đảm bảo minh bạch ngân hàng đại lý

## Luồng thông điệp

Tổ chức con nợ gửi pacs.009 đến tổ chức chủ nợ để chuyển tiền của chính mình. Đối với thanh toán theo phương thức cover, pacs.009 cung cấp chặng cấp vốn trong khi pacs.008 mang lệnh khách hàng qua đường dẫn riêng biệt.

## Thông điệp liên quan

- [`pacs.008.001.13`](/vi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.002.001.12`](/vi/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.010.001.05`](/vi/pacs.010.001.05/) — Financial Institution Direct Debit

