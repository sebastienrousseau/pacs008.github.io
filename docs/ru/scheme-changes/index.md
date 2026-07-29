---
title: "Журнал изменений схем | pacs008"
description: "Каждое изменение правила, определяющее приём сообщения, сгруппировано по дате вступления в силу."
lang: ru-RU
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /ru/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# Журнал изменений схем

Каждое изменение правила, определяющее приём сообщения, сгруппировано по дате вступления в силу.

Сформировано из реестра правил, набор `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

С ноября 2026 года Swift переходит на ежегодный цикл Standards Release, поэтому список будет пополняться каждый год, а не завершится на сроке.

Подписаться: [Atom feed](/scheme-changes.xml).

## Версионирование набора правил

Идентификаторы правил стабильны между минорными выпусками. Изменение результата правила требует новой версии набора, чтобы отчёт оставался воспроизводимым.

### 2027-11-01

- `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments (chaps-uk, error) *(announced, not yet enforced)*
- `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS (chaps-uk, error) *(announced, not yet enforced)*

### 2026-11-14

- `CBPR-ADDR-001` — Fully unstructured postal address is not accepted (cbpr-plus, error)
- `CBPR-ADDR-002` — Town Name is mandatory in a structured element (cbpr-plus, error)
- `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code (cbpr-plus, error)
- `CBPR-ADDR-005` — Agent identified by BIC only is exempt (cbpr-plus, info)
- `CBPR-ADDR-006` — Message types excepted from the address requirement (cbpr-plus, info)
- `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses (chaps-uk, error)

### 2025-11-22

- `CBPR-ADDR-004` — Hybrid postal address is accepted (cbpr-plus, info)


## Как зафиксировать набор правил

Отчёты о проверке фиксируют версию и хеш набора. Указывайте оба при расхождении, чтобы восстановить точный набор.
