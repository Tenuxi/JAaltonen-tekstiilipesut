const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

// Valikon avaaminen mobiilissa
menu.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
    // Animoi hampurilaispalkit (valinnainen rasti-efekti)
    menu.classList.toggle('is-active');
});

// Sulje valikko kun linkkiä klikataan (mobiili)
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menuLinks.classList.remove('active');
}));

// Smooth Scroll varmistus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});