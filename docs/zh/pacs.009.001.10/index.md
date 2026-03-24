---
title: pacs.009.001.10 | 金融机构信用转账 | pacs008
description: pacs.009 消息用于金融机构自身账户间的信用转账，而非代表客户进行。它支持银行间资金调拨、覆盖支付和流动性管理。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — 金融机构信用转账

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO 名称</strong></td>
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>注册状态</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>年份</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>版本</strong></td>
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## 概述

pacs.009 消息用于金融机构自身账户间的信用转账，而非代表客户进行。它支持银行间资金调拨、覆盖支付和流动性管理。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：2025-02-27；来源链接如下。

## 关键数据要素

- **GrpHdr** — 包含消息标识和结算信息的组头
- **CdtTrfTxInf** — 包含银行间结算金额的信用转账交易信息
- **Dbtr / DbtrAgt** — 债务人机构及其代理的标识
- **Cdtr / CdtrAgt** — 债权人机构及其代理的标识
- **IntrBkSttlmAmt** — 以结算货币表示的银行间结算金额

## 业务背景

- 用于银行间自有账户转账和覆盖支付
- 支持代理行合作伙伴之间的流动性管理
- 携带通过覆盖方式结算的客户信用转账的覆盖段
- 支持金融机构之间的资金运营和融资操作

<div class="operational-matrix-table" tabindex="0" aria-label="关键数据要素 业务背景">
  <table>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>关键数据要素</th>
        <th>业务背景</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — 包含消息标识和结算信息的组头</td>
          <td class="operational-matrix-table__right">用于银行间自有账户转账和覆盖支付</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — 包含银行间结算金额的信用转账交易信息</td>
          <td class="operational-matrix-table__right">支持代理行合作伙伴之间的流动性管理</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — 债务人机构及其代理的标识</td>
          <td class="operational-matrix-table__right">携带通过覆盖方式结算的客户信用转账的覆盖段</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — 债权人机构及其代理的标识</td>
          <td class="operational-matrix-table__right">支持金融机构之间的资金运营和融资操作</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — 以结算货币表示的银行间结算金额</td>
          <td class="operational-matrix-table__right">债务人机构向债权人机构发送 pacs.009 以转移自有资金。对于覆盖方式的支付，pacs.009 提供资金调拨段，而 pacs.008 通过另一路径携带客户指令。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 与方案背景

- 在机构间转账中替代 MT202 和 MT202COV
- 覆盖方式流程将 pacs.009 与基础 pacs.008 客户指令配对
- 结构化当事方数据和 LEI 标识的要求日益增加
- SWIFT gpi 涵盖 pacs.009 以实现代理行透明度

## 报文流程

债务人机构向债权人机构发送 pacs.009 以转移自有资金。对于覆盖方式的支付，pacs.009 提供资金调拨段，而 pacs.008 通过另一路径携带客户指令。

## 版本差异表

<div class="version-diff-table" tabindex="0" aria-label="版本差异表">
  <table>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>版本范围</th>
        <th>重要原因</th>
        <th>实施要点</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">pacs008 中的当前实现</td>
          <td class="version-diff-table__takeaway">与当前项目对 FI 信用转账流程的支持范围一致。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">后续目录版本</td>
          <td class="version-diff-table__takeaway">对于代理行和补偿支付环境中的路线图规划很重要。</td>
        </tr>
    </tbody>
  </table>
</div>

## 带注释的 XML 示例

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### 字段说明

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## 比较 pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="比较 pacs.009 vs pacs.008">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>比较维度</th>
        <th>pacs.009.001.10</th>
        <th>对比报文</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主要用途</td>
          <td class="message-comparison-table__current">机构自有账户信用转账或覆盖清算环节</td>
          <td class="message-comparison-table__other">客户信用转账</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">业务负责人</td>
          <td class="message-comparison-table__current">资金 / 代理行 / 融资运营</td>
          <td class="message-comparison-table__other">客户支付运营</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">典型搭配</td>
          <td class="message-comparison-table__current">pacs.002、pacs.004 以及相关的 pacs.008 流程</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">应避免的错误假设</td>
          <td class="message-comparison-table__current">认为它只是更技术化的 pacs.008</td>
          <td class="message-comparison-table__other">认为它可以直接承载机构融资流程而无需额外设计</td>
        </tr>
    </tbody>
  </table>
</div>

## 主要参考来源

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## 相关报文
<div class="related-messages-table" tabindex="0" aria-label="相关报文">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>报文类型</th>
        <th>描述</th>
        <th>概述</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/zh/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">金融机构间客户信用转账</td>
          <td class="related-messages-table__overview">pacs.008 消息是金融机构之间交换的核心支付指令，用于代表客户转移资金。它为一笔或多笔信用转账交易携带债务人、债权人、金额和汇款信息。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融机构间支付状态报告</td>
          <td class="related-messages-table__overview">pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">金融机构直接借记</td>
          <td class="related-messages-table__overview">pacs.010 消息用于金融机构自身账户的直接借记交易。它使一个机构能够直接从另一个机构的账户中收取资金。</td>
        </tr>
    </tbody>
  </table>
</div>

