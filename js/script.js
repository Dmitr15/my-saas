const slides = document.querySelectorAll(".scroll-first-item");
let sliderIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[sliderIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    
    if (index >= slides.length) {
        sliderIndex = 0;
    } else if (index < 0) {
        sliderIndex = slides.length - 1;
    } else {
        sliderIndex = index;
    }
    
    slides[sliderIndex].classList.add("displaySlide");
    
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 50000);
}

function prevSlide() {
    showSlide(sliderIndex - 1);
}

function nextSlide() {
    showSlide(sliderIndex + 1);
}

document.querySelector('.button.prev').addEventListener('click', prevSlide);
document.querySelector('.button.next').addEventListener('click', nextSlide);