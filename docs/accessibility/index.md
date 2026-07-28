---
title: "Accessibility statement | pacs008"
description: "What pacs008.com conforms to, what has been tested, the accessibility problems we currently know about, and when we expect to fix them."
lang: en-GB
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /accessibility/
robots: "index, follow"
draft: false
noindex: false
---

# Accessibility statement

This statement applies to pacs008.com. It was last reviewed on
2026-07-28.

## Conformance target

We aim to meet **WCAG 2.2 Level AA**. We do not currently claim full
conformance, because parts of the site have not been tested with assistive
technology. The known gaps are listed below rather than omitted.

## What has been tested

| Area | Method | Status |
|---|---|---|
| WCAG 2.2 A/AA rule scan (axe-core) | Automated, every test run | Passing |
| Landmarks, headings, skip link | Automated, every build | Passing |
| Document language and direction | Automated, all 28 locales | Passing |
| Form control labels and accessible names | Automated (axe) | Passing |
| Touch target size (44px minimum) | Automated | Passing |
| Reduced-motion preference | Automated | Passing |
| Image alternative text | Automated, every page | Passing |
| Skip link behaviour | Manual, in a real browser | Passing |
| Visible focus indicator | Manual, in a real browser | Passing |
| Right-to-left layout (Arabic) | Manual, in a real browser | Passing — no horizontal overflow |
| Colour contrast | **Not covered by the automated scan** | Design review only |
| Full keyboard traversal | Attempted; could not be driven reliably | **Unknown** |
| Screen readers (NVDA, VoiceOver, TalkBack) | Not tested | **Unknown** |
| 400% zoom and 320px reflow | Attempted; viewport could not be resized | **Unknown** |
| Windows high-contrast mode | Not tested | **Unknown** |

The axe-core scan runs against the built HTML for one page per template and
per script direction, including right-to-left and CJK locales. It found two
critical defects when first introduced — an unlabelled file input and a select
element with no accessible name, both in the workbench — which have been
fixed.

Automated scanning is a floor, not a ceiling. It cannot tell you whether a
page is usable.

## Known problems

1. **Colour contrast is not automatically verified.** The scan runs without a
   real layout engine, so contrast cannot be computed. Rather than run the rule
   against unstyled markup and report a meaningless pass, it is disabled and
   listed here. Contrast is currently checked by design review only.
2. **No assistive-technology testing has been performed.** Screen reader,
   keyboard-only and voice-input paths are untested. We therefore cannot claim
   they work.
3. **Right-to-left rendering has not been reviewed by a native reader.** A
   browser check of the Arabic homepage confirms `dir="rtl"` applies, the
   navigation mirrors correctly and there is no horizontal overflow. That
   establishes the layout is not broken. It does not establish that the
   typography, line breaking or terminology read well to an Arabic or Hebrew
   speaker, and we do not claim it does.
4. **Workbench results are not fully specified for screen readers.** The
   validation results region announces status, but the findings tables, the
   batch readiness report and the XML inspection output have not been tested
   with a screen reader.
5. **Interior pages are not minified**, which does not affect conformance but
   does affect load time on slow connections.

## What we are doing about it

| Problem | Owner | Target |
|---|---|---|
| Automated WCAG scanning | Maintainer | **Done** — axe-core, every test run |
| Colour contrast in an automated run | Maintainer | Needs a real browser runner |
| Keyboard and screen-reader pass on critical paths | Maintainer | Before 14 November 2026 |
| RTL visual review by a native reader | Needs a contributor | Unscheduled |
| Workbench findings screen-reader review | Maintainer | With the next workbench change |

## If something does not work for you

Accessibility problems are treated as defects, not enhancements. Report them
through the [contact page](/contact/) or the issue tracker at
[https://github.com/sebastienrousseau/pacs008](https://github.com/sebastienrousseau/pacs008). Please say which page, which
assistive technology and which browser, and we will confirm what we can
reproduce.

## Preparation of this statement

This statement is generated from the project's own registries and reviewed
alongside them. It was last verified on 2026-07-28, and the
next review is due 2026-08-28.
