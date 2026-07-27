/**
 * Universal Code Copy Button Component for pacs008
 * Automatically adds a single "Copy" button to static <pre><code> blocks,
 * ensuring no duplicate buttons are ever created.
 */

(function () {
  function initCopyButtons() {
    const codeBlocks = document.querySelectorAll("pre");

    codeBlocks.forEach(function (pre) {
      // 1. Check if pre itself or its immediate code wrapper already has a button
      const wrapper = pre.closest(".interactive-card, .code-block, div[class*='language-'], div[class*='highlight']") || pre.parentElement;
      const contentBody = document.querySelector(".content-body") || document.body;
      
      const existingBtn = pre.querySelector("button") || 
        (wrapper && wrapper !== contentBody && wrapper !== document.body ? wrapper.querySelector("button") : null);

      if (existingBtn || pre.id === "xml-output" || pre.id === "mt103-output" || pre.dataset.hasCopyBtn === "true") {
        return;
      }

      // Mark as processed to prevent double execution
      pre.dataset.hasCopyBtn = "true";

      // Position relative for absolute button placement
      pre.style.position = "relative";

      const btn = document.createElement("button");
      btn.className = "code-copy-btn";
      btn.type = "button";
      btn.innerText = "Copy";
      btn.setAttribute("aria-label", "Copy code snippet");
      btn.style.cssText = `
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        padding: 0.25rem 0.6rem;
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--ink-soft);
        background: var(--bg-alt);
        border: 1px solid var(--rule);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
        opacity: 0.85;
        z-index: 2;
      `;

      btn.addEventListener("mouseenter", function () { btn.style.opacity = "1"; });
      btn.addEventListener("mouseleave", function () { btn.style.opacity = "0.85"; });

      btn.addEventListener("click", function () {
        const code = pre.querySelector("code") || pre;
        const text = code.innerText || code.textContent;

        navigator.clipboard.writeText(text).then(function () {
          btn.innerText = "Copied!";
          btn.style.color = "#0f766e";
          btn.style.borderColor = "#0f766e";

          setTimeout(function () {
            btn.innerText = "Copy";
            btn.style.color = "var(--ink-soft)";
            btn.style.borderColor = "var(--rule)";
          }, 2000);
        });
      });

      pre.appendChild(btn);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCopyButtons);
  } else {
    initCopyButtons();
  }
})();
