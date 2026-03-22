---
title: pacs.003.001.09 — FI to FI Customer Direct Debit | Tiếng Việt
description: Thông điệp pacs.003 được trao đổi giữa các tổ chức tài chính để thực hiện lệnh ghi nợ trực tiếp của khách hàng. Thông điệp này cho phép ngân hàng của chủ nợ thu tiền từ ngân hàng của con nợ thay mặt cho chủ nợ.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **Tên ISO** | FIToFICustomerDirectDebitV09 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 9 |

## Tổng quan

Thông điệp pacs.003 được trao đổi giữa các tổ chức tài chính để thực hiện lệnh ghi nợ trực tiếp của khách hàng. Thông điệp này cho phép ngân hàng của chủ nợ thu tiền từ ngân hàng của con nợ thay mặt cho chủ nợ.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và thông tin quyết toán
- **DrctDbtTxInf** — Thông tin giao dịch ghi nợ trực tiếp với số tiền và các bên
- **Cdtr** — Nhận dạng chủ nợ và chi tiết tài khoản
- **CdtrAgt** — Nhận dạng đại lý chủ nợ (tổ chức thu tiền)
- **DbtrAgt** — Nhận dạng đại lý con nợ (tổ chức thanh toán)

## Bối cảnh kinh doanh

- Hỗ trợ các chương trình ghi nợ trực tiếp SEPA Core và B2B
- Được sử dụng cho việc thu thanh toán định kỳ như đăng ký thuê bao, hóa đơn tiện ích và trả nợ vay
- Yêu cầu tham chiếu ủy quyền hợp lệ giữa con nợ và chủ nợ
- Cho phép thu gom hàng loạt nhiều lệnh ghi nợ trực tiếp trong một thông điệp duy nhất

## Bối cảnh CBPR+ và lược đồ

- Yêu cầu về địa chỉ có cấu trúc và nhận dạng các bên áp dụng tương tự cho ghi nợ trực tiếp
- Dữ liệu liên quan đến ủy quyền phải hoàn toàn có cấu trúc từ tháng 11 năm 2026
- Thay thế các định dạng ghi nợ trực tiếp kiểu MT104 kế thừa trong quy trình xuyên biên giới
- Việc xác thực nhận dạng chương trình chủ nợ ngày càng được thực thi nghiêm ngặt

## Luồng thông điệp

Đại lý chủ nợ khởi tạo pacs.003 hướng tới đại lý con nợ để thu tiền. Đại lý con nợ xác thực ủy quyền, kiểm tra số dư tài khoản, và quyết toán hoặc trả lại giao dịch.

## Thông điệp liên quan

- [`pacs.004.001.11`](/vi/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/vi/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.002.001.12`](/vi/pacs.002.001.12/) — FI to FI Payment Status Report

