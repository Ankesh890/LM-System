document
.getElementById("book form")
.addEventListener("submit", function (event) {
    event.preventDefault();
    let bookName = document.getElementById("bookName").Value;
    let authorName = document.getElementById("authorName").Value;
    let bookDescription = document.getElementById("bookDescription").Value;
    let addedDate = document.getElementById("addedDate").Value;
    let bookcategory = document.getElementById("bookcategory").Value;
    let bookprice = document.getElementById("bookprice").Value);

    if(isNaN(bookprice) || bookprice <= 0) {
        alert("please enter a valid book price.");
        return;
    }

    let book = {
        bookName:bookName,
        authorName:authorName,
        bookDescription:bookDescription,
        addedDate:addedDate,
        bookcategory:bookcategory,
        bookprice:bookprice,
    };

    let books = JSON.parse(localStorage.getItem("book-list"))  || [];
    books.push(book);
    localStorage,setitem("book-list", JSON.stringify(books));

    alert("Book added successfully!");
    this,reset();
     window,location,href = "dashboard.html";
    });