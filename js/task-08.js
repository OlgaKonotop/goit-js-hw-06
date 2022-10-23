// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
// где имя поля будет именем свойства, а значение поля - значением свойства.
//Для доступа к элементам формы используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти значения nполей формы методом reset.

const form = document.querySelector('.login-form');

form.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    return alert('Всі поля мають бути заповнені');
  }
  const dataInput = {
    email: email.value,
    password: password.value,
  };

  console.log(dataInput);
  //  console.log(evt.currentTarget.elements);

  evt.currentTarget.reset();
}
