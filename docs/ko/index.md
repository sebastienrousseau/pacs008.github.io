---
title: "pacs008 | ISO 20022 Payment Message Toolkit and API"
description: "금융기관 간 고객 신용 이체 워크플로를 위한 생성, 검증, API 오케스트레이션, 규정 준수 지원."
lang: "ko-KR"
author: "Sebastien Rousseau"
lastUpdated: true
image: "/logo.webp"
imageAlt: "pacs008"
canonical: "/ko/"
robots: "index, follow"
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "pacs008"
pageType: "home"
schemaType: "WebSite"
heroText: "ISO 20022 pacs.008 메시지 처리 자동화."
home: true
metaTitle: "pacs008"
subtitle: "금융기관 간 고객 신용 이체 워크플로를 위한 생성, 검증, API 오케스트레이션, 규정 준수 지원."
tagline: "금융기관 간 고객 신용 이체 워크플로를 위한 생성, 검증, API 오케스트레이션, 규정 준수 지원."
actionText: "pacs008 알아보기"
actionLink: "/ko/about/"
date: "2026-07-27"
news_publication_date: "2026-07-27"
item_pub_date: "2026-07-27"
last_build_date: "2026-07-27"
name: "pacs008"
short_name: "pacs008"
start_url: "/"
display: "standalone"
background_color: "#ffffff"
theme_color: "#084a53"
---

# ISO 20022 pacs.008 메시지 처리 자동화.

금융기관 간 고객 신용 이체 워크플로를 위한 생성, 검증, API 오케스트레이션, 규정 준수 지원.

## 기능

- **기능**: `pacs.008` 및 관련 pacs 메시지 정의용 XML 생성; 스키마에 대해 데이터 및 XML 검증; 자동화 워크플로를 위한 FastAPI 서비스 노출.
- **검증**: 20개의 메시지 유형별 스키마에 대한 JSON Schema 검증; 75개국을 대상으로 하는 IBAN 형식 및 체크섬 검증; 공식 ISO 20022 스키마에 대한 생성된 XML의 XSD 검증.
- **보안**: 모든 XML 파싱 작업에 대한 defusedxml을 통한 XXE 방지; 엄격한 디렉토리 허용 목록을 통한 경로 탐색 보호; GDPR 및 PCI DSS 준수를 지원하는 구조화된 JSON 로그에서의 PII 마스킹.
- **2026 대비**: CBPR+ 및 스키마 마이그레이션을 위한 구조화 및 하이브리드 우편 주소 처리; 채무자, 채권자, 에이전트 데이터 품질에 대한 강화된 검증; 레거시 및 현재 pacs.008 리비전에 걸친 버전 인식 생성.

## Installation & Quickstart

```bash
pip install pacs008
```

Read the full [API & CLI Reference](/ko/api/) and [Selection Guide](/ko/message-selection/).
