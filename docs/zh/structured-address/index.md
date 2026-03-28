---
title: "2026年11月结构化地址截止日期 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: zh-CN
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "审计债务人、债权人和代理人记录中当前地址数据质量。"
  - name: "Step 2"
    text: "将现有非结构化地址字段映射到结构化格式（街道、建筑、邮政编码、城市、国家）。"
  - name: "Step 3"
    text: "使用 pacs008 将地址验证添加到预生成管道中。"
  - name: "Step 4"
    text: "在截止日期前使用代表性支付数据进行测试。"
---

# 2026年11月结构化地址截止日期

SWIFT 要求从2026年11月起在跨境支付报文中使用结构化邮政地址。了解哪些内容将发生变化、哪些报文受到影响，以及 pacs008 如何帮助团队做好准备。

## 正在发生什么变化

SWIFT CBPR+ 正在将跨境支付报文中的非结构化邮政地址转换为结构化地址字段。在2026年11月截止日期之后，关键方的地址字段必须使用结构化格式，包含街道名称、建筑编号、邮政编码、城市和国家的独立元素。

## 为什么重要

- 非结构化地址增加了人工修复率并延迟了直通处理。
- 结构化地址通过将当事方名称与位置数据分离来提高制裁筛查准确性。
- 监管和方案要求日益强制要求使用结构化数据以满足合规和报告需求。
- 当地址质量不符合交易对手预期时，跨境支付拒绝率会上升。

## 哪些报文受到影响

- **pacs.008** — 客户信贷转账中债务人和债权人的邮政地址。
- **pacs.009** — 金融机构间信贷转账和备付金支付中的机构地址。
- **pacs.004** — 付款退回中的当事方地址。
- **pacs.003** — 客户直接借记中的债权人和债务人地址。

## pacs008 如何提供帮助

- 在 XML 生成之前验证结构化和混合邮政地址字段。
- 标记在截止日期后将会失败的非结构化地址数据。
- 支持截止日期前的混合格式和截止日期后的纯结构化格式。
- 将地址质量检查集成到 CI 管道和批量验证工作流中。

## 时间线

- **2023年3月** — SWIFT CBPR+ 以 ISO 20022 标准上线运行跨境支付。
- **2025年11月** — MT 和 MX 支付指令的共存期结束。
- **2026年11月** — 结构化邮政地址要求对 CBPR+ 报文生效。

## 现在应该做什么

- 审计债务人、债权人和代理人记录中当前地址数据质量。
- 将现有非结构化地址字段映射到结构化格式（街道、建筑、邮政编码、城市、国家）。
- 使用 pacs008 将地址验证添加到预生成管道中。
- 在截止日期前使用代表性支付数据进行测试。

## 参考资料

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

