---
title: "Thuật ngữ ISO 20022 | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages. Covers SWIFT, CBPR+, IBAN, BIC, settlement methods, and...
lang: vi-VN
lastUpdated: true
image: /logo.webp
---

# Thuật ngữ ISO 20022

This glossary defines the key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Nhà thanh toán bù trừ tự động. Mạng lưới xử lý thanh toán điện tử hàng loạt giữa các tổ chức tài chính.

**AdrLine** — Dòng địa chỉ. Trường văn bản tự do trong cấu trúc địa chỉ bưu điện ISO 20022. Tối đa 7 dòng, mỗi dòng 70 ký tự. Đang được thay thế bằng phần tử địa chỉ có cấu trúc cho CBPR+ vào tháng 11 năm 2026.

**ACCP** — Hồ sơ khách hàng được chấp nhận. Mã trạng thái pacs.002 cho biết các kiểm tra trước đó (cú pháp, hồ sơ khách hàng) đã đạt.

**ACSC** — Thanh toán bù trừ được chấp nhận đã hoàn tất. Mã trạng thái pacs.002 xác nhận việc quyết toán trên tài khoản bên nợ đã hoàn tất.

**ACSP** — Thanh toán bù trừ được chấp nhận đang xử lý. Mã trạng thái pacs.002 cho biết tất cả kiểm tra đã đạt và quyết toán đang được tiến hành.

## B

**BAH** — Tiêu đề ứng dụng kinh doanh (head.001). Phong bì chuẩn hóa bao bọc thông điệp kinh doanh ISO 20022 để vận chuyển qua SWIFT. Chứa thông tin định tuyến, mã định danh định nghĩa thông điệp và BIC của bên gửi/bên nhận.

**BIC** — Mã định danh doanh nghiệp (ISO 9362). Mã 8 hoặc 11 ký tự xác định duy nhất một tổ chức tài chính. Định dạng: BBBBCCLL (mã ngân hàng + quốc gia + vị trí) với mã chi nhánh BBB tùy chọn.

## C

**CBPR+** — Thanh toán và báo cáo xuyên biên giới Plus. Chương trình của SWIFT chuyển đổi thông điệp thanh toán xuyên biên giới từ MT sang ISO 20022. Hoạt động từ tháng 3 năm 2023.

**CdtTrfTxInf** — Thông tin giao dịch chuyển khoản tín dụng. Khối xây dựng chính ở cấp giao dịch trong pacs.008, chứa chi tiết thanh toán, các bên, số tiền và thông tin chuyển tiền.

**ChrgBr** — Bên chịu phí. Xác định ai trả phí giao dịch. Giá trị: DEBT (bên nợ), CRED (bên có), SHAR (chia sẻ), SLEV (mức dịch vụ, chỉ SEPA).

**CLRG** — Quyết toán qua hệ thống thanh toán bù trừ. Phương thức quyết toán trong đó tiền đi qua hệ thống thanh toán bù trừ như TARGET2, EURO1 hoặc CHIPS.

**COVE** — Phương thức bảo đảm. Phương thức quyết toán trong đó một khoản thanh toán bảo đảm pacs.009 riêng biệt xử lý tài trợ giữa các ngân hàng đại lý trong khi pacs.008 mang dữ liệu khách hàng trực tiếp.

**CSM** — Cơ chế thanh toán bù trừ và quyết toán. Hạ tầng xử lý và quyết toán các lệnh thanh toán giữa các tổ chức tham gia.

## D

**Dbtr** — Bên nợ. Bên nợ tiền và khởi tạo thanh toán. Trong pacs.008, phần tử Dbtr chứa tên, địa chỉ bưu điện, nhận dạng và quốc gia cư trú của bên nợ.

**DbtrAgt** — Đại lý bên nợ. Tổ chức tài chính phục vụ tài khoản bên nợ và gửi lệnh pacs.008.

## E

**E2E ID** — Nhận dạng đầu cuối (EndToEndId). Tham chiếu do bên khởi tạo gán và phải giữ nguyên qua tất cả đại lý trong chuỗi thanh toán. Dùng để truy vết ở cấp khách hàng.

**EPC** — Hội đồng thanh toán châu Âu. Cơ quan quản lý bộ quy tắc chương trình thanh toán SEPA cho chuyển khoản tín dụng và ghi nợ trực tiếp.

## F

**FI** — Tổ chức tài chính. Ngân hàng hoặc tổ chức khác tham gia thanh toán bù trừ và quyết toán.

**FIToFI** — Tổ chức tài chính đến tổ chức tài chính. Mô tả lĩnh vực liên ngân hàng nơi các thông điệp pacs hoạt động.

## G

**gpi** — Đổi mới thanh toán toàn cầu. Sáng kiến của SWIFT cho thanh toán xuyên biên giới nhanh hơn, minh bạch hơn. Sử dụng UETR để theo dõi đầu cuối qua Tracker trên đám mây.

**GrpHdr** — Tiêu đề nhóm. Khối siêu dữ liệu cấp thông điệp trong các thông điệp pacs. Chứa MsgId, CreDtTm, NbOfTxs, thông tin quyết toán và thông tin loại thanh toán.

## H

**Hybrid address** — Địa chỉ kết hợp. Định dạng địa chỉ bưu điện kết hợp các phần tử có cấu trúc (StrtNm, TwnNm, Ctry) với các phần tử AdrLine không có cấu trúc. Được phép trong giai đoạn chuyển tiếp trước hạn chót địa chỉ có cấu trúc vào tháng 11 năm 2026.

## I

**IBAN** — Số tài khoản ngân hàng quốc tế (ISO 13616). Định dạng số tài khoản chuẩn hóa dùng cho thanh toán xuyên biên giới và nội địa. Xác thực bằng tổng kiểm tra ISO 7064 Mod 97-10.

**INDA** — Quyết toán đại lý được chỉ thị. Phương thức quyết toán trong đó tiền được quyết toán trên sổ sách của đại lý được chỉ thị, nơi đại lý bên nợ có tài khoản nostro.

**INGA** — Quyết toán đại lý chỉ thị. Phương thức quyết toán trong đó tiền được quyết toán trên sổ sách của đại lý chỉ thị, nơi đại lý được chỉ thị có tài khoản nostro.

**InstrId** — Nhận dạng lệnh. Tham chiếu điểm-đến-điểm giữa các đại lý liền kề trong chuỗi thanh toán. Có thể thay đổi tại mỗi bước.

**IntrBkSttlmAmt** — Số tiền quyết toán liên ngân hàng. Số tiền quyết toán giữa đại lý chỉ thị và đại lý được chỉ thị, bằng đồng tiền quyết toán.

**ISO 20022** — Tiêu chuẩn quốc tế cho trao đổi dữ liệu điện tử giữa các tổ chức tài chính. Định nghĩa mô hình dữ liệu chung và định dạng thông điệp dựa trên XML cho thanh toán, chứng khoán, tài trợ thương mại và các lĩnh vực tài chính khác.

## L

**LEI** — Mã định danh pháp nhân (ISO 17442). Mã chữ-số 20 ký tự xác định duy nhất các pháp nhân tham gia giao dịch tài chính. Dùng trong OrgId/LEI cho các bên và FinInstnId/LEI cho đại lý.

## M

**MsgId** — Nhận dạng thông điệp. Mã định danh duy nhất cho phong bì thông điệp, do đại lý gửi gán. Thay đổi tại mỗi bước trong chuỗi thanh toán.

**MT** — Loại thông điệp. Định dạng thông điệp cũ của SWIFT (ví dụ MT103 cho chuyển khoản tín dụng khách hàng, MT202 cho chuyển khoản tổ chức tài chính). Đang được thay thế bằng thông điệp MX ISO 20022.

**MX** — Định dạng thông điệp XML ISO 20022 do SWIFT sử dụng. Thông điệp MX thay thế thông điệp MT cho thanh toán xuyên biên giới trong CBPR+.

## N

**NbOfTxs** — Số lượng giao dịch. Phần tử Tiêu đề nhóm cho biết có bao nhiêu giao dịch đơn lẻ trong thông điệp.

## P

**pacs** — Thanh toán bù trừ và quyết toán. Lĩnh vực kinh doanh ISO 20022 bao gồm các thông điệp thanh toán liên ngân hàng.

**pacs.002** — Báo cáo trạng thái thanh toán FI đến FI. Báo cáo trạng thái xử lý (chấp nhận, từ chối, đang chờ, đã quyết toán) của lệnh thanh toán trước đó.

**pacs.003** — Ghi nợ trực tiếp khách hàng FI đến FI. Mang lệnh ghi nợ trực tiếp khách hàng giữa các ngân hàng để thu tiền.

**pacs.004** — Hoàn trả thanh toán. Trả lại tiền đã quyết toán qua chuỗi thanh toán khi không thể áp dụng khoản thanh toán.

**pacs.007** — Đảo ngược thanh toán FI đến FI. Đảo ngược lệnh thanh toán từ bên gửi ban đầu qua chuỗi.

**pacs.008** — Chuyển khoản tín dụng khách hàng FI đến FI. Thông điệp liên ngân hàng chính cho chuyển khoản tín dụng khách hàng. Thay thế MT103.

**pacs.009** — Chuyển khoản tín dụng tổ chức tài chính. Chuyển tiền giữa các ngân hàng cho tài khoản của chính họ. Bao gồm tài trợ, thanh toán bảo đảm và quản lý thanh khoản. Thay thế MT202/MT202COV.

**pacs.010** — Ghi nợ trực tiếp tổ chức tài chính. Cho phép một ngân hàng ghi nợ tài khoản của ngân hàng khác theo thỏa thuận song phương.

**pacs.028** — Yêu cầu trạng thái thanh toán FI đến FI. Chủ động yêu cầu trạng thái của khoản thanh toán trước đó khi không nhận được cập nhật pacs.002.

**pain** — Khởi tạo thanh toán. Lĩnh vực kinh doanh ISO 20022 bao gồm thông điệp khách hàng đến ngân hàng (ví dụ pain.001 để khởi tạo chuyển khoản tín dụng).

**PII** — Thông tin nhận dạng cá nhân. Dữ liệu có thể nhận dạng cá nhân. pacs008 che giấu PII trong nhật ký có cấu trúc.

**PstlAdr** — Địa chỉ bưu điện. Cấu trúc địa chỉ dùng cho các bên trong thông điệp pacs. Hỗ trợ định dạng có cấu trúc (StrtNm, TwnNm, Ctry) và không có cấu trúc (AdrLine).

## R

**RJCT** — Từ chối. Mã trạng thái pacs.002 cho biết khoản thanh toán đã bị từ chối.

**RmtInf** — Thông tin chuyển tiền. Dữ liệu tham chiếu thanh toán trong pacs.008. Hỗ trợ định dạng không có cấu trúc (văn bản tự do, tối đa 140 ký tự) và có cấu trúc (tham chiếu tài liệu, số tiền, tham chiếu bên có).

**RTGS** — Quyết toán tổng theo thời gian thực. Hệ thống thanh toán trong đó các giao dịch được quyết toán từng món và theo thời gian thực (ví dụ TARGET2, Fedwire, CHAPS).

## S

**SCT** — Chuyển khoản tín dụng SEPA. Chương trình chuyển khoản tín dụng bằng euro do EPC quản lý, sử dụng pacs.008.

**SCT Inst** — Chuyển khoản tín dụng tức thì SEPA. Biến thể thanh toán tức thì của SCT, quyết toán trong dưới 10 giây.

**SDD** — Ghi nợ trực tiếp SEPA. Chương trình ghi nợ trực tiếp bằng euro do EPC quản lý, sử dụng pacs.003.

**SEPA** — Khu vực thanh toán euro duy nhất. Sáng kiến tích hợp thanh toán bao gồm chuyển khoản tín dụng, ghi nợ trực tiếp và thanh toán thẻ bằng euro tại 36 quốc gia châu Âu.

**SLEV** — Mức dịch vụ. Mã bên chịu phí bắt buộc cho SEPA. Nghĩa là phí tuân theo quy tắc chương trình mà không khấu trừ từ số tiền chuyển khoản.

**STP** — Xử lý thẳng suốt. Xử lý thanh toán tự động đầu cuối mà không cần can thiệp thủ công.

**SttlmMtd** — Phương thức quyết toán. Xác định cách quyết toán liên ngân hàng diễn ra: CLRG (hệ thống thanh toán bù trừ), INDA (đại lý được chỉ thị), INGA (đại lý chỉ thị) hoặc COVE (thanh toán bảo đảm).

## T

**TxId** — Nhận dạng giao dịch. Tham chiếu liên ngân hàng do đại lý chỉ thị đầu tiên gán. Không được thay đổi bởi các đại lý tiếp theo.

## U

**UETR** — Tham chiếu giao dịch đầu cuối duy nhất. Mã định danh UUID v4 do đại lý bên nợ tạo ra và được mang nguyên vẹn qua tất cả các chặng thanh toán để theo dõi gpi.

## X

**XSD** — Định nghĩa lược đồ XML. Lược đồ chính thức xác định cấu trúc, phần tử và kiểu dữ liệu của thông điệp XML ISO 20022.

**XXE** — Thực thể ngoài XML. Lỗ hổng bảo mật trong phân tích XML. pacs008 ngăn chặn tấn công XXE bằng defusedxml.

## Tham khảo

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

