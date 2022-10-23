const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  if (inputEl.value.length === Number(inputEl.getAttribute('data-length'))) {
    return inputEl.classList.add('valid'), inputEl.classList.remove('invalid');
  }
  return inputEl.classList.add('invalid');
});
