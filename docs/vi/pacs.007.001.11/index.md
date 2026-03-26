---
title: "pacs.007.001.11 | Đảo ngược thanh toán giữa các tổ chức tài chính | pacs008"
description: Thông điệp pacs.007 được sử dụng để đảo ngược lệnh thanh toán đã gửi trước đó chưa được quyết toán hoặc để yêu cầu đảo ngược khoản thanh toán đã quyết...
lang: vi-VN
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.007 only for fraud scenarios?"
    answer: "No. Fraud is a major use case, but any instructing-side need to reverse a payment can trigger it."
  - question: "Can it be handled like a normal return?"
    answer: "No. Reversal timing, reason capture, and reconciliation differ materially from returns."
---

# pacs.007.001.11 — Đảo ngược thanh toán giữa các tổ chức tài chính

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Trường</th>
        <th scope="col">Giá trị</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Tên ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Trạng thái đăng ký</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Năm</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Phiên bản</strong></td>
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

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

<div class="operational-matrix-table" tabindex="0" aria-label="Yếu tố dữ liệu chính Bối cảnh kinh doanh">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Yếu tố dữ liệu chính</th>
        <th>Bối cảnh kinh doanh</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Tiêu đề nhóm với mã nhận dạng thông điệp và dấu thời gian tạo</td>
          <td class="operational-matrix-table__right">Được khởi tạo khi bên gửi gốc phát hiện lỗi trước hoặc sau quyết toán</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Thông tin giao dịch với số tiền đảo ngược và các bên</td>
          <td class="operational-matrix-table__right">Được sử dụng trong các tình huống gian lận khi cần đảo ngược nhanh chóng</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Thông tin nhóm gốc tham chiếu đến thông điệp nguồn</td>
          <td class="operational-matrix-table__right">Hỗ trợ đảo ngược toàn bộ và một phần số tiền thanh toán gốc</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Thông tin lý do đảo ngược với mã lý do có cấu trúc</td>
          <td class="operational-matrix-table__right">Mang mã lý do đảo ngược có cấu trúc cho xử lý hạ nguồn</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Tham chiếu giao dịch gốc để truy vết từ đầu đến cuối</td>
          <td class="operational-matrix-table__right">Đại lý ra lệnh (bên gửi gốc) gửi pacs.007 xuôi qua chuỗi thanh toán để đảo ngược khoản thanh toán đã ra lệnh trước đó. Mỗi đại lý xử lý lệnh đảo ngược và điều chỉnh quyết toán tương ứng.</td>
        </tr>
    </tbody>
  </table>
</div>

## Bối cảnh CBPR+ và lược đồ

- Phân biệt với pacs.004 theo hướng — đảo ngược đi xuôi từ bên gửi gốc, hoàn trả đi ngược từ người thụ hưởng
- CBPR+ yêu cầu ghép cặp với mã nhận dạng thông điệp gốc để đối chiếu tự động
- Mã lý do có cấu trúc thay thế văn bản tự do từ thông điệp MT kế thừa
- Ngày càng được sử dụng nhiều trong quy trình thu hồi thanh toán tức thì và phòng chống gian lận

## Luồng thông điệp

Đại lý ra lệnh (bên gửi gốc) gửi pacs.007 xuôi qua chuỗi thanh toán để đảo ngược khoản thanh toán đã ra lệnh trước đó. Mỗi đại lý xử lý lệnh đảo ngược và điều chỉnh quyết toán tương ứng.

## Bảng khác biệt phiên bản

<div class="version-diff-table" tabindex="0" aria-label="Bảng khác biệt phiên bản">
  <table>
    <caption>Bảng khác biệt phiên bản</caption>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Phạm vi phiên bản</th>
        <th>Vì sao điều này quan trọng</th>
        <th>Kết luận triển khai</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">Triển khai hiện tại trong pacs008</td>
          <td class="version-diff-table__takeaway">Là nền tảng tốt cho việc mô hình hóa quy trình hoàn tác thanh toán.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">Các bản sửa đổi danh mục về sau</td>
          <td class="version-diff-table__takeaway">Kiểm tra các bản sửa đổi về sau để phù hợp với hạ tầng thị trường hiện tại.</td>
        </tr>
    </tbody>
  </table>
</div>

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

- `MsgId`: The reversal needs its own identifier.
- `OrgnlInstrId`: Giữ nguyên tham chiếu thanh toán gốc để tránh đứt gãy đối soát.
- `RvslRsnInf`: Use structured reversal reasons so cases can be routed correctly.

## So sánh pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="So sánh pacs.007 vs pacs.004">
  <table>
    <caption>So sánh pacs.007 vs pacs.004</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Khía cạnh</th>
        <th>pacs.007.001.11</th>
        <th>Thông điệp so sánh</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Mục đích chính</td>
          <td class="message-comparison-table__current">Đảo ngược một khoản thanh toán đã được chỉ thị trước đó</td>
          <td class="message-comparison-table__other">Hoàn trả các khoản tiền đã được thanh toán</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Được khởi tạo bởi</td>
          <td class="message-comparison-table__current">Phía ra chỉ thị ban đầu</td>
          <td class="message-comparison-table__other">Phía nhận / thụ hưởng</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Hướng luồng</td>
          <td class="message-comparison-table__current">Đi xuôi qua chuỗi</td>
          <td class="message-comparison-table__other">Đi ngược qua chuỗi</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Phù hợp nhất với</td>
          <td class="message-comparison-table__current">Xử lý hoàn tác do recall, lỗi hoặc gian lận</td>
          <td class="message-comparison-table__other">Xử lý hoàn trả sau khi thanh toán</td>
        </tr>
    </tbody>
  </table>
</div>

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

## Thông điệp liên quan
<div class="related-messages-table" tabindex="0" aria-label="Thông điệp liên quan">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Loại thông điệp</th>
        <th>Mô tả</th>
        <th>Tổng quan</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/vi/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin con nợ, chủ nợ, số tiền và thông tin chuyển tiền cho một hoặc nhiều giao dịch chuyển khoản tín dụng.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/vi/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Hoàn trả thanh toán</td>
          <td class="related-messages-table__overview">Thông điệp pacs.004 được sử dụng để hoàn trả giao dịch thanh toán đã quyết toán trước đó. Thông điệp này đảo ngược dòng tiền khi khoản thanh toán không thể áp dụng, được gửi nhầm, hoặc đang bị thu hồi bởi tổ chức gốc.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/vi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Báo cáo trạng thái thanh toán giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán.</td>
        </tr>
    </tbody>
  </table>
</div>

