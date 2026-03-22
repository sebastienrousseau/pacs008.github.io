---
title: Giới thiệu pacs008 | Tiếng Việt
description: pacs008 làm gì và dành cho ai.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# Giới thiệu pacs008

pacs008 là bộ công cụ Python để tự động hóa quy trình chuyển khoản tín dụng khách hàng ISO 20022 giữa các tổ chức tài chính.

## Chức năng

- Tạo XML cho `pacs.008` và các định nghĩa thông điệp pacs liên quan
- Xác thực dữ liệu và XML theo lược đồ
- Cung cấp dịch vụ FastAPI cho quy trình tự động
- Cung cấp CLI cho thực thi cục bộ và pipeline CI
- Hỗ trợ nguồn dữ liệu có cấu trúc bao gồm CSV, JSON, JSONL, SQLite và Parquet

## Đối tượng sử dụng

- đội ngũ vận hành thanh toán
- kỹ sư nền tảng xây dựng hạ tầng xử lý thanh toán nội bộ
- chương trình chuyển đổi sang ISO 20022
- đội ngũ tuân thủ và QA xác thực thông điệp thanh toán đi

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

