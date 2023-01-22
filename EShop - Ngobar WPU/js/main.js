// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika Hamburger Menu Diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};