const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');

let intialValue = 0;

nextBtn.addEventListener('click', () => {
  intialValue += 100;
  prevBtn.style.visibility = 'visible';
  if ((slides.length - 1) * 100 == intialValue) {
    nextBtn.style.visibility = 'hidden';
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${intialValue}%)`;
  });
});

prevBtn.addEventListener('click', () => {
  intialValue -= 100;
  nextBtn.style.visibility = 'visible';
  if (intialValue == 0) {
    prevBtn.style.visibility = 'hidden';
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${intialValue}%)`;
  });
});
