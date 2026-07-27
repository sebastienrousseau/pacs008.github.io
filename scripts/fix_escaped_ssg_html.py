#!/usr/bin/env python3
"""Repair entity-escaped HTML emitted by local ssg builds."""

from __future__ import annotations

import html as _html
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"

_ESCAPED_META_RE = re.compile(r"&lt;(?:meta|link)\b.*?(?:&gt;|>)", re.DOTALL)
_BODY_MARKER = '&lt;div lang='
_PRE_CODE_RE = re.compile(r"<(pre|code)\b[\s\S]*?</\1>", re.IGNORECASE)
_META_TAG_RE = re.compile(r"<meta\b[^>]*>")
_META_NAME_RE = re.compile(r'name=["\']?([A-Za-z0-9_.:-]+)')

_LEAKED_NAMES = frozenset(
    {
        "author",
        "description",
        "keywords",
        "viewport",
        "apple-mobile-web-app-capable",
        "apple-mobile-web-app-status-bar-style",
        "apple-mobile-web-app-title",
    }
)


def _repair_head(head: str) -> str:
    head = _ESCAPED_META_RE.sub(lambda m: _html.unescape(m.group(0)), head)
    seen: set[str] = set()

    def _dedupe(m: re.Match) -> str:
        tag = m.group(0)
        name_m = _META_NAME_RE.search(tag)
        if not name_m or name_m.group(1) not in _LEAKED_NAMES:
            return tag
        name = name_m.group(1)
        if name in seen:
            return ""
        seen.add(name)
        return tag

    return _META_TAG_RE.sub(_dedupe, head)


def _repair_body(body: str) -> str:
    if _BODY_MARKER not in body:
        # Also unescape general escaped HTML wrappers in body if present
        body = body.replace("&lt;div", "<div").replace("&lt;/div&gt;", "</div>").replace("&gt;", ">")
        return body

    zones = [(m.start(), m.end()) for m in _PRE_CODE_RE.finditer(body)]

    def _in_zone(pos: int) -> bool:
        return any(a <= pos < b for a, b in zones)

    out: list[str] = []
    pos = 0
    while True:
        start = body.find(_BODY_MARKER, pos)
        if start < 0:
            out.append(body[pos:])
            break
        if _in_zone(start):
            out.append(body[pos : start + len(_BODY_MARKER)])
            pos = start + len(_BODY_MARKER)
            continue
        end = body.find("<", start)
        if end < 0:
            end = len(body)
        out.append(body[pos:start])
        out.append(_html.unescape(body[start:end]))
        pos = end
    return "".join(out)


def repair(html_text: str) -> str:
    end = html_text.find("</head>")
    if end < 0:
        return html_text
    return _repair_head(html_text[:end]) + _repair_body(html_text[end:])


def main() -> int:
    if not PUBLIC.is_dir():
        print("fix_escaped_ssg_html: public/ missing; nothing to do.")
        return 0
    touched = 0
    for page in PUBLIC.rglob("*.html"):
        text = page.read_text(encoding="utf-8", errors="ignore")
        fixed = repair(text)
        if fixed != text:
            page.write_text(fixed, encoding="utf-8")
            touched += 1
    print(f"fix_escaped_ssg_html: repaired {touched} page(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
