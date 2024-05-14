const colors = [
  '#A5DD9B',
  '#C5EBAA',
  '#F6F193',
  '#F2C18D',
  '#3E6990',
  '#FF7D8B',
  '#FFD885',
  '#D7A151',
];

const button = document.querySelector('.palette-button');
const divPalette = document.querySelector('.color-palette');
const divText = document.querySelector('.color-palette').textContent;
const letters = divText.split('');

const changeLetter = () => {
  divPalette.textContent = '';
  letters.forEach((letter) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.fontSize = `${Math.floor(Math.random() * 60) + 10}px`;
    span.style.color = colors[Math.floor(Math.random() * colors.length)];
    divPalette.appendChild(span);
  });
};

button.addEventListener('click', () => {
  changeLetter();
});
