---
title: pacs.008.001.13 | Chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính | pacs008
description: Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin...
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — Chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính

| | |
|---|---|
| **Tên ISO** | FIToFICustomerCreditTransferV13 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2023 |
| **Phiên bản** | 13 |

## Tổng quan

Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin con nợ, chủ nợ, số tiền và thông tin chuyển tiền cho một hoặc nhiều giao dịch chuyển khoản tín dụng.

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026. Ngày tham chiếu của danh mục ISO 20022: 2025-02-27; các liên kết nguồn được liệt kê bên dưới.

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
- Hỗ trợ phương thức quyết toán nối tiếp, bù đắp và trực tiếp cho chuỗi thanh toán nhiều chặng

| Yếu tố dữ liệu chính | Bối cảnh kinh doanh |
|---|---|
| **GrpHdr** — Tiêu đề nhóm với ID thông điệp, ngày tạo, số lượng giao dịch và thông tin quyết toán | Thông điệp chính cho chuyển khoản tín dụng xuyên biên giới và nội địa do khách hàng khởi tạo |
| **CdtTrfTxInf** — Thông tin giao dịch chuyển khoản tín dụng với số tiền, phí và mục đích | Được sử dụng trên toàn bộ SEPA SCT, SEPA Instant, CBPR+ và các hệ thống thanh toán bù trừ quốc gia |
| **Dbtr / DbtrAgt** — Nhận dạng và chi tiết tài khoản con nợ và đại lý con nợ | Mang thông tin chuyển tiền có cấu trúc để hỗ trợ đối chiếu tự động |
| **Cdtr / CdtrAgt** — Nhận dạng và chi tiết tài khoản chủ nợ và đại lý chủ nợ | Hỗ trợ phương thức quyết toán nối tiếp, bù đắp và trực tiếp cho chuỗi thanh toán nhiều chặng |
| **RmtInf** — Thông tin chuyển tiền cho tham chiếu thanh toán có cấu trúc hoặc không có cấu trúc | Đại lý con nợ tạo pacs.008 và gửi đến đại lý chủ nợ (trực tiếp hoặc qua trung gian). Mỗi đại lý trong chuỗi xác thực, bổ sung và chuyển tiếp lệnh cho đến khi đại lý chủ nợ ghi có vào tài khoản người thụ hưởng. |

## Bối cảnh CBPR+ và lược đồ

- Thay thế MT103 và MT103+ cho chuyển khoản tín dụng khách hàng xuyên biên giới
- Hạn chót địa chỉ có cấu trúc tháng 11 năm 2026 áp dụng cho tất cả địa chỉ bưu điện của các bên
- SWIFT gpi yêu cầu pacs.008 cho theo dõi từ đầu đến cuối dựa trên UETR
- 13 phiên bản sửa đổi phản ánh sự phát triển liên tục của lược đồ trên các hạ tầng thị trường

## Luồng thông điệp

Đại lý con nợ tạo pacs.008 và gửi đến đại lý chủ nợ (trực tiếp hoặc qua trung gian). Mỗi đại lý trong chuỗi xác thực, bổ sung và chuyển tiếp lệnh cho đến khi đại lý chủ nợ ghi có vào tài khoản người thụ hưởng.

## Bảng khác biệt phiên bản

| Phạm vi phiên bản | Vì sao điều này quan trọng | Kết luận triển khai |
|---|---|---|
| pacs.008.001.01-07 | Các phiên bản sửa đổi ban đầu | Chủ yếu hữu ích cho phân tích chuyển đổi từ hệ thống cũ và bối cảnh lịch sử phiên bản. |
| pacs.008.001.08-12 | Các phiên bản hiện đại trước bản hiện tại | Đây là các phiên bản sửa đổi có khả năng xuất hiện nhiều nhất trong các dự án chuyển đổi hoặc cùng tồn tại gần đây. |
| pacs.008.001.13 | Bản sửa đổi danh mục hiện tại | Dùng điều này cho việc lập kế hoạch theo phiên bản hiện tại, đồng thời vẫn xác thực hướng dẫn sử dụng của lược đồ và mức độ sẵn sàng của đối tác. |

## Ví dụ XML có chú thích

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### Chú thích trường

- `MsgId`: Trường này nên định danh phong bì thông điệp, không phải tham chiếu thanh toán của khách hàng cuối.
- `EndToEndId`: Hãy giữ tính truy vết hướng tới khách hàng ổn định trên các hệ thống kế tiếp khi có thể.
- `UETR`: Hãy dùng trường này nhất quán trong môi trường xuyên biên giới và yêu cầu theo dõi cao; không tạo theo kiểu tạm thời ở các bước xử lý sau.
- `IntrBkSttlmAmt`: Xác thực số tiền và loại tiền bằng quy tắc nghiệp vụ trước khi xác thực cấu trúc thông điệp.
- `Dbtr` / `Cdtr`: Chất lượng dữ liệu bên tham gia, cấu trúc địa chỉ và mã định danh thường là các yếu tố chính quyết định khối lượng xử lý sai sót.

## So sánh pacs.008 vs pacs.009

| Khía cạnh | pacs.008.001.13 | Thông điệp so sánh |
|---|---|---|
| Mục đích chính | Chuyển khoản tín dụng khách hàng | Chuyển khoản tín dụng cho tài khoản riêng của tổ chức hoặc chặng thanh toán bù đắp |
| Chủ sở hữu nghiệp vụ | Vận hành thanh toán khách hàng | Hoạt động ngân quỹ / ngân hàng đại lý / tài trợ vốn |
| Cặp kết hợp điển hình | pacs.002, pacs.004, pacs.007, pacs.028 | các luồng pacs.002, pacs.004 và đôi khi là pacs.008 liên kết |
| Giả định sai cần tránh | Rằng mọi chuyển khoản giữa các ngân hàng đều thuộc về đây | Rằng nó có thể thay thế các chỉ thị chuyển khoản tín dụng của khách hàng |

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

| Phiên bản | |
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
| `pacs.008.001.13` | **Hiện tại** |

## Thông điệp liên quan
| Loại thông điệp | Mô tả | Tổng quan |
|---|---|---|
| [`pacs.002.001.12`](/vi/pacs.002.001.12/) | Báo cáo trạng thái thanh toán giữa các tổ chức tài chính | Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán. |
| [`pacs.004.001.11`](/vi/pacs.004.001.11/) | Hoàn trả thanh toán | Thông điệp pacs.004 được sử dụng để hoàn trả giao dịch thanh toán đã quyết toán trước đó. Thông điệp này đảo ngược dòng tiền khi khoản thanh toán không thể áp dụng, được gửi nhầm, hoặc đang bị thu hồi bởi tổ chức gốc. |
| [`pacs.009.001.10`](/vi/pacs.009.001.10/) | Chuyển khoản tín dụng giữa các tổ chức tài chính | Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt khách hàng. Thông điệp này hỗ trợ cấp vốn liên ngân hàng, thanh toán bù đắp và quản lý thanh khoản. |

