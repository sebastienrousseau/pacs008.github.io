---
title: pacs.028.001.05 — FI to FI Payment Status Request | Tiếng Việt
description: Thông điệp pacs.028 được gửi bởi tổ chức tài chính để yêu cầu trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cho phép theo dõi chủ động việc xử lý thanh toán mà không cần chờ báo cáo trạng thái không được yêu cầu.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **Tên ISO** | FIToFIPaymentStatusRequestV05 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 5 |

## Tổng quan

Thông điệp pacs.028 được gửi bởi tổ chức tài chính để yêu cầu trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cho phép theo dõi chủ động việc xử lý thanh toán mà không cần chờ báo cáo trạng thái không được yêu cầu.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và dấu thời gian tạo
- **TxInf** — Thông tin giao dịch xác định khoản thanh toán cần tra cứu
- **OrgnlGrpInf** — Thông tin nhóm gốc tham chiếu đến thông điệp nguồn
- **OrgnlInstrId** — Mã nhận dạng lệnh gốc từ thanh toán nguồn
- **OrgnlEndToEndId** — Mã nhận dạng từ đầu đến cuối gốc để truy vết

## Bối cảnh kinh doanh

- Cho phép tra cứu trạng thái chủ động cho các lệnh thanh toán đang trên đường
- Hỗ trợ các nhóm vận hành điều tra các khoản thanh toán bị chậm trễ hoặc thất lạc
- Bổ sung cho pacs.002 bằng cách chủ động khởi tạo thông tin liên lạc về trạng thái thay vì chờ đợi
- Được sử dụng trong quy trình xử lý ngoại lệ và giám sát SLA

## Bối cảnh CBPR+ và lược đồ

- Thay thế các mẫu tra cứu trạng thái MT199 và truy vấn thông điệp SWIFT thủ công
- CBPR+ hỗ trợ yêu cầu trạng thái có cấu trúc liên kết với mã nhận dạng thông điệp gốc
- Theo dõi dựa trên UETR qua gpi giảm nhu cầu tra cứu thủ công
- Ngày càng được tích hợp vào bảng điều khiển vận hành thanh toán tự động

## Luồng thông điệp

Đại lý ra lệnh gửi pacs.028 đến đại lý nhận lệnh để yêu cầu trạng thái của một khoản thanh toán cụ thể. Đại lý nhận lệnh phản hồi bằng pacs.002 chứa trạng thái xử lý hiện tại.

## Thông điệp liên quan

- [`pacs.002.001.12`](/vi/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.008.001.13`](/vi/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/vi/pacs.009.001.10/) — Financial Institution Credit Transfer

