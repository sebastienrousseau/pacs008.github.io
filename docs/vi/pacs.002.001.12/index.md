---
title: pacs.002.001.12 | FI to FI Payment Status Report | pacs008
description: Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận...
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

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026. Ngày tham chiếu của danh mục ISO 20022: 27 February 2025; các liên kết nguồn được liệt kê bên dưới.

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

| Yếu tố dữ liệu chính | Bối cảnh kinh doanh |
|---|---|
| **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và dấu thời gian tạo | Được sử dụng để xác nhận quyết toán hoặc báo cáo từ chối chuyển khoản tín dụng, ghi nợ trực tiếp và hoàn trả thanh toán |
| **OrgnlGrpInfAndSts** — Thông tin nhóm gốc và trạng thái cho báo cáo cấp nhóm | Cho phép đối chiếu giữa đại lý ra lệnh và đại lý nhận lệnh |
| **TxInfAndSts** — Thông tin giao dịch và trạng thái cho kết quả giao dịch riêng lẻ | Bắt buộc trong quy trình CBPR+ để xác nhận việc xử lý thông điệp pacs.008 và pacs.009 |
| **StsRsnInf** — Thông tin lý do trạng thái với mã lý do có cấu trúc | Hỗ trợ báo cáo trạng thái cả ở cấp nhóm và cấp giao dịch riêng lẻ |
| **OrgnlTxRef** — Tham chiếu giao dịch gốc liên kết ngược về lệnh nguồn | Đại lý nhận lệnh (bên nhận) gửi pacs.002 trở lại đại lý ra lệnh (bên gửi) để xác nhận việc chấp nhận, quyết toán hoặc từ chối lệnh thanh toán đã nhận như pacs.008 hoặc pacs.009. |

## Bối cảnh CBPR+ và lược đồ

- Thay thế các thông báo trạng thái MT199 và field 79 trong thông điệp MT
- CBPR+ bắt buộc sử dụng pacs.002 cho tất cả thông tin liên lạc về trạng thái thanh toán
- Mã lý do có cấu trúc thay thế các giải thích từ chối dạng văn bản tự do
- Tích hợp theo dõi SWIFT gpi yêu cầu pacs.002 để đảm bảo minh bạch từ đầu đến cuối

## Luồng thông điệp

Đại lý nhận lệnh (bên nhận) gửi pacs.002 trở lại đại lý ra lệnh (bên gửi) để xác nhận việc chấp nhận, quyết toán hoặc từ chối lệnh thanh toán đã nhận như pacs.008 hoặc pacs.009.

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Thông điệp liên quan
| Loại thông điệp | Mô tả | Tổng quan |
|---|---|---|
| [`pacs.008.001.13`](/vi/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin con nợ, chủ nợ, số tiền và thông tin chuyển tiền cho một hoặc nhiều giao dịch chuyển khoản tín dụng. |
| [`pacs.009.001.10`](/vi/pacs.009.001.10/) | Financial Institution Credit Transfer | Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt khách hàng. Thông điệp này hỗ trợ cấp vốn liên ngân hàng, thanh toán cover và quản lý thanh khoản. |
| [`pacs.028.001.05`](/vi/pacs.028.001.05/) | FI to FI Payment Status Request | Thông điệp pacs.028 được gửi bởi tổ chức tài chính để yêu cầu trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cho phép theo dõi chủ động việc xử lý thanh toán mà không cần chờ báo cáo trạng thái không được yêu cầu. |

