---
title: pacs.009.001.10 | Chuyển khoản tín dụng giữa các tổ chức tài chính | pacs008
description: Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt...
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Chuyển khoản tín dụng giữa các tổ chức tài chính

| | |
|---|---|
| **Tên ISO** | FinancialInstitutionCreditTransferV10 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 10 |

## Tổng quan

Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt khách hàng. Thông điệp này hỗ trợ cấp vốn liên ngân hàng, thanh toán bù đắp và quản lý thanh khoản.

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026. Ngày tham chiếu của danh mục ISO 20022: 2025-02-27; các liên kết nguồn được liệt kê bên dưới.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và thông tin quyết toán
- **CdtTrfTxInf** — Thông tin giao dịch chuyển khoản tín dụng với số tiền quyết toán liên ngân hàng
- **Dbtr / DbtrAgt** — Nhận dạng tổ chức con nợ và đại lý
- **Cdtr / CdtrAgt** — Nhận dạng tổ chức chủ nợ và đại lý
- **IntrBkSttlmAmt** — Số tiền quyết toán liên ngân hàng bằng đồng tiền quyết toán

## Bối cảnh kinh doanh

- Được sử dụng cho chuyển khoản tài khoản tự thân giữa ngân hàng và thanh toán bù đắp
- Hỗ trợ quản lý thanh khoản giữa các đối tác ngân hàng đại lý
- Mang chặng bù đắp của chuyển khoản tín dụng khách hàng được quyết toán theo phương thức bù đắp
- Cho phép các hoạt động ngân quỹ và cấp vốn giữa các tổ chức tài chính

| Yếu tố dữ liệu chính | Bối cảnh kinh doanh |
|---|---|
| **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và thông tin quyết toán | Được sử dụng cho chuyển khoản tài khoản tự thân giữa ngân hàng và thanh toán bù đắp |
| **CdtTrfTxInf** — Thông tin giao dịch chuyển khoản tín dụng với số tiền quyết toán liên ngân hàng | Hỗ trợ quản lý thanh khoản giữa các đối tác ngân hàng đại lý |
| **Dbtr / DbtrAgt** — Nhận dạng tổ chức con nợ và đại lý | Mang chặng bù đắp của chuyển khoản tín dụng khách hàng được quyết toán theo phương thức bù đắp |
| **Cdtr / CdtrAgt** — Nhận dạng tổ chức chủ nợ và đại lý | Cho phép các hoạt động ngân quỹ và cấp vốn giữa các tổ chức tài chính |
| **IntrBkSttlmAmt** — Số tiền quyết toán liên ngân hàng bằng đồng tiền quyết toán | Tổ chức con nợ gửi pacs.009 đến tổ chức chủ nợ để chuyển tiền của chính mình. Đối với thanh toán theo phương thức bù đắp, pacs.009 cung cấp chặng cấp vốn trong khi pacs.008 mang lệnh khách hàng qua đường dẫn riêng biệt. |

## Bối cảnh CBPR+ và lược đồ

- Thay thế MT202 và MT202COV cho chuyển khoản giữa các tổ chức
- Quy trình theo phương thức bù đắp ghép cặp pacs.009 với lệnh khách hàng pacs.008 nền tảng
- Dữ liệu các bên có cấu trúc và nhận dạng LEI ngày càng được yêu cầu
- SWIFT gpi bao phủ pacs.009 để đảm bảo minh bạch ngân hàng đại lý

## Luồng thông điệp

Tổ chức con nợ gửi pacs.009 đến tổ chức chủ nợ để chuyển tiền của chính mình. Đối với thanh toán theo phương thức bù đắp, pacs.009 cung cấp chặng cấp vốn trong khi pacs.008 mang lệnh khách hàng qua đường dẫn riêng biệt.

## Bảng khác biệt phiên bản

| Phạm vi phiên bản | Vì sao điều này quan trọng | Kết luận triển khai |
|---|---|---|
| pacs.009.001.10 | Triển khai hiện tại trong pacs008 | Phù hợp với mức hỗ trợ hiện tại của dự án cho các luồng chuyển khoản tín dụng FI. |
| pacs.009.001.11-12 | Các bản sửa đổi danh mục về sau | Quan trọng cho việc lập lộ trình trong môi trường ngân hàng đại lý và thanh toán bù đắp. |

## Ví dụ XML có chú thích

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Chú thích trường

- `InstrId`: Hãy dùng mã định danh cho chặng tài trợ vốn mà vẫn có thể liên kết với luồng khách hàng gốc.
- `IntrBkSttlmAmt`: Các luồng cho tài khoản riêng và luồng bù đắp thường cần kiểm soát ngân quỹ chặt chẽ hơn đối với số tiền và ngày thanh toán.
- `Dbtr` / `Cdtr`: Đây là các bên tham gia giữa các tổ chức, không phải vai trò khách hàng bán lẻ; hãy mô hình hóa cho phù hợp.

## So sánh pacs.009 vs pacs.008

| Khía cạnh | pacs.009.001.10 | Thông điệp so sánh |
|---|---|---|
| Mục đích chính | Chuyển khoản tín dụng cho tài khoản riêng của tổ chức hoặc chặng thanh toán bù đắp | Chuyển khoản tín dụng khách hàng |
| Chủ sở hữu nghiệp vụ | Hoạt động ngân quỹ / ngân hàng đại lý / tài trợ vốn | Vận hành thanh toán khách hàng |
| Cặp kết hợp điển hình | các luồng pacs.002, pacs.004 và pacs.008 liên kết | pacs.002, pacs.004, pacs.007, pacs.028 |
| Giả định sai cần tránh | Rằng đây chỉ là một pacs.008 mang tính kỹ thuật hơn | Rằng nó có thể mang các luồng tài trợ vốn của tổ chức một cách gọn gàng |

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## Thông điệp liên quan
| Loại thông điệp | Mô tả | Tổng quan |
|---|---|---|
| [`pacs.008.001.13`](/vi/pacs.008.001.13/) | Chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính | Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin con nợ, chủ nợ, số tiền và thông tin chuyển tiền cho một hoặc nhiều giao dịch chuyển khoản tín dụng. |
| [`pacs.002.001.12`](/vi/pacs.002.001.12/) | Báo cáo trạng thái thanh toán giữa các tổ chức tài chính | Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán. |
| [`pacs.010.001.05`](/vi/pacs.010.001.05/) | Ghi nợ trực tiếp giữa các tổ chức tài chính | Thông điệp pacs.010 được sử dụng giữa các tổ chức tài chính cho giao dịch ghi nợ trực tiếp trên tài khoản của chính tổ chức. Thông điệp này cho phép một tổ chức thu tiền trực tiếp từ tài khoản của tổ chức khác. |

