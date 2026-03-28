---
title: "pacs.010.001.05 | আর্থিক প্রতিষ্ঠানের মধ্যে ডাইরেক্ট ডেবিট | pacs008"
description: pacs.010 বার্তা আর্থিক প্রতিষ্ঠানের নিজস্ব অ্যাকাউন্টের ডাইরেক্ট ডেবিট লেনদেনের জন্য ব্যবহৃত হয়। এটি একটি প্রতিষ্ঠানকে অন্য প্রতিষ্ঠানের অ্যাকাউন্ট থেকে...
lang: bn-BD
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.010 common in retail payment products?"
    answer: "Usually no. It fits bank-to-bank direct-debit scenarios better than standard retail products."
  - question: "What should teams design first?"
    answer: "Start with approval rules, bilateral controls, and exception handling before finalising XML templates."
---

# pacs.010.001.05 — আর্থিক প্রতিষ্ঠানের মধ্যে ডাইরেক্ট ডেবিট

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## সংক্ষিপ্ত বিবরণ

pacs.010 বার্তা আর্থিক প্রতিষ্ঠানের নিজস্ব অ্যাকাউন্টের ডাইরেক্ট ডেবিট লেনদেনের জন্য ব্যবহৃত হয়। এটি একটি প্রতিষ্ঠানকে অন্য প্রতিষ্ঠানের অ্যাকাউন্ট থেকে সরাসরি তহবিল সংগ্রহ করতে দেয়।

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## মূল ডেটা উপাদান

- **GrpHdr** — বার্তা শনাক্তকরণ এবং নিষ্পত্তি তথ্য সহ গ্রুপ হেডার
- **DrctDbtTxInf** — সংগ্রহ পরিমাণ সহ ডাইরেক্ট ডেবিট লেনদেন তথ্য
- **Cdtr / CdtrAgt** — ক্রেডিটর প্রতিষ্ঠান এবং এজেন্ট শনাক্তকরণ
- **Dbtr / DbtrAgt** — ডেবিটর প্রতিষ্ঠান এবং এজেন্ট শনাক্তকরণ
- **IntrBkSttlmAmt** — নিষ্পত্তি মুদ্রায় আন্তঃব্যাংক নিষ্পত্তি পরিমাণ

## ব্যবসায়িক প্রেক্ষাপট

- আর্থিক প্রতিষ্ঠানের মধ্যে আন্তঃব্যাংক ডাইরেক্ট ডেবিট সংগ্রহ সমর্থন করে
- ফি সংগ্রহ, মার্জিন কল এবং প্রাতিষ্ঠানিক নিষ্পত্তি বাধ্যবাধকতার জন্য ব্যবহৃত
- অংশগ্রহণকারী প্রতিষ্ঠানের মধ্যে পূর্ব-সম্মত দ্বিপাক্ষিক ব্যবস্থা প্রয়োজন
- প্রাতিষ্ঠানিক নগদ ব্যবস্থাপনা এবং আন্তঃব্যাংক নিষ্পত্তি চক্রের জন্য গুরুত্বপূর্ণ

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
          <td class="operational-matrix-table__right">আর্থিক প্রতিষ্ঠানের মধ্যে আন্তঃব্যাংক ডাইরেক্ট ডেবিট সংগ্রহ সমর্থন করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — সংগ্রহ পরিমাণ সহ ডাইরেক্ট ডেবিট লেনদেন তথ্য</td>
          <td class="operational-matrix-table__right">ফি সংগ্রহ, মার্জিন কল এবং প্রাতিষ্ঠানিক নিষ্পত্তি বাধ্যবাধকতার জন্য ব্যবহৃত</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — ক্রেডিটর প্রতিষ্ঠান এবং এজেন্ট শনাক্তকরণ</td>
          <td class="operational-matrix-table__right">অংশগ্রহণকারী প্রতিষ্ঠানের মধ্যে পূর্ব-সম্মত দ্বিপাক্ষিক ব্যবস্থা প্রয়োজন</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — ডেবিটর প্রতিষ্ঠান এবং এজেন্ট শনাক্তকরণ</td>
          <td class="operational-matrix-table__right">প্রাতিষ্ঠানিক নগদ ব্যবস্থাপনা এবং আন্তঃব্যাংক নিষ্পত্তি চক্রের জন্য গুরুত্বপূর্ণ</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — নিষ্পত্তি মুদ্রায় আন্তঃব্যাংক নিষ্পত্তি পরিমাণ</td>
          <td class="operational-matrix-table__right">ক্রেডিটর প্রতিষ্ঠান পূর্ব-সম্মত ব্যবস্থার ভিত্তিতে ডেবিটর প্রতিষ্ঠানে pacs.010 পাঠায়। ডেবিটর প্রতিষ্ঠান অনুরোধ যাচাই করে এবং ডাইরেক্ট ডেবিট নিষ্পত্তি বা প্রত্যাখ্যান করে।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ এবং স্কিম প্রেক্ষাপট

- আন্তঃব্যাংক ডাইরেক্ট ডেবিট প্রসেসিংয়ে MT204 এর উপাদান প্রতিস্থাপন করে
- কাঠামোগত পক্ষ শনাক্তকরণ অন্যান্য pacs বার্তার মতো একই প্রয়োজনীয়তা অনুসরণ করে
- প্রতিষ্ঠান শনাক্তকারী (BIC, LEI) যাচাই বাধ্যতামূলক
- বাজার পরিকাঠামোতে সম্পূর্ণ ISO 20022 গ্রহণের রোডম্যাপে অন্তর্ভুক্ত

## বার্তা প্রবাহ

ক্রেডিটর প্রতিষ্ঠান পূর্ব-সম্মত ব্যবস্থার ভিত্তিতে ডেবিটর প্রতিষ্ঠানে pacs.010 পাঠায়। ডেবিটর প্রতিষ্ঠান অনুরোধ যাচাই করে এবং ডাইরেক্ট ডেবিট নিষ্পত্তি বা প্রত্যাখ্যান করে।

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/bn/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে ক্রেডিট ট্রান্সফার</td>
          <td class="related-messages-table__overview">pacs.009 বার্তা আর্থিক প্রতিষ্ঠানের নিজস্ব অ্যাকাউন্টের মধ্যে ক্রেডিট ট্রান্সফারের জন্য ব্যবহৃত হয়। এটি আন্তঃব্যাংক ফান্ডিং, কভার পেমেন্ট এবং তারল্য ব্যবস্থাপনা সমর্থন করে।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/bn/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস রিপোর্ট</td>
          <td class="related-messages-table__overview">pacs.002 বার্তা একটি পূর্ববর্তী পেমেন্ট নির্দেশনার অবস্থা রিপোর্ট করে। এটি অন্য প্রতিষ্ঠানকে জানায় পেমেন্টটি গৃহীত, প্রত্যাখ্যাত, মুলতুবি বা নিষ্পত্তি হয়েছে কিনা।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/bn/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে গ্রাহক ডাইরেক্ট ডেবিট</td>
          <td class="related-messages-table__overview">pacs.003 বার্তা ব্যাংকগুলির মধ্যে গ্রাহক ডাইরেক্ট ডেবিট বহন করে। এটি ক্রেডিটর ব্যাংককে ডেবিটর ব্যাংক থেকে তহবিল সংগ্রহ করতে দেয়।</td>
        </tr>
    </tbody>
  </table>
</div>

