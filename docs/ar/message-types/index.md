---
title: أنواع الرسائل | pacs008 ISO 20022
description: تعريفات وإصدارات رسائل pacs المدعومة وفق ISO 20022. التوليد والتحقق وتنسيق واجهات البرمجة ودعم الامتثال لتدفقات تحويل الائتمان بين المؤسسات المالية.
lang: ar-SA
lastUpdated: true
image: /logo.svg
---

# أنواع الرسائل

يغطي pacs008 تعريف رسالة pacs.008 الأساسي والرسائل ذات الصلة المستخدمة في تدفقات التنسيق والمطابقة.

> تمت المراجعة مقابل المصادر الأساسية في 23 مارس 2026 باستخدام مواد ISO 20022 وEPC وSwift العامة المشار إليها في هذه الصفحة.

## الدعم المشمول

<div class="message-coverage-table" tabindex="0" aria-label="الدعم المشمول">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>نوع الرسالة</th>
        <th>الوصف</th>
        <th>السنة</th>
        <th>نظرة عامة</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/ar/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">تقرير حالة الدفع من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">يُرسل رسالة pacs.002 من مؤسسة مالية للإبلاغ عن حالة تعليمات الدفع المرسلة سابقاً. يوفر تأكيداً أو رفضاً أو معلومات حالة معلقة للمعاملات الفردية ضمن رسالة الدفع.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ar/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">خصم مباشر للعميل من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">يتم تبادل رسالة pacs.003 بين المؤسسات المالية لتنفيذ تعليمات الخصم المباشر للعميل. يمكّن بنك الدائن من تحصيل الأموال من بنك المدين نيابة عن الدائن.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ar/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">إرجاع المدفوعات</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">يُستخدم رسالة pacs.004 لإرجاع معاملة دفع تمت تسويتها سابقاً. يعكس تدفق الأموال عندما لا يمكن تطبيق الدفع أو تم إرساله بالخطأ أو يتم استرداده من المؤسسة المنشئة.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ar/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">عكس الدفعة من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">يُستخدم رسالة pacs.007 لعكس تعليمات دفع مرسلة سابقاً لم تتم تسويتها بعد أو لطلب عكس دفعة مسوّاة. على عكس pacs.004 (الإرجاع)، يتم بدؤه من الوكيل المُرسل الأصلي.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ar/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">تحويل ائتماني للعميل من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">رسالة pacs.008 هي تعليمات الدفع الأساسية المتبادلة بين المؤسسات المالية لتحويل الأموال نيابة عن العميل. تحمل معلومات المدين والدائن والمبلغ والتحويل لمعاملة واحدة أو أكثر.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ar/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">تحويل ائتماني بين المؤسسات المالية</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">يُستخدم رسالة pacs.009 للتحويلات بين المؤسسات المالية عندما يكون التحويل لحساب المؤسسة الخاص وليس نيابة عن عميل. يدعم التمويل بين البنوك ومدفوعات التغطية وإدارة السيولة.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ar/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">خصم مباشر بين المؤسسات المالية</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">يُستخدم رسالة pacs.010 بين المؤسسات المالية لمعاملات الخصم المباشر على الحساب الخاص للمؤسسة. يمكّن مؤسسة من تحصيل الأموال مباشرة من حساب مؤسسة أخرى.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ar/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">طلب حالة الدفع من مؤسسة مالية إلى مؤسسة مالية</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">يُرسل رسالة pacs.028 من مؤسسة مالية لطلب حالة تعليمات دفع مرسلة سابقاً. يمكّن التتبع الاستباقي لمعالجة المدفوعات دون انتظار تقرير حالة غير مطلوب.</td>
        </tr>
    </tbody>
  </table>
</div>

## نموذج التسليم

كل نوع رسالة مدعوم مدعوم بأصول قوالب ومنطق تحقق حتى تتمكن الفرق من توحيد الإنشاء واختبارات الانحدار عبر قنوات متعددة.

## اختيار الرسالة الصحيحة

يصبح كتالوج الرسائل مهماً بشكل خاص عندما تحتاج الفرق إلى تحديد أي رسالة تبدأ التدفق، وأيها تبلغ الحالة، وأيها تصحح العملية أو تعكسها.

راجع [دليل اختيار الرسائل](/ar/message-selection/) للحصول على عرض قرار مختصر عبر تدفقات pacs المدعومة.


## سياق السوق 2026

- **SEPA SCT / SCT Inst**: يظل pacs.008 محورياً لتبادل التحويلات الائتمانية ومعالجة المدفوعات الفورية.
- **CBPR+**: يستمر pacs.008 في استبدال حمولات MT103 العابرة للحدود ببيانات منظمة أغنى.
- **العناوين المنظمة**: تشير إرشادات السوق الحالية إلى التحول في نوفمبر 2026 بعيداً عن العناوين البريدية غير المنظمة بالكامل.
- **الطريقة التسلسلية و STP**: لا تزال سلاسل البنك إلى البنك متعددة المراحل مهمة، وتبقى المتغيرات المباشرة مهمة للكفاءة التشغيلية.

## القدرات التشغيلية

يوفر pacs008 إنشاءً وتحققاً مدعوماً بالقوالب عبر مراجعات تعريف الرسائل المدعومة:

- مقارنة الإصدارات
- اختبار انحدار تحديثات الأنظمة
- تعزيز بيانات رسائل الدفع الصادرة قبل الإصدار
- دعم فرق المنتج والعمليات والترحيل من قاعدة كود واحدة

