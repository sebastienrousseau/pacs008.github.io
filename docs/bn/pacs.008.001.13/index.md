---
title: "pacs.008.001.13 | আর্থিক প্রতিষ্ঠানের মধ্যে গ্রাহক ক্রেডিট ট্রান্সফার | pacs008"
description: pacs.008 বার্তা ব্যাংকগুলির মধ্যে প্রধান গ্রাহক ক্রেডিট-ট্রান্সফার নির্দেশনা। এটি পক্ষ, পরিমাণ এবং রেমিটেন্স ডেটা বহন করে।
lang: bn-BD
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — আর্থিক প্রতিষ্ঠানের মধ্যে গ্রাহক ক্রেডিট ট্রান্সফার

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>নিবন্ধন অবস্থা</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>বছর</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>সংস্করণ</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## সংক্ষিপ্ত বিবরণ

pacs.008 বার্তা ব্যাংকগুলির মধ্যে প্রধান গ্রাহক ক্রেডিট-ট্রান্সফার নির্দেশনা। এটি পক্ষ, পরিমাণ এবং রেমিটেন্স ডেটা বহন করে।

> Last reviewed against primary sources on 23 March 2026. ISO 20022 catalogue reference date: 2025-02-27; source links are listed below.

## মূল ডেটা উপাদান

- **GrpHdr** — বার্তা ID, সৃষ্টির তারিখ, লেনদেনের সংখ্যা এবং নিষ্পত্তি তথ্য সহ গ্রুপ হেডার
- **CdtTrfTxInf** — পরিমাণ, চার্জ এবং উদ্দেশ্য সহ ক্রেডিট ট্রান্সফার লেনদেন তথ্য
- **Dbtr / DbtrAgt** — ডেবিটর এবং ডেবিটর এজেন্ট শনাক্তকরণ এবং অ্যাকাউন্ট বিবরণ
- **Cdtr / CdtrAgt** — ক্রেডিটর এবং ক্রেডিটর এজেন্ট শনাক্তকরণ এবং অ্যাকাউন্ট বিবরণ
- **RmtInf** — কাঠামোগত বা অকাঠামোগত পেমেন্ট রেফারেন্সের জন্য রেমিটেন্স তথ্য

## ব্যবসায়িক প্রেক্ষাপট

- গ্রাহক ক্রেডিট ট্রান্সফারের প্রধান বার্তা
- SEPA, CBPR+ এবং জাতীয় ক্লিয়ারিং সিস্টেম জুড়ে ব্যবহৃত
- রিকনসিলিয়েশনের জন্য রেমিটেন্স ডেটা বহন করে
- সিরিয়াল, কভার এবং ডাইরেক্ট সেটেলমেন্ট পদ্ধতি সমর্থন করে

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — বার্তা ID, সৃষ্টির তারিখ, লেনদেনের সংখ্যা এবং নিষ্পত্তি তথ্য সহ গ্রুপ হেডার</td>
          <td class="operational-matrix-table__right">গ্রাহক ক্রেডিট ট্রান্সফারের প্রধান বার্তা</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — পরিমাণ, চার্জ এবং উদ্দেশ্য সহ ক্রেডিট ট্রান্সফার লেনদেন তথ্য</td>
          <td class="operational-matrix-table__right">SEPA, CBPR+ এবং জাতীয় ক্লিয়ারিং সিস্টেম জুড়ে ব্যবহৃত</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — ডেবিটর এবং ডেবিটর এজেন্ট শনাক্তকরণ এবং অ্যাকাউন্ট বিবরণ</td>
          <td class="operational-matrix-table__right">রিকনসিলিয়েশনের জন্য রেমিটেন্স ডেটা বহন করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — ক্রেডিটর এবং ক্রেডিটর এজেন্ট শনাক্তকরণ এবং অ্যাকাউন্ট বিবরণ</td>
          <td class="operational-matrix-table__right">সিরিয়াল, কভার এবং ডাইরেক্ট সেটেলমেন্ট পদ্ধতি সমর্থন করে</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — কাঠামোগত বা অকাঠামোগত পেমেন্ট রেফারেন্সের জন্য রেমিটেন্স তথ্য</td>
          <td class="operational-matrix-table__right">ডেবিটর এজেন্ট pacs.008 তৈরি করে এবং ক্রেডিটর এজেন্টের কাছে পাঠায় (সরাসরি বা মধ্যস্থতাকারীদের মাধ্যমে)। চেইনের প্রতিটি এজেন্ট যাচাই, সমৃদ্ধ এবং ফরোয়ার্ড করে যতক্ষণ না ক্রেডিটর এজেন্ট সুবিধাভোগীর অ্যাকাউন্টে ক্রেডিট করে।</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ এবং স্কিম প্রেক্ষাপট

- ক্রস-বর্ডার গ্রাহক ক্রেডিট ট্রান্সফারের জন্য MT103 এবং MT103+ প্রতিস্থাপন করে
- নভেম্বর 2026 কাঠামোগত ঠিকানা সময়সীমা সমস্ত পক্ষের ডাক ঠিকানায় প্রযোজ্য
- SWIFT gpi UETR-ভিত্তিক এন্ড-টু-এন্ড ট্র্যাকিংয়ের জন্য pacs.008 প্রয়োজন
- 13টি সংশোধনী বাজার পরিকাঠামো জুড়ে স্কিমার চলমান বিবর্তন প্রতিফলিত করে

## বার্তা প্রবাহ

ডেবিটর এজেন্ট pacs.008 তৈরি করে এবং ক্রেডিটর এজেন্টের কাছে পাঠায় (সরাসরি বা মধ্যস্থতাকারীদের মাধ্যমে)। চেইনের প্রতিটি এজেন্ট যাচাই, সমৃদ্ধ এবং ফরোয়ার্ড করে যতক্ষণ না ক্রেডিটর এজেন্ট সুবিধাভোগীর অ্যাকাউন্টে ক্রেডিট করে।

## Primary references

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [SWIFT CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [SWIFT CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## সমর্থিত সংস্করণ

<div class="message-versions-table" tabindex="0" aria-label="সমর্থিত সংস্করণ">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>সংস্করণ</th>
        <th>অবস্থা</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>বর্তমান</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/bn/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">পেমেন্ট রিটার্ন</td>
          <td class="related-messages-table__overview">pacs.004 বার্তা ইতিমধ্যে নিষ্পত্তি হওয়া পেমেন্ট ফেরত দেয়। পেমেন্ট প্রয়োগ করা না গেলে এটি তহবিল ফেরত পাঠায়।</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/bn/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে ক্রেডিট ট্রান্সফার</td>
          <td class="related-messages-table__overview">pacs.009 বার্তা আর্থিক প্রতিষ্ঠানের নিজস্ব অ্যাকাউন্টের মধ্যে ক্রেডিট ট্রান্সফারের জন্য ব্যবহৃত হয়। এটি আন্তঃব্যাংক ফান্ডিং, কভার পেমেন্ট এবং তারল্য ব্যবস্থাপনা সমর্থন করে।</td>
        </tr>
    </tbody>
  </table>
</div>

