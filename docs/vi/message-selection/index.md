---
title: Hướng dẫn chọn thông điệp | pacs008
description: Chọn đúng thông điệp pacs ISO 20022 cho tạo lập, báo cáo trạng thái, hoàn trả, đảo giao dịch và truy vấn.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# Hướng dẫn chọn thông điệp

Trước hết chọn họ pacs theo sự kiện nghiệp vụ, sau đó theo quy tắc và mô hình vận hành.

## Ma trận quyết định nhanh

<div class="decision-matrix-table" tabindex="0" aria-label="Ma trận quyết định nhanh">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
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
          <td class="decision-matrix-table__id"><a href="/vi/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">Báo cáo trạng thái thanh toán giữa các tổ chức tài chính</td>
          <td class="decision-matrix-table__overview">Thông điệp pacs.002 được gửi bởi tổ chức tài chính để báo cáo trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cung cấp thông tin xác nhận, từ chối hoặc trạng thái đang chờ xử lý cho các giao dịch riêng lẻ trong thông điệp thanh toán.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/vi/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">Ghi nợ trực tiếp khách hàng giữa các tổ chức tài chính</td>
          <td class="decision-matrix-table__overview">Thông điệp pacs.003 được trao đổi giữa các tổ chức tài chính để thực hiện lệnh ghi nợ trực tiếp của khách hàng. Thông điệp này cho phép ngân hàng của chủ nợ thu tiền từ ngân hàng của con nợ thay mặt cho chủ nợ.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/vi/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Hoàn trả thanh toán</td>
          <td class="decision-matrix-table__overview">Thông điệp pacs.004 được sử dụng để hoàn trả giao dịch thanh toán đã quyết toán trước đó. Thông điệp này đảo ngược dòng tiền khi khoản thanh toán không thể áp dụng, được gửi nhầm, hoặc đang bị thu hồi bởi tổ chức gốc.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/vi/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">Đảo ngược thanh toán giữa các tổ chức tài chính</td>
          <td class="decision-matrix-table__overview">Thông điệp pacs.007 được sử dụng để đảo ngược lệnh thanh toán đã gửi trước đó chưa được quyết toán hoặc để yêu cầu đảo ngược khoản thanh toán đã quyết toán. Khác với pacs.004 (hoàn trả), thông điệp này được khởi tạo bởi đại lý ra lệnh gốc.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/vi/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">Chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính</td>
          <td class="decision-matrix-table__overview">Thông điệp pacs.008 là lệnh thanh toán cốt lõi được trao đổi giữa các tổ chức tài chính để chuyển tiền thay mặt khách hàng. Thông điệp này mang thông tin con nợ, chủ nợ, số tiền và thông tin chuyển tiền cho một hoặc nhiều giao dịch chuyển khoản tín dụng.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/vi/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Chuyển khoản tín dụng giữa các tổ chức tài chính</td>
          <td class="decision-matrix-table__overview">Thông điệp pacs.009 được sử dụng cho chuyển khoản tín dụng giữa các tổ chức tài chính khi việc chuyển khoản là thay mặt tổ chức chứ không phải thay mặt khách hàng. Thông điệp này hỗ trợ cấp vốn liên ngân hàng, thanh toán bù đắp và quản lý thanh khoản.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/vi/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Ghi nợ trực tiếp giữa các tổ chức tài chính</td>
          <td class="decision-matrix-table__overview">Thông điệp pacs.010 được sử dụng giữa các tổ chức tài chính cho giao dịch ghi nợ trực tiếp trên tài khoản của chính tổ chức. Thông điệp này cho phép một tổ chức thu tiền trực tiếp từ tài khoản của tổ chức khác.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/vi/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">Yêu cầu trạng thái thanh toán giữa các tổ chức tài chính</td>
          <td class="decision-matrix-table__overview">Thông điệp pacs.028 được gửi bởi tổ chức tài chính để yêu cầu trạng thái của lệnh thanh toán đã gửi trước đó. Thông điệp này cho phép theo dõi chủ động việc xử lý thanh toán mà không cần chờ báo cáo trạng thái không được yêu cầu.</td>
        </tr>
    </tbody>
  </table>
</div>

## Các điểm so sánh phổ biến

<div class="comparison-points-table" tabindex="0" aria-label="Các điểm so sánh phổ biến">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>So sánh</th>
        <th>Khác biệt chính</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">Thanh toán khách hàng so với chuyển động vốn của tổ chức hoặc thanh toán bù đắp</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">Hoàn trả từ phía nhận so với đảo giao dịch từ phía gửi</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">Báo cáo trạng thái so với yêu cầu trạng thái</td>
        </tr>
    </tbody>
  </table>
</div>

## Các trang thông điệp được hỗ trợ

- [`pacs.002.001.12`](/vi/pacs.002.001.12/) — Báo cáo trạng thái thanh toán giữa các tổ chức tài chính
- [`pacs.003.001.09`](/vi/pacs.003.001.09/) — Ghi nợ trực tiếp khách hàng giữa các tổ chức tài chính
- [`pacs.004.001.11`](/vi/pacs.004.001.11/) — Hoàn trả thanh toán
- [`pacs.007.001.11`](/vi/pacs.007.001.11/) — Đảo ngược thanh toán giữa các tổ chức tài chính
- [`pacs.008.001.13`](/vi/pacs.008.001.13/) — Chuyển khoản tín dụng khách hàng giữa các tổ chức tài chính
- [`pacs.009.001.10`](/vi/pacs.009.001.10/) — Chuyển khoản tín dụng giữa các tổ chức tài chính
- [`pacs.010.001.05`](/vi/pacs.010.001.05/) — Ghi nợ trực tiếp giữa các tổ chức tài chính
- [`pacs.028.001.05`](/vi/pacs.028.001.05/) — Yêu cầu trạng thái thanh toán giữa các tổ chức tài chính

