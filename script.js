const toggleSwitch = document.querySelector('#checkbox');
const themeLink = document.querySelector('#theme-link');
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

// Teeman vaihto liukunapilla
function switchTheme(e) {
    if (e.target.checked) {
        themeLink.href = 'dark.css';
        localStorage.setItem('theme', 'dark');
    } else {
        themeLink.href = 'light.css';
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Tarkista aiemmin tallennettu teema
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        themeLink.href = 'dark.css';
    }
}

// Mobiilivalikko
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Sulje valikko klikattaessa linkkiä
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
}));