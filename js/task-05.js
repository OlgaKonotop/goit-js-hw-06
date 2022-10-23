const refs = {
  inputEl: document.querySelector('#name-input'),
  outputEl: document.querySelector('#name-output'),
};
refs.inputEl.addEventListener('input', onSearchInput);

function onSearchInput(evt) {
  refs.outputEl.textContent = evt.currentTarget.value;

  if (!evt.currentTarget.value) {
    refs.outputEl.textContent = 'Anonymous';
  }
}
