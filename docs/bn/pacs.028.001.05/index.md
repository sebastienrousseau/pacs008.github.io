---
title: "pacs.028.001.05 | আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস অনুরোধ | pacs008"
description: pacs.028 বার্তা পূর্ববর্তী পেমেন্ট নির্দেশনার অবস্থা জিজ্ঞাসা করতে ব্যবহৃত হয়। এটি স্ট্যাটাস রিপোর্টের জন্য অপেক্ষা না করে পেমেন্ট প্রসেসিংয়ের সক্রিয়...
lang: bn-BD
lastUpdated: true
image: /logo.webp
faq:
  - question: "Should pacs.028 be sent after every payment?"
    answer: "Usually no. It works best as a targeted exception tool, not as blanket traffic."
  - question: "What makes pacs.028 useful?"
    answer: "Clear timeout, escalation, and reconciliation rules around the original payment case."
---

# pacs.028.001.05 — আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস অনুরোধ

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
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

pacs.028 বার্তা পূর্ববর্তী পেমেন্ট নির্দেশনার অবস্থা জিজ্ঞাসা করতে ব্যবহৃত হয়। এটি স্ট্যাটাস রিপোর্টের জন্য অপেক্ষা না করে পেমেন্ট প্রসেসিংয়ের সক্রিয় ট্র্যাকিং সক্ষম করে।

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## মূল ডেটা উপাদান

- **GrpHdr** — বার্তা শনাক্তকরণ এবং সৃষ্টি টাইমস্ট্যাম্প সহ গ্রুপ হেডার
- **TxInf** — জিজ্ঞাসিত পেমেন্ট শনাক্তকারী লেনদেন তথ্য
- **OrgnlGrpInf** — উৎস বার্তা রেফারেন্সকারী মূল গ্রুপ তথ্য
- **OrgnlInstrId** — উৎস পেমেন্ট থেকে মূল নির্দেশনা শনাক্তকারী
- **OrgnlEndToEndId** — ট্রেসেবিলিটির জন্য মূল এন্ড-টু-এন্ড শনাক্তকারী

## ব্যবসায়িক প্রেক্ষাপট

- ট্রানজিটে থাকা পেমেন্ট নির্দেশনার জন্য সক্রিয় স্ট্যাটাস জিজ্ঞাসা সমর্থন করে
- বিলম্বিত বা হারানো পেমেন্ট তদন্তে অপারেশন দলগুলিকে সহায়তা করে
- অপেক্ষার পরিবর্তে সক্রিয়ভাবে স্ট্যাটাস যোগাযোগ শুরু করে pacs.002 এর পরিপূরক
- ব্যতিক্রম পরিচালনা এবং SLA পর্যবেক্ষণ ওয়ার্কফ্লোতে ব্যবহৃত

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
          <td class="operational-matrix-table__right">ট্রানজিটে থাকা পেমেন্ট নির্দেশনার জন্য সক্রিয় স্ট্যাটাস জিজ্ঞাসা সমর্থন করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — জিজ্ঞাসিত পেমেন্ট শনাক্তকারী লেনদেন তথ্য</td>
          <td class="operational-matrix-table__right">বিলম্বিত বা হারানো পেমেন্ট তদন্তে অপারেশন দলগুলিকে সহায়তা করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — উৎস বার্তা রেফারেন্সকারী মূল গ্রুপ তথ্য</td>
          <td class="operational-matrix-table__right">অপেক্ষার পরিবর্তে সক্রিয়ভাবে স্ট্যাটাস যোগাযোগ শুরু করে pacs.002 এর পরিপূরক</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — উৎস পেমেন্ট থেকে মূল নির্দেশনা শনাক্তকারী</td>
          <td class="operational-matrix-table__right">ব্যতিক্রম পরিচালনা এবং SLA পর্যবেক্ষণ ওয়ার্কফ্লোতে ব্যবহৃত</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — ট্রেসেবিলিটির জন্য মূল এন্ড-টু-এন্ড শনাক্তকারী</td>
          <td class="operational-matrix-table__right">নির্দেশদাতা এজেন্ট একটি নির্দিষ্ট পেমেন্টের স্ট্যাটাস অনুরোধ করতে নির্দেশপ্রাপ্ত এজেন্টকে pacs.028 পাঠায়। নির্দেশপ্রাপ্ত এজেন্ট বর্তমান প্রক্রিয়াকরণ অবস্থা সম্বলিত pacs.002 দিয়ে প্রতিক্রিয়া জানায়।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ এবং স্কিম প্রেক্ষাপট

- MT199 স্ট্যাটাস জিজ্ঞাসা প্যাটার্ন এবং ম্যানুয়াল SWIFT বার্তা অনুসন্ধান প্রতিস্থাপন করে
- CBPR+ মূল বার্তা শনাক্তকারীর সাথে সংযুক্ত কাঠামোগত স্ট্যাটাস অনুরোধ সমর্থন করে
- gpi-এর মাধ্যমে UETR-ভিত্তিক ট্র্যাকিং ম্যানুয়াল জিজ্ঞাসার প্রয়োজন হ্রাস করে
- ক্রমবর্ধমানভাবে স্বয়ংক্রিয় পেমেন্ট অপারেশন ড্যাশবোর্ডে একীভূত হচ্ছে

## বার্তা প্রবাহ

নির্দেশদাতা এজেন্ট একটি নির্দিষ্ট পেমেন্টের স্ট্যাটাস অনুরোধ করতে নির্দেশপ্রাপ্ত এজেন্টকে pacs.028 পাঠায়। নির্দেশপ্রাপ্ত এজেন্ট বর্তমান প্রক্রিয়াকরণ অবস্থা সম্বলিত pacs.002 দিয়ে প্রতিক্রিয়া জানায়।

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/bn/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস রিপোর্ট</td>
          <td class="related-messages-table__overview">pacs.002 বার্তা একটি পূর্ববর্তী পেমেন্ট নির্দেশনার অবস্থা রিপোর্ট করে। এটি অন্য প্রতিষ্ঠানকে জানায় পেমেন্টটি গৃহীত, প্রত্যাখ্যাত, মুলতুবি বা নিষ্পত্তি হয়েছে কিনা।</td>
        </tr>
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
    </tbody>
  </table>
</div>

