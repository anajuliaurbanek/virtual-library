import Book from "./Book";

export default function Shelf({ books }) {
  return (
    <div className="shelf">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
        />
      ))}
    </div>
  );
}