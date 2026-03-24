---
title: คู่มือการเลือกข้อความ | pacs008
description: เลือกข้อความ pacs ของ ISO 20022 ที่เหมาะสมสำหรับการสร้าง การรายงานสถานะ การคืนเงิน การย้อนรายการ และการสอบถาม
lang: th-TH
lastUpdated: true
image: /logo.svg
---

# คู่มือการเลือกข้อความ

เลือกตระกูล pacs ตามเหตุการณ์ทางธุรกิจก่อน จากนั้นจึงเลือกตามสคีมและรูปแบบการดำเนินงาน

> ตรวจทานล่าสุดเทียบกับแหล่งข้อมูลหลักเมื่อวันที่ 23 มีนาคม 2026 โดยใช้เอกสารสาธารณะของ ISO 20022, EPC และ Swift ที่อ้างอิงในหน้านี้

## ตารางตัดสินใจแบบรวดเร็ว

<div class="decision-matrix-table" tabindex="0" aria-label="ตารางตัดสินใจแบบรวดเร็ว">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
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
          <td class="decision-matrix-table__id"><a href="/th/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">รายงานสถานะการชำระเงินระหว่างสถาบันการเงิน</td>
          <td class="decision-matrix-table__overview">ข้อความ pacs.002 ถูกส่งโดยสถาบันการเงินเพื่อรายงานสถานะของคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ โดยให้ข้อมูลยืนยัน ปฏิเสธ หรือสถานะรอดำเนินการสำหรับธุรกรรมแต่ละรายการภายในข้อความการชำระเงิน</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/th/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">การหักบัญชีลูกค้าระหว่างสถาบันการเงิน</td>
          <td class="decision-matrix-table__overview">ข้อความ pacs.003 ถูกแลกเปลี่ยนระหว่างสถาบันการเงินเพื่อดำเนินการคำสั่งหักบัญชีโดยตรงของลูกค้า ช่วยให้ธนาคารของเจ้าหนี้สามารถเรียกเก็บเงินจากธนาคารของลูกหนี้ในนามของเจ้าหนี้</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/th/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">การคืนเงินชำระ</td>
          <td class="decision-matrix-table__overview">ข้อความ pacs.004 ใช้เพื่อส่งคืนธุรกรรมการชำระเงินที่ชำระบัญชีแล้วก่อนหน้านี้ โดยย้อนกลับกระแสเงินทุนเมื่อไม่สามารถนำเงินไปใช้ได้ ส่งผิดพลาด หรือถูกเรียกคืนโดยสถาบันต้นทาง</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/th/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">การกลับรายการชำระเงินระหว่างสถาบันการเงิน</td>
          <td class="decision-matrix-table__overview">ข้อความ pacs.007 ใช้เพื่อย้อนกลับคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ซึ่งยังไม่ได้ชำระบัญชี หรือเพื่อร้องขอการย้อนกลับของการชำระเงินที่ชำระบัญชีแล้ว ต่างจาก pacs.004 (การส่งคืน) ข้อความนี้ริเริ่มโดยตัวแทนผู้สั่งต้นฉบับ</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/th/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">การโอนเครดิตลูกค้าระหว่างสถาบันการเงิน</td>
          <td class="decision-matrix-table__overview">ข้อความ pacs.008 เป็นคำสั่งชำระเงินหลักที่แลกเปลี่ยนระหว่างสถาบันการเงินเพื่อโอนเงินในนามของลูกค้า โดยมีข้อมูลลูกหนี้ เจ้าหนี้ จำนวนเงิน และข้อมูลการโอนเงินสำหรับธุรกรรมโอนเครดิตหนึ่งรายการหรือมากกว่า</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/th/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">การโอนเครดิตระหว่างสถาบันการเงิน</td>
          <td class="decision-matrix-table__overview">ข้อความ pacs.009 ใช้สำหรับการโอนเครดิตระหว่างสถาบันการเงินโดยที่การโอนเป็นในนามของสถาบันเอง ไม่ใช่ในนามของลูกค้า รองรับการจัดหาเงินทุนระหว่างธนาคาร การชำระเงินแบบ cover และการจัดการสภาพคล่อง</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/th/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">การหักบัญชีระหว่างสถาบันการเงิน</td>
          <td class="decision-matrix-table__overview">ข้อความ pacs.010 ใช้ระหว่างสถาบันการเงินสำหรับธุรกรรมหักบัญชีโดยตรงในบัญชีของสถาบันเอง ช่วยให้สถาบันหนึ่งสามารถเรียกเก็บเงินโดยตรงจากบัญชีของสถาบันอื่น</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/th/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">คำขอสถานะการชำระเงินระหว่างสถาบันการเงิน</td>
          <td class="decision-matrix-table__overview">ข้อความ pacs.028 ถูกส่งโดยสถาบันการเงินเพื่อร้องขอสถานะของคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ ช่วยให้สามารถติดตามการประมวลผลการชำระเงินเชิงรุกโดยไม่ต้องรอรายงานสถานะที่ไม่ได้ร้องขอ</td>
        </tr>
    </tbody>
  </table>
</div>

## จุดเปรียบเทียบที่พบบ่อย

<div class="comparison-points-table" tabindex="0" aria-label="จุดเปรียบเทียบที่พบบ่อย">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>เปรียบเทียบ</th>
        <th>ความแตกต่างสำคัญ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">การชำระเงินของลูกค้าเทียบกับการโอนของสถาบันหรือการชำระเงินเพื่อคุ้มกัน</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">การคืนจากฝั่งผู้รับเทียบกับการย้อนจากฝั่งผู้สั่ง</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">รายงานสถานะเทียบกับคำขอสถานะ</td>
        </tr>
    </tbody>
  </table>
</div>

## หน้าข้อความที่รองรับ

- [`pacs.002.001.12`](/th/pacs.002.001.12/) — รายงานสถานะการชำระเงินระหว่างสถาบันการเงิน
- [`pacs.003.001.09`](/th/pacs.003.001.09/) — การหักบัญชีลูกค้าระหว่างสถาบันการเงิน
- [`pacs.004.001.11`](/th/pacs.004.001.11/) — การคืนเงินชำระ
- [`pacs.007.001.11`](/th/pacs.007.001.11/) — การกลับรายการชำระเงินระหว่างสถาบันการเงิน
- [`pacs.008.001.13`](/th/pacs.008.001.13/) — การโอนเครดิตลูกค้าระหว่างสถาบันการเงิน
- [`pacs.009.001.10`](/th/pacs.009.001.10/) — การโอนเครดิตระหว่างสถาบันการเงิน
- [`pacs.010.001.05`](/th/pacs.010.001.05/) — การหักบัญชีระหว่างสถาบันการเงิน
- [`pacs.028.001.05`](/th/pacs.028.001.05/) — คำขอสถานะการชำระเงินระหว่างสถาบันการเงิน

