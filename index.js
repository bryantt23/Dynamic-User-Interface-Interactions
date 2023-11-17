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

const images = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/I_Love_New_York.svg/640px-I_Love_New_York.svg.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSusaLWXTaYu4RG2BbtIwwNKQ7HA-veYa6rRhBApGsDVlyzPtgqoorG4AccMMMjc1mdgug&usqp=CAU',
  'https://cdn-icons-png.flaticon.com/512/502/502491.png',
  'https://static.thenounproject.com/png/47170-200.png',
  'https://static-00.iconduck.com/assets.00/mexico-icon-2048x1536-24o5xpfv.png'
];

let pos = 0;
const len = images.length;
let interval = setInterval(() => {
  carouselImage.src = images[pos++];
  pos = pos % len;
}, 5000);
