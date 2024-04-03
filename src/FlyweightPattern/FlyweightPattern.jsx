import { Book } from "./Book";

const books = new Map();

function createBook(name, author, isbn) {
  const isExist = books.has(isbn);

  if (isExist) {
    return books.get(isbn);
  }

  const book = new Book(name, author, isbn);
  books.set(book);

  return book;
}

createBook("Book 1", "Author 1", 111);

function FlyweightPattern() {
  return (
    <div className="pattern">
      <p>Flyweight Pattern</p>
      <p>Reuse existing instances when working with identical objects</p>
    </div>
  );
}

export default FlyweightPattern;
