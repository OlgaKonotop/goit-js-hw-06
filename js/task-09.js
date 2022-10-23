function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
const backgroundColorBody = document.querySelector('body');

changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  backgroundColorBody.style.backgroundColor = `${getRandomHexColor()}`;
  colorText.textContent = `- ${getRandomHexColor()}`;
}
