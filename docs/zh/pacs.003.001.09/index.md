---
title: pacs.003.001.09 — FI to FI Customer Direct Debit | 简体中文
description: pacs.003 消息在金融机构之间交换，用于执行客户直接借记指令。它使债权人的银行能够代表债权人从债务人的银行收取资金。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **ISO 名称** | FIToFICustomerDirectDebitV09 |
| **注册状态** | Registered |
| **年份** | 2019 |
| **版本** | 9 |

## 概述

pacs.003 消息在金融机构之间交换，用于执行客户直接借记指令。它使债权人的银行能够代表债权人从债务人的银行收取资金。

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

## CBPR+ 与方案背景

- 结构化地址和当事方标识要求同样适用于直接借记
- 授权相关数据须在2026年11月前实现完全结构化
- 在跨境流程中替代旧版 MT104 格式的直接借记格式
- 债权人方案标识的验证执行日益加强

## 报文流程

债权人代理向债务人代理发起 pacs.003 以收取资金。债务人代理验证授权、检查账户余额，并结算或退回交易。

## 相关报文

- [`pacs.004.001.11`](/zh/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/zh/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.002.001.12`](/zh/pacs.002.001.12/) — FI to FI Payment Status Report

