---
title: pacs.028.001.05 | Yêu cầu trạng thái thanh toán giữa các tổ chức tài chính | pacs008
description: Thông điệp pacs.028 được gửi bởi tổ chức tài chính để yêu cầu trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cho phép theo dõi chủ động...
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — Yêu cầu trạng thái thanh toán giữa các tổ chức tài chính

| | |
|---|---|
| **Tên ISO** | FIToFIPaymentStatusRequestV05 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 5 |

## Tổng quan

Thông điệp pacs.028 được gửi bởi tổ chức tài chính để yêu cầu trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cho phép theo dõi chủ động việc xử lý thanh toán mà không cần chờ báo cáo trạng thái không được yêu cầu.

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026. Ngày tham chiếu của danh mục ISO 20022: 2025-02-27; các liên kết nguồn được liệt kê bên dưới.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và dấu thời gian tạo
- **TxInf** — Thông tin giao dịch xác định khoản thanh toán cần tra cứu
- **OrgnlGrpInf** — Thông tin nhóm gốc tham chiếu đến thông điệp nguồn
- **OrgnlInstrId** — Mã nhận dạng lệnh gốc từ thanh toán nguồn
- **OrgnlEndToEndId** — Mã nhận dạng từ đầu đến cuối gốc để truy vết

## Bối cảnh kinh doanh

- Cho phép tra cứu trạng thái chủ động cho các lệnh thanh toán đang trên đường
- Hỗ trợ các nhóm vận hành điều tra các khoản thanh toán bị chậm trễ hoặc thất lạc
- Bổ sung cho pacs.002 bằng cách chủ động khởi tạo thông tin liên lạc về trạng thái thay vì chờ đợi
- Được sử dụng trong quy trình xử lý ngoại lệ và giám sát SLA

<div class="operational-matrix-table" tabindex="0" aria-label="Yếu tố dữ liệu chính Bối cảnh kinh doanh">
  <table>
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
          <td class="operational-matrix-table__left">**GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và dấu thời gian tạo</td>
          <td class="operational-matrix-table__right">Cho phép tra cứu trạng thái chủ động cho các lệnh thanh toán đang trên đường</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**TxInf** — Thông tin giao dịch xác định khoản thanh toán cần tra cứu</td>
          <td class="operational-matrix-table__right">Hỗ trợ các nhóm vận hành điều tra các khoản thanh toán bị chậm trễ hoặc thất lạc</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlGrpInf** — Thông tin nhóm gốc tham chiếu đến thông điệp nguồn</td>
          <td class="operational-matrix-table__right">Bổ sung cho pacs.002 bằng cách chủ động khởi tạo thông tin liên lạc về trạng thái thay vì chờ đợi</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlInstrId** — Mã nhận dạng lệnh gốc từ thanh toán nguồn</td>
          <td class="operational-matrix-table__right">Được sử dụng trong quy trình xử lý ngoại lệ và giám sát SLA</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlEndToEndId** — Mã nhận dạng từ đầu đến cuối gốc để truy vết</td>
          <td class="operational-matrix-table__right">Đại lý ra lệnh gửi pacs.028 đến đại lý nhận lệnh để yêu cầu trạng thái của một khoản thanh toán cụ thể. Đại lý nhận lệnh phản hồi bằng pacs.002 chứa trạng thái xử lý hiện tại.</td>
        </tr>
    </tbody>
  </table>
</div>

## Bối cảnh CBPR+ và lược đồ

- Thay thế các mẫu tra cứu trạng thái MT199 và truy vấn thông điệp SWIFT thủ công
- CBPR+ hỗ trợ yêu cầu trạng thái có cấu trúc liên kết với mã nhận dạng thông điệp gốc
- Theo dõi dựa trên UETR qua gpi giảm nhu cầu tra cứu thủ công
- Ngày càng được tích hợp vào bảng điều khiển vận hành thanh toán tự động

## Luồng thông điệp

Đại lý ra lệnh gửi pacs.028 đến đại lý nhận lệnh để yêu cầu trạng thái của một khoản thanh toán cụ thể. Đại lý nhận lệnh phản hồi bằng pacs.002 chứa trạng thái xử lý hiện tại.

## Bảng khác biệt phiên bản

<div class="version-diff-table" tabindex="0" aria-label="Bảng khác biệt phiên bản">
  <table>
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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">Triển khai hiện tại trong pacs008</td>
          <td class="version-diff-table__takeaway">Phù hợp cho việc mô hình hóa yêu cầu trạng thái hiện tại.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">Bản sửa đổi danh mục về sau</td>
          <td class="version-diff-table__takeaway">Kiểm tra bản sửa đổi danh mục mới hơn cho kế hoạch interoperability trong tương lai.</td>
        </tr>
    </tbody>
  </table>
</div>

## Ví dụ XML có chú thích

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Chú thích trường

- `MsgId`: Bản thân yêu cầu cần một mã định danh có thể kiểm toán và tách biệt với khoản thanh toán nền.
- `OrgnlInstrId`: Hãy dùng đúng mã định danh nguồn từ chỉ thị gốc để tối đa hóa độ chính xác khi đối chiếu.
- `OrgnlEndToEndId`: Bao gồm khả năng truy vết khách hàng giúp đội vận hành đối soát enquiry nhanh hơn.

## So sánh pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="So sánh pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Khía cạnh</th>
        <th>pacs.028.001.05</th>
        <th>Thông điệp so sánh</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Mục đích chính</td>
          <td class="message-comparison-table__current">Yêu cầu trạng thái</td>
          <td class="message-comparison-table__other">Báo trạng thái</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Ai khởi tạo tương tác</td>
          <td class="message-comparison-table__current">Tổ chức yêu cầu trạng thái</td>
          <td class="message-comparison-table__other">Tổ chức gửi trạng thái</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Tư thế vận hành</td>
          <td class="message-comparison-table__current">Tra hỏi theo ngoại lệ</td>
          <td class="message-comparison-table__other">Báo cáo theo sự kiện</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Giả định sai cần tránh</td>
          <td class="message-comparison-table__current">Rằng thông điệp này nên được gửi thường lệ cho mọi khoản thanh toán</td>
          <td class="message-comparison-table__other">Rằng nó loại bỏ nhu cầu quản lý case một cách chủ động</td>
        </tr>
    </tbody>
  </table>
</div>

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/vi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Báo cáo trạng thái thanh toán giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/vi/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin con nợ, chủ nợ, số tiền và thông tin chuyển tiền cho một hoặc nhiều giao dịch chuyển khoản tín dụng.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/vi/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Chuyển khoản tín dụng giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt khách hàng. Thông điệp này hỗ trợ cấp vốn liên ngân hàng, thanh toán bù đắp và quản lý thanh khoản.</td>
        </tr>
    </tbody>
  </table>
</div>

