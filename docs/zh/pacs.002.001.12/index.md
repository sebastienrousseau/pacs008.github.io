---
title: "pacs.002.001.12 | 金融机构间支付状态报告 | pacs008"
description: pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。
lang: zh-CN
lastUpdated: true
image: /logo.svg
faq:
  - question: "pacs.002 是支付报文吗？"
    answer: "不是。它报告先前指令的状态，而不是自身转移价值。"
  - question: "pacs.002 应该替代内部工作流状态吗？"
    answer: "不应该。它应该通知这些状态，但内部案例状态仍需要自己的运营逻辑。"
---

# pacs.002.001.12 — 金融机构间支付状态报告

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## 概述

pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：2025-02-27；来源链接如下。

## 关键数据要素

- **GrpHdr** — 包含消息标识和创建时间戳的组头
- **OrgnlGrpInfAndSts** — 用于批量级别报告的原始组信息和状态
- **TxInfAndSts** — 用于各笔交易结果的交易信息和状态
- **StsRsnInf** — 包含结构化原因代码的状态原因信息
- **OrgnlTxRef** — 关联回原始指令的原始交易参考

## 业务背景

- 用于确认信用转账、直接借记和支付退回的结算，或报告拒绝
- 实现指示代理和被指示代理之间的对账
- 在 CBPR+ 流程中，确认 pacs.008 和 pacs.009 消息的处理是必需的
- 支持批量组级别和单笔交易级别的状态报告

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
          <td class="operational-matrix-table__right">用于确认信用转账、直接借记和支付退回的结算，或报告拒绝</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — 用于批量级别报告的原始组信息和状态</td>
          <td class="operational-matrix-table__right">实现指示代理和被指示代理之间的对账</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — 用于各笔交易结果的交易信息和状态</td>
          <td class="operational-matrix-table__right">在 CBPR+ 流程中，确认 pacs.008 和 pacs.009 消息的处理是必需的</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — 包含结构化原因代码的状态原因信息</td>
          <td class="operational-matrix-table__right">支持批量组级别和单笔交易级别的状态报告</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — 关联回原始指令的原始交易参考</td>
          <td class="operational-matrix-table__right">被指示代理（接收方）向指示代理（发送方）返回 pacs.002，以确认对所收到支付指令（如 pacs.008 或 pacs.009）的接受、结算或拒绝。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 与方案背景

- 替代 MT199 和 MT 消息中字段 79 的状态叙述
- CBPR+ 要求所有支付状态通信使用 pacs.002
- 结构化原因代码取代自由文本的拒绝说明
- SWIFT gpi 追踪集成要求 pacs.002 以实现端到端透明度

## 报文流程

被指示代理（接收方）向指示代理（发送方）返回 pacs.002，以确认对所收到支付指令（如 pacs.008 或 pacs.009）的接受、结算或拒绝。

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">pacs008 中的当前实现</td>
          <td class="version-diff-table__takeaway">当需要匹配当前项目模板和校验资产时使用此版本。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">后续目录版本</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## 带注释的 XML 示例

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### 字段说明

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## 比较 pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="比较 pacs.002 vs pacs.028">
  <table>
    <caption>比较 pacs.002 vs pacs.028</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>比较维度</th>
        <th>pacs.002.001.12</th>
        <th>对比报文</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主要用途</td>
          <td class="message-comparison-table__current">报告状态</td>
          <td class="message-comparison-table__other">请求状态</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">由谁发起交互</td>
          <td class="message-comparison-table__current">发送状态的机构</td>
          <td class="message-comparison-table__other">请求状态的机构</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">运营姿态</td>
          <td class="message-comparison-table__current">事件驱动型报告</td>
          <td class="message-comparison-table__other">异常驱动型查询</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">应避免的错误假设</td>
          <td class="message-comparison-table__current">认为状态报告可以取代调查处理流程</td>
          <td class="message-comparison-table__other">认为每笔付款都需要显式状态请求</td>
        </tr>
    </tbody>
  </table>
</div>

## 主要参考来源

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
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
          <td class="related-messages-table__id"><a href="/zh/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">金融机构信用转账</td>
          <td class="related-messages-table__overview">pacs.009 消息用于金融机构自身账户间的信用转账，而非代表客户进行。它支持银行间资金调拨、覆盖支付和流动性管理。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">金融机构间支付状态请求</td>
          <td class="related-messages-table__overview">pacs.028 消息由金融机构发送，用于查询先前发送的支付指令的状态。它无需等待主动推送的状态报告，即可实现对支付处理的主动追踪。</td>
        </tr>
    </tbody>
  </table>
</div>

