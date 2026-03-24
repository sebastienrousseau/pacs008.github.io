---
title: pacs.007.001.11 | การกลับรายการชำระเงินระหว่างสถาบันการเงิน | pacs008
description: ข้อความ pacs.007 ใช้เพื่อย้อนกลับคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ซึ่งยังไม่ได้ชำระบัญชี หรือเพื่อร้องขอการย้อนกลับของการชำระเงินที่ชำระบัญชีแล้ว ต่างจาก...
lang: th-TH
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — การกลับรายการชำระเงินระหว่างสถาบันการเงิน

| | |
|---|---|
| **ชื่อ ISO** | FIToFIPaymentReversalV11 |
| **สถานะการลงทะเบียน** | Registered |
| **ปี** | 2019 |
| **เวอร์ชัน** | 11 |

## ภาพรวม

ข้อความ pacs.007 ใช้เพื่อย้อนกลับคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ซึ่งยังไม่ได้ชำระบัญชี หรือเพื่อร้องขอการย้อนกลับของการชำระเงินที่ชำระบัญชีแล้ว ต่างจาก pacs.004 (การส่งคืน) ข้อความนี้ริเริ่มโดยตัวแทนผู้สั่งต้นฉบับ

> ตรวจทานล่าสุดเทียบกับแหล่งข้อมูลหลักเมื่อวันที่ 23 มีนาคม 2026 วันที่อ้างอิงแคตตาล็อก ISO 20022: 2025-02-27; ลิงก์แหล่งข้อมูลแสดงอยู่ด้านล่าง

## องค์ประกอบข้อมูลหลัก

- **GrpHdr** — Group Header พร้อมรหัสระบุข้อความและประทับเวลาการสร้าง
- **TxInf** — ข้อมูลธุรกรรมพร้อมจำนวนเงินย้อนกลับและคู่สัญญา
- **OrgnlGrpInf** — ข้อมูลกลุ่มต้นฉบับที่อ้างอิงข้อความต้นทาง
- **RvslRsnInf** — ข้อมูลเหตุผลการย้อนกลับพร้อมรหัสเหตุผลที่มีโครงสร้าง
- **OrgnlTxRef** — การอ้างอิงธุรกรรมต้นฉบับสำหรับการตรวจสอบย้อนกลับแบบครบวงจร

## บริบทธุรกิจ

- ริเริ่มเมื่อผู้ส่งต้นฉบับระบุข้อผิดพลาดก่อนหรือหลังการชำระบัญชี
- ใช้ในสถานการณ์การฉ้อโกงที่ต้องการการย้อนกลับอย่างรวดเร็ว
- รองรับการย้อนกลับทั้งเต็มจำนวนและบางส่วนของจำนวนเงินชำระเดิม
- มีรหัสเหตุผลการย้อนกลับที่มีโครงสร้างสำหรับการประมวลผลปลายทาง

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
          <td class="operational-matrix-table__right">ริเริ่มเมื่อผู้ส่งต้นฉบับระบุข้อผิดพลาดก่อนหรือหลังการชำระบัญชี</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — ข้อมูลธุรกรรมพร้อมจำนวนเงินย้อนกลับและคู่สัญญา</td>
          <td class="operational-matrix-table__right">ใช้ในสถานการณ์การฉ้อโกงที่ต้องการการย้อนกลับอย่างรวดเร็ว</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — ข้อมูลกลุ่มต้นฉบับที่อ้างอิงข้อความต้นทาง</td>
          <td class="operational-matrix-table__right">รองรับการย้อนกลับทั้งเต็มจำนวนและบางส่วนของจำนวนเงินชำระเดิม</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — ข้อมูลเหตุผลการย้อนกลับพร้อมรหัสเหตุผลที่มีโครงสร้าง</td>
          <td class="operational-matrix-table__right">มีรหัสเหตุผลการย้อนกลับที่มีโครงสร้างสำหรับการประมวลผลปลายทาง</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — การอ้างอิงธุรกรรมต้นฉบับสำหรับการตรวจสอบย้อนกลับแบบครบวงจร</td>
          <td class="operational-matrix-table__right">ตัวแทนผู้สั่ง (ผู้ส่งต้นฉบับ) ส่ง pacs.007 ไปข้างหน้าผ่านสายการชำระเงินเพื่อย้อนกลับการชำระเงินที่สั่งไว้ก่อนหน้านี้ ตัวแทนแต่ละรายประมวลผลคำสั่งย้อนกลับและปรับการชำระบัญชีตามความเหมาะสม</td>
        </tr>
    </tbody>
  </table>
</div>

## บริบท CBPR+ และรูปแบบ

- แตกต่างจาก pacs.004 ตามทิศทาง — การย้อนกลับไหลไปข้างหน้าจากผู้ส่งต้นทาง การส่งคืนไหลย้อนกลับจากผู้รับผลประโยชน์
- CBPR+ ต้องจับคู่กับรหัสระบุข้อความต้นฉบับสำหรับการจับคู่อัตโนมัติ
- รหัสเหตุผลที่มีโครงสร้างแทนที่คำบรรยายข้อความอิสระจากข้อความ MT ดั้งเดิม
- ถูกใช้มากขึ้นในขั้นตอนการเรียกคืนการชำระเงินทันทีและการป้องกันการฉ้อโกง

## กระแสข้อความ

ตัวแทนผู้สั่ง (ผู้ส่งต้นฉบับ) ส่ง pacs.007 ไปข้างหน้าผ่านสายการชำระเงินเพื่อย้อนกลับการชำระเงินที่สั่งไว้ก่อนหน้านี้ ตัวแทนแต่ละรายประมวลผลคำสั่งย้อนกลับและปรับการชำระบัญชีตามความเหมาะสม

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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">การติดตั้งใช้งานปัจจุบันใน pacs008</td>
          <td class="version-diff-table__takeaway">เป็นพื้นฐานที่ดีสำหรับการออกแบบกระบวนการกลับรายการ</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">รุ่นแก้ไขแค็ตตาล็อกที่ใหม่กว่า</td>
          <td class="version-diff-table__takeaway">ตรวจสอบรุ่นแก้ไขที่ใหม่กว่าสำหรับความสอดคล้องกับโครงสร้างพื้นฐานตลาดปัจจุบัน</td>
        </tr>
    </tbody>
  </table>
</div>

## ตัวอย่าง XML พร้อมคำอธิบาย

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### คำอธิบายฟิลด์

- `MsgId`: ข้อความการกลับรายการเองต้องมีตัวระบุเฉพาะที่ปลอดภัยต่อการตรวจสอบย้อนหลัง
- `OrgnlInstrId`: เก็บอ้างอิงการชำระเงินต้นฉบับไว้เพื่อหลีกเลี่ยงความขาดตอนในการกระทบยอด
- `RvslRsnInf`: ใช้เหตุผลการกลับรายการแบบมีโครงสร้างเพื่อให้กรณีทุจริต ข้อผิดพลาด และการชำระเงินซ้ำสามารถกำหนดเส้นทางต่างกันได้

## เปรียบเทียบ pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="เปรียบเทียบ pacs.007 vs pacs.004">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>มิติ</th>
        <th>pacs.007.001.11</th>
        <th>ข้อความเปรียบเทียบ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">วัตถุประสงค์หลัก</td>
          <td class="message-comparison-table__current">Reverse a previously instructed payment</td>
          <td class="message-comparison-table__other">Return settled funds</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Original instructing side</td>
          <td class="message-comparison-table__other">Receiving / beneficiary side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Forward through the chain</td>
          <td class="message-comparison-table__other">Back through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">เหมาะที่สุดสำหรับ</td>
          <td class="message-comparison-table__current">การจัดการการย้อนกลับจากการเรียกคืน ข้อผิดพลาด หรือการทุจริต</td>
          <td class="message-comparison-table__other">การจัดการการคืนเงินหลังการชำระบัญชี</td>
        </tr>
    </tbody>
  </table>
</div>

## เอกสารอ้างอิงหลัก

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/th/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">การโอนเครดิตลูกค้าระหว่างสถาบันการเงิน</td>
          <td class="related-messages-table__overview">ข้อความ pacs.008 เป็นคำสั่งชำระเงินหลักที่แลกเปลี่ยนระหว่างสถาบันการเงินเพื่อโอนเงินในนามของลูกค้า โดยมีข้อมูลลูกหนี้ เจ้าหนี้ จำนวนเงิน และข้อมูลการโอนเงินสำหรับธุรกรรมโอนเครดิตหนึ่งรายการหรือมากกว่า</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/th/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">การคืนเงินชำระ</td>
          <td class="related-messages-table__overview">ข้อความ pacs.004 ใช้เพื่อส่งคืนธุรกรรมการชำระเงินที่ชำระบัญชีแล้วก่อนหน้านี้ โดยย้อนกลับกระแสเงินทุนเมื่อไม่สามารถนำเงินไปใช้ได้ ส่งผิดพลาด หรือถูกเรียกคืนโดยสถาบันต้นทาง</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/th/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">รายงานสถานะการชำระเงินระหว่างสถาบันการเงิน</td>
          <td class="related-messages-table__overview">ข้อความ pacs.002 ถูกส่งโดยสถาบันการเงินเพื่อรายงานสถานะของคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ โดยให้ข้อมูลยืนยัน ปฏิเสธ หรือสถานะรอดำเนินการสำหรับธุรกรรมแต่ละรายการภายในข้อความการชำระเงิน</td>
        </tr>
    </tbody>
  </table>
</div>

