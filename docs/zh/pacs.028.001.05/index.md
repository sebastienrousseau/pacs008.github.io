---
title: pacs.028.001.05 | 金融机构间支付状态请求 | pacs008
description: pacs.028 消息由金融机构发送，用于查询先前发送的支付指令的状态。它无需等待主动推送的状态报告，即可实现对支付处理的主动追踪。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — 金融机构间支付状态请求

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## 概述

pacs.028 消息由金融机构发送，用于查询先前发送的支付指令的状态。它无需等待主动推送的状态报告，即可实现对支付处理的主动追踪。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：2025-02-27；来源链接如下。

## 关键数据要素

- **GrpHdr** — 包含消息标识和创建时间戳的组头
- **TxInf** — 标识待查询支付的交易信息
- **OrgnlGrpInf** — 引用源消息的原始组信息
- **OrgnlInstrId** — 来自源支付的原始指令标识
- **OrgnlEndToEndId** — 用于可追溯性的原始端到端标识

## 业务背景

- 支持对在途支付指令进行主动状态查询
- 帮助运营团队调查延迟或丢失的支付
- 通过主动发起状态通信而非被动等待来补充 pacs.002
- 用于异常处理和 SLA 监控工作流

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
          <td class="operational-matrix-table__right">支持对在途支付指令进行主动状态查询</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — 标识待查询支付的交易信息</td>
          <td class="operational-matrix-table__right">帮助运营团队调查延迟或丢失的支付</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — 引用源消息的原始组信息</td>
          <td class="operational-matrix-table__right">通过主动发起状态通信而非被动等待来补充 pacs.002</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — 来自源支付的原始指令标识</td>
          <td class="operational-matrix-table__right">用于异常处理和 SLA 监控工作流</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — 用于可追溯性的原始端到端标识</td>
          <td class="operational-matrix-table__right">指示代理向被指示代理发送 pacs.028 以请求特定支付的状态。被指示代理以包含当前处理状态的 pacs.002 进行响应。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 与方案背景

- 替代 MT199 状态查询模式和手动 SWIFT 消息查询
- CBPR+ 支持与原始消息标识符关联的结构化状态请求
- 基于 UETR 的 gpi 追踪减少了手动查询的需求
- 日益集成到自动化支付运营仪表板中

## 报文流程

指示代理向被指示代理发送 pacs.028 以请求特定支付的状态。被指示代理以包含当前处理状态的 pacs.002 进行响应。

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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">pacs008 中的当前实现</td>
          <td class="version-diff-table__takeaway">适用于当前的状态查询建模。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">后续目录版本</td>
          <td class="version-diff-table__takeaway">请检查更新的目录版本，以支持未来的互操作规划。</td>
        </tr>
    </tbody>
  </table>
</div>

## 带注释的 XML 示例

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### 字段说明

- `MsgId`: 查询请求本身需要一个与底层付款区分开的、可审计的标识。
- `OrgnlInstrId`: 请使用原始指令中的精确源标识，以最大化匹配准确性。
- `OrgnlEndToEndId`: 加入面向客户的可追踪性有助于运营团队更快完成查询对账。

## 比较 pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="比较 pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>比较维度</th>
        <th>pacs.028.001.05</th>
        <th>对比报文</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主要用途</td>
          <td class="message-comparison-table__current">请求状态</td>
          <td class="message-comparison-table__other">报告状态</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">由谁发起交互</td>
          <td class="message-comparison-table__current">请求状态的机构</td>
          <td class="message-comparison-table__other">发送状态的机构</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">运营姿态</td>
          <td class="message-comparison-table__current">异常驱动型查询</td>
          <td class="message-comparison-table__other">事件驱动型报告</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">应避免的错误假设</td>
          <td class="message-comparison-table__current">认为每笔付款都应例行发送此报文</td>
          <td class="message-comparison-table__other">认为它可以免除主动案例管理的需要</td>
        </tr>
    </tbody>
  </table>
</div>

## 主要参考来源

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/zh/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融机构间支付状态报告</td>
          <td class="related-messages-table__overview">pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。</td>
        </tr>
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
    </tbody>
  </table>
</div>

