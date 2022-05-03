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

const getImages = [
  "./assets/the_design_of_everyday_things.jpg",
  "./assets/the_most_human_human.jpg",
  "./assets/the_pragmatic_programmer.jpg",
];

let imageIndex = 0;

function createBookList(books) {
  const createUlElement = document.createElement("ul");
  createUlElement.classList.add("ul-flex");

  books.forEach((book) => {
    const createList = document.createElement("li");
    createList.classList.add("li");

    const createParagraph = document.createElement("p");
    createParagraph.textContent = `${book.title} - ${book.author}`;

    const createImgElement = document.createElement("img");
    createImgElement.classList.add("image");
    createImgElement.src = "./assets/the_design_of_everyday_things.jpg";
    createImgElement.alt = "book cover";
    createImgElement.src = getImages[imageIndex];
    imageIndex++

    if (book.alreadyRead === true) {
      createList.style.background = "green";
    } else {
      createList.style.background = "red";
    }

    createList.append(createParagraph, createImgElement);
    createUlElement.appendChild(createList);
  })

  return createUlElement;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];
 
  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
