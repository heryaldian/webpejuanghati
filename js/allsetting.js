// ===== NAVBAR START =====
// toggle Navbar
const navbarNav = document.querySelector(".navbar-nav");

// menu di click
document.querySelector("#list-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click diluar sidebar untuk hilngkan list menu
const listMenu = document.querySelector("#list-menu");

document.addEventListener("click", function (e) {
  if (!listMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// ===== NAVBAR END =====
