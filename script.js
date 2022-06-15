let myLibrary = [];
let btn = document.getElementById("submit-button");
let cardContainer = document.getElementById("card-container")
let book;
let newDiv;


function Book(title, author, rating, description) {
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.description = description;
}

btn.addEventListener("click", function(event) {
    $('#Modal').modal('hide');
    book = new Book(document.getElementById("title").value, document.getElementById("author").value, parseInt(document.getElementById("rating").value), document.getElementById("description").value);
    myLibrary.push(book);
    newDiv = document.createElement("div");
    cardContainer.appendChild(newDiv);
    newDiv.appendChild(document.createTextNode("Title: "));
    newDiv.appendChild(document.createTextNode(book.title));
    newDiv.appendChild(document.createElement("br"));
    newDiv.appendChild(document.createTextNode("Author: "));
    newDiv.appendChild(document.createTextNode(book.author));
    newDiv.appendChild(document.createElement("br"));
    newDiv.appendChild(document.createTextNode("Rating: "));
    newDiv.appendChild(document.createTextNode(book.rating));
    newDiv.appendChild(document.createElement("br"));
    newDiv.appendChild(document.createTextNode("Description: "));
    newDiv.appendChild(document.createTextNode(book.description));
});