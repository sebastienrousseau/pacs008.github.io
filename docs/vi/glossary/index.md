---
title: "Bảng thuật ngữ ISO 20022 | pacs008"
description: Định nghĩa các thuật ngữ chính về ISO 20022 và thông điệp thanh toán được sử dụng trong pacs.008 và các thông điệp liên quan.
lang: vi-VN
lastUpdated: true
image: /logo.svg
---

# Bảng thuật ngữ ISO 20022

Bảng thuật ngữ này định nghĩa các thuật ngữ chính, viết tắt và khái niệm kỹ thuật được sử dụng trong các thông điệp pacs theo ISO 20022 và trên trang web này.

## A

**ACH** — Automated Clearing House (Phòng bù trừ tự động). Mạng lưới xử lý thanh toán điện tử theo lô giữa các tổ chức tài chính.

**AdrLine** — Address Line (Dòng địa chỉ). Trường địa chỉ văn bản tự do trong cấu trúc địa chỉ bưu chính ISO 20022. Tối đa 7 dòng, mỗi dòng 70 ký tự. Đang được thay thế bằng các phần tử địa chỉ có cấu trúc cho CBPR+ vào tháng 11 năm 2026.

**ACCP** — Accepted Customer Profile (Hồ sơ khách hàng được chấp nhận). Mã trạng thái pacs.002 cho biết các kiểm tra trước đó (cú pháp, hồ sơ khách hàng) đã vượt qua.

**ACSC** — Accepted Settlement Completed (Quyết toán hoàn tất). Mã trạng thái pacs.002 xác nhận quyết toán trên tài khoản bên ghi nợ đã hoàn thành.

**ACSP** — Accepted Settlement in Process (Quyết toán đang xử lý). Mã trạng thái pacs.002 cho biết tất cả kiểm tra đã vượt qua và quyết toán đang tiến hành.

## B

**BAH** — Business Application Header (head.001). Phong bì chuẩn hóa bao bọc thông điệp kinh doanh ISO 20022 để vận chuyển qua SWIFT. Chứa thông tin định tuyến, mã định danh định nghĩa thông điệp và BIC người gửi/nhận.

**BIC** — Business Identifier Code (ISO 9362). Mã 8 hoặc 11 ký tự nhận dạng duy nhất một tổ chức tài chính. Định dạng: BBBBCCLL (mã ngân hàng + quốc gia + vị trí) với mã chi nhánh BBB tùy chọn.

## C

**CBPR+** — Cross-Border Payments and Reporting Plus. Chương trình của SWIFT cho việc di chuyển thông điệp thanh toán xuyên biên giới từ MT sang ISO 20022. Đi vào hoạt động tháng 3 năm 2023.

**CdtTrfTxInf** — Credit Transfer Transaction Information. Khối xây dựng chính cấp giao dịch trong pacs.008 chứa chi tiết thanh toán, các bên, số tiền và thông tin chuyển tiền.

**ChrgBr** — Charge Bearer (Người chịu phí). Xác định ai trả phí giao dịch. Giá trị: DEBT (bên ghi nợ), CRED (bên thụ hưởng), SHAR (chia sẻ), SLEV (mức dịch vụ, chỉ SEPA).

**CLRG** — Quyết toán qua hệ thống bù trừ. Phương thức quyết toán trong đó vốn di chuyển qua hệ thống bù trừ như TARGET2, EURO1 hoặc CHIPS.

**COVE** — Quyết toán phương thức bảo lãnh. Phương thức quyết toán trong đó thanh toán bảo lãnh pacs.009 riêng biệt xử lý cấp vốn giữa các ngân hàng đại lý trong khi pacs.008 mang dữ liệu khách hàng trực tiếp.

**CSM** — Clearing and Settlement Mechanism (Cơ chế bù trừ và quyết toán). Cơ sở hạ tầng xử lý và quyết toán lệnh thanh toán giữa các tổ chức tham gia.

## D

**Dbtr** — Debtor (Bên ghi nợ). Bên nợ vốn và khởi tạo thanh toán. Trong pacs.008, phần tử Dbtr chứa tên, địa chỉ bưu chính, nhận dạng và quốc gia cư trú của bên ghi nợ.

**DbtrAgt** — Debtor Agent (Đại lý bên ghi nợ). Tổ chức tài chính phục vụ tài khoản bên ghi nợ và gửi lệnh pacs.008.

## E–X

**E2E ID** — End-to-End Identification (EndToEndId). Tham chiếu do bên khởi tạo gán phải giữ nguyên qua tất cả đại lý trong chuỗi thanh toán. Dùng cho khả năng truy vết cấp khách hàng.

**EPC** — European Payments Council (Hội đồng Thanh toán Châu Âu). Cơ quan quản lý sách quy tắc kế hoạch thanh toán SEPA cho chuyển khoản tín dụng và ghi nợ trực tiếp.

**FI** — Financial Institution (Tổ chức tài chính). Ngân hàng hoặc tổ chức khác tham gia bù trừ và quyết toán thanh toán.

**FIToFI** — Financial Institution to Financial Institution. Mô tả miền liên ngân hàng nơi thông điệp pacs vận hành.

**gpi** — Global Payments Innovation. Sáng kiến của SWIFT cho thanh toán xuyên biên giới nhanh hơn, minh bạch hơn. Sử dụng UETR cho theo dõi đầu cuối qua Tracker dựa trên đám mây.

**GrpHdr** — Group Header. Khối siêu dữ liệu cấp thông điệp trong thông điệp pacs. Chứa MsgId, CreDtTm, NbOfTxs, thông tin quyết toán và thông tin loại thanh toán.

**IBAN** — International Bank Account Number (ISO 13616). Định dạng số tài khoản chuẩn hóa cho thanh toán xuyên biên giới và nội địa. Xác thực bằng checksum ISO 7064 Mod 97-10.

**ISO 20022** — Tiêu chuẩn quốc tế cho trao đổi dữ liệu điện tử giữa các tổ chức tài chính. Định nghĩa mô hình dữ liệu chung và định dạng thông điệp dựa trên XML cho thanh toán, chứng khoán, tài trợ thương mại và các lĩnh vực tài chính khác.

**LEI** — Legal Entity Identifier (ISO 17442). Mã chữ số 20 ký tự nhận dạng duy nhất các thực thể pháp lý tham gia giao dịch tài chính. Sử dụng trong OrgId/LEI cho các bên và FinInstnId/LEI cho đại lý.

**MsgId** — Message Identification. Mã định danh duy nhất cho phong bì thông điệp, được gán bởi đại lý gửi. Thay đổi tại mỗi chặng trong chuỗi thanh toán.

**pacs** — Payments Clearing and Settlement. Miền kinh doanh ISO 20022 bao gồm thông điệp thanh toán liên ngân hàng.

**pacs.008** — Chuyển khoản tín dụng khách hàng FI tới FI. Thông điệp liên ngân hàng chính cho chuyển khoản tín dụng khách hàng. Thay thế MT103.

**RTGS** — Real-Time Gross Settlement. Hệ thống thanh toán trong đó giao dịch được quyết toán riêng lẻ và theo thời gian thực (ví dụ: TARGET2, Fedwire, CHAPS).

**SEPA** — Single Euro Payments Area. Sáng kiến tích hợp thanh toán bao gồm chuyển khoản tín dụng, ghi nợ trực tiếp và thanh toán thẻ bằng euro tại 36 quốc gia Châu Âu.

**UETR** — Unique End-to-End Transaction Reference. Mã định danh UUID v4 được tạo bởi đại lý ghi nợ và mang không thay đổi qua tất cả chặng của thanh toán cho theo dõi gpi.

**XSD** — XML Schema Definition. Lược đồ chính thức định nghĩa cấu trúc, phần tử và kiểu dữ liệu của thông điệp XML ISO 20022.

**XXE** — XML External Entity. Lỗ hổng bảo mật trong phân tích XML. pacs008 ngăn chặn tấn công XXE bằng defusedxml.

## Tham khảo

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)
