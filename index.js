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

const images = [
  'images/nyc.png',
  'images/nola.png',
  'images/paris.png',
  'images/hawaii.png',
  'images/mexico.png'
];

let pos = 0;
const len = images.length;
let interval = setInterval(() => {
  carouselImage.src = images[pos++];
  pos = pos % len;
}, 5000);

leftControl.addEventListener('click', () => {
  carouselImage.src = images[pos--];
  pos = pos % len;
});

rightControl.addEventListener('click', () => {
  carouselImage.src = images[pos++];
  pos = pos + len;
});
