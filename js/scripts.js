window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#navbarResponsive");
  const toggle = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelectorAll("#navbarResponsive .nav-link");
  const sections = Array.from(document.querySelectorAll("section[id]"));

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    const byId = new Map(
      Array.from(navLinks).map((link) => [link.getAttribute("href")?.slice(1), link])
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = byId.get(entry.target.id);

          if (link && entry.isIntersecting) {
            navLinks.forEach((item) => item.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));
  }
});
