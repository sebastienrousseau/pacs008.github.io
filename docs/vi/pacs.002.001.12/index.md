---
title: pacs.002.001.12 | Báo cáo trạng thái thanh toán giữa các tổ chức tài chính | pacs008
description: Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận...
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — Báo cáo trạng thái thanh toán giữa các tổ chức tài chính

| | |
|---|---|
| **Tên ISO** | FIToFIPaymentStatusReportV12 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 12 |

## Tổng quan

Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán.

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026. Ngày tham chiếu của danh mục ISO 20022: 2025-02-27; các liên kết nguồn được liệt kê bên dưới.

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Tiêu đề nhóm với mã nhận dạng thông điệp và dấu thời gian tạo</td>
          <td class="operational-matrix-table__right">Được sử dụng để xác nhận quyết toán hoặc báo cáo từ chối chuyển khoản tín dụng, ghi nợ trực tiếp và hoàn trả thanh toán</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Thông tin nhóm gốc và trạng thái cho báo cáo cấp nhóm</td>
          <td class="operational-matrix-table__right">Cho phép đối chiếu giữa đại lý ra lệnh và đại lý nhận lệnh</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Thông tin giao dịch và trạng thái cho kết quả giao dịch riêng lẻ</td>
          <td class="operational-matrix-table__right">Bắt buộc trong quy trình CBPR+ để xác nhận việc xử lý thông điệp pacs.008 và pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Thông tin lý do trạng thái với mã lý do có cấu trúc</td>
          <td class="operational-matrix-table__right">Hỗ trợ báo cáo trạng thái cả ở cấp nhóm và cấp giao dịch riêng lẻ</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Tham chiếu giao dịch gốc liên kết ngược về lệnh nguồn</td>
          <td class="operational-matrix-table__right">Đại lý nhận lệnh (bên nhận) gửi pacs.002 trở lại đại lý ra lệnh (bên gửi) để xác nhận việc chấp nhận, quyết toán hoặc từ chối lệnh thanh toán đã nhận như pacs.008 hoặc pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## Bối cảnh CBPR+ và lược đồ

- Thay thế các thông báo trạng thái MT199 và field 79 trong thông điệp MT
- CBPR+ bắt buộc sử dụng pacs.002 cho tất cả thông tin liên lạc về trạng thái thanh toán
- Mã lý do có cấu trúc thay thế các giải thích từ chối dạng văn bản tự do
- Tích hợp theo dõi SWIFT gpi yêu cầu pacs.002 để đảm bảo minh bạch từ đầu đến cuối

## Luồng thông điệp

Đại lý nhận lệnh (bên nhận) gửi pacs.002 trở lại đại lý ra lệnh (bên gửi) để xác nhận việc chấp nhận, quyết toán hoặc từ chối lệnh thanh toán đã nhận như pacs.008 hoặc pacs.009.

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">Triển khai hiện tại trong pacs008</td>
          <td class="version-diff-table__takeaway">Dùng điều này khi cần khớp với các mẫu và tài sản xác thực hiện tại của dự án.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">Các bản sửa đổi danh mục về sau</td>
          <td class="version-diff-table__takeaway">Hãy xem các bản sửa đổi ISO mới hơn trước khi bắt đầu công việc tương tác mới hoặc tiếp nhận hạ tầng mới.</td>
        </tr>
    </tbody>
  </table>
</div>

## Ví dụ XML có chú thích

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Chú thích trường

- `MsgId`: Hãy dùng một mã định danh mới cho chính báo cáo trạng thái, không phải cho chỉ thị thanh toán gốc.
- `OrgnlInstrId`: Giữ nguyên mã định danh của chỉ thị gốc để trạng thái có thể được đối chiếu tự động.
- `TxSts`: Đây là trạng thái vận hành; hãy ánh xạ cẩn thận sang các trạng thái xử lý nội bộ thay vì giả định đối chiếu một-một.
- `StsRsnInf`: Mã lý do có cấu trúc hữu ích hơn rất nhiều so với văn bản tự do cho xử lý sai sót và phân tích.

## So sánh pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="So sánh pacs.002 vs pacs.028">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Khía cạnh</th>
        <th>pacs.002.001.12</th>
        <th>Thông điệp so sánh</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Mục đích chính</td>
          <td class="message-comparison-table__current">Báo trạng thái</td>
          <td class="message-comparison-table__other">Yêu cầu trạng thái</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Ai khởi tạo tương tác</td>
          <td class="message-comparison-table__current">Tổ chức gửi trạng thái</td>
          <td class="message-comparison-table__other">Tổ chức yêu cầu trạng thái</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Tư thế vận hành</td>
          <td class="message-comparison-table__current">Báo cáo theo sự kiện</td>
          <td class="message-comparison-table__other">Tra hỏi theo ngoại lệ</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Giả định sai cần tránh</td>
          <td class="message-comparison-table__current">Rằng báo trạng thái có thể thay thế các quy trình tra soát và điều tra</td>
          <td class="message-comparison-table__other">Rằng mọi khoản thanh toán đều cần một yêu cầu trạng thái rõ ràng</td>
        </tr>
    </tbody>
  </table>
</div>

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
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
          <td class="related-messages-table__id"><a href="/vi/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Chuyển khoản tín dụng giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt khách hàng. Thông điệp này hỗ trợ cấp vốn liên ngân hàng, thanh toán bù đắp và quản lý thanh khoản.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/vi/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">Yêu cầu trạng thái thanh toán giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.028 được gửi bởi tổ chức tài chính để yêu cầu trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cho phép theo dõi chủ động việc xử lý thanh toán mà không cần chờ báo cáo trạng thái không được yêu cầu.</td>
        </tr>
    </tbody>
  </table>
</div>

