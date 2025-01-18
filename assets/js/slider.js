document.addEventListener('DOMContentLoaded', () => {
    const IMAGE_WIDTH = 800;
    const DELAY = 3000;
    const imageContainer = document.querySelector('.image-container');
    const images = document.querySelectorAll('img');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentImage = 1;
    let timeout;

    function updateImage() {
        if (currentImage > images.length) {
            currentImage = 1;
        } else if (currentImage < 1) {
            currentImage = images.length;
        }

        imageContainer.style.transform = `translateX(-${(currentImage - 1) * IMAGE_WIDTH}px)`;
        timeout = setTimeout(() => {
            currentImage++;
            updateImage();
        }, DELAY);
    }

    prev.addEventListener('click', () => {
        clearTimeout(timeout);
        currentImage--;
        updateImage();
    });

    next.addEventListener('click', () => {
        clearTimeout(timeout);
        currentImage++;
        updateImage();
    });

    updateImage();
});