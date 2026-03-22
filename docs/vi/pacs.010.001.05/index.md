---
title: pacs.010.001.05 — Financial Institution Direct Debit | Tiếng Việt
description: Thông điệp pacs.010 được sử dụng giữa các tổ chức tài chính cho giao dịch ghi nợ trực tiếp trên tài khoản của chính tổ chức. Thông điệp này cho phép một tổ chức thu tiền trực tiếp từ tài khoản của tổ chức khác.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **Tên ISO** | FinancialInstitutionDirectDebitV05 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 5 |

## Tổng quan

Thông điệp pacs.010 được sử dụng giữa các tổ chức tài chính cho giao dịch ghi nợ trực tiếp trên tài khoản của chính tổ chức. Thông điệp này cho phép một tổ chức thu tiền trực tiếp từ tài khoản của tổ chức khác.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và thông tin quyết toán
- **DrctDbtTxInf** — Thông tin giao dịch ghi nợ trực tiếp với số tiền thu
- **Cdtr / CdtrAgt** — Nhận dạng tổ chức chủ nợ và đại lý
- **Dbtr / DbtrAgt** — Nhận dạng tổ chức con nợ và đại lý
- **IntrBkSttlmAmt** — Số tiền quyết toán liên ngân hàng bằng đồng tiền quyết toán

## Bối cảnh kinh doanh

- Hỗ trợ thu ghi nợ trực tiếp liên ngân hàng giữa các tổ chức tài chính
- Được sử dụng cho thu phí, margin call và nghĩa vụ quyết toán tổ chức
- Yêu cầu thỏa thuận song phương đã được đồng ý trước giữa các tổ chức tham gia
- Quan trọng cho quản lý tiền mặt tổ chức và chu kỳ quyết toán liên ngân hàng

## Bối cảnh CBPR+ và lược đồ

- Thay thế các yếu tố của MT204 cho xử lý ghi nợ trực tiếp liên ngân hàng
- Nhận dạng các bên có cấu trúc tuân theo các yêu cầu tương tự như các thông điệp pacs khác
- Xác thực mã nhận dạng tổ chức (BIC, LEI) là bắt buộc
- Được bao gồm trong lộ trình áp dụng ISO 20022 đầy đủ trên các hạ tầng thị trường

## Luồng thông điệp

Tổ chức chủ nợ gửi pacs.010 đến tổ chức con nợ để thu tiền theo thỏa thuận đã đồng ý trước. Tổ chức con nợ xác thực yêu cầu và quyết toán hoặc từ chối ghi nợ trực tiếp.

## Thông điệp liên quan

- [`pacs.009.001.10`](/vi/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.002.001.12`](/vi/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/vi/pacs.003.001.09/) — FI to FI Customer Direct Debit

