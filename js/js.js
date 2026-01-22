function Book(title, author, pages, red) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.red = red;
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${red}`
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet")

console.log(theHobbit.info());
