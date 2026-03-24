---
title: pacs.002.001.12 | รายงานสถานะการชำระเงินระหว่างสถาบันการเงิน | pacs008
description: ข้อความ pacs.002 ถูกส่งโดยสถาบันการเงินเพื่อรายงานสถานะของคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ โดยให้ข้อมูลยืนยัน ปฏิเสธ...
lang: th-TH
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — รายงานสถานะการชำระเงินระหว่างสถาบันการเงิน

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">ฟิลด์</th>
        <th scope="col">ค่า</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ชื่อ ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>สถานะการลงทะเบียน</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>ปี</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>เวอร์ชัน</strong></td>
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## ภาพรวม

ข้อความ pacs.002 ถูกส่งโดยสถาบันการเงินเพื่อรายงานสถานะของคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ โดยให้ข้อมูลยืนยัน ปฏิเสธ หรือสถานะรอดำเนินการสำหรับธุรกรรมแต่ละรายการภายในข้อความการชำระเงิน

> ตรวจทานล่าสุดเทียบกับแหล่งข้อมูลหลักเมื่อวันที่ 23 มีนาคม 2026 วันที่อ้างอิงแคตตาล็อก ISO 20022: 2025-02-27; ลิงก์แหล่งข้อมูลแสดงอยู่ด้านล่าง

## องค์ประกอบข้อมูลหลัก

- **GrpHdr** — Group Header พร้อมรหัสระบุข้อความและประทับเวลาการสร้าง
- **OrgnlGrpInfAndSts** — ข้อมูลกลุ่มต้นฉบับและสถานะสำหรับการรายงานระดับกลุ่ม
- **TxInfAndSts** — ข้อมูลธุรกรรมและสถานะสำหรับผลลัพธ์ธุรกรรมแต่ละรายการ
- **StsRsnInf** — ข้อมูลเหตุผลสถานะพร้อมรหัสเหตุผลที่มีโครงสร้าง
- **OrgnlTxRef** — การอ้างอิงธุรกรรมต้นฉบับที่เชื่อมโยงกลับไปยังคำสั่งต้นทาง

## บริบทธุรกิจ

- ใช้เพื่อยืนยันการชำระบัญชีหรือรายงานการปฏิเสธของการโอนเครดิต การหักบัญชีโดยตรง และการคืนเงิน
- เปิดใช้งานการกระทบยอดระหว่างตัวแทนผู้สั่งและตัวแทนผู้รับคำสั่ง
- จำเป็นในขั้นตอน CBPR+ เพื่อตอบรับการประมวลผลข้อความ pacs.008 และ pacs.009
- รองรับการรายงานสถานะทั้งระดับกลุ่มและระดับธุรกรรมแต่ละรายการ

<div class="operational-matrix-table" tabindex="0" aria-label="องค์ประกอบข้อมูลหลัก บริบทธุรกิจ">
  <table>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>องค์ประกอบข้อมูลหลัก</th>
        <th>บริบทธุรกิจ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header พร้อมรหัสระบุข้อความและประทับเวลาการสร้าง</td>
          <td class="operational-matrix-table__right">ใช้เพื่อยืนยันการชำระบัญชีหรือรายงานการปฏิเสธของการโอนเครดิต การหักบัญชีโดยตรง และการคืนเงิน</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — ข้อมูลกลุ่มต้นฉบับและสถานะสำหรับการรายงานระดับกลุ่ม</td>
          <td class="operational-matrix-table__right">เปิดใช้งานการกระทบยอดระหว่างตัวแทนผู้สั่งและตัวแทนผู้รับคำสั่ง</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — ข้อมูลธุรกรรมและสถานะสำหรับผลลัพธ์ธุรกรรมแต่ละรายการ</td>
          <td class="operational-matrix-table__right">จำเป็นในขั้นตอน CBPR+ เพื่อตอบรับการประมวลผลข้อความ pacs.008 และ pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — ข้อมูลเหตุผลสถานะพร้อมรหัสเหตุผลที่มีโครงสร้าง</td>
          <td class="operational-matrix-table__right">รองรับการรายงานสถานะทั้งระดับกลุ่มและระดับธุรกรรมแต่ละรายการ</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — การอ้างอิงธุรกรรมต้นฉบับที่เชื่อมโยงกลับไปยังคำสั่งต้นทาง</td>
          <td class="operational-matrix-table__right">ตัวแทนผู้รับคำสั่ง (ผู้รับ) ส่ง pacs.002 กลับไปยังตัวแทนผู้สั่ง (ผู้ส่ง) เพื่อยืนยันการรับ การชำระบัญชี หรือการปฏิเสธคำสั่งชำระเงินที่ได้รับ เช่น pacs.008 หรือ pacs.009</td>
        </tr>
    </tbody>
  </table>
</div>

## บริบท CBPR+ และรูปแบบ

- แทนที่คำบรรยายสถานะ MT199 และ field 79 ในข้อความ MT
- CBPR+ กำหนดให้ใช้ pacs.002 สำหรับการสื่อสารสถานะการชำระเงินทั้งหมด
- รหัสเหตุผลที่มีโครงสร้างแทนที่คำอธิบายการปฏิเสธแบบข้อความอิสระ
- การรวม SWIFT gpi tracking ต้องใช้ pacs.002 เพื่อความโปร่งใสแบบครบวงจร

## กระแสข้อความ

ตัวแทนผู้รับคำสั่ง (ผู้รับ) ส่ง pacs.002 กลับไปยังตัวแทนผู้สั่ง (ผู้ส่ง) เพื่อยืนยันการรับ การชำระบัญชี หรือการปฏิเสธคำสั่งชำระเงินที่ได้รับ เช่น pacs.008 หรือ pacs.009

## ตารางความแตกต่างของเวอร์ชัน

<div class="version-diff-table" tabindex="0" aria-label="ตารางความแตกต่างของเวอร์ชัน">
  <table>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>ช่วงเวอร์ชัน</th>
        <th>เหตุใดจึงสำคัญ</th>
        <th>ข้อสรุปเชิงปฏิบัติ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">การติดตั้งใช้งานปัจจุบันใน pacs008</td>
          <td class="version-diff-table__takeaway">ใช้สิ่งนี้เมื่อจำเป็นต้องสอดคล้องกับแม่แบบและทรัพยากรการตรวจสอบปัจจุบันของโครงการ</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">รุ่นแก้ไขแค็ตตาล็อกที่ใหม่กว่า</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## ตัวอย่าง XML พร้อมคำอธิบาย

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### คำอธิบายฟิลด์

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## เปรียบเทียบ pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="เปรียบเทียบ pacs.002 vs pacs.028">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>มิติ</th>
        <th>pacs.002.001.12</th>
        <th>ข้อความเปรียบเทียบ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">วัตถุประสงค์หลัก</td>
          <td class="message-comparison-table__current">รายงานสถานะ</td>
          <td class="message-comparison-table__other">ขอสถานะ</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">ใครเป็นผู้เริ่มการโต้ตอบ</td>
          <td class="message-comparison-table__current">สถาบันที่ส่งสถานะ</td>
          <td class="message-comparison-table__other">สถาบันที่ร้องขอสถานะ</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">ลักษณะเชิงปฏิบัติการ</td>
          <td class="message-comparison-table__current">การรายงานตามเหตุการณ์</td>
          <td class="message-comparison-table__other">การสอบถามเมื่อเกิดข้อยกเว้น</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">ข้อสมมติที่ควรหลีกเลี่ยง</td>
          <td class="message-comparison-table__current">การที่การรายงานสถานะแทนที่กระบวนการสืบค้นและตรวจสอบ</td>
          <td class="message-comparison-table__other">การที่ทุกการชำระเงินต้องมีคำขอสถานะแบบชัดเจน</td>
        </tr>
    </tbody>
  </table>
</div>

## เอกสารอ้างอิงหลัก

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

## ข้อความที่เกี่ยวข้อง
<div class="related-messages-table" tabindex="0" aria-label="ข้อความที่เกี่ยวข้อง">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>ประเภทข้อความ</th>
        <th>คำอธิบาย</th>
        <th>ภาพรวม</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/th/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">การโอนเครดิตลูกค้าระหว่างสถาบันการเงิน</td>
          <td class="related-messages-table__overview">ข้อความ pacs.008 เป็นคำสั่งชำระเงินหลักที่แลกเปลี่ยนระหว่างสถาบันการเงินเพื่อโอนเงินในนามของลูกค้า โดยมีข้อมูลลูกหนี้ เจ้าหนี้ จำนวนเงิน และข้อมูลการโอนเงินสำหรับธุรกรรมโอนเครดิตหนึ่งรายการหรือมากกว่า</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/th/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">การโอนเครดิตระหว่างสถาบันการเงิน</td>
          <td class="related-messages-table__overview">ข้อความ pacs.009 ใช้สำหรับการโอนเครดิตระหว่างสถาบันการเงินโดยที่การโอนเป็นในนามของสถาบันเอง ไม่ใช่ในนามของลูกค้า รองรับการจัดหาเงินทุนระหว่างธนาคาร การชำระเงินแบบ cover และการจัดการสภาพคล่อง</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/th/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">คำขอสถานะการชำระเงินระหว่างสถาบันการเงิน</td>
          <td class="related-messages-table__overview">ข้อความ pacs.028 ถูกส่งโดยสถาบันการเงินเพื่อร้องขอสถานะของคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ ช่วยให้สามารถติดตามการประมวลผลการชำระเงินเชิงรุกโดยไม่ต้องรอรายงานสถานะที่ไม่ได้ร้องขอ</td>
        </tr>
    </tbody>
  </table>
</div>

