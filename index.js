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
