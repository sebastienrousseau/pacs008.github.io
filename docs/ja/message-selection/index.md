---
title: "メッセージ選択ガイド | pacs008"
description: 生成、ステータス報告、返却、取消、照会に適した ISO 20022 pacs メッセージを選択します。
lang: ja-JP
lastUpdated: true
image: /logo.webp
---

# メッセージ選択ガイド

まず業務イベントに基づいて pacs ファミリーを選び、次にスキームと運用モデルで絞り込みます。

## クイック判断マトリクス

<div class="decision-matrix-table" tabindex="0" aria-label="クイック判断マトリクス">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>メッセージ種別</th>
        <th>説明</th>
        <th>概要</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ja/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">金融機関間支払ステータス報告</td>
          <td class="decision-matrix-table__overview">pacs.002 メッセージは、金融機関が以前に送信した支払指図のステータスを報告するために送信します。支払メッセージ内の個々の取引について、確認、拒否、または保留中のステータス情報を提供します。</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ja/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">金融機関間顧客口座振替</td>
          <td class="decision-matrix-table__overview">pacs.003 メッセージは、顧客のダイレクトデビット指図を実行するために金融機関間で交換されます。債権者の銀行が債権者に代わって債務者の銀行から資金を回収することを可能にします。</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ja/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">支払返却</td>
          <td class="decision-matrix-table__overview">pacs.004 メッセージは、以前に決済された支払取引を返却するために使用されます。支払が適用できなかった場合、誤って送信された場合、または発信機関が取り消しを要求する場合に、資金の流れを逆転させます。</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ja/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">金融機関間支払取消</td>
          <td class="decision-matrix-table__overview">pacs.007 メッセージは、まだ決済されていない以前に送信した支払指図を取り消すため、または決済済み支払の取り消しを要求するために使用されます。pacs.004（返却）とは異なり、元の指図元エージェントが開始します。</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ja/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">金融機関間顧客信用振替</td>
          <td class="decision-matrix-table__overview">pacs.008 メッセージは、顧客に代わって資金を送金するために金融機関間で交換される中核的な支払指図です。1つ以上のクレジットトランスファー取引について、債務者、債権者、金額、および送金情報を付帯します。</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ja/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">金融機関間信用振替</td>
          <td class="decision-matrix-table__overview">pacs.009 メッセージは、顧客に代わってではなく金融機関自身の勘定でのクレジットトランスファーに使用されます。銀行間の資金移動、カバーペイメント、および流動性管理に対応します。</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ja/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">金融機関間口座振替</td>
          <td class="decision-matrix-table__overview">pacs.010 メッセージは、金融機関自身の勘定でのダイレクトデビット取引に金融機関間で使用されます。一つの機関が他の機関の口座から直接資金を回収することを可能にします。</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ja/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">金融機関間支払ステータス照会</td>
          <td class="decision-matrix-table__overview">pacs.028 メッセージは、金融機関が以前に送信した支払指図のステータスを照会するために送信します。未承諾のステータスレポートを待つことなく、支払処理の能動的な追跡を可能にします。</td>
        </tr>
    </tbody>
  </table>
</div>

## 主な比較ポイント

<div class="comparison-points-table" tabindex="0" aria-label="主な比較ポイント">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>比較</th>
        <th>主な違い</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">顧客支払いと機関間／カバー送金の違い</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">受取側からの返却と依頼側からの取消の違い</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">ステータス報告とステータス照会の違い</td>
        </tr>
    </tbody>
  </table>
</div>

## 対応メッセージページ

- [`pacs.002.001.12`](/ja/pacs.002.001.12/) — 金融機関間支払ステータス報告
- [`pacs.003.001.09`](/ja/pacs.003.001.09/) — 金融機関間顧客口座振替
- [`pacs.004.001.11`](/ja/pacs.004.001.11/) — 支払返却
- [`pacs.007.001.11`](/ja/pacs.007.001.11/) — 金融機関間支払取消
- [`pacs.008.001.13`](/ja/pacs.008.001.13/) — 金融機関間顧客信用振替
- [`pacs.009.001.10`](/ja/pacs.009.001.10/) — 金融機関間信用振替
- [`pacs.010.001.05`](/ja/pacs.010.001.05/) — 金融機関間口座振替
- [`pacs.028.001.05`](/ja/pacs.028.001.05/) — 金融機関間支払ステータス照会

