window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#navbarResponsive");
  const toggle = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelectorAll("#navbarResponsive .nav-link");

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
});
