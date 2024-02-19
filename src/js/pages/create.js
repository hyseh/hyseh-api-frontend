import { createQuote } from '../api.js';

const createButton = document.querySelector('#create');
createButton.addEventListener('click', (e) => {
  e.preventDefault();
  formValidation();
});

async function formValidation() {
  const author = document.querySelector('#author').value;
  const content = document.querySelector('#content').value;
  const message = document.querySelector('#message');

  if (
    author === '' ||
    author.trim() === '' ||
    content === '' ||
    content.trim() === ''
  ) {
    message.classList.remove('hidden');
  } else {
    message.classList.add('hidden');
    const data = await createQuote(author, content);
    setTimeout(() => {
      window.location = `./quote.html?id=${data.data[0].id}`;
    });
  }
}
