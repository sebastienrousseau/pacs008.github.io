`npm run audit:site` prints a JSON audit report for the generated docs site.

Current checks:
- locale-by-locale route parity and frontmatter coverage
- built-page coverage for `title`, `description`, `canonical`, and `h1`
- title and meta-description length heuristics
- English-page Flesch Reading Ease and Flesch-Kincaid Grade Level
- a few accessibility/i18n fallback checks in built HTML

Limitations:
- Flesch metrics are English-only and should not be treated as valid quality scores for non-English locales
- locale parity checks confirm structural consistency, not native-speaker copy quality
- this is a repo-side heuristic audit, not a substitute for Lighthouse, screen-reader testing, or native-speaker editorial review
