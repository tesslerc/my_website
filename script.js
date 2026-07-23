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

  function initOpenSourceImpact() {
    const value = document.querySelector("[data-github-stars]");
    const impact = value?.closest(".open-source-impact");
    if (!value || !impact) return;

    fetch("https://api.github.com/repos/NVlabs/ProtoMotions", {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub repository request failed");
        return response.json();
      })
      .then((repository) => {
        if (!Number.isFinite(repository.stargazers_count)) throw new Error("GitHub star count missing");
        value.textContent = new Intl.NumberFormat("en-US", {
          notation: "compact",
          maximumFractionDigits: 1,
        }).format(repository.stargazers_count);
        impact.setAttribute("aria-label", `${repository.stargazers_count.toLocaleString()} ProtoMotions community stars on GitHub`);
      })
      .catch(() => {
        value.textContent = "—";
        impact.setAttribute("aria-label", "View ProtoMotions on GitHub");
      });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
  initReveals();
  initProjectThreads();
  initOpenSourceImpact();
})();
