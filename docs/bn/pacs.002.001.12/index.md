---
title: "pacs.002.001.12 | আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস রিপোর্ট | pacs008"
description: pacs.002 বার্তা একটি পূর্ববর্তী পেমেন্ট নির্দেশনার অবস্থা রিপোর্ট করে। এটি অন্য প্রতিষ্ঠানকে জানায় পেমেন্টটি গৃহীত, প্রত্যাখ্যাত, মুলতুবি বা নিষ্পত্তি...
lang: bn-BD
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.002 a payment message?"
    answer: "No. It reports status for an earlier instruction rather than moving value itself."
  - question: "Should pacs.002 replace internal workflow states?"
    answer: "No. It should inform them, but internal case states still need their own operational logic."
---

# pacs.002.001.12 — আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস রিপোর্ট

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## সংক্ষিপ্ত বিবরণ

pacs.002 বার্তা একটি পূর্ববর্তী পেমেন্ট নির্দেশনার অবস্থা রিপোর্ট করে। এটি অন্য প্রতিষ্ঠানকে জানায় পেমেন্টটি গৃহীত, প্রত্যাখ্যাত, মুলতুবি বা নিষ্পত্তি হয়েছে কিনা।

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## মূল ডেটা উপাদান

- **GrpHdr** — বার্তা শনাক্তকরণ এবং সৃষ্টি টাইমস্ট্যাম্প সহ গ্রুপ হেডার
- **OrgnlGrpInfAndSts** — বাল্ক-স্তরের রিপোর্টিংয়ের জন্য মূল গ্রুপ তথ্য এবং অবস্থা
- **TxInfAndSts** — পৃথক লেনদেনের ফলাফলের জন্য লেনদেন তথ্য এবং অবস্থা
- **StsRsnInf** — কাঠামোগত কারণ কোড সহ অবস্থার কারণ তথ্য
- **OrgnlTxRef** — উৎস নির্দেশনায় ফিরে যুক্ত মূল লেনদেন রেফারেন্স

## ব্যবসায়িক প্রেক্ষাপট

- ক্রেডিট ট্রান্সফার, ডাইরেক্ট ডেবিট এবং রিটার্নের নিষ্পত্তি নিশ্চিত করে বা প্রত্যাখ্যান রিপোর্ট করে
- নির্দেশদাতা এবং নির্দেশপ্রাপ্ত এজেন্টদের মধ্যে রিকনসিলিয়েশন সমর্থন করে
- pacs.008 এবং pacs.009 স্ট্যাটাস রিপোর্টিংয়ের জন্য CBPR+ ফ্লোতে ব্যবহৃত হয়
- গ্রুপ-স্তর এবং লেনদেন-স্তরের স্ট্যাটাস রিপোর্টিং সমর্থন করে

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
          <td class="operational-matrix-table__right">ক্রেডিট ট্রান্সফার, ডাইরেক্ট ডেবিট এবং রিটার্নের নিষ্পত্তি নিশ্চিত করে বা প্রত্যাখ্যান রিপোর্ট করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — বাল্ক-স্তরের রিপোর্টিংয়ের জন্য মূল গ্রুপ তথ্য এবং অবস্থা</td>
          <td class="operational-matrix-table__right">নির্দেশদাতা এবং নির্দেশপ্রাপ্ত এজেন্টদের মধ্যে রিকনসিলিয়েশন সমর্থন করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — পৃথক লেনদেনের ফলাফলের জন্য লেনদেন তথ্য এবং অবস্থা</td>
          <td class="operational-matrix-table__right">pacs.008 এবং pacs.009 স্ট্যাটাস রিপোর্টিংয়ের জন্য CBPR+ ফ্লোতে ব্যবহৃত হয়</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — কাঠামোগত কারণ কোড সহ অবস্থার কারণ তথ্য</td>
          <td class="operational-matrix-table__right">গ্রুপ-স্তর এবং লেনদেন-স্তরের স্ট্যাটাস রিপোর্টিং সমর্থন করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — উৎস নির্দেশনায় ফিরে যুক্ত মূল লেনদেন রেফারেন্স</td>
          <td class="operational-matrix-table__right">নির্দেশপ্রাপ্ত এজেন্ট pacs.008 বা pacs.009 এর মতো পেমেন্ট নির্দেশনার গ্রহণ, নিষ্পত্তি বা প্রত্যাখ্যান নিশ্চিত করতে নির্দেশদাতা এজেন্টকে pacs.002 ফেরত পাঠায়।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ এবং স্কিম প্রেক্ষাপট

- MT199 এবং MT বার্তায় ফিল্ড 79 স্ট্যাটাস টেক্সট প্রতিস্থাপন করে
- CBPR+ সমস্ত পেমেন্ট স্ট্যাটাস যোগাযোগের জন্য pacs.002 বাধ্যতামূলক করে
- কাঠামোগত কারণ কোড ফ্রি-টেক্সট প্রত্যাখ্যান ব্যাখ্যা প্রতিস্থাপন করে
- SWIFT gpi ট্র্যাকিং ইন্টিগ্রেশনে এন্ড-টু-এন্ড স্বচ্ছতার জন্য pacs.002 প্রয়োজন

## বার্তা প্রবাহ

নির্দেশপ্রাপ্ত এজেন্ট pacs.008 বা pacs.009 এর মতো পেমেন্ট নির্দেশনার গ্রহণ, নিষ্পত্তি বা প্রত্যাখ্যান নিশ্চিত করতে নির্দেশদাতা এজেন্টকে pacs.002 ফেরত পাঠায়।

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/bn/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে ক্রেডিট ট্রান্সফার</td>
          <td class="related-messages-table__overview">pacs.009 বার্তা আর্থিক প্রতিষ্ঠানের নিজস্ব অ্যাকাউন্টের মধ্যে ক্রেডিট ট্রান্সফারের জন্য ব্যবহৃত হয়। এটি আন্তঃব্যাংক ফান্ডিং, কভার পেমেন্ট এবং তারল্য ব্যবস্থাপনা সমর্থন করে।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/bn/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস অনুরোধ</td>
          <td class="related-messages-table__overview">pacs.028 বার্তা পূর্ববর্তী পেমেন্ট নির্দেশনার অবস্থা জিজ্ঞাসা করতে ব্যবহৃত হয়। এটি স্ট্যাটাস রিপোর্টের জন্য অপেক্ষা না করে পেমেন্ট প্রসেসিংয়ের সক্রিয় ট্র্যাকিং সক্ষম করে।</td>
        </tr>
    </tbody>
  </table>
</div>

