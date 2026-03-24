---
title: pacs.028.001.05 | คำขอสถานะการชำระเงินระหว่างสถาบันการเงิน | pacs008
description: ข้อความ pacs.028 ถูกส่งโดยสถาบันการเงินเพื่อร้องขอสถานะของคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้...
lang: th-TH
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — คำขอสถานะการชำระเงินระหว่างสถาบันการเงิน

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ชื่อ ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## ภาพรวม

ข้อความ pacs.028 ถูกส่งโดยสถาบันการเงินเพื่อร้องขอสถานะของคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ ช่วยให้สามารถติดตามการประมวลผลการชำระเงินเชิงรุกโดยไม่ต้องรอรายงานสถานะที่ไม่ได้ร้องขอ

> ตรวจทานล่าสุดเทียบกับแหล่งข้อมูลหลักเมื่อวันที่ 23 มีนาคม 2026 วันที่อ้างอิงแคตตาล็อก ISO 20022: 2025-02-27; ลิงก์แหล่งข้อมูลแสดงอยู่ด้านล่าง

## องค์ประกอบข้อมูลหลัก

- **GrpHdr** — Group Header พร้อมรหัสระบุข้อความและประทับเวลาการสร้าง
- **TxInf** — ข้อมูลธุรกรรมที่ระบุการชำระเงินที่ต้องการสอบถาม
- **OrgnlGrpInf** — ข้อมูลกลุ่มต้นฉบับที่อ้างอิงข้อความต้นทาง
- **OrgnlInstrId** — รหัสระบุคำสั่งต้นฉบับจากการชำระเงินต้นทาง
- **OrgnlEndToEndId** — รหัสระบุแบบครบวงจรต้นฉบับสำหรับการตรวจสอบย้อนกลับ

## บริบทธุรกิจ

- เปิดใช้งานการสอบถามสถานะเชิงรุกสำหรับคำสั่งชำระเงินที่อยู่ระหว่างทาง
- รองรับทีมปฏิบัติการที่สืบสวนการชำระเงินที่ล่าช้าหรือสูญหาย
- เสริม pacs.002 โดยริเริ่มการสื่อสารสถานะแทนที่จะรอ
- ใช้ในขั้นตอนการจัดการข้อยกเว้นและการตรวจสอบ SLA

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
          <td class="operational-matrix-table__right">เปิดใช้งานการสอบถามสถานะเชิงรุกสำหรับคำสั่งชำระเงินที่อยู่ระหว่างทาง</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — ข้อมูลธุรกรรมที่ระบุการชำระเงินที่ต้องการสอบถาม</td>
          <td class="operational-matrix-table__right">รองรับทีมปฏิบัติการที่สืบสวนการชำระเงินที่ล่าช้าหรือสูญหาย</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — ข้อมูลกลุ่มต้นฉบับที่อ้างอิงข้อความต้นทาง</td>
          <td class="operational-matrix-table__right">เสริม pacs.002 โดยริเริ่มการสื่อสารสถานะแทนที่จะรอ</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — รหัสระบุคำสั่งต้นฉบับจากการชำระเงินต้นทาง</td>
          <td class="operational-matrix-table__right">ใช้ในขั้นตอนการจัดการข้อยกเว้นและการตรวจสอบ SLA</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — รหัสระบุแบบครบวงจรต้นฉบับสำหรับการตรวจสอบย้อนกลับ</td>
          <td class="operational-matrix-table__right">ตัวแทนผู้สั่งส่ง pacs.028 ไปยังตัวแทนผู้รับคำสั่งเพื่อร้องขอสถานะของการชำระเงินเฉพาะรายการ ตัวแทนผู้รับคำสั่งตอบกลับด้วย pacs.002 ที่มีสถานะการประมวลผลปัจจุบัน</td>
        </tr>
    </tbody>
  </table>
</div>

## บริบท CBPR+ และรูปแบบ

- แทนที่รูปแบบการสอบถามสถานะ MT199 และการค้นหาข้อความ SWIFT แบบด้วยตนเอง
- CBPR+ รองรับคำขอสถานะแบบมีโครงสร้างที่เชื่อมโยงกับรหัสระบุข้อความต้นฉบับ
- การติดตามด้วย UETR ผ่าน gpi ลดความจำเป็นในการสอบถามด้วยตนเอง
- ถูกผนวกรวมเข้ากับแดชบอร์ดการดำเนินงานชำระเงินอัตโนมัติมากขึ้น

## กระแสข้อความ

ตัวแทนผู้สั่งส่ง pacs.028 ไปยังตัวแทนผู้รับคำสั่งเพื่อร้องขอสถานะของการชำระเงินเฉพาะรายการ ตัวแทนผู้รับคำสั่งตอบกลับด้วย pacs.002 ที่มีสถานะการประมวลผลปัจจุบัน

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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">การติดตั้งใช้งานปัจจุบันใน pacs008</td>
          <td class="version-diff-table__takeaway">เหมาะสำหรับการออกแบบคำขอสถานะในเวอร์ชันปัจจุบัน</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">รุ่นแก้ไขแค็ตตาล็อกที่ใหม่กว่า</td>
          <td class="version-diff-table__takeaway">ตรวจสอบรุ่นแก้ไขแค็ตตาล็อกที่ใหม่กว่าสำหรับการวางแผน interoperability ในอนาคต</td>
        </tr>
    </tbody>
  </table>
</div>

## ตัวอย่าง XML พร้อมคำอธิบาย

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### คำอธิบายฟิลด์

- `MsgId`: คำขอเองต้องมีตัวระบุที่ตรวจสอบย้อนหลังได้และแยกจากการชำระเงินต้นทาง
- `OrgnlInstrId`: ใช้ตัวระบุต้นทางที่ตรงกันจากคำสั่งต้นฉบับเพื่อเพิ่มความแม่นยำในการจับคู่สูงสุด
- `OrgnlEndToEndId`: การรวมความสามารถในการติดตามลูกค้าช่วยให้ทีมปฏิบัติการกระทบยอดคำถามได้เร็วขึ้น

## เปรียบเทียบ pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="เปรียบเทียบ pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>มิติ</th>
        <th>pacs.028.001.05</th>
        <th>ข้อความเปรียบเทียบ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">วัตถุประสงค์หลัก</td>
          <td class="message-comparison-table__current">ขอสถานะ</td>
          <td class="message-comparison-table__other">รายงานสถานะ</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">ใครเป็นผู้เริ่มการโต้ตอบ</td>
          <td class="message-comparison-table__current">สถาบันที่ร้องขอสถานะ</td>
          <td class="message-comparison-table__other">สถาบันที่ส่งสถานะ</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">ลักษณะเชิงปฏิบัติการ</td>
          <td class="message-comparison-table__current">การสอบถามเมื่อเกิดข้อยกเว้น</td>
          <td class="message-comparison-table__other">การรายงานตามเหตุการณ์</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">ข้อสมมติที่ควรหลีกเลี่ยง</td>
          <td class="message-comparison-table__current">การที่ควรส่งสิ่งนี้เป็นประจำสำหรับทุกการชำระเงิน</td>
          <td class="message-comparison-table__other">การที่สิ่งนี้ทำให้ไม่จำเป็นต้องมีการจัดการเคสเชิงรุก</td>
        </tr>
    </tbody>
  </table>
</div>

## เอกสารอ้างอิงหลัก

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


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
          <td class="related-messages-table__id"><a href="/th/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">รายงานสถานะการชำระเงินระหว่างสถาบันการเงิน</td>
          <td class="related-messages-table__overview">ข้อความ pacs.002 ถูกส่งโดยสถาบันการเงินเพื่อรายงานสถานะของคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ โดยให้ข้อมูลยืนยัน ปฏิเสธ หรือสถานะรอดำเนินการสำหรับธุรกรรมแต่ละรายการภายในข้อความการชำระเงิน</td>
        </tr>
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
    </tbody>
  </table>
</div>

