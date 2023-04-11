const menuBtn = document.getElementById("nav-toggle-btn");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenu.classList.remove("show");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// works container refactorisation

let worksContainer = document.getElementById("works-container");

const works = [];

