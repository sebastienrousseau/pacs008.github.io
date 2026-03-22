---
title: pacs.002.001.12 — FI to FI Payment Status Report | Tiếng Việt
description: Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **Tên ISO** | FIToFIPaymentStatusReportV12 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 12 |

## Tổng quan

Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và dấu thời gian tạo
- **OrgnlGrpInfAndSts** — Thông tin nhóm gốc và trạng thái cho báo cáo cấp nhóm
- **TxInfAndSts** — Thông tin giao dịch và trạng thái cho kết quả giao dịch riêng lẻ
- **StsRsnInf** — Thông tin lý do trạng thái với mã lý do có cấu trúc
- **OrgnlTxRef** — Tham chiếu giao dịch gốc liên kết ngược về lệnh nguồn

## Bối cảnh kinh doanh

- Được sử dụng để xác nhận quyết toán hoặc báo cáo từ chối chuyển khoản tín dụng, ghi nợ trực tiếp và hoàn trả thanh toán
- Cho phép đối chiếu giữa đại lý ra lệnh và đại lý nhận lệnh
- Bắt buộc trong quy trình CBPR+ để xác nhận việc xử lý thông điệp pacs.008 và pacs.009
- Hỗ trợ báo cáo trạng thái cả ở cấp nhóm và cấp giao dịch riêng lẻ

## Bối cảnh CBPR+ và lược đồ

- Thay thế các thông báo trạng thái MT199 và field 79 trong thông điệp MT
- CBPR+ bắt buộc sử dụng pacs.002 cho tất cả thông tin liên lạc về trạng thái thanh toán
- Mã lý do có cấu trúc thay thế các giải thích từ chối dạng văn bản tự do
- Tích hợp theo dõi SWIFT gpi yêu cầu pacs.002 để đảm bảo minh bạch từ đầu đến cuối

## Luồng thông điệp

Đại lý nhận lệnh (bên nhận) gửi pacs.002 trở lại đại lý ra lệnh (bên gửi) để xác nhận việc chấp nhận, quyết toán hoặc từ chối lệnh thanh toán đã nhận như pacs.008 hoặc pacs.009.

## Thông điệp liên quan

- [`pacs.008.001.13`](/vi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/vi/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.028.001.05`](/vi/pacs.028.001.05/) — FI to FI Payment Status Request

