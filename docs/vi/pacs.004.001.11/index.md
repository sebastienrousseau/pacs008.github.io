---
title: pacs.004.001.11 | Hoàn trả thanh toán | pacs008
description: Thông điệp pacs.004 được sử dụng để hoàn trả giao dịch thanh toán đã quyết toán trước đó. Thông điệp này đảo ngược dòng tiền khi khoản thanh toán không...
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Hoàn trả thanh toán

| | |
|---|---|
| **Tên ISO** | PaymentReturnV11 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 11 |

## Tổng quan

Thông điệp pacs.004 được sử dụng để hoàn trả giao dịch thanh toán đã quyết toán trước đó. Thông điệp này đảo ngược dòng tiền khi khoản thanh toán không thể áp dụng, được gửi nhầm, hoặc đang bị thu hồi bởi tổ chức gốc.

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026. Ngày tham chiếu của danh mục ISO 20022: 2025-02-27; các liên kết nguồn được liệt kê bên dưới.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và dấu thời gian tạo
- **TxInf** — Thông tin giao dịch với số tiền hoàn trả và các bên
- **OrgnlGrpInf** — Thông tin nhóm gốc liên kết đến thông điệp nguồn
- **RtrRsnInf** — Thông tin lý do hoàn trả với mã lý do có cấu trúc
- **OrgnlTxRef** — Tham chiếu giao dịch gốc để đối chiếu và khớp lệnh

## Bối cảnh kinh doanh

- Xử lý hoàn trả sau quyết toán khi tài khoản người thụ hưởng không thể ghi có
- Hỗ trợ các tình huống thu hồi khi bên gửi gốc yêu cầu hoàn trả tiền
- Mang mã lý do hoàn trả có cấu trúc để đảm bảo minh bạch về quy định và vận hành
- Áp dụng cho cả hoàn trả chuyển khoản tín dụng (pacs.008) và hoàn trả ghi nợ trực tiếp (pacs.003)

| Yếu tố dữ liệu chính | Bối cảnh kinh doanh |
|---|---|
| **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và dấu thời gian tạo | Xử lý hoàn trả sau quyết toán khi tài khoản người thụ hưởng không thể ghi có |
| **TxInf** — Thông tin giao dịch với số tiền hoàn trả và các bên | Hỗ trợ các tình huống thu hồi khi bên gửi gốc yêu cầu hoàn trả tiền |
| **OrgnlGrpInf** — Thông tin nhóm gốc liên kết đến thông điệp nguồn | Mang mã lý do hoàn trả có cấu trúc để đảm bảo minh bạch về quy định và vận hành |
| **RtrRsnInf** — Thông tin lý do hoàn trả với mã lý do có cấu trúc | Áp dụng cho cả hoàn trả chuyển khoản tín dụng (pacs.008) và hoàn trả ghi nợ trực tiếp (pacs.003) |
| **OrgnlTxRef** — Tham chiếu giao dịch gốc để đối chiếu và khớp lệnh | Đại lý nhận lệnh gửi pacs.004 ngược lại qua chuỗi thanh toán để hoàn trả tiền đã quyết toán trước đó. Mỗi đại lý trong chuỗi xử lý hoàn trả và ghi có lại vào tài khoản liên quan. |

## Bối cảnh CBPR+ và lược đồ

- Thay thế MT103 RETURN và thông điệp hoàn trả theo phương thức cover
- Mã lý do hoàn trả được chuẩn hóa và máy đọc được theo ISO 20022
- CBPR+ yêu cầu dữ liệu tham chiếu giao dịch gốc đầy đủ để đối chiếu
- Theo dõi SWIFT gpi mở rộng đến giao dịch hoàn trả để có tầm nhìn từ đầu đến cuối

## Luồng thông điệp

Đại lý nhận lệnh gửi pacs.004 ngược lại qua chuỗi thanh toán để hoàn trả tiền đã quyết toán trước đó. Mỗi đại lý trong chuỗi xử lý hoàn trả và ghi có lại vào tài khoản liên quan.

## Bảng khác biệt phiên bản

| Phạm vi phiên bản | Vì sao điều này quan trọng | Kết luận triển khai |
|---|---|---|
| pacs.004.001.11 | Triển khai hiện tại trong pacs008 | Phù hợp với các mẫu hiện tại cho thông điệp hoàn trả thanh toán. |
| pacs.004.001.12-14 | Các bản sửa đổi danh mục về sau | Hãy xem các bản sửa đổi thông điệp hoàn trả về sau khi phạm vi bao gồm nâng cấp lược đồ hoặc đối tác mới. |

## Ví dụ XML có chú thích

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### Chú thích trường

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: Chất lượng mã lý do có ý nghĩa then chốt đối với giao tiếp khách hàng ở các bước xử lý tiếp theo và việc định tuyến vận hành.

## So sánh pacs.004 vs pacs.007

| Khía cạnh | pacs.004.001.11 | Thông điệp so sánh |
|---|---|---|
| Mục đích chính | Hoàn trả các khoản tiền đã được thanh toán | Đảo ngược một khoản thanh toán đã được chỉ thị trước đó |
| Được khởi tạo bởi | Phía nhận / thụ hưởng | Phía ra chỉ thị ban đầu |
| Hướng luồng | Đi ngược qua chuỗi | Đi xuôi qua chuỗi |
| Phù hợp nhất với | Xử lý hoàn trả sau khi thanh toán | Xử lý hoàn tác do recall, lỗi hoặc gian lận |

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Thông điệp liên quan
| Loại thông điệp | Mô tả | Tổng quan |
|---|---|---|
| [`pacs.008.001.13`](/vi/pacs.008.001.13/) | Chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính | Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin con nợ, chủ nợ, số tiền và thông tin chuyển tiền cho một hoặc nhiều giao dịch chuyển khoản tín dụng. |
| [`pacs.003.001.09`](/vi/pacs.003.001.09/) | Ghi nợ trực tiếp khách hàng giữa các tổ chức tài chính | Thông điệp pacs.003 được trao đổi giữa các tổ chức tài chính để thực hiện lệnh ghi nợ trực tiếp của khách hàng. Thông điệp này cho phép ngân hàng của chủ nợ thu tiền từ ngân hàng của con nợ thay mặt cho chủ nợ. |
| [`pacs.002.001.12`](/vi/pacs.002.001.12/) | Báo cáo trạng thái thanh toán giữa các tổ chức tài chính | Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán. |

