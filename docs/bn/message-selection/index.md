---
title: "Message Selection Guide | pacs008"
description: Choose the right ISO 20022 pacs message for generation, status reporting, returns, reversals, and payment enquiries.
lang: bn-BD
lastUpdated: true
image: /logo.webp
---

# Message Selection Guide

Choose the pacs family by business event first, then by scheme and operating model.

## Quick decision matrix

<div class="decision-matrix-table" tabindex="0" aria-label="Quick decision matrix">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
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
          <td class="decision-matrix-table__id"><a href="/bn/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস রিপোর্ট</td>
          <td class="decision-matrix-table__overview">pacs.002 বার্তা একটি পূর্ববর্তী পেমেন্ট নির্দেশনার অবস্থা রিপোর্ট করে। এটি অন্য প্রতিষ্ঠানকে জানায় পেমেন্টটি গৃহীত, প্রত্যাখ্যাত, মুলতুবি বা নিষ্পত্তি হয়েছে কিনা।</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/bn/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে গ্রাহক ডাইরেক্ট ডেবিট</td>
          <td class="decision-matrix-table__overview">pacs.003 বার্তা ব্যাংকগুলির মধ্যে গ্রাহক ডাইরেক্ট ডেবিট বহন করে। এটি ক্রেডিটর ব্যাংককে ডেবিটর ব্যাংক থেকে তহবিল সংগ্রহ করতে দেয়।</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/bn/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">পেমেন্ট রিটার্ন</td>
          <td class="decision-matrix-table__overview">pacs.004 বার্তা ইতিমধ্যে নিষ্পত্তি হওয়া পেমেন্ট ফেরত দেয়। পেমেন্ট প্রয়োগ করা না গেলে এটি তহবিল ফেরত পাঠায়।</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/bn/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট রিভার্সাল</td>
          <td class="decision-matrix-table__overview">pacs.007 বার্তা পূর্ববর্তী পেমেন্ট নির্দেশনা রিভার্স করে। pacs.004 এর বিপরীতে, এটি মূল প্রেরকের কাছ থেকে শুরু হয়।</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/bn/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে গ্রাহক ক্রেডিট ট্রান্সফার</td>
          <td class="decision-matrix-table__overview">pacs.008 বার্তা ব্যাংকগুলির মধ্যে প্রধান গ্রাহক ক্রেডিট-ট্রান্সফার নির্দেশনা। এটি পক্ষ, পরিমাণ এবং রেমিটেন্স ডেটা বহন করে।</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/bn/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে ক্রেডিট ট্রান্সফার</td>
          <td class="decision-matrix-table__overview">pacs.009 বার্তা আর্থিক প্রতিষ্ঠানের নিজস্ব অ্যাকাউন্টের মধ্যে ক্রেডিট ট্রান্সফারের জন্য ব্যবহৃত হয়। এটি আন্তঃব্যাংক ফান্ডিং, কভার পেমেন্ট এবং তারল্য ব্যবস্থাপনা সমর্থন করে।</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/bn/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে ডাইরেক্ট ডেবিট</td>
          <td class="decision-matrix-table__overview">pacs.010 বার্তা আর্থিক প্রতিষ্ঠানের নিজস্ব অ্যাকাউন্টের ডাইরেক্ট ডেবিট লেনদেনের জন্য ব্যবহৃত হয়। এটি একটি প্রতিষ্ঠানকে অন্য প্রতিষ্ঠানের অ্যাকাউন্ট থেকে সরাসরি তহবিল সংগ্রহ করতে দেয়।</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/bn/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস অনুরোধ</td>
          <td class="decision-matrix-table__overview">pacs.028 বার্তা পূর্ববর্তী পেমেন্ট নির্দেশনার অবস্থা জিজ্ঞাসা করতে ব্যবহৃত হয়। এটি স্ট্যাটাস রিপোর্টের জন্য অপেক্ষা না করে পেমেন্ট প্রসেসিংয়ের সক্রিয় ট্র্যাকিং সক্ষম করে।</td>
        </tr>
    </tbody>
  </table>
</div>

## Common comparison points

<div class="comparison-points-table" tabindex="0" aria-label="Common comparison points">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>Compare</th>
        <th>Key distinction</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">Customer payment versus institution / cover movement</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">Return from receiving side versus reversal from instructing side</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">Status report versus status request</td>
        </tr>
    </tbody>
  </table>
</div>

## Supported message pages

- [`pacs.002.001.12`](/bn/pacs.002.001.12/) — আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস রিপোর্ট
- [`pacs.003.001.09`](/bn/pacs.003.001.09/) — আর্থিক প্রতিষ্ঠানের মধ্যে গ্রাহক ডাইরেক্ট ডেবিট
- [`pacs.004.001.11`](/bn/pacs.004.001.11/) — পেমেন্ট রিটার্ন
- [`pacs.007.001.11`](/bn/pacs.007.001.11/) — আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট রিভার্সাল
- [`pacs.008.001.13`](/bn/pacs.008.001.13/) — আর্থিক প্রতিষ্ঠানের মধ্যে গ্রাহক ক্রেডিট ট্রান্সফার
- [`pacs.009.001.10`](/bn/pacs.009.001.10/) — আর্থিক প্রতিষ্ঠানের মধ্যে ক্রেডিট ট্রান্সফার
- [`pacs.010.001.05`](/bn/pacs.010.001.05/) — আর্থিক প্রতিষ্ঠানের মধ্যে ডাইরেক্ট ডেবিট
- [`pacs.028.001.05`](/bn/pacs.028.001.05/) — আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস অনুরোধ

