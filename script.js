window.onscroll = function() {
    var topo = document.querySelector('.topo');
    if (window.scrollY > 50) { // Altere 50 para o valor desejado
        topo.classList.add('reduzido');
    } else {
        topo.classList.remove('reduzido');
    }
};

let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Muda de slide a cada 5 segundos
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    startSlideShow();

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', () => {
        changeSlide(-1);
        stopSlideShow();
        startSlideShow();
    });

    nextButton.addEventListener('click', () => {
        changeSlide(1);
        stopSlideShow();
        startSlideShow();
    });
});
