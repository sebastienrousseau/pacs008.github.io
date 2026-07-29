---
title: "Talaan ng pagbabago sa scheme | pacs008"
description: "Bawat pagbabago sa panuntunan na nagtatakda kung tatanggapin ang isang mensahe, nakagrupo ayon sa petsa ng bisa."
lang: tl-PH
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /tl/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# Talaan ng pagbabago sa scheme

Bawat pagbabago sa panuntunan na nagtatakda kung tatanggapin ang isang mensahe, nakagrupo ayon sa petsa ng bisa.

Nabuo mula sa rehistro ng panuntunan, set ng panuntunan `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

Mula Nobyembre 2026 lilipat ang Swift sa taunang Standards Release cycle, kaya lalago ang listahang ito taon-taon sa halip na matapos sa deadline.

Mag-subscribe: [Atom feed](/scheme-changes.xml).

## Pag-bersyon ng set ng panuntunan

Matatag ang mga pagkakakilanlan ng panuntunan sa pagitan ng maliliit na release. Ang pagbabago sa resulta ng panuntunan ay nangangailangan ng bagong bersyon ng set, para manatiling naipapa-reproduce ang ulat.

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


## Paano i-pin ang set ng panuntunan

Itinatala ng mga ulat ng pagpapatunay ang bersyon at hash ng set. Banggitin ang pareho kapag nag-uulat ng pagkakaiba, para maibalik nang eksakto ang set.
