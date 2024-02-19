import { getQuotes } from '../api.js';

async function renderQuotes() {
  const target = document.querySelector('#quotes');
  const quotes = await getQuotes();

  quotes.forEach((quote) => {
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
      'transition',
      'duration-200',
      'hover:bg-zinc-700',
    );

    const anchor = document.createElement('a');
    anchor.href = `./quote.html?id=${quote.id}`;
    anchor.classList.add(
      'absolute',
      'h-full',
      'w-full',
      'top-0',
      'left-0',
      'z-10',
    );

    const author = document.createElement('p');
    author.classList.add('text-neutral-300');
    author.innerText = `- ${quote.author}`;

    const content = document.createElement('p');
    content.classList.add('text-xl', 'text-neutral-50');
    content.innerText = `"${quote.content}"`;

    container.appendChild(anchor);
    container.appendChild(content);
    container.appendChild(author);

    target.appendChild(container);
  });
}

renderQuotes();
