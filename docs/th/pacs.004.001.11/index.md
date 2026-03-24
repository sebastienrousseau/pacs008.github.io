---
title: pacs.004.001.11 | การคืนเงินชำระ | pacs008
description: ข้อความ pacs.004 ใช้เพื่อส่งคืนธุรกรรมการชำระเงินที่ชำระบัญชีแล้วก่อนหน้านี้ โดยย้อนกลับกระแสเงินทุนเมื่อไม่สามารถนำเงินไปใช้ได้ ส่งผิดพลาด...
lang: th-TH
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — การคืนเงินชำระ

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## ภาพรวม

ข้อความ pacs.004 ใช้เพื่อส่งคืนธุรกรรมการชำระเงินที่ชำระบัญชีแล้วก่อนหน้านี้ โดยย้อนกลับกระแสเงินทุนเมื่อไม่สามารถนำเงินไปใช้ได้ ส่งผิดพลาด หรือถูกเรียกคืนโดยสถาบันต้นทาง

> ตรวจทานล่าสุดเทียบกับแหล่งข้อมูลหลักเมื่อวันที่ 23 มีนาคม 2026 วันที่อ้างอิงแคตตาล็อก ISO 20022: 2025-02-27; ลิงก์แหล่งข้อมูลแสดงอยู่ด้านล่าง

## องค์ประกอบข้อมูลหลัก

- **GrpHdr** — Group Header พร้อมรหัสระบุข้อความและประทับเวลาการสร้าง
- **TxInf** — ข้อมูลธุรกรรมพร้อมจำนวนเงินคืนและคู่สัญญา
- **OrgnlGrpInf** — ข้อมูลกลุ่มต้นฉบับที่เชื่อมโยงไปยังข้อความต้นทาง
- **RtrRsnInf** — ข้อมูลเหตุผลการส่งคืนพร้อมรหัสเหตุผลที่มีโครงสร้าง
- **OrgnlTxRef** — การอ้างอิงธุรกรรมต้นฉบับสำหรับการจับคู่และกระทบยอด

## บริบทธุรกิจ

- จัดการการส่งคืนหลังการชำระบัญชีเมื่อไม่สามารถเครดิตเข้าบัญชีผู้รับผลประโยชน์ได้
- รองรับสถานการณ์การเรียกคืนที่ผู้ส่งต้นทางร้องขอการคืนเงิน
- มีรหัสเหตุผลการส่งคืนที่มีโครงสร้างเพื่อความโปร่งใสด้านกฎระเบียบและการดำเนินงาน
- ใช้ได้กับทั้งการส่งคืนการโอนเครดิต (pacs.008) และการส่งคืนการหักบัญชีโดยตรง (pacs.003)

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
          <td class="operational-matrix-table__right">จัดการการส่งคืนหลังการชำระบัญชีเมื่อไม่สามารถเครดิตเข้าบัญชีผู้รับผลประโยชน์ได้</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — ข้อมูลธุรกรรมพร้อมจำนวนเงินคืนและคู่สัญญา</td>
          <td class="operational-matrix-table__right">รองรับสถานการณ์การเรียกคืนที่ผู้ส่งต้นทางร้องขอการคืนเงิน</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — ข้อมูลกลุ่มต้นฉบับที่เชื่อมโยงไปยังข้อความต้นทาง</td>
          <td class="operational-matrix-table__right">มีรหัสเหตุผลการส่งคืนที่มีโครงสร้างเพื่อความโปร่งใสด้านกฎระเบียบและการดำเนินงาน</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — ข้อมูลเหตุผลการส่งคืนพร้อมรหัสเหตุผลที่มีโครงสร้าง</td>
          <td class="operational-matrix-table__right">ใช้ได้กับทั้งการส่งคืนการโอนเครดิต (pacs.008) และการส่งคืนการหักบัญชีโดยตรง (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — การอ้างอิงธุรกรรมต้นฉบับสำหรับการจับคู่และกระทบยอด</td>
          <td class="operational-matrix-table__right">ตัวแทนผู้รับคำสั่งส่ง pacs.004 กลับผ่านสายการชำระเงินเพื่อส่งคืนเงินที่ชำระบัญชีแล้วก่อนหน้านี้ ตัวแทนแต่ละรายในสายประมวลผลการส่งคืนและเครดิตกลับเข้าบัญชีที่เกี่ยวข้อง</td>
        </tr>
    </tbody>
  </table>
</div>

## บริบท CBPR+ และรูปแบบ

- แทนที่ MT103 RETURN และการส่งข้อความส่งคืนแบบ cover method
- รหัสเหตุผลการส่งคืนได้รับการมาตรฐานและเครื่องอ่านได้ภายใต้ ISO 20022
- CBPR+ ต้องการข้อมูลอ้างอิงธุรกรรมต้นฉบับที่สมบูรณ์สำหรับการจับคู่
- การติดตาม SWIFT gpi ขยายไปถึงธุรกรรมส่งคืนเพื่อการมองเห็นแบบครบวงจร

## กระแสข้อความ

ตัวแทนผู้รับคำสั่งส่ง pacs.004 กลับผ่านสายการชำระเงินเพื่อส่งคืนเงินที่ชำระบัญชีแล้วก่อนหน้านี้ ตัวแทนแต่ละรายในสายประมวลผลการส่งคืนและเครดิตกลับเข้าบัญชีที่เกี่ยวข้อง

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">การติดตั้งใช้งานปัจจุบันใน pacs008</td>
          <td class="version-diff-table__takeaway">สอดคล้องกับแม่แบบปัจจุบันสำหรับข้อความการคืนเงิน</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">รุ่นแก้ไขแค็ตตาล็อกที่ใหม่กว่า</td>
          <td class="version-diff-table__takeaway">ทบทวนรุ่นแก้ไขของข้อความคืนเงินที่ใหม่กว่าเมื่อมีการอัปเกรดสคีมหรือมีคู่สัญญาใหม่อยู่ในขอบเขต</td>
        </tr>
    </tbody>
  </table>
</div>

## ตัวอย่าง XML พร้อมคำอธิบาย

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### คำอธิบายฟิลด์

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: คุณภาพของรหัสเหตุผลมีความสำคัญอย่างยิ่งต่อการสื่อสารกับลูกค้าในขั้นตอนถัดไปและการกำหนดเส้นทางเชิงปฏิบัติการ

## เปรียบเทียบ pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="เปรียบเทียบ pacs.004 vs pacs.007">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>มิติ</th>
        <th>pacs.004.001.11</th>
        <th>ข้อความเปรียบเทียบ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">วัตถุประสงค์หลัก</td>
          <td class="message-comparison-table__current">Return settled funds</td>
          <td class="message-comparison-table__other">Reverse a previously instructed payment</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Receiving / beneficiary side</td>
          <td class="message-comparison-table__other">Original instructing side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Back through the chain</td>
          <td class="message-comparison-table__other">Forward through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">เหมาะที่สุดสำหรับ</td>
          <td class="message-comparison-table__current">การจัดการการคืนเงินหลังการชำระบัญชี</td>
          <td class="message-comparison-table__other">การจัดการการย้อนกลับจากการเรียกคืน ข้อผิดพลาด หรือการทุจริต</td>
        </tr>
    </tbody>
  </table>
</div>

## เอกสารอ้างอิงหลัก

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
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
          <td class="related-messages-table__id"><a href="/th/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">การหักบัญชีลูกค้าระหว่างสถาบันการเงิน</td>
          <td class="related-messages-table__overview">ข้อความ pacs.003 ถูกแลกเปลี่ยนระหว่างสถาบันการเงินเพื่อดำเนินการคำสั่งหักบัญชีโดยตรงของลูกค้า ช่วยให้ธนาคารของเจ้าหนี้สามารถเรียกเก็บเงินจากธนาคารของลูกหนี้ในนามของเจ้าหนี้</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/th/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">รายงานสถานะการชำระเงินระหว่างสถาบันการเงิน</td>
          <td class="related-messages-table__overview">ข้อความ pacs.002 ถูกส่งโดยสถาบันการเงินเพื่อรายงานสถานะของคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ โดยให้ข้อมูลยืนยัน ปฏิเสธ หรือสถานะรอดำเนินการสำหรับธุรกรรมแต่ละรายการภายในข้อความการชำระเงิน</td>
        </tr>
    </tbody>
  </table>
</div>

