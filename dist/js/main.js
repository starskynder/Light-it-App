// Select hamburger menu
const menuButton = document.querySelector(".menu__btn");

// Add click event for hamburger menu
menuButton.addEventListener("click", showHideMenu);

// Toggle navigation menu. Open it if closed, close it if opened.
function showHideMenu() {
  const mainNav = document.querySelector(".main-nav");
  mainNav.classList.toggle("js-main-nav--open");

  const ariaExpanded = menuButton.getAttribute("aria-expanded");
  console.log(ariaExpanded);

  // Change aria-expanded value accordingly to navigation opened or closed
  if (ariaExpanded === "true") {
    menuButton.setAttribute("aria-expanded", false);
  } else {
    menuButton.setAttribute("aria-expanded", true);
  }

  // Select lines of hamburger icon
  const menuLines = document.querySelectorAll(".menu-line");

  // Add class that rotate hamburger icon lines to form a cross
  menuLines.forEach(v => {
    v.classList.toggle("js-menu-line--cross");
  });
}

//Select feedback boxes
const feedbackBoxes = document.querySelectorAll(".feedback__box");

//Select feedback slideshow arrows
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

//Set index of first slide to zero and call slideshow function
let slideIndex = 0;
slideImage(slideIndex);

//Add event listener to slide-show arrows
leftArrow.addEventListener("click", () => {
  slideImage((slideIndex -= 1));
});

rightArrow.addEventListener("click", () => {
  slideImage((slideIndex += 1));
});

// Slide images on feedback slideshow
function slideImage(n) {
  if (n < 0) {
    slideIndex = feedbackBoxes.length - 1;
  }

  if (n > feedbackBoxes.length - 1) {
    slideIndex = 0;
  }

  feedbackBoxes.forEach(v => {
    v.classList.add("feedback__box--invisible");
    v.classList.remove("feedback__box--visible");
  });

  feedbackBoxes[slideIndex].classList.add("feedback__box--visible");
}
