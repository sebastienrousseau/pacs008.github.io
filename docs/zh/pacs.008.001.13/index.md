---
title: pacs.008.001.13 | 金融机构间客户信用转账 | pacs008
description: pacs.008 消息是金融机构之间交换的核心支付指令，用于代表客户转移资金。它为一笔或多笔信用转账交易携带债务人、债权人、金额和汇款信息。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — 金融机构间客户信用转账

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>注册状态</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>年份</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>版本</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## 概述

pacs.008 消息是金融机构之间交换的核心支付指令，用于代表客户转移资金。它为一笔或多笔信用转账交易携带债务人、债权人、金额和汇款信息。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：2025-02-27；来源链接如下。

## 关键数据要素

- **GrpHdr** — 包含消息ID、创建日期、交易数量和结算信息的组头
- **CdtTrfTxInf** — 包含金额、费用和用途的信用转账交易信息
- **Dbtr / DbtrAgt** — 债务人和债务人代理的标识及账户详细信息
- **Cdtr / CdtrAgt** — 债权人和债权人代理的标识及账户详细信息
- **RmtInf** — 用于结构化或非结构化支付参考的汇款信息

## 业务背景

- 客户发起的跨境和国内信用转账的主要消息
- 在 SEPA SCT、SEPA Instant、CBPR+ 和国内清算系统中使用
- 携带结构化汇款信息以支持直通式对账
- 支持多段支付链中的串行、覆盖和直接结算方式

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — 包含消息ID、创建日期、交易数量和结算信息的组头</td>
          <td class="operational-matrix-table__right">客户发起的跨境和国内信用转账的主要消息</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — 包含金额、费用和用途的信用转账交易信息</td>
          <td class="operational-matrix-table__right">在 SEPA SCT、SEPA Instant、CBPR+ 和国内清算系统中使用</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — 债务人和债务人代理的标识及账户详细信息</td>
          <td class="operational-matrix-table__right">携带结构化汇款信息以支持直通式对账</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — 债权人和债权人代理的标识及账户详细信息</td>
          <td class="operational-matrix-table__right">支持多段支付链中的串行、覆盖和直接结算方式</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — 用于结构化或非结构化支付参考的汇款信息</td>
          <td class="operational-matrix-table__right">债务人代理创建 pacs.008 并发送至债权人代理（直接发送或通过中介机构转发）。链中的每个代理验证、丰富并转发指令，直到债权人代理将资金入账至收款人账户。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 与方案背景

- 在跨境客户信用转账中替代 MT103 和 MT103+
- 2026年11月结构化地址截止日期适用于所有当事方邮政地址
- SWIFT gpi 要求 pacs.008 以实现基于 UETR 的端到端追踪
- 13次修订反映了市场基础设施中模式的持续演进

## 报文流程

债务人代理创建 pacs.008 并发送至债权人代理（直接发送或通过中介机构转发）。链中的每个代理验证、丰富并转发指令，直到债权人代理将资金入账至收款人账户。

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">早期版本</td>
          <td class="version-diff-table__takeaway">主要适用于遗留迁移分析和版本历史背景说明。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">当前版本之前的较新版本</td>
          <td class="version-diff-table__takeaway">这些版本最有可能出现在近期迁移或共存项目中。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">当前目录版本</td>
          <td class="version-diff-table__takeaway">可用于当前版本规划，但仍需验证方案使用规则和交易对手准备情况。</td>
        </tr>
    </tbody>
  </table>
</div>

## 带注释的 XML 示例

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### 字段说明

- `MsgId`: 这里应标识消息封装本身，而不是终端客户的付款参考。
- `EndToEndId`: 如有可能，应在下游系统之间保持面向客户的可追踪性稳定一致。
- `UETR`: 在跨境和高跟踪要求环境中应始终如一地使用该字段，不要在后续流程阶段临时生成。
- `IntrBkSttlmAmt`: 在进行模式校验之前，应先按业务规则校验金额和币种。
- `Dbtr` / `Cdtr`: 参与方数据质量、地址结构和标识符通常是决定修复率的主要因素。

## 比较 pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="比较 pacs.008 vs pacs.009">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>比较维度</th>
        <th>pacs.008.001.13</th>
        <th>对比报文</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主要用途</td>
          <td class="message-comparison-table__current">客户信用转账</td>
          <td class="message-comparison-table__other">机构自有账户信用转账或覆盖清算环节</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">业务负责人</td>
          <td class="message-comparison-table__current">客户支付运营</td>
          <td class="message-comparison-table__other">资金 / 代理行 / 融资运营</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">典型搭配</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002、pacs.004，以及有时相关联的 pacs.008 流程</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">应避免的错误假设</td>
          <td class="message-comparison-table__current">认为所有银行间转账都应归入这里</td>
          <td class="message-comparison-table__other">认为它可以替代客户信用转账指令</td>
        </tr>
    </tbody>
  </table>
</div>

## 主要参考来源

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## 支持的版本

<div class="message-versions-table" tabindex="0" aria-label="支持的版本">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>版本</th>
        <th></th>
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
          <td class="message-versions-table__status"><strong>当前</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/zh/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">支付退回</td>
          <td class="related-messages-table__overview">pacs.004 消息用于退回先前已结算的支付交易。当支付无法入账、被错误发送或发起机构请求召回时，它将逆转资金流向。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">金融机构信用转账</td>
          <td class="related-messages-table__overview">pacs.009 消息用于金融机构自身账户间的信用转账，而非代表客户进行。它支持银行间资金调拨、覆盖支付和流动性管理。</td>
        </tr>
    </tbody>
  </table>
</div>

