---
title: pacs.007.001.11 | 金融机构间支付撤销 | pacs008
description: pacs.007 消息用于撤销先前发送但尚未结算的支付指令，或请求撤销已结算的支付。与 pacs.004（退回）不同，它由原始指示代理发起。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — 金融机构间支付撤销

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## 概述

pacs.007 消息用于撤销先前发送但尚未结算的支付指令，或请求撤销已结算的支付。与 pacs.004（退回）不同，它由原始指示代理发起。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：2025-02-27；来源链接如下。

## 关键数据要素

- **GrpHdr** — 包含消息标识和创建时间戳的组头
- **TxInf** — 包含撤销金额和当事方信息的交易信息
- **OrgnlGrpInf** — 引用源消息的原始组信息
- **RvslRsnInf** — 包含结构化原因代码的撤销原因信息
- **OrgnlTxRef** — 用于端到端可追溯性的原始交易参考

## 业务背景

- 当原始发送方在结算前或结算后发现错误时发起
- 用于需要快速撤销的欺诈场景
- 支持对原始支付金额的全额和部分撤销
- 携带结构化撤销原因代码以供下游处理

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — 包含消息标识和创建时间戳的组头</td>
          <td class="operational-matrix-table__right">当原始发送方在结算前或结算后发现错误时发起</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — 包含撤销金额和当事方信息的交易信息</td>
          <td class="operational-matrix-table__right">用于需要快速撤销的欺诈场景</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — 引用源消息的原始组信息</td>
          <td class="operational-matrix-table__right">支持对原始支付金额的全额和部分撤销</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — 包含结构化原因代码的撤销原因信息</td>
          <td class="operational-matrix-table__right">携带结构化撤销原因代码以供下游处理</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — 用于端到端可追溯性的原始交易参考</td>
          <td class="operational-matrix-table__right">指示代理（原始发送方）通过支付链向前发送 pacs.007 以撤销先前指示的支付。每个代理处理撤销指令并相应调整结算。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 与方案背景

- 与 pacs.004 通过方向区分 — 撤销从发起方向前流动，退回从收款方向后流动
- CBPR+ 要求与原始消息标识符配对以实现自动匹配
- 结构化原因代码取代旧版 MT 消息中的自由文本叙述
- 在即时支付召回和欺诈防范工作流中的使用日益增加

## 报文流程

指示代理（原始发送方）通过支付链向前发送 pacs.007 以撤销先前指示的支付。每个代理处理撤销指令并相应调整结算。

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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">pacs008 中的当前实现</td>
          <td class="version-diff-table__takeaway">是构建撤销处理流程模型的良好基线。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">后续目录版本</td>
          <td class="version-diff-table__takeaway">请检查后续版本，以确认是否符合当前市场基础设施要求。</td>
        </tr>
    </tbody>
  </table>
</div>

## 带注释的 XML 示例

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### 字段说明

- `MsgId`: 撤销报文本身需要独立且可审计的安全标识符。
- `OrgnlInstrId`: 请保留原始付款参考，以避免对账链路中断。
- `RvslRsnInf`: 请使用结构化撤销原因，以便对欺诈、错误和重复付款场景采用不同路由。

## 比较 pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="比较 pacs.007 vs pacs.004">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>比较维度</th>
        <th>pacs.007.001.11</th>
        <th>对比报文</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主要用途</td>
          <td class="message-comparison-table__current">Reverse a previously instructed payment</td>
          <td class="message-comparison-table__other">Return settled funds</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Original instructing side</td>
          <td class="message-comparison-table__other">Receiving / beneficiary side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Forward through the chain</td>
          <td class="message-comparison-table__other">Back through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">最适合用于</td>
          <td class="message-comparison-table__current">处理因召回、错误或欺诈引发的撤销</td>
          <td class="message-comparison-table__other">处理清算后的退回</td>
        </tr>
    </tbody>
  </table>
</div>

## 主要参考来源

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/zh/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">金融机构间客户信用转账</td>
          <td class="related-messages-table__overview">pacs.008 消息是金融机构之间交换的核心支付指令，用于代表客户转移资金。它为一笔或多笔信用转账交易携带债务人、债权人、金额和汇款信息。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">支付退回</td>
          <td class="related-messages-table__overview">pacs.004 消息用于退回先前已结算的支付交易。当支付无法入账、被错误发送或发起机构请求召回时，它将逆转资金流向。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融机构间支付状态报告</td>
          <td class="related-messages-table__overview">pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。</td>
        </tr>
    </tbody>
  </table>
</div>

