---
title: "pacs.008.001.13 | การโอนเครดิตลูกค้าระหว่างสถาบันการเงิน | pacs008"
description: ข้อความ pacs.008 เป็นคำสั่งชำระเงินหลักที่แลกเปลี่ยนระหว่างสถาบันการเงินเพื่อโอนเงินในนามของลูกค้า โดยมีข้อมูลลูกหนี้ เจ้าหนี้ จำนวนเงิน...
lang: th-TH
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — การโอนเครดิตลูกค้าระหว่างสถาบันการเงิน

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>สถานะการลงทะเบียน</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>ปี</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>เวอร์ชัน</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## ภาพรวม

ข้อความ pacs.008 เป็นคำสั่งชำระเงินหลักที่แลกเปลี่ยนระหว่างสถาบันการเงินเพื่อโอนเงินในนามของลูกค้า โดยมีข้อมูลลูกหนี้ เจ้าหนี้ จำนวนเงิน และข้อมูลการโอนเงินสำหรับธุรกรรมโอนเครดิตหนึ่งรายการหรือมากกว่า

> ตรวจทานล่าสุดเทียบกับแหล่งข้อมูลหลักเมื่อวันที่ 23 มีนาคม 2026 วันที่อ้างอิงแคตตาล็อก ISO 20022: 2025-02-27; ลิงก์แหล่งข้อมูลแสดงอยู่ด้านล่าง

## องค์ประกอบข้อมูลหลัก

- **GrpHdr** — Group Header พร้อม ID ข้อความ วันที่สร้าง จำนวนธุรกรรม และข้อมูลการชำระบัญชี
- **CdtTrfTxInf** — ข้อมูลธุรกรรมโอนเครดิตพร้อมจำนวนเงิน ค่าธรรมเนียม และวัตถุประสงค์
- **Dbtr / DbtrAgt** — การระบุตัวตนและรายละเอียดบัญชีของลูกหนี้และตัวแทนลูกหนี้
- **Cdtr / CdtrAgt** — การระบุตัวตนและรายละเอียดบัญชีของเจ้าหนี้และตัวแทนเจ้าหนี้
- **RmtInf** — ข้อมูลการโอนเงินสำหรับการอ้างอิงการชำระเงินแบบมีโครงสร้างหรือไม่มีโครงสร้าง

## บริบทธุรกิจ

- ข้อความหลักสำหรับการโอนเครดิตข้ามพรมแดนและภายในประเทศที่ริเริ่มโดยลูกค้า
- ใช้ทั่วทั้ง SEPA SCT, SEPA Instant, CBPR+ และระบบหักบัญชีแห่งชาติ
- มีข้อมูลการโอนเงินแบบมีโครงสร้างเพื่อรองรับการกระทบยอดอัตโนมัติ
- รองรับวิธีการชำระบัญชีแบบอนุกรม แบบ cover และแบบตรงสำหรับสายการชำระเงินหลายขา

<div class="operational-matrix-table" tabindex="0" aria-label="องค์ประกอบข้อมูลหลัก บริบทธุรกิจ">
  <table>
    <caption>Key data elements and business context</caption>
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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Group Header พร้อม ID ข้อความ วันที่สร้าง จำนวนธุรกรรม และข้อมูลการชำระบัญชี</td>
          <td class="operational-matrix-table__right">ข้อความหลักสำหรับการโอนเครดิตข้ามพรมแดนและภายในประเทศที่ริเริ่มโดยลูกค้า</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — ข้อมูลธุรกรรมโอนเครดิตพร้อมจำนวนเงิน ค่าธรรมเนียม และวัตถุประสงค์</td>
          <td class="operational-matrix-table__right">ใช้ทั่วทั้ง SEPA SCT, SEPA Instant, CBPR+ และระบบหักบัญชีแห่งชาติ</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — การระบุตัวตนและรายละเอียดบัญชีของลูกหนี้และตัวแทนลูกหนี้</td>
          <td class="operational-matrix-table__right">มีข้อมูลการโอนเงินแบบมีโครงสร้างเพื่อรองรับการกระทบยอดอัตโนมัติ</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — การระบุตัวตนและรายละเอียดบัญชีของเจ้าหนี้และตัวแทนเจ้าหนี้</td>
          <td class="operational-matrix-table__right">รองรับวิธีการชำระบัญชีแบบอนุกรม แบบ cover และแบบตรงสำหรับสายการชำระเงินหลายขา</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — ข้อมูลการโอนเงินสำหรับการอ้างอิงการชำระเงินแบบมีโครงสร้างหรือไม่มีโครงสร้าง</td>
          <td class="operational-matrix-table__right">ตัวแทนลูกหนี้สร้าง pacs.008 และส่งไปยังตัวแทนเจ้าหนี้ (โดยตรงหรือผ่านตัวกลาง) ตัวแทนแต่ละรายในสายตรวจสอบ เพิ่มข้อมูล และส่งต่อคำสั่งจนกว่าตัวแทนเจ้าหนี้จะเครดิตเข้าบัญชีผู้รับผลประโยชน์</td>
        </tr>
    </tbody>
  </table>
</div>

## บริบท CBPR+ และรูปแบบ

- แทนที่ MT103 และ MT103+ สำหรับการโอนเครดิตลูกค้าข้ามพรมแดน
- กำหนดเส้นตายที่อยู่แบบมีโครงสร้างเดือนพฤศจิกายน 2026 บังคับใช้กับที่อยู่ไปรษณีย์ของคู่สัญญาทั้งหมด
- SWIFT gpi ต้องใช้ pacs.008 สำหรับการติดตามแบบครบวงจรด้วย UETR
- 13 การปรับปรุงสะท้อนถึงวิวัฒนาการ schema อย่างต่อเนื่องทั่วโครงสร้างพื้นฐานตลาด

## กระแสข้อความ

ตัวแทนลูกหนี้สร้าง pacs.008 และส่งไปยังตัวแทนเจ้าหนี้ (โดยตรงหรือผ่านตัวกลาง) ตัวแทนแต่ละรายในสายตรวจสอบ เพิ่มข้อมูล และส่งต่อคำสั่งจนกว่าตัวแทนเจ้าหนี้จะเครดิตเข้าบัญชีผู้รับผลประโยชน์

## ตารางความแตกต่างของเวอร์ชัน

<div class="version-diff-table" tabindex="0" aria-label="ตารางความแตกต่างของเวอร์ชัน">
  <table>
    <caption>ตารางความแตกต่างของเวอร์ชัน</caption>
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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">รุ่นแก้ไขระยะแรก</td>
          <td class="version-diff-table__takeaway">มีประโยชน์หลักสำหรับการวิเคราะห์การย้ายระบบเดิมและบริบทของประวัติเวอร์ชัน</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">รุ่นแก้ไขสมัยใหม่ก่อนรุ่นปัจจุบัน</td>
          <td class="version-diff-table__takeaway">นี่คือรุ่นแก้ไขที่มีแนวโน้มจะพบมากที่สุดในโครงการย้ายระบบหรือการอยู่ร่วมกันล่าสุด</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">รุ่นแก้ไขแค็ตตาล็อกปัจจุบัน</td>
          <td class="version-diff-table__takeaway">ใช้สิ่งนี้สำหรับการวางแผนเวอร์ชันปัจจุบัน โดยยังต้องตรวจสอบแนวทางการใช้งานของสคีมและความพร้อมของคู่สัญญาต่อไป</td>
        </tr>
    </tbody>
  </table>
</div>

## ตัวอย่าง XML พร้อมคำอธิบาย

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### คำอธิบายฟิลด์

- `MsgId`: สิ่งนี้ควรระบุ message envelope ไม่ใช่อ้างอิงการชำระเงินของลูกค้าปลายทาง
- `EndToEndId`: รักษาความสามารถในการติดตามที่มองเห็นได้จากฝั่งลูกค้าให้คงที่ตลอดระบบลำดับถัดไปเท่าที่ทำได้
- `UETR`: ใช้ค่านี้อย่างสม่ำเสมอในสภาพแวดล้อมข้ามพรมแดนและที่ต้องการการติดตามสูง อย่าสร้างแบบเฉพาะกิจในขั้นตอนถัดไปของกระบวนการ
- `IntrBkSttlmAmt`: ตรวจสอบจำนวนเงินและสกุลเงินด้วยกฎทางธุรกิจก่อนการตรวจสอบโครงสร้างข้อความ
- `Dbtr` / `Cdtr`: คุณภาพข้อมูลคู่สัญญา โครงสร้างที่อยู่ และตัวระบุมักเป็นปัจจัยหลักที่กำหนดปริมาณงานแก้ไข

## เปรียบเทียบ pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="เปรียบเทียบ pacs.008 vs pacs.009">
  <table>
    <caption>เปรียบเทียบ pacs.008 vs pacs.009</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>มิติ</th>
        <th>pacs.008.001.13</th>
        <th>ข้อความเปรียบเทียบ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">วัตถุประสงค์หลัก</td>
          <td class="message-comparison-table__current">การโอนเครดิตของลูกค้า</td>
          <td class="message-comparison-table__other">การโอนเครดิตในบัญชีของสถาบันเองหรือช่วงการชำระเงินเพื่อคุ้มกัน</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">ผู้รับผิดชอบทางธุรกิจ</td>
          <td class="message-comparison-table__current">งานปฏิบัติการชำระเงินของลูกค้า</td>
          <td class="message-comparison-table__other">งานคลังเงิน / ธนาคารตัวแทน / การจัดหาเงินทุน</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">การจับคู่ที่พบบ่อย</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">กระบวนการ pacs.002, pacs.004 และบางครั้งรวมถึง pacs.008 ที่เชื่อมโยงกัน</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">ข้อสมมติที่ควรหลีกเลี่ยง</td>
          <td class="message-comparison-table__current">การที่การโอนระหว่างธนาคารทั้งหมดอยู่ในหมวดนี้</td>
          <td class="message-comparison-table__other">การที่มันสามารถแทนคำสั่งโอนเครดิตของลูกค้าได้</td>
        </tr>
    </tbody>
  </table>
</div>

## เอกสารอ้างอิงหลัก

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## เวอร์ชันที่รองรับ

<div class="message-versions-table" tabindex="0" aria-label="เวอร์ชันที่รองรับ">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>เวอร์ชัน</th>
        <th>สถานะ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>ปัจจุบัน</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/th/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">การคืนเงินชำระ</td>
          <td class="related-messages-table__overview">ข้อความ pacs.004 ใช้เพื่อส่งคืนธุรกรรมการชำระเงินที่ชำระบัญชีแล้วก่อนหน้านี้ โดยย้อนกลับกระแสเงินทุนเมื่อไม่สามารถนำเงินไปใช้ได้ ส่งผิดพลาด หรือถูกเรียกคืนโดยสถาบันต้นทาง</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/th/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">การโอนเครดิตระหว่างสถาบันการเงิน</td>
          <td class="related-messages-table__overview">ข้อความ pacs.009 ใช้สำหรับการโอนเครดิตระหว่างสถาบันการเงินโดยที่การโอนเป็นในนามของสถาบันเอง ไม่ใช่ในนามของลูกค้า รองรับการจัดหาเงินทุนระหว่างธนาคาร การชำระเงินแบบ cover และการจัดการสภาพคล่อง</td>
        </tr>
    </tbody>
  </table>
</div>

