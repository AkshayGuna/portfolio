// TOGGLE ICON NAVBAR
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// SCROLL SECTION ACTIVE LINK
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // STICKY NAVBAR
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // REMOVE NAVBAR WHEN CLICK ACTIVE LINK
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// CONTINUE TEXT CHANGINGS
let typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Coder", "Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// SCROLL REVEAL
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.skills-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-content', { origin: 'right' });