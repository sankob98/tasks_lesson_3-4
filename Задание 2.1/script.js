let form = document.querySelector('.form');
let errorMessage = document.querySelector('.error-message');

form.onsubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const input = formData.get('number');
  try {
    if (!input) {
      throw new Error('Данные не введены!');
    }
    if (isNaN(input)) {
      throw new Error('Данные не являются числом!');
    }
    if (input < 5 || input > 10) {
      throw new Error('Число должно быть больше 5 и меньше 10');
    }
  } catch (err) {
    errorMessage.innerHTML = err.message;
  } finally {
    setTimeout(() => {
      errorMessage.innerHTML = '';
    }, 2000);
  }
};
