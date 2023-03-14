const navToggleBtn = document.getElementById("mobile-nav-toggle");
const navContainerElem = document.getElementById("primary-nav");

navToggleBtn.addEventListener("click", () => {
  const isVisible = navContainerElem.dataset.visible;

  if (isVisible === "false") {
    navContainerElem.setAttribute("data-visible", "true");
    navToggleBtn.setAttribute("aria-expanded", "true");
  } else {
    navContainerElem.setAttribute("data-visible", "false");
    navToggleBtn.setAttribute("aria-expanded", "false");
  }
});
