/**
 * Automatic On-Page Table of Contents (TOC) for pacs008 documentation
 */

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const article = document.querySelector(".content-body");
    if (!article) return;

    const headings = article.querySelectorAll("h2");
    if (headings.length < 3) return; // Only show TOC if 3+ h2 headings exist

    const tocBox = document.createElement("nav");
    tocBox.className = "on-page-toc";
    tocBox.setAttribute("aria-label", "On-page Table of Contents");
    tocBox.style.cssText = `
      background: var(--bg-alt);
      border: 1px solid var(--rule);
      border-radius: var(--radius);
      padding: 1.25rem;
      margin: 1.5rem 0 2.5rem 0;
    `;

    const title = document.createElement("p");
    title.style.cssText = "font-weight: 700; font-size: 0.9rem; margin-bottom: 0.75rem; color: var(--ink); text-transform: uppercase; letter-spacing: 0.05em;";
    title.innerText = "On This Page";
    tocBox.appendChild(title);

    const list = document.createElement("ul");
    list.style.cssText = "list-style: none; margin: 0; padding: 0; font-size: 0.9rem;";

    headings.forEach(function (h2, index) {
      if (!h2.id) {
        h2.id = "section-" + (index + 1);
      }

      const li = document.createElement("li");
      li.style.margin = "0.35rem 0";

      const a = document.createElement("a");
      a.href = "#" + h2.id;
      a.innerText = h2.innerText.replace(/#/g, "").trim();
      a.style.cssText = "color: var(--link); text-decoration: none;";

      a.addEventListener("mouseenter", function () { a.style.textDecoration = "underline"; });
      a.addEventListener("mouseleave", function () { a.style.textDecoration = "none"; });

      li.appendChild(a);
      list.appendChild(li);
    });

    tocBox.appendChild(list);

    // Insert TOC before first h2
    const firstH2 = headings[0];
    firstH2.parentNode.insertBefore(tocBox, firstH2);
  });
})();
