document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    const header = document.querySelector('header');

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function startSlideShow() {
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 4000); // Muda de slide a cada 4 segundos
    }

    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    startSlideShow();
});


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const header = document.querySelector('.topo');
    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    const cards = document.querySelectorAll('.card');

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function startSlideShow() {
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 4000); // Muda de slide a cada 4 segundos
    }

    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('reduzido');
        } else {
            header.classList.remove('reduzido');
        }

        // Animação dos cards
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
    });

    showSlide(currentSlide);
    startSlideShow();
    // Inicialize os cards visíveis
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.classList.add('visible');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const header = document.querySelector('.topo');
    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    const cards = document.querySelectorAll('.card, .extra-card'); // Inclua extra-cards

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function startSlideShow() {
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 4000); // Muda de slide a cada 4 segundos
    }

    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('reduzido');
        } else {
            header.classList.remove('reduzido');
        }

        // Animação dos cards
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
    });

    showSlide(currentSlide);
    startSlideShow();

    // Inicialize os cards visíveis
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.classList.add('visible');
        }
    });
});
