---
title: "pacs.008.001.13 | Chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính | pacs008"
description: Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin...
lang: vi-VN
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — Chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Trạng thái đăng ký</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Năm</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Phiên bản</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## Tổng quan

Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin con nợ, chủ nợ, số tiền và thông tin chuyển tiền cho một hoặc nhiều giao dịch chuyển khoản tín dụng.

> Được rà soát lần cuối đối chiếu với nguồn gốc chính vào ngày 23 tháng 3 năm 2026. Ngày tham chiếu của danh mục ISO 20022: 2025-02-27; các liên kết nguồn được liệt kê bên dưới.

## Yếu tố dữ liệu chính

- **GrpHdr** — Tiêu đề nhóm với ID thông điệp, ngày tạo, số lượng giao dịch và thông tin quyết toán
- **CdtTrfTxInf** — Thông tin giao dịch chuyển khoản tín dụng với số tiền, phí và mục đích
- **Dbtr / DbtrAgt** — Nhận dạng và chi tiết tài khoản con nợ và đại lý con nợ
- **Cdtr / CdtrAgt** — Nhận dạng và chi tiết tài khoản chủ nợ và đại lý chủ nợ
- **RmtInf** — Thông tin chuyển tiền cho tham chiếu thanh toán có cấu trúc hoặc không có cấu trúc

## Bối cảnh kinh doanh

- Thông điệp chính cho chuyển khoản tín dụng xuyên biên giới và nội địa do khách hàng khởi tạo
- Được sử dụng trên toàn bộ SEPA SCT, SEPA Instant, CBPR+ và các hệ thống thanh toán bù trừ quốc gia
- Mang thông tin chuyển tiền có cấu trúc để hỗ trợ đối chiếu tự động
- Hỗ trợ phương thức quyết toán nối tiếp, bù đắp và trực tiếp cho chuỗi thanh toán nhiều chặng

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Tiêu đề nhóm với ID thông điệp, ngày tạo, số lượng giao dịch và thông tin quyết toán</td>
          <td class="operational-matrix-table__right">Thông điệp chính cho chuyển khoản tín dụng xuyên biên giới và nội địa do khách hàng khởi tạo</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Thông tin giao dịch chuyển khoản tín dụng với số tiền, phí và mục đích</td>
          <td class="operational-matrix-table__right">Được sử dụng trên toàn bộ SEPA SCT, SEPA Instant, CBPR+ và các hệ thống thanh toán bù trừ quốc gia</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Nhận dạng và chi tiết tài khoản con nợ và đại lý con nợ</td>
          <td class="operational-matrix-table__right">Mang thông tin chuyển tiền có cấu trúc để hỗ trợ đối chiếu tự động</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Nhận dạng và chi tiết tài khoản chủ nợ và đại lý chủ nợ</td>
          <td class="operational-matrix-table__right">Hỗ trợ phương thức quyết toán nối tiếp, bù đắp và trực tiếp cho chuỗi thanh toán nhiều chặng</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Thông tin chuyển tiền cho tham chiếu thanh toán có cấu trúc hoặc không có cấu trúc</td>
          <td class="operational-matrix-table__right">Đại lý con nợ tạo pacs.008 và gửi đến đại lý chủ nợ (trực tiếp hoặc qua trung gian). Mỗi đại lý trong chuỗi xác thực, bổ sung và chuyển tiếp lệnh cho đến khi đại lý chủ nợ ghi có vào tài khoản người thụ hưởng.</td>
        </tr>
    </tbody>
  </table>
</div>

## Bối cảnh CBPR+ và lược đồ

- Thay thế MT103 và MT103+ cho chuyển khoản tín dụng khách hàng xuyên biên giới
- Hạn chót địa chỉ có cấu trúc tháng 11 năm 2026 áp dụng cho tất cả địa chỉ bưu điện của các bên
- SWIFT gpi yêu cầu pacs.008 cho theo dõi từ đầu đến cuối dựa trên UETR
- 13 phiên bản sửa đổi phản ánh sự phát triển liên tục của lược đồ trên các hạ tầng thị trường

## Luồng thông điệp

Đại lý con nợ tạo pacs.008 và gửi đến đại lý chủ nợ (trực tiếp hoặc qua trung gian). Mỗi đại lý trong chuỗi xác thực, bổ sung và chuyển tiếp lệnh cho đến khi đại lý chủ nợ ghi có vào tài khoản người thụ hưởng.

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">Các phiên bản sửa đổi ban đầu</td>
          <td class="version-diff-table__takeaway">Chủ yếu hữu ích cho phân tích chuyển đổi từ hệ thống cũ và bối cảnh lịch sử phiên bản.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">Các phiên bản hiện đại trước bản hiện tại</td>
          <td class="version-diff-table__takeaway">Đây là các phiên bản sửa đổi có khả năng xuất hiện nhiều nhất trong các dự án chuyển đổi hoặc cùng tồn tại gần đây.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">Bản sửa đổi danh mục hiện tại</td>
          <td class="version-diff-table__takeaway">Dùng điều này cho việc lập kế hoạch theo phiên bản hiện tại, đồng thời vẫn xác thực hướng dẫn sử dụng của lược đồ và mức độ sẵn sàng của đối tác.</td>
        </tr>
    </tbody>
  </table>
</div>

## Ví dụ XML có chú thích

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### Chú thích trường

- `MsgId`: Trường này nên định danh phong bì thông điệp, không phải tham chiếu thanh toán của khách hàng cuối.
- `EndToEndId`: Hãy giữ tính truy vết hướng tới khách hàng ổn định trên các hệ thống kế tiếp khi có thể.
- `UETR`: Hãy dùng trường này nhất quán trong môi trường xuyên biên giới và yêu cầu theo dõi cao; không tạo theo kiểu tạm thời ở các bước xử lý sau.
- `IntrBkSttlmAmt`: Xác thực số tiền và loại tiền bằng quy tắc nghiệp vụ trước khi xác thực cấu trúc thông điệp.
- `Dbtr` / `Cdtr`: Chất lượng dữ liệu bên tham gia, cấu trúc địa chỉ và mã định danh thường là các yếu tố chính quyết định khối lượng xử lý sai sót.

## So sánh pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="So sánh pacs.008 vs pacs.009">
  <table>
    <caption>So sánh pacs.008 vs pacs.009</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Khía cạnh</th>
        <th>pacs.008.001.13</th>
        <th>Thông điệp so sánh</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Mục đích chính</td>
          <td class="message-comparison-table__current">Chuyển khoản tín dụng khách hàng</td>
          <td class="message-comparison-table__other">Chuyển khoản tín dụng cho tài khoản riêng của tổ chức hoặc chặng thanh toán bù đắp</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Chủ sở hữu nghiệp vụ</td>
          <td class="message-comparison-table__current">Vận hành thanh toán khách hàng</td>
          <td class="message-comparison-table__other">Hoạt động ngân quỹ / ngân hàng đại lý / tài trợ vốn</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Cặp kết hợp điển hình</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">các luồng pacs.002, pacs.004 và đôi khi là pacs.008 liên kết</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Giả định sai cần tránh</td>
          <td class="message-comparison-table__current">Rằng mọi chuyển khoản giữa các ngân hàng đều thuộc về đây</td>
          <td class="message-comparison-table__other">Rằng nó có thể thay thế các chỉ thị chuyển khoản tín dụng của khách hàng</td>
        </tr>
    </tbody>
  </table>
</div>

## Tài liệu tham chiếu gốc

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [SWIFT CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [SWIFT CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## Phiên bản được hỗ trợ

<div class="message-versions-table" tabindex="0" aria-label="Phiên bản được hỗ trợ">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Phiên bản</th>
        <th>Trạng thái</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>Hiện tại</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/vi/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Hoàn trả thanh toán</td>
          <td class="related-messages-table__overview">Thông điệp pacs.004 được sử dụng để hoàn trả giao dịch thanh toán đã quyết toán trước đó. Thông điệp này đảo ngược dòng tiền khi khoản thanh toán không thể áp dụng, được gửi nhầm, hoặc đang bị thu hồi bởi tổ chức gốc.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/vi/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Chuyển khoản tín dụng giữa các tổ chức tài chính</td>
          <td class="related-messages-table__overview">Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt khách hàng. Thông điệp này hỗ trợ cấp vốn liên ngân hàng, thanh toán bù đắp và quản lý thanh khoản.</td>
        </tr>
    </tbody>
  </table>
</div>

