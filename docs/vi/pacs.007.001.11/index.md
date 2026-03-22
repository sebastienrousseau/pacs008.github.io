---
title: pacs.007.001.11 — FI to FI Payment Reversal | Tiếng Việt
description: Thông điệp pacs.007 được sử dụng để đảo ngược lệnh thanh toán đã gửi trước đó chưa được quyết toán hoặc để yêu cầu đảo ngược khoản thanh toán đã quyết toán. Khác với pacs.004 (hoàn trả), thông điệp này được khởi tạo bởi đại lý ra lệnh gốc.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **Tên ISO** | FIToFIPaymentReversalV11 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 11 |

## Tổng quan

Thông điệp pacs.007 được sử dụng để đảo ngược lệnh thanh toán đã gửi trước đó chưa được quyết toán hoặc để yêu cầu đảo ngược khoản thanh toán đã quyết toán. Khác với pacs.004 (hoàn trả), thông điệp này được khởi tạo bởi đại lý ra lệnh gốc.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và dấu thời gian tạo
- **TxInf** — Thông tin giao dịch với số tiền đảo ngược và các bên
- **OrgnlGrpInf** — Thông tin nhóm gốc tham chiếu đến thông điệp nguồn
- **RvslRsnInf** — Thông tin lý do đảo ngược với mã lý do có cấu trúc
- **OrgnlTxRef** — Tham chiếu giao dịch gốc để truy vết từ đầu đến cuối

## Bối cảnh kinh doanh

- Được khởi tạo khi bên gửi gốc phát hiện lỗi trước hoặc sau quyết toán
- Được sử dụng trong các tình huống gian lận khi cần đảo ngược nhanh chóng
- Hỗ trợ đảo ngược toàn bộ và một phần số tiền thanh toán gốc
- Mang mã lý do đảo ngược có cấu trúc cho xử lý hạ nguồn

## Bối cảnh CBPR+ và lược đồ

- Phân biệt với pacs.004 theo hướng — đảo ngược đi xuôi từ bên gửi gốc, hoàn trả đi ngược từ người thụ hưởng
- CBPR+ yêu cầu ghép cặp với mã nhận dạng thông điệp gốc để đối chiếu tự động
- Mã lý do có cấu trúc thay thế văn bản tự do từ thông điệp MT kế thừa
- Ngày càng được sử dụng nhiều trong quy trình thu hồi thanh toán tức thì và phòng chống gian lận

## Luồng thông điệp

Đại lý ra lệnh (bên gửi gốc) gửi pacs.007 xuôi qua chuỗi thanh toán để đảo ngược khoản thanh toán đã ra lệnh trước đó. Mỗi đại lý xử lý lệnh đảo ngược và điều chỉnh quyết toán tương ứng.

## Thông điệp liên quan

- [`pacs.008.001.13`](/vi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.004.001.11`](/vi/pacs.004.001.11/) — Payment Return
- [`pacs.002.001.12`](/vi/pacs.002.001.12/) — FI to FI Payment Status Report

