const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
  if (!isOpen) {
    siteNav.querySelector("a").focus();
  }
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuButton.focus();
  }
});

function setMenuOpen(isOpen) {
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  siteNav.setAttribute("aria-hidden", String(!isOpen));
  siteNav.classList.toggle("is-open", isOpen);
}
