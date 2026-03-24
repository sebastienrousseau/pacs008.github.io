---
title: pacs.010.001.05 | Ghi nợ trực tiếp giữa các tổ chức tài chính | pacs008
description: Thông điệp pacs.010 được sử dụng giữa các tổ chức tài chính cho giao dịch ghi nợ trực tiếp trên tài khoản của chính tổ chức. Thông điệp này cho phép một...
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Ghi nợ trực tiếp giữa các tổ chức tài chính

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Tên ISO</strong></td>
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Tổng quan

Thông điệp pacs.010 được sử dụng giữa các tổ chức tài chính cho giao dịch ghi nợ trực tiếp trên tài khoản của chính tổ chức. Thông điệp này cho phép một tổ chức thu tiền trực tiếp từ tài khoản của tổ chức khác.

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026. Ngày tham chiếu của danh mục ISO 20022: 2025-02-27; các liên kết nguồn được liệt kê bên dưới.

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Tiêu đề nhóm với mã nhận dạng thông điệp và thông tin quyết toán</td>
          <td class="operational-matrix-table__right">Hỗ trợ thu ghi nợ trực tiếp liên ngân hàng giữa các tổ chức tài chính</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Thông tin giao dịch ghi nợ trực tiếp với số tiền thu</td>
          <td class="operational-matrix-table__right">Được sử dụng cho thu phí, margin call và nghĩa vụ quyết toán tổ chức</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Nhận dạng tổ chức chủ nợ và đại lý</td>
          <td class="operational-matrix-table__right">Yêu cầu thỏa thuận song phương đã được đồng ý trước giữa các tổ chức tham gia</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Nhận dạng tổ chức con nợ và đại lý</td>
          <td class="operational-matrix-table__right">Quan trọng cho quản lý tiền mặt tổ chức và chu kỳ quyết toán liên ngân hàng</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Số tiền quyết toán liên ngân hàng bằng đồng tiền quyết toán</td>
          <td class="operational-matrix-table__right">Tổ chức chủ nợ gửi pacs.010 đến tổ chức con nợ để thu tiền theo thỏa thuận đã đồng ý trước. Tổ chức con nợ xác thực yêu cầu và quyết toán hoặc từ chối ghi nợ trực tiếp.</td>
        </tr>
    </tbody>
  </table>
</div>

## Bối cảnh CBPR+ và lược đồ

- Thay thế các yếu tố của MT204 cho xử lý ghi nợ trực tiếp liên ngân hàng
- Nhận dạng các bên có cấu trúc tuân theo các yêu cầu tương tự như các thông điệp pacs khác
- Xác thực mã nhận dạng tổ chức (BIC, LEI) là bắt buộc
- Được bao gồm trong lộ trình áp dụng ISO 20022 đầy đủ trên các hạ tầng thị trường

## Luồng thông điệp

Tổ chức chủ nợ gửi pacs.010 đến tổ chức con nợ để thu tiền theo thỏa thuận đã đồng ý trước. Tổ chức con nợ xác thực yêu cầu và quyết toán hoặc từ chối ghi nợ trực tiếp.

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">Triển khai hiện tại trong pacs008</td>
          <td class="version-diff-table__takeaway">Là điểm tham chiếu cho hỗ trợ ghi nợ trực tiếp giữa các tổ chức trong dự án hiện tại.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">Bản sửa đổi danh mục về sau</td>
          <td class="version-diff-table__takeaway">Rà soát trước khi áp dụng các yêu cầu hạ tầng mới hơn.</td>
        </tr>
    </tbody>
  </table>
</div>

## Ví dụ XML có chú thích

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Chú thích trường

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Các khoản ghi nợ trực tiếp giữa các tổ chức thường cần các ngưỡng dung sai song phương rõ ràng.
- `Cdtr` / `Dbtr`: Hãy mô tả rõ vai trò của các tổ chức; đây không phải là mô hình ghi nợ cho khách hàng bán lẻ.

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/vi/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Chuyển khoản tín dụng giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt khách hàng. Thông điệp này hỗ trợ cấp vốn liên ngân hàng, thanh toán bù đắp và quản lý thanh khoản.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/vi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Báo cáo trạng thái thanh toán giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/vi/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Ghi nợ trực tiếp khách hàng giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.003 được trao đổi giữa các tổ chức tài chính để thực hiện lệnh ghi nợ trực tiếp của khách hàng. Thông điệp này cho phép ngân hàng của chủ nợ thu tiền từ ngân hàng của con nợ thay mặt cho chủ nợ.</td>
        </tr>
    </tbody>
  </table>
</div>

