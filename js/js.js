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
const form = document.getElementById("form")

const myLibrary = [];

function Book(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
}

submitBtn.addEventListener("click", () => {
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const year = inputYear.value;
    const pages = inputPages.value;
    const read = inputRead.checked;

    const newBook = new Book(title, author, year, pages, read);

    myLibrary.push(newBook);

    console.log(myLibrary);

    inputTitle.value = "";
    inputAuthor.value = "";
    inputYear.value = "";
    inputPages.value = "";
    inputRead.value = false;

    showBook();
})

function showBook() {
    const contenedor = document.getElementById("sect-books");

    contenedor.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        const libro = myLibrary[i];

        const div = document.createElement("div");
        div.classList.add("libro");

        div.innerHTML = `
      <h3>${libro.title}</h3>
      <span>${libro.author}</span>
      <span>${libro.year}</span>
      <span>${libro.pages} pages</span>
    `;

        if (libro.read) {
            div.innerHTML += `
    <span class="leido">Leído</span>
  `;
        } else {
            div.innerHTML += `
    <span class="leido">No leído</span>
  `;
        }

        contenedor.appendChild(div);
    }
}

addBtn.addEventListener("click", () => {

})