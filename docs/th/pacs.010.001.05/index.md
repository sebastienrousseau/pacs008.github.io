---
title: pacs.010.001.05 | การหักบัญชีระหว่างสถาบันการเงิน | pacs008
description: ข้อความ pacs.010 ใช้ระหว่างสถาบันการเงินสำหรับธุรกรรมหักบัญชีโดยตรงในบัญชีของสถาบันเอง ช่วยให้สถาบันหนึ่งสามารถเรียกเก็บเงินโดยตรงจากบัญชีของสถาบันอื่น
lang: th-TH
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — การหักบัญชีระหว่างสถาบันการเงิน

| | |
|---|---|
| **ชื่อ ISO** | FinancialInstitutionDirectDebitV05 |
| **สถานะการลงทะเบียน** | Registered |
| **ปี** | 2019 |
| **เวอร์ชัน** | 5 |

## ภาพรวม

ข้อความ pacs.010 ใช้ระหว่างสถาบันการเงินสำหรับธุรกรรมหักบัญชีโดยตรงในบัญชีของสถาบันเอง ช่วยให้สถาบันหนึ่งสามารถเรียกเก็บเงินโดยตรงจากบัญชีของสถาบันอื่น

> ตรวจทานล่าสุดเทียบกับแหล่งข้อมูลหลักเมื่อวันที่ 23 มีนาคม 2026 วันที่อ้างอิงแคตตาล็อก ISO 20022: 2025-02-27; ลิงก์แหล่งข้อมูลแสดงอยู่ด้านล่าง

## องค์ประกอบข้อมูลหลัก

- **GrpHdr** — Group Header พร้อมรหัสระบุข้อความและข้อมูลการชำระบัญชี
- **DrctDbtTxInf** — ข้อมูลธุรกรรมหักบัญชีโดยตรงพร้อมจำนวนเงินเรียกเก็บ
- **Cdtr / CdtrAgt** — การระบุตัวตนสถาบันเจ้าหนี้และตัวแทน
- **Dbtr / DbtrAgt** — การระบุตัวตนสถาบันลูกหนี้และตัวแทน
- **IntrBkSttlmAmt** — จำนวนเงินชำระบัญชีระหว่างธนาคารในสกุลเงินชำระบัญชี

## บริบทธุรกิจ

- รองรับการเรียกเก็บเงินหักบัญชีโดยตรงระหว่างธนาคารระหว่างสถาบันการเงิน
- ใช้สำหรับการเรียกเก็บค่าธรรมเนียม margin call และภาระผูกพันการชำระบัญชีระดับสถาบัน
- ต้องมีข้อตกลงทวิภาคีที่ตกลงไว้ล่วงหน้าระหว่างสถาบันที่เข้าร่วม
- สำคัญสำหรับการจัดการเงินสดระดับสถาบันและวงจรการชำระบัญชีระหว่างธนาคาร

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
          <td class="operational-matrix-table__left">**GrpHdr** — Group Header พร้อมรหัสระบุข้อความและข้อมูลการชำระบัญชี</td>
          <td class="operational-matrix-table__right">รองรับการเรียกเก็บเงินหักบัญชีโดยตรงระหว่างธนาคารระหว่างสถาบันการเงิน</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**DrctDbtTxInf** — ข้อมูลธุรกรรมหักบัญชีโดยตรงพร้อมจำนวนเงินเรียกเก็บ</td>
          <td class="operational-matrix-table__right">ใช้สำหรับการเรียกเก็บค่าธรรมเนียม margin call และภาระผูกพันการชำระบัญชีระดับสถาบัน</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**Cdtr / CdtrAgt** — การระบุตัวตนสถาบันเจ้าหนี้และตัวแทน</td>
          <td class="operational-matrix-table__right">ต้องมีข้อตกลงทวิภาคีที่ตกลงไว้ล่วงหน้าระหว่างสถาบันที่เข้าร่วม</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**Dbtr / DbtrAgt** — การระบุตัวตนสถาบันลูกหนี้และตัวแทน</td>
          <td class="operational-matrix-table__right">สำคัญสำหรับการจัดการเงินสดระดับสถาบันและวงจรการชำระบัญชีระหว่างธนาคาร</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**IntrBkSttlmAmt** — จำนวนเงินชำระบัญชีระหว่างธนาคารในสกุลเงินชำระบัญชี</td>
          <td class="operational-matrix-table__right">สถาบันเจ้าหนี้ส่ง pacs.010 ไปยังสถาบันลูกหนี้เพื่อเรียกเก็บเงินภายใต้ข้อตกลงที่ตกลงไว้ล่วงหน้า สถาบันลูกหนี้ตรวจสอบคำขอและชำระบัญชีหรือปฏิเสธการหักบัญชีโดยตรง</td>
        </tr>
    </tbody>
  </table>
</div>

## บริบท CBPR+ และรูปแบบ

- แทนที่องค์ประกอบของ MT204 สำหรับการประมวลผลหักบัญชีโดยตรงระหว่างธนาคาร
- การระบุตัวตนคู่สัญญาแบบมีโครงสร้างเป็นไปตามข้อกำหนดเดียวกับข้อความ pacs อื่นๆ
- การตรวจสอบรหัสระบุตัวตนสถาบัน (BIC, LEI) เป็นข้อบังคับ
- รวมอยู่ในแผนงานการนำ ISO 20022 มาใช้อย่างเต็มรูปแบบทั่วโครงสร้างพื้นฐานตลาด

## กระแสข้อความ

สถาบันเจ้าหนี้ส่ง pacs.010 ไปยังสถาบันลูกหนี้เพื่อเรียกเก็บเงินภายใต้ข้อตกลงที่ตกลงไว้ล่วงหน้า สถาบันลูกหนี้ตรวจสอบคำขอและชำระบัญชีหรือปฏิเสธการหักบัญชีโดยตรง

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">การติดตั้งใช้งานปัจจุบันใน pacs008</td>
          <td class="version-diff-table__takeaway">เป็นจุดอ้างอิงสำหรับการรองรับการหักบัญชีโดยตรงระหว่างสถาบันในโครงการปัจจุบัน</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">รุ่นแก้ไขแค็ตตาล็อกที่ใหม่กว่า</td>
          <td class="version-diff-table__takeaway">ทบทวนก่อนนำข้อกำหนดโครงสร้างพื้นฐานที่ใหม่กว่ามาใช้</td>
        </tr>
    </tbody>
  </table>
</div>

## ตัวอย่าง XML พร้อมคำอธิบาย

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### คำอธิบายฟิลด์

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: จำนวนเงินของการหักบัญชีโดยตรงระหว่างสถาบันมักต้องมีการควบคุมค่าความคลาดเคลื่อนแบบทวิภาคีอย่างชัดเจน
- `Cdtr` / `Dbtr`: ระบุบทบาทของสถาบันให้ชัดเจน นี่ไม่ใช่โมเดลการหักบัญชีของลูกค้ารายย่อย

## เอกสารอ้างอิงหลัก

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/th/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">การโอนเครดิตระหว่างสถาบันการเงิน</td>
          <td class="related-messages-table__overview">ข้อความ pacs.009 ใช้สำหรับการโอนเครดิตระหว่างสถาบันการเงินโดยที่การโอนเป็นในนามของสถาบันเอง ไม่ใช่ในนามของลูกค้า รองรับการจัดหาเงินทุนระหว่างธนาคาร การชำระเงินแบบ cover และการจัดการสภาพคล่อง</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/th/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">รายงานสถานะการชำระเงินระหว่างสถาบันการเงิน</td>
          <td class="related-messages-table__overview">ข้อความ pacs.002 ถูกส่งโดยสถาบันการเงินเพื่อรายงานสถานะของคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ โดยให้ข้อมูลยืนยัน ปฏิเสธ หรือสถานะรอดำเนินการสำหรับธุรกรรมแต่ละรายการภายในข้อความการชำระเงิน</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/th/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">การหักบัญชีลูกค้าระหว่างสถาบันการเงิน</td>
          <td class="related-messages-table__overview">ข้อความ pacs.003 ถูกแลกเปลี่ยนระหว่างสถาบันการเงินเพื่อดำเนินการคำสั่งหักบัญชีโดยตรงของลูกค้า ช่วยให้ธนาคารของเจ้าหนี้สามารถเรียกเก็บเงินจากธนาคารของลูกหนี้ในนามของเจ้าหนี้</td>
        </tr>
    </tbody>
  </table>
</div>

