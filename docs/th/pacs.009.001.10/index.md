---
title: pacs.009.001.10 | การโอนเครดิตระหว่างสถาบันการเงิน | pacs008
description: ข้อความ pacs.009 ใช้สำหรับการโอนเครดิตระหว่างสถาบันการเงินโดยที่การโอนเป็นในนามของสถาบันเอง ไม่ใช่ในนามของลูกค้า รองรับการจัดหาเงินทุนระหว่างธนาคาร...
lang: th-TH
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — การโอนเครดิตระหว่างสถาบันการเงิน

| | |
|---|---|
| **ชื่อ ISO** | FinancialInstitutionCreditTransferV10 |
| **สถานะการลงทะเบียน** | Registered |
| **ปี** | 2019 |
| **เวอร์ชัน** | 10 |

## ภาพรวม

ข้อความ pacs.009 ใช้สำหรับการโอนเครดิตระหว่างสถาบันการเงินโดยที่การโอนเป็นในนามของสถาบันเอง ไม่ใช่ในนามของลูกค้า รองรับการจัดหาเงินทุนระหว่างธนาคาร การชำระเงินแบบ cover และการจัดการสภาพคล่อง

> ตรวจทานล่าสุดเทียบกับแหล่งข้อมูลหลักเมื่อวันที่ 23 มีนาคม 2026 วันที่อ้างอิงแคตตาล็อก ISO 20022: 2025-02-27; ลิงก์แหล่งข้อมูลแสดงอยู่ด้านล่าง

## องค์ประกอบข้อมูลหลัก

- **GrpHdr** — Group Header พร้อมรหัสระบุข้อความและข้อมูลการชำระบัญชี
- **CdtTrfTxInf** — ข้อมูลธุรกรรมโอนเครดิตพร้อมจำนวนเงินชำระบัญชีระหว่างธนาคาร
- **Dbtr / DbtrAgt** — การระบุตัวตนสถาบันลูกหนี้และตัวแทน
- **Cdtr / CdtrAgt** — การระบุตัวตนสถาบันเจ้าหนี้และตัวแทน
- **IntrBkSttlmAmt** — จำนวนเงินชำระบัญชีระหว่างธนาคารในสกุลเงินชำระบัญชี

## บริบทธุรกิจ

- ใช้สำหรับการโอนบัญชีตนเองระหว่างธนาคารและการชำระเงินแบบ cover
- รองรับการจัดการสภาพคล่องระหว่างคู่ค้าธนาคารตัวแทน
- มีขาการชำระเงิน cover ของการโอนเครดิตลูกค้าที่ชำระบัญชีผ่านวิธี cover
- เปิดใช้งานการดำเนินงานคลังเงินและการจัดหาเงินทุนระหว่างสถาบันการเงิน

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header พร้อมรหัสระบุข้อความและข้อมูลการชำระบัญชี</td>
          <td class="operational-matrix-table__right">ใช้สำหรับการโอนบัญชีตนเองระหว่างธนาคารและการชำระเงินแบบ cover</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — ข้อมูลธุรกรรมโอนเครดิตพร้อมจำนวนเงินชำระบัญชีระหว่างธนาคาร</td>
          <td class="operational-matrix-table__right">รองรับการจัดการสภาพคล่องระหว่างคู่ค้าธนาคารตัวแทน</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — การระบุตัวตนสถาบันลูกหนี้และตัวแทน</td>
          <td class="operational-matrix-table__right">มีขาการชำระเงิน cover ของการโอนเครดิตลูกค้าที่ชำระบัญชีผ่านวิธี cover</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — การระบุตัวตนสถาบันเจ้าหนี้และตัวแทน</td>
          <td class="operational-matrix-table__right">เปิดใช้งานการดำเนินงานคลังเงินและการจัดหาเงินทุนระหว่างสถาบันการเงิน</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — จำนวนเงินชำระบัญชีระหว่างธนาคารในสกุลเงินชำระบัญชี</td>
          <td class="operational-matrix-table__right">สถาบันลูกหนี้ส่ง pacs.009 ไปยังสถาบันเจ้าหนี้เพื่อโอนเงินของตนเอง สำหรับการชำระเงินแบบ cover method pacs.009 ให้ขาการจัดหาเงินทุนในขณะที่ pacs.008 มีคำสั่งของลูกค้าผ่านเส้นทางแยกต่างหาก</td>
        </tr>
    </tbody>
  </table>
</div>

## บริบท CBPR+ และรูปแบบ

- แทนที่ MT202 และ MT202COV สำหรับการโอนระหว่างสถาบัน
- ขั้นตอนวิธี cover จับคู่ pacs.009 กับคำสั่งลูกค้า pacs.008 ที่อยู่เบื้องหลัง
- ข้อมูลคู่สัญญาแบบมีโครงสร้างและการระบุตัวตน LEI มีความจำเป็นมากขึ้น
- SWIFT gpi ครอบคลุม pacs.009 เพื่อความโปร่งใสของธนาคารตัวแทน

## กระแสข้อความ

สถาบันลูกหนี้ส่ง pacs.009 ไปยังสถาบันเจ้าหนี้เพื่อโอนเงินของตนเอง สำหรับการชำระเงินแบบ cover method pacs.009 ให้ขาการจัดหาเงินทุนในขณะที่ pacs.008 มีคำสั่งของลูกค้าผ่านเส้นทางแยกต่างหาก

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">การติดตั้งใช้งานปัจจุบันใน pacs008</td>
          <td class="version-diff-table__takeaway">สอดคล้องกับขอบเขตการรองรับปัจจุบันของโครงการสำหรับกระแสการโอนเครดิตระหว่างสถาบันการเงิน</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">รุ่นแก้ไขแค็ตตาล็อกที่ใหม่กว่า</td>
          <td class="version-diff-table__takeaway">สำคัญต่อการวางแผนโรดแมปในสภาพแวดล้อมธนาคารตัวแทนและการชำระเงินแบบชำระครอบคลุม</td>
        </tr>
    </tbody>
  </table>
</div>

## ตัวอย่าง XML พร้อมคำอธิบาย

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### คำอธิบายฟิลด์

- `InstrId`: ใช้ตัวระบุของช่วงการจัดหาเงินทุนที่ยังคงเชื่อมโยงกับกระบวนการลูกค้าต้นทางได้
- `IntrBkSttlmAmt`: กระแสเงินของบัญชีตนเองและการชำระเงินเพื่อครอบคลุมมักต้องการการควบคุมด้านการเงินคลังที่เข้มงวดมากขึ้นต่อจำนวนเงินและวันที่ชำระบัญชี
- `Dbtr` / `Cdtr`: สิ่งเหล่านี้คือคู่สัญญาระหว่างสถาบัน ไม่ใช่บทบาทลูกค้ารายย่อย จึงควรจำลองข้อมูลให้สอดคล้องกัน

## เปรียบเทียบ pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="เปรียบเทียบ pacs.009 vs pacs.008">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>มิติ</th>
        <th>pacs.009.001.10</th>
        <th>ข้อความเปรียบเทียบ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">วัตถุประสงค์หลัก</td>
          <td class="message-comparison-table__current">การโอนเครดิตในบัญชีของสถาบันเองหรือช่วงการชำระเงินเพื่อคุ้มกัน</td>
          <td class="message-comparison-table__other">การโอนเครดิตของลูกค้า</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">ผู้รับผิดชอบทางธุรกิจ</td>
          <td class="message-comparison-table__current">งานคลังเงิน / ธนาคารตัวแทน / การจัดหาเงินทุน</td>
          <td class="message-comparison-table__other">งานปฏิบัติการชำระเงินของลูกค้า</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">การจับคู่ที่พบบ่อย</td>
          <td class="message-comparison-table__current">กระบวนการ pacs.002, pacs.004 และกระแส pacs.008 ที่เชื่อมโยงกัน</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">ข้อสมมติที่ควรหลีกเลี่ยง</td>
          <td class="message-comparison-table__current">การคิดว่าเป็นเพียง pacs.008 ที่มีรายละเอียดทางเทคนิคมากกว่า</td>
          <td class="message-comparison-table__other">การคิดว่าสามารถรองรับกระแสการจัดหาเงินทุนระหว่างสถาบันได้โดยตรงอย่างครบถ้วน</td>
        </tr>
    </tbody>
  </table>
</div>

## เอกสารอ้างอิงหลัก

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


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
          <td class="related-messages-table__id"><a href="/th/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">รายงานสถานะการชำระเงินระหว่างสถาบันการเงิน</td>
          <td class="related-messages-table__overview">ข้อความ pacs.002 ถูกส่งโดยสถาบันการเงินเพื่อรายงานสถานะของคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ โดยให้ข้อมูลยืนยัน ปฏิเสธ หรือสถานะรอดำเนินการสำหรับธุรกรรมแต่ละรายการภายในข้อความการชำระเงิน</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/th/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">การหักบัญชีระหว่างสถาบันการเงิน</td>
          <td class="related-messages-table__overview">ข้อความ pacs.010 ใช้ระหว่างสถาบันการเงินสำหรับธุรกรรมหักบัญชีโดยตรงในบัญชีของสถาบันเอง ช่วยให้สถาบันหนึ่งสามารถเรียกเก็บเงินโดยตรงจากบัญชีของสถาบันอื่น</td>
        </tr>
    </tbody>
  </table>
</div>

