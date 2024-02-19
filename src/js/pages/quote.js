import { getQuote, deleteQuote } from '../api.js';

const param = new URLSearchParams(window.location.search);
const id = param.get('id');

async function renderQuote() {
  const target = document.querySelector('#quote');
  const quote = await getQuote(id);

  const container = document.createElement('div');
  container.classList.add(
    'relative',
    'flex',
    'flex-col',
    'gap-2',
    'rounded-md',
    'border',
    'border-zinc-600',
    'bg-zinc-800',
    'p-5',
  );

  const author = document.createElement('p');
  author.classList.add('text-neutral-300');
  author.innerText = `- ${quote.author}`;

  const content = document.createElement('p');
  content.classList.add('text-xl', 'text-neutral-50');
  content.innerText = `"${quote.content}"`;

  const wrapper = document.createElement('div');
  wrapper.classList.add('flex', 'flex-row', 'gap-2');

  const editButton = document.createElement('button');
  editButton.classList.add(
    'w-full',
    'cursor-pointer',
    'rounded-md',
    'bg-indigo-700',
    'px-3',
    'py-2',
    'text-neutral-50',
    'transition',
    'duration-200',
    'hover:bg-indigo-600',
  );
  editButton.innerText = 'Edit quote';
  editButton.addEventListener('click', () => {
    window.location = `update.html?id=${id}`;
  });

  const deleteButton = document.createElement('button');
  deleteButton.classList.add(
    'w-full',
    'cursor-pointer',
    'rounded-md',
    'bg-red-600',
    'px-3',
    'py-2',
    'text-neutral-50',
    'transition',
    'duration-200',
    'hover:bg-red-500',
  );
  deleteButton.innerText = 'Delete quote';
  deleteButton.addEventListener('click', async () => {
    const data = await deleteQuote(id);
    setTimeout(() => {
      window.location = `./index.html`;
    });
  });

  container.appendChild(content);
  container.appendChild(author);
  wrapper.appendChild(editButton);
  wrapper.appendChild(deleteButton);
  container.appendChild(wrapper);
  target.appendChild(container);
}

renderQuote();
