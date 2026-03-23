---
title: pacs.009.001.10 | Financial Institution Credit Transfer | pacs008
description: Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt...
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **Tên ISO** | FinancialInstitutionCreditTransferV10 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 10 |

## Tổng quan

Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt khách hàng. Thông điệp này hỗ trợ cấp vốn liên ngân hàng, thanh toán cover và quản lý thanh khoản.

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026. Ngày tham chiếu của danh mục ISO 20022: 27 February 2025; các liên kết nguồn được liệt kê bên dưới.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và thông tin quyết toán
- **CdtTrfTxInf** — Thông tin giao dịch chuyển khoản tín dụng với số tiền quyết toán liên ngân hàng
- **Dbtr / DbtrAgt** — Nhận dạng tổ chức con nợ và đại lý
- **Cdtr / CdtrAgt** — Nhận dạng tổ chức chủ nợ và đại lý
- **IntrBkSttlmAmt** — Số tiền quyết toán liên ngân hàng bằng đồng tiền quyết toán

## Bối cảnh kinh doanh

- Được sử dụng cho chuyển khoản tài khoản tự thân giữa ngân hàng và thanh toán cover
- Hỗ trợ quản lý thanh khoản giữa các đối tác ngân hàng đại lý
- Mang chặng cover của chuyển khoản tín dụng khách hàng được quyết toán qua phương thức cover
- Cho phép các hoạt động ngân quỹ và cấp vốn giữa các tổ chức tài chính

| Yếu tố dữ liệu chính | Bối cảnh kinh doanh |
|---|---|
| **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và thông tin quyết toán | Được sử dụng cho chuyển khoản tài khoản tự thân giữa ngân hàng và thanh toán cover |
| **CdtTrfTxInf** — Thông tin giao dịch chuyển khoản tín dụng với số tiền quyết toán liên ngân hàng | Hỗ trợ quản lý thanh khoản giữa các đối tác ngân hàng đại lý |
| **Dbtr / DbtrAgt** — Nhận dạng tổ chức con nợ và đại lý | Mang chặng cover của chuyển khoản tín dụng khách hàng được quyết toán qua phương thức cover |
| **Cdtr / CdtrAgt** — Nhận dạng tổ chức chủ nợ và đại lý | Cho phép các hoạt động ngân quỹ và cấp vốn giữa các tổ chức tài chính |
| **IntrBkSttlmAmt** — Số tiền quyết toán liên ngân hàng bằng đồng tiền quyết toán | Tổ chức con nợ gửi pacs.009 đến tổ chức chủ nợ để chuyển tiền của chính mình. Đối với thanh toán theo phương thức cover, pacs.009 cung cấp chặng cấp vốn trong khi pacs.008 mang lệnh khách hàng qua đường dẫn riêng biệt. |

## Bối cảnh CBPR+ và lược đồ

- Thay thế MT202 và MT202COV cho chuyển khoản giữa các tổ chức
- Quy trình phương thức cover ghép cặp pacs.009 với lệnh khách hàng pacs.008 nền tảng
- Dữ liệu các bên có cấu trúc và nhận dạng LEI ngày càng được yêu cầu
- SWIFT gpi bao phủ pacs.009 để đảm bảo minh bạch ngân hàng đại lý

## Luồng thông điệp

Tổ chức con nợ gửi pacs.009 đến tổ chức chủ nợ để chuyển tiền của chính mình. Đối với thanh toán theo phương thức cover, pacs.009 cung cấp chặng cấp vốn trong khi pacs.008 mang lệnh khách hàng qua đường dẫn riêng biệt.

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## Thông điệp liên quan
| Loại thông điệp | Mô tả | Tổng quan |
|---|---|---|
| [`pacs.008.001.13`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin con nợ, chủ nợ, số tiền và thông tin chuyển tiền cho một hoặc nhiều giao dịch chuyển khoản tín dụng. |
| [`pacs.002.001.12`](/vi/pacs.002.001.12/) | FI to FI Payment Status Report | Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán. |
| [`pacs.010.001.05`](/vi/pacs.010.001.05/) | Financial Institution Direct Debit | Thông điệp pacs.010 được sử dụng giữa các tổ chức tài chính cho giao dịch ghi nợ trực tiếp trên tài khoản của chính tổ chức. Thông điệp này cho phép một tổ chức thu tiền trực tiếp từ tài khoản của tổ chức khác. |

