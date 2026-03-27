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

ISO 20022 là tiêu chuẩn quốc tế về nhắn tin tài chính. Tiêu chuẩn này định nghĩa ngôn ngữ và mô hình chung cho các thông điệp thanh toán trao đổi giữa các tổ chức tài chính. Khác với các định dạng cũ như SWIFT MT, ISO 20022 sử dụng XML và hỗ trợ dữ liệu phong phú hơn, có cấu trúc hơn cho các bên, số tiền và tham chiếu.

### Thông điệp pacs là gì?

Họ thông điệp pacs (payments clearing and settlement) bao gồm lệnh thanh toán liên ngân hàng, báo cáo trạng thái, hoàn trả, đảo ngược và truy vấn. Bao gồm pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 và pacs.028. Mỗi thông điệp đảm nhận một vai trò cụ thể trong vòng đời thanh toán.

### Thông điệp pacs khác gì với thông điệp SWIFT MT?

Thông điệp SWIFT MT sử dụng định dạng thẻ trường phẳng (ví dụ MT103 cho chuyển khoản tín dụng khách hàng). Thông điệp pacs sử dụng XML phân cấp với cấu trúc dữ liệu phong phú hơn. Các khác biệt chính bao gồm hỗ trợ nhiều giao dịch trong một thông điệp, nhận dạng bên có cấu trúc (LEI, nhiều mã định danh), địa chỉ bưu điện có cấu trúc và thông tin chuyển tiền có cấu trúc. MT103 tương ứng pacs.008, MT202 tương ứng pacs.009, và nội dung trạng thái MT199 được thay thế bởi pacs.002.

### Mối quan hệ giữa thông điệp pain và pacs?

Thông điệp pain (payment initiation) di chuyển giữa khách hàng và ngân hàng. Thông điệp pacs di chuyển giữa các ngân hàng. Lệnh khởi tạo chuyển khoản tín dụng pain.001 từ ngân hàng bên nợ trở thành lệnh liên ngân hàng pacs.008. Hai miền chia sẻ các phần tử dữ liệu chung nhưng phục vụ các phần khác nhau của chuỗi thanh toán.

## Lựa chọn thông điệp

### Khi nào nên sử dụng pacs.008?

Sử dụng pacs.008 cho lệnh chuyển khoản tín dụng khách hàng giữa các ngân hàng. Thông điệp này mang dữ liệu bên nợ và bên có, số tiền, thông tin chuyển tiền và chi tiết quyết toán. Đây là thông điệp chính để gửi thanh toán khách hàng qua mạng liên ngân hàng, cả trong nước (SEPA) lẫn xuyên biên giới (CBPR+).

### Khi nào nên sử dụng pacs.009 thay vì pacs.008?

Sử dụng pacs.009 cho chuyển khoản tài khoản riêng của tổ chức, giai đoạn cấp vốn và thanh toán bảo đảm. Khác với pacs.008 mang thanh toán khách hàng thay mặt bên nợ, pacs.009 chuyển vốn giữa các ngân hàng cho tài khoản riêng. Trong luồng bảo đảm, pacs.009 đảm nhận cấp vốn trong khi pacs.008 mang lệnh khách hàng trên đường riêng.

### Sự khác biệt giữa pacs.004 và pacs.007?

pacs.004 hoàn trả tiền đã quyết toán từ phía nhận ngược qua chuỗi. pacs.007 đảo ngược thanh toán từ phía gửi ban đầu xuôi qua chuỗi. Sử dụng pacs.004 khi ngân hàng thụ hưởng không thể ghi có sau quyết toán. Sử dụng pacs.007 khi bên khởi tạo phát hiện lỗi, trùng lặp hoặc gian lận.

### Khi nào nên sử dụng pacs.028 thay vì chờ pacs.002?

Sử dụng pacs.028 khi cần chủ động yêu cầu trạng thái thanh toán chưa nhận được cập nhật pacs.002 kịp thời. pacs.002 được kích hoạt theo sự kiện (đại lý nhận gửi chủ động), trong khi pacs.028 được kích hoạt theo ngoại lệ (đại lý chỉ thị yêu cầu). Sử dụng pacs.028 cho các cập nhật thanh toán bị trễ, không rõ ràng hoặc thiếu, không dùng như lưu lượng thông thường.

### pacs.003 dùng để làm gì?

pacs.003 mang lệnh ghi nợ trực tiếp khách hàng giữa các ngân hàng. Đại lý bên có gửi cho đại lý bên nợ để thu tiền. Yêu cầu tham chiếu ủy nhiệm hợp lệ và hỗ trợ các lược đồ ghi nợ trực tiếp SEPA Core và B2B. Không được sử dụng cho chuyển khoản tín dụng hay ghi nợ trực tiếp tài khoản riêng giữa các tổ chức.

### pacs.010 dùng để làm gì?

pacs.010 xử lý ghi nợ trực tiếp giữa các tổ chức tài chính trên tài khoản riêng. Được sử dụng cho thu tiền liên ngân hàng như phí, yêu cầu ký quỹ và các nghĩa vụ tương tự theo thỏa thuận song phương. Không được sử dụng cho ghi nợ trực tiếp khách hàng hay chuyển khoản tín dụng.

## Cấu trúc thông điệp

### Group Header (GrpHdr) là gì?

Group Header xuất hiện đúng một lần trong mỗi thông điệp pacs. Chứa mã nhận dạng thông điệp (MsgId), dấu thời gian tạo (CreDtTm), số lượng giao dịch (NbOfTxs), thông tin quyết toán (SttlmInf), và tùy chọn tổng số tiền quyết toán liên ngân hàng cùng thông tin loại thanh toán. Nó nhận dạng phong bì thông điệp, không phải các giao dịch kinh doanh riêng lẻ.

### Các mã nhận dạng thanh toán trong pacs.008?

pacs.008 sử dụng bốn mã nhận dạng chính. MsgId nhận dạng phong bì thông điệp và thay đổi ở mỗi bước nhảy. InstrId là tham chiếu điểm-đến-điểm giữa các đại lý kề nhau và có thể thay đổi ở mỗi bước nhảy. EndToEndId do bên khởi tạo thiết lập và không được thay đổi bởi bất kỳ đại lý nào trong chuỗi. TxId do đại lý chỉ thị đầu tiên gán và giữ nguyên trong không gian liên ngân hàng. UETR là UUID giữ nguyên qua tất cả các chặng để theo dõi đầu-cuối.

### Có những phương thức quyết toán nào?

Bốn phương thức quyết toán được định nghĩa. CLRG quyết toán qua hệ thống bù trừ như TARGET2, EURO1 hoặc CHIPS. INDA quyết toán trên sổ sách của đại lý được chỉ thị nơi đại lý bên nợ giữ tài khoản. INGA quyết toán trên sổ sách của đại lý chỉ thị nơi đại lý được chỉ thị giữ tài khoản. COVE quyết toán qua thanh toán bảo đảm riêng được mang bởi pacs.009.

### Các mã bên chịu phí có ý nghĩa gì?

DEBT nghĩa là tất cả phí do bên nợ chịu (tương đương MT103 OUR). CRED nghĩa là tất cả phí do bên có chịu (tương đương BEN). SHAR nghĩa là phí được chia sẻ giữa đại lý bên nợ và bên có (tương đương SHA). SLEV nghĩa là phí tuân theo quy tắc mức dịch vụ và bắt buộc cho chuyển khoản tín dụng SEPA.

## CBPR+ và chuyển đổi

### CBPR+ là gì?

CBPR+ (Cross-Border Payments and Reporting Plus) là chương trình của SWIFT áp dụng ISO 20022 cho nhắn tin thanh toán xuyên biên giới. Hoạt động từ tháng 3 năm 2023 và thay thế thông điệp MT bằng các thông điệp pacs tương đương. CBPR+ bắt buộc pacs.002 cho mọi giao tiếp trạng thái, hỗ trợ dữ liệu bên phong phú hơn và địa chỉ có cấu trúc, đồng thời sử dụng theo dõi dựa trên UETR qua gpi.

### Giai đoạn cùng tồn tại MT/MX ra sao?

Giai đoạn cùng tồn tại cho lệnh thanh toán xuyên biên giới kết thúc vào tháng 11 năm 2025. Từ đó, thông điệp CBPR+ phải sử dụng định dạng ISO 20022 (MX). Các dịch vụ chuyển đổi giữa MT và MX trong giai đoạn chuyển tiếp không còn khả dụng cho luồng mới. Ngân hàng phải gửi và nhận thông điệp pacs gốc.

### Hạn chót địa chỉ có cấu trúc tháng 11 năm 2026 là gì?

Từ tháng 11 năm 2026, SWIFT CBPR+ yêu cầu địa chỉ bưu điện có cấu trúc trong thông điệp thanh toán xuyên biên giới. Dòng địa chỉ không có cấu trúc (chỉ AdrLine) sẽ không còn được chấp nhận cho các trường bên chính. Tối thiểu cần TwnNm và Ctry, khuyến nghị thêm StrtNm và BldgNb hoặc PstBx. Điều này cải thiện sàng lọc trừng phạt và giảm sửa chữa thủ công.

### pacs.008 thay thế MT103 như thế nào?

pacs.008 thay thế MT103 và MT103+ cho chuyển khoản tín dụng khách hàng. Ánh xạ chính: trường 20 MT103 tương ứng MsgId hoặc InstrId; trường 32A chia thành IntrBkSttlmDt và IntrBkSttlmAmt; trường 50a tương ứng Dbtr và DbtrAcct; trường 59a tương ứng Cdtr và CdtrAcct; trường 70 tương ứng RmtInf; trường 71A tương ứng ChrgBr. pacs.008 bổ sung UETR, thông tin chuyển tiền có cấu trúc, nhận dạng LEI và hỗ trợ nhiều giao dịch trong một thông điệp.

### pacs.009 thay thế MT202 như thế nào?

pacs.009 thay thế MT202 và MT202COV cho chuyển khoản giữa các tổ chức. Trong luồng bảo đảm, MT202COV (mang cả cấp vốn lẫn dữ liệu khách hàng cơ sở) được tách rõ ràng: pacs.009 mang phần cấp vốn trong khi pacs.008 mang lệnh khách hàng trực tiếp. Việc tách biệt này cải thiện chất lượng dữ liệu và giảm các vấn đề đối soát.

## Chi tiết kỹ thuật

### Địa chỉ có cấu trúc và không có cấu trúc là gì?

Địa chỉ có cấu trúc sử dụng các phần tử XML riêng biệt cho từng thành phần: StrtNm (đường), BldgNb (số tòa nhà), PstCd (mã bưu điện), TwnNm (thành phố), Ctry (quốc gia), và các phần tử tùy chọn như Flr, Room và DstrctNm. Địa chỉ không có cấu trúc sử dụng tối đa bảy phần tử AdrLine với văn bản tự do. Địa chỉ lai kết hợp cả hai trong giai đoạn chuyển tiếp. Sau tháng 11 năm 2026, CBPR+ yêu cầu định dạng có cấu trúc.

### UETR là gì và theo dõi gpi hoạt động ra sao?

UETR (Unique End-to-End Transaction Reference) là mã nhận dạng UUID v4 do đại lý bên nợ tạo và được mang không thay đổi qua tất cả các chặng của thanh toán. Xuất hiện trong pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 và pacs.028. SWIFT gpi sử dụng UETR để theo dõi thanh toán qua cơ sở dữ liệu Tracker trên đám mây. Mỗi đại lý xác nhận đã nhận và xử lý, cho phép khả năng hiển thị đầu-cuối và giám sát SLA.

### Các mã trạng thái pacs.002 phổ biến?

ACCP nghĩa là đã chấp nhận sau kiểm tra hồ sơ khách hàng. ACSP nghĩa là đã chấp nhận và quyết toán đang diễn ra. ACSC nghĩa là quyết toán trên tài khoản bên nợ đã hoàn tất. RJCT nghĩa là bị từ chối (kèm mã lý do trong StsRsnInf). PDNG nghĩa là đang chờ xử lý tiếp. RCVD nghĩa là đã nhận nhưng chưa xử lý. Mỗi trạng thái có thể bao gồm mã lý do có cấu trúc như AC01 (số tài khoản sai), AM04 (không đủ tiền) hoặc RC01 (BIC sai).

### Các mã lý do hoàn trả pacs.004 phổ biến?

Các mã lý do hoàn trả thường gặp bao gồm AC01 (số tài khoản sai), AC04 (tài khoản đã đóng), AC06 (tài khoản bị phong tỏa), AM04 (không đủ tiền), BE04 (thiếu địa chỉ bên có), CUST (theo yêu cầu khách hàng), DUPL (thanh toán trùng lặp), FOCR (sau yêu cầu hủy) và FR01 (gian lận). Danh sách đầy đủ được định nghĩa trong ISO 20022 External Code Sets.

### Thông tin chuyển tiền có cấu trúc là gì?

Thông tin chuyển tiền có cấu trúc trong pacs.008 sử dụng phần tử RmtInf/Strd để mang tham chiếu tài liệu (số hóa đơn, giấy báo có), số tiền (đến hạn, đã chuyển, thuế, chiết khấu) và tham chiếu bên có (tham chiếu RF theo ISO 11649). Điều này cho phép đối chiếu hóa đơn tự động và đối soát. Các mã loại tài liệu phổ biến bao gồm CINV (hóa đơn thương mại), CREN (giấy báo có) và SOAC (sao kê tài khoản).

### LEI là gì và khi nào được sử dụng?

LEI (Legal Entity Identifier) là mã chữ-số 20 ký tự theo ISO 17442. Mã này nhận dạng duy nhất các pháp nhân tham gia giao dịch tài chính. Trong thông điệp pacs, LEI xuất hiện trong OrgId/LEI cho các bên và FinInstnId/LEI cho các đại lý. CBPR+ ngày càng khuyến khích sử dụng LEI để nhận dạng bên và đại lý. LEI cải thiện việc phân biệt thực thể và hỗ trợ các yêu cầu báo cáo pháp quy.

## Về bộ công cụ pacs008

### pacs008 làm gì?

pacs008 là bộ công cụ Python tạo, xác thực và gửi thông điệp thanh toán ISO 20022. Đọc dữ liệu thanh toán từ nguồn CSV, JSON, JSONL, SQLite và Parquet, xác thực theo JSON Schema và XSD, kiểm tra mã nhận dạng IBAN và BIC, làm sạch dữ liệu cho tuân thủ ký tự SWIFT, và xuất tệp XML. Cung cấp REST API, CLI và thư viện Python.

### pacs008 hỗ trợ những loại thông điệp nào?

pacs008 hỗ trợ tám loại thông điệp: pacs.002.001.12 (báo cáo trạng thái), pacs.003.001.09 (ghi nợ trực tiếp khách hàng), pacs.004.001.11 (hoàn trả thanh toán), pacs.007.001.11 (đảo ngược thanh toán), pacs.008.001.13 (chuyển khoản tín dụng khách hàng), pacs.009.001.10 (chuyển khoản tín dụng tổ chức tài chính), pacs.010.001.05 (ghi nợ trực tiếp tổ chức tài chính) và pacs.028.001.05 (yêu cầu trạng thái thanh toán).

### pacs008 giúp gì cho hạn chót địa chỉ có cấu trúc 2026?

pacs008 xác thực các trường địa chỉ bưu điện có cấu trúc và lai trước khi tạo XML. Đánh dấu dữ liệu địa chỉ không có cấu trúc sẽ bị lỗi sau hạn chót tháng 11 năm 2026, hỗ trợ định dạng lai trước hạn chót và định dạng chỉ có cấu trúc sau hạn chót, đồng thời tích hợp kiểm tra chất lượng địa chỉ vào pipeline CI và quy trình xác thực hàng loạt.

### pacs008 có thể xác thực dữ liệu mà không tạo XML không?

Có. Sử dụng cờ CLI `--dry-run` hoặc endpoint API `POST /validate` để xác thực dữ liệu thanh toán mà không tạo XML. Pipeline xác thực kiểm tra tuân thủ JSON Schema, định dạng và checksum IBAN, cấu trúc BIC và tuân thủ ký tự SWIFT. Mã thoát hoặc phản hồi API cho biết xác thực thành công hay thất bại.

## Tham khảo

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

