---
title: "دليل اختيار الرسائل | pacs008"
description: اختر رسالة pacs المناسبة وفق ISO 20022 لعمليات الإنشاء، وتقارير الحالة، والمرتجعات، والعكس، والاستعلامات.
lang: ar-SA
lastUpdated: true
image: /logo.svg
---

# دليل اختيار الرسائل

اختر عائلة رسائل pacs بحسب الحدث التشغيلي أولاً، ثم بحسب المخطط ونموذج التشغيل.

## مصفوفة قرار سريعة

<div class="decision-matrix-table" tabindex="0" aria-label="مصفوفة قرار سريعة">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>نوع الرسالة</th>
        <th>الوصف</th>
        <th>نظرة عامة</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ar/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">تقرير حالة الدفع من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="decision-matrix-table__overview">يُرسل رسالة pacs.002 من مؤسسة مالية للإبلاغ عن حالة تعليمات الدفع المرسلة سابقاً. يوفر تأكيداً أو رفضاً أو معلومات حالة معلقة للمعاملات الفردية ضمن رسالة الدفع.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ar/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">خصم مباشر للعميل من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="decision-matrix-table__overview">يتم تبادل رسالة pacs.003 بين المؤسسات المالية لتنفيذ تعليمات الخصم المباشر للعميل. يمكّن بنك الدائن من تحصيل الأموال من بنك المدين نيابة عن الدائن.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ar/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">إرجاع المدفوعات</td>
          <td class="decision-matrix-table__overview">يُستخدم رسالة pacs.004 لإرجاع معاملة دفع تمت تسويتها سابقاً. يعكس تدفق الأموال عندما لا يمكن تطبيق الدفع أو تم إرساله بالخطأ أو يتم استرداده من المؤسسة المنشئة.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ar/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">عكس الدفعة من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="decision-matrix-table__overview">يُستخدم رسالة pacs.007 لعكس تعليمات دفع مرسلة سابقاً لم تتم تسويتها بعد أو لطلب عكس دفعة مسوّاة. على عكس pacs.004 (الإرجاع)، يتم بدؤه من الوكيل المُرسل الأصلي.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ar/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">تحويل ائتماني للعميل من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="decision-matrix-table__overview">رسالة pacs.008 هي تعليمات الدفع الأساسية المتبادلة بين المؤسسات المالية لتحويل الأموال نيابة عن العميل. تحمل معلومات المدين والدائن والمبلغ والتحويل لمعاملة واحدة أو أكثر.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ar/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">تحويل ائتماني بين المؤسسات المالية</td>
          <td class="decision-matrix-table__overview">يُستخدم رسالة pacs.009 للتحويلات بين المؤسسات المالية عندما يكون التحويل لحساب المؤسسة الخاص وليس نيابة عن عميل. يدعم التمويل بين البنوك ومدفوعات التغطية وإدارة السيولة.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ar/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">خصم مباشر بين المؤسسات المالية</td>
          <td class="decision-matrix-table__overview">يُستخدم رسالة pacs.010 بين المؤسسات المالية لمعاملات الخصم المباشر على الحساب الخاص للمؤسسة. يمكّن مؤسسة من تحصيل الأموال مباشرة من حساب مؤسسة أخرى.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ar/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">طلب حالة الدفع من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="decision-matrix-table__overview">يُرسل رسالة pacs.028 من مؤسسة مالية لطلب حالة تعليمات دفع مرسلة سابقاً. يمكّن التتبع الاستباقي لمعالجة المدفوعات دون انتظار تقرير حالة غير مطلوب.</td>
        </tr>
    </tbody>
  </table>
</div>

## نقاط المقارنة الشائعة

<div class="comparison-points-table" tabindex="0" aria-label="نقاط المقارنة الشائعة">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>المقارنة</th>
        <th>الفرق الرئيسي</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">دفعة عميل مقابل حركة مؤسسة أو دفعة تغطية</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">إرجاع من جهة الاستلام مقابل عكس من جهة الإرسال</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">تقرير حالة مقابل طلب حالة</td>
        </tr>
    </tbody>
  </table>
</div>

## صفحات الرسائل المدعومة

- [`pacs.002.001.12`](/ar/pacs.002.001.12/) — تقرير حالة الدفع من مؤسسة مالية إلى مؤسسة مالية
- [`pacs.003.001.09`](/ar/pacs.003.001.09/) — خصم مباشر للعميل من مؤسسة مالية إلى مؤسسة مالية
- [`pacs.004.001.11`](/ar/pacs.004.001.11/) — إرجاع المدفوعات
- [`pacs.007.001.11`](/ar/pacs.007.001.11/) — عكس الدفعة من مؤسسة مالية إلى مؤسسة مالية
- [`pacs.008.001.13`](/ar/pacs.008.001.13/) — تحويل ائتماني للعميل من مؤسسة مالية إلى مؤسسة مالية
- [`pacs.009.001.10`](/ar/pacs.009.001.10/) — تحويل ائتماني بين المؤسسات المالية
- [`pacs.010.001.05`](/ar/pacs.010.001.05/) — خصم مباشر بين المؤسسات المالية
- [`pacs.028.001.05`](/ar/pacs.028.001.05/) — طلب حالة الدفع من مؤسسة مالية إلى مؤسسة مالية

