// Select hamburger menu
const menuButton = document.querySelector(".menu__btn");

// Add click event for hamburger menu
menuButton.addEventListener("click", showHideMenu);

// Toggle navigation menu. Open it if closed, close it if opened.
function showHideMenu() {
  const mainNav = document.querySelector(".main-nav");
  mainNav.classList.toggle("js-main-nav--open");

  // Select lines of hamburger icon
  const menuLines = document.querySelectorAll(".menu-line");

  // Add class that rotate hamburger icon lines to form a cross
  menuLines.forEach(v => {
    v.classList.toggle("js-menu-line--cross");
  });
}
