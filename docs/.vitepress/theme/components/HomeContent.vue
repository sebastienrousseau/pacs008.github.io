<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vitepress";
import { LOCALE_KEYS } from "../../config/seo";

const route = useRoute();

const locale = computed(() => {
  const segments = route.path.split("/").filter(Boolean);
  const first = segments[0];
  return first && LOCALE_KEYS.has(first) ? first : "en";
});

function localLink(path: string): string {
  if (locale.value === "en") return path;
  return `/${locale.value}${path}`;
}
</script>

<template>
  <section class="home-code-section" aria-label="Quick start">
    <div class="home-section-inner">
      <h2 class="home-section-title">See it in action</h2>
      <figure class="code-demo" aria-label="Code example">
        <pre><code><span class="c-comment"># Install</span>
<span class="c-prompt">$</span> pip install pacs008

<span class="c-comment"># Generate a pacs.008 message</span>
<span class="c-kw">from</span> pacs008 <span class="c-kw">import</span> Pacs008Generator

gen = Pacs008Generator()
msg = gen.create(
    debtor=<span class="c-str">"ACME Corp"</span>,
    creditor=<span class="c-str">"Global Bank"</span>,
    amount=<span class="c-num">50000.00</span>,
    currency=<span class="c-str">"EUR"</span>
)
gen.validate(msg)   <span class="c-comment"># XSD + business rules</span>
gen.to_xml(msg)     <span class="c-comment"># ISO 20022 XML</span></code></pre>
      </figure>
    </div>
  </section>

  <section class="home-deadline-banner" aria-label="Deadline notice">
    <div class="home-section-inner">
      <p class="deadline-heading">CBPR+ Structured Address Deadline &mdash; November 2026</p>
      <p class="deadline-text">
        SWIFT CBPR+ mandates structured postal addresses in all cross-border payment messages.
        <a :href="localLink('/structured-address/')">Learn how pacs008 helps you prepare &rarr;</a>
      </p>
    </div>
  </section>

  <section class="home-trust-section" aria-label="Project overview">
    <div class="home-section-inner">
      <h2 class="home-section-title">Open-source and standards-driven</h2>
      <div class="trust-grid">
        <div class="trust-item">
          <p class="trust-heading">ISO 20022 compliant</p>
          <p class="trust-text">Built against official ISO 20022 message schemas and SWIFT guidelines</p>
        </div>
        <div class="trust-item">
          <p class="trust-heading">Open source</p>
          <p class="trust-text">MIT-licensed on GitHub with full transparency and community contributions</p>
        </div>
        <div class="trust-item">
          <p class="trust-heading">Available on PyPI</p>
          <p class="trust-text">Production-ready Python package with semantic versioning</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---------- Code Section ---------- */
.home-code-section {
  background: var(--pacs-bg);
  padding: 4rem 1.5rem;
}

.home-section-inner {
  max-width: 980px;
  margin: 0 auto;
}

.home-section-title {
  font-size: 2rem;
  font-weight: 300;
  color: var(--pacs-text-primary);
  margin: 0 0 2rem;
  text-align: center;
}

.code-demo {
  background: #1b1b1f;
  border-radius: 0.618rem;
  padding: 1.5rem 2rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.code-demo pre {
  margin: 0;
  padding: 0;
  background: transparent;
}

.code-demo code {
  font-family: var(--pacs-font-mono);
  font-size: 0.9375rem;
  line-height: 1.618;
  color: #f5f5f7;
}

/* All syntax colours pass WCAG AA 4.5:1 contrast on #1b1b1f */
.c-comment { color: #929297; } /* 5.56:1 */
.c-prompt  { color: #33CFDF; } /* 9.20:1 */
.c-kw      { color: #33CFDF; } /* 9.20:1 */
.c-str     { color: #a8e6a3; } /* 11.9:1 */
.c-num     { color: #f0c674; } /* 10.8:1 */

/* ---------- Deadline Banner ---------- */
.home-deadline-banner {
  background: #e8f6f8;
  background: color-mix(in srgb, var(--pacs-theme) 12%, var(--pacs-bg));
  border-inline-start: 4px solid var(--pacs-theme-text);
  padding: 2rem 1.5rem;
}

.deadline-heading {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--pacs-text-primary);
  margin: 0 0 0.5rem;
}

.deadline-text {
  font-size: 1rem;
  line-height: 1.618;
  color: var(--pacs-text-secondary);
  margin: 0;
}

.deadline-text a {
  color: var(--pacs-theme-text);
  font-weight: 400;
  text-decoration: underline;
}

.deadline-text a:hover {
  text-decoration: none;
}

/* ---------- Trust Section ---------- */
.home-trust-section {
  background: var(--pacs-bg-secondary);
  padding: 4rem 1.5rem;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.trust-item {
  text-align: center;
}

.trust-heading {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--pacs-theme-text);
  margin: 0 0 0.5rem;
}

.trust-text {
  font-size: 1rem;
  line-height: 1.618;
  color: var(--pacs-text-secondary);
  margin: 0;
}

/* ---------- Responsive ---------- */

/* Tablet landscape / small desktop */
@media (max-width: 1068px) {
  .home-section-inner {
    max-width: 692px;
  }
}

/* Tablet portrait */
@media (max-width: 768px) {
  .home-code-section,
  .home-trust-section {
    padding: 2.5rem 1rem;
  }

  .home-section-title {
    font-size: 1.5rem;
  }

  .code-demo {
    padding: 1rem 1.25rem;
  }

  .code-demo code {
    font-size: 0.8125rem;
  }

  .trust-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .home-deadline-banner {
    padding: 1.5rem 1rem;
  }

  .deadline-heading {
    font-size: 1.125rem;
  }
}

/* Mobile portrait */
@media (max-width: 480px) {
  .trust-grid {
    grid-template-columns: 1fr;
  }

  .code-demo {
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .code-demo code {
    font-size: 0.75rem;
  }

  .home-code-section,
  .home-trust-section {
    padding: 2rem 0.75rem;
  }
}

/* ---------- Reduced Motion ---------- */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
