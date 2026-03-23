---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin...
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **Tên ISO** | FIToFICustomerCreditTransferV13 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2023 |
| **Phiên bản** | 13 |

## Tổng quan

Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin con nợ, chủ nợ, số tiền và thông tin chuyển tiền cho một hoặc nhiều giao dịch chuyển khoản tín dụng.

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026. Ngày tham chiếu của danh mục ISO 20022: 27 February 2025; các liên kết nguồn được liệt kê bên dưới.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với ID thông điệp, ngày tạo, số lượng giao dịch và thông tin quyết toán
- **CdtTrfTxInf** — Thông tin giao dịch chuyển khoản tín dụng với số tiền, phí và mục đích
- **Dbtr / DbtrAgt** — Nhận dạng và chi tiết tài khoản con nợ và đại lý con nợ
- **Cdtr / CdtrAgt** — Nhận dạng và chi tiết tài khoản chủ nợ và đại lý chủ nợ
- **RmtInf** — Thông tin chuyển tiền cho tham chiếu thanh toán có cấu trúc hoặc không có cấu trúc

## Bối cảnh kinh doanh

- Thông điệp chính cho chuyển khoản tín dụng xuyên biên giới và nội địa do khách hàng khởi tạo
- Được sử dụng trên toàn bộ SEPA SCT, SEPA Instant, CBPR+ và các hệ thống thanh toán bù trừ quốc gia
- Mang thông tin chuyển tiền có cấu trúc để hỗ trợ đối chiếu tự động
- Hỗ trợ phương thức quyết toán nối tiếp, cover và trực tiếp cho chuỗi thanh toán nhiều chặng

| Yếu tố dữ liệu chính | Bối cảnh kinh doanh |
|---|---|
| **GrpHdr** — Tiêu đề nhóm với ID thông điệp, ngày tạo, số lượng giao dịch và thông tin quyết toán | Thông điệp chính cho chuyển khoản tín dụng xuyên biên giới và nội địa do khách hàng khởi tạo |
| **CdtTrfTxInf** — Thông tin giao dịch chuyển khoản tín dụng với số tiền, phí và mục đích | Được sử dụng trên toàn bộ SEPA SCT, SEPA Instant, CBPR+ và các hệ thống thanh toán bù trừ quốc gia |
| **Dbtr / DbtrAgt** — Nhận dạng và chi tiết tài khoản con nợ và đại lý con nợ | Mang thông tin chuyển tiền có cấu trúc để hỗ trợ đối chiếu tự động |
| **Cdtr / CdtrAgt** — Nhận dạng và chi tiết tài khoản chủ nợ và đại lý chủ nợ | Hỗ trợ phương thức quyết toán nối tiếp, cover và trực tiếp cho chuỗi thanh toán nhiều chặng |
| **RmtInf** — Thông tin chuyển tiền cho tham chiếu thanh toán có cấu trúc hoặc không có cấu trúc | Đại lý con nợ tạo pacs.008 và gửi đến đại lý chủ nợ (trực tiếp hoặc qua trung gian). Mỗi đại lý trong chuỗi xác thực, bổ sung và chuyển tiếp lệnh cho đến khi đại lý chủ nợ ghi có vào tài khoản người thụ hưởng. |

## Bối cảnh CBPR+ và lược đồ

- Thay thế MT103 và MT103+ cho chuyển khoản tín dụng khách hàng xuyên biên giới
- Hạn chót địa chỉ có cấu trúc tháng 11 năm 2026 áp dụng cho tất cả địa chỉ bưu điện của các bên
- SWIFT gpi yêu cầu pacs.008 cho theo dõi từ đầu đến cuối dựa trên UETR
- 13 phiên bản sửa đổi phản ánh sự phát triển liên tục của lược đồ trên các hạ tầng thị trường

## Luồng thông điệp

Đại lý con nợ tạo pacs.008 và gửi đến đại lý chủ nợ (trực tiếp hoặc qua trung gian). Mỗi đại lý trong chuỗi xác thực, bổ sung và chuyển tiếp lệnh cho đến khi đại lý chủ nợ ghi có vào tài khoản người thụ hưởng.

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## Phiên bản được hỗ trợ

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Thông điệp liên quan
| Loại thông điệp | Mô tả | Tổng quan |
|---|---|---|
| [`pacs.002.001.12`](/vi/pacs.002.001.12/) | FI to FI Payment Status Report | Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán. |
| [`pacs.004.001.11`](/vi/pacs.004.001.11/) | Payment Return | Thông điệp pacs.004 được sử dụng để hoàn trả giao dịch thanh toán đã quyết toán trước đó. Thông điệp này đảo ngược dòng tiền khi khoản thanh toán không thể áp dụng, được gửi nhầm, hoặc đang bị thu hồi bởi tổ chức gốc. |
| [`pacs.009.001.10`](/vi/pacs.009.001.10/) | Financial Institution Credit Transfer | Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt khách hàng. Thông điệp này hỗ trợ cấp vốn liên ngân hàng, thanh toán cover và quản lý thanh khoản. |

