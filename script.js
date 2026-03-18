const btn = document.querySelector(".lang-selector-btn");
const menu = document.querySelector(".lang-selector-content");

btn.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

const mobileMenu = document.querySelector(".mobile-menu");
const openMenu = document.querySelector(".header-nav-btn");
const closeMenu = document.querySelector(".close-mobile-menu");

openMenu.addEventListener("click", () => {
  mobileMenu.style.left = 0;
});

closeMenu.addEventListener("click", () => {
  mobileMenu.style.left = 120 + "vw";
});

const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isOpen = content.classList.contains("open");

    // Закриваємо всі
    document.querySelectorAll(".accordion-content").forEach((c) => {
      c.classList.remove("open");
    });

    // Відкриваємо лише потрібний
    if (!isOpen) {
      content.classList.add("open");
    }
  });
});
