---
title: メッセージ種別 | pacs008 ISO 20022
description: サポートされている ISO 20022 pacs メッセージ定義とバージョン。 金融機関間の顧客クレジット移転ワークフロー向けの生成、検証、API オーケストレーション、コンプライアンス対応。
lang: ja-JP
lastUpdated: true
image: /logo.svg
---

# メッセージ種別

pacs008 はコアの pacs.008 メッセージ定義と、オーケストレーションおよびリコンシリエーションフローで使用される関連メッセージをカバーします。

## 含まれるサポート

<div class="message-coverage-table" tabindex="0" aria-label="含まれるサポート">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>メッセージ種別</th>
        <th>説明</th>
        <th>年</th>
        <th>概要</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/ja/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">金融機関間支払ステータス報告</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.002 メッセージは、金融機関が以前に送信した支払指図のステータスを報告するために送信します。支払メッセージ内の個々の取引について、確認、拒否、または保留中のステータス情報を提供します。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ja/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">金融機関間顧客口座振替</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.003 メッセージは、顧客のダイレクトデビット指図を実行するために金融機関間で交換されます。債権者の銀行が債権者に代わって債務者の銀行から資金を回収することを可能にします。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ja/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">支払返却</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.004 メッセージは、以前に決済された支払取引を返却するために使用されます。支払が適用できなかった場合、誤って送信された場合、または発信機関が取り消しを要求する場合に、資金の流れを逆転させます。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ja/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">金融機関間支払取消</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.007 メッセージは、まだ決済されていない以前に送信した支払指図を取り消すため、または決済済み支払の取り消しを要求するために使用されます。pacs.004（返却）とは異なり、元の指図元エージェントが開始します。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ja/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">金融機関間顧客信用振替</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">pacs.008 メッセージは、顧客に代わって資金を送金するために金融機関間で交換される中核的な支払指図です。1つ以上のクレジットトランスファー取引について、債務者、債権者、金額、および送金情報を付帯します。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ja/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">金融機関間信用振替</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.009 メッセージは、顧客に代わってではなく金融機関自身の勘定でのクレジットトランスファーに使用されます。銀行間の資金移動、カバーペイメント、および流動性管理に対応します。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ja/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">金融機関間口座振替</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.010 メッセージは、金融機関自身の勘定でのダイレクトデビット取引に金融機関間で使用されます。一つの機関が他の機関の口座から直接資金を回収することを可能にします。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ja/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">金融機関間支払ステータス照会</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.028 メッセージは、金融機関が以前に送信した支払指図のステータスを照会するために送信します。未承諾のステータスレポートを待つことなく、支払処理の能動的な追跡を可能にします。</td>
        </tr>
    </tbody>
  </table>
</div>

## 提供モデル

サポートされている各メッセージタイプにはテンプレートアセットと検証ロジックが含まれており、チームは複数のダウンストリームチャネルで生成とリグレッションテストを標準化できます。

## 適切なメッセージの選び方

メッセージカタログは、どのメッセージが処理を開始し、どれがステータスを返し、どれがフローを訂正または取り消すのかをチームが判断する際に特に重要です。

対応している pacs フローを 1 ページで比較するには、専用の[メッセージ選択ガイド](/ja/message-selection/)を参照してください。


## 2026 年の市場コンテキスト

- **SEPA SCT / SCT Inst**：pacs.008 は送金交換と即時決済処理の中心であり続けます。
- **CBPR+**：pacs.008 は MT103 スタイルのクロスボーダーペイロードをより豊富な構造化データに置き換え続けます。
- **構造化住所**：現在の市場ガイダンスは、2026 年 11 月の完全非構造化郵便住所からの切り替えを指し示しています。
- **シリアル方式と STP**：マルチレッグの銀行間チェーンは依然重要であり、ストレートスルー処理バリアントは運用効率にとって不可欠です。

## 運用機能

pacs008 はサポートされたメッセージ定義リビジョンにわたるテンプレートベースの生成と検証を提供します：

- バージョンの比較
- スキーマ更新のリグレッションテスト
- リリース前の送信決済メッセージデータの強化
- 単一のコードベースからプロダクト、オペレーション、移行チームをサポート

