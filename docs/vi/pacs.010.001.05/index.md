---
title: pacs.010.001.05 | Financial Institution Direct Debit | pacs008
description: Thông điệp pacs.010 được sử dụng giữa các tổ chức tài chính cho giao dịch ghi nợ trực tiếp trên tài khoản của chính tổ chức. Thông điệp này cho phép một...
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **Tên ISO** | FinancialInstitutionDirectDebitV05 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 5 |

## Tổng quan

Thông điệp pacs.010 được sử dụng giữa các tổ chức tài chính cho giao dịch ghi nợ trực tiếp trên tài khoản của chính tổ chức. Thông điệp này cho phép một tổ chức thu tiền trực tiếp từ tài khoản của tổ chức khác.

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026. Ngày tham chiếu của danh mục ISO 20022: 27 February 2025; các liên kết nguồn được liệt kê bên dưới.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và thông tin quyết toán
- **DrctDbtTxInf** — Thông tin giao dịch ghi nợ trực tiếp với số tiền thu
- **Cdtr / CdtrAgt** — Nhận dạng tổ chức chủ nợ và đại lý
- **Dbtr / DbtrAgt** — Nhận dạng tổ chức con nợ và đại lý
- **IntrBkSttlmAmt** — Số tiền quyết toán liên ngân hàng bằng đồng tiền quyết toán

## Bối cảnh kinh doanh

- Hỗ trợ thu ghi nợ trực tiếp liên ngân hàng giữa các tổ chức tài chính
- Được sử dụng cho thu phí, margin call và nghĩa vụ quyết toán tổ chức
- Yêu cầu thỏa thuận song phương đã được đồng ý trước giữa các tổ chức tham gia
- Quan trọng cho quản lý tiền mặt tổ chức và chu kỳ quyết toán liên ngân hàng

| Yếu tố dữ liệu chính | Bối cảnh kinh doanh |
|---|---|
| **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và thông tin quyết toán | Hỗ trợ thu ghi nợ trực tiếp liên ngân hàng giữa các tổ chức tài chính |
| **DrctDbtTxInf** — Thông tin giao dịch ghi nợ trực tiếp với số tiền thu | Được sử dụng cho thu phí, margin call và nghĩa vụ quyết toán tổ chức |
| **Cdtr / CdtrAgt** — Nhận dạng tổ chức chủ nợ và đại lý | Yêu cầu thỏa thuận song phương đã được đồng ý trước giữa các tổ chức tham gia |
| **Dbtr / DbtrAgt** — Nhận dạng tổ chức con nợ và đại lý | Quan trọng cho quản lý tiền mặt tổ chức và chu kỳ quyết toán liên ngân hàng |
| **IntrBkSttlmAmt** — Số tiền quyết toán liên ngân hàng bằng đồng tiền quyết toán | Tổ chức chủ nợ gửi pacs.010 đến tổ chức con nợ để thu tiền theo thỏa thuận đã đồng ý trước. Tổ chức con nợ xác thực yêu cầu và quyết toán hoặc từ chối ghi nợ trực tiếp. |

## Bối cảnh CBPR+ và lược đồ

- Thay thế các yếu tố của MT204 cho xử lý ghi nợ trực tiếp liên ngân hàng
- Nhận dạng các bên có cấu trúc tuân theo các yêu cầu tương tự như các thông điệp pacs khác
- Xác thực mã nhận dạng tổ chức (BIC, LEI) là bắt buộc
- Được bao gồm trong lộ trình áp dụng ISO 20022 đầy đủ trên các hạ tầng thị trường

## Luồng thông điệp

Tổ chức chủ nợ gửi pacs.010 đến tổ chức con nợ để thu tiền theo thỏa thuận đã đồng ý trước. Tổ chức con nợ xác thực yêu cầu và quyết toán hoặc từ chối ghi nợ trực tiếp.

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Thông điệp liên quan
| Loại thông điệp | Mô tả | Tổng quan |
|---|---|---|
| [`pacs.009.001.10`](/vi/pacs.009.001.10/) | Financial Institution Credit Transfer | Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt khách hàng. Thông điệp này hỗ trợ cấp vốn liên ngân hàng, thanh toán cover và quản lý thanh khoản. |
| [`pacs.002.001.12`](/vi/pacs.002.001.12/) | FI to FI Payment Status Report | Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán. |
| [`pacs.003.001.09`](/vi/pacs.003.001.09/) | FI to FI Customer Direct Debit | Thông điệp pacs.003 được trao đổi giữa các tổ chức tài chính để thực hiện lệnh ghi nợ trực tiếp của khách hàng. Thông điệp này cho phép ngân hàng của chủ nợ thu tiền từ ngân hàng của con nợ thay mặt cho chủ nợ. |

