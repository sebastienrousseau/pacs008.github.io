---
title: "Giải thích các thông điệp PACS | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: vi-VN
lastUpdated: true
image: /logo.webp
---

# Giải thích các thông điệp PACS

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Vòng đời thanh toán

Vòng đời thanh toán pacs hoàn chỉnh bao gồm sáu giai đoạn và nhiều loại thông điệp phối hợp.

**Giai đoạn 1 — Khởi tạo.** Thanh toán bắt nguồn từ miền khách hàng-ngân hàng (pain.001).

**Giai đoạn 2 — Lệnh liên ngân hàng.** Đại lý bên nợ tạo pacs.008 và gửi cho đại lý tiếp theo. Trong luồng nối tiếp, pacs.008 di chuyển qua các trung gian. Trong luồng bảo đảm, pacs.008 đi trực tiếp đến đại lý bên có trong khi pacs.009 riêng biệt mang chặng cấp vốn.

**Giai đoạn 3 — Báo cáo trạng thái.** pacs.002 tại mỗi bước. Trong CBPR+, pacs.002 là bắt buộc.

**Giai đoạn 4 — Quyết toán.** Qua CLRG, INDA/INGA, hoặc COVE.

**Giai đoạn 5 — Ghi có cho người thụ hưởng.**

**Giai đoạn 6 — Xử lý ngoại lệ.** pacs.004 hoàn trả, pacs.007 đảo ngược, pacs.028 truy vấn trạng thái.

### Luồng nối tiếp

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Luồng bảo đảm

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## Cấu trúc XML của pacs.008

### Tiêu đề nhóm (GrpHdr)

- **MsgId** — Mã nhận dạng thông điệp duy nhất. Tối đa 35 ký tự.
- **CreDtTm** — Dấu thời gian tạo theo ISO 8601.
- **NbOfTxs** — Số lượng giao dịch.
- **SttlmInf** — Thông tin quyết toán.
- **IntrBkSttlmDt** — Ngày quyết toán liên ngân hàng.

### Thông tin giao dịch chuyển khoản tín dụng (CdtTrfTxInf)

- **PmtId** — InstrId, EndToEndId, TxId, UETR.
- **IntrBkSttlmAmt** — Số tiền quyết toán liên ngân hàng.
- **ChrgBr** — Mã bên chịu phí.
- **Dbtr / DbtrAcct / DbtrAgt** — Thông tin bên nợ.
- **Cdtr / CdtrAcct / CdtrAgt** — Thông tin bên có.
- **RmtInf** — Thông tin chuyển tiền.

## Phương thức quyết toán

- **CLRG** — Qua hệ thống thanh toán bù trừ.
- **INDA** — Trên sổ sách đại lý được chỉ thị.
- **INGA** — Trên sổ sách đại lý chỉ thị.
- **COVE** — Qua thanh toán bảo đảm riêng biệt.

## Mã bên chịu phí

- **DEBT** — Bên nợ chịu tất cả (MT103: OUR).
- **CRED** — Bên có chịu tất cả (MT103: BEN).
- **SHAR** — Chia sẻ (MT103: SHA).
- **SLEV** — Mức dịch vụ. Bắt buộc cho SEPA.

## Định dạng địa chỉ bưu điện

### Địa chỉ có cấu trúc

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

## UETR và theo dõi gpi

UETR là mã UUID v4 do đại lý bên nợ tạo. Phải giữ nguyên trong toàn bộ chuỗi thanh toán. SWIFT gpi sử dụng UETR để theo dõi thanh toán qua cơ sở dữ liệu Tracker trên đám mây.

## Tham khảo

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

