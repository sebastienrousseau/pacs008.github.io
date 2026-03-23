---
title: Giới thiệu pacs008 | pacs008
description: pacs008 làm gì và dành cho ai. Tạo, xác thực, điều phối API và hỗ trợ tuân thủ cho quy trình chuyển khoản tín dụng khách hàng FI-to-FI.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# Giới thiệu pacs008

pacs008 là bộ công cụ Python để tự động hóa quy trình chuyển khoản tín dụng khách hàng ISO 20022 giữa các tổ chức tài chính.

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026 bằng các tài liệu công khai của ISO 20022, EPC và Swift được dẫn trên trang này.

## Chức năng

- Tạo XML cho `pacs.008` và các định nghĩa thông điệp pacs liên quan
- Xác thực dữ liệu và XML theo lược đồ
- Cung cấp dịch vụ FastAPI cho quy trình tự động
- Cung cấp CLI cho thực thi cục bộ và pipeline CI
- Hỗ trợ nguồn dữ liệu có cấu trúc bao gồm CSV, JSON, JSONL, SQLite và Parquet
- Xác thực mã IBAN (75 quốc gia, checksum ISO 7064) và BIC (ISO 9362)
- Làm sạch dữ liệu thanh toán để tuân thủ SWIFT với chuyển tự và kiểm soát độ dài trường
- Xử lý tập dữ liệu lớn theo từng phần có thể cấu hình để tiết kiệm bộ nhớ
- Cung cấp Docker image để triển khai API trong container

## Đối tượng sử dụng

- đội ngũ vận hành thanh toán
- kỹ sư nền tảng xây dựng hạ tầng xử lý thanh toán nội bộ
- chương trình chuyển đổi sang ISO 20022
- đội ngũ tuân thủ và QA xác thực thông điệp thanh toán đi

## Xác thực

Nhiều lớp xác thực hoạt động trước khi bất kỳ XML nào được ghi:

- Xác thực JSON Schema đối với 20 schema dành riêng cho từng loại thông điệp
- Xác minh định dạng và checksum IBAN cho 75 quốc gia
- Xác thực cấu trúc BIC và mã quốc gia theo ISO 9362
- Xác thực XSD của XML đã tạo đối với các schema chính thức ISO 20022

## Bảo mật

pacs008 áp dụng phòng thủ theo chiều sâu ở mọi lớp của pipeline xử lý:

- Phòng chống XXE thông qua defusedxml cho tất cả hoạt động phân tích XML
- Bảo vệ chống path traversal với danh sách thư mục cho phép nghiêm ngặt
- Che giấu PII trong nhật ký JSON có cấu trúc để hỗ trợ tuân thủ GDPR và PCI DSS
- Phòng chống SQL injection với kiểm soát nghiêm ngặt tên bảng cho nguồn SQLite

## Sẵn sàng cho 2026

pacs008 được thiết kế xung quanh các thời hạn vận hành và yêu cầu chất lượng dữ liệu liên quan đến năm 2026:

- xử lý địa chỉ bưu điện có cấu trúc và kết hợp cho CBPR+ và chuyển đổi lược đồ
- xác thực mạnh hơn về chất lượng dữ liệu bên nợ, bên có và đại lý
- tạo nhận biết phiên bản qua các bản sửa đổi pacs.008 cũ và hiện tại
- đường dẫn tự động hóa phù hợp với CI, hoạt động theo lô và dịch vụ thanh toán nội bộ

## Trọng tâm vận hành

pacs008 vượt ra ngoài tham chiếu định nghĩa thông điệp để hỗ trợ triển khai vận hành:

- tạo XML từ dữ liệu nguồn thực
- xác thực trước khi giao
- mô hình hóa chuỗi thanh toán và định dạng hạ nguồn
- làm cho các thay đổi cụ thể theo lược đồ có thể kiểm tra được trong mã


