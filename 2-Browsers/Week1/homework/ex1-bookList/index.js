function createBookList(books) {
  const ulEl = document.createElement('ul');
  ulEl.classList.add('book-list');

  books.forEach((book) => {
    const bookTitle = document.createElement('p');
    bookTitle.textContent = `${book.title} - ${book.author}`;

    const imgEl = document.createElement('img');
    imgEl.src = `./assets/${book.url}`;
    imgEl.alt = book.title;

    const liEl = document.createElement('li');
    book.alreadyRead
      ? (liEl.style.backgroundColor = 'green')
      : (liEl.style.backgroundColor = 'red');
    liEl.appendChild(bookTitle);
    liEl.appendChild(imgEl);

    ulEl.appendChild(liEl);
  });
  return ulEl;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      url: 'the_design_of_everyday_things.jpg',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      url: 'the_most_human_human.jpg',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      url: 'the_pragmatic_programmer.jpg',
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
