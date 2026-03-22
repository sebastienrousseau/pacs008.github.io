---
title: API | Tiếng Việt
description: Hỗ trợ quy trình REST và CLI trong Pacs008.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# API

Dự án cung cấp cả REST API và CLI cho quy trình xử lý thông điệp thanh toán vận hành.

## Khả năng API

- điểm cuối sức khỏe và sẵn sàng
- xác thực dữ liệu trước khi tạo XML
- tạo đồng bộ cho quy trình trực tiếp
- thực thi công việc bất đồng bộ cho pipeline dài hơn
- tệp được tạo có thể tải xuống thông qua luồng hoàn thành công việc

## Khả năng CLI

- trỏ đến tệp nguồn và phiên bản thông điệp
- xác thực theo XSD trước khi giao
- tạo XML vào thư mục đầu ra thân thiện với pipeline
- phù hợp với công việc CI, lịch trình theo lô và công cụ vận hành cục bộ

## Trọng tâm triển khai

Pacs008 được thiết kế cho sử dụng vận hành bởi các đội xử lý thanh toán:

- xác thực trước chuyến bay trước khi tạo thông điệp
- chọn lược đồ và phiên bản tại thời gian chạy
- luồng tạo bất đồng bộ cho dịch vụ nội bộ
- đầu ra xác định cho kiểm tra và đường kiểm toán

## Yêu cầu chất lượng dữ liệu cho năm 2026

Yêu cầu chất lượng thông điệp đang thắt chặt trên toàn ngành, đặc biệt xung quanh:

- nhận dạng bên và đại lý
- sẵn sàng địa chỉ có cấu trúc hoặc kết hợp
- xử lý chuyển tiền và tham chiếu phong phú hơn
- minh bạch qua chuỗi thanh toán nối tiếp

API và CLI được thiết kế để biến các kiểm tra này thành một phần của quy trình làm việc thay vì bước xem xét thủ công.

