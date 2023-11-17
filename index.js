const dropdown = document.querySelectorAll('.dropdown');

for (const elem of dropdown) {
  const dropdownContent = elem.querySelector('.dropdown-content');

  elem.addEventListener('mouseover', () => {
    dropdownContent.classList.add('visible');
  });
  elem.addEventListener('mouseout', () => {
    dropdownContent.classList.remove('visible');
  });
}

const carousel = document.querySelector('.carousel');
const carouselImage = document.querySelector('.carousel-image');
const leftControl = document.querySelector('.left-control');
const rightControl = document.querySelector('.right-control');
const carouselButtonsContainer = document.querySelector(
  '.carousel-buttons-container'
);

const images = [
  'images/nyc.png',
  'images/nola.png',
  'images/paris.png',
  'images/hawaii.png',
  'images/mexico.png'
];

let pos = 0;
const len = images.length;
let interval;
carouselImage.src = images[pos];
startSlideShow();

function startSlideShow() {
  clearInterval(interval);
  interval = setInterval(() => {
    carouselImage.src = images[pos++];
    pos = pos % len;
  }, 5000);
}

leftControl.addEventListener('click', () => {
  clearInterval(interval);
  pos = (pos - 1 + len) % len;
  carouselImage.src = images[pos];
  startSlideShow();
});

rightControl.addEventListener('click', () => {
  clearInterval(interval);
  pos = (pos + 1) % len;
  carouselImage.src = images[pos];
  startSlideShow();
});

// carouselButtons
for (let i = 0; i < len; i++) {
  const button = document.createElement('div');
  button.className = 'carousel-button';
  button.textContent = i + 1;
  button.addEventListener('click', () => {
    clearInterval(interval);
    pos = i;
    carouselImage.src = images[pos];
    startSlideShow();
  });
  carouselButtonsContainer.appendChild(button);
}
