---
title: "pacs008 | ISO 20022 Payment Message Toolkit and API"
description: "Tạo, xác thực, điều phối API và hỗ trợ tuân thủ cho quy trình chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính."
lang: "vi-VN"
author: "Sebastien Rousseau"
lastUpdated: true
image: "/logo.webp"
imageAlt: "pacs008"
canonical: "/vi/"
robots: "index, follow"
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "pacs008"
pageType: "home"
schemaType: "WebSite"
heroText: "Tự động hóa xử lý thông điệp pacs.008 theo ISO 20022."
home: true
metaTitle: "pacs008"
subtitle: "Tạo, xác thực, điều phối API và hỗ trợ tuân thủ cho quy trình chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính."
tagline: "Tạo, xác thực, điều phối API và hỗ trợ tuân thủ cho quy trình chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính."
actionText: "Tìm hiểu về pacs008"
actionLink: "/vi/about/"
date: "2026-07-27"
news_publication_date: "2026-07-27"
item_pub_date: "2026-07-27"
last_build_date: "2026-07-27"
name: "pacs008"
short_name: "pacs008"
start_url: "/"
display: "standalone"
background_color: "#ffffff"
theme_color: "#084a53"
---

# Tự động hóa xử lý thông điệp pacs.008 theo ISO 20022.

Tạo, xác thực, điều phối API và hỗ trợ tuân thủ cho quy trình chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính.

## Chức năng

- **Chức năng**: Tạo XML cho `pacs.008` và các định nghĩa thông điệp pacs liên quan; Xác thực dữ liệu và XML theo lược đồ; Cung cấp dịch vụ FastAPI cho quy trình tự động.
- **Xác thực**: Xác thực JSON Schema đối với 20 schema dành riêng cho từng loại thông điệp; Xác minh định dạng và checksum IBAN cho 75 quốc gia; Xác thực XSD của XML đã tạo đối với các schema chính thức ISO 20022.
- **Bảo mật**: Phòng chống XXE thông qua defusedxml cho tất cả hoạt động phân tích XML; Bảo vệ chống path traversal với danh sách thư mục cho phép nghiêm ngặt; Che giấu PII trong nhật ký JSON có cấu trúc để hỗ trợ tuân thủ GDPR và PCI DSS.
- **Sẵn sàng cho 2026**: xử lý địa chỉ bưu điện có cấu trúc và kết hợp cho CBPR+ và chuyển đổi lược đồ; xác thực mạnh hơn về chất lượng dữ liệu bên nợ, bên có và đại lý; tạo nhận biết phiên bản qua các bản sửa đổi pacs.008 cũ và hiện tại.

## Installation & Quickstart

```bash
pip install pacs008
```

Read the full [API & CLI Reference](/vi/api/) and [Selection Guide](/vi/message-selection/).
