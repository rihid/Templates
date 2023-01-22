// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika Hmburger Menu dilkik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}
// Klik di luar humberger untuk menghilangkan nav

const humberger = document.querySelector('#humberger-menu');

document.addEventListener('click', function(e) {
    if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});