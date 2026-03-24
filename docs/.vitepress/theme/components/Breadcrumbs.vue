<script setup lang="ts">
import { computed } from "vue";
import { useData, useRoute } from "vitepress";
import { LOCALE_HOME_LABELS, LOCALE_KEYS, slugToTitle } from "../../config/seo";
import { getUiStrings } from "../../config/i18n";

const route = useRoute();
const { frontmatter } = useData();

const localeKey = computed(() => {
  const segments = route.path.split("/").filter(Boolean);
  const first = segments[0];
  return first && LOCALE_KEYS.has(first) ? first : "en";
});

const t = computed(() => getUiStrings(localeKey.value));

function breadcrumbNameForSegment(segment: string): string {
  const known: Record<string, string> = {
    about: t.value.about,
    "message-types": t.value.messageTypes,
    "message-selection": t.value.selectionGuide,
    api: t.value.api,
    contact: t.value.contact,
    privacy: t.value.privacy,
    terms: t.value.terms,
    glossary: t.value.glossary
  };
  return known[segment] || slugToTitle(segment);
}

const items = computed(() => {
  const path = route.path.replace(/index\.html$/, "").replace(/\/+$/, "/");
  const segments = path.split("/").filter(Boolean);
  const hasLocalePrefix = segments[0] && LOCALE_KEYS.has(segments[0]);
  const contentSegments = hasLocalePrefix ? segments.slice(1) : segments;
  if (contentSegments.length === 0) return [];
  return contentSegments.map((segment, index) => {
    const prefixSegments = hasLocalePrefix ? [segments[0]] : [];
    const link = `/${[...prefixSegments, ...contentSegments.slice(0, index + 1)].join("/")}/`;
    const isLast = index === contentSegments.length - 1;
    const lastText = typeof frontmatter.value.breadcrumbTitle === "string" ? frontmatter.value.breadcrumbTitle : null;
    return {
      text: isLast && lastText ? lastText : breadcrumbNameForSegment(segment),
      link,
      isLast
    };
  });
});

const localePrefix = computed(() => {
  return localeKey.value === "en" ? "" : `/${localeKey.value}`;
});
</script>

<template>
  <nav v-if="items.length" class="vp-breadcrumb" :aria-label="t.breadcrumb">
    <ol>
      <li><a :href="localePrefix ? `${localePrefix}/` : '/'">{{ LOCALE_HOME_LABELS[localePrefix.slice(1)] ?? "Home" }}</a></li>
      <li v-for="item in items" :key="item.link">
        <span class="sep" aria-hidden="true">›</span>
        <a v-if="!item.isLast" :href="item.link">{{ item.text }}</a>
        <span v-else class="current" aria-current="page">{{ item.text }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.vp-breadcrumb {
  margin: 0 0 1rem;
  font-size: 13px;
}

.vp-breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.vp-breadcrumb a {
  color: var(--pacs-link);
  text-decoration: none;
}

.vp-breadcrumb a:hover {
  color: var(--pacs-link-hover);
  text-decoration: underline;
}

.sep {
  margin: 0 0.35rem;
  color: var(--pacs-text-secondary);
}

.current {
  color: var(--pacs-text-secondary);
}
</style>
