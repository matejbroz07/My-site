document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Odstraníme .active ze všech odkazů
                navLinks.forEach(link => link.classList.remove("active"));

                // Najdeme odpovídající odkaz podle id sekce
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }, {
        threshold: 0.5  // Aktivuje se, když je alespoň 50 % sekce viditelné
    });

    sections.forEach(section => observer.observe(section));
});
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar-nav');

    // Funkce pro změnu aktivního stavu
    function setActive(link) {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    }

    // Click event
    navbar.addEventListener('click', function (e) {
        if (e.target.classList.contains('nav-link')) {
            setActive(e.target);
        }
    });

    // Scroll event
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

// Dynamic elements
document.querySelectorAll('.card-project').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform = `
            perspective(1000px)
            rotateX(${(y - rect.height / 2) / 20}deg)
            rotateY(${-(x - rect.width / 2) / 20}deg)
            translateZ(30px)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});
// Inicializace tilt efektu
document.querySelectorAll('[data-tilt]').forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const x = e.clientX - element.offsetLeft;
        const y = e.clientY - element.offsetTop;
        element.style.transform = `perspective(1000px) rotateX(${y / 10}deg) rotateY(${x / 10}deg) scale(1.1)`;
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'none';
    });
});