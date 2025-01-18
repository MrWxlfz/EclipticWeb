// JavaScript for adding interactivity to Ecliptic Labs

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax Effect on Hero Section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Button Animation
const heroButton = document.querySelector('.hero button');
heroButton.addEventListener('mouseover', () => {
    heroButton.style.transform = 'scale(1.1)';
    heroButton.style.transition = 'transform 0.3s';
});

heroButton.addEventListener('mouseout', () => {
    heroButton.style.transform = 'scale(1)';
});

// Feature Cards Animation
const featureCards = document.querySelectorAll('.feature');
featureCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-15px)';
        card.style.transition = 'transform 0.3s';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});
