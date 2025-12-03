// Definición de un tipo para representar un libro
var Book = /** @class */ (function () {
    function Book(title, author, pages, available) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.available = available;
    }
    return Book;
}());
// Función que imprime la información de un libro
var displayBookInfo = function (book) {
    console.log("T\u00EDtulo: ".concat(book.title));
    console.log("Autor: ".concat(book.author));
    console.log("P\u00E1ginas: ".concat(book.pages));
    console.log("Disponible: ".concat(book.available ? "Sí" : "No"));
};
// Creación de un libro
var myBook = new Book("El Señor de los Anillos", "J.R.R. Tolkien", 1178, true);
// Mostrar la información del libro
displayBookInfo(myBook);
