const books = [
  {
    id: 1,
    title: "A Hora Azul",
    display: "spine",
  },
  {
    id: 2,
    title: "Story Teller",
    display: "spine",
  },
  {
    id: 3,
    title: "White Façade",
    display: "spine",
  },
];

export default function Bookshelf() {
  return (
    <div className="bookshelf">
      <div className="shelf">
        {books.map((book) => (
          <div key={book.id} className="book">
  <span>{book.title}</span>
</div>
        ))}
      </div>
    </div>
  );
}