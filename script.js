// One orchestrated entrance on load, staggered slightly. No scroll-triggered
// effects, no per-card hover animations beyond the CSS button states.
document.addEventListener("DOMContentLoaded", () => {
  const targets = [
    ".hero-copy h1",
    ".hero-sub",
    ".hero-actions",
    ".hero-visual",
  ];

  targets.forEach((selector, i) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.classList.add("reveal");
    window.setTimeout(() => el.classList.add("in"), 80 + i * 110);
  });
});
