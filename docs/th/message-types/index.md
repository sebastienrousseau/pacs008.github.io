---
title: ประเภทข้อความ | pacs008 ISO 20022
description: คำจำกัดความและเวอร์ชันข้อความ pacs ISO 20022 ที่รองรับ การสร้าง ตรวจสอบ จัดเรียง API...
lang: th-TH
lastUpdated: true
image: /logo.svg
---

# ประเภทข้อความ

pacs008 ครอบคลุมคำจำกัดความข้อความหลัก pacs.008 และข้อความที่เกี่ยวข้องที่ใช้ในโฟลว์การจัดเรียงและการกระทบยอด

> ตรวจทานล่าสุดเทียบกับแหล่งข้อมูลหลักเมื่อวันที่ 23 มีนาคม 2026 โดยใช้เอกสารสาธารณะของ ISO 20022, EPC และ Swift ที่อ้างอิงในหน้านี้

## การสนับสนุนที่รวมอยู่

<div class="message-coverage-table" tabindex="0" aria-label="การสนับสนุนที่รวมอยู่">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-version">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>ประเภทข้อความ</th>
        <th>คำอธิบาย</th>
        <th>เวอร์ชัน</th>
        <th>ปี</th>
        <th>ภาพรวม</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/th/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">รายงานสถานะการชำระเงินระหว่างสถาบันการเงิน</td>
          <td class="message-coverage-table__version"><code>pacs.002.001.12</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">ข้อความ pacs.002 ถูกส่งโดยสถาบันการเงินเพื่อรายงานสถานะของคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ โดยให้ข้อมูลยืนยัน ปฏิเสธ หรือสถานะรอดำเนินการสำหรับธุรกรรมแต่ละรายการภายในข้อความการชำระเงิน</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/th/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">การหักบัญชีลูกค้าระหว่างสถาบันการเงิน</td>
          <td class="message-coverage-table__version"><code>pacs.003.001.09</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">ข้อความ pacs.003 ถูกแลกเปลี่ยนระหว่างสถาบันการเงินเพื่อดำเนินการคำสั่งหักบัญชีโดยตรงของลูกค้า ช่วยให้ธนาคารของเจ้าหนี้สามารถเรียกเก็บเงินจากธนาคารของลูกหนี้ในนามของเจ้าหนี้</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/th/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">การคืนเงินชำระ</td>
          <td class="message-coverage-table__version"><code>pacs.004.001.11</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">ข้อความ pacs.004 ใช้เพื่อส่งคืนธุรกรรมการชำระเงินที่ชำระบัญชีแล้วก่อนหน้านี้ โดยย้อนกลับกระแสเงินทุนเมื่อไม่สามารถนำเงินไปใช้ได้ ส่งผิดพลาด หรือถูกเรียกคืนโดยสถาบันต้นทาง</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/th/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">การกลับรายการชำระเงินระหว่างสถาบันการเงิน</td>
          <td class="message-coverage-table__version"><code>pacs.007.001.11</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">ข้อความ pacs.007 ใช้เพื่อย้อนกลับคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ซึ่งยังไม่ได้ชำระบัญชี หรือเพื่อร้องขอการย้อนกลับของการชำระเงินที่ชำระบัญชีแล้ว ต่างจาก pacs.004 (การส่งคืน) ข้อความนี้ริเริ่มโดยตัวแทนผู้สั่งต้นฉบับ</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/th/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">การโอนเครดิตลูกค้าระหว่างสถาบันการเงิน</td>
          <td class="message-coverage-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">ข้อความ pacs.008 เป็นคำสั่งชำระเงินหลักที่แลกเปลี่ยนระหว่างสถาบันการเงินเพื่อโอนเงินในนามของลูกค้า โดยมีข้อมูลลูกหนี้ เจ้าหนี้ จำนวนเงิน และข้อมูลการโอนเงินสำหรับธุรกรรมโอนเครดิตหนึ่งรายการหรือมากกว่า</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/th/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">การโอนเครดิตระหว่างสถาบันการเงิน</td>
          <td class="message-coverage-table__version"><code>pacs.009.001.10</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">ข้อความ pacs.009 ใช้สำหรับการโอนเครดิตระหว่างสถาบันการเงินโดยที่การโอนเป็นในนามของสถาบันเอง ไม่ใช่ในนามของลูกค้า รองรับการจัดหาเงินทุนระหว่างธนาคาร การชำระเงินแบบ cover และการจัดการสภาพคล่อง</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/th/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">การหักบัญชีระหว่างสถาบันการเงิน</td>
          <td class="message-coverage-table__version"><code>pacs.010.001.05</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">ข้อความ pacs.010 ใช้ระหว่างสถาบันการเงินสำหรับธุรกรรมหักบัญชีโดยตรงในบัญชีของสถาบันเอง ช่วยให้สถาบันหนึ่งสามารถเรียกเก็บเงินโดยตรงจากบัญชีของสถาบันอื่น</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/th/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">คำขอสถานะการชำระเงินระหว่างสถาบันการเงิน</td>
          <td class="message-coverage-table__version"><code>pacs.028.001.05</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">ข้อความ pacs.028 ถูกส่งโดยสถาบันการเงินเพื่อร้องขอสถานะของคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ ช่วยให้สามารถติดตามการประมวลผลการชำระเงินเชิงรุกโดยไม่ต้องรอรายงานสถานะที่ไม่ได้ร้องขอ</td>
        </tr>
    </tbody>
  </table>
</div>

## โมเดลการส่งมอบ

ข้อความแต่ละประเภทที่รองรับมีเทมเพลตและตรรกะการตรวจสอบความถูกต้อง เพื่อให้ทีมสามารถมาตรฐานการสร้างและการทดสอบการถดถอยข้ามหลายช่องทาง

## การเลือกข้อความที่เหมาะสม

แค็ตตาล็อกข้อความมีความสำคัญเป็นพิเศษเมื่อทีมต้องตัดสินใจว่าข้อความใดเริ่มกระบวนการ ข้อความใดรายงานสถานะ และข้อความใดใช้แก้ไขหรือย้อนกระบวนการ

ดู [คู่มือการเลือกข้อความ](/th/message-selection/) เพื่อมุมมองการตัดสินใจแบบย่อสำหรับกระบวนการ pacs ที่รองรับ


## บริบทตลาด 2026

- **SEPA SCT / SCT Inst**: pacs.008 ยังคงเป็นศูนย์กลางสำหรับการแลกเปลี่ยนการโอนเครดิตและการประมวลผลการชำระเงินทันที
- **CBPR+**: pacs.008 ยังคงแทนที่เพย์โหลดข้ามพรมแดนแบบ MT103 ด้วยข้อมูลที่มีโครงสร้างมากขึ้น
- **ที่อยู่ที่มีโครงสร้าง**: แนวทางตลาดปัจจุบันชี้ไปที่การเปลี่ยนแปลงในเดือนพฤศจิกายน 2026 จากที่อยู่ไปรษณีย์ที่ไม่มีโครงสร้างทั้งหมด
- **วิธีการแบบอนุกรมและ STP**: ห่วงโซ่ธนาคารต่อธนาคารหลายขั้นตอนยังคงสำคัญ และตัวแปรการประมวลผลโดยตรงยังคงจำเป็นสำหรับประสิทธิภาพการดำเนินงาน

## ความสามารถเชิงปฏิบัติการ

pacs008 มอบการสร้างและการตรวจสอบที่สนับสนุนด้วยเทมเพลตข้ามรีวิชันคำจำกัดความข้อความที่รองรับ:

- เปรียบเทียบเวอร์ชัน
- ทดสอบการถดถอยของการอัปเดตสคีมา
- เสริมความแข็งแกร่งของข้อมูลข้อความการชำระเงินขาออกก่อนปล่อย
- สนับสนุนทีมผลิตภัณฑ์ การดำเนินงาน และการย้ายระบบจากฐานรหัสเดียว

