const menuBtn = document.getElementById('nav-toggle-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenu.classList.remove('show');

menuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('show');
});
