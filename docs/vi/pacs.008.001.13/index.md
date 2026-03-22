---
title: pacs.008.001.13 — FI to FI Customer Credit Transfer | Tiếng Việt
description: Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin con nợ, chủ nợ, số tiền và thông tin chuyển tiền cho một hoặc nhiều giao dịch chuyển khoản tín dụng.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **Tên ISO** | FIToFICustomerCreditTransferV13 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2023 |
| **Phiên bản** | 13 |

## Tổng quan

Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin con nợ, chủ nợ, số tiền và thông tin chuyển tiền cho một hoặc nhiều giao dịch chuyển khoản tín dụng.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với ID thông điệp, ngày tạo, số lượng giao dịch và thông tin quyết toán
- **CdtTrfTxInf** — Thông tin giao dịch chuyển khoản tín dụng với số tiền, phí và mục đích
- **Dbtr / DbtrAgt** — Nhận dạng và chi tiết tài khoản con nợ và đại lý con nợ
- **Cdtr / CdtrAgt** — Nhận dạng và chi tiết tài khoản chủ nợ và đại lý chủ nợ
- **RmtInf** — Thông tin chuyển tiền cho tham chiếu thanh toán có cấu trúc hoặc không có cấu trúc

## Bối cảnh kinh doanh

- Thông điệp chính cho chuyển khoản tín dụng xuyên biên giới và nội địa do khách hàng khởi tạo
- Được sử dụng trên toàn bộ SEPA SCT, SEPA Instant, CBPR+ và các hệ thống thanh toán bù trừ quốc gia
- Mang thông tin chuyển tiền có cấu trúc để hỗ trợ đối chiếu tự động
- Hỗ trợ phương thức quyết toán nối tiếp, cover và trực tiếp cho chuỗi thanh toán nhiều chặng

## Bối cảnh CBPR+ và lược đồ

- Thay thế MT103 và MT103+ cho chuyển khoản tín dụng khách hàng xuyên biên giới
- Hạn chót địa chỉ có cấu trúc tháng 11 năm 2026 áp dụng cho tất cả địa chỉ bưu điện của các bên
- SWIFT gpi yêu cầu pacs.008 cho theo dõi từ đầu đến cuối dựa trên UETR
- 13 phiên bản sửa đổi phản ánh sự phát triển liên tục của lược đồ trên các hạ tầng thị trường

## Luồng thông điệp

Đại lý con nợ tạo pacs.008 và gửi đến đại lý chủ nợ (trực tiếp hoặc qua trung gian). Mỗi đại lý trong chuỗi xác thực, bổ sung và chuyển tiếp lệnh cho đến khi đại lý chủ nợ ghi có vào tài khoản người thụ hưởng.

## Phiên bản được hỗ trợ

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Thông điệp liên quan

- [`pacs.002.001.12`](/vi/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.004.001.11`](/vi/pacs.004.001.11/) — Payment Return
- [`pacs.009.001.10`](/vi/pacs.009.001.10/) — Financial Institution Credit Transfer

