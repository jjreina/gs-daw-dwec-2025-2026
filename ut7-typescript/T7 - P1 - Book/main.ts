// Definición de un tipo para representar un libro
class Book {
  title: string;
  author: string;
  pages: number;
  available: boolean;

  constructor(
    title: string,
    author: string,
    pages: number,
    available: boolean
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.available = available;
  }
}

// Función que imprime la información de un libro
const displayBookInfo = (book: Book): void => {
  console.log(`Título: ${book.title}`);
  console.log(`Autor: ${book.author}`);
  console.log(`Páginas: ${book.pages}`);
  console.log(`Disponible: ${book.available ? "Sí" : "No"}`);
};

// Creación de un libro
const myBook: Book = new Book(
  "El Señor de los Anillos",
  "J.R.R. Tolkien",
  1178,
  true
);

// Mostrar la información del libro
displayBookInfo(myBook);
