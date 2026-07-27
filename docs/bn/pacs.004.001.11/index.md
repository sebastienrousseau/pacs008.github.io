---
title: "pacs.004.001.11 | পেমেন্ট রিটার্ন | pacs008"
description: pacs.004 বার্তা ইতিমধ্যে নিষ্পত্তি হওয়া পেমেন্ট ফেরত দেয়। পেমেন্ট প্রয়োগ করা না গেলে এটি তহবিল ফেরত পাঠায়।
lang: bn-BD
lastUpdated: true
image: /logo.webp
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — পেমেন্ট রিটার্ন

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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

pacs.004 বার্তা ইতিমধ্যে নিষ্পত্তি হওয়া পেমেন্ট ফেরত দেয়। পেমেন্ট প্রয়োগ করা না গেলে এটি তহবিল ফেরত পাঠায়।

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## মূল ডেটা উপাদান

- **GrpHdr** — বার্তা শনাক্তকরণ এবং সৃষ্টি টাইমস্ট্যাম্প সহ গ্রুপ হেডার
- **TxInf** — রিটার্ন পরিমাণ এবং পক্ষসমূহ সহ লেনদেন তথ্য
- **OrgnlGrpInf** — উৎস বার্তায় লিঙ্ককৃত মূল গ্রুপ তথ্য
- **RtrRsnInf** — কাঠামোগত কারণ কোড সহ রিটার্নের কারণ তথ্য
- **OrgnlTxRef** — ম্যাচিং এবং রিকনসিলিয়েশনের জন্য মূল লেনদেন রেফারেন্স

## ব্যবসায়িক প্রেক্ষাপট

- সুবিধাভোগীর অ্যাকাউন্টে ক্রেডিট দেওয়া না গেলে নিষ্পত্তি-পরবর্তী রিটার্ন পরিচালনা করে
- প্রেরক তহবিল ফেরত অনুরোধ করলে রিকল পরিস্থিতি সমর্থন করে
- কাঠামোগত রিটার্ন কারণ কোড বহন করে
- ক্রেডিট ট্রান্সফার রিটার্ন (pacs.008) এবং ডাইরেক্ট ডেবিট রিটার্ন (pacs.003) উভয়ের জন্য প্রযোজ্য

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
          <td class="operational-matrix-table__right">সুবিধাভোগীর অ্যাকাউন্টে ক্রেডিট দেওয়া না গেলে নিষ্পত্তি-পরবর্তী রিটার্ন পরিচালনা করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — রিটার্ন পরিমাণ এবং পক্ষসমূহ সহ লেনদেন তথ্য</td>
          <td class="operational-matrix-table__right">প্রেরক তহবিল ফেরত অনুরোধ করলে রিকল পরিস্থিতি সমর্থন করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — উৎস বার্তায় লিঙ্ককৃত মূল গ্রুপ তথ্য</td>
          <td class="operational-matrix-table__right">কাঠামোগত রিটার্ন কারণ কোড বহন করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — কাঠামোগত কারণ কোড সহ রিটার্নের কারণ তথ্য</td>
          <td class="operational-matrix-table__right">ক্রেডিট ট্রান্সফার রিটার্ন (pacs.008) এবং ডাইরেক্ট ডেবিট রিটার্ন (pacs.003) উভয়ের জন্য প্রযোজ্য</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — ম্যাচিং এবং রিকনসিলিয়েশনের জন্য মূল লেনদেন রেফারেন্স</td>
          <td class="operational-matrix-table__right">নির্দেশপ্রাপ্ত এজেন্ট নিষ্পত্তিকৃত তহবিল ফেরত দিতে পেমেন্ট চেইনের মাধ্যমে pacs.004 ফেরত পাঠায়। চেইনের প্রতিটি এজেন্ট রিটার্ন প্রক্রিয়া করে এবং সংশ্লিষ্ট অ্যাকাউন্টে ক্রেডিট ফেরত দেয়।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ এবং স্কিম প্রেক্ষাপট

- MT103 RETURN এবং কভার-মেথড রিটার্ন মেসেজিং প্রতিস্থাপন করে
- ISO 20022 এর অধীনে রিটার্ন কারণ কোডগুলি মানককৃত এবং মেশিন-রিডেবল
- CBPR+ ম্যাচিংয়ের জন্য সম্পূর্ণ মূল লেনদেন রেফারেন্স প্রয়োজন
- SWIFT gpi ট্র্যাকিং রিটার্নও কভার করে

## বার্তা প্রবাহ

নির্দেশপ্রাপ্ত এজেন্ট নিষ্পত্তিকৃত তহবিল ফেরত দিতে পেমেন্ট চেইনের মাধ্যমে pacs.004 ফেরত পাঠায়। চেইনের প্রতিটি এজেন্ট রিটার্ন প্রক্রিয়া করে এবং সংশ্লিষ্ট অ্যাকাউন্টে ক্রেডিট ফেরত দেয়।

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
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
          <td class="related-messages-table__id"><a href="/bn/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে গ্রাহক ডাইরেক্ট ডেবিট</td>
          <td class="related-messages-table__overview">pacs.003 বার্তা ব্যাংকগুলির মধ্যে গ্রাহক ডাইরেক্ট ডেবিট বহন করে। এটি ক্রেডিটর ব্যাংককে ডেবিটর ব্যাংক থেকে তহবিল সংগ্রহ করতে দেয়।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/bn/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস রিপোর্ট</td>
          <td class="related-messages-table__overview">pacs.002 বার্তা একটি পূর্ববর্তী পেমেন্ট নির্দেশনার অবস্থা রিপোর্ট করে। এটি অন্য প্রতিষ্ঠানকে জানায় পেমেন্টটি গৃহীত, প্রত্যাখ্যাত, মুলতুবি বা নিষ্পত্তি হয়েছে কিনা।</td>
        </tr>
    </tbody>
  </table>
</div>

