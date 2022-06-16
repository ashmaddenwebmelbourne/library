let myLibrary = [];
let btn = document.getElementById("submit-button");
let cardContainer = document.getElementById("card-container");
let book;
let newDiv;


function Book(title, author, rating, description) {
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.description = description;
}


// Function when clicking the plus sign
btn.addEventListener("click", function(event) {

    // Sets up card layout with bold text
    let deleteContainer = document.createElement("div");
    let deleteIcon = document.createElement("img");
    let boldTitle = document.createElement("b");
    let titleBold = document.createTextNode("Title: ");
    let boldAuthor = document.createElement("b");
    let authorBold = document.createTextNode("Author: ");
    let boldRating = document.createElement("b");
    let ratingBold = document.createTextNode("Rating: ");
    let boldDesc = document.createElement("b");
    let descBold = document.createTextNode("Description: ");
    deleteContainer.style.display = "flex";
    deleteContainer.style.justifyContent = "flex-end"
    deleteIcon.className = "deleteIcon";
    deleteIcon.src = "img/delete.svg"
    deleteIcon.style.width = "20px";
    deleteIcon.style.height = "20px";
    deleteContainer.appendChild(deleteIcon);
    boldTitle.appendChild(titleBold);
    boldAuthor.appendChild(authorBold);
    boldRating.appendChild(ratingBold);
    boldDesc.appendChild(descBold);
    newDiv = document.createElement("div");
    newDiv.className = "newDiv"
    cardContainer.append(newDiv);

    // Closes the modal 
    $('#Modal').modal('hide');

    // Creates the book object and adds it to array 
    book = new Book(document.getElementById("title").value, document.getElementById("author").value, parseInt(document.getElementById("rating").value), document.getElementById("description").value);
    myLibrary.push(book);

    // Assigns book object data to the card 
    newDiv.appendChild(deleteContainer);
    newDiv.appendChild(boldTitle);
    newDiv.appendChild(document.createTextNode(book.title));
    newDiv.appendChild(document.createElement("br"));
    newDiv.appendChild(boldAuthor);
    newDiv.appendChild(document.createTextNode(book.author));
    newDiv.appendChild(document.createElement("br"));
    newDiv.appendChild(boldRating);
    newDiv.appendChild(document.createTextNode(`${book.rating}/5`));
    newDiv.appendChild(document.createElement("br"));
    newDiv.appendChild(boldDesc);
    newDiv.appendChild(document.createTextNode(book.description));
    newDiv.appendChild(document.createElement("br"));

    // Clears the form input fields so users can enter a new book 
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("rating").value = 1;
    document.getElementById("description").value = "";

    // for deleting books
    let deleteLinks = document.querySelectorAll('.deleteIcon');
    for (let i = 0; i < deleteLinks.length; i++) {
        deleteLinks[i].onclick = function() {
            this.closest(".newDiv").remove();
        };
    }
});