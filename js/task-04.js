const refs = {
  value: document.querySelector('#value'),
  buttonDecrement: document.querySelector('button[data-action="decrement"]'),
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
};
console.log(refs.buttonDecrement.dataset.action);
console.log(refs.buttonIncrement.dataset.action);

let counterValue = 0;
console.log(counterValue);

refs.buttonDecrement.addEventListener('click', function () {
  console.log('vbcvbc');
  counterValue -= 1;
  refs.value.textContent = counterValue;
});
refs.buttonIncrement.addEventListener('click', function () {
  counterValue += 1;
  refs.value.textContent = counterValue;
});
