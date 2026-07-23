(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function initReveals() {
    const elements = [...document.querySelectorAll(".reveal")];
    if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        instance.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
  }

  function initProjectThreads() {
    const threads = [...document.querySelectorAll(".project-thread")];
    threads.forEach((thread) => {
      thread.addEventListener("toggle", () => {
        if (!thread.open) return;
        threads.forEach((otherThread) => {
          if (otherThread !== thread) otherThread.open = false;
        });
      });
    });

    const cards = [...document.querySelectorAll(".project-card")];
    cards.forEach((card) => {
      const thread = card.querySelector(".project-thread");
      if (!thread) return;
      card.addEventListener("click", (event) => {
        if (event.target.closest("a, button, video, summary, input, select, textarea")) return;
        thread.open = !thread.open;
      });
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
  initReveals();
  initProjectThreads();
})();
