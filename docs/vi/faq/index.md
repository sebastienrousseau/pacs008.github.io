---
title: "Câu hỏi thường gặp | pacs008"
description: Các câu hỏi phổ biến về thông điệp pacs theo ISO 20022, di chuyển CBPR+, lựa chọn thông điệp, triển khai và bộ công cụ pacs008.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# Câu hỏi thường gặp

Trang này trả lời các câu hỏi phổ biến về thông điệp pacs theo ISO 20022, cách chúng phối hợp với nhau và pacs008 hỗ trợ các nhóm triển khai như thế nào.

## Tổng quan

### ISO 20022 là gì?

ISO 20022 là tiêu chuẩn quốc tế cho tin nhắn tài chính. Nó định nghĩa một ngôn ngữ và mô hình chung cho các thông điệp thanh toán được trao đổi giữa các tổ chức tài chính. Khác với các định dạng cũ như SWIFT MT, ISO 20022 sử dụng XML và hỗ trợ dữ liệu phong phú, có cấu trúc hơn cho các bên, số tiền và tham chiếu.

### Thông điệp pacs là gì?

Họ thông điệp pacs (payments clearing and settlement) bao gồm các lệnh thanh toán liên ngân hàng, báo cáo trạng thái, hoàn trả, đảo ngược và truy vấn. Nó bao gồm pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 và pacs.028. Mỗi thông điệp đảm nhận một vai trò cụ thể trong vòng đời thanh toán.

### Thông điệp pacs khác gì so với thông điệp SWIFT MT?

Thông điệp SWIFT MT sử dụng định dạng phẳng với thẻ trường (ví dụ: MT103 cho chuyển khoản tín dụng khách hàng). Thông điệp pacs sử dụng XML phân cấp với cấu trúc dữ liệu phong phú hơn. Các khác biệt chính bao gồm hỗ trợ nhiều giao dịch trong một thông điệp, nhận dạng bên có cấu trúc (LEI, nhiều ID), địa chỉ bưu chính có cấu trúc và thông tin chuyển tiền có cấu trúc. MT103 tương ứng với pacs.008, MT202 với pacs.009 và văn bản trạng thái MT199 được thay thế bằng pacs.002.

### Mối quan hệ giữa thông điệp pain và pacs là gì?

Thông điệp pain (payment initiation) truyền giữa khách hàng và ngân hàng. Thông điệp pacs truyền giữa các ngân hàng. Khởi tạo chuyển khoản tín dụng pain.001 từ ngân hàng bên ghi nợ trở thành lệnh liên ngân hàng pacs.008. Hai miền chia sẻ các phần tử dữ liệu chung nhưng phục vụ các phần khác nhau của chuỗi thanh toán.

## Lựa chọn thông điệp

### Khi nào nên sử dụng pacs.008?

Sử dụng pacs.008 cho các lệnh chuyển khoản tín dụng khách hàng giữa các ngân hàng. Nó mang dữ liệu bên ghi nợ và bên thụ hưởng, số tiền, thông tin chuyển tiền và chi tiết quyết toán. Đây là thông điệp chính để gửi thanh toán khách hàng qua mạng liên ngân hàng, dù là nội địa (SEPA) hay xuyên biên giới (CBPR+).

### Khi nào nên sử dụng pacs.009 thay vì pacs.008?

Sử dụng pacs.009 cho chuyển khoản tài khoản riêng của tổ chức, chặng cấp vốn và thanh toán bảo lãnh. Khác với pacs.008 mang thanh toán khách hàng thay mặt bên ghi nợ, pacs.009 di chuyển vốn giữa các ngân hàng cho chính họ. Trong luồng phương thức bảo lãnh, pacs.009 mang cấp vốn trong khi pacs.008 mang lệnh khách hàng trên đường riêng biệt.

### Sự khác biệt giữa pacs.004 và pacs.007 là gì?

pacs.004 hoàn trả vốn đã quyết toán từ phía nhận ngược qua chuỗi. pacs.007 đảo ngược thanh toán từ phía gửi ban đầu về phía trước qua chuỗi. Sử dụng pacs.004 khi ngân hàng thụ hưởng không thể ghi có sau quyết toán. Sử dụng pacs.007 khi bên khởi tạo phát hiện lỗi, trùng lặp hoặc gian lận.

### Khi nào nên sử dụng pacs.028 thay vì chờ pacs.002?

Sử dụng pacs.028 khi cần chủ động yêu cầu trạng thái thanh toán chưa nhận được cập nhật pacs.002 kịp thời. pacs.002 được kích hoạt bởi sự kiện (đại lý nhận gửi chủ động), trong khi pacs.028 được kích hoạt bởi ngoại lệ (đại lý gửi lệnh yêu cầu). Sử dụng pacs.028 cho các cập nhật thanh toán bị trễ, không rõ ràng hoặc thiếu, không phải như lưu lượng thường xuyên.

### pacs.003 được sử dụng để làm gì?

pacs.003 mang lệnh ghi nợ trực tiếp khách hàng giữa các ngân hàng. Đại lý bên thụ hưởng gửi đến đại lý bên ghi nợ để thu tiền. Yêu cầu tham chiếu ủy quyền hợp lệ và hỗ trợ các sơ đồ ghi nợ trực tiếp SEPA Core và B2B. Không sử dụng cho chuyển khoản tín dụng hoặc ghi nợ tài khoản riêng của tổ chức.

### pacs.010 được sử dụng để làm gì?

pacs.010 xử lý ghi nợ trực tiếp giữa các tổ chức tài chính trên tài khoản riêng. Được sử dụng cho thu tiền giữa ngân hàng như phí, yêu cầu ký quỹ và các nghĩa vụ tương tự theo thỏa thuận song phương. Không sử dụng cho ghi nợ trực tiếp khách hàng hoặc chuyển khoản tín dụng.

## Cấu trúc thông điệp

### Group Header (GrpHdr) là gì?

Group Header xuất hiện đúng một lần trong mỗi thông điệp pacs. Chứa mã định danh thông điệp (MsgId), dấu thời gian tạo (CreDtTm), số lượng giao dịch (NbOfTxs), thông tin quyết toán (SttlmInf) và tùy chọn tổng số tiền quyết toán liên ngân hàng và thông tin loại thanh toán. Xác định phong bì thông điệp, không phải các giao dịch kinh doanh riêng lẻ.

### Các mã định danh thanh toán trong pacs.008 là gì?

pacs.008 sử dụng bốn mã định danh chính. MsgId xác định phong bì thông điệp và thay đổi tại mỗi chặng. InstrId là tham chiếu điểm-đến-điểm giữa các đại lý kề nhau và có thể thay đổi mỗi chặng. EndToEndId được đặt bởi bên khởi tạo và không được thay đổi bởi bất kỳ đại lý nào trong chuỗi. TxId được gán bởi đại lý gửi lệnh đầu tiên và giữ nguyên trong không gian liên ngân hàng. UETR là UUID giữ nguyên qua tất cả các chặng để theo dõi đầu cuối.

### Có những phương thức quyết toán nào?

Bốn phương thức quyết toán được định nghĩa. CLRG quyết toán qua hệ thống bù trừ như TARGET2, EURO1 hoặc CHIPS. INDA quyết toán trên sổ sách của đại lý được chỉ thị nơi đại lý ghi nợ giữ tài khoản. INGA quyết toán trên sổ sách của đại lý gửi chỉ thị nơi đại lý được chỉ thị giữ tài khoản. COVE quyết toán qua thanh toán bảo lãnh riêng biệt mang bởi pacs.009.

### Các mã người chịu phí có nghĩa gì?

DEBT nghĩa là tất cả phí do bên ghi nợ chịu (tương đương MT103 OUR). CRED nghĩa là tất cả phí do bên thụ hưởng chịu (tương đương BEN). SHAR nghĩa là phí được chia sẻ giữa đại lý bên ghi nợ và bên thụ hưởng (tương đương SHA). SLEV nghĩa là phí theo quy tắc mức dịch vụ và bắt buộc cho chuyển khoản tín dụng SEPA.

## CBPR+ và di chuyển

### CBPR+ là gì?

CBPR+ (Cross-Border Payments and Reporting Plus) là chương trình của SWIFT để áp dụng ISO 20022 trong tin nhắn thanh toán xuyên biên giới. Đi vào hoạt động tháng 3 năm 2023 và thay thế thông điệp MT bằng các tương đương pacs. CBPR+ bắt buộc pacs.002 cho mọi giao tiếp trạng thái, hỗ trợ dữ liệu bên phong phú hơn và địa chỉ có cấu trúc, sử dụng theo dõi dựa trên UETR qua gpi.

### Điều gì xảy ra với giai đoạn chung sống MT/MX?

Giai đoạn chung sống cho lệnh thanh toán xuyên biên giới kết thúc vào tháng 11 năm 2025. Từ đó, thông điệp CBPR+ phải sử dụng định dạng ISO 20022 (MX). Dịch vụ chuyển đổi giữa MT và MX trong quá trình chuyển tiếp không còn khả dụng cho luồng mới. Ngân hàng phải gửi và nhận thông điệp pacs gốc.

### Hạn chót địa chỉ có cấu trúc tháng 11 năm 2026 là gì?

Từ tháng 11 năm 2026, SWIFT CBPR+ yêu cầu địa chỉ bưu chính có cấu trúc trong thông điệp thanh toán xuyên biên giới. Dòng địa chỉ không có cấu trúc (chỉ AdrLine) sẽ không còn được chấp nhận cho các trường bên chính. Tối thiểu cần TwnNm và Ctry, khuyến nghị StrtNm và BldgNb hoặc PstBx. Điều này cải thiện sàng lọc trừng phạt và giảm sửa chữa thủ công.

### pacs.008 thay thế MT103 như thế nào?

pacs.008 thay thế MT103 và MT103+ cho chuyển khoản tín dụng khách hàng. Ánh xạ chính: trường MT103 20 tương ứng MsgId hoặc InstrId; trường 32A tách thành IntrBkSttlmDt và IntrBkSttlmAmt; trường 50a tương ứng Dbtr và DbtrAcct; trường 59a tương ứng Cdtr và CdtrAcct; trường 70 tương ứng RmtInf; trường 71A tương ứng ChrgBr. pacs.008 thêm UETR, chuyển tiền có cấu trúc, nhận dạng LEI và hỗ trợ nhiều giao dịch trong một thông điệp.

### pacs.009 thay thế MT202 như thế nào?

pacs.009 thay thế MT202 và MT202COV cho chuyển khoản giữa các tổ chức. Trong luồng phương thức bảo lãnh, MT202COV (mang cả cấp vốn và dữ liệu khách hàng cơ bản) tách rõ ràng: pacs.009 mang chặng cấp vốn trong khi pacs.008 mang lệnh khách hàng trực tiếp. Sự tách biệt này cải thiện chất lượng dữ liệu và giảm vấn đề đối chiếu.

## Chi tiết kỹ thuật

### Địa chỉ có cấu trúc và không có cấu trúc là gì?

Địa chỉ có cấu trúc sử dụng các phần tử XML riêng biệt cho mỗi thành phần: StrtNm (đường), BldgNb (số tòa nhà), PstCd (mã bưu chính), TwnNm (thành phố), Ctry (quốc gia) và các phần tử tùy chọn như Flr, Room và DstrctNm. Địa chỉ không có cấu trúc sử dụng tối đa bảy phần tử AdrLine với văn bản tự do. Địa chỉ lai kết hợp cả hai trong giai đoạn chuyển tiếp. Sau tháng 11 năm 2026, CBPR+ yêu cầu định dạng có cấu trúc.

### UETR là gì và theo dõi gpi hoạt động như thế nào?

UETR (Unique End-to-End Transaction Reference) là mã định danh UUID v4 được tạo bởi đại lý ghi nợ và mang không thay đổi qua tất cả chặng của thanh toán. Xuất hiện trong pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 và pacs.028. SWIFT gpi sử dụng UETR để theo dõi thanh toán qua cơ sở dữ liệu Tracker trên đám mây. Mỗi đại lý xác nhận nhận và xử lý, cho phép hiển thị đầu cuối và giám sát SLA.

### Các mã trạng thái pacs.002 phổ biến là gì?

ACCP nghĩa là chấp nhận sau kiểm tra hồ sơ khách hàng. ACSP nghĩa là chấp nhận và quyết toán đang tiến hành. ACSC nghĩa là quyết toán trên tài khoản bên ghi nợ hoàn tất. RJCT nghĩa là từ chối (với mã lý do trong StsRsnInf). PDNG nghĩa là đang chờ xử lý thêm. RCVD nghĩa là đã nhận nhưng chưa xử lý. Mỗi trạng thái có thể bao gồm mã lý do có cấu trúc như AC01 (tài khoản không đúng), AM04 (không đủ vốn) hoặc RC01 (BIC không đúng).

### Các mã lý do hoàn trả phổ biến trong pacs.004 là gì?

Các mã lý do hoàn trả thường gặp bao gồm AC01 (số tài khoản không đúng), AC04 (tài khoản đã đóng), AC06 (tài khoản bị khóa), AM04 (không đủ vốn), BE04 (thiếu địa chỉ bên thụ hưởng), CUST (theo yêu cầu khách hàng), DUPL (thanh toán trùng), FOCR (sau yêu cầu hủy) và FR01 (gian lận). Danh sách đầy đủ được định nghĩa trong ISO 20022 External Code Sets.

### Thông tin chuyển tiền có cấu trúc là gì?

Chuyển tiền có cấu trúc trong pacs.008 sử dụng phần tử RmtInf/Strd để mang tham chiếu tài liệu (số hóa đơn, giấy báo có), số tiền (đến hạn, đã chuyển, thuế, chiết khấu) và tham chiếu bên thụ hưởng (tham chiếu RF theo ISO 11649). Điều này cho phép đối chiếu hóa đơn tự động và hòa giải. Các mã loại tài liệu phổ biến bao gồm CINV (hóa đơn thương mại), CREN (giấy báo có) và SOAC (sao kê tài khoản).

### LEI là gì và khi nào được sử dụng?

LEI (Legal Entity Identifier) là mã chữ số 20 ký tự theo ISO 17442. Nó nhận dạng duy nhất các thực thể pháp lý tham gia giao dịch tài chính. Trong thông điệp pacs, LEI xuất hiện trong OrgId/LEI cho các bên và FinInstnId/LEI cho đại lý. CBPR+ ngày càng khuyến khích LEI cho nhận dạng bên và đại lý. Nó cải thiện phân biệt thực thể và hỗ trợ yêu cầu báo cáo quy định.

## Về bộ công cụ pacs008

### pacs008 làm gì?

pacs008 là bộ công cụ Python tạo, xác thực và gửi thông điệp thanh toán ISO 20022. Đọc dữ liệu thanh toán từ nguồn CSV, JSON, JSONL, SQLite và Parquet, xác thực theo JSON Schema và XSD, kiểm tra mã định danh IBAN và BIC, làm sạch dữ liệu cho tuân thủ ký tự SWIFT và xuất tệp XML. Cung cấp REST API, CLI và thư viện Python.

### pacs008 hỗ trợ những loại thông điệp nào?

pacs008 hỗ trợ tám loại thông điệp: pacs.002.001.12 (báo cáo trạng thái), pacs.003.001.09 (ghi nợ trực tiếp khách hàng), pacs.004.001.11 (hoàn trả thanh toán), pacs.007.001.11 (đảo ngược thanh toán), pacs.008.001.13 (chuyển khoản tín dụng khách hàng), pacs.009.001.10 (chuyển khoản tín dụng tổ chức tài chính), pacs.010.001.05 (ghi nợ trực tiếp tổ chức tài chính) và pacs.028.001.05 (yêu cầu trạng thái thanh toán).

### pacs008 giúp gì cho hạn chót địa chỉ có cấu trúc 2026?

pacs008 xác thực các trường địa chỉ bưu chính có cấu trúc và lai trước khi tạo XML. Đánh dấu dữ liệu địa chỉ không có cấu trúc sẽ thất bại sau hạn chót tháng 11 năm 2026, hỗ trợ cả định dạng lai trước hạn chót và chỉ có cấu trúc sau hạn chót, tích hợp kiểm tra chất lượng địa chỉ vào pipeline CI và quy trình xác thực hàng loạt.

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
