---
title: pacs.009.001.10 | Chuyển khoản tín dụng giữa các tổ chức tài chính | pacs008
description: Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt...
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Chuyển khoản tín dụng giữa các tổ chức tài chính

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="operational-matrix-table__right">Được sử dụng cho chuyển khoản tài khoản tự thân giữa ngân hàng và thanh toán bù đắp</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Thông tin giao dịch chuyển khoản tín dụng với số tiền quyết toán liên ngân hàng</td>
          <td class="operational-matrix-table__right">Hỗ trợ quản lý thanh khoản giữa các đối tác ngân hàng đại lý</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Nhận dạng tổ chức con nợ và đại lý</td>
          <td class="operational-matrix-table__right">Mang chặng bù đắp của chuyển khoản tín dụng khách hàng được quyết toán theo phương thức bù đắp</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Nhận dạng tổ chức chủ nợ và đại lý</td>
          <td class="operational-matrix-table__right">Cho phép các hoạt động ngân quỹ và cấp vốn giữa các tổ chức tài chính</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Số tiền quyết toán liên ngân hàng bằng đồng tiền quyết toán</td>
          <td class="operational-matrix-table__right">Tổ chức con nợ gửi pacs.009 đến tổ chức chủ nợ để chuyển tiền của chính mình. Đối với thanh toán theo phương thức bù đắp, pacs.009 cung cấp chặng cấp vốn trong khi pacs.008 mang lệnh khách hàng qua đường dẫn riêng biệt.</td>
        </tr>
    </tbody>
  </table>
</div>

## Bối cảnh CBPR+ và lược đồ

- Thay thế MT202 và MT202COV cho chuyển khoản giữa các tổ chức
- Quy trình theo phương thức bù đắp ghép cặp pacs.009 với lệnh khách hàng pacs.008 nền tảng
- Dữ liệu các bên có cấu trúc và nhận dạng LEI ngày càng được yêu cầu
- SWIFT gpi bao phủ pacs.009 để đảm bảo minh bạch ngân hàng đại lý

## Luồng thông điệp

Tổ chức con nợ gửi pacs.009 đến tổ chức chủ nợ để chuyển tiền của chính mình. Đối với thanh toán theo phương thức bù đắp, pacs.009 cung cấp chặng cấp vốn trong khi pacs.008 mang lệnh khách hàng qua đường dẫn riêng biệt.

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">Triển khai hiện tại trong pacs008</td>
          <td class="version-diff-table__takeaway">Phù hợp với mức hỗ trợ hiện tại của dự án cho các luồng chuyển khoản tín dụng FI.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">Các bản sửa đổi danh mục về sau</td>
          <td class="version-diff-table__takeaway">Quan trọng cho việc lập lộ trình trong môi trường ngân hàng đại lý và thanh toán bù đắp.</td>
        </tr>
    </tbody>
  </table>
</div>

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

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## So sánh pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="So sánh pacs.009 vs pacs.008">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Khía cạnh</th>
        <th>pacs.009.001.10</th>
        <th>Thông điệp so sánh</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Mục đích chính</td>
          <td class="message-comparison-table__current">Chuyển khoản tín dụng cho tài khoản riêng của tổ chức hoặc chặng thanh toán bù đắp</td>
          <td class="message-comparison-table__other">Chuyển khoản tín dụng khách hàng</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Chủ sở hữu nghiệp vụ</td>
          <td class="message-comparison-table__current">Hoạt động ngân quỹ / ngân hàng đại lý / tài trợ vốn</td>
          <td class="message-comparison-table__other">Vận hành thanh toán khách hàng</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Cặp kết hợp điển hình</td>
          <td class="message-comparison-table__current">các luồng pacs.002, pacs.004 và pacs.008 liên kết</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Giả định sai cần tránh</td>
          <td class="message-comparison-table__current">Rằng đây chỉ là một pacs.008 mang tính kỹ thuật hơn</td>
          <td class="message-comparison-table__other">Rằng nó có thể mang các luồng tài trợ vốn của tổ chức một cách gọn gàng</td>
        </tr>
    </tbody>
  </table>
</div>

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


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
          <td class="related-messages-table__id"><a href="/vi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Báo cáo trạng thái thanh toán giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/vi/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Ghi nợ trực tiếp giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.010 được sử dụng giữa các tổ chức tài chính cho giao dịch ghi nợ trực tiếp trên tài khoản của chính tổ chức. Thông điệp này cho phép một tổ chức thu tiền trực tiếp từ tài khoản của tổ chức khác.</td>
        </tr>
    </tbody>
  </table>
</div>

