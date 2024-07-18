document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Scroll sections
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            
            if (top >= offset && top < offset + height) {
                // Active navbar links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
                // Active sections for animation on scroll
                sec.classList.add('show-animate');
            } else {
                sec.classList.remove('show-animate');
            }
        });

        // Sticky header
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // Remove toggle icon and navbar when click navbar links (scroll)
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

    // Typing effect
    const typedTextSpan = document.querySelector(".typing");
    const textArray = ["Web Developer", "AI Enthusiast", "Software Developer"];
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);

    // Scroll to contact section on "Let's Talk" button click
    const scrollToContactBtn = document.querySelector('#scrollToContact');

    scrollToContactBtn.addEventListener('click', function(event) {
        event.preventDefault();
        
        const contactSection = document.getElementById('contact');
        
        // Scroll to the contact section
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});