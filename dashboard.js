document.addEventListener("DOMConentLoaded", function ()
const bookcountElement = document.getElementById("book-count");
const categoryFilter = document.getElementById("categoryFilter");
const bookTableBody = document.getElementById("bookTableBody");

function displayBooks(books) {
    bookTableBody.innerHTML = "";
    books.forEach((book) => {
        const row = document.createElement("tr");
        row.innerHTML =
        <><td>${book.bookName}</td><td>${book.authorName}</td><td>${book.bookDescription}</td><td>${book.addedDate}</td>
         <td>${book.bookcategory}</td><td>${book.bookPrice}</td><td>button class
    })
}

)