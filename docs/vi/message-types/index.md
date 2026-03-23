---
title: Loại thông điệp | pacs008 ISO 20022
description: Các định nghĩa và phiên bản thông điệp pacs ISO 20022 được hỗ trợ. Tạo, xác thực, điều phối API và hỗ trợ tuân thủ cho quy trình chuyển khoản tín dụng...
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# Loại thông điệp

pacs008 bao gồm định nghĩa thông điệp pacs.008 cốt lõi và các thông điệp liên quan được sử dụng trong các luồng điều phối và đối soát.

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026 bằng các tài liệu công khai của ISO 20022, EPC và Swift được dẫn trên trang này.

## Hỗ trợ bao gồm

| Loại thông điệp | Mô tả | Phiên bản | Năm | Tổng quan |
|---|---|---|---|---|
| [`pacs.002.001.12`](/vi/pacs.002.001.12/) | Báo cáo trạng thái thanh toán giữa các tổ chức tài chính | `pacs.002.001.12` | 2019 | Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán. |
| [`pacs.003.001.09`](/vi/pacs.003.001.09/) | Ghi nợ trực tiếp khách hàng giữa các tổ chức tài chính | `pacs.003.001.09` | 2019 | Thông điệp pacs.003 được trao đổi giữa các tổ chức tài chính để thực hiện lệnh ghi nợ trực tiếp của khách hàng. Thông điệp này cho phép ngân hàng của chủ nợ thu tiền từ ngân hàng của con nợ thay mặt cho chủ nợ. |
| [`pacs.004.001.11`](/vi/pacs.004.001.11/) | Hoàn trả thanh toán | `pacs.004.001.11` | 2019 | Thông điệp pacs.004 được sử dụng để hoàn trả giao dịch thanh toán đã quyết toán trước đó. Thông điệp này đảo ngược dòng tiền khi khoản thanh toán không thể áp dụng, được gửi nhầm, hoặc đang bị thu hồi bởi tổ chức gốc. |
| [`pacs.007.001.11`](/vi/pacs.007.001.11/) | Đảo ngược thanh toán giữa các tổ chức tài chính | `pacs.007.001.11` | 2019 | Thông điệp pacs.007 được sử dụng để đảo ngược lệnh thanh toán đã gửi trước đó chưa được quyết toán hoặc để yêu cầu đảo ngược khoản thanh toán đã quyết toán. Khác với pacs.004 (hoàn trả), thông điệp này được khởi tạo bởi đại lý ra lệnh gốc. |
| [`pacs.008.001.13`](/vi/pacs.008.001.13/) | Chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính | `pacs.008.001.13` | 2023 | Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin con nợ, chủ nợ, số tiền và thông tin chuyển tiền cho một hoặc nhiều giao dịch chuyển khoản tín dụng. |
| [`pacs.009.001.10`](/vi/pacs.009.001.10/) | Chuyển khoản tín dụng giữa các tổ chức tài chính | `pacs.009.001.10` | 2019 | Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt khách hàng. Thông điệp này hỗ trợ cấp vốn liên ngân hàng, thanh toán bù đắp và quản lý thanh khoản. |
| [`pacs.010.001.05`](/vi/pacs.010.001.05/) | Ghi nợ trực tiếp giữa các tổ chức tài chính | `pacs.010.001.05` | 2019 | Thông điệp pacs.010 được sử dụng giữa các tổ chức tài chính cho giao dịch ghi nợ trực tiếp trên tài khoản của chính tổ chức. Thông điệp này cho phép một tổ chức thu tiền trực tiếp từ tài khoản của tổ chức khác. |
| [`pacs.028.001.05`](/vi/pacs.028.001.05/) | Yêu cầu trạng thái thanh toán giữa các tổ chức tài chính | `pacs.028.001.05` | 2019 | Thông điệp pacs.028 được gửi bởi tổ chức tài chính để yêu cầu trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cho phép theo dõi chủ động việc xử lý thanh toán mà không cần chờ báo cáo trạng thái không được yêu cầu. |

## Mô hình phân phối

Mỗi loại thông điệp được hỗ trợ đều có tài nguyên mẫu và logic xác thực để các nhóm có thể chuẩn hóa việc tạo và kiểm tra hồi quy trên nhiều kênh.

## Chọn đúng thông điệp

Danh mục thông điệp đặc biệt quan trọng khi các nhóm cần quyết định thông điệp nào khởi tạo luồng, thông điệp nào báo trạng thái, và thông điệp nào sửa hoặc đảo ngược quy trình.

Xem [hướng dẫn lựa chọn thông điệp](/vi/message-selection/) để có góc nhìn quyết định ngắn gọn về các luồng pacs được hỗ trợ.


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

