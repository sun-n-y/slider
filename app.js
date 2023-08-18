const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');

let intialValue = 0;

nextBtn.addEventListener('click', () => {
  intialValue += 100;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${intialValue}%)`;
  });
});
