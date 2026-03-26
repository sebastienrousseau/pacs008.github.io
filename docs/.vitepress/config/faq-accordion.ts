/**
 * markdown-it plugin: wraps H3 + following content in <details>/<summary>
 * for FAQ pages, enabling server-rendered accordion without client JS.
 */
import type MarkdownIt from "markdown-it";
import type Token from "markdown-it/lib/token.mjs";

export function faqAccordionPlugin(md: MarkdownIt) {
  md.core.ruler.push("faq_accordion", (state) => {
    const env = state.env as { relativePath?: string };
    const path = env.relativePath ?? "";
    if (!path.replace(/index\.md$/i, "").replace(/\/$/, "").endsWith("/faq") &&
        path !== "faq/index.md") {
      return;
    }

    const tokens = state.tokens;
    const result: Token[] = [];
    let inFaqItem = false;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (token.type === "heading_open" && token.tag === "h3") {
        // Close any open <details> before starting a new one
        if (inFaqItem) {
          const closeAnswer = new state.Token("html_block", "", 0);
          closeAnswer.content = "</div></details>\n";
          result.push(closeAnswer);
        }

        // Open <details> and <summary>
        const openDetails = new state.Token("html_block", "", 0);
        openDetails.content = '<details class="faq-item"><summary class="faq-question">';
        result.push(openDetails);

        // Push the inline content (skip the h3 open/close, keep the inline)
        const inlineToken = tokens[i + 1];
        if (inlineToken && inlineToken.type === "inline") {
          const summaryInline = new state.Token("html_block", "", 0);
          summaryInline.content = md.renderInline(inlineToken.content, state.env);
          result.push(summaryInline);
        }

        // Close summary, open answer div
        const closeSummary = new state.Token("html_block", "", 0);
        closeSummary.content = '</summary><div class="faq-answer">\n';
        result.push(closeSummary);

        // Skip h3 open, inline, h3 close (3 tokens)
        i += 2;
        inFaqItem = true;
        continue;
      }

      // Close open <details> when hitting h2 or end
      if (inFaqItem && token.type === "heading_open" && token.tag === "h2") {
        const closeAnswer = new state.Token("html_block", "", 0);
        closeAnswer.content = "</div></details>\n";
        result.push(closeAnswer);
        inFaqItem = false;
      }

      result.push(token);
    }

    // Close any trailing open <details>
    if (inFaqItem) {
      const closeAnswer = new state.Token("html_block", "", 0);
      closeAnswer.content = "</div></details>\n";
      result.push(closeAnswer);
    }

    state.tokens = result;
  });
}
