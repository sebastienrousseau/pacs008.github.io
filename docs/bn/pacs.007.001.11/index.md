---
title: "pacs.007.001.11 | আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট রিভার্সাল | pacs008"
description: pacs.007 বার্তা পূর্ববর্তী পেমেন্ট নির্দেশনা রিভার্স করে। pacs.004 এর বিপরীতে, এটি মূল প্রেরকের কাছ থেকে শুরু হয়।
lang: bn-BD
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.007 only for fraud scenarios?"
    answer: "No. Fraud is a major use case, but any instructing-side need to reverse a payment can trigger it."
  - question: "Can it be handled like a normal return?"
    answer: "No. Reversal timing, reason capture, and reconciliation differ materially from returns."
---

# pacs.007.001.11 — আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট রিভার্সাল

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## সংক্ষিপ্ত বিবরণ

pacs.007 বার্তা পূর্ববর্তী পেমেন্ট নির্দেশনা রিভার্স করে। pacs.004 এর বিপরীতে, এটি মূল প্রেরকের কাছ থেকে শুরু হয়।

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## মূল ডেটা উপাদান

- **GrpHdr** — বার্তা শনাক্তকরণ এবং সৃষ্টি টাইমস্ট্যাম্প সহ গ্রুপ হেডার
- **TxInf** — রিভার্সাল পরিমাণ এবং পক্ষসমূহ সহ লেনদেন তথ্য
- **OrgnlGrpInf** — উৎস বার্তা রেফারেন্সকারী মূল গ্রুপ তথ্য
- **RvslRsnInf** — কাঠামোগত কারণ কোড সহ রিভার্সালের কারণ তথ্য
- **OrgnlTxRef** — এন্ড-টু-এন্ড ট্রেসেবিলিটির জন্য মূল লেনদেন রেফারেন্স

## ব্যবসায়িক প্রেক্ষাপট

- মূল প্রেরক নিষ্পত্তির আগে বা পরে ত্রুটি খুঁজে পেলে ব্যবহৃত হয়
- দ্রুত রিভার্সাল প্রয়োজন এমন জালিয়াতির ক্ষেত্রে ব্যবহৃত হয়
- মূল পেমেন্ট পরিমাণের সম্পূর্ণ এবং আংশিক রিভার্সাল সমর্থন করে
- কাঠামোগত রিভার্সাল কারণ কোড বহন করে

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — বার্তা শনাক্তকরণ এবং সৃষ্টি টাইমস্ট্যাম্প সহ গ্রুপ হেডার</td>
          <td class="operational-matrix-table__right">মূল প্রেরক নিষ্পত্তির আগে বা পরে ত্রুটি খুঁজে পেলে ব্যবহৃত হয়</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — রিভার্সাল পরিমাণ এবং পক্ষসমূহ সহ লেনদেন তথ্য</td>
          <td class="operational-matrix-table__right">দ্রুত রিভার্সাল প্রয়োজন এমন জালিয়াতির ক্ষেত্রে ব্যবহৃত হয়</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — উৎস বার্তা রেফারেন্সকারী মূল গ্রুপ তথ্য</td>
          <td class="operational-matrix-table__right">মূল পেমেন্ট পরিমাণের সম্পূর্ণ এবং আংশিক রিভার্সাল সমর্থন করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — কাঠামোগত কারণ কোড সহ রিভার্সালের কারণ তথ্য</td>
          <td class="operational-matrix-table__right">কাঠামোগত রিভার্সাল কারণ কোড বহন করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — এন্ড-টু-এন্ড ট্রেসেবিলিটির জন্য মূল লেনদেন রেফারেন্স</td>
          <td class="operational-matrix-table__right">নির্দেশদাতা এজেন্ট পূর্ববর্তী পেমেন্ট রিভার্স করতে পেমেন্ট চেইনের মাধ্যমে pacs.007 সামনে পাঠায়। প্রতিটি এজেন্ট রিভার্সাল প্রক্রিয়া করে এবং নিষ্পত্তি সামঞ্জস্য করে।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ এবং স্কিম প্রেক্ষাপট

- দিক দ্বারা pacs.004 থেকে পৃথক: রিভার্সাল সামনে যায়, রিটার্ন পিছনে যায়
- CBPR+ স্বয়ংক্রিয় ম্যাচিংয়ের জন্য মূল বার্তা শনাক্তকারীর সাথে জোড়া প্রয়োজন
- কাঠামোগত কারণ কোড লেগ্যাসি MT বার্তার ফ্রি-টেক্সট বর্ণনা প্রতিস্থাপন করে
- তাৎক্ষণিক পেমেন্ট রিকল এবং জালিয়াতি ওয়ার্কফ্লোতে আরও বেশি ব্যবহৃত হচ্ছে

## বার্তা প্রবাহ

নির্দেশদাতা এজেন্ট পূর্ববর্তী পেমেন্ট রিভার্স করতে পেমেন্ট চেইনের মাধ্যমে pacs.007 সামনে পাঠায়। প্রতিটি এজেন্ট রিভার্সাল প্রক্রিয়া করে এবং নিষ্পত্তি সামঞ্জস্য করে।

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/bn/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে গ্রাহক ক্রেডিট ট্রান্সফার</td>
          <td class="related-messages-table__overview">pacs.008 বার্তা ব্যাংকগুলির মধ্যে প্রধান গ্রাহক ক্রেডিট-ট্রান্সফার নির্দেশনা। এটি পক্ষ, পরিমাণ এবং রেমিটেন্স ডেটা বহন করে।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/bn/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">পেমেন্ট রিটার্ন</td>
          <td class="related-messages-table__overview">pacs.004 বার্তা ইতিমধ্যে নিষ্পত্তি হওয়া পেমেন্ট ফেরত দেয়। পেমেন্ট প্রয়োগ করা না গেলে এটি তহবিল ফেরত পাঠায়।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/bn/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস রিপোর্ট</td>
          <td class="related-messages-table__overview">pacs.002 বার্তা একটি পূর্ববর্তী পেমেন্ট নির্দেশনার অবস্থা রিপোর্ট করে। এটি অন্য প্রতিষ্ঠানকে জানায় পেমেন্টটি গৃহীত, প্রত্যাখ্যাত, মুলতুবি বা নিষ্পত্তি হয়েছে কিনা।</td>
        </tr>
    </tbody>
  </table>
</div>

