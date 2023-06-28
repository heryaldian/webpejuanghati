// ===== NAVBAR START =====
// toggle Navbar listmenu
const navbarNav = document.querySelector(".navbar-nav");

// menu di click
document.querySelector("#list-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// click diluar sidebar untuk hilngkan list menu
const listMenu = document.querySelector("#list-menu");
const searchButton = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!listMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// toggle Search Form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// menu di click
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// ===== NAVBAR END =====
