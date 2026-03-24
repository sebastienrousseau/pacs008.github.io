---
title: "pacs.004.001.11 | 支付退回 | pacs008"
description: pacs.004 消息用于退回先前已结算的支付交易。当支付无法入账、被错误发送或发起机构请求召回时，它将逆转资金流向。
lang: zh-CN
lastUpdated: true
image: /logo.svg
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — 支付退回

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">字段</th>
        <th scope="col">值</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO 名称</strong></td>
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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

pacs.004 消息用于退回先前已结算的支付交易。当支付无法入账、被错误发送或发起机构请求召回时，它将逆转资金流向。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：2025-02-27；来源链接如下。

## 关键数据要素

- **GrpHdr** — 包含消息标识和创建时间戳的组头
- **TxInf** — 包含退回金额和当事方信息的交易信息
- **OrgnlGrpInf** — 关联到源消息的原始组信息
- **RtrRsnInf** — 包含结构化原因代码的退回原因信息
- **OrgnlTxRef** — 用于匹配和对账的原始交易参考

## 业务背景

- 处理收款人账户无法入账时的结算后退回
- 支持发起人请求退回资金的召回场景
- 携带结构化退回原因代码以确保监管和运营透明度
- 同时适用于信用转账退回（pacs.008）和直接借记退回（pacs.003）

<div class="operational-matrix-table" tabindex="0" aria-label="关键数据要素 业务背景">
  <table>
    <caption>Key data elements and business context</caption>
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
          <td class="operational-matrix-table__right">处理收款人账户无法入账时的结算后退回</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — 包含退回金额和当事方信息的交易信息</td>
          <td class="operational-matrix-table__right">支持发起人请求退回资金的召回场景</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — 关联到源消息的原始组信息</td>
          <td class="operational-matrix-table__right">携带结构化退回原因代码以确保监管和运营透明度</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — 包含结构化原因代码的退回原因信息</td>
          <td class="operational-matrix-table__right">同时适用于信用转账退回（pacs.008）和直接借记退回（pacs.003）</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — 用于匹配和对账的原始交易参考</td>
          <td class="operational-matrix-table__right">被指示代理通过支付链返回 pacs.004 以退回先前已结算的资金。链中的每个代理处理退回并将资金退还至相关账户。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 与方案背景

- 替代 MT103 RETURN 和覆盖方式退回消息传递
- 退回原因代码在 ISO 20022 下实现标准化和机器可读
- CBPR+ 要求完整的原始交易参考数据以进行匹配
- SWIFT gpi 追踪扩展至退回交易以实现端到端可视性

## 报文流程

被指示代理通过支付链返回 pacs.004 以退回先前已结算的资金。链中的每个代理处理退回并将资金退还至相关账户。

## 版本差异表

<div class="version-diff-table" tabindex="0" aria-label="版本差异表">
  <table>
    <caption>版本差异表</caption>
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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">pacs008 中的当前实现</td>
          <td class="version-diff-table__takeaway">与当前的支付退回模板保持一致。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">后续目录版本</td>
          <td class="version-diff-table__takeaway">当范围包含方案升级或新增交易对手时，请审查后续的退回报文版本。</td>
        </tr>
    </tbody>
  </table>
</div>

## 带注释的 XML 示例

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### 字段说明

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: 原因代码的质量对于后续客户沟通和运营路由至关重要。

## 比较 pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="比较 pacs.004 vs pacs.007">
  <table>
    <caption>比较 pacs.004 vs pacs.007</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>比较维度</th>
        <th>pacs.004.001.11</th>
        <th>对比报文</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主要用途</td>
          <td class="message-comparison-table__current">Return settled funds</td>
          <td class="message-comparison-table__other">Reverse a previously instructed payment</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Receiving / beneficiary side</td>
          <td class="message-comparison-table__other">Original instructing side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Back through the chain</td>
          <td class="message-comparison-table__other">Forward through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">最适合用于</td>
          <td class="message-comparison-table__current">处理清算后的退回</td>
          <td class="message-comparison-table__other">处理因召回、错误或欺诈引发的撤销</td>
        </tr>
    </tbody>
  </table>
</div>

## 主要参考来源

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/zh/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">金融机构间客户直接借记</td>
          <td class="related-messages-table__overview">pacs.003 消息在金融机构之间交换，用于执行客户直接借记指令。它使债权人的银行能够代表债权人从债务人的银行收取资金。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融机构间支付状态报告</td>
          <td class="related-messages-table__overview">pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。</td>
        </tr>
    </tbody>
  </table>
</div>

