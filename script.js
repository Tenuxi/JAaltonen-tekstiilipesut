const toggleSwitch = document.querySelector('#checkbox');
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');



// Mobiilivalikko
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Sulje valikko klikattaessa linkkiä
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
}));

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            try {
                // Haetaan tiedot ja tarkistetaan että elementit löytyvät
                const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value : "";

                const data = {
                    nimi: getVal('name'),
                    sahkoposti: getVal('email'),
                    osoite: getVal('address'),
                    palvelu: getVal('service'),
                    pvm: getVal('date'),
                    viesti: getVal('message')
                };

                // Rakennetaan viesti
                const sahkopostiOsoite = "jaaltonen86@gmail.com";
                const aihe = `Tarjouspyyntö: ${data.palvelu} - ${data.nimi}`;
                const runko = `Nimi: ${data.nimi}\nSähköposti: ${data.sahkoposti}\nOsoite: ${data.osoite}\nPalvelu: ${data.palvelu}\nToivottu pvm: ${data.pvm}\n\nLisätiedot:\n${data.viesti}`;

                // Avataan sähköposti
                window.location.href = `mailto:${sahkopostiOsoite}?subject=${encodeURIComponent(aihe)}&body=${encodeURIComponent(runko)}`;

                // Tyhjennetään lomake
                contactForm.reset();

                // Näytetään kiitos-viesti
                let thanksMsg = document.getElementById('thanks-message');
                if (!thanksMsg) {
                    thanksMsg = document.createElement('div');
                    thanksMsg.id = 'thanks-message';
                    thanksMsg.innerHTML = `
                        <p style="color: #00aeef; font-weight: 700; margin-top: 20px; text-align: center; padding: 10px; border: 2px solid #00aeef; border-radius: 10px;">
                            ✓ Kiitos! Sähköpostiohjelmasi avautuu nyt.
                        </p>`;
                    contactForm.appendChild(thanksMsg);
                }
            } catch (error) {
                console.error("Lomakkeen lähetyksessä tapahtui virhe:", error);
            }
        });
    }
});