---
title: "Design partners | pacs008"
description: "An organisation implementing ISO 20022 payment messaging that is willing to test against real requirements and tell us where the tool falls short. Usually a bank, payment service provider, corporate treasury team or payments software vendor."
lang: en-GB
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /design-partners/
robots: "index, follow"
draft: false
noindex: false
---

# Design partners

## There are no case studies here yet

That is deliberate. This project has spent considerable effort removing claims it could not evidence, and inventing a customer story would undo that. When a case study appears on this page it will name the organisation, with their permission, and describe something that actually happened.

If you are evaluating pacs008 and want references, say so — we will tell you honestly whether any exist yet.

## What a design partner is

An organisation implementing ISO 20022 payment messaging that is willing to test against real requirements and tell us where the tool falls short. Usually a bank, payment service provider, corporate treasury team or payments software vendor.

## What we ask

- Run pacs008 against your own message profiles, not just the samples.
- Tell us which scheme rules you need that are missing, and when your deadline is.
- Report defects specifically enough to reproduce: message type, profile, effective date, and what you expected.
- Let us know if a published rule is wrong. Rule corrections take priority over features.

We do not ask for payment data. Everything can be reproduced with synthetic records, and we would rather you never send us production payloads.

## What you get

- Direct influence on which scheme rules are implemented next, and in what order.
- Advance notice of ruleset changes before they are published, so a change in pass/fail behaviour does not surprise your pipeline.
- Your rules and fixtures added to the certified fixture set, so future releases cannot silently break them.
- Attribution if you want it, and none if you do not.

## What we cannot offer

- A support contract or an availability guarantee. This is an open-source project with a small maintainer base.
- Certification. A passing validation result is not a guarantee that any counterparty or scheme operator will accept a message.
- Confidential handling of anything you send us by email. Use the security disclosure route for anything sensitive.

[Trust Centre](/trust/) · [security.txt](/security.txt)

## Implementation review

If you want a second pair of eyes on an ISO 20022 implementation rather than an ongoing relationship, that is a separate, bounded piece of work. Get in touch with the message types, schemes and deadline you are working to.

[Getting in touch](/contact/)

## Getting in touch

Open an issue or discussion in the repository, or use the contact page. Mention which schemes and message types you are implementing and what your deadline is — that tells us more than anything else.

[https://github.com/sebastienrousseau/pacs008](https://github.com/sebastienrousseau/pacs008) · [Getting in touch](/contact/)
