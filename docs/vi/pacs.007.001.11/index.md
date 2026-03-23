---
title: pacs.007.001.11 | Đảo ngược thanh toán giữa các tổ chức tài chính | pacs008
description: Thông điệp pacs.007 được sử dụng để đảo ngược lệnh thanh toán đã gửi trước đó chưa được quyết toán hoặc để yêu cầu đảo ngược khoản thanh toán đã quyết...
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — Đảo ngược thanh toán giữa các tổ chức tài chính

| | |
|---|---|
| **Tên ISO** | FIToFIPaymentReversalV11 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 11 |

## Tổng quan

Thông điệp pacs.007 được sử dụng để đảo ngược lệnh thanh toán đã gửi trước đó chưa được quyết toán hoặc để yêu cầu đảo ngược khoản thanh toán đã quyết toán. Khác với pacs.004 (hoàn trả), thông điệp này được khởi tạo bởi đại lý ra lệnh gốc.

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026. Ngày tham chiếu của danh mục ISO 20022: 2025-02-27; các liên kết nguồn được liệt kê bên dưới.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và dấu thời gian tạo
- **TxInf** — Thông tin giao dịch với số tiền đảo ngược và các bên
- **OrgnlGrpInf** — Thông tin nhóm gốc tham chiếu đến thông điệp nguồn
- **RvslRsnInf** — Thông tin lý do đảo ngược với mã lý do có cấu trúc
- **OrgnlTxRef** — Tham chiếu giao dịch gốc để truy vết từ đầu đến cuối

## Bối cảnh kinh doanh

- Được khởi tạo khi bên gửi gốc phát hiện lỗi trước hoặc sau quyết toán
- Được sử dụng trong các tình huống gian lận khi cần đảo ngược nhanh chóng
- Hỗ trợ đảo ngược toàn bộ và một phần số tiền thanh toán gốc
- Mang mã lý do đảo ngược có cấu trúc cho xử lý hạ nguồn

| Yếu tố dữ liệu chính | Bối cảnh kinh doanh |
|---|---|
| **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và dấu thời gian tạo | Được khởi tạo khi bên gửi gốc phát hiện lỗi trước hoặc sau quyết toán |
| **TxInf** — Thông tin giao dịch với số tiền đảo ngược và các bên | Được sử dụng trong các tình huống gian lận khi cần đảo ngược nhanh chóng |
| **OrgnlGrpInf** — Thông tin nhóm gốc tham chiếu đến thông điệp nguồn | Hỗ trợ đảo ngược toàn bộ và một phần số tiền thanh toán gốc |
| **RvslRsnInf** — Thông tin lý do đảo ngược với mã lý do có cấu trúc | Mang mã lý do đảo ngược có cấu trúc cho xử lý hạ nguồn |
| **OrgnlTxRef** — Tham chiếu giao dịch gốc để truy vết từ đầu đến cuối | Đại lý ra lệnh (bên gửi gốc) gửi pacs.007 xuôi qua chuỗi thanh toán để đảo ngược khoản thanh toán đã ra lệnh trước đó. Mỗi đại lý xử lý lệnh đảo ngược và điều chỉnh quyết toán tương ứng. |

## Bối cảnh CBPR+ và lược đồ

- Phân biệt với pacs.004 theo hướng — đảo ngược đi xuôi từ bên gửi gốc, hoàn trả đi ngược từ người thụ hưởng
- CBPR+ yêu cầu ghép cặp với mã nhận dạng thông điệp gốc để đối chiếu tự động
- Mã lý do có cấu trúc thay thế văn bản tự do từ thông điệp MT kế thừa
- Ngày càng được sử dụng nhiều trong quy trình thu hồi thanh toán tức thì và phòng chống gian lận

## Luồng thông điệp

Đại lý ra lệnh (bên gửi gốc) gửi pacs.007 xuôi qua chuỗi thanh toán để đảo ngược khoản thanh toán đã ra lệnh trước đó. Mỗi đại lý xử lý lệnh đảo ngược và điều chỉnh quyết toán tương ứng.

## Bảng khác biệt phiên bản

| Phạm vi phiên bản | Vì sao điều này quan trọng | Kết luận triển khai |
|---|---|---|
| pacs.007.001.11 | Triển khai hiện tại trong pacs008 | Là nền tảng tốt cho việc mô hình hóa quy trình hoàn tác thanh toán. |
| pacs.007.001.12-13 | Các bản sửa đổi danh mục về sau | Kiểm tra các bản sửa đổi về sau để phù hợp với hạ tầng thị trường hiện tại. |

## Ví dụ XML có chú thích

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### Chú thích trường

- `MsgId`: Bản thân thông điệp hoàn tác cần có mã định danh riêng an toàn cho kiểm toán.
- `OrgnlInstrId`: Giữ nguyên tham chiếu thanh toán gốc để tránh đứt gãy đối soát.
- `RvslRsnInf`: Hãy dùng lý do hoàn tác có cấu trúc để các trường hợp gian lận, lỗi và thanh toán trùng có thể được định tuyến khác nhau.

## So sánh pacs.007 vs pacs.004

| Khía cạnh | pacs.007.001.11 | Thông điệp so sánh |
|---|---|---|
| Mục đích chính | Đảo ngược một khoản thanh toán đã được chỉ thị trước đó | Hoàn trả các khoản tiền đã được thanh toán |
| Được khởi tạo bởi | Phía ra chỉ thị ban đầu | Phía nhận / thụ hưởng |
| Hướng luồng | Đi xuôi qua chuỗi | Đi ngược qua chuỗi |
| Phù hợp nhất với | Xử lý hoàn tác do recall, lỗi hoặc gian lận | Xử lý hoàn trả sau khi thanh toán |

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Thông điệp liên quan
| Loại thông điệp | Mô tả | Tổng quan |
|---|---|---|
| [`pacs.008.001.13`](/vi/pacs.008.001.13/) | Chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính | Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin con nợ, chủ nợ, số tiền và thông tin chuyển tiền cho một hoặc nhiều giao dịch chuyển khoản tín dụng. |
| [`pacs.004.001.11`](/vi/pacs.004.001.11/) | Hoàn trả thanh toán | Thông điệp pacs.004 được sử dụng để hoàn trả giao dịch thanh toán đã quyết toán trước đó. Thông điệp này đảo ngược dòng tiền khi khoản thanh toán không thể áp dụng, được gửi nhầm, hoặc đang bị thu hồi bởi tổ chức gốc. |
| [`pacs.002.001.12`](/vi/pacs.002.001.12/) | Báo cáo trạng thái thanh toán giữa các tổ chức tài chính | Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán. |

