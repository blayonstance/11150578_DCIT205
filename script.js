

let currentSlide = 0;

function nextSlide() {
  if (currentSlide < 3) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateSlider();
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = 3;
  }
  updateSlider();
}
updateSlider();
function updateSlider() {
    const slider = document.querySelector('.slider');
    const slideWidth = document.querySelector('.slider').offsetWidth;
    const newPosition = -currentSlide * (slideWidth + 20); // Adjusted for margin
    slider.style.transform = `translateX(${newPosition}px)`;
  
    // Update button visibility based on current slide
    document.querySelector('.prev').style.display = currentSlide === 0 ? 'none' : 'block';
    document.querySelector('.next').style.display = currentSlide === 3 ? 'none' : 'block';
  }
  