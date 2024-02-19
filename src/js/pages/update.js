import { getQuote, updateQuote } from '../api.js';

const param = new URLSearchParams(window.location.search);
const id = param.get('id');

async function updateForm() {
  const data = await getQuote(id);
  const author = document.querySelector('#author');
  const content = document.querySelector('#content');
  content.value = data.content;
  author.value = data.author;
}

updateForm();

const updateButton = document.querySelector('#update');
updateButton.addEventListener('click', (e) => {
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
    const data = await updateQuote(id, author, content);
    setTimeout(() => {
      window.location = `./quote.html?id=${data.data[0].id}`;
    });
  }
}
