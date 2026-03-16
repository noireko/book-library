// 1- Se ingresa title, author, year, ages, read desde el input del form.
// 2- Se hace new Book dentro de la funcion tomando de parametros los inputs
// 3- Se pasa el objeto del nuevo Book a la lista de Libreria
// 4- Hacer funcion de loop que vaya colocando los datos del array en display

const inputTitle = document.getElementById("inputTitle");
const inputAuthor = document.getElementById("inputAuthor");
const inputYear = document.getElementById("inputYear");
const inputPages = document.getElementById("inputPages");
const inputRead = document.getElementById("inputRead");
const submitBtn = document.getElementById("agregar");
const dltBtn = document.getElementById("dltBtn");
const addBtn = document.getElementById("addBtn");
const form = document.getElementById("form");
const sectBooks = document.getElementById("sect-books")

let deleteMode = false;

class Book {
  constructor(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(id) {
    const index = this.books.findIndex(book => book.id === id);
    this.books.splice(index, 1);

  }
}

const myLibrary = new Library();

submitBtn.addEventListener("click", () => {
  const title = inputTitle.value;
  const author = inputAuthor.value;
  const year = inputYear.value;
  const pages = inputPages.value;
  const read = inputRead.checked;

  const newBook = new Book(title, author, year, pages, read);

  myLibrary.addBook(newBook);

  console.log(myLibrary);

  inputTitle.value = "";
  inputAuthor.value = "";
  inputYear.value = "";
  inputPages.value = "";
  inputRead.checked = false;

  showBook();

  form.toggleAttribute("hidden");
})

function showBook() {
  const contenedor = document.getElementById("sect-books");
  contenedor.innerHTML = "";

  for (let i = 0; i < myLibrary.books.length; i++) {
    const libro = myLibrary.books[i];

    const div = document.createElement("div");
    div.classList.add("libro");
    div.dataset.id = libro.id;

    div.innerHTML = `
      <h3>${libro.title}</h3>
      <span>${libro.author}</span>
      <span>${libro.year}</span>
      <span>${libro.pages} pages</span>
      <span class="leido">${libro.read ? "Leído" : "No leído"}</span>
      <div><button class="delete-btn" hidden>✖</button></div>
    `;

    contenedor.appendChild(div);
  }
}


addBtn.addEventListener("click", () => {
  form.toggleAttribute("hidden");
})

dltBtn.addEventListener("click", () => {
  deleteMode = !deleteMode;

  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.toggleAttribute("hidden");
  });

  dltBtn.textContent = deleteMode
    ? "Cancelar"
    : "Eliminar";
});

sectBooks.addEventListener("click", (e) => {
  if (!e.target.classList.contains("delete-btn")) return;

  const bookDiv = e.target.closest(".libro");
  const bookId = bookDiv.dataset.id;

  myLibrary.removeBook(bookId);

  showBook();
});