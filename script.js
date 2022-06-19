let myLibrary = [];
let btn = document.getElementById("submit-button");
let cardContainer = document.getElementById("card-container");
let book;
let newDiv;

// Book constructor 
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
    let imgDiv = document.createElement("span");
    let ratingAmount = parseInt(document.getElementById("rating").value);
    let ratingDiv = document.createElement("div");
    ratingDiv.style.display = "flex";
    ratingDiv.style.alignItems = "center";
    imgDiv.className = "imgRating";
    imgDiv.style.display = "flex";
    imgDiv.style.marginLeft = "5px";
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

    //  Star rating generator 
    newDiv.appendChild(ratingDiv);
    ratingDiv.appendChild(boldRating);
    ratingDiv.appendChild(imgDiv);
    for (let i = 0; i < ratingAmount; i++) {
        let imgRating = document.createElement("img");
        imgRating.src = "img/star.svg";
        imgRating.style.width = "20px";
        imgRating.style.height = "20px";
        imgDiv.append(imgRating);
    }

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