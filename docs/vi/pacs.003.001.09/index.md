---
title: pacs.003.001.09 | Ghi nợ trực tiếp khách hàng giữa các tổ chức tài chính | pacs008
description: Thông điệp pacs.003 được trao đổi giữa các tổ chức tài chính để thực hiện lệnh ghi nợ trực tiếp của khách hàng. Thông điệp này cho phép ngân hàng của chủ...
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — Ghi nợ trực tiếp khách hàng giữa các tổ chức tài chính

| | |
|---|---|
| **Tên ISO** | FIToFICustomerDirectDebitV09 |
| **Trạng thái đăng ký** | Registered |
| **Năm** | 2019 |
| **Phiên bản** | 9 |

## Tổng quan

Thông điệp pacs.003 được trao đổi giữa các tổ chức tài chính để thực hiện lệnh ghi nợ trực tiếp của khách hàng. Thông điệp này cho phép ngân hàng của chủ nợ thu tiền từ ngân hàng của con nợ thay mặt cho chủ nợ.

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026. Ngày tham chiếu của danh mục ISO 20022: 2025-02-27; các liên kết nguồn được liệt kê bên dưới.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với mã nhận dạng thông điệp và thông tin quyết toán
- **DrctDbtTxInf** — Thông tin giao dịch ghi nợ trực tiếp với số tiền và các bên
- **Cdtr** — Nhận dạng chủ nợ và chi tiết tài khoản
- **CdtrAgt** — Nhận dạng đại lý chủ nợ (tổ chức thu tiền)
- **DbtrAgt** — Nhận dạng đại lý con nợ (tổ chức thanh toán)

## Bối cảnh kinh doanh

- Hỗ trợ các chương trình ghi nợ trực tiếp SEPA Core và B2B
- Được sử dụng cho việc thu thanh toán định kỳ như đăng ký thuê bao, hóa đơn tiện ích và trả nợ vay
- Yêu cầu tham chiếu ủy quyền hợp lệ giữa con nợ và chủ nợ
- Cho phép thu gom hàng loạt nhiều lệnh ghi nợ trực tiếp trong một thông điệp duy nhất

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
          <td class="operational-matrix-table__right">Hỗ trợ các chương trình ghi nợ trực tiếp SEPA Core và B2B</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Thông tin giao dịch ghi nợ trực tiếp với số tiền và các bên</td>
          <td class="operational-matrix-table__right">Được sử dụng cho việc thu thanh toán định kỳ như đăng ký thuê bao, hóa đơn tiện ích và trả nợ vay</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Nhận dạng chủ nợ và chi tiết tài khoản</td>
          <td class="operational-matrix-table__right">Yêu cầu tham chiếu ủy quyền hợp lệ giữa con nợ và chủ nợ</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Nhận dạng đại lý chủ nợ (tổ chức thu tiền)</td>
          <td class="operational-matrix-table__right">Cho phép thu gom hàng loạt nhiều lệnh ghi nợ trực tiếp trong một thông điệp duy nhất</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Nhận dạng đại lý con nợ (tổ chức thanh toán)</td>
          <td class="operational-matrix-table__right">Đại lý chủ nợ khởi tạo pacs.003 hướng tới đại lý con nợ để thu tiền. Đại lý con nợ xác thực ủy quyền, kiểm tra số dư tài khoản, và quyết toán hoặc trả lại giao dịch.</td>
        </tr>
    </tbody>
  </table>
</div>

## Bối cảnh CBPR+ và lược đồ

- Yêu cầu về địa chỉ có cấu trúc và nhận dạng các bên áp dụng tương tự cho ghi nợ trực tiếp
- Dữ liệu liên quan đến ủy quyền phải hoàn toàn có cấu trúc từ tháng 11 năm 2026
- Thay thế các định dạng ghi nợ trực tiếp kiểu MT104 kế thừa trong quy trình xuyên biên giới
- Việc xác thực nhận dạng chương trình chủ nợ ngày càng được thực thi nghiêm ngặt

## Luồng thông điệp

Đại lý chủ nợ khởi tạo pacs.003 hướng tới đại lý con nợ để thu tiền. Đại lý con nợ xác thực ủy quyền, kiểm tra số dư tài khoản, và quyết toán hoặc trả lại giao dịch.

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
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">Triển khai hiện tại trong pacs008</td>
          <td class="version-diff-table__takeaway">Hữu ích cho việc mô hình hóa tham chiếu ghi nợ trực tiếp trong dự án hiện tại.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">Các bản sửa đổi danh mục về sau</td>
          <td class="version-diff-table__takeaway">Kiểm tra các bản sửa đổi về sau cho các cập nhật về ủy quyền, trạng thái và khả năng tương tác trước khi dùng cho triển khai mới.</td>
        </tr>
    </tbody>
  </table>
</div>

## Ví dụ XML có chú thích

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Chú thích trường

- `EndToEndId`: Hãy giữ tách biệt các mã định danh ủy quyền và thu hộ khỏi các tham chiếu hóa đơn nghiệp vụ.
- `IntrBkSttlmAmt`: Hãy xác thực độ chính xác của số tiền ghi nợ và các quy tắc tiền tệ trước khi tạo XML.
- `Dbtr` / `Cdtr`: Thành công của ghi nợ trực tiếp thường phụ thuộc nhiều hơn vào chất lượng tài khoản và ủy quyền so với cấu trúc XML.

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
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
          <td class="related-messages-table__id"><a href="/vi/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Hoàn trả thanh toán</td>
          <td class="related-messages-table__overview">Thông điệp pacs.004 được sử dụng để hoàn trả giao dịch thanh toán đã quyết toán trước đó. Thông điệp này đảo ngược dòng tiền khi khoản thanh toán không thể áp dụng, được gửi nhầm, hoặc đang bị thu hồi bởi tổ chức gốc.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/vi/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">Đảo ngược thanh toán giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.007 được sử dụng để đảo ngược lệnh thanh toán đã gửi trước đó chưa được quyết toán hoặc để yêu cầu đảo ngược khoản thanh toán đã quyết toán. Khác với pacs.004 (hoàn trả), thông điệp này được khởi tạo bởi đại lý ra lệnh gốc.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/vi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Báo cáo trạng thái thanh toán giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán.</td>
        </tr>
    </tbody>
  </table>
</div>

