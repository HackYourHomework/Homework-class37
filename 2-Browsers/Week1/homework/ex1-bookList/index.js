//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list
I'd like to display my three favorite books inside a nice webpage!
1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).
The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  const myList = document.getElementById('bookList');
  books.forEach(({ title, author, alreadyRead, src }) => {
    const newList = document.createElement('li');
    myList.appendChild(newList);
    newList.classList.add('book-list');
    const paragraph = document.createElement('p');
    newList.appendChild(paragraph);
    paragraph.textContent = `${title} written by ${author}`;
    const image = document.createElement('img');
    newList.appendChild(image);
    image.classList.add('book-cover');
    image.src = src;
    if (alreadyRead === true) {
      const theBookList = document.getElementsByClassName('book-list');
      for (let i = 0; i < theBookList.length; i++)
        theBookList[i].classList.add('read');
    } else {
      const theBookList = document.getElementsByClassName('book-list');
      for (let i = 0; i < theBookList.length; i++) {
        theBookList[i].classList.add('unread');
      }
    }
  });
}

// why this way is not working?

// function createBookList(books) {
//   const myList = document.getElementById('bookList');
//   books.forEach(({ title, author, alreadyRead, src }) => {
//     const newList = document.createElement('li');
//     myList.appendChild(newList);
//     newList.classList.add('book-list');
//     const paragraph = document.createElement('p');
//     newList.appendChild(paragraph);
//     paragraph.textContent = `${title} written by ${author}`;
//     const image = document.createElement('img');
//     newList.appendChild(image);
//     image.classList.add('book-cover');
//     image.src = src;
//     const theBookList = document.getElementsByClassName('book-list');
//     for (let i = 0; i < theBookList.length; i++) {
//       if (alreadyRead === true) {
//         theBookList[i].add('read');
//       } else {
//         theBookList[i].add('unread');
//       }
//     }
//   });
// }

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      src: 'C:Users/User/Desktop/HYF/DOM/Homework/ex1-bookList/Image/the_design_of_everyday_things.jpg',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      src: 'C:Users/User/Desktop/HYF/DOM/Homework/ex1-bookList/Image/the_most_human_human.jpg',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      src: 'C:Users/User/Desktop/HYF/DOM/Homework/ex1-bookList/Image/the_pragmatic_programmer.jpg',
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
