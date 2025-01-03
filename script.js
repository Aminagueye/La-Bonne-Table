// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Gestion du formulaire de contact
    const contactForm = document.querySelector(".contactform");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Empêche le rechargement de la page
            const inputs = contactForm.querySelectorAll("input, textarea");
            let valid = true;

            inputs.forEach(input => {
                if (input.type !== "submit" && !input.value.trim()) {
                    valid = false;
                    input.classList.add("error"); // Ajouter une classe pour styliser les champs non valides
                } else {
                    input.classList.remove("error");
                }
            });

            if (valid) {
                alert("Merci pour votre message. Nous vous répondrons bientôt !");
                contactForm.reset(); // Réinitialise le formulaire
            } else {
                alert("Veuillez remplir tous les champs.");
            }
        });
    }

    // Gestion du formulaire de réservation
    const reservationForm = document.querySelector(".reservation-form"); // Assurez-vous que votre formulaire de réservation a cette classe
    if (reservationForm) {
        reservationForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const inputs = reservationForm.querySelectorAll("input, select");
            let valid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.classList.add("error");
                } else {
                    input.classList.remove("error");
                }
            });

            if (valid) {
                alert("Votre réservation a été enregistrée. Nous avons hâte de vous accueillir !");
                reservationForm.reset();
            } else {
                alert("Veuillez remplir tous les champs.");
            }
        });
    }

    // Gestion du menu burger
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("open");
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // Gestion du formulaire de réservation
    const reservationForm = document.querySelector(".reservation-form form");

    if (reservationForm) {
        reservationForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Empêche le rechargement de la page

            // Validation de base
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const date = document.getElementById("date").value.trim();
            const time = document.getElementById("time").value.trim();
            const guests = document.getElementById("guests").value;

            if (!name || !email || !phone || !date || !time || !guests) {
                alert("Veuillez remplir tous les champs obligatoires.");
                return;
            }

            // Formatage et confirmation de la réservation
            alert(
                `Votre réservation a été enregistrée avec succès !\n\n` +
                `Détails :\n` +
                `- Nom : ${name}\n` +
                `- Email : ${email}\n` +
                `- Téléphone : ${phone}\n` +
                `- Date : ${date}\n` +
                `- Heure : ${time}\n` +
                `- Nombre de personnes : ${guests}`
            );

            // Réinitialisation du formulaire
            reservationForm.reset();
        });
    }
});
