document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.menu-mobile .burger');
    const mobileMenu = document.querySelector('.menu-mobile ul');

    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });
});
