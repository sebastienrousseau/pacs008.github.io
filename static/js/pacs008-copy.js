/**
 * Universal Code Copy Button Component for pacs008
 * Automatically adds a sleek "Copy" button to static <pre><code> blocks,
 * ignoring interactive cards that already have custom header copy buttons.
 */

(function () {
  function initCopyButtons() {
    const codeBlocks = document.querySelectorAll("pre");

    codeBlocks.forEach(function (pre) {
      // Skip if already has a copy button, is inside an interactive card, or is an output box with custom button
      if (
        pre.querySelector(".code-copy-btn") ||
        pre.closest(".interactive-card") ||
        pre.id === "xml-output" ||
        pre.id === "mt103-output" ||
        (pre.parentElement && pre.parentElement.querySelector("button[id*='copy']"))
      ) {
        return;
      }

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
