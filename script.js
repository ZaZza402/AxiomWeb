/**
 * AxiomWeb - script.js
 * * This file contains the main JavaScript functionality for the AxiomWeb site.
 * * Contents:
 * 1. Sticky Header
 * 2. Mobile Navigation Toggle
 * 3. AOS (Animate On Scroll) Initialization
 * 4. Testimonial Carousel (Swiper.js)
 * 5. Portfolio Modal Logic
 */

document.addEventListener('DOMContentLoaded', function() {

    // 1. Sticky Header
    // Adds a 'scrolled' class to the header when the page is scrolled down.
    const header = document.querySelector('.sticky-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 2. Mobile Navigation Toggle
    // Toggles the 'active' class on the navigation links for mobile view.
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Optional: change icon on toggle
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 3. AOS (Animate On Scroll) Initialization
    // Initializes the AOS library for scroll animations.
    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: true, // whether animation should happen only once - while scrolling down
        offset: 50, // offset (in px) from the original trigger point
    });

    // 4. Testimonial Carousel (Swiper.js)
    // Initializes the Swiper instance for the testimonial carousel.
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (testimonialCarousel) {
        new Swiper('.testimonial-carousel', {
            // Optional parameters
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    
    // 5. Portfolio Modal Logic
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    const modal = document.getElementById('portfolio-modal');
    const modalBody = modal ? modal.querySelector('.modal-body') : null;
    const closeModal = modal ? modal.querySelector('.close-modal') : null;

    // Placeholder data for portfolio projects. In a real application,
    // this would likely come from a database or a CMS.
    const portfolioData = {
        1: {
            title: "La Barberia Stilosa",
            image: "images/barber-at-work.jpg",
            description: "Un sito vetrina elegante e moderno per una barberia di lusso. Il focus è sulle immagini di alta qualità e sulla facilità di prenotazione. Il design responsive assicura un'esperienza utente perfetta su ogni dispositivo, dal cellulare al desktop.",
            link: "#"
        },
        2: {
            title: "Ristorante La Brace",
            image: "images/interno-ris.jpg",
            description: "Sito web per un ristorante tipico, con un menu digitale interattivo e una galleria fotografica dei piatti. L'integrazione con Google Maps facilita la localizzazione del ristorante da parte dei clienti.",
            link: "#"
        },
        3: {
            title: "Studio Design Interni",
            image: "images/sog-moderno.jpg",
            description: "Un portfolio online minimalista e raffinato per uno studio di interior design. Il layout a griglia mette in risalto i progetti, con schede dettagliate per ogni lavoro completato. La palette di colori neutri riflette lo stile dello studio.",
            link: "#"
        },
        4: {
            title: "Clean Service Srl",
            image: "images/pulizia.jpg",
            description: "Sito web aziendale professionale per un'impresa di pulizie. La struttura è chiara e intuitiva, con una sezione dedicata ai servizi offerti e un form di contatto per richiedere preventivi personalizzati.",
            link: "#"
        },
        5: {
            title: "Palestra PowerFit",
            image: "images/palestra.jpg",
            description: "Un sito dinamico per una palestra, con una tabella orari dei corsi facile da consultare e aggiornare. L'integrazione con i social media permette di mostrare le ultime novità e gli eventi direttamente sulla homepage.",
            link: "#"
        },
        6: {
            title: "Legno & Passione",
            image: "images/artigiano.jpg",
            description: "Un piccolo e-commerce per un artigiano del legno. Il sito permette di vendere creazioni uniche online, con un sistema di pagamento sicuro e una gestione semplice degli ordini. Il design rustico richiama la natura del prodotto.",
            link: "#"
        }
    };

    if (modal) {
        portfolioCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.dataset.projectId;
                const data = portfolioData[projectId];

                if (data) {
                    modalBody.innerHTML = `
                        <img src="${data.image}" alt="${data.title}">
                        <h2>${data.title}</h2>
                        <p>${data.description}</p>
                        <a href="${data.link}" class="btn btn-primary" target="_blank">Visita il Sito</a>
                    `;
                    modal.style.display = 'block';
                }
            });
        });

        // Close modal actions
        const close = () => {
            modal.style.display = 'none';
            modalBody.innerHTML = ''; // Clear content
        };

        closeModal.addEventListener('click', close);

        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                close();
            }
        });

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                close();
            }
        });
    }

});
