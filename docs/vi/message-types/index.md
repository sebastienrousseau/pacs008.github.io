---
title: Loại thông điệp | Tiếng Việt
description: Các định nghĩa và phiên bản thông điệp pacs ISO 20022 được hỗ trợ.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# Loại thông điệp

pacs008 bao gồm định nghĩa thông điệp pacs.008 cốt lõi và các thông điệp liên quan được sử dụng trong các luồng điều phối và đối soát.

## Hỗ trợ bao gồm

| Loại thông điệp | Mô tả |
|---|---|
| [`pacs.002.001.12`](/vi/pacs.002.001.12/) | FI to FI Payment Status Report |
| [`pacs.003.001.09`](/vi/pacs.003.001.09/) | FI to FI Customer Direct Debit |
| [`pacs.004.001.11`](/vi/pacs.004.001.11/) | Payment Return |
| [`pacs.007.001.11`](/vi/pacs.007.001.11/) | FI to FI Payment Reversal |
| [`pacs.008.001.01`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.02`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.03`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.04`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.05`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.06`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.07`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.08`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.09`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.10`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.11`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.12`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.13`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.009.001.10`](/vi/pacs.009.001.10/) | Financial Institution Credit Transfer |
| [`pacs.010.001.05`](/vi/pacs.010.001.05/) | Financial Institution Direct Debit |
| [`pacs.028.001.05`](/vi/pacs.028.001.05/) | FI to FI Payment Status Request |

## Mô hình phân phối

Mỗi loại thông điệp được hỗ trợ đều có tài nguyên mẫu và logic xác thực để các nhóm có thể chuẩn hóa việc tạo và kiểm tra hồi quy trên nhiều kênh.

## Bối cảnh thị trường 2026

- **SEPA SCT / SCT Inst**: pacs.008 vẫn là trung tâm cho trao đổi chuyển khoản tín dụng và xử lý thanh toán tức thì.
- **CBPR+**: pacs.008 tiếp tục thay thế tải trọng xuyên biên giới kiểu MT103 bằng dữ liệu có cấu trúc phong phú hơn.
- **Địa chỉ có cấu trúc**: hướng dẫn thị trường hiện tại chỉ ra việc chuyển đổi vào tháng 11 năm 2026 khỏi địa chỉ bưu điện hoàn toàn không có cấu trúc.
- **Phương pháp nối tiếp và STP**: chuỗi ngân hàng đến ngân hàng nhiều chặng vẫn quan trọng, và các biến thể xử lý trực tiếp vẫn cần thiết cho hiệu quả vận hành.

## Năng lực vận hành

pacs008 cung cấp tạo và xác thực dựa trên mẫu qua các bản sửa đổi định nghĩa thông điệp được hỗ trợ:

- so sánh phiên bản
- kiểm tra hồi quy cập nhật lược đồ
- củng cố dữ liệu thông điệp thanh toán đi trước khi phát hành
- hỗ trợ đội ngũ sản phẩm, vận hành và chuyển đổi từ một cơ sở mã duy nhất

