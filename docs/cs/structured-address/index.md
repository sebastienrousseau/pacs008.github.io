---
title: "Termín strukturovaných adres v listopadu 2026 | pacs008"
description: Jak termín strukturovaných poštovních adres SWIFT CBPR+ v listopadu 2026 ovlivňuje pacs.008 a související platební zprávy.
lang: cs-CZ
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "Provést audit současné kvality adresních údajů v záznamech dlužníků, věřitelů a agentů."
  - name: "Step 2"
    text: "Namapovat existující nestrukturovaná adresní pole na strukturovaný formát (ulice, budova, PSČ, město, země)."
  - name: "Step 3"
    text: "Přidat validaci adres do pre-generačního pipeline pomocí pacs008."
  - name: "Step 4"
    text: "Otestovat s reprezentativními platebními daty před uplynutím lhůty."
---

# Termín strukturovaných adres v listopadu 2026

SWIFT vyžaduje strukturované poštovní adresy v přeshraničních platebních zprávách od listopadu 2026. Co se mění, které zprávy jsou dotčeny a jak pacs008 pomáhá týmům s přípravou.

## Co se mění

SWIFT CBPR+ přechází z nestrukturovaných poštovních adres na strukturovaná adresní pole v přeshraničních platebních zprávách. Po uplynutí lhůty v listopadu 2026 musí adresní pole klíčových stran používat strukturovaný formát s oddělenými prvky pro název ulice, číslo budovy, poštovní směrovací číslo, město a zemi.

## Proč je to důležité

- Nestrukturované adresy zvyšují míru manuálních oprav a zpožďují přímé zpracování.
- Strukturované adresy zlepšují přesnost prověřování sankcí oddělením jména strany od lokalizačních údajů.
- Regulatorní požadavky a požadavky schémat stále více nařizují strukturovaná data pro dodržování předpisů a výkaznictví.
- Míra zamítnutí přeshraničních plateb roste, když kvalita adres nesplňuje očekávání protistrany.

## Které zprávy jsou dotčeny

- **pacs.008** — poštovní adresy dlužníka a věřitele v zákaznických úhradách.
- **pacs.009** — adresy institucí v mezibankovních úhradách a krycích platbách.
- **pacs.004** — adresy stran ve vratných platbách.
- **pacs.003** — adresy věřitele a dlužníka v přímých inkasech zákazníků.

## Jak pacs008 pomáhá

- Validuje strukturovaná a hybridní pole poštovní adresy před generováním XML.
- Označuje nestrukturované adresní údaje, které by po uplynutí lhůty neprošly.
- Podporuje jak hybridní formáty před lhůtou, tak výhradně strukturované formáty po lhůtě.
- Integruje kontroly kvality adres do CI pipeline a dávkových validačních pracovních postupů.

## Časová osa

- **Březen 2023** — SWIFT CBPR+ spuštěn s ISO 20022 pro přeshraniční platby.
- **Listopad 2025** — období koexistence platebních instrukcí MT a MX končí.
- **Listopad 2026** — požadavek na strukturovanou poštovní adresu nabývá účinnosti pro zprávy CBPR+.

## Co dělat nyní

- Provést audit současné kvality adresních údajů v záznamech dlužníků, věřitelů a agentů.
- Namapovat existující nestrukturovaná adresní pole na strukturovaný formát (ulice, budova, PSČ, město, země).
- Přidat validaci adres do pre-generačního pipeline pomocí pacs008.
- Otestovat s reprezentativními platebními daty před uplynutím lhůty.

## Reference

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

