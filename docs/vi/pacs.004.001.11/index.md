---
title: pacs.004.001.11 — Payment Return | Tiếng Việt
description: Thông điệp pacs.004 được sử dụng để hoàn trả giao dịch thanh toán đã quyết toán trước đó. Thông điệp này đảo ngược dòng tiền khi khoản thanh toán không thể áp dụng, được gửi nhầm, hoặc đang bị thu hồi bởi tổ chức gốc.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **Tên ISO** | PaymentReturnV11 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 11 |

## Tổng quan

Thông điệp pacs.004 được sử dụng để hoàn trả giao dịch thanh toán đã quyết toán trước đó. Thông điệp này đảo ngược dòng tiền khi khoản thanh toán không thể áp dụng, được gửi nhầm, hoặc đang bị thu hồi bởi tổ chức gốc.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và dấu thời gian tạo
- **TxInf** — Thông tin giao dịch với số tiền hoàn trả và các bên
- **OrgnlGrpInf** — Thông tin nhóm gốc liên kết đến thông điệp nguồn
- **RtrRsnInf** — Thông tin lý do hoàn trả với mã lý do có cấu trúc
- **OrgnlTxRef** — Tham chiếu giao dịch gốc để đối chiếu và khớp lệnh

## Bối cảnh kinh doanh

- Xử lý hoàn trả sau quyết toán khi tài khoản người thụ hưởng không thể ghi có
- Hỗ trợ các tình huống thu hồi khi bên gửi gốc yêu cầu hoàn trả tiền
- Mang mã lý do hoàn trả có cấu trúc để đảm bảo minh bạch về quy định và vận hành
- Áp dụng cho cả hoàn trả chuyển khoản tín dụng (pacs.008) và hoàn trả ghi nợ trực tiếp (pacs.003)

## Bối cảnh CBPR+ và lược đồ

- Thay thế MT103 RETURN và thông điệp hoàn trả theo phương thức cover
- Mã lý do hoàn trả được chuẩn hóa và máy đọc được theo ISO 20022
- CBPR+ yêu cầu dữ liệu tham chiếu giao dịch gốc đầy đủ để đối chiếu
- Theo dõi SWIFT gpi mở rộng đến giao dịch hoàn trả để có tầm nhìn từ đầu đến cuối

## Luồng thông điệp

Đại lý nhận lệnh gửi pacs.004 ngược lại qua chuỗi thanh toán để hoàn trả tiền đã quyết toán trước đó. Mỗi đại lý trong chuỗi xử lý hoàn trả và ghi có lại vào tài khoản liên quan.

## Thông điệp liên quan

- [`pacs.008.001.13`](/vi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.003.001.09`](/vi/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.002.001.12`](/vi/pacs.002.001.12/) — FI to FI Payment Status Report

