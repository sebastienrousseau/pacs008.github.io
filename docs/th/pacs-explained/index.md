---
title: "อธิบายข้อความ pacs | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: th-TH
lastUpdated: true
image: /logo.webp
---

# อธิบายข้อความ pacs

A detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## วงจรชีวิตการชำระเงิน

วงจรชีวิตการชำระเงิน pacs ที่สมบูรณ์ประกอบด้วย 6 ขั้นตอนและข้อความหลายประเภทที่ทำงานร่วมกัน

**ขั้นตอนที่ 1 — การเริ่มต้น.** การชำระเงินเริ่มต้นจากโดเมนลูกค้าถึงธนาคาร (pain.001) ธนาคารของผู้ชำระเงินรับคำสั่งและแปลงเข้าสู่โดเมนระหว่างธนาคาร

**ขั้นตอนที่ 2 — คำสั่งระหว่างธนาคาร.** ตัวแทนผู้ชำระเงินสร้าง pacs.008 และส่งไปยังตัวแทนถัดไปในสายโซ่ ในแบบอนุกรม pacs.008 เคลื่อนที่ทีละขั้นตอนผ่านตัวกลาง ในแบบคัฟเวอร์ pacs.008 ไปตรงจากตัวแทนผู้ชำระเงินไปยังตัวแทนผู้รับเงิน ขณะที่ pacs.009 แยกต่างหากนำส่วนการให้เงินผ่านสายโซ่คอร์เรสพอนเดนท์

**ขั้นตอนที่ 3 — รายงานสถานะ.** ในแต่ละขั้นตอน ตัวแทนผู้รับสามารถส่ง pacs.002 กลับเพื่อยืนยันการรับ (ACCP/ACSP/ACSC) การปฏิเสธ (RJCT) หรือสถานะรอดำเนินการ (PDNG) ใน CBPR+ pacs.002 เป็นข้อบังคับสำหรับการสื่อสารสถานะการชำระเงินทั้งหมด

**ขั้นตอนที่ 4 — การชำระบัญชี.** การชำระบัญชีเกิดขึ้นผ่านระบบหักบัญชี (CLRG) บัญชีคอร์เรสพอนเดนท์ (INDA/INGA) หรือการชำระเงินคัฟเวอร์ (COVE) วันที่และจำนวนเงินของการชำระบัญชีระหว่างธนาคารกำหนดว่าจะชำระเมื่อไรและเท่าไร

**ขั้นตอนที่ 5 — เครดิตให้ผู้รับผลประโยชน์.** ตัวแทนผู้รับเงินเครดิตผู้รับผลประโยชน์และสามารถส่งการแจ้งเตือนลูกค้า

**ขั้นตอนที่ 6 — การจัดการข้อยกเว้น.** หากไม่สามารถเครดิตผู้รับผลประโยชน์หลังการชำระบัญชี pacs.004 คืนเงินผ่านสายโซ่ หากผู้ส่งพบข้อผิดพลาดหรือการฉ้อโกง pacs.007 จะเดินหน้าในสายโซ่ หากไม่ทราบสถานะ pacs.028 สอบถามตัวแทนถัดไปและคำตอบกลับมาผ่าน pacs.002

### แบบอนุกรม

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### แบบคัฟเวอร์

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## โครงสร้าง XML ของ pacs.008

pacs.008 ประกอบด้วยสองบล็อกหลัก: Group Header (GrpHdr) และ Credit Transfer Transaction Information (CdtTrfTxInf)

### Group Header (GrpHdr)

Group Header ปรากฏหนึ่งครั้งต่อข้อความและประกอบด้วย:

- **MsgId** — ตัวระบุข้อความที่ไม่ซ้ำกันที่กำหนดโดยตัวแทนผู้ส่ง สูงสุด 35 อักขระ ต้องไม่ซ้ำกันต่อผู้ส่ง
- **CreDtTm** — เวลาสร้างในรูปแบบ ISO 8601
- **NbOfTxs** — จำนวนธุรกรรมแต่ละรายการในข้อความ
- **SttlmInf** — ข้อมูลการชำระบัญชีรวมถึงวิธีการชำระบัญชี (SttlmMtd) และระบบหักบัญชีและบัญชีชำระเงินตามที่เลือก
- **IntrBkSttlmDt** — วันที่ชำระบัญชีระหว่างธนาคาร
- **PmtTpInf** — ข้อมูลประเภทการชำระเงินรวมถึงลำดับความสำคัญ ระดับบริการ เครื่องมือท้องถิ่น และวัตถุประสงค์ของหมวดหมู่

### Credit Transfer Transaction Information (CdtTrfTxInf)

แต่ละธุรกรรมประกอบด้วย:

- **PmtId** — ตัวระบุการชำระเงิน: InstrId, EndToEndId, TxId และ UETR
- **IntrBkSttlmAmt** — จำนวนเงินชำระบัญชีระหว่างธนาคารพร้อมรหัสสกุลเงิน
- **InstdAmt** — จำนวนเงินต้นฉบับที่สั่ง (อาจแตกต่างจากจำนวนชำระบัญชีเนื่องจากอัตราแลกเปลี่ยน)
- **ChrgBr** — รหัสผู้รับภาระค่าธรรมเนียม (DEBT, CRED, SHAR หรือ SLEV)
- **Dbtr / DbtrAcct / DbtrAgt** — ชื่อ ที่อยู่ การระบุตัวตน บัญชี และตัวแทนของผู้ชำระเงิน
- **Cdtr / CdtrAcct / CdtrAgt** — ชื่อ ที่อยู่ การระบุตัวตน บัญชี และตัวแทนของผู้รับเงิน
- **IntrmyAgt1 / 2 / 3** — ตัวแทนตัวกลางได้สูงสุดสามรายในสายโซ่
- **RmtInf** — ข้อมูลการโอน ไม่มีโครงสร้าง (ข้อความอิสระ) หรือมีโครงสร้าง (อ้างอิงเอกสาร จำนวนเงิน วันที่)
- **Purp** — รหัสวัตถุประสงค์แบบมีโครงสร้าง
- **RgltryRptg** — รายละเอียดการรายงานตามกฎระเบียบ

## วิธีการชำระบัญชี

องค์ประกอบ SttlmMtd กำหนดวิธีการชำระบัญชีระหว่างธนาคาร

- **CLRG** — ชำระบัญชีผ่านระบบหักบัญชีเช่น TARGET2, EURO1 หรือ CHIPS พบบ่อยที่สุดสำหรับการหักบัญชีภายในประเทศและระดับภูมิภาค
- **INDA** — ชำระบัญชีในบัญชีของตัวแทนที่ได้รับคำสั่ง ตัวแทนผู้ชำระเงินถือบัญชีนอสโตรกับตัวแทนถัดไป เป็นแบบทั่วไปสำหรับธนาคารคอร์เรสพอนเดนท์ทวิภาคี
- **INGA** — ชำระบัญชีในบัญชีของตัวแทนที่สั่ง พบน้อยกว่า INDA
- **COVE** — ชำระบัญชีผ่านการชำระเงินคัฟเวอร์แยกต่างหาก pacs.009 นำส่วนการให้เงินขณะที่ pacs.008 นำข้อมูลลูกค้าโดยตรง ใช้ในธนาคารคอร์เรสพอนเดนท์ข้ามพรมแดน

## รหัสผู้รับภาระค่าธรรมเนียม

องค์ประกอบ ChrgBr ระบุว่าใครรับภาระค่าธรรมเนียมการชำระเงิน

- **DEBT** — ผู้ชำระเงินรับภาระทั้งหมด (เทียบเท่า MT103: OUR) ผู้รับเงินได้รับเต็มจำนวน
- **CRED** — ผู้รับเงินรับภาระทั้งหมด (เทียบเท่า MT103: BEN) ค่าธรรมเนียมถูกหักจากยอดโอน
- **SHAR** — แบ่งกันรับภาระ (เทียบเท่า MT103: SHA) แต่ละฝ่ายจ่ายค่าธรรมเนียมของตัวแทนตนเอง พบบ่อยที่สุดสำหรับการชำระเงินข้ามพรมแดน
- **SLEV** — ตามระดับบริการ บังคับสำหรับ SEPA ไม่มีการหักจากยอดโอน

## ตัวระบุการชำระเงิน

ข้อความ pacs ใช้ตัวระบุหลายตัวที่ทำหน้าที่ต่างกันในสายการชำระเงิน

<div class="api-fields-table" tabindex="0" aria-label="ตัวระบุการชำระเงิน">
  <table>
    <caption>ตัวระบุการชำระเงินและบทบาท</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">ตัวระบุ</th>
        <th scope="col">กำหนดโดย</th>
        <th scope="col">เปลี่ยนในสายโซ่?</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><strong>MsgId</strong></td><td class="api-fields-table__desc">ตัวแทนผู้ส่งแต่ละราย</td><td class="api-fields-table__constraint">ใช่ — ใหม่ต่อข้อความ</td></tr>
        <tr><td class="api-fields-table__field"><strong>InstrId</strong></td><td class="api-fields-table__desc">ตัวแทนผู้สั่งแต่ละราย</td><td class="api-fields-table__constraint">ใช่ — อาจเปลี่ยนในแต่ละขั้นตอน</td></tr>
        <tr><td class="api-fields-table__field"><strong>EndToEndId</strong></td><td class="api-fields-table__desc">ผู้ริเริ่ม (ผู้ชำระเงิน)</td><td class="api-fields-table__constraint">ไม่ — ต้องไม่เปลี่ยนแปลง</td></tr>
        <tr><td class="api-fields-table__field"><strong>TxId</strong></td><td class="api-fields-table__desc">ตัวแทนผู้สั่งรายแรก</td><td class="api-fields-table__constraint">ไม่ — ต้องไม่เปลี่ยนแปลง</td></tr>
        <tr><td class="api-fields-table__field"><strong>UETR</strong></td><td class="api-fields-table__desc">ตัวแทนผู้ชำระเงิน</td><td class="api-fields-table__constraint">ไม่ — การติดตามสากล</td></tr>
    </tbody>
  </table>
</div>

## การจับคู่ฟิลด์ MT103 กับ pacs.008

<div class="api-fields-table" tabindex="0" aria-label="การจับคู่ฟิลด์ MT103 กับ pacs.008">
  <table>
    <caption>การจับคู่ฟิลด์หลักจาก MT103 ไปยัง pacs.008</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">ฟิลด์ MT103</th>
        <th scope="col">ชื่อ MT103</th>
        <th scope="col">เส้นทาง XML pacs.008</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field">20</td><td class="api-fields-table__desc">อ้างอิงผู้ส่ง</td><td class="api-fields-table__constraint">GrpHdr/MsgId or PmtId/InstrId</td></tr>
        <tr><td class="api-fields-table__field">23B</td><td class="api-fields-table__desc">รหัสการดำเนินงานธนาคาร</td><td class="api-fields-table__constraint">PmtTpInf/SvcLvl</td></tr>
        <tr><td class="api-fields-table__field">32A</td><td class="api-fields-table__desc">วันที่มูลค่า / จำนวนเงิน</td><td class="api-fields-table__constraint">IntrBkSttlmDt + IntrBkSttlmAmt</td></tr>
        <tr><td class="api-fields-table__field">33B</td><td class="api-fields-table__desc">จำนวนเงินที่สั่ง</td><td class="api-fields-table__constraint">InstdAmt</td></tr>
        <tr><td class="api-fields-table__field">50a</td><td class="api-fields-table__desc">ลูกค้าผู้สั่ง</td><td class="api-fields-table__constraint">Dbtr + DbtrAcct</td></tr>
        <tr><td class="api-fields-table__field">52a</td><td class="api-fields-table__desc">สถาบันผู้สั่ง</td><td class="api-fields-table__constraint">DbtrAgt</td></tr>
        <tr><td class="api-fields-table__field">57a</td><td class="api-fields-table__desc">สถาบันบัญชี</td><td class="api-fields-table__constraint">CdtrAgt</td></tr>
        <tr><td class="api-fields-table__field">59a</td><td class="api-fields-table__desc">ลูกค้าผู้รับผลประโยชน์</td><td class="api-fields-table__constraint">Cdtr + CdtrAcct</td></tr>
        <tr><td class="api-fields-table__field">70</td><td class="api-fields-table__desc">ข้อมูลการโอน</td><td class="api-fields-table__constraint">RmtInf/Ustrd or RmtInf/Strd</td></tr>
        <tr><td class="api-fields-table__field">71A</td><td class="api-fields-table__desc">รายละเอียดค่าธรรมเนียม</td><td class="api-fields-table__constraint">ChrgBr (BEN→CRED, OUR→DEBT, SHA→SHAR)</td></tr>
        <tr><td class="api-fields-table__field">72</td><td class="api-fields-table__desc">ข้อมูลผู้ส่งถึงผู้รับ</td><td class="api-fields-table__constraint">InstrForCdtrAgt / InstrForNxtAgt</td></tr>
        <tr><td class="api-fields-table__field">N/A</td><td class="api-fields-table__desc">UETR (Block 3, field 121)</td><td class="api-fields-table__constraint">PmtId/UETR</td></tr>
    </tbody>
  </table>
</div>

## รหัสสถานะและเหตุผล

### รหัสสถานะ pacs.002

<div class="api-fields-table" tabindex="0" aria-label="รหัสสถานะ pacs.002">
  <table>
    <caption>รหัสสถานะธุรกรรมใน pacs.002</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">รหัส</th>
        <th scope="col">ความหมาย</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>ACCP</code></td><td class="api-fields-table__desc">ยอมรับ — ผ่านการตรวจสอบเบื้องต้น</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSP</code></td><td class="api-fields-table__desc">ยอมรับ — การชำระบัญชีกำลังดำเนินการ</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSC</code></td><td class="api-fields-table__desc">ยอมรับ — การชำระบัญชีเสร็จสมบูรณ์</td></tr>
        <tr><td class="api-fields-table__field"><code>RCVD</code></td><td class="api-fields-table__desc">ได้รับ — ยังไม่ได้ประมวลผล</td></tr>
        <tr><td class="api-fields-table__field"><code>PDNG</code></td><td class="api-fields-table__desc">รอดำเนินการ — ต้องการการประมวลผลเพิ่มเติม</td></tr>
        <tr><td class="api-fields-table__field"><code>RJCT</code></td><td class="api-fields-table__desc">ปฏิเสธ — พร้อมรหัสเหตุผล</td></tr>
    </tbody>
  </table>
</div>

### รหัสเหตุผลการปฏิเสธและการคืนเงินที่พบบ่อย

<div class="api-fields-table" tabindex="0" aria-label="รหัสเหตุผลที่พบบ่อย">
  <table>
    <caption>รหัสเหตุผลการปฏิเสธและการคืนเงินที่ใช้บ่อย</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">รหัส</th>
        <th scope="col">ชื่อ</th>
        <th scope="col">คำอธิบาย</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>AC01</code></td><td class="api-fields-table__desc">หมายเลขบัญชีไม่ถูกต้อง</td><td class="api-fields-table__constraint">หมายเลขบัญชีไม่ถูกต้องหรือไม่มีอยู่</td></tr>
        <tr><td class="api-fields-table__field"><code>AC04</code></td><td class="api-fields-table__desc">บัญชีปิด</td><td class="api-fields-table__constraint">บัญชีถูกปิดแล้ว</td></tr>
        <tr><td class="api-fields-table__field"><code>AC06</code></td><td class="api-fields-table__desc">บัญชีถูกระงับ</td><td class="api-fields-table__constraint">บัญชีถูกระงับสำหรับธุรกรรม</td></tr>
        <tr><td class="api-fields-table__field"><code>AM04</code></td><td class="api-fields-table__desc">ยอดเงินไม่เพียงพอ</td><td class="api-fields-table__constraint">ยอดเงินไม่เพียงพอในบัญชีผู้ชำระเงิน</td></tr>
        <tr><td class="api-fields-table__field"><code>AM05</code></td><td class="api-fields-table__desc">ซ้ำ</td><td class="api-fields-table__constraint">ตรวจพบการชำระเงินซ้ำ</td></tr>
        <tr><td class="api-fields-table__field"><code>BE04</code></td><td class="api-fields-table__desc">ที่อยู่ผู้รับเงินขาดหาย</td><td class="api-fields-table__constraint">ที่อยู่ผู้รับเงินขาดหายหรือไม่สมบูรณ์</td></tr>
        <tr><td class="api-fields-table__field"><code>CUST</code></td><td class="api-fields-table__desc">ลูกค้าร้องขอ</td><td class="api-fields-table__constraint">การคืนเงินหรือการปฏิเสธที่ลูกค้าร้องขอ</td></tr>
        <tr><td class="api-fields-table__field"><code>DUPL</code></td><td class="api-fields-table__desc">การชำระเงินซ้ำ</td><td class="api-fields-table__constraint">ระบุการชำระเงินซ้ำ</td></tr>
        <tr><td class="api-fields-table__field"><code>FOCR</code></td><td class="api-fields-table__desc">หลังการยกเลิก</td><td class="api-fields-table__constraint">ตามคำขอยกเลิก</td></tr>
        <tr><td class="api-fields-table__field"><code>FR01</code></td><td class="api-fields-table__desc">การฉ้อโกง</td><td class="api-fields-table__constraint">สงสัยว่ามีการฉ้อโกง</td></tr>
        <tr><td class="api-fields-table__field"><code>RC01</code></td><td class="api-fields-table__desc">BIC ไม่ถูกต้อง</td><td class="api-fields-table__constraint">BIC ไม่ถูกต้องหรือไม่เป็นที่รู้จัก</td></tr>
        <tr><td class="api-fields-table__field"><code>RR03</code></td><td class="api-fields-table__desc">ชื่อ/ที่อยู่ผู้รับเงินขาดหาย</td><td class="api-fields-table__constraint">ชื่อหรือข้อมูลที่อยู่ของผู้รับเงินขาดหาย</td></tr>
        <tr><td class="api-fields-table__field"><code>TM01</code></td><td class="api-fields-table__desc">เลยเวลากำหนด</td><td class="api-fields-table__constraint">เลยเวลากำหนดการประมวลผลแล้ว</td></tr>
    </tbody>
  </table>
</div>

## รูปแบบที่อยู่ไปรษณีย์

### ที่อยู่แบบมีโครงสร้าง

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### ที่อยู่แบบไม่มีโครงสร้าง (เลิกใช้สำหรับ CBPR+ หลังพฤศจิกายน 2026)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

ข้อจำกัดหลัก: StrtNm สูงสุด 70 อักขระ (CBPR+), TwnNm สูงสุด 35 อักขระ (CBPR+), Ctry ในรูปแบบ ISO 3166-1 alpha-2, AdrLine สูงสุด 70 อักขระต่อบรรทัดและสูงสุด 7 บรรทัด

## การระบุตัวตนของคู่สัญญา

คู่สัญญาใน pacs.008 รองรับหลายวิธีการระบุตัวตน:

- **BIC** — รหัสระบุตัวตนธุรกิจตาม ISO 9362 8 หรือ 11 อักขระ (BBBBCCLL หรือ BBBBCCLLBBB) ใช้ใน FinInstnId/BICFI สำหรับตัวแทนและ OrgId/AnyBIC สำหรับคู่สัญญา
- **LEI** — ตัวระบุนิติบุคคลตาม ISO 17442 20 อักขระตัวเลขผสม ปรากฏใน OrgId/LEI สำหรับคู่สัญญาและ FinInstnId/LEI สำหรับตัวแทน
- **IBAN** — หมายเลขบัญชีธนาคารระหว่างประเทศตาม ISO 13616 ใช้ใน DbtrAcct/Id/IBAN และ CdtrAcct/Id/IBAN
- **รหัสองค์กร** — ตัวระบุอื่นตามสคีมา (หมายเลขภาษี, DUNS, หมายเลขลูกค้า) ผ่าน OrgId/Othr พร้อมรหัสชื่อสคีมา
- **รหัสส่วนบุคคล** — สำหรับบุคคลธรรมดา: วันเกิดและสถานที่เกิด, หนังสือเดินทาง (CCPT), บัตรประจำตัวประชาชน (NIDN) หรือใบขับขี่ (DRLC) ผ่าน PrvtId

## ข้อมูลการโอน

ข้อมูลการโอนใน pacs.008 ใช้องค์ประกอบ RmtInf สองรูปแบบ:

**ไม่มีโครงสร้าง** — ข้อความอิสระสูงสุด 140 อักขระต่อครั้ง ง่ายแต่จำกัดการกระทบยอดอัตโนมัติ

**มีโครงสร้าง** — อ้างอิงเอกสารพร้อมรหัสประเภท หมายเลข วันที่ และจำนวนเงิน ประเภทเอกสารทั่วไป: CINV (ใบแจ้งหนี้การค้า), CREN (ใบลดหนี้), SOAC (รายงานบัญชี) รองรับการอ้างอิงผู้รับเงิน ISO 11649 (RF + ตัวเลขตรวจสอบ + การอ้างอิง) ผ่าน CdtrRefInf

## UETR และการติดตาม gpi

UETR (Unique End-to-End Transaction Reference) เป็น UUID v4 ที่สร้างโดยตัวแทนผู้ชำระเงิน ปรากฏใน PmtId/UETR ทั่วทั้ง pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 และ pacs.028 ต้องไม่เปลี่ยนแปลงตลอดสายการชำระเงิน

SWIFT gpi ใช้ UETR ติดตามการชำระเงินผ่านฐานข้อมูล Tracker บนคลาวด์ แต่ละตัวแทนยืนยันการรับและประมวลผล ทำให้มองเห็นได้จากต้นทางถึงปลายทาง SLA ของ gpi สำหรับการชำระเงินข้ามพรมแดนมีเป้าหมายเครดิตภายในวันเดียวกัน

## อ้างอิง

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

