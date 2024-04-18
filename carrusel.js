const prevBtn = document.getElementById('prevBtn');
 const nextBtn = document.getElementById('nextBtn'); 
 const carouselContent = document.querySelector('#carrusel-content'); 
 const images = document.querySelectorAll('#carrusel-content img'); 
 let counter = 1;
const size = images[0].clientWidth;

carouselContent.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    counter++;
    carouselContent.style.transition = 'transform 0.5s ease-in-out';
    carouselContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        carouselContent.style.transition = 'transform 0.5s ease-in-out';
        carouselContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

carouselContent.addEventListener('transitionend', () => {
    if (images[counter].id === 'lastClone') {
        carouselContent.style.transition = 'none';
        counter = images.length - 2;
        carouselContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (images[counter].id === 'firstClone') {
        carouselContent.style.transition = 'none';
        counter = images.length - counter;
        carouselContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});