
// Name: Book Shelf

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.getTitle = () => "Title: " + this.title;
    this.getAuthor = () => "Author: " + this.author;
}

let PP = new Book("Pride and Prejudice", "Jane Austen");
let H = new Book("Hamlet", "William Shakespeare");
let WP = new Book("War and Peace", "Leo Tolstoy");


/* Description:

Create a Book constructor that has two properties :

Title
Author
and two methods:

A method named getTitle that returns: "Title: " + the instance title.
A method named getAuthor that returns: "Author: " + the instance author.
and instantiate this constructor by creating 3 new books:

Pride and Prejudice - Jane Austen (PP)
Hamlet - William Shakespeare (H)
War and Peace - Leo Tolstoy (WP)
Name the new object instances PP, H, and WP, respectively. */