---
title: "Câu hỏi thường gặp về ISO 20022 | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: vi-VN
lastUpdated: true
image: /logo.webp
---

# Câu hỏi thường gặp về ISO 20022

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## Tổng quan

### ISO 20022 là gì?

ISO 20022 là tiêu chuẩn quốc tế về nhắn tin tài chính. Nó định nghĩa ngôn ngữ và mô hình chung cho các thông điệp thanh toán giữa các tổ chức tài chính. Khác với các định dạng cũ như SWIFT MT, ISO 20022 sử dụng XML và hỗ trợ dữ liệu phong phú hơn cho các bên, số tiền và tham chiếu.

### Thông điệp pacs là gì?

Họ thông điệp pacs (payments clearing and settlement) bao gồm lệnh thanh toán liên ngân hàng, báo cáo trạng thái, hoàn trả, đảo ngược và truy vấn. Bao gồm pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 và pacs.028.

### Thông điệp pacs khác gì với thông điệp SWIFT MT?

SWIFT MT sử dụng định dạng thẻ trường phẳng. pacs sử dụng XML phân cấp. MT103 tương ứng pacs.008, MT202 tương ứng pacs.009.

### Mối quan hệ giữa thông điệp pain và pacs?

Thông điệp pain di chuyển giữa khách hàng và ngân hàng. Thông điệp pacs di chuyển giữa các ngân hàng.

## Lựa chọn thông điệp

### Khi nào nên sử dụng pacs.008?

Sử dụng pacs.008 cho lệnh chuyển khoản tín dụng khách hàng giữa các ngân hàng.

### Khi nào nên sử dụng pacs.009 thay vì pacs.008?

Sử dụng pacs.009 cho chuyển khoản tài khoản riêng của tổ chức, cấp vốn và thanh toán bảo đảm.

### Sự khác biệt giữa pacs.004 và pacs.007?

pacs.004 hoàn trả tiền từ phía nhận. pacs.007 đảo ngược từ phía gửi.

### Khi nào nên sử dụng pacs.028 thay vì chờ pacs.002?

Sử dụng pacs.028 khi cần chủ động yêu cầu trạng thái thanh toán chưa nhận được cập nhật pacs.002.

### pacs.003 dùng để làm gì?

pacs.003 mang lệnh ghi nợ trực tiếp khách hàng giữa các ngân hàng.

### pacs.010 dùng để làm gì?

pacs.010 xử lý ghi nợ trực tiếp giữa các tổ chức tài chính trên tài khoản riêng.

## Cấu trúc thông điệp

### Group Header (GrpHdr) là gì?

Group Header xuất hiện đúng một lần trong mỗi thông điệp pacs. Chứa MsgId, CreDtTm, NbOfTxs, SttlmInf.

### Các mã nhận dạng thanh toán trong pacs.008?

MsgId, InstrId, EndToEndId, TxId, UETR.

### Có những phương thức quyết toán nào?

CLRG, INDA, INGA, COVE.

### Các mã bên chịu phí có ý nghĩa gì?

DEBT (bên nợ), CRED (bên có), SHAR (chia sẻ), SLEV (mức dịch vụ, bắt buộc SEPA).

## CBPR+ và chuyển đổi

### CBPR+ là gì?

CBPR+ là chương trình của SWIFT áp dụng ISO 20022 cho thanh toán xuyên biên giới. Hoạt động từ tháng 3 năm 2023.

### Giai đoạn cùng tồn tại MT/MX ra sao?

Kết thúc tháng 11 năm 2025. Ngân hàng phải gửi và nhận thông điệp pacs gốc.

### Hạn chót địa chỉ có cấu trúc tháng 11 năm 2026 là gì?

Từ tháng 11 năm 2026, SWIFT CBPR+ yêu cầu địa chỉ bưu điện có cấu trúc. Tối thiểu cần TwnNm và Ctry.

### pacs.008 thay thế MT103 như thế nào?

pacs.008 thay thế MT103 và MT103+. Thêm UETR, thông tin chuyển tiền có cấu trúc, nhận dạng LEI.

### pacs.009 thay thế MT202 như thế nào?

pacs.009 thay thế MT202 và MT202COV. Tách rõ cấp vốn và dữ liệu khách hàng.

## Chi tiết kỹ thuật

### Địa chỉ có cấu trúc và không có cấu trúc là gì?

Có cấu trúc: StrtNm, BldgNb, PstCd, TwnNm, Ctry. Không có cấu trúc: AdrLine.

### UETR là gì và theo dõi gpi hoạt động ra sao?

UETR là mã UUID v4 do đại lý bên nợ tạo, không thay đổi qua toàn bộ chuỗi thanh toán.

### Các mã trạng thái pacs.002 phổ biến?

ACCP, ACSP, ACSC, RJCT, PDNG, RCVD.

### Các mã lý do hoàn trả pacs.004 phổ biến?

AC01, AC04, AC06, AM04, BE04, CUST, DUPL, FOCR, FR01.

### Thông tin chuyển tiền có cấu trúc là gì?

RmtInf/Strd mang tham chiếu tài liệu, số tiền và tham chiếu bên có.

### LEI là gì và khi nào được sử dụng?

LEI là mã 20 ký tự theo ISO 17442. Xuất hiện trong OrgId/LEI và FinInstnId/LEI.

## Về bộ công cụ pacs008

### pacs008 làm gì?

pacs008 là bộ công cụ Python tạo, xác thực và gửi thông điệp thanh toán ISO 20022.

### pacs008 hỗ trợ những loại thông điệp nào?

pacs.002.001.12, pacs.003.001.09, pacs.004.001.11, pacs.007.001.11, pacs.008.001.13, pacs.009.001.10, pacs.010.001.05, pacs.028.001.05.

### pacs008 giúp gì cho hạn chót địa chỉ có cấu trúc 2026?

Xác thực trường địa chỉ có cấu trúc và lai trước khi tạo XML.

### pacs008 có thể xác thực dữ liệu mà không tạo XML không?

Có. Sử dụng cờ CLI `--dry-run` hoặc endpoint API `POST /validate`.

## Tham khảo

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

