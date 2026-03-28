---
title: "pacs.003.001.09 | আর্থিক প্রতিষ্ঠানের মধ্যে গ্রাহক ডাইরেক্ট ডেবিট | pacs008"
description: pacs.003 বার্তা ব্যাংকগুলির মধ্যে গ্রাহক ডাইরেক্ট ডেবিট বহন করে। এটি ক্রেডিটর ব্যাংককে ডেবিটর ব্যাংক থেকে তহবিল সংগ্রহ করতে দেয়।
lang: bn-BD
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.003 the direct-debit mirror of pacs.008?"
    answer: "No. It handles customer direct-debit flows, which have different mandate, timing, and exception rules."
  - question: "What matters most operationally?"
    answer: "Mandate quality, debtor-account rules, and return handling matter more than XML generation."
---

# pacs.003.001.09 — আর্থিক প্রতিষ্ঠানের মধ্যে গ্রাহক ডাইরেক্ট ডেবিট

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">ক্ষেত্র</th>
        <th scope="col">মান</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO নাম</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>নিবন্ধন অবস্থা</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>বছর</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>সংস্করণ</strong></td>
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## সংক্ষিপ্ত বিবরণ

pacs.003 বার্তা ব্যাংকগুলির মধ্যে গ্রাহক ডাইরেক্ট ডেবিট বহন করে। এটি ক্রেডিটর ব্যাংককে ডেবিটর ব্যাংক থেকে তহবিল সংগ্রহ করতে দেয়।

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## মূল ডেটা উপাদান

- **GrpHdr** — বার্তা শনাক্তকরণ এবং নিষ্পত্তি তথ্য সহ গ্রুপ হেডার
- **DrctDbtTxInf** — পরিমাণ এবং পক্ষসমূহ সহ ডাইরেক্ট ডেবিট লেনদেন তথ্য
- **Cdtr** — ক্রেডিটর শনাক্তকরণ এবং অ্যাকাউন্ট বিবরণ
- **CdtrAgt** — ক্রেডিটর এজেন্ট (সংগ্রহকারী প্রতিষ্ঠান) শনাক্তকরণ
- **DbtrAgt** — ডেবিটর এজেন্ট (প্রদানকারী প্রতিষ্ঠান) শনাক্তকরণ

## ব্যবসায়িক প্রেক্ষাপট

- SEPA Core এবং B2B ডাইরেক্ট ডেবিট স্কিম সমর্থন করে
- সাবস্ক্রিপশন এবং বিলের মতো পুনরাবৃত্ত সংগ্রহের জন্য ব্যবহৃত হয়
- একটি বৈধ ম্যান্ডেট রেফারেন্স প্রয়োজন
- একটি বার্তায় অনেক ডাইরেক্ট ডেবিট বহন করতে পারে

<div class="operational-matrix-table" tabindex="0" aria-label="মূল ডেটা উপাদান ব্যবসায়িক প্রেক্ষাপট">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>মূল ডেটা উপাদান</th>
        <th>ব্যবসায়িক প্রেক্ষাপট</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — বার্তা শনাক্তকরণ এবং নিষ্পত্তি তথ্য সহ গ্রুপ হেডার</td>
          <td class="operational-matrix-table__right">SEPA Core এবং B2B ডাইরেক্ট ডেবিট স্কিম সমর্থন করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — পরিমাণ এবং পক্ষসমূহ সহ ডাইরেক্ট ডেবিট লেনদেন তথ্য</td>
          <td class="operational-matrix-table__right">সাবস্ক্রিপশন এবং বিলের মতো পুনরাবৃত্ত সংগ্রহের জন্য ব্যবহৃত হয়</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — ক্রেডিটর শনাক্তকরণ এবং অ্যাকাউন্ট বিবরণ</td>
          <td class="operational-matrix-table__right">একটি বৈধ ম্যান্ডেট রেফারেন্স প্রয়োজন</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — ক্রেডিটর এজেন্ট (সংগ্রহকারী প্রতিষ্ঠান) শনাক্তকরণ</td>
          <td class="operational-matrix-table__right">একটি বার্তায় অনেক ডাইরেক্ট ডেবিট বহন করতে পারে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — ডেবিটর এজেন্ট (প্রদানকারী প্রতিষ্ঠান) শনাক্তকরণ</td>
          <td class="operational-matrix-table__right">ক্রেডিটর এজেন্ট ডেবিটর এজেন্টকে pacs.003 পাঠায়। ডেবিটর এজেন্ট ম্যান্ডেট পরীক্ষা করে এবং লেনদেন নিষ্পত্তি বা ফেরত দেয়।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ এবং স্কিম প্রেক্ষাপট

- কাঠামোগত ঠিকানা এবং পক্ষ-ডেটা নিয়মও এখানে প্রযোজ্য।
- ম্যান্ডেট ডেটা নভেম্বর 2026 থেকে কাঠামোগত হতে হবে।
- ক্রস-বর্ডার ফ্লোতে পুরানো MT104 স্টাইলের ডাইরেক্ট-ডেবিট ফরম্যাট প্রতিস্থাপন করে।
- ক্রেডিটর স্কিম আইডেন্টিফায়ারের কঠোর যাচাইকরণ প্রয়োজন।

## বার্তা প্রবাহ

ক্রেডিটর এজেন্ট ডেবিটর এজেন্টকে pacs.003 পাঠায়। ডেবিটর এজেন্ট ম্যান্ডেট পরীক্ষা করে এবং লেনদেন নিষ্পত্তি বা ফেরত দেয়।

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

## সম্পর্কিত বার্তা
<div class="related-messages-table" tabindex="0" aria-label="সম্পর্কিত বার্তা">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>বার্তার ধরন</th>
        <th>বিবরণ</th>
        <th>সংক্ষিপ্ত বিবরণ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/bn/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">পেমেন্ট রিটার্ন</td>
          <td class="related-messages-table__overview">pacs.004 বার্তা ইতিমধ্যে নিষ্পত্তি হওয়া পেমেন্ট ফেরত দেয়। পেমেন্ট প্রয়োগ করা না গেলে এটি তহবিল ফেরত পাঠায়।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/bn/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট রিভার্সাল</td>
          <td class="related-messages-table__overview">pacs.007 বার্তা পূর্ববর্তী পেমেন্ট নির্দেশনা রিভার্স করে। pacs.004 এর বিপরীতে, এটি মূল প্রেরকের কাছ থেকে শুরু হয়।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/bn/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস রিপোর্ট</td>
          <td class="related-messages-table__overview">pacs.002 বার্তা একটি পূর্ববর্তী পেমেন্ট নির্দেশনার অবস্থা রিপোর্ট করে। এটি অন্য প্রতিষ্ঠানকে জানায় পেমেন্টটি গৃহীত, প্রত্যাখ্যাত, মুলতুবি বা নিষ্পত্তি হয়েছে কিনা।</td>
        </tr>
    </tbody>
  </table>
</div>

