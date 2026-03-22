<script setup lang="ts">
import { computed } from "vue";
import { useData, useRoute } from "vitepress";
import { LOCALE_META, LOCALE_KEYS } from "../../config/seo";

const route = useRoute();
const { frontmatter } = useData();

function toLabel(segment: string): string {
  const map: Record<string, string> = {
    about: "About",
    "message-types": "Message Types",
    api: "API",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms"
  };
  return map[segment] || segment;
}

const items = computed(() => {
  const segments = route.path.replace(/index\.html$/, "").split("/").filter(Boolean);
  if (segments.length <= 1) return [];
  return segments.map((segment, index) => ({
    text: index === segments.length - 1 && typeof frontmatter.value.breadcrumbTitle === "string"
      ? frontmatter.value.breadcrumbTitle
      : toLabel(segment),
    link: `/${segments.slice(0, index + 1).join("/")}/`,
    isLast: index === segments.length - 1
  }));
});

const localePrefix = computed(() => {
  const segments = route.path.split("/").filter(Boolean);
  const first = segments[0];
  return first && LOCALE_KEYS.has(first) ? `/${first}` : "/en";
});
</script>

<template>
  <nav v-if="items.length" class="vp-breadcrumb" aria-label="Breadcrumb">
    <ol>
      <li><a :href="`${localePrefix}/`">{{ LOCALE_META[localePrefix.slice(1)]?.home ?? "Home" }}</a></li>
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
  list-style: none;
  margin: 0;
  padding: 0;
}

.sep {
  margin: 0 0.45rem;
  color: var(--pacs-ink-muted);
}

.current {
  color: var(--pacs-ink-muted);
}
</style>
