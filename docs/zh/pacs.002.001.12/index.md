---
title: pacs.002.001.12 — FI to FI Payment Status Report | 简体中文
description: pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **ISO 名称** | FIToFIPaymentStatusReportV12 |
| **注册状态** | Registered |
| **年份** | 2019 |
| **版本** | 12 |

## 概述

pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。

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

## CBPR+ 与方案背景

- 替代 MT199 和 MT 消息中字段 79 的状态叙述
- CBPR+ 要求所有支付状态通信使用 pacs.002
- 结构化原因代码取代自由文本的拒绝说明
- SWIFT gpi 追踪集成要求 pacs.002 以实现端到端透明度

## 报文流程

被指示代理（接收方）向指示代理（发送方）返回 pacs.002，以确认对所收到支付指令（如 pacs.008 或 pacs.009）的接受、结算或拒绝。

## 相关报文

- [`pacs.008.001.13`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/zh/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.028.001.05`](/zh/pacs.028.001.05/) — FI to FI Payment Status Request

