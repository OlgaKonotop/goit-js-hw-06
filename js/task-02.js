const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const liArr = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement('li');
  li.textContent = ingredients[i];
  li.classList.add('item');
  liArr.push(li);
}

const ul = document.querySelector('#ingredients');
ul.append(...liArr);
console.log(ul);
