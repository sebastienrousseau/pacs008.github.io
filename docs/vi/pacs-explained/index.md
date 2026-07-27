---
title: "Giải thích các thông điệp pacs | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: vi-VN
lastUpdated: true
image: /logo.webp
---

# Giải thích các thông điệp pacs

A detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Vòng đời thanh toán

Vòng đời thanh toán pacs hoàn chỉnh bao gồm sáu giai đoạn và nhiều loại thông điệp phối hợp với nhau.

**Giai đoạn 1 — Khởi tạo.** Thanh toán bắt nguồn từ miền khách hàng-ngân hàng (pain.001). Ngân hàng của bên nợ nhận lệnh và ánh xạ vào miền liên ngân hàng.

**Giai đoạn 2 — Lệnh liên ngân hàng.** Đại lý bên nợ tạo pacs.008 và gửi cho đại lý tiếp theo trong chuỗi. Trong luồng nối tiếp, pacs.008 di chuyển từng bước qua các trung gian. Trong luồng bảo đảm, pacs.008 đi trực tiếp từ đại lý bên nợ đến đại lý bên có, trong khi pacs.009 riêng biệt mang chặng cấp vốn qua chuỗi ngân hàng đại lý.

**Giai đoạn 3 — Báo cáo trạng thái.** Tại mỗi bước, đại lý nhận có thể trả về pacs.002 xác nhận chấp nhận (ACCP/ACSP/ACSC), từ chối (RJCT) hoặc trạng thái chờ (PDNG). Trong CBPR+, pacs.002 là bắt buộc cho mọi giao tiếp trạng thái thanh toán.

**Giai đoạn 4 — Quyết toán.** Quyết toán diễn ra qua hệ thống thanh toán bù trừ (CLRG), trên tài khoản ngân hàng đại lý (INDA/INGA) hoặc qua thanh toán bảo đảm (COVE). Ngày và số tiền quyết toán liên ngân hàng xác định khi nào và bao nhiêu được quyết toán.

**Giai đoạn 5 — Ghi có cho người thụ hưởng.** Đại lý bên có ghi có cho người thụ hưởng và có thể gửi thông báo cho khách hàng.

**Giai đoạn 6 — Xử lý ngoại lệ.** Nếu không thể ghi có cho người thụ hưởng sau quyết toán, pacs.004 hoàn trả tiền qua chuỗi. Nếu người gửi phát hiện lỗi hoặc gian lận, pacs.007 tiến về phía trước trong chuỗi. Nếu không biết trạng thái, pacs.028 truy vấn đại lý tiếp theo và câu trả lời quay về qua pacs.002.

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

pacs.008 gồm hai khối chính: Tiêu đề nhóm (GrpHdr) và Thông tin giao dịch chuyển khoản tín dụng (CdtTrfTxInf).

### Tiêu đề nhóm (GrpHdr)

Tiêu đề nhóm xuất hiện đúng một lần mỗi thông điệp và chứa:

- **MsgId** — Mã nhận dạng thông điệp duy nhất do đại lý gửi chỉ định. Tối đa 35 ký tự, phải duy nhất cho mỗi người gửi.
- **CreDtTm** — Dấu thời gian tạo theo định dạng ISO 8601.
- **NbOfTxs** — Số lượng giao dịch trong thông điệp.
- **SttlmInf** — Thông tin quyết toán bao gồm phương thức quyết toán (SttlmMtd) và tùy chọn hệ thống bù trừ cùng tài khoản quyết toán.
- **IntrBkSttlmDt** — Ngày quyết toán liên ngân hàng.
- **PmtTpInf** — Thông tin loại thanh toán bao gồm ưu tiên, mức dịch vụ, công cụ địa phương và mục đích danh mục.

### Thông tin giao dịch chuyển khoản tín dụng (CdtTrfTxInf)

Mỗi giao dịch chứa:

- **PmtId** — Mã nhận dạng thanh toán: InstrId, EndToEndId, TxId và UETR.
- **IntrBkSttlmAmt** — Số tiền quyết toán liên ngân hàng với mã tiền tệ.
- **InstdAmt** — Số tiền gốc được chỉ thị (có thể khác với số tiền quyết toán do chuyển đổi ngoại tệ).
- **ChrgBr** — Mã bên chịu phí (DEBT, CRED, SHAR hoặc SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — Tên, địa chỉ, nhận dạng, tài khoản và đại lý bên nợ.
- **Cdtr / CdtrAcct / CdtrAgt** — Tên, địa chỉ, nhận dạng, tài khoản và đại lý bên có.
- **IntrmyAgt1 / 2 / 3** — Tối đa ba đại lý trung gian trong chuỗi.
- **RmtInf** — Thông tin chuyển tiền, không có cấu trúc (văn bản tự do) hoặc có cấu trúc (tham chiếu tài liệu, số tiền, ngày tháng).
- **Purp** — Mã mục đích có cấu trúc.
- **RgltryRptg** — Chi tiết báo cáo quy định.

## Phương thức quyết toán

Phần tử SttlmMtd xác định cách thức quyết toán liên ngân hàng diễn ra.

- **CLRG** — Quyết toán qua hệ thống thanh toán bù trừ như TARGET2, EURO1 hoặc CHIPS. Phổ biến nhất cho bù trừ trong nước và khu vực.
- **INDA** — Quyết toán trên sổ sách của đại lý được chỉ thị. Đại lý bên nợ giữ tài khoản nostro tại đại lý tiếp theo. Điển hình cho ngân hàng đại lý song phương.
- **INGA** — Quyết toán trên sổ sách của đại lý chỉ thị. Đại lý được chỉ thị giữ tài khoản nostro tại đại lý gửi. Ít phổ biến hơn INDA.
- **COVE** — Quyết toán qua thanh toán bảo đảm riêng biệt. pacs.009 mang chặng cấp vốn trong khi pacs.008 mang dữ liệu khách hàng trực tiếp. Sử dụng trong ngân hàng đại lý xuyên biên giới.

## Mã bên chịu phí

Phần tử ChrgBr chỉ định ai chịu phí thanh toán.

- **DEBT** — Bên nợ chịu tất cả phí (tương đương MT103: OUR). Bên có nhận đủ số tiền.
- **CRED** — Bên có chịu tất cả phí (tương đương MT103: BEN). Phí được trừ từ chuyển khoản.
- **SHAR** — Phí được chia sẻ (tương đương MT103: SHA). Mỗi bên trả phí của đại lý mình. Phổ biến nhất cho thanh toán xuyên biên giới.
- **SLEV** — Phí theo mức dịch vụ. Bắt buộc cho SEPA. Không khấu trừ từ số tiền chuyển khoản.

## Mã nhận dạng thanh toán

Các thông điệp pacs sử dụng nhiều mã nhận dạng đóng vai trò khác nhau trong chuỗi thanh toán.

<div class="api-fields-table" tabindex="0" aria-label="Mã nhận dạng thanh toán">
  <table>
    <caption>Mã nhận dạng thanh toán và vai trò</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Mã nhận dạng</th>
        <th scope="col">Được đặt bởi</th>
        <th scope="col">Thay đổi trong chuỗi?</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><strong>MsgId</strong></td><td class="api-fields-table__desc">Mỗi đại lý gửi</td><td class="api-fields-table__constraint">Có — mới cho mỗi thông điệp</td></tr>
        <tr><td class="api-fields-table__field"><strong>InstrId</strong></td><td class="api-fields-table__desc">Mỗi đại lý chỉ thị</td><td class="api-fields-table__constraint">Có — có thể thay đổi mỗi bước</td></tr>
        <tr><td class="api-fields-table__field"><strong>EndToEndId</strong></td><td class="api-fields-table__desc">Người khởi tạo (bên nợ)</td><td class="api-fields-table__constraint">Không — không được thay đổi</td></tr>
        <tr><td class="api-fields-table__field"><strong>TxId</strong></td><td class="api-fields-table__desc">Đại lý chỉ thị đầu tiên</td><td class="api-fields-table__constraint">Không — không được thay đổi</td></tr>
        <tr><td class="api-fields-table__field"><strong>UETR</strong></td><td class="api-fields-table__desc">Đại lý bên nợ</td><td class="api-fields-table__constraint">Không — theo dõi toàn cầu</td></tr>
    </tbody>
  </table>
</div>

## Ánh xạ trường MT103 sang pacs.008

<div class="api-fields-table" tabindex="0" aria-label="Ánh xạ trường MT103 sang pacs.008">
  <table>
    <caption>Ánh xạ trường chính từ MT103 sang pacs.008</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Trường MT103</th>
        <th scope="col">Tên MT103</th>
        <th scope="col">Đường dẫn XML pacs.008</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field">20</td><td class="api-fields-table__desc">Tham chiếu người gửi</td><td class="api-fields-table__constraint">GrpHdr/MsgId or PmtId/InstrId</td></tr>
        <tr><td class="api-fields-table__field">23B</td><td class="api-fields-table__desc">Mã nghiệp vụ ngân hàng</td><td class="api-fields-table__constraint">PmtTpInf/SvcLvl</td></tr>
        <tr><td class="api-fields-table__field">32A</td><td class="api-fields-table__desc">Ngày giá trị / Số tiền</td><td class="api-fields-table__constraint">IntrBkSttlmDt + IntrBkSttlmAmt</td></tr>
        <tr><td class="api-fields-table__field">33B</td><td class="api-fields-table__desc">Số tiền chỉ thị</td><td class="api-fields-table__constraint">InstdAmt</td></tr>
        <tr><td class="api-fields-table__field">50a</td><td class="api-fields-table__desc">Khách hàng ra lệnh</td><td class="api-fields-table__constraint">Dbtr + DbtrAcct</td></tr>
        <tr><td class="api-fields-table__field">52a</td><td class="api-fields-table__desc">Tổ chức ra lệnh</td><td class="api-fields-table__constraint">DbtrAgt</td></tr>
        <tr><td class="api-fields-table__field">57a</td><td class="api-fields-table__desc">Tổ chức tài khoản</td><td class="api-fields-table__constraint">CdtrAgt</td></tr>
        <tr><td class="api-fields-table__field">59a</td><td class="api-fields-table__desc">Khách hàng thụ hưởng</td><td class="api-fields-table__constraint">Cdtr + CdtrAcct</td></tr>
        <tr><td class="api-fields-table__field">70</td><td class="api-fields-table__desc">Thông tin chuyển tiền</td><td class="api-fields-table__constraint">RmtInf/Ustrd or RmtInf/Strd</td></tr>
        <tr><td class="api-fields-table__field">71A</td><td class="api-fields-table__desc">Chi tiết phí</td><td class="api-fields-table__constraint">ChrgBr (BEN→CRED, OUR→DEBT, SHA→SHAR)</td></tr>
        <tr><td class="api-fields-table__field">72</td><td class="api-fields-table__desc">Thông tin người gửi đến người nhận</td><td class="api-fields-table__constraint">InstrForCdtrAgt / InstrForNxtAgt</td></tr>
        <tr><td class="api-fields-table__field">N/A</td><td class="api-fields-table__desc">UETR (Block 3, field 121)</td><td class="api-fields-table__constraint">PmtId/UETR</td></tr>
    </tbody>
  </table>
</div>

## Mã trạng thái và lý do

### Mã trạng thái pacs.002

<div class="api-fields-table" tabindex="0" aria-label="Mã trạng thái pacs.002">
  <table>
    <caption>Mã trạng thái giao dịch trong pacs.002</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Mã</th>
        <th scope="col">Ý nghĩa</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>ACCP</code></td><td class="api-fields-table__desc">Chấp nhận — đã qua kiểm tra sơ bộ</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSP</code></td><td class="api-fields-table__desc">Chấp nhận — quyết toán đang tiến hành</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSC</code></td><td class="api-fields-table__desc">Chấp nhận — quyết toán hoàn tất</td></tr>
        <tr><td class="api-fields-table__field"><code>RCVD</code></td><td class="api-fields-table__desc">Đã nhận — chưa xử lý</td></tr>
        <tr><td class="api-fields-table__field"><code>PDNG</code></td><td class="api-fields-table__desc">Chờ xử lý — cần xử lý thêm</td></tr>
        <tr><td class="api-fields-table__field"><code>RJCT</code></td><td class="api-fields-table__desc">Từ chối — kèm mã lý do</td></tr>
    </tbody>
  </table>
</div>

### Mã lý do từ chối và hoàn trả phổ biến

<div class="api-fields-table" tabindex="0" aria-label="Mã lý do phổ biến">
  <table>
    <caption>Mã lý do từ chối và hoàn trả thường dùng</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Mã</th>
        <th scope="col">Tên</th>
        <th scope="col">Mô tả</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>AC01</code></td><td class="api-fields-table__desc">Số tài khoản sai</td><td class="api-fields-table__constraint">Số tài khoản không hợp lệ hoặc không tồn tại</td></tr>
        <tr><td class="api-fields-table__field"><code>AC04</code></td><td class="api-fields-table__desc">Tài khoản đã đóng</td><td class="api-fields-table__constraint">Tài khoản đã bị đóng</td></tr>
        <tr><td class="api-fields-table__field"><code>AC06</code></td><td class="api-fields-table__desc">Tài khoản bị phong tỏa</td><td class="api-fields-table__constraint">Tài khoản bị phong tỏa cho giao dịch</td></tr>
        <tr><td class="api-fields-table__field"><code>AM04</code></td><td class="api-fields-table__desc">Không đủ số dư</td><td class="api-fields-table__constraint">Không đủ số dư trong tài khoản bên nợ</td></tr>
        <tr><td class="api-fields-table__field"><code>AM05</code></td><td class="api-fields-table__desc">Trùng lặp</td><td class="api-fields-table__constraint">Phát hiện thanh toán trùng lặp</td></tr>
        <tr><td class="api-fields-table__field"><code>BE04</code></td><td class="api-fields-table__desc">Thiếu địa chỉ bên có</td><td class="api-fields-table__constraint">Địa chỉ bên có bị thiếu hoặc không đầy đủ</td></tr>
        <tr><td class="api-fields-table__field"><code>CUST</code></td><td class="api-fields-table__desc">Theo yêu cầu khách hàng</td><td class="api-fields-table__constraint">Hoàn trả hoặc từ chối theo yêu cầu khách hàng</td></tr>
        <tr><td class="api-fields-table__field"><code>DUPL</code></td><td class="api-fields-table__desc">Thanh toán trùng lặp</td><td class="api-fields-table__constraint">Xác định thanh toán trùng lặp</td></tr>
        <tr><td class="api-fields-table__field"><code>FOCR</code></td><td class="api-fields-table__desc">Sau hủy bỏ</td><td class="api-fields-table__constraint">Theo yêu cầu hủy bỏ</td></tr>
        <tr><td class="api-fields-table__field"><code>FR01</code></td><td class="api-fields-table__desc">Gian lận</td><td class="api-fields-table__constraint">Nghi ngờ gian lận</td></tr>
        <tr><td class="api-fields-table__field"><code>RC01</code></td><td class="api-fields-table__desc">BIC sai</td><td class="api-fields-table__constraint">BIC không đúng hoặc không xác định</td></tr>
        <tr><td class="api-fields-table__field"><code>RR03</code></td><td class="api-fields-table__desc">Thiếu tên/địa chỉ bên có</td><td class="api-fields-table__constraint">Thiếu tên hoặc dữ liệu địa chỉ bên có</td></tr>
        <tr><td class="api-fields-table__field"><code>TM01</code></td><td class="api-fields-table__desc">Quá hạn</td><td class="api-fields-table__constraint">Đã quá thời hạn xử lý</td></tr>
    </tbody>
  </table>
</div>

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

### Địa chỉ không có cấu trúc (lỗi thời cho CBPR+ sau tháng 11 năm 2026)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

Ràng buộc chính: StrtNm tối đa 70 ký tự (CBPR+), TwnNm tối đa 35 ký tự (CBPR+), Ctry theo định dạng ISO 3166-1 alpha-2, AdrLine tối đa 70 ký tự mỗi dòng và tối đa 7 dòng.

## Nhận dạng các bên

Các bên trong pacs.008 hỗ trợ nhiều phương thức nhận dạng:

- **BIC** — Mã định danh doanh nghiệp theo ISO 9362. 8 hoặc 11 ký tự (BBBBCCLL hoặc BBBBCCLLBBB). Sử dụng trong FinInstnId/BICFI cho đại lý và OrgId/AnyBIC cho các bên.
- **LEI** — Mã định danh pháp nhân theo ISO 17442. 20 ký tự chữ số. Xuất hiện trong OrgId/LEI cho các bên và FinInstnId/LEI cho đại lý. Cải thiện phân biệt thực thể cho báo cáo quy định.
- **IBAN** — Số tài khoản ngân hàng quốc tế theo ISO 13616. Sử dụng trong DbtrAcct/Id/IBAN và CdtrAcct/Id/IBAN.
- **Mã tổ chức** — Các mã định danh khác dựa trên lược đồ (mã thuế, DUNS, mã khách hàng) qua OrgId/Othr với mã tên lược đồ.
- **Mã cá nhân** — Cho thể nhân: ngày và nơi sinh, hộ chiếu (CCPT), CMND (NIDN) hoặc giấy phép lái xe (DRLC) qua PrvtId.

## Thông tin chuyển tiền

Dữ liệu chuyển tiền trong pacs.008 sử dụng phần tử RmtInf với hai dạng:

**Không có cấu trúc** — Văn bản tự do tối đa 140 ký tự mỗi lần. Đơn giản nhưng hạn chế đối chiếu tự động.

**Có cấu trúc** — Tham chiếu tài liệu với mã loại, số, ngày và số tiền. Loại tài liệu phổ biến: CINV (hóa đơn thương mại), CREN (giấy báo có), SOAC (sao kê tài khoản). Hỗ trợ tham chiếu chủ nợ ISO 11649 (RF + số kiểm tra + tham chiếu) qua CdtrRefInf. Cho phép đối chiếu hóa đơn tự động và thanh toán nhiều hóa đơn.

## UETR và theo dõi gpi

UETR (Unique End-to-End Transaction Reference) là mã UUID v4 do đại lý bên nợ tạo. Xuất hiện trong PmtId/UETR xuyên suốt pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 và pacs.028. Phải giữ nguyên trong toàn bộ chuỗi thanh toán.

SWIFT gpi sử dụng UETR để theo dõi thanh toán qua cơ sở dữ liệu Tracker trên đám mây. Mỗi đại lý xác nhận việc nhận và xử lý, cho phép khả năng quan sát từ đầu đến cuối. SLA của gpi cho thanh toán xuyên biên giới nhắm ghi có trong cùng ngày vào tài khoản bên có.

## Tham khảo

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

