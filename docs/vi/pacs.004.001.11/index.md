---
title: "pacs.004.001.11 | Hoàn trả thanh toán | pacs008"
description: Thông điệp pacs.004 được sử dụng để hoàn trả giao dịch thanh toán đã quyết toán trước đó. Thông điệp này đảo ngược dòng tiền khi khoản thanh toán không...
lang: vi-VN
lastUpdated: true
image: /logo.svg
faq:
  - question: "Sự khác biệt giữa pacs.004 và pacs.007 là gì?"
    answer: "pacs.004 trả lại tiền đã thanh toán từ phía người nhận, trong khi pacs.007 yêu cầu đảo ngược từ phía người ra lệnh ban đầu."
  - question: "Mọi khoản ghi có cho người thụ hưởng thất bại đều nên trở thành pacs.004?"
    answer: "Không tự động. Đường đi đúng phụ thuộc vào quy tắc lược đồ, giai đoạn thanh toán và xử lý đối tác."
---

# pacs.004.001.11 — Hoàn trả thanh toán

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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
          <td class="operational-matrix-table__right">Xử lý hoàn trả sau quyết toán khi tài khoản người thụ hưởng không thể ghi có</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Thông tin giao dịch với số tiền hoàn trả và các bên</td>
          <td class="operational-matrix-table__right">Hỗ trợ các tình huống thu hồi khi bên gửi gốc yêu cầu hoàn trả tiền</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Thông tin nhóm gốc liên kết đến thông điệp nguồn</td>
          <td class="operational-matrix-table__right">Mang mã lý do hoàn trả có cấu trúc để đảm bảo minh bạch về quy định và vận hành</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Thông tin lý do hoàn trả với mã lý do có cấu trúc</td>
          <td class="operational-matrix-table__right">Áp dụng cho cả hoàn trả chuyển khoản tín dụng (pacs.008) và hoàn trả ghi nợ trực tiếp (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Tham chiếu giao dịch gốc để đối chiếu và khớp lệnh</td>
          <td class="operational-matrix-table__right">Đại lý nhận lệnh gửi pacs.004 ngược lại qua chuỗi thanh toán để hoàn trả tiền đã quyết toán trước đó. Mỗi đại lý trong chuỗi xử lý hoàn trả và ghi có lại vào tài khoản liên quan.</td>
        </tr>
    </tbody>
  </table>
</div>

## Bối cảnh CBPR+ và lược đồ

- Thay thế MT103 RETURN và thông điệp hoàn trả theo phương thức cover
- Mã lý do hoàn trả được chuẩn hóa và máy đọc được theo ISO 20022
- CBPR+ yêu cầu dữ liệu tham chiếu giao dịch gốc đầy đủ để đối chiếu
- Theo dõi SWIFT gpi mở rộng đến giao dịch hoàn trả để có tầm nhìn từ đầu đến cuối

## Luồng thông điệp

Đại lý nhận lệnh gửi pacs.004 ngược lại qua chuỗi thanh toán để hoàn trả tiền đã quyết toán trước đó. Mỗi đại lý trong chuỗi xử lý hoàn trả và ghi có lại vào tài khoản liên quan.

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">Triển khai hiện tại trong pacs008</td>
          <td class="version-diff-table__takeaway">Phù hợp với các mẫu hiện tại cho thông điệp hoàn trả thanh toán.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">Các bản sửa đổi danh mục về sau</td>
          <td class="version-diff-table__takeaway">Hãy xem các bản sửa đổi thông điệp hoàn trả về sau khi phạm vi bao gồm nâng cấp lược đồ hoặc đối tác mới.</td>
        </tr>
    </tbody>
  </table>
</div>

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

<div class="message-comparison-table" tabindex="0" aria-label="So sánh pacs.004 vs pacs.007">
  <table>
    <caption>So sánh pacs.004 vs pacs.007</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Khía cạnh</th>
        <th>pacs.004.001.11</th>
        <th>Thông điệp so sánh</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Mục đích chính</td>
          <td class="message-comparison-table__current">Hoàn trả các khoản tiền đã được thanh toán</td>
          <td class="message-comparison-table__other">Đảo ngược một khoản thanh toán đã được chỉ thị trước đó</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Được khởi tạo bởi</td>
          <td class="message-comparison-table__current">Phía nhận / thụ hưởng</td>
          <td class="message-comparison-table__other">Phía ra chỉ thị ban đầu</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Hướng luồng</td>
          <td class="message-comparison-table__current">Đi ngược qua chuỗi</td>
          <td class="message-comparison-table__other">Đi xuôi qua chuỗi</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Phù hợp nhất với</td>
          <td class="message-comparison-table__current">Xử lý hoàn trả sau khi thanh toán</td>
          <td class="message-comparison-table__other">Xử lý hoàn tác do recall, lỗi hoặc gian lận</td>
        </tr>
    </tbody>
  </table>
</div>

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/vi/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Ghi nợ trực tiếp khách hàng giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.003 được trao đổi giữa các tổ chức tài chính để thực hiện lệnh ghi nợ trực tiếp của khách hàng. Thông điệp này cho phép ngân hàng của chủ nợ thu tiền từ ngân hàng của con nợ thay mặt cho chủ nợ.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/vi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Báo cáo trạng thái thanh toán giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán.</td>
        </tr>
    </tbody>
  </table>
</div>

