---
title: "pacs.009.001.10 | আর্থিক প্রতিষ্ঠানের মধ্যে ক্রেডিট ট্রান্সফার | pacs008"
description: pacs.009 বার্তা আর্থিক প্রতিষ্ঠানের নিজস্ব অ্যাকাউন্টের মধ্যে ক্রেডিট ট্রান্সফারের জন্য ব্যবহৃত হয়। এটি আন্তঃব্যাংক ফান্ডিং, কভার পেমেন্ট এবং তারল্য...
lang: bn-BD
lastUpdated: true
image: /logo.webp
faq:
  - question: "When should I choose pacs.009 over pacs.008?"
    answer: "Choose pacs.009 for own-account transfers and cover legs; choose pacs.008 for customer-credit-transfer instructions."
  - question: "Why is pacs.009 often harder to reconcile than expected?"
    answer: "Because banks must preserve the relationship between treasury funding, correspondent legs, and any linked customer payment."
---

# pacs.009.001.10 — আর্থিক প্রতিষ্ঠানের মধ্যে ক্রেডিট ট্রান্সফার

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## সংক্ষিপ্ত বিবরণ

pacs.009 বার্তা আর্থিক প্রতিষ্ঠানের নিজস্ব অ্যাকাউন্টের মধ্যে ক্রেডিট ট্রান্সফারের জন্য ব্যবহৃত হয়। এটি আন্তঃব্যাংক ফান্ডিং, কভার পেমেন্ট এবং তারল্য ব্যবস্থাপনা সমর্থন করে।

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## মূল ডেটা উপাদান

- **GrpHdr** — বার্তা শনাক্তকরণ এবং নিষ্পত্তি তথ্য সহ গ্রুপ হেডার
- **CdtTrfTxInf** — আন্তঃব্যাংক নিষ্পত্তি পরিমাণ সহ ক্রেডিট ট্রান্সফার লেনদেন তথ্য
- **Dbtr / DbtrAgt** — ডেবিটর প্রতিষ্ঠান এবং এজেন্ট শনাক্তকরণ
- **Cdtr / CdtrAgt** — ক্রেডিটর প্রতিষ্ঠান এবং এজেন্ট শনাক্তকরণ
- **IntrBkSttlmAmt** — নিষ্পত্তি মুদ্রায় আন্তঃব্যাংক নিষ্পত্তি পরিমাণ

## ব্যবসায়িক প্রেক্ষাপট

- ব্যাংকগুলির মধ্যে নিজস্ব-অ্যাকাউন্ট ট্রান্সফার এবং কভার পেমেন্টের জন্য ব্যবহৃত
- করেসপন্ডেন্ট ব্যাংকিং অংশীদারদের মধ্যে তারল্য ব্যবস্থাপনা সমর্থন করে
- কভার পদ্ধতিতে নিষ্পত্তিকৃত গ্রাহক ক্রেডিট ট্রান্সফারের কভার লেগ বহন করে
- আর্থিক প্রতিষ্ঠানের মধ্যে ট্রেজারি এবং ফান্ডিং অপারেশন সমর্থন করে

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
          <td class="operational-matrix-table__right">ব্যাংকগুলির মধ্যে নিজস্ব-অ্যাকাউন্ট ট্রান্সফার এবং কভার পেমেন্টের জন্য ব্যবহৃত</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — আন্তঃব্যাংক নিষ্পত্তি পরিমাণ সহ ক্রেডিট ট্রান্সফার লেনদেন তথ্য</td>
          <td class="operational-matrix-table__right">করেসপন্ডেন্ট ব্যাংকিং অংশীদারদের মধ্যে তারল্য ব্যবস্থাপনা সমর্থন করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — ডেবিটর প্রতিষ্ঠান এবং এজেন্ট শনাক্তকরণ</td>
          <td class="operational-matrix-table__right">কভার পদ্ধতিতে নিষ্পত্তিকৃত গ্রাহক ক্রেডিট ট্রান্সফারের কভার লেগ বহন করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — ক্রেডিটর প্রতিষ্ঠান এবং এজেন্ট শনাক্তকরণ</td>
          <td class="operational-matrix-table__right">আর্থিক প্রতিষ্ঠানের মধ্যে ট্রেজারি এবং ফান্ডিং অপারেশন সমর্থন করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — নিষ্পত্তি মুদ্রায় আন্তঃব্যাংক নিষ্পত্তি পরিমাণ</td>
          <td class="operational-matrix-table__right">ডেবিটর প্রতিষ্ঠান নিজস্ব তহবিল স্থানান্তর করতে ক্রেডিটর প্রতিষ্ঠানে pacs.009 পাঠায়। কভার পেমেন্টের জন্য, pacs.009 ফান্ডিং লেগ প্রদান করে যখন pacs.008 অন্য পথ দিয়ে গ্রাহক নির্দেশনা বহন করে।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ এবং স্কিম প্রেক্ষাপট

- প্রাতিষ্ঠানিক ট্রান্সফারের জন্য MT202 এবং MT202COV প্রতিস্থাপন করে
- কভার-পদ্ধতি ফ্লো pacs.009 কে অন্তর্নিহিত pacs.008 গ্রাহক নির্দেশনার সাথে জোড়া দেয়
- কাঠামোগত পক্ষ ডেটা এবং LEI শনাক্তকরণের প্রয়োজনীয়তা বৃদ্ধি পাচ্ছে
- SWIFT gpi করেসপন্ডেন্ট ব্যাংকিং স্বচ্ছতার জন্য pacs.009 কভার করে

## বার্তা প্রবাহ

ডেবিটর প্রতিষ্ঠান নিজস্ব তহবিল স্থানান্তর করতে ক্রেডিটর প্রতিষ্ঠানে pacs.009 পাঠায়। কভার পেমেন্টের জন্য, pacs.009 ফান্ডিং লেগ প্রদান করে যখন pacs.008 অন্য পথ দিয়ে গ্রাহক নির্দেশনা বহন করে।

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [SWIFT CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/bn/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস রিপোর্ট</td>
          <td class="related-messages-table__overview">pacs.002 বার্তা একটি পূর্ববর্তী পেমেন্ট নির্দেশনার অবস্থা রিপোর্ট করে। এটি অন্য প্রতিষ্ঠানকে জানায় পেমেন্টটি গৃহীত, প্রত্যাখ্যাত, মুলতুবি বা নিষ্পত্তি হয়েছে কিনা।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/bn/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে ডাইরেক্ট ডেবিট</td>
          <td class="related-messages-table__overview">pacs.010 বার্তা আর্থিক প্রতিষ্ঠানের নিজস্ব অ্যাকাউন্টের ডাইরেক্ট ডেবিট লেনদেনের জন্য ব্যবহৃত হয়। এটি একটি প্রতিষ্ঠানকে অন্য প্রতিষ্ঠানের অ্যাকাউন্ট থেকে সরাসরি তহবিল সংগ্রহ করতে দেয়।</td>
        </tr>
    </tbody>
  </table>
</div>

