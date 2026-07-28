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
| Landmarks, headings, skip link | Automated, every build | Passing |
| Document language and direction | Automated, all 28 locales | Passing |
| Colour contrast tokens | Design review | Passing |
| Touch target size (44px minimum) | Automated | Passing |
| Reduced-motion preference | Automated | Passing |
| Image alternative text | Automated, every page | Passing |
| Keyboard-only navigation | Not yet formally tested | **Unknown** |
| Screen readers (NVDA, VoiceOver, TalkBack) | Not yet tested | **Unknown** |
| 400% zoom and 320px reflow | Not yet formally tested | **Unknown** |
| Windows high-contrast mode | Not yet tested | **Unknown** |

The ssg build runs an accessibility check over every page on each build and
currently reports no failures. That check is not a substitute for manual
testing, and we do not present it as one.

## Known problems

1. **No automated accessibility scanning in CI.** The project previously
   declared `@axe-core/cli` but never ran it, and it was removed because it
   pulled vulnerable transitive dependencies. Automated scanning needs to be
   reinstated with a runner that does not require chromedriver.
2. **No assistive-technology testing has been performed.** Screen reader,
   keyboard-only and voice-input paths are untested. We therefore cannot claim
   they work.
3. **Right-to-left rendering is newly enabled.** Arabic and Hebrew pages only
   began rendering right-to-left recently. The markup is correct, but the
   visual result has not been reviewed by a reader of either language.
4. **Workbench results are not fully specified for screen readers.** The
   validation results region announces status, but the findings tables and the
   batch readiness report have not been tested with a screen reader.
5. **Interior pages are not minified**, which does not affect conformance but
   does affect load time on slow connections.

## What we are doing about it

| Problem | Owner | Target |
|---|---|---|
| Reinstate automated scanning | Maintainer | Next release |
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
