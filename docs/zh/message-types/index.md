---
title: 报文类型 | pacs008 ISO 20022
description: 支持的 ISO 20022 pacs 报文定义和版本。 面向金融机构间客户信贷转账工作流的生成、校验、API 编排与合规支持。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# 报文类型

pacs008 涵盖核心 pacs.008 报文定义和编排及对账流程中使用的相关报文。

> 已于 2026 年 3 月 23 日依据本页引用的 ISO 20022、EPC 和 Swift 公共资料完成主要来源复核。

## 包含的支持

<div class="message-coverage-table" tabindex="0" aria-label="包含的支持">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-version">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>报文类型</th>
        <th>描述</th>
        <th>版本</th>
        <th>年份</th>
        <th>概述</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">金融机构间支付状态报告</td>
          <td class="message-coverage-table__version"><code>pacs.002.001.12</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">金融机构间客户直接借记</td>
          <td class="message-coverage-table__version"><code>pacs.003.001.09</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.003 消息在金融机构之间交换，用于执行客户直接借记指令。它使债权人的银行能够代表债权人从债务人的银行收取资金。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">支付退回</td>
          <td class="message-coverage-table__version"><code>pacs.004.001.11</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.004 消息用于退回先前已结算的支付交易。当支付无法入账、被错误发送或发起机构请求召回时，它将逆转资金流向。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">金融机构间支付撤销</td>
          <td class="message-coverage-table__version"><code>pacs.007.001.11</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.007 消息用于撤销先前发送但尚未结算的支付指令，或请求撤销已结算的支付。与 pacs.004（退回）不同，它由原始指示代理发起。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">金融机构间客户信用转账</td>
          <td class="message-coverage-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">pacs.008 消息是金融机构之间交换的核心支付指令，用于代表客户转移资金。它为一笔或多笔信用转账交易携带债务人、债权人、金额和汇款信息。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">金融机构信用转账</td>
          <td class="message-coverage-table__version"><code>pacs.009.001.10</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.009 消息用于金融机构自身账户间的信用转账，而非代表客户进行。它支持银行间资金调拨、覆盖支付和流动性管理。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">金融机构直接借记</td>
          <td class="message-coverage-table__version"><code>pacs.010.001.05</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.010 消息用于金融机构自身账户的直接借记交易。它使一个机构能够直接从另一个机构的账户中收取资金。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">金融机构间支付状态请求</td>
          <td class="message-coverage-table__version"><code>pacs.028.001.05</code></td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.028 消息由金融机构发送，用于查询先前发送的支付指令的状态。它无需等待主动推送的状态报告，即可实现对支付处理的主动追踪。</td>
        </tr>
    </tbody>
  </table>
</div>

## 交付模型

每种支持的报文类型都配备模板资源和验证逻辑，以便团队能够在多个下游渠道中标准化生成和回归测试。

## 如何选择合适的报文

当团队需要判断哪个报文启动流程、哪个报文反馈状态、以及哪个报文用于纠正或回退流程时，报文目录尤其重要。

如需一页式查看支持的 pacs 流程决策，请参阅专门的[报文选择指南](/zh/message-selection/)。


## 2026 市场背景

- **SEPA SCT / SCT Inst**：pacs.008 仍然是信贷转账交换和即时支付处理的核心。
- **CBPR+**：pacs.008 继续用更丰富的结构化数据替代 MT103 风格的跨境载荷。
- **结构化地址**：当前市场指引指向 2026 年 11 月从完全非结构化邮政地址的切换。
- **串行方法和 STP**：多环节银行间链仍然重要，直通处理变体对运营效率仍然至关重要。

## 运营能力

pacs008 在支持的报文定义修订版本中提供基于模板的生成和验证：

- 比较版本
- 对方案更新进行回归测试
- 在发布前加固出站支付报文数据
- 从单一代码库支持产品、运营和迁移团队

