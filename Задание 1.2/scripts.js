const loadBtn = document.querySelector('.js-load');
const resultsContainer = document.querySelector('.js-results');

loadBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      let users = response.data;
      console.log(users);
      let layout = '';
      for (let i = 0; i < users.length; i++) {
        layout =
          layout +
          `<div class="response-container">
           <p> Имя: <span>${users[i].name}</span><p>
          <p> Телефон: <span>${users[i].phone}</span><p>
           <p> Почта: <span>${users[i].email}</span><p>
           <p> Сайт: <span>${users[i].website}</span><p>
       </div>`;
      }
      resultsContainer.innerHTML = layout;
    })
    .catch((err) => {
      resultsContainer.innerHTML = `<div class="response-container">
      <p>${err.message}<p>
      </div>`;
    });
});
