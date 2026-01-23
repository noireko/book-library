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
    const read = inputRead.value;
    
    const newBook = new Book(title, author, year, pages, read);

    myLibrary.push(newBook);

    console.log(myLibrary);

    inputTitle.value = "";
    inputAuthor.value = "";
    inputYear.value = "";
    inputPages.value = "";
    inputRead.value = "";
})