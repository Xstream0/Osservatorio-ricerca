// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Eventi di esempio
const events = [
    {
        title: 'Osservazione Luna Piena',
        date: '15 Aprile 2024',
        description: 'Serata dedicata all\'osservazione della Luna piena con telescopi professionali.',
        image: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe'
    },
    {
        title: 'Corso di Astronomia Base',
        date: '1 Maggio 2024',
        description: 'Corso introduttivo all\'astronomia per principianti.',
        image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7'
    },
    {
        title: 'Notte delle Stelle Cadenti',
        date: '12 Agosto 2024',
        description: 'Osservazione delle Perseidi nel periodo di massima attività.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba'
    }
];

// Popolamento eventi
const eventsContainer = document.getElementById('events-container');
events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';
    eventCard.innerHTML = `
        <img src="${event.image}" alt="${event.title}" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: 1rem;">
            <h3>${event.title}</h3>
            <p style="color: #00a8ff;">${event.date}</p>
            <p>${event.description}</p>
        </div>
    `;
    eventsContainer.appendChild(eventCard);
});

// Galleria immagini
const galleryImages = [
    'https://images.unsplash.com/photo-1543722530-d2c3201371e7',
    'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45',
    'https://images.unsplash.com/photo-1532693322450-2cb5c511067d',
    'https://images.unsplash.com/photo-1542649761-0bdd3753c8a7'
];

// Popolamento galleria
const galleryContainer = document.getElementById('gallery-container');
galleryImages.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `<img src="${image}" alt="Immagine galleria">`;
    galleryContainer.appendChild(galleryItem);
});

// Gestione form contatti
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Qui andrebbe implementata la logica per l'invio del form
    alert('Grazie per averci contattato! Ti risponderemo al più presto.');
    contactForm.reset();
});