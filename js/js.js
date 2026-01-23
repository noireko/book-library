// 1- Se ingresa title, author, year, ages, read desde el input del form.
// 2- Se hace new Book dentro de la funcion tomando de parametros los inputs
// 3- Se pasa el objeto del nuevo Book a la lista de Libreria
// 4- Hacer funcion de loop que vaya colocando los datos del array en display

const title = document.getElementById("inputTitle");
const author = document.getElementById("inputAuthor");
const year = document.getElementById("inputYear");
const pages = document.getElementById("inputPages");
const read = document.getElementById("inputRead");
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
    const title = title.value;
    const author = author.value;
    const year = year.value;
    const pages = pages.value;
    const read = read.value;
    
    const newBook = new Book(title, author, year, pages, read);

    myLibrary.push(newBook);

    console.log(myLibrary);

    title.value = "";
    author.value = "";
    year.value = "";
    pages.value = "";
    read.value = "";
})