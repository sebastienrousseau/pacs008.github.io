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

**ACCP** — Hồ sơ khách hàng được chấp nhận. Mã trạng thái pacs.002.

**ACSC** — Thanh toán bù trừ được chấp nhận đã hoàn tất. Mã trạng thái pacs.002.

**ACSP** — Thanh toán bù trừ được chấp nhận đang xử lý. Mã trạng thái pacs.002.

**BAH** — Tiêu đề ứng dụng kinh doanh (head.001).

**BIC** — Mã định danh doanh nghiệp (ISO 9362). 8 hoặc 11 ký tự.

**CBPR+** — Thanh toán và báo cáo xuyên biên giới Plus. Hoạt động từ tháng 3 năm 2023.

**CdtTrfTxInf** — Thông tin giao dịch chuyển khoản tín dụng.

**ChrgBr** — Bên chịu phí. Giá trị: DEBT, CRED, SHAR, SLEV.

**CLRG** — Thanh toán bù trừ qua hệ thống thanh toán bù trừ.

**COVE** — Phương thức bảo đảm.

**CSM** — Cơ chế thanh toán bù trừ và quyết toán.

**Dbtr** — Bên nợ.

**DbtrAgt** — Đại lý bên nợ.

**E2E ID** — Nhận dạng đầu cuối (EndToEndId).

**EPC** — Hội đồng thanh toán châu Âu.

**FI** — Tổ chức tài chính.

**FIToFI** — Tổ chức tài chính đến tổ chức tài chính.

**gpi** — Đổi mới thanh toán toàn cầu. Sử dụng UETR.

**GrpHdr** — Tiêu đề nhóm.

**Hybrid address** — Định dạng địa chỉ kết hợp. Được phép trước tháng 11 năm 2026.

**IBAN** — Số tài khoản ngân hàng quốc tế (ISO 13616).

**INDA** — Quyết toán đại lý được chỉ thị.

**INGA** — Quyết toán đại lý chỉ thị.

**InstrId** — Nhận dạng lệnh.

**IntrBkSttlmAmt** — Số tiền quyết toán liên ngân hàng.

**ISO 20022** — Tiêu chuẩn quốc tế cho trao đổi dữ liệu điện tử giữa các tổ chức tài chính.

**LEI** — Mã định danh pháp nhân (ISO 17442). 20 ký tự.

**MsgId** — Nhận dạng thông điệp. Thay đổi tại mỗi bước.

**MT** — Loại thông điệp. Định dạng cũ của SWIFT.

**MX** — Định dạng thông điệp XML ISO 20022.

**NbOfTxs** — Số lượng giao dịch.

**pacs** — Thanh toán bù trừ và quyết toán.

**pacs.002** — Báo cáo trạng thái thanh toán FI đến FI.

**pacs.003** — Ghi nợ trực tiếp khách hàng FI đến FI.

**pacs.004** — Hoàn trả thanh toán.

**pacs.007** — Đảo ngược thanh toán FI đến FI.

**pacs.008** — Chuyển khoản tín dụng khách hàng FI đến FI. Thay thế MT103.

**pacs.009** — Chuyển khoản tín dụng tổ chức tài chính. Thay thế MT202/MT202COV.

**pacs.010** — Ghi nợ trực tiếp tổ chức tài chính.

**pacs.028** — Yêu cầu trạng thái thanh toán FI đến FI.

**pain** — Khởi tạo thanh toán.

**PII** — Thông tin nhận dạng cá nhân. pacs008 che giấu PII.

**PstlAdr** — Địa chỉ bưu điện.

**RJCT** — Từ chối.

**RmtInf** — Thông tin chuyển tiền.

**RTGS** — Quyết toán tổng theo thời gian thực.

**SCT** — Chuyển khoản tín dụng SEPA.

**SCT Inst** — Chuyển khoản tín dụng tức thì SEPA.

**SDD** — Ghi nợ trực tiếp SEPA.

**SEPA** — Khu vực thanh toán euro duy nhất.

**SLEV** — Mức dịch vụ. Bắt buộc cho SEPA.

**STP** — Xử lý thẳng suốt.

**SttlmMtd** — Phương thức quyết toán: CLRG, INDA, INGA hoặc COVE.

**TxId** — Nhận dạng giao dịch.

**UETR** — Tham chiếu giao dịch đầu cuối duy nhất. UUID v4.

**XSD** — Định nghĩa lược đồ XML.

**XXE** — Thực thể ngoài XML. pacs008 ngăn chặn bằng defusedxml.

## Tham khảo

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

