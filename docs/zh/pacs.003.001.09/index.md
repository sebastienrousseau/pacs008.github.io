---
title: pacs.003.001.09 | 金融机构间客户直接借记 | pacs008
description: pacs.003 消息在金融机构之间交换，用于执行客户直接借记指令。它使债权人的银行能够代表债权人从债务人的银行收取资金。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — 金融机构间客户直接借记

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
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
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## 概述

pacs.003 消息在金融机构之间交换，用于执行客户直接借记指令。它使债权人的银行能够代表债权人从债务人的银行收取资金。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：2025-02-27；来源链接如下。

## 关键数据要素

- **GrpHdr** — 包含消息标识和结算信息的组头
- **DrctDbtTxInf** — 包含金额和当事方信息的直接借记交易信息
- **Cdtr** — 债权人标识和账户详细信息
- **CdtrAgt** — 债权人代理（收款机构）标识
- **DbtrAgt** — 债务人代理（付款机构）标识

## 业务背景

- 支持 SEPA 核心方案和 B2B 直接借记方案
- 用于订阅、公共事业费和贷款偿还等经常性支付收款
- 需要债务人和债权人之间的有效授权引用
- 支持在单条消息中批量收取多笔直接借记指令

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
          <td class="operational-matrix-table__right">支持 SEPA 核心方案和 B2B 直接借记方案</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — 包含金额和当事方信息的直接借记交易信息</td>
          <td class="operational-matrix-table__right">用于订阅、公共事业费和贷款偿还等经常性支付收款</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — 债权人标识和账户详细信息</td>
          <td class="operational-matrix-table__right">需要债务人和债权人之间的有效授权引用</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — 债权人代理（收款机构）标识</td>
          <td class="operational-matrix-table__right">支持在单条消息中批量收取多笔直接借记指令</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — 债务人代理（付款机构）标识</td>
          <td class="operational-matrix-table__right">债权人代理向债务人代理发起 pacs.003 以收取资金。债务人代理验证授权、检查账户余额，并结算或退回交易。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 与方案背景

- 结构化地址和当事方标识要求同样适用于直接借记
- 授权相关数据须在2026年11月前实现完全结构化
- 在跨境流程中替代旧版 MT104 格式的直接借记格式
- 债权人方案标识的验证执行日益加强

## 报文流程

债权人代理向债务人代理发起 pacs.003 以收取资金。债务人代理验证授权、检查账户余额，并结算或退回交易。

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
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">pacs008 中的当前实现</td>
          <td class="version-diff-table__takeaway">适用于当前项目中的直接借记参考建模。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">后续目录版本</td>
          <td class="version-diff-table__takeaway">在用于全新建设前，请检查后续版本中关于授权、状态和互操作性的更新。</td>
        </tr>
    </tbody>
  </table>
</div>

## 带注释的 XML 示例

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### 字段说明

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: 直接借记能否顺利处理，往往更取决于账户和授权质量，而不是 XML 结构。

## 主要参考来源

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


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
          <td class="related-messages-table__id"><a href="/zh/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">支付退回</td>
          <td class="related-messages-table__overview">pacs.004 消息用于退回先前已结算的支付交易。当支付无法入账、被错误发送或发起机构请求召回时，它将逆转资金流向。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">金融机构间支付撤销</td>
          <td class="related-messages-table__overview">pacs.007 消息用于撤销先前发送但尚未结算的支付指令，或请求撤销已结算的支付。与 pacs.004（退回）不同，它由原始指示代理发起。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融机构间支付状态报告</td>
          <td class="related-messages-table__overview">pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。</td>
        </tr>
    </tbody>
  </table>
</div>

