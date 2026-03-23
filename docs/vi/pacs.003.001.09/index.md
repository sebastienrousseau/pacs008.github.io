---
title: pacs.003.001.09 | FI to FI Customer Direct Debit | pacs008
description: Thông điệp pacs.003 được trao đổi giữa các tổ chức tài chính để thực hiện lệnh ghi nợ trực tiếp của khách hàng. Thông điệp này cho phép ngân hàng của chủ...
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **Tên ISO** | FIToFICustomerDirectDebitV09 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 9 |

## Tổng quan

Thông điệp pacs.003 được trao đổi giữa các tổ chức tài chính để thực hiện lệnh ghi nợ trực tiếp của khách hàng. Thông điệp này cho phép ngân hàng của chủ nợ thu tiền từ ngân hàng của con nợ thay mặt cho chủ nợ.

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026. Ngày tham chiếu của danh mục ISO 20022: 27 February 2025; các liên kết nguồn được liệt kê bên dưới.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và thông tin quyết toán
- **DrctDbtTxInf** — Thông tin giao dịch ghi nợ trực tiếp với số tiền và các bên
- **Cdtr** — Nhận dạng chủ nợ và chi tiết tài khoản
- **CdtrAgt** — Nhận dạng đại lý chủ nợ (tổ chức thu tiền)
- **DbtrAgt** — Nhận dạng đại lý con nợ (tổ chức thanh toán)

## Bối cảnh kinh doanh

- Hỗ trợ các chương trình ghi nợ trực tiếp SEPA Core và B2B
- Được sử dụng cho việc thu thanh toán định kỳ như đăng ký thuê bao, hóa đơn tiện ích và trả nợ vay
- Yêu cầu tham chiếu ủy quyền hợp lệ giữa con nợ và chủ nợ
- Cho phép thu gom hàng loạt nhiều lệnh ghi nợ trực tiếp trong một thông điệp duy nhất

| Yếu tố dữ liệu chính | Bối cảnh kinh doanh |
|---|---|
| **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và thông tin quyết toán | Hỗ trợ các chương trình ghi nợ trực tiếp SEPA Core và B2B |
| **DrctDbtTxInf** — Thông tin giao dịch ghi nợ trực tiếp với số tiền và các bên | Được sử dụng cho việc thu thanh toán định kỳ như đăng ký thuê bao, hóa đơn tiện ích và trả nợ vay |
| **Cdtr** — Nhận dạng chủ nợ và chi tiết tài khoản | Yêu cầu tham chiếu ủy quyền hợp lệ giữa con nợ và chủ nợ |
| **CdtrAgt** — Nhận dạng đại lý chủ nợ (tổ chức thu tiền) | Cho phép thu gom hàng loạt nhiều lệnh ghi nợ trực tiếp trong một thông điệp duy nhất |
| **DbtrAgt** — Nhận dạng đại lý con nợ (tổ chức thanh toán) | Đại lý chủ nợ khởi tạo pacs.003 hướng tới đại lý con nợ để thu tiền. Đại lý con nợ xác thực ủy quyền, kiểm tra số dư tài khoản, và quyết toán hoặc trả lại giao dịch. |

## Bối cảnh CBPR+ và lược đồ

- Yêu cầu về địa chỉ có cấu trúc và nhận dạng các bên áp dụng tương tự cho ghi nợ trực tiếp
- Dữ liệu liên quan đến ủy quyền phải hoàn toàn có cấu trúc từ tháng 11 năm 2026
- Thay thế các định dạng ghi nợ trực tiếp kiểu MT104 kế thừa trong quy trình xuyên biên giới
- Việc xác thực nhận dạng chương trình chủ nợ ngày càng được thực thi nghiêm ngặt

## Luồng thông điệp

Đại lý chủ nợ khởi tạo pacs.003 hướng tới đại lý con nợ để thu tiền. Đại lý con nợ xác thực ủy quyền, kiểm tra số dư tài khoản, và quyết toán hoặc trả lại giao dịch.

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Thông điệp liên quan
| Loại thông điệp | Mô tả | Tổng quan |
|---|---|---|
| [`pacs.004.001.11`](/vi/pacs.004.001.11/) | Payment Return | Thông điệp pacs.004 được sử dụng để hoàn trả giao dịch thanh toán đã quyết toán trước đó. Thông điệp này đảo ngược dòng tiền khi khoản thanh toán không thể áp dụng, được gửi nhầm, hoặc đang bị thu hồi bởi tổ chức gốc. |
| [`pacs.007.001.11`](/vi/pacs.007.001.11/) | FI to FI Payment Reversal | Thông điệp pacs.007 được sử dụng để đảo ngược lệnh thanh toán đã gửi trước đó chưa được quyết toán hoặc để yêu cầu đảo ngược khoản thanh toán đã quyết toán. Khác với pacs.004 (hoàn trả), thông điệp này được khởi tạo bởi đại lý ra lệnh gốc. |
| [`pacs.002.001.12`](/vi/pacs.002.001.12/) | FI to FI Payment Status Report | Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán. |

